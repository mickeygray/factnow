import React from "react";
import img1 from "../../images/about-us.png";

const ExpertStaff = () => {
 return (
  <div className='grid-2nogap' style={{ height: "300px" }}>
   <div>
    <img src={img1} />
   </div>
   <div style={{ backgroundColor: "#f4f4f4" }}>
    <h2 className='lead'> Expert Staff</h2>
    <p>
     We have over 32 years of experience dealing with the IRS and State Tax
     Boards. Our team of tax attorneys provide services that include stopping
     wage garnishment and bank levies, lifting tax liens, ending penalties and
     interest, negotiating fair payments on your behalf, settling tax debt,
     offer in compromise and more. If you’re experiencing the negative impact of
     a sticky tax situation, let us help. We have the knowledge and skill to
     help you through it.
    </p>
   </div>
  </div>
 );
};

export default ExpertStaff;
