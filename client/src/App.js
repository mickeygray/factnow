import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LeadState from "./context/lead/LeadState";

import ActNow from "./components/pages/ActNow";
import "./App.css";
const App = () => {
 return (
  <LeadState>
   <Router>
    <Routes>
     <Route exact path='/actnow' element={<ActNow />} />
    </Routes>
   </Router>
  </LeadState>
 );
};

export default App;
