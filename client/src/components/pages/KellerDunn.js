import React, { useEffect, useState } from "react";
import StickyNavbar from "../head/StickyNavbar";
import Hero from "../head/Hero";
import BestInBusiness from "../body/BestInBusiness";
import ExpertStaff from "../body/ExpertStaff";
import HowItWorks from "../body/HowItWorks";
import SuccessStories from "../body/SuccessStories";
import Waiting from "../foot/Waiting";
import Footer from "../foot/Footer";
import { useLocation, NavLink } from "react-router-dom";
const KellerDunn = () => {
 return (
  <div className='bg-light'>
   <StickyNavbar />
   <Hero />

   <div className='container'>
    <HowItWorks />
    <br />
    <br />
    <ExpertStaff />
    <br />
    <br />
    <BestInBusiness />
    <br />
    <br />
    <SuccessStories />
    <Waiting />
   </div>
   <Footer />
  </div>
 );
};

export default KellerDunn;
