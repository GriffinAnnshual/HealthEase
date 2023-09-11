import React from "react";
import "./UserDetails.css";
import ValueBar from "../ValueBar/ValueBar";

const UserDetails = () => {
  return (
    <div class="user-data-container">
      <div class="Details-container">
        <ValueBar label="NAME" />
        <ValueBar label="AGE" />
        <ValueBar label="PHONE NUMBER" />
      </div>
      <div className="Trimester-box">
        <p class="heading">TRIMESTER</p>
      </div>
    </div>
  );
};
export default UserDetails;
