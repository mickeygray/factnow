import React from "react";
import parse from "html-react-parser";

import Footer from "../foot/Footer";

const BlogContent = ({
 title,
 date,
 img1,
 img2,
 img3,
 p1,
 p2,
 p3,
 p4,
 p5,
 id,
 vertical,
}) => {
 return (
  <div className='color-background' style={{ fontSize: ".8rem" }}>
   <div className='bg-light'>
    <div>
     <h3 className='lead'>{title}</h3>
     <h5>
      <i>{date}</i>
     </h5>
    </div>
    <div className='m-2' style={{ textIndent: "25px" }}>
     <div>{parse(p1)}</div>
     <br />
     <div>
      <img
       src={img2}
       style={{
        width: "400px",
        height: "300px",
        margin: "auto",
        border: "1px solid green",
        display: "inline-block",
        overflow: "auto",
       }}
      />{" "}
     </div>
     <br />
     <div className=''>{parse(p2)}</div>
     <br />
     <div className='grid-2'>
      <div className='container'>{parse(p3)}</div>
      <div>
       <img
        src={img3}
        alt='professional tax help and advice'
        style={{
         width: "200px",
         height: "300px",
         border: "1px solid green",
         display: "inline-block",
         overflow: "auto",
        }}
       />{" "}
      </div>
     </div>
     <br />
     <div className=''>{parse(p4)}</div>
     <br />
     <div className=''>{parse(p5)}</div>
    </div>
   </div>
   <Footer />
  </div>
 );
};

export default BlogContent;
