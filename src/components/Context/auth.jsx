import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isauth , setauth] = useState(false)
  const login = ()=>{
      setauth(true)
  }
  const logout = ()=>{
      setauth(false)
  }
  return <AuthContext.Provider value={{isauth , login , logout}}>{children}</AuthContext.Provider>;
};
