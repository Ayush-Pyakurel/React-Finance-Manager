//import react hooks
import { createContext, useReducer, useEffect } from "react";
import { projectAuth } from "../Firebase/config";

export const AuthContext = createContext();

//reducer function
export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    case "AUTH_IS_READY":
      return { ...state, user: action.payload, authIsReady: true };
    default:
      return state;
  }
};

//Auth context provider component
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, {
    user: null,
    authIsReady: false,
  });

  useEffect(() => {
    //projectAuth.onAuthStateChanged returns a function; invoking which unsubscribe to the subscriptions
    const unsubscribe = projectAuth.onAuthStateChanged((user) => {
      dispatch({ type: "AUTH_IS_READY", payload: user });
      unsubscribe();
    });
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
