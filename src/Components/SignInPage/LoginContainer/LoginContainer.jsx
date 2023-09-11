import React from "react";
import LoginInput from "../LoginInput/LoginInput";
import "./LoginContainer.css";
import Button from "../Button/Button";
import RegisterText from "../RegisterText/RegisterText";

<<<<<<< HEAD

const LoginContainer = () => {
  
 
  return (
    <form className="login-container">
      <LoginInput label="USERNAME" type="text" />
      <LoginInput label="PASSWORD" type="password" />
      <Button tag="LOGIN" />
      <RegisterText />
    </form>
=======
const LoginContainer = () => {
  return (
    <div className="login-container">
      <LoginInput label="USERNAME" type="text" />
      <LoginInput label="PASSWORD" type="password" />

      <Button tag="LOGIN" />
      <RegisterText />
    </div>
>>>>>>> 6ccfc54ccefe33969422cc98df87f867e43b7cc1
  );
};
export default LoginContainer;
