import React, { useEffect, useState, Fragment, useContext } from "react";
import { useLocation, NavLink } from "react-router-dom";
import logo from "../../images/KDLOGO.png";

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
    width: "100vw",
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
   width: "100vw",
  });
 };

 return (
  <nav onScroll={onScroll} style={style} className='navbar nav'>
   <a href='/'>
    {" "}
    <h3 className='all-center' style={{ color: "black" }}>
     <img src={logo} alt='' />
     Keller Dunn Tax Group
    </h3>
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
