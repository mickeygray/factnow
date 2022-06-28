import React, { useEffect, useState, Fragment, useContext } from "react";
import { useLocation, Link } from "react-router-dom";

const StickyNavbar = () => {
 const [style, setStyle] = useState({});

 const position = window.pageYOffset;
 const onClick = () => {
  window.scrollTo(0, 0);
 };
 useEffect(() => {
  window.addEventListener("scroll", onScroll);
  setStyle({
   backgroundColor: "rgb(211,224,237)",
   overflowY: "hidden",

   overflowX: "hidden",
  });
 }, []);

 const location = useLocation();
 useEffect(() => {
  if (position === 0) {
   setStyle({
    backgroundColor: "rgb(211,224,237)",
    zIndex: "999999999999999",
   });
  }
 }, [position, setStyle]);

 const onScroll = () => {
  setStyle({
   overflowY: "hidden",
   overflowX: "hidden",
   backgroundColor: "rgb(211,224,237)",
   position: "sticky",
   top: "0",
   zIndex: "999999999999999",
  });
 };

 return (
  <nav onScroll={onScroll} style={style} className='navbar nav'>
   <a href='#hero'>
    {" "}
    <h1
     className='text-primary'
     style={{
      fontSize: "4rem",
      textDecoration: "underline",
      color: "#FE5001",
     }}>
     <b>
      <i>ACT NOW TAX!</i>
     </b>
    </h1>
   </a>

   <span className='lead' style={{ display: "block", marginTop: "33px" }}>
    Call for 30 minute Consultation{" "}
    <i className='fa-solid fa-phone lead' style={{ color: "#FE5001" }}></i>
    <a className='lead' style={{ color: "#FE5001" }}>
     (213) 377-5643
    </a>
   </span>
  </nav>
 );
};

export default StickyNavbar;
