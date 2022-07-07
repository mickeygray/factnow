import React from "react";
import img1 from "../../images/M1.jpg";
import HorizontalAdBar from "../advertisement/HorizontalAdBar";

const ArticleBody = () => {
 return (
  <div className='articlebody'>
   <h1>
    Seven Absolutely Essential Things To Do Before You Pay a Dime To The Irs{" "}
   </h1>
   <div className='lead'>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores quas
    perspiciatis saepe eaque rerum esse eum quo suscipit ducimus sed!
   </div>
   <div className='grid-2b'>
    <div>
     {" "}
     <img src={img1} alt='' className='round-img1' />
    </div>
    <div>
     Jeff Jefferson <br /> LoremTax.com
    </div>
   </div>
   <div>Posted On 7/4/2023</div>
   <div className='m-1'>
    <div
     style={{ backgroudColor: "#f4f4f4", height: "400px", width: "500px" }}
     className='all-center card'>
     Article Header Image
    </div>
    <p>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, harum?
    </p>
   </div>
   <div>
    <p>
     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum facilis
     placeat laboriosam aliquam maiores omnis recusandae deserunt adipisci nemo
     animi ducimus, minima doloremque magnam. Magnam architecto culpa molestiae
     doloribus odit.
    </p>
    <p>
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
     asperiores iure iste fuga? Magni, alias accusantium quos sunt dolores culpa
     earum hic eaque distinctio! Perspiciatis illo suscipit explicabo maiores
     quidem.
    </p>
   </div>
   <div>
    <HorizontalAdBar />
   </div>
   <div>
    <h3>1) Lorem, ipsum dolor.</h3>
    <h5>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
     consectetur.
    </h5>
    <div className='text-large'>
     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus aperiam
     facere quia, similique corporis, ad nihil quibusdam mollitia ea consectetur
     commodi quod. Ducimus, atque! Debitis?
    </div>
   </div>{" "}
   <div>
    <h3>1) Lorem, ipsum dolor.</h3>
    <h5>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
     consectetur.
    </h5>
    <div className='text-large'>
     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus aperiam
     facere quia, similique corporis, ad nihil quibusdam mollitia ea consectetur
     commodi quod. Ducimus, atque! Debitis?
    </div>
   </div>
   <div>
    <h3>1) Lorem, ipsum dolor.</h3>
    <h5>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
     consectetur.
    </h5>
    <div className='text-large'>
     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus aperiam
     facere quia, similique corporis, ad nihil quibusdam mollitia ea consectetur
     commodi quod. Ducimus, atque! Debitis?
    </div>
   </div>
  </div>
 );
};

export default ArticleBody;
