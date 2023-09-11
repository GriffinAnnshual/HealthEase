import React from "react";
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import axios from "axios";


import WelcomePage from "./Components/WelcomePage/WelcomePage/WelcomePage";
import LoginPage from "./Components/SignInPage/LoginPage/LoginPage";
import RegisterPage from "./Components/RegisterPage/RegisterPage/RegisterPage";
import TestingPage1 from "./Components/TestingPages/TestingPage1";
import TestingPage2 from "./Components/TestingPages/TestingPage2";
import TestingPage3 from "./Components/TestingPages/TestingPage3";
import TestingPage4 from "./Components/TestingPages/TestingPage4";
import Report from "./Components/ResultPage/Report/Report";
import ThankYouPage from "./Components/ThankYouPage/ThankYouPage";
=======
// import LoginPage from "./Components/SignInPage/LoginPage/LoginPage";
// import Report from "./Components/ResultPage/Report/Report";
import WelcomePage from "./Components/WelcomePage/WelcomePage/WelcomePage";
>>>>>>> 6ccfc54ccefe33969422cc98df87f867e43b7cc1

const App = () => {
  return (
    <>
<<<<<<< HEAD
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
           <Route path="/test-1" element={<TestingPage1 />} />
          <Route path="/test-2" element={<TestingPage2 />} />
          <Route path="/test-3" element={<TestingPage3 />} />
          <Route path="/test-4" element={<TestingPage4 />} />
          <Route path="/report" element={<Report />} />
          <Route path="/end" element={<ThankYouPage />} /> 
        </Routes>
      </Router>
=======
      <WelcomePage/>
>>>>>>> 6ccfc54ccefe33969422cc98df87f867e43b7cc1
    </>
  );
};
export default App;

<<<<<<< HEAD
=======








































































>>>>>>> 6ccfc54ccefe33969422cc98df87f867e43b7cc1
// import Mother from "./Components/Mother/Mother";
// import Reading from "./Components/Reading/Reading";
// import Instruction from "./Components/Instruction/Instruction";
// import Greeting from "./Components/Greeting/Greeting";

// const Test_Results = [
//   {
//     id: 1,
//     name: "HEIGHT",
//     value: "161.7",
//     unit: "cm",
//   },
//   {
//     id: 2,
//     name: "WEIGHT",
//     value: "61",
//     unit: "kg",
//   },
//   {
//     id: 3,
//     name: "BMI",
//     value: "90",
//     unit: "kg/m2",
//   },
//   {
//     id: 4,
//     name: "GULCOSE",
//     value: "180",
//     unit: "mg/dL",
//   },
//   {
//     id: 5,
//     name: "TEMPERATURE",
//     value: "99.8",
//     unit: "°C",
//   },
//   {
//     id: 6,
//     name: "PULSE",
//     value: "68",
//     unit: "BPM",
//   },
//   {
//     id: 7,
//     name: "OXYGEN SATURATION",
//     value: 98,
//     unit: "%",
//   },
// ];

// Test_Results.map((values) => {
//   return (
//     <Reading
//       key={values.id}
//       name={values.name}
//       value={values.value}
//       unit={values.unit}
//     />
//   );
// });

// const App = () => {
//   return (
//     <div>
//       <Greeting greet="WELCOME" />
//       <Mother />
//       <Instruction />
//       {Test_Results.map((values) => {
//         return (
//           <Reading
//             key={values.id}
//             name={values.name}
//             value={values.value}
//             unit={values.unit}
//           />
//         );
//       })}
//     </div>
//   );
// };

// export default App;
