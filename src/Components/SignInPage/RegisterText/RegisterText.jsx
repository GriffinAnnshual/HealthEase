import React from "react";
import './RegisterText.css';
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";

const RegisterText=()=>{
const navigate=useNavigate();
const handleClick=()=>{
    navigate("/register");
}
return (<div className="register-text">
<p>Don't have an Account?&nbsp;&nbsp;&nbsp;<span onClick={handleClick}>Sign Up.</span></p>
=======

const RegisterText=()=>{
return (<div className="register-text">
<p>Don't have an Account?&nbsp;&nbsp;&nbsp;<span>Sign Up.</span></p>
>>>>>>> 6ccfc54ccefe33969422cc98df87f867e43b7cc1
</div>)
}
export default RegisterText;
