import React from "react";
import "./TestingStyles.css";
import Reading from "./Reading/Reading";
import NavBar from "./../Navigation/NavBar/NavBar";
import Instruction from "./Instruction/Instruction";
import { navs } from "./TestingPage1";
import { useNavigate } from "react-router-dom";
import image from "./next-page.png";
const TestingPage3 = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/test-4");
  };
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
          <Reading name="TEMPERATURE" />
        </div>
        <div class="test-right-next-page-icon-container">
            <img src={image} className="next-page-icon" alt="img" onClick={handleClick}/>
          </div>
          </div>
      </div>
    </div>
  );
};
export default TestingPage3;
