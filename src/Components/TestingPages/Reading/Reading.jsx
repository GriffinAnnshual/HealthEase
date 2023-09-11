import React from "react";
import "./Reading.css";

const Reading = (props) => {
<<<<<<< HEAD
  return (
    <div className={`container`}>
      <div className={`inner-container`}>
=======
  console.log(props);
  return (
    <div className="container">
      <div className="inner-container">
>>>>>>> 6ccfc54ccefe33969422cc98df87f867e43b7cc1
        <div className="refresh-container">
          <button className="refresh-round">
            <img
              className="refresh-icon"
              src="/images/refresh.png"
              alt="refresh-icon"
            />
          </button>
        </div>
        <div className="reading-container">
          <div className="test-label-container">
<<<<<<< HEAD
            <div>
              <p
                className={
                  props.name === "TEMPERATURE"
                    ? "test-label test-temp-label"
                    : "test-label"
                }
              >
                {props.name}
              </p>
            </div>
=======
            <p className="test-label">{props.name}</p>
>>>>>>> 6ccfc54ccefe33969422cc98df87f867e43b7cc1
          </div>
          <div className="input-box-container">
            <input type="text" className="input-box" name="" id="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reading;
