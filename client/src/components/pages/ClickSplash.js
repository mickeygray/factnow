import React, { useState, useRef, useEffect } from "react";
import StickyNavbar from "../head/StickyNavbar";
import ArticleBody from "../body/ArticleBody";
import VerticalAdBar from "../advertisement/VerticalAdBar";

import HeroAdBar from "../advertisement/HeroAdBar";
import ClickHero from "../head/ClickHero";
import BottomPopUp from "../advertisement/BottomPopUp";
import ArticleConclusion from "../foot/ArticleConclusion";
import useIntersection from "../../context/hooks/useIntersection";
import Footer from "../foot/Footer";
const ClickSplash = () => {
 const ref = useRef();
 const inViewport = useIntersection(ref, "0px");
 const [style, setStyle] = useState({
  bottom: "0",
  width: "100%",
 });
 const [display, setDisplay] = useState(true);
 useEffect(() => {
  if (inViewport) {
   setStyle({ position: "fixed", bottom: "0", width: "100%" });
  }
 }, [inViewport]);

 console.log(style);
 return (
  <div style={{ position: "absolute" }}>
   <HeroAdBar />
   <StickyNavbar />
   <ClickHero />
   <div className='container'>
    <div className='grid-2'>
     <ArticleBody />
     <VerticalAdBar />
    </div>
   </div>

   <div
    className='bg-primary'
    style={display === true ? style : { display: "none" }}
    ref={ref}>
    <button className='text-dark lead' onClick={() => setDisplay(false)}>
     X
    </button>
    <BottomPopUp />
   </div>
   <div className='container'>
    {" "}
    <ArticleConclusion />
   </div>

   <Footer />
  </div>
 );
};

export default ClickSplash;
