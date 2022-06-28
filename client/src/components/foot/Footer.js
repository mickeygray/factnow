import React, { useState, useCallback } from "react";
import img1 from "../../images/logo-3.png";
import DisclaimerModal from "./DisclaimerModal";

const Footer = () => {
 const [disclaimerState, setDisclaimerState] = useState(false);

 const toggleDisclaimer = useCallback(() => {
  setDisclaimerState((prevState) => !prevState);
 });
 return (
  <>
   {disclaimerState === false ? (
    <div className='all-center bg-light'>
     <img src={img1} alt='' style={{ height: "200px", width: "200px" }} />
     <a onClick={() => setDisclaimerState(true)} className='text-danger'>
      Disclaimers
     </a>
     <i>© www.ActNowTax.com All rights reserved.</i>
    </div>
   ) : (
    <DisclaimerModal toggleDisclaimer={toggleDisclaimer} />
   )}
  </>
 );
};

export default Footer;
