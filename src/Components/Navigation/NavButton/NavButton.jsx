import React from "react";
import './NavButton.css';
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";

const NavButton=(props)=>{
    const navigate=useNavigate();
    const handleClick=()=>{
        if(props.tag==="HOME"){
            navigate("/");
        }
        else if(props.tag==="LOGOUT"){
            navigate("/login");
        }
    }
return <button onClick={handleClick} class="nav-btn">{props.tag}</button>
=======

 
const NavButton=(props)=>{
return <p class="nav-btn">{props.tag}</p>
>>>>>>> 6ccfc54ccefe33969422cc98df87f867e43b7cc1
}
export default NavButton;