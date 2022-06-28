import React, { useState, useContext } from "react";
import LeadContext from "../../context/lead/leadContext";

const Hero = () => {
 const leadContext = useContext(LeadContext);

 const { postLead } = leadContext;
 const [lead, setLead] = useState({
  amount: "",
  type: "",
  time: "",
  name: "",
  phone: "",
  email: "",
  problem: "",
 });

 const { amount, type, time, name, phone, email, problem } = lead;

 const onChange = (e) => {
  setLead({ ...lead, [e.target.name]: e.target.value });
 };

 const clearLead = () => {
  setLead({
   amount: "",
   type: "",
   time: "",
   name: "",
   phone: "",
   email: "",
   problem: "",
  });
 };

 const onSubmit = (e) => {
  e.preventDefault();
  postLead(lead);
  clearLead();
 };
 console.log(lead);

 return (
  <div id='hero' className='bg-hero text-center'>
   <h1>Our Tax Attorneys Resolve Large Tax Debts Quickly and Easily</h1>
   <h4 className='lead' style={{ color: "#FE5001" }}>
    Get a consultation now!
   </h4>

   <form onSubmit={onSubmit} className='all-center'>
    {amount === "" && (
     <div className='all-center' style={{ width: "400px" }}>
      <h3>How Much Tax Debt Do You Owe</h3>
      <select name='amount' onChange={onChange}>
       <option className='text-center' value=''>
        -Select Amount-
       </option>
       <option className='text-center' value='LessThan10'>
        Less Than $10,000
       </option>
       <option className='text-center' value='10to20'>
        $10,000-$20,000
       </option>
       <option className='text-center' value='20to50'>
        $20,000-$50,000
       </option>
       <option className='text-center' value='50+'>
        More Than $50,000
       </option>
       <option className='text-center' value='UK'>
        Not Sure
       </option>
      </select>
     </div>
    )}

    {amount.length > 0 && type === "" && (
     <div className='all-center' style={{ width: "400px" }}>
      <h3>What Kind of Taxes Do You Owe</h3>
      <select name='type' onChange={onChange}>
       <option></option>
       <option value='state'>State Taxes</option>
       <option value='federal'>Federal Taxes</option>
       <option value='both'>State & Federal Taxes </option>
      </select>
     </div>
    )}
    {amount.length > 0 && type.length > 0 && (
     <div className='all-center'>
      <div className='grid-2'>
       <div style={{ width: "300px" }}>
        <legend>When Should We Contact You:</legend>
        <select name='time' onChange={onChange}>
         <option></option>
         <option value='now'>Right Now</option>
         <option value='morning'>Morning</option>
         <option value='noon'>Noon</option>
         <option value='afternoon'>Afternoon</option>
         <option value='night'>Night</option>
        </select>
       </div>
       <div style={{ width: "300px" }}>
        <legend>Name:</legend>
        <input type='text' name='name' onChange={onChange} />
       </div>
       <div style={{ width: "300px" }}>
        <legend>Phone Number:</legend>
        <input type='text' name='phone' onChange={onChange} />
       </div>
       <div style={{ width: "300px" }}>
        <legend>Email Address:</legend>
        <input type='text' name='email' onChange={onChange} />
       </div>
      </div>
      <br />
      <textarea
       placeholder='Describe Your Tax Issues (optional)'
       name='problem'
       style={{ width: "500px" }}
       onChange={onChange}></textarea>
      <br />
      <br />
      <input
       type='submit'
       className='btn btn-danger'
       style={{ height: "50px", width: "300px" }}
       value='Get Tax Help Now'
      />
     </div>
    )}
   </form>
  </div>
 );
};

export default Hero;
