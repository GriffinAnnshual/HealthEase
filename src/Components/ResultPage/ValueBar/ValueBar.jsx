import React from "react";
import "./ValueBar.css";
const ValueBar = (props) => {
  return (
    <div class="value-container">
<<<<<<< HEAD
      <div>
        <p className="label">{props.label}</p>
      </div>

=======
      <p className="label">{props.label}</p>
>>>>>>> 6ccfc54ccefe33969422cc98df87f867e43b7cc1
      <button className="btn">
        <p class="value">{props.value}</p>
        <p class="unit">{props.unit}</p>
      </button>
    </div>
  );
};

export default ValueBar;
