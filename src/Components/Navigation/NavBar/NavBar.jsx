import React from "react";
import "./NavBar.css";
import NavButton from "../NavButton/NavButton";

const NavBar = (props) => {
  const navs = props.navs;
  return (
    <div className="nav-container">
      {navs.map((nav) => {
        return <NavButton key={nav.id} tag={nav.tag} />;
      })}
<<<<<<< HEAD
      
=======
      ;
>>>>>>> 6ccfc54ccefe33969422cc98df87f867e43b7cc1
    </div>
  );
};
export default NavBar;
