import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/auth";

const RequiredAuth = ({ children }) => {
  const {isauth} = useContext(AuthContext)

  if(isauth){
    return children;
  }
  else{
    return <Navigate to="/login"></Navigate>
  }
  
};

export default RequiredAuth;
