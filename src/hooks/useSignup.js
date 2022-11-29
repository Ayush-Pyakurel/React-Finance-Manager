//import react hooks
import { useState } from "react";
import { projectAuth } from "../Firebase/config";

//cusotme hook
export const useSignup = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  //function to handle signup logic
  const signUp = async (email, password, username) => {
    setLoading(() => true);
    setError(() => null);

    try {
      const response = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      // console.log(response.user);

      if (!response) {
        console.log(response);
        throw new Error("Could not signup");
      }

      // eslint-disable-next-line no-lone-blocks
      {
        /*
         user.updateProfile({
         displayName: "Jane Q. User",
         photoURL: "https://example.com/jane-q-user/profile.jpg"

    */
      }
      const displayName = await response.user.updateProfile({
        displayName: username,
      });
      console.log(displayName);

      setLoading(() => false);
      setError(() => null);
    } catch (err) {
      setError(err.message);
      setLoading(() => false);
    }
  };

  return { signUp, loading, error };
};
