import React from "react";
import BlogContent from "./BlogContent";

const Modal = (props) => (
 <>
  <div className='bg-light' />
  <div className='card'>
   <div className=''>
    <div className=''>
     <div className=''>
      <button onClick={props.clearModal}>X</button>
      <BlogContent {...props.blog} />
     </div>
    </div>
   </div>
  </div>
 </>
);
export default Modal;
