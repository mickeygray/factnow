import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LeadState from "./context/lead/LeadState";

import KellerDunn from "./components/pages/KellerDunn";
import ClickSplash from "./components/pages/ClickSplash";
import "./App.css";
const App = () => {
 return (
  <LeadState>
   <Router>
    <Routes>
     <Route exact path='/*' element={<KellerDunn />} />
     <Route exact path='/article' element={<ClickSplash />} />
    </Routes>
   </Router>
  </LeadState>
 );
};

export default App;
