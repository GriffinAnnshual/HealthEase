import React from "react";
<<<<<<< HEAD
import "./Button.css";
import { useNavigate } from "react-router-dom";

const Button = (props) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (props.tag === "LOGIN" || props.tag === "REGISTER") {
      navigate("/test-1");
    } else {
      navigate("/end");
    }
  };
  return (
    <div>
      <button type="submit" class="login-btn" onClick={handleSubmit}>
        {props.tag}
      </button>
    </div>
  );
};
=======
import './Button.css'
const Button=(props)=>{
return <div>
    <button class="login-btn">{props.tag}</button>
</div>
}
>>>>>>> 6ccfc54ccefe33969422cc98df87f867e43b7cc1
export default Button;
