//import react hooks
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export const useAuthContext = () => {
  //consuming AuthContext
  const context = useContext(AuthContext);

  //this might occure when the hook is use outside the scope of AuthContextProvider
  if (!context) {
    throw new Error(
      "useAuthContext must be inside the scope of AuthContextProvider!"
    );
  }

  return context;
};
