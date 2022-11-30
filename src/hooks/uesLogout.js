import { useEffect, useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { projectAuth } from "../Firebase/config";

export const useSignout = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { dispatch } = useAuthContext();

  const signout = async () => {
    setLoading(true);
    setError(null);
    try {
      await projectAuth.signOut();
      dispatch({ type: "LOGOUT" });
      if (!isCancelled) {
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      if (!isCancelled) {
        setError(error.message);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { error, loading, signout };
};
