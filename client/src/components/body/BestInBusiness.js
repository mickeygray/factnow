import React from "react";
import img1 from "../../images/100percent.png";
import img2 from "../../images/irs.jpg";
import img3 from "../../images/yelp.png";
import img4 from "../../images/enrolled-agent-header-1.png";
import img5 from "../../images/yellowpages.png";

const BestInBusiness = () => {
 return (
  <div className=' all-center' style={{ backgroundColor: "white" }}>
   <h2>Why are we the best in the business?</h2>
   <div className='grid-5'>
    <div
     className='card m-1 p-1'
     style={{ border: "4px dotted rgb(235, 244, 248)" }}>
     <img src={img1} style={{ height: "180px" }} />
     <b>Money Back Guarantee</b>
    </div>
    <div
     className='card m-1 p-1'
     style={{ border: "4px dotted rgb(235, 244, 248)" }}>
     <img src={img2} style={{ height: "180px" }} />
     <b>IRS Licensed</b>
    </div>
    <div
     className='card m-1 p-1'
     style={{ border: "4px dotted rgb(235, 244, 248)" }}>
     <img src={img3} style={{ height: "180px" }} />
     <b>Secure and Trusted</b>
    </div>
    <div
     className='card m-1 p-1'
     style={{ border: "4px dotted rgb(235, 244, 248)" }}>
     <img
      src={img4}
      style={{ marginLeft: "-12.5px", height: "180px", width: "120%" }}
     />
     <b>Licensed Staff</b>
    </div>
    <div
     className='card m-1 p-1'
     style={{ border: "4px dotted rgb(235, 244, 248)" }}>
     <img src={img5} style={{ height: "200px" }} />
     <b>98% Success Rate</b>
    </div>
   </div>
  </div>
 );
};

export default BestInBusiness;
