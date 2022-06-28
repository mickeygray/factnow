import React, { useState, useCallback } from "react";
import parse from "html-react-parser";
import img1 from "../../images/logo-3.png";

const Blogs = ({ toggleBlogsState }) => {
 const blogs = [
  {
   title: "Settle your tax debt once and for all",
   author: "Jeff",
   date: "1/29/2019",
   copy:
    "<h3>How would it feel to be completely free of tax debt?</h3><p>Being burdened with tax debt feels like having a heavy weight on your shoulders. It drags you down. It dampens your spirits. It sucks the life out of your bank account through aggressive fines and unfair interest charges.</p><h3>Our #1 goal is to get your debt resolved for good.</h3><p>“For good” means settling for less than you owe. It means no more kicking the can down the road. It means getting a letter in the mail from the IRS that says: Balance: $0.00. </p><h4>Can you imagine that feeling?</h4><ul><li>Being able to keep 100% of your paychecks</li><li>No longer living in fear of garnishments, liens, or levies.</li><li>Being <b>free</b> of tax debt!</li></ul><p>If you’re desperate to feel that way soon, fill out our short form and get your free consultation with a tax relief expert.</p><p>You can break free from tax debt. You just need the right help.</p>",
  },
  {
   title: "Lower the amount you have to pay",
   author: "Jeff",
   date: "1/29/2019",
   copy:
    "<p>The longer you struggle with tax debt on your own, the worse it’s liable to get. Because the longer you go without paying, the more you’ll rack up fees, interest, and other penalties. If you let that go on too long, you’ll reach a point where your tax debt seems insurmountable. You might feel powerless against it.</p> <h4>But when you consult with an expert, you have options.</h4><p>In some cases, you can set up a payment plan (called an installment agreement) that will help you set a realistic schedule for paying off your debt while getting the IRS off your back.</p><p>In other cases you can actually settle your tax debt for less than you owe—sometimes much less—through what’s called an offer in compromise or a partial payment installment agreement.</p> <p>And sometimes you can even negotiate to have your interest fees and other penalties removed (or abated) completely!</p> <p>The best solution for you will depend on a number of factors. Fill out our short form and schedule a free consultation with a tax debt specialist to find out which solution will work best for you.</p>",
  },
  {
   title: "Provide friendly, no-pressure service",
   author: "Jeff",
   date: "1/29/2019",
   copy:
    "<p>During your free consultation, one of our qualified tax experts will provide you with an honest and professional assessment of your situation. You don’t have to worry about being forced into a high-pressure sales pitch or signing any contracts.</p><p>If we don’t think we can save you any money, we’ll tell you so—and you won’t spend a penny. If we’re confident that we can save you money, then we’ll be honest about how much you can realistically expect to save.</p><p>When you hire us, you’ll be assigned a top-notch tax relief expert who will work with you directly through to the end. You and your consultant will know each other on a first-name basis, and you’ll be able to contact your personal tax expert any time you have questions or need guidance.</p><p>Finally, we won’t force you into signing any contracts, which means you’re always free to change your mind—and get a full refund of your retainer anytime you want.</p>",
  },
  {
   title: "Resolve back taxes",
   author: "Jeff",
   date: "1/29/2019",
   copy:
    "<p>When back taxes start to pile up, it might seem impossible to pay them all off. Especially when you add all the interest charges and fees the IRS likes to hit you with. The deeper you fall into the hole of tax debt, the harder it is to climb out.</p><h4>Luckily, there’s a solution. Consider us your “ladder” out of the tax debt hole</h4><p>We can help you reduce interest payments and fees, protect your home from being seized, and lower the total amount of debt you owe. By reducing your debt to a manageable amount, and creating a realistic schedule to pay it off, we can help dig you out of that hole.</p><p>Our tax relief experts know all the laws and loopholes to save you as much money as possible. If you owe back taxes, we can help you to lower your payment and qualify for programs such as the IRS Fresh Start Initiative.</p><p>In fact, depending on your situation, we might be able to renegotiate with the IRS to dramatically reduce your total tax debt—just like Ken P., who owed $127,000 and settled for $672.</p>",
  },
  {
   title: "Stop wage garnishments",
   author: "Jeff",
   date: "1/29/2019",
   copy:
    "<h3>The IRS is aggressive.</h3><p>When the IRS garnishes your wages, you’ll be surprised at how much money they’re allowed to take. People often think that the government can take only a certain percentage of your paycheck…but the truth is, there’s no limit to what they can take. Having your wages garnished because of tax debt is a serious matter. Wage garnishments can cause severe financial distress that could lead to further debt and/or exorbitant penalties from the IRS.</p><h3>This is not something you should try to handle on your own.</h3><p>When you hire us to reduce your tax debt, the first thing we’ll do is pursue a “Stay of Enforcement,” which means that the IRS can’t take any money or seize any of your assets. This protects you and buys us enough time to get your wage garnishment released.</p><p>Then, we’ll get to work renegotiating your debt and lowering the amount you owe by using solutions such as an installment agreement or an offer in compromise.</p><p>The sooner you contact us, the better chance we’ll have of getting your wage garnishment released—so fill out the form at the top of this page for your <b>free consultation</b> today.</p>",
  },
 ];

 const [blog, setBlog] = useState(null);

 return (
  <div style={{ height: "100vh" }}>
   <span style={{ float: "right" }}>
    <a onClick={toggleBlogsState}>X</a>
   </span>

   <div className='grid-2a'>
    <div>
     {" "}
     <ul>
      {blogs.map((blog) => (
       <li className='p-1 m-1'>
        <a onClick={() => setBlog(blog)}>{blog.title}</a>
       </li>
      ))}
     </ul>
    </div>
    <div>
     {blog != null ? (
      <div>
       <h2>{blog.title}</h2>
       <p>By : {blog.author}</p>
       <p>Date: {blog.date}</p>
       <div> {parse(blog.copy)}</div>
      </div>
     ) : (
      <div className='all-center' style={{ height: "500px" }}>
       <div>
        <img src={img1} alt='' style={{ height: "200px" }} />
        <h1>Act Now Tax Relief</h1>
        <h3>Read More</h3>
       </div>
      </div>
     )}
    </div>
   </div>
  </div>
 );
};

export default Blogs;
