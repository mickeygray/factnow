import React from "react";
import img from "../../images/ad.png";
import { useLocation, NavLink } from "react-router-dom";

const VerticalAdBar = () => {
 return (
  <div style={{ position: "absolute" }}>
   <a href='/' style={{ position: "fixed" }}>
    <img src={img} alt='' style={{ width: "275px", height: "366px" }} />
   </a>
  </div>
 );
};

export default VerticalAdBar;
