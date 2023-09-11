import React from "react";
import "./Greeting.css";
import NavBar from "../../Navigation/NavBar/NavBar";
import { useNavigate } from "react-router-dom";

const navs = [
  { id: 1, tag: "HOME" },
  { id: 2, tag: "RESULT" },
  { id: 3, tag: "LOGOUT" },
];

const Greeting = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("hai im handleclick");
    navigate("/login");
  };
  return (
    <>
      <div className="right-side">
        <div className="right-side-head">
          <NavBar navs={navs} />
        </div>
        {props.greet === "WELCOME" ? (
          <h1 class="w Greeting">{props.greet}</h1>
        ) : (
          <h1 class="t Greeting">{props.greet}</h1>
        )}
        {console.log(
          <button onClick={handleClick} className="enter-btn">
            ENTER
          </button>
        )}
        {props.greet === "WELCOME" && (
          <button onClick={handleClick} className="enter-btn">
            ENTER
          </button>
        )}
      </div>
    </>
  );
};

export default Greeting;
