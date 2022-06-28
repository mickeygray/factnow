import React from "react";

const Waiting = () => {
 return (
  <div className='all-center'>
   <h1>What are you waiting for?</h1>
   <h3>Here's what we can do for you</h3>
   <br />
   <br />

   <div className='grid-2'>
    <ul>
     <li>Settle your tax debt once and for all </li>
     <li>Lower the amount you have to pay</li>
     <li>Provide friendly, no-pressure service</li>
     <li>Resolve back taxes</li>
    </ul>
    <ul>
     <li>Stop wage garnishments </li>
     <li>Defend you from IRS liens & levies</li>
     <li>Negotiate with the IRS on your behalf</li>
     <li>Prevent property seizure</li>
    </ul>
   </div>
   <br />
   <br />
   <br />
   <a
    href='#hero'
    className='btn btn-danger btn-block'
    style={{ borderRadius: "10px", width: "600px" }}>
    Act Now!
   </a>
   <br />
   <br />
   <br />
  </div>
 );
};

export default Waiting;
