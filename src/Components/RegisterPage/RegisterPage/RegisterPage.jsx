import React from "react";
import RegisterPoster from "../RegisterPoster/RegisterPoster";
import './RegisterPage.css'
import RegisterForm from "../RegisterForm/RegisterForm";

const RegisterPage = () => {
  return (
    <div class="register-page">
      <RegisterPoster />
      <RegisterForm/>
    </div>
  );
};
export default RegisterPage;
