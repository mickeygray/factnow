import React from "react";
import ArticleForm from "../foot/ArticleForm";
import footer from "../../images/footer.png";
const ArticleConclusion = () => {
 return (
  <div className='articlebody'>
   <div>
    <img
     src={footer}
     alt=''
     style={{ backgroudColor: "#f4f4f4", height: "400px", width: "500px" }}
    />
   </div>
   <div>
    <h4>
     There are millions of affected Americans unaccounted for in their first
     list
    </h4>
    <p>
     This is a great start but 1.6 million hardly scratches the surface of the
     actual number of Americans who will receive their first tax penalties from
     the IRS. According to{" "}
     <a href='https://www.irs.gov/pub/irs-drop/n-22-36.pdf' target='_blank'>
      this IRS Memorandum
     </a>{" "}
     , “The IRS will not impose the penalties listed in section 3.A.(1) through
     (4) of this notice with respect to the specified tax returns for taxable
     years 2019 and 2020 that are filed on or before September 30, 2022.” The
     article goes on to list a wide array of forms, with 1040 being on top of
     the list. If you, like so many other people, had difficulty paying and
     filing your taxes for 2019-2021, the time to file your taxes is now.
    </p>
   </div>
   <div>
    <h4>The IRS wants to get rid of your tax debt</h4>
    <p>
     Speaking with a tax professional is the best way to ensure that when you
     file you have the best opportunity for qualifying for the programs being
     offered through this limited window. Right now the IRS would love to get
     out the rubber stamp and shuffle out the majority of the debtors on their
     list with the debt dismissal program they are carrying out over the next
     few months that means they don’t have to spend time working to collect
     taxes from the poorest of Americans.
    </p>
   </div>
   <div>
    <p>
     Even if you have had long term debt issues with the IRS if you make less
     than 400,000 a year it is now more than ever more likely that a well
     presented offer to resolve a tax case would be approved, for much the same
     reason that the IRS is categorically forgiving the debt of 1.6 million
     Americans automatically, they are likely to accept more traditional means
     of tax forgiveness.
    </p>
   </div>
   <div>
    <h4>Keller Dunn Will Help You Get Started For Free</h4>
    <p>
     Keller Dunn is providing any tax payer who{" "}
     <a href='tel:+3106665997'>calls us</a> a free consultation to determine if
     you might qualify as an addendum to the list of Americans being forgiven by
     the stipulations of IRS notice 2022-36, this will include an in depth
     financial interview with you and the IRS. If it is found that you qualify,
     we will button up all your paperwork and help you get paid immediately.
    </p>
   </div>
   <div>
    <p>
     If the call reveals a more indepth tax matter that requires more work with
     the IRS, we are currently structuring and submitting historically low Offer
     And Compromise requests for our clients, expecting the approval of these to
     fit nicely with the current modus operandi of the IRS which is cleaning
     house of debtors who are not a long term risk of underreporting or
     manipulating the tax code due to their high net worth.
    </p>
   </div>
   <ArticleForm />
  </div>
 );
};

export default ArticleConclusion;
