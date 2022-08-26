import React, { useState, useCallback } from "react";
import img1 from "../../images/KDLOGO.png";
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
     <img src={img1} alt='' style={{ height: "100px", width: "200px" }} />
     <h3>Keller Dunn Tax Group</h3>
     <a onClick={() => setDisclaimerState(true)} className='text-danger'>
      Disclaimers
     </a>
     <i>© www.KDunnTax.com All rights reserved.</i>
    </div>
   ) : (
    <DisclaimerModal toggleDisclaimer={toggleDisclaimer} />
   )}
  </>
 );
};

export default Footer;
