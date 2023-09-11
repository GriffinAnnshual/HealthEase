import React from "react";
import "./RegisterForm.css";
import LoginInput from "../../SignInPage/LoginInput/LoginInput";
import Button from "../../SignInPage/Button/Button";

const RegisterForm = () => {
  return (
    <div className="register-right-side">
      <form className="register-form">
        <LoginInput label="NAME" type="text" />
        <LoginInput label="AADHAR NUMBER" type="text" />
        <LoginInput label="PHONE NUMBER" type="text" />
        <LoginInput label="MENSTRUAL PERIOD" type="date" />
        <LoginInput label="PASSWORD" type="password" />
        <LoginInput label="CONFIRM PASSWORD" type="password" />
        <Button tag="REGISTER"/>
      </form>
    </div>
  );
};

export default RegisterForm;
