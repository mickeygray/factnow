import React from "react";
import img1 from "../../images/M1.jpg";
import articleHeader from "../../images/articleheader.png";
import revenuetax from "../../images/revenuetax.png";
const ArticleBody = () => {
 return (
  <div className='articlebody'>
   <h1>The IRS is Forgiving Late Filing Penalties for the Pandemic Years</h1>

   <div className='grid-2b'>
    <div>
     {" "}
     <img src={img1} alt='' className='round-img1' />
    </div>
    <div>
     Erwin Mills
     <br /> kdunntax.com
    </div>
   </div>
   <div>Posted On 8/26/2022</div>
   <div className='lead'>
    Are you one of the millions of Americans who had trouble filing or paying
    taxes during the years of the pandemic?
    <br />
    <br />
    File your taxes before September 30th to be considered for debt dismissal.
   </div>

   <div className='m-1'>
    <div>
     <img
      src={articleHeader}
      alt=''
      style={{ backgroudColor: "#f4f4f4", height: "400px", width: "500px" }}
     />
    </div>
    <p></p>
   </div>
   <div>
    <p>
     The newly passed Inflation Reduction Act{" "}
     <a
      href='https://www.democrats.senate.gov/imo/media/doc/inflation_reduction_act_one_page_summary.pdf'
      target='_blank'>
      H.R.5376
     </a>{" "}
     comes with the largest funding increase for the Internal Revenue Service in
     many years. An agency that has been dragged into the spotlight during the
     pandemic years as being an integral part in distributing stimulus payments,
     but also failing to answer the phone for tax payers 9/10 times, is getting
     a major overhaul with one goal in mind, performing more audits of
     households, individuals and businesses making more than 400,000 dollars a
     year.
    </p>
   </div>
   <div>
    <p>
     With that as their goal, they have been given 80 billion dollars of
     taxpayer money to hire new agents. Unfortunately all that funding will take
     years to manifest a significant difference and in the meantime they are
     still the federal agency in charge of administering and managing the tax
     payments of everyone in America. As such they have a record of every late
     tax payment made by everyone, and have to prioritize collecting all of the
     debt as it exists through the traditional means. Under normal circumstances
     this collection process is managed by the Automated Lien System and IRS
     collections and the number of delinquent taxpayers stays around 1 percent.
    </p>
   </div>
   <div className='all-center'>
    <img
     src={revenuetax}
     alt=''
     style={{ backgroudColor: "#f4f4f4", height: "200px", width: "300px" }}
    />
   </div>
   <div>
    <h4>The last two years have been anything but normal circumstances.</h4>
    <p>
     Without any sort of structural change, the system that normally has 2-3
     million people in it has “ [...] identified approximately 22.6 million
     taxpayers [who] received more than $589 million in interest as of October
     22, 2020”
     <a
      href='https://www.treasury.gov/tigta/auditreports/2021reports/202146023fr.pdf'
      target='_blank'
      style={{ fontSize: ".67rem" }}>
      [source]
     </a>
     . This spike in owed taxes is unprecedented and a huge burden on people who
     already face employment shortages, health concerns, inflated prices, and as
     we turn to the fiscal year of 2022-2023, the IRS would have to begin
     processing those additional 20 million tax debtors, with payment plans and
     collection efforts that would cause more harm than good.
    </p>
   </div>

   <div>
    <h4>The IRS needs to clean house in order to rebuild.</h4>
    <p>
     So as part of the negotiations with Congress planning and prioritizing the
     spending amounts and processes for the revamping of the agency, the IRS has
     been encouraged to make a fresh start on its caseload with forgiveness of
     interest and filing penalties accrued by first time debtors during the
     pandemic years. As an initial calculation the IRS has opted to immediately
     absolve 1.6 million Americans of their owed taxes from the pandemic years
     refunding 1.2 billion dollars.
    </p>
   </div>
  </div>
 );
};

export default ArticleBody;
