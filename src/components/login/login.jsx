
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/auth";
import "./login.css"
export const Login = ()=>{
    const {login} = useContext(AuthContext)

   const [logindata , setdata] = useState({
     email:"",
     password:"",
   })
  const navigate = useNavigate()

   const [alldata , setalldata] = useState([])
   console.log(alldata);
   const handleform  = (e)=>{
     
     const {name , value} = e.target
     setdata({
       ...logindata,
       [name]:value
     })
   }

   const submitform = (e)=>{
     e.preventDefault()
     setalldata(logindata)
     login()
     navigate("/")
   }
  return (
    <div className="login_div">
        <img src="https://static.tomtop.com/tomtop/acount/icon/logo.png?v=3" alt="" />
      <form action="" >
      <input className="first_inp_box" placeholder="Email" required={true} value={logindata.email} name="email" data-cy="login-email"
      onChange={handleform} />
      <br />
            <input  className="sec_inp_box" placeholder="Passowrd" required={true} value={logindata.password} name="password"data-cy="login-password"
      onChange={handleform} />
      <br />
      <button className="login_btn"  onClick={submitform} data-cy="login-submit">Login</button>
      </form>
    </div>
  );
}