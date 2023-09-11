import React from "react";
import "./Report.css";
import UserDetails from "../UserDetails/UserDetails";
import HeadingBox from "../HeadingBox/HeadingBox";
import UserReport from "../UserReport/UserReport";
import NavBar from "../../Navigation/NavBar/NavBar";

<<<<<<< HEAD
let Report = () => {
  const navs = [
    { id: 1, tag: "HOME" },
    { id: 2, tag: "RESULT" },
    { id: 3, tag: "LOGOUT" }
=======
const Report = () => {
  const navs = [
    { id: 1, tag: "HOME" },
    { id: 2, tag: "RESULT" },
    { id: 3, tag: "LOGOUT" },
>>>>>>> 6ccfc54ccefe33969422cc98df87f867e43b7cc1
  ];

  return (
    <div class="body">
      <NavBar navs={navs} />
      <HeadingBox heading="USER INFORMATION" />
      <UserDetails />
      <HeadingBox heading="TEST RESULTS" />
      <UserReport />
    </div>
  );
};
export default Report;
