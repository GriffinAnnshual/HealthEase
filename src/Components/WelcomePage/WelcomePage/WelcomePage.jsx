import React from "react";
import "./WelcomePage.css";
import Mother from "../Mother/Mother";
import Greeting from "../Greeting/Greeting";

<<<<<<< HEAD
const WelcomePage = (props) =>{
let greet="WELCOME";
  if(props.page){
    greet="THANK YOU";
  }
  return (
    <div class="welcome-page">
      <Mother />
      
      <Greeting greet={greet}/>
    </div>
  );
  
=======
const WelcomePage = () => {
  return (
    <div class="welcome-page">
      <Mother />
      <Greeting greet="WELCOME"/>
    </div>
  );
>>>>>>> 6ccfc54ccefe33969422cc98df87f867e43b7cc1
};
export default WelcomePage;
