import React from "react";
import "./TestingStyles.css";
import Reading from "./Reading/Reading";
import NavBar from "./../Navigation/NavBar/NavBar";
import Instruction from "./Instruction/Instruction";
import image from "./next-page.png";
import { useNavigate } from "react-router-dom";
const navs = [
  { id: 1, tag: "HOME" },
  { id: 2, tag: "LOGOUT" },
];

const TestingPage1 = () => {
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate("/test-2")
  }
  return (
    <div class="test-page">
      <div class="test-left-side">
        <Instruction />
      </div>
      <div class="test-right-side">
        <div className="test-right-top-div">
          <NavBar navs={navs} />
        </div>
        <div className="bottom-div">
          <div class="test-right-bottom-div">
            <Reading name="HEIGHT" />
            <Reading name="WEIGHT" />
            <Reading name="BMI" />
          </div>
          <div class="test-right-next-page-icon-container">
            <img src={image} className="next-page-icon" alt="img" onClick={handleClick}/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestingPage1;
export { navs };
