import { useEffect, useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { projectAuth } from "../Firebase/config";

export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setLoading(() => true);
    setError(null);

    try {
      const response = await projectAuth.signInWithEmailAndPassword(
        email,
        password
      );

      dispatch({ type: "LOGIN", payload: response.user });

      if (!isCancelled) {
        setLoading(() => false);
        setError(() => false);
      }
    } catch (error) {
      if (!isCancelled) {
        setError(() => error.message);
        setLoading(() => false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { login, loading, error };
};
