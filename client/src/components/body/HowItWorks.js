import React, { useCallback, useState } from "react";
import img1 from "../../images/1_consultationpng_blue-1.png";
import img2 from "../../images/1_consultationpng_blue-2.png";
import img3 from "../../images/3_resolution_blue.png";
import img4 from "../../images/4_freedom_blue-3.png";
import Blogs from "./Blogs";

const HowItWorks = () => {
 const [blogsState, setBlogsState] = useState(false);

 const toggleBlogsState = useCallback(() => {
  setBlogsState((prevState) => !prevState);
 }, []);

 return (
  <div style={{ backgroundColor: "rgb(235, 244, 248)" }}>
   {blogsState === false ? (
    <>
     <h1 className='text-center'>Here's how it works:</h1>

     <div className='grid-4 text-center'>
      <div className='card'>
       <a onClick={toggleBlogsState}>
        <img src={img1} className='round-img' />
       </a>
       <h5>Step 1</h5>
       <h4>Free Consultation</h4>
       <p>
        100% free consultation with one of our tax attorneys. One of our expert
        tax attorneys will call you to get the details of your situation.
       </p>
      </div>
      <div className='card'>
       <a onClick={toggleBlogsState}>
        <img src={img2} className='round-img' />
       </a>
       <h5>Step 2</h5>
       <h4>Investigation</h4>
       <p>
        We review all your information, initiate your protection, establish
        communication with the IRS, and provide you with a detailed case
        summary.
       </p>
      </div>
      <div className='card'>
       <a onClick={toggleBlogsState}>
        <img src={img3} className='round-img' />
       </a>
       <h5>Step 3</h5>
       <h4>Resolution</h4>
       <p>
        Our Attorneys Establish IRS Compliance and achieve the best possible
        resolution often drastically reducing your owed debt.
       </p>
      </div>
      <div className='card'>
       <a onClick={toggleBlogsState}>
        <img src={img4} className='round-img' />
       </a>
       <h5>Step 4</h5>
       <h4>Freedom</h4>
       <p>
        Case Closed! Its time to say good bye to tax worries and hello to
        greater financial freedom
       </p>
      </div>
     </div>
    </>
   ) : (
    <Blogs toggleBlogsState={toggleBlogsState} />
   )}
  </div>
 );
};

export default HowItWorks;
