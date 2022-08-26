import React, { useState, useContext } from "react";

import LeadContext from "../../context/lead/leadContext";
const ArticleForm = () => {
 const leadContext = useContext(LeadContext);

 const { postLead } = leadContext;
 const [lead, setLead] = useState({
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  amount: "",
  callbackDate: "",
  callbackTime: "",
  method: "",
  comments: "",
 });

 const onChangeLead = (e) => {
  setLead({ ...lead, [e.target.name]: e.target.value });
 };

 const { callbackDate } = lead;

 console.log(lead);
 return (
  <div>
   <h4>Request a Call Back</h4>

   <p>
    We are available to schedule an appointment at your convenience, please fill
    out the form below and indicate a prefered contact and a representative from
    Keller Dunn{" "}
   </p>
   <div className='grid-2'>
    <div>
     <h4>Let Us Know More</h4>
     <div>
      <label htmlFor='name'>Name</label>
      <input type='text' name='name' onChange={onChangeLead} />
     </div>
     <div>
      <label htmlFor='email'>Email Address</label>
      <input type='text' name='email' onChange={onChangeLead} />
     </div>
     <div>
      <label htmlFor='phone'>Phone Number</label>
      <input type='text' name='phone' onChange={onChangeLead} />
     </div>
     <div>
      <label htmlFor='address'>Home Address</label>
      <input type='text' name='address' onChange={onChangeLead} />
     </div>
     <div>
      <label htmlFor='email'>City</label>
      <input type='text' name='city' onChange={onChangeLead} />
     </div>
     <div>
      <label htmlFor='email'>State</label>
      <select name='state' onChange={onChangeLead} id=''>
       <option value='AL'>Alabama</option>
       <option value='AK'>Alaska</option>
       <option value='AZ'>Arizona</option>
       <option value='AR'>Arkansas</option>
       <option value='CA'>California</option>
       <option value='CO'>Colorado</option>
       <option value='CT'>Connecticut</option>
       <option value='DE'>Delaware</option>
       <option value='DC'>District Of Columbia</option>
       <option value='FL'>Florida</option>
       <option value='GA'>Georgia</option>
       <option value='HI'>Hawaii</option>
       <option value='ID'>Idaho</option>
       <option value='IL'>Illinois</option>
       <option value='IN'>Indiana</option>
       <option value='IA'>Iowa</option>
       <option value='KS'>Kansas</option>
       <option value='KY'>Kentucky</option>
       <option value='LA'>Louisiana</option>
       <option value='ME'>Maine</option>
       <option value='MD'>Maryland</option>
       <option value='MA'>Massachusettes</option>
       <option value='MI'>Michigan</option>
       <option value='MN'>Minnesota</option>
       <option value='MS'>Mississippi</option>
       <option value='MO'>Missouri</option>
       <option value='MT'>Montana</option>
       <option value='NE'>Nebraska</option>
       <option value='NV'>Nevada</option>
       <option value='NH'>New Hampshire</option>
       <option value='NJ'>New Jersey</option>
       <option value='NM'>New Mexico</option>
       <option value='NY'>New York</option>
       <option value='NC'>North Carolina</option>
       <option value='ND'>North Dakota</option>
       <option value='OH'>Ohio</option>
       <option value='OK'>Oklahoma</option>
       <option value='OR'>Oregon</option>
       <option value='PA'>Pennsylvania</option>
       <option value='PR'>Puerto Rico</option>
       <option value='RI'>Rhode Island</option>
       <option value='SC'>South Carolina</option>
       <option value='SD'>South Dakota</option>
       <option value='TN'>Tenneesee</option>
       <option value='TX'>Texas</option>
       <option value='UT'>Utah</option>
       <option value='VT'>Vermont</option>
       <option value='VA'>Virginia</option>
       <option value='WA'>Washington</option>
       <option value='WV'>West Virginia</option>
       <option value='WI'>Wisconsin</option>
       <option value='WY'>Wyoming</option>
      </select>
     </div>
     <div>
      <label htmlFor='email'>Zip</label>
      <input type='text' name='zip' onChange={onChangeLead} />
     </div>
     <div>
      <label htmlFor='email'>Amount</label>
      <input type='text' name='amount' onChange={onChangeLead} />
     </div>
    </div>
    <div>
     <div>
      <h4>How Would You Like To Be Contacted</h4>
      <select name='method' id=''>
       <option value='call'>Call Me At That Time</option>
       <option value='voice mail'>Remind Me with a Voice Mail</option>
       <option value='email'>Send Me An Email With A Contact Reminder</option>
      </select>
     </div>
     <div>
      <h4>Pick A Date</h4>
      <input
       type='date'
       name='callbackDate'
       onChange={onChangeLead}
       value={callbackDate}
      />
     </div>
     <div>
      <h4>Pick A time </h4>
      <select name='callbackTime' id=''>
       <option value='morning'>Morning</option>
       <option value='noon'>Noon</option>
       <option value='afternoon'>Afternoon</option>
       <option value='evening'>Evening</option>
      </select>
     </div>
     <div>
      <h4>Anything else we should know?</h4>
      <textarea
       name='comments'
       onChange={onChangeLead}
       id=''
       cols='30'
       rows='10'></textarea>
     </div>
    </div>
   </div>
   <div>
    <button className='btn btn-dark btn-block' onClick={() => postLead(lead)}>
     Set Your Appointment
    </button>
    <br />
    <br />
   </div>
  </div>
 );
};

export default ArticleForm;
