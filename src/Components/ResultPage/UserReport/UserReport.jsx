import React from "react";
import "./UserReport.css";
import ValueBar from "../ValueBar/ValueBar";
import Button from "../../SignInPage/Button/Button";

const Readings = [
  { id: 1, label: "HEIGHT", value: 177.7, unit: "cm" },
  { id: 2, label: "WEIGHT", value: 61.4, unit: "kg" },
  { id: 3, label: "GULCOSE", value: 121, unit: "mg/dL" },
  { id: 4, label: "TEMP", value: 99, unit: "°C" },
  { id: 5, label: "PULSE", value: 120.9, unit: "BPM" },
  { id: 6, label: "BP", value: 108, unit: "mmHg" },
  { id: 7, label: "OXYGEN", value: 92, unit: "%" },
  { id: 8, label: "BMI", value: 100, unit: "kg/m2" },
];

const UserReport = () => {
  return (
    <div class="report-page">
      <div className="report-container">
        <div className="report-inner-container">
          {Readings.map((values) => {
            return (
              <ValueBar
                key={values.id}
                label={values.label}
                value={values.value}
                unit={values.unit}
              />
            );
          })}
        </div>
      </div>
      <div className="save-btn-space">
        <Button tag="SAVE" />
      </div>
    </div>
  );
};
export default UserReport;
