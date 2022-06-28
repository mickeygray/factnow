import React, { useReducer, useContext } from "react";
import LeadContext from "./leadContext";
import LeadReducer from "./leadReducer";
import axios from "axios";

import { POST_LEAD } from "../types";

const LeadState = (props) => {
 const initialState = {
  lead: null,
 };

 const [state, dispatch] = useReducer(LeadReducer, initialState);

 const postLead = async (lead) => {
  const config = {
   headers: {
    "Content-Type": "application/json",
   },
  };
  await axios.post("/api/leads", lead, config);

  dispatch({
   type: POST_LEAD,
   payload: lead,
  });
 };

 return (
  <LeadContext.Provider
   value={{
    lead: state.lead,
    postLead,
   }}>
   {props.children}
  </LeadContext.Provider>
 );
};

export default LeadState;
