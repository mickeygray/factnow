import React, { useState, useCallback } from "react";
import Modal from "./Modal";
import BlogContent from "./BlogContent";

const BlogItem = ({ blog, toggleModal, showModal, blogId }) => {
 console.log(showModal);
 console.log(toggleModal);
 return (
  <div className='card' onClick={() => toggleModal(blog.id)}>
   <div>
    {" "}
    <div>
     <img src={blog.img1} alt='' />
     <h5>{blog.title}</h5>
    </div>
   </div>
  </div>
 );
};

export default BlogItem;
