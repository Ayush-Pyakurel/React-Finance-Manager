//import react hooks
import { createContext, useReducer } from "react";

export const AuthContext = createContext();

//reducer function
export const AuthReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

//Auth context provider component
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, {
    user: null,
  });

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
