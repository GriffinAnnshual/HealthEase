<<<<<<< HEAD
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./LoginInput.css";

const LoginInput = (props) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleFocus = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true); // Open date picker when the container is focused
    }
  };
  // Create a ref for the DatePicker component
  const datePickerRef = React.createRef();

  if (props.type === "date")
    return (
      <div>
        <div
          onClick={handleFocus} // Trigger focus when the container is clicked
        >
          <DatePicker
            className="login-input"
            ref={datePickerRef} // Attach the ref to the DatePicker component
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            placeholderText={props.label}
            required
            dateFormat="dd/MM/yyyy"
            isClearable // Show a clear button - to remove date
          />
        </div>
      </div>
    );
  else
    return (
      <>
        <input
          className="login-input"
          type={props.type}
          name=""
          placeholder={props.label}
          required
        />
      </>
    );
=======
import React from "react";
import "./LoginInput.css";
const LoginInput = (props) => {
  return (
    <div>
      <input
        className="login-input"
        type={props.type}
        name=""
        placeholder={props.label}
      />
      
    </div>
  );
>>>>>>> 6ccfc54ccefe33969422cc98df87f867e43b7cc1
};
export default LoginInput;
