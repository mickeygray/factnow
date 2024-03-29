import React, { Fragment, useState, useCallback } from "react";
import BlogItem from "./BlogItem";
import StateTax1 from "../../images/StateTaxChanges1.jpg";
import StateTax2 from "../../images/StateTaxChanges2.jpg";
import StateTax3 from "../../images/StateTaxChanges3.jpg";
import Arkansas1 from "../../images/arkansas1.jpg";
import Arkansas2 from "../../images/arkansas2.jpg";
import Arkansas3 from "../../images/arkansas3.jpg";
import Cares1 from "../../images/cares1.jpg";
import Cares2 from "../../images/cares2.jpg";
import Cares3 from "../../images/cares3.jpg";
import Stocks1 from "../../images/stocks1.jpg";
import Stocks2 from "../../images/stocks2.jpg";
import Stocks3 from "../../images/stocks3.jpg";
import Oic1 from "../../images/oic1.jpg";
import Oic2 from "../../images/oic2.jpg";
import Oic3 from "../../images/oic3.jpg";
import Penalty1 from "../../images/penalty1.jpg";
import Penalty2 from "../../images/penalty2.jpg";
import Penalty3 from "../../images/penalty3.jpg";
import Ddia1 from "../../images/ddia1.jpg";
import Ddia2 from "../../images/ddia2.jpg";
import Ddia3 from "../../images/ddia3.jpg";
import Nod1 from "../../images/nod1.jpg";
import Nod2 from "../../images/nod2.jpg";
import Nod3 from "../../images/nod3.jpg";
import Lien1 from "../../images/lien1.png";
import Lien2 from "../../images/lien2.png";
import Lien3 from "../../images/lien3.jpg";
import File1 from "../../images/file1.jpg";
import File2 from "../../images/file2.jpg";
import File3 from "../../images/file3.jpg";
import Taxhelp1 from "../../images/taxhelp1.jpg";
import Taxhelp2 from "../../images/taxhelp2.jpg";
import Taxhelp3 from "../../images/taxhelp3.jpg";
import Annuity1 from "../../images/annuity1.jpg";
import Annuity2 from "../../images/annuity2.jpg";
import Annuity3 from "../../images/annuity3.png";
import Accumulation1 from "../../images/accumulation1.jpg";
import Accumulation2 from "../../images/accumulation2.jpg";
import Accumulation3 from "../../images/accumulation3.jpg";
import SetAside1 from "../../images/setaside1.jpg";
import SetAside2 from "../../images/setaside2.jpg";
import SetAside3 from "../../images/setaside3.jpg";
import CovidRetire1 from "../../images/covidretire1.jpg";
import CovidRetire2 from "../../images/covidretire2.jpg";
import CovidRetire3 from "../../images/covidretire3.jpg";
import YeildRetire1 from "../../images/yieldretire1.jpg";
import YeildRetire2 from "../../images/yieldretire2.jpg";
import YeildRetire3 from "../../images/yieldretire3.jpg";
import ChangeRetire1 from "../../images/changeretire1.jpg";
import ChangeRetire2 from "../../images/changeretire2.jpg";
import ChangeRetire3 from "../../images/changeretire3.jpg";
import Modal from "./Modal";
const Blogs = () => {
 const [showModal, setModalState] = useState(false);
 const [blogId, setBlogId] = useState(null);
 const toggleModal = useCallback((id) => {
  setBlogId(id - 1);
  setModalState((prevState) => !prevState);
 }, []);
 const clearModal = useCallback(() => {
  setBlogId(null);
 });

 const blogs = [
  {
   "title": "State Tax Changes For 2021",
   "date": "1/11/2021",
   "img1": StateTax1,
   "img2": StateTax2,
   "img3": StateTax3,
   "p1":
    "<p> With November’s elections came broad sweeping tax changes across multiple states. Take note that some of these may not begin in 2021, so please check <br/> with your State Taxing Authority to verify how these tax changes affect you.</p>",
   "p2":
    "<h3> At A Glance: </h3><ul><li> 1)Arkansas and Iowa have lowered their corporate income tax rate. </li><li> 2)Arizona and New Mexico raised their top marginal individual income tax rate adding a new bracket. </li><li> 3)Arkansas reduced its top marginal income tax rate by removing the top tax bracket. </li><li> 4)Tennessee has voided the Hall tax effectively ending income tax levies in the state. </li>         <li> 5)Arizona and Illinois adjusted policy relating to sales and use tax for remote sellers. </li>        <li> 6)Connecticut, Vermont and D.C. adjusted their estate tax exemptions and/or rates. </li>        <li> 7)Connecticut has begun the phase out of a capital stock tax, while Illinois and Mississippi have escalated their phase out to the next stage and New York <br/> has completely phased out theirs. </li>        <li> 8)Colorado and Oregon increased taxes on cigarettes. Colorado Oregon and Georgia have begun taxing vape products. </li>        <li> 9)Arizona, Montana and New Jersey legalized marijuana and took steps to set up the taxing structure.</li>        <li> 10)North Carolina undid legislation to stop a reduction of the fuel tax.</li>",
   "p3":
    "<p> Some of these changes may not come into effect until the fiscal year for 2021 which for most states is July. There are several that are implemented on January 1st. </p>",
   "p4":
    "<p> Bear in mind the plurality of these instances are tax changes that were set to take effect in 2021 but had been passed in prior legislative sessions as there were a lot of <br/> state legislative sessions cut short due to Covid-19. Though ther were significant changes passed in the ballot box in November, notably adding three more states <br/>  that are now taxing legal marijuana. </p>",
   "p5":
    "<p> In addition, many states’ unemployment insurance (UI) tax rates will automatically increase in 2021 due to the size of trust fund drawdown due to the pandemic. <br/>Many states also updated their legislation to align with the  significant changes in the federal tax code that were made by the Coronavirus Aid, Relief, <br/> and Economic Security (CARES) Act that was enacted in March  2022.</p>",
   "id": "1",
   "vertical": "tax",
  },
  {
   "title": "Arkansas May Soon Eliminate the Income Tax",
   "img1": Arkansas1,
   "date": "1/11/2021",
   "img2": Arkansas2,
   "img3": Arkansas3,
   "p1":
    "<p> Upon taking his seat as the Lieutenant Governor of Arkansas Tim Griffin - R recently announced a long term initiative to eliminate the income tax in the state of arkansas. <br/> It would join a hand full of states that currently have no personal income tax including Texas and Florida. While he did not list a series of plan to outline how this would happen, <br/> he noted it was important to the administration that the process begin with this legislative session.</p>",
   "p2":
    "<p> He states a desire to incentivize growth by making the tax code more competitive. Currently rated near the bottom at number 45 in the 2021 State Business <br/> Tax Climate Index, the state can do a lot to improve to rate of business growth to the state.  The process of eliminating an income tax is incredibly complicated though, so the state is carefully navigating <br/> the early stages of this process by ensuring all planning is done prior to implementation.</p>",
   "p3":
    "<p> Something unique about the income tax code in the state of Arkansas is that instead of having different brackets for levels of income, the state has three different rate schedules <br/> that apply to total income. With a base of 3.4 percent on income above $22,200  that increases for Income above 37,200 to 5.9 percent and finally earners above 79,300 have a rate of 6.6%.</p>",
   "p4":
    "<p> It is a complicated system and has a top marginal rate that is significantly higher than its neighbors.  Though this does mark an improvement overall in  2022 <br/>  the top rates were 6.9 percent so a modest decrease in this legislative session. Income tax revenue in the state of Arkansas attributes 28 percent of the total revenue <br/>  in terms of state tax collection. While this is a large amount of money, its not insurmountable as their neighbor Mississippi has put together a plan to eliminate <br/>  both corporate and individual income taxes, though with less of a budgetary effect. So the long term implications and exact necessary revenue that is constituted <br/>  by that 28 percent remains to be seen.</p>",
   "p5":
    "<p> They are bracing for a long haul on this project by implementing a slow chain of revenue triggers. Basically, the state would schedule incremental rate reductions <br/> for certain thresholds.  This allows for adjustments to meet budgetary constraints.  Even with these triggers though means that they will have to deal with getting income <br/> elsewhere and with a staggering state and local sales tax rate of 9.53 percent (the second highest in the nation)  there is not a lot of wiggle room to make up the income. <br/> There are several remedies stopping short of complete income tax removal including a simplification of the three tier system.  The necessary steps will require a lot of <br/>legislative work and during a pandemic large financial changes in the sales tax could be detrimental to the lowest income and unemployed. That being said it is still being  <br/>viewed as a commendable long term effort that may yet improve the bottom line of the average person from Arkansas and overall attract more small to medium businesses <br/> to open in and around the state.</p>",
   "id": "2",
   "vertical": "tax",
  },
  {
   "title": "Dealing with Self Employment Tax with the New Cares Act",
   "img1": Cares1,
   "img2": Cares2,
   "date": "1/11/ 2022",
   "img3": Cares3,
   "p1":
    "<p> Irrespective of one’s employment situation the plurality of Americans were greatly affected by the economic downturn caused by the coronavirus. The number of small <br/> businesses that have been forced to close is staggering and the number grows everyday.  Further those who have managed to survive do so at the detriment of <br/>  their employees leaving massive income tax bills for the self employed that are now requiring attention lest a large portion of Americans continue to struggle.</p>",
   "p2":
    "<p> Fortunately the CARES act has legislation set to apply relief for those with high self employment tax bills, including the option to completely defer payments. <br/>  While this will provide an immediate windfall in the coming months as tax bills become due again in April, it is not without some pitfalls. Here are some guidelines <br/>  for those with self employment taxes who seek to defer using CARES legislation as their guidelines.</p>",
   "p3":
    "<p> To be certain there are only specific types of taxes allowed to be deferred in this initiative so before beginning down the path of planning to not pay taxes in the immediate future be certain that you are intending to defer payment on the right type of taxes.  According to the IRS, ““self-employed individuals may defer the payment of 50 percent of the Social Security tax imposed under section 1401(a) of the Internal Revenue Code on net earnings from self-employment income for the period beginning on March 27,  2022 and ending December 31,  2022.”</p>",
   "p4":
    "<p> However, the deferred payments must still be made by the deadlines that are applicable to all who chose to elect to defer their taxes.  To avoid a penalty please <br/>  be sure to strictly adhere to the following guidelines:        <ul>        <li> On December 31, 2021, 50 percent of the eligible deferred amount; and </li>        <li> On December 31, 2022, the remaining amount. </li>        </ul>        <p>Looking at a bottom line example, take some real numbers. Let’s say you owe 10,000 in SSI tax for the period from 3/27/ 2022 to 12/31/ 2022. That means your total <br/>  necessary tax payments are 5,000 dollars by the end of this year and the other half by the end of 2022.         Obviously there is no cap on the amount you’re allowed to pay <br/>  back before the end of 2021, but there is a minimum of 50 percent to avoid a late payment penalty. </p>",
   "p5":
    "<h3> So should I defer payments if I am self employed? </h3>        <p> While the immediate crunch of the last few months and an impending tax bill may make this a tempting offer, there are a number of considerations you should make <br/> including  being prepared for a larger tax bill in 2022 and not compounding a problem by kicking a can down the road that you can’t afford at all. If for instance you <br/> were to make no payments at all through the early part of 2021 you stand to see a significant amount of money owed to the federal government in 2022 and 2023 <br/> so if you predict a stagnant growth depending on your industry, bear in mind the risk and reward of gritting your teeth and bearing it. </p>        <p>Even with additional aid on the way for small businesses and self-employed, it will definitely not be more than a stop gap with a large bill awaiting <br/> those who will eventually come to pay everything they owe the IRS. Though if you simply cannot afford to pay right now due to direct hardship <br/> from the coronavirus you can defer up to 50 percent of your required share of SSI payments. Keep a record of your payments should you decide to defer <br/> to avoid further problems.</p>",
   "id": "3",
   "vertical": "tax",
  },
  {
   "title": "How To Pay Taxes on Your Stock Purchases in 2021",
   "img1": Stocks1,
   "date": "1/11/ 2022",
   "img2": Stocks2,
   "img3": Stocks3,
   "p1":
    "<h3> Did you buy stocks for the first time in  2022? </h3> <p> Be sure to read here to learn the ins and outs of reporting capital gains and losses from any stock transactions. While this was an historic year <br/> in the stock market and a great year to enter for folks who previously couldn’t afford to buy in any significant way, it exposes an entire new generation <br/> of taxpayers to the risks for underpaying on capital gains and ending up with a heavy tax bill in the following years.</p>",
   "p2":
    "<p>Firstly, pat yourself on the back if you managed to make a significant investment in the stock market for the first time this year, it’s a big step in diversifying <br/> your money and having an easier transition to retirement from your career. But, take time to read guides and speak to tax professionals before filing a tax return if <br/> you bought or sold stocks for the first time.</p>",
   "p3":
    "<p>To keep it simple, if you sold investment in  2022, you may need to pay taxes equal to the gains from the sale. Capital gains is a simple calculation, selling price - purchase price. </p>  <p>Once you have a number that represents your capital gains, how much you owe is contingent on a number of factors. First and foremost  you have to classify your holding as either long term or short term. If you held the asset for less than a year it qualifies as a short term holding and may be taxable at a rate of up to 37 percent of the capital gains depending on your overall individual tax bracket.  Many new investors should be wary of these as many probably purchased and sold a lot of newly acquired assets during the tumult of the stock market in April and May.  Contrarily long term holdings are taxed at a rate of 20, 15 or even not at all.</p>",
   "p4":
    "<p>If you were among some of the more fortunate who didn’t have to dip into their savings, you may not owe any capital gains, be certain that you will probably have taxes <br/> owed for dividends and interest. If you own stocks or index funds, the dividends you periodically receive either as interest or a bond will need to be reported and you will <br/> have to pay taxes on it.</p>   <p>Here are some tips for reporting stocks and investments on your tax return. To start you must ensure you have all the necessary documents at the <br/> time of filing, primarily the 1099-DIV to report dividends from companies you are invested in and a 1099-B which is for reporting capital gains through the year.</p>",
   "p5":
    "<p>When filing multi form tax returns it’s best to have a CPA assist to prevent errors that will cause you to owe more than you are already paying. <p>As you continue to invest, it’s likely your taxes will continue to increase. To avoid paying even more in taxes, you may want to consider a tax-free investment vessel, <br/> such as a 401(k), Roth IRA, regular IRA, or a health savings account.</p>",
   "id": "4",
   "vertical": "tax",
  },
  {
   "title": "What Is An Offer In Compromise?",
   "img1": Oic1,
   "date": "1/11/ 2022",
   "img2": Oic2,
   "img3": Oic3,
   "p1":
    "<p> Are friends and family telling you to file an <b>‘offer in compromise’</b> to reduce your tax debt? Do  you keep putting it off because you don’t know an <b>‘offer in compromise’</b> is? <br/>  Simply put, it’s an  IRS program that allows you to settle your tax debt for less than what you owe.</p> <p> Once you’ve  paid the amount agreed on, your entire tax debt goes away, even though you didn’t pay all of it.  Sounds too good to be true, right? <br/> Here’s what you really need to know about getting an offer in  compromise before you go calling the IRS, because it’s never that easy.</p>",
   "p2":
    "<p>First of all, you have to qualify for this program. And to do that, you have to have filed all your  recent federal taxes. Nor can you be in bankruptcy. <br/> Even if you decide you can still qualify for  this program, the application requires a number of confusing forms, a $186 application fee, and  an initial payment.</p> <p>That’s right, your application alone for this program requires you to send a  down payment. Guess what, neither the application fee nor the down payment are refundable, <br/> whether your application is approved or not. If your application is accepted, then good news,  that down payment is applied towards the amount agreed upon.</p> <p>If your application is rejected,  they’re still keeping your down payment. This down payment can be as much as 20% of the  amount agreed upon. Don’t worry though, <br/> you can file an appeal if your offer is rejected within  30 days of the decision.</p>",
   "p3":
    "<p>So you’ve submitted your offer, application fee and down payment--now what? While you’re  waiting to hear back, the IRS can do a number of things. First of all, it can take up to two years  to review your application and render a decision. </p>  <p>Next, it can file a ‘Notice of Federal Tax Lien,’  which means the government can make a legal claim against your property in the amount of  your full tax debt. You can file an appeal once you receive this notice, but <br/> good luck with that. </p>  <p> Even while your application is being reviewed, you must continue to make your payments  towards the tax debt. You can choose to make a 20% down payment when you submit your  application, or you can choose to make periodic monthly payments in equal amounts until the  debt is paid.</p> <p> A separate ‘Low Income Certification’ does exist for those who cannot afford the  application fee. Those who meet these guidelines also do not have to submit an initial payment,  nor do they have to make payments while their application is being reviewed. The IRS does not  grant this certification to a great many people.</p>",
   "p4":
    "<p>If you’ve been waiting for more than two years for your decision, then congrats! Your  application is automatically accepted if it takes the IRS more than two years <br/>to get back to you.  If this is the case, then any refunds due within the calendar year in which your offer is accepted  will also be applied to your tax debt.</p> <p> <b>If a Federal Tax Lien was filed against you, that claim  against your property will not be released until your agreed upon amount is fully paid.</b> </p>",
   "p5":
    "<p>If your application and appeals are ultimately rejected, then fear not, there are other state and federal programs that can help reduce your amount of tax debt.</p>",
   "id": "5",
   "vertical": "tax",
  },
  {
   "title": "What is a Penalty Abatement?",
   "img1": Penalty1,
   "date": "1/11/ 2022",
   "img2": Penalty2,
   "img3": Penalty3,
   "p1":
    "<p>If you have a tax debt that you cannot pay due to circumstances outside your control, is there  anything you can do about it? You can try to get a Penalty Abatement <br/> from the IRS. This only  applies to certain people in certain situations, but it’s your best bet if this is the first time you’ve  been unable to pay federal taxes.</p>",
   "p2":
    "<p>There are two different types of penalty abatements--reasonable cause, and first-time. Here are  the requirements to qualify for a first-time penalty abatement:</p><ul><li> Clean history of paying taxes in full and on time for the previous three years. </li><li> Filed all currently required returns or filed an extension. </li><li> You have paid, or arranged to pay, any tax due. </li></ul><p>The first time penalty abatement only clears you from one tax period, and you still have to pay  any back taxes you owe outside of his abatement period. <br/> This is an underused option for  first-time [offenders], and can be a great way to make up for a mistake, or to buy more time to  get back on track with paying <br/> your taxes on time. For first-timers, you will get an instant  decision if you call the IRS and request the abatement directly. If you write to them, the decision <br/> will take between two and three months</p>",
   "p3":
    "<p>The other type of penalty abatement is the reasonable cause. This option is a little more complicated, but can be used if you aren’t a first-timer. To apply for this type of abatement, you’ll need to write to the IRS and explain the following</p>  <ul>  <li>The type of penalty you want removed</li>  <li>The events and specific facts and circumstances of your situation, and explain how      these events were outside of your control</li>   <li>Attach documents that will prove your case</li>     </ul>  <p>Once received, the IRS will review your case and evidence, and make a decision within three or    four months. They will consider the effort you made to pay your taxes in the period for which    you’re penalized, and your prior history of paying on time.  </p>  ",
   "p4":
    "<p>This can be a good alternative when your financial situation isn’t where you’d like it to be, due to things outside your control. This option is especially useful if a <br/> natural disaster like a flood, fire or hurricane has damaged or destroyed your home. Even if you have insurance, there are still other costs associated with losing or <br/> repairing damage to your home that add up quickly. Those can be anything from hotel bills to lost wages from time away from work. Another positive is that you will <br/>have plenty of documentation of a natural disaster, even if you don’t have proper homeowner’s insurance.</p>",
   "p5":
    "<p>If your situation is something besides a natural disaster, there are still other ways in which you can prove to the IRS that you can’t pay because of something<br/> that’s not your fault.</p>",
   "id": "6",
   "vertical": "tax",
  },
  {
   "title": "What is a Direct Debit Installment Agreement?",
   "img1": Ddia1,
   "img2": Ddia2,
   "date": "1/11/ 2022",
   "img3": Ddia3,
   "p1":
    "<p>A direct debit installment agreement is basically ‘autopay’ for your tax payments. It’s fairly easy  to set up online, because the IRS does not want you to miss your <br/>payments! This agreement  allows you to set up equal monthly installments that come out of your bank account  automatically until your entire agreed-upon payment <br/> has been paid.</p>",
   "p2":
    "<p>The main benefit of this program is that you have a definite start and end date for your payment  plan. This means that your interest doesn’t compound as the <br/> months go by. The agreement  basically freezes your interest amount throughout the entire length of your payment plan, so  you’re not paying any additional interest <br/> as you make your monthly payments.</p>",
   "p3":
    "<p>The other benefit of this program is that you never miss a payment, and your payments are  never late. It’s a really great option if you or your business owes less than $25,000. No more  remembering to mail payments, and no more payments getting lost in the mail! The only real  drawback to this option is that you have to keep enough funds in your account to avoid any  insufficient funds penalties from your bank. I highly recommend setting up this payment plan  online, because the setup fee is only $31, as opposed to a $107 setup fee if you set it up over  the phone.</p>",
   "p4":
    "<p>Now regardless of the amount you owe the IRS, they can place a lien on your credit. A lien is  the government’s claim on your property for the amount of taxes you owe. <br/> This can bring your  credit score way down, and affect your ability to get a loan or a mortgage. The good news is  that if you owe less than $25,000, you can request the IRS <br/> to remove the lien from your credit  after three months of direct debit installment payments. If you owe more than $25,000, you may  or may not have a lien placed on your <br/> credit at all, so long as you are making your payments via  direct debit, or through payroll deduction.</p>",
   "p5":
    "<p>In general, the IRS offers you the most benefits when you sign up to make your payments  through their direct debit installment agreements, or payroll deduction.  <br/>Because they are  automatically receiving your payments in an equal amount every month, they are much more  inclined to work with you<br/>. If your case involves requesting <br/> some type of penalty abatement, be  prepared for more negotiation and longer delays in getting your case resolved. Again, this is the  best option for those who owe less <br/> than $25,000, and have sufficient funds to make the  payments. </p>",
   "id": "7",
   "vertical": "tax",
  },
  {
   "title": "What is a Notice of Deficiency?",
   "img1": Nod1,
   "img2": Nod2,
   "img3": Nod3,
   "date": "1/11/2021",
   "p1":
    "<p>A notice of deficiency is a letter from the IRS stating that you owe income taxes, along with      interest and penalties. It is an official notice from the those who owe less <br/> an assessment of      your tax situation is being conducted, and that you are encouraged to start making payments      immediately.</p>",
   "p2":
    "<p>When you file your taxes, the IRS verifies your returns to make sure that are not (purposefully or      not) neglecting to report any or all of your income. If they find that<br/> your return does not match      what your employer’s return says they paid you, it will trigger the IRS to send a Notice of      Deficiency, stating that your return has been changed,<br/> and that you now owe a balance on your      income taxes to the IRS. This is yet another reason why it is critical that you file all W2s from      your employers, even if you only <br/> made a small amount from one of them. The importance of      this cannot be overstated in the context of our growing ‘gig economy.’</p>",
   "p3":
    "<p>If you’ve received a Notice of Deficiency, then you have 90 days from the date the letter is      mailed to dispute their assessment. If you believe the IRS is mistaken in their assessment that      you owe them money, you have the right to appeal. If you choose to appeal your notice of      deficiency, then it’s highly recommended that you speak with a tax attorney, who can help you      better prepare your reasons for appeal. A tax attorney can also spot if you are the one who is      mistaken, and that the IRS is correct that you a balance on your taxes, saving you a lot of time      and money on an appeal for no reason.</p>",
   "p4":
    "<p>The main instance in which your notice of deficiency would be dropped is if you can prove that        you were a victim of identity theft. This can happen if someone has filed <br/> a fraudulent return with        the IRS using your stolen social security number. Or, someone could have given your social        security number to their employer, which would result <br/> in fraudulent W2s being issued in your        name, therefore triggering the mismatch between your filed returns and the W2s issued in your        name. If this is the case, contact<br/> the IRS immediately to explain the reason for the discrepancy.</p>",
   "p5":
    "<p>If you’ve received a notice of deficiency, do not ignore it. The consequences of ignoring this        notice, when you know you have to pay, range from wage garnishment <br/> to jail time. If you have        no wages, they will start deducting payments from your bank account. If you have nothing in        your bank account, they will start taking away everything <br/> you own. If you don’t own enough        assets to pay off the amount of the debt, then you are subject to incarceration. There are many        steps in between a notice of deficiency <br/> and jail time, and there are several options available to        work with the IRS to reduce your debt, and/or set up payment plans.</p>",
   "id": "8",
   "vertical": "tax",
  },
  {
   "title": "What is a Notice of Federal Tax Lien?",
   "img1": Lien1,
   "date": "1/11/ 2022",
   "img2": Lien2,
   "img3": Lien3,
   "p1":
    "<p>A Notice of Federal Tax Lien is different from a tax lien itself, because the notice declares      publicly that the IRS has a legal claim on your property (the lien) in the <br/> amount of the tax debt      owed. This is done so that other creditors, such as banks or lenders, are aware that the IRS      has a greater claim to your property than they do. <br/> This means that if your home is foreclosed      on, the IRS gets paid before the banks and/or mortgage lenders do. Not only do your creditors      receive this notice, but <br/>employers and landlords can also receive this information. This can      bring your credit score way down, and affect your ability to get a new mortgage or a loan.</p>",
   "p2":
    "<p>It’s important to know that the amount your notice says that you owe does not take into account      any payments you’ve made since the date the notice was issued, <br/>nor does it include any      charges associated with issuing the lien itself. If you want to see your balance minus anything      you’ve paid off recently, you’ll have to call the IRS <br/> to see your true balance, which will include      the extra charges for filing the lien.</p>      <p>If you wish to appeal a notice of federal tax lien, you have only five business days to do so by      filing a request for a “Collection Due Process Hearing.” <br/>After this court hearing, a determination      will be made by the Office of Appeals as to whether your lien should remain filed, be released,      or withdrawn.</p>",
   "p3":
    "<p>A “release” of a federal tax lien means that the lien itself has been cleared, as well as the public      notice to creditors. This means banks and other lenders have first priority again in collecting      payments from you. The only way a federal tax lien will be released is if payment of your debt is      guaranteed by a bond, or if you’ve agreed on an Offer in Compromise with the IRS. This means      that you and the IRS have agreed on an amount you will pay them back, which is usually      significantly lower than the amount you actually owe.</p>",
   "p4":
    "<p>A federal tax lien “withdrawal” only means that the Notice of a Federal Tax Lien has been      removed from the public record. This is in no way removes the lien, <br/> nor does it erase the debt      you owe. It merely tells other creditors that the IRS no longer has the greatest claim to your      property. A withdrawal is most likely to be  <br/>granted if you’ve entered into a Direct Debit      Installment Agreement with the IRS, where you’ve agreed to let them take a certain amount      directly out of your bank   <br/>account every month.</p>      <p>A federal tax lien is serious business, but such drastic measures are only taken by the IRS after              you’ve been notified several times that you owe taxes and you have still not acknowledged any      of the notices. A tax lien will affect every area of your financial health. It attaches to all property      you own like your home or vehicles, any financial assets such as investment income, and any      future assets you come to own after the lien is issued.</p>",
   "p5":
    "<p>A tax lien will also bring your credit score way down, which will directly affect your ability to get aloan or a second mortgage. If you own a business, a tax lien <br/> also applies to all your businessassets including property, equipment, and your accounts receivable. Even if you or yourbusiness file for bankruptcy, your federal <br/> tax lien and Notice of a Federal Tax lien still applythroughout the bankruptcy process.</p>      <p>The easiest way to avoid a federal tax lien is to simply file accurate tax returns, and pay any         taxes owed to the IRS in a timely manner. It’s certainly easy to avoid <br/> your tax debts and let         them keep piling up, but eventually you will be subject to a lien and eventually a levy from the         IRS. </p>",
   "id": "9",
   "vertical": "tax",
  },
  {
   "title": "Why Should I File My Taxes Even if I Can’t Pay?",
   "date": "1/11/ 2022",
   "img1": File1,
   "img2": File2,
   "img3": File3,
   "p1":
    "<p>The main reason to file your taxes even if you can’t pay is that if you don’t file, you’ll end up      owing the IRS more in the end from penalties and interest. In fact, the IRS<br/> can charge you an      extra “failure to file” penalty, and add up to 25% more to your overall tax bill. This is on top of all       the other penalties and interest that they’re already <br/>charging you.</p>      <p>Don’t make the mistake of thinking that if you don’t file your taxes, the IRS won’t be able to find      you, and thus won’t be able to collect money from you. This is absolutely<br/> untrue. The IRS will      find you, and they will collect from you through federal tax liens, levies, and wage garnishments.      They will take away everything you own, empty your<br/> bank accounts, and eventually put you in      jail if they have to. Usually it doesn’t get as far as jail time unless you’re Al Capone, because      the IRS is willing to work with you<br/> on paying your tax debt.</p>",
   "p2":
    "<p>The second reason to file your taxes, even if you can’t pay, is that the IRS has the right to      withhold future refunds from you down the road. Even if you’re due thousands<br/> of dollars in      refunds from them, the IRS will keep your money because of previous unfiled returns. Another      incentive to file and claim your refunds is that those refunds <br/>can be used towards paying off      your debt.</p>",
   "p3":
    "<p>If you let years and years of unfiled returns accumulate, you’ll be in serious trouble. The US      government can and will prosecute you for “fraudulent failure to file.” This is a serious criminal      offense and can carry a sentence of jail time. A penalty of this magnitude does require some      investigation from the IRS to provide clear and convincing evidence that you intentionally did not      file your taxes in an attempt to avoid paying them.</p>",
   "p4":
    "<p>The good news is that usually this penalty doesn’t occur if you forgot to file one return, or if you      filed your returns late. The IRS has to prove criminal intent in court<br/> in order to prosecute you for      fraudulent failure to file. If you somehow find yourself in this difficult position, you do have the      right to appeal the charges. However <br/>appeals are only granted if you are able to show      reasonable cause, or if you qualify for a first-time abatement. A first-time abatement means that      the IRS will waive<br/> your debt entirely if you meet a certain set of circumstances.</p>",
   "p5":
    "<p>The bottom line is that you should always file your tax returns on time, even if you know that youowe thousands of dollars. The IRS does have several options to <br/>help you with your taxdebt--whether it’s waiving it entirely, settling for a much lower amount, or setting up a monthlypayment plan. No matter your situation, know that  <br/>you do have the right and the opportunity toplead your case and explain your circumstances to the IRS.</p>",
   "id": "10",
   "vertical": "tax",
  },
  {
   "title": "What kind of help is available to me for my state taxes?",
   "date": "1/11/ 2022",
   "img1": Taxhelp1,
   "img2": Taxhelp2,
   "img3": Taxhelp3,
   "p1":
    "<p>This subject can be a bit complicated, as each state has their own rules for what they will andwill not waive for you. The best place to start is with states offering <br/> amnesty programs. Theseprograms will waive any late fees and penalties associated with filing your returns late, provided you pay the full balance of your tax debt.<br/> They will usually waive any interest associated withyour debt as well. Unfortunately as of June 2019, only two states are currently offering amnesty programs for the <br/> 2018 tax year--New Jersey and New Mexico.</p>",
   "p2":
    "<p>The good news is that this changes every year. States can decide to offer amnesty programs atany time, and every year more states implement these programs.<br/> The best place to look if yourstate offers an amnesty program, or will offer one in the future, will be your state’s Departmentof Revenue website. A simple Google search<br/> will provide the answer for each state.</p><p>Usually if you owe federal taxes to the IRS, you also owe state taxes. The bad news here isthat it’s a lot easier and quicker for state simple google search <br/> start collecting from youthan it is for the IRS to do so. State tax boards have a lot more power to put stress on yourfinancial health, so any state tax debts need to <br/> be dealt with urgently.</p>",
   "p3":
    "<p>The reason for this urgency and the aggressiveness of state tax authorities is that state budgetsare made up of 100% tax revenue. Therefore, if the state doesn’t collect its taxes, they literallycannot afford to pave roads and take care of basic public works. On the other hand, the IRS isofficially part of the US Department of Treasury, which has the power to actually print newmoney. Thus, the US government doesn’t rely 100% on collecting tax revenue to operate.</p><p>It’s difficult to provide specific answers for state tax relief, because each of the 50 states havedifferent tax codes. However, there are a few general programs that are available in almostevery state in various forms.</p>",
   "p4":
    "<p>Most states will allow you to pay back your tax debt in installments. It is highly recommendedthat you go through a tax relief company with accredited tax attorneys<br/> on staff who cannegotiate a lower rate for you than what your state will offer. That’s why it’s highlyrecommended to shop and compare tax relief firms who can negotiate <br/>on your behalf, especiallywith your state tax authorities.</p><p>Many states also offer a “pennies on the dollar” settlement, which is similar to the IRS’ offer incompromise program. This type of settlement is just what it says-- <br/> your state tax board will settleyour debt for less than what you actually owe. The reason why they will settle for a loweramount is so they can at least collect back a portion <br/> of what they’re owed, as opposed tocollecting nothing, and spending more money on collection activities. This is also why the IRS will settle for a lower amount.<br/> Now this program is a lot more difficult to qualify for than a simpleinstallment agreement, and your state will make it very difficult for you to cut through the redtape<br/>to do so. Again, this is another good reason to work with a reputable tax relief firm in yourstate.</p>",
   "p5":
    "<p>Unfortunately, the ugly truth of the matter with state taxes is that it’s difficult even for tax relieffirms to negotiate any kind of significant settlement with<br/> state tax authorities. It’s nearlyimpossible to get any help on your own, so don’t go into a negotiation with expectations ofreducing your debt by the same amount<br/> as you have with the IRS.</p>      <p>The best place to start dealing with your state tax debt is to do some research on your state’sDepartment of Revenue website to see what kind of tax relief<br/> programs they offer. Most stateshave a robust Tax Board website which allows you to apply for relief programs completelyonline, and it’s very simple to create an<br/> account to handle all your transactions. You can even   make your payments online and set up an automatic payment plan if you wish. This will also allow you<br/> to be more informed if you contact a tax relief firm to help you with trying to negotiate a settlement.</p>",
   "id": "11",
   "vertical": "tax",
  },
  {
   "title": "What is an annuity?",
   "date": "2/10/ 2022",
   "img1": Annuity1,
   "img3": Annuity2,
   "img2": Annuity3,
   "p1":
    "<p>In the simplest of terms an annuity is a lump sum of money dispersed over time. They come in many shapes and sizes, most commonly are retirement accounts like<br/> the 401-k or the 403-b. Some other common examples of annuities include savings interest, mortgage payments and insurance. The two key components are regular<br/> payments up front and an equal disbursement at a later date as needed or upon a certain pre agreed upon date.</p>",
   "p2":
    "<p>In the broadest sense you can categorize annuities based on their payment structure. In an annuity-immediate payments are made near the end of the period so<br/> as to increase the accrual of interest. Whereas conversely in an annuity due payment structure you would receive a disbursement immediately in the cycle so as to<br/> increase the speed of the payments to the purchaser up front.</p> <p>Another way to more broadly divide annuities is along the line of how the money is distributed, or under what terms. Guaranteed Annuities like settlements <br/>and retirements are paid over a period known in advance whereas contingent annuities like insurance payments are, common examples are life insurance which<br/> will only be paid over the lifetime of the annuant. </p>",
   "p3":
    "<p>Another category for generally classifying annuities is based on the variability of their payment structure and much of this has to do with the source of the accumulation. Fixed annuities, things like state or federal pensions have a fixed payment structure. They are guaranteed to disperse the initial investment. These do not get regulated by the SEC. Contrarily Variable annuities, the general investment portfolio that constitutes the plurality of 401ks being the primary example of of these, have variable disbursements based on their payment into varying funds that trigger disbursements relative to the individual buy ins, these must be regulated by the SEC. </p>",
   "p4":
    "<p>The final and most distinctive feature is the length of time that must elapse between the accumulation phase and the disbursement phase.Examples being the <br/>difference between a settlement or prize based annuity vs that of a retirement account. </p>",
   "p5":
    "<p>When you are structuring an annuity it is important to make sure you are certain about the nature of your terms and your payment responsibilities and the nature <br/> of your disbursements. A fixed annuity implies that if you have no other regular source of income, you must set your budget to be consistently within the amount of those<br/> disbursements. This is common amongst retirees. Though if you are developing a private 401k, especially in times of emergency, there can be flexibility in how you take <br/>your payments. Be mindful of the draw down penalties you might incur in this instance.</p><p>For more information on dealing with structuring or setting up an annuity, please refer to our article.</p>",
   "id": "12",
   "vertical": "annuity",
  },
  {
   "title": "How Long Should I Save For Retirement?",
   "date": "2/10/ 2022",
   "img1": Accumulation1,
   "img2": Accumulation2,
   "img3": Accumulation3,
   "p1":
    "<p>When starting out a structured TSA for your retirement it’s important to keep in mind a few things. The most important is how long are you able to reasonably work in <br/>your field, if there are physical limitations that may become more evident with age, then its probably best to take a very aggressive posturing with early savings.</p>",
   "p2":
    "<p>In one study Fidelity took a look at the average 30 something with an account and suggested that you begin by saving at least half of if <br/>not all of 1 years salary into some sort of long term maturing annuity if you intend on retiring in your 60s. This is so that you are able to successfully save 10 times your salary.</p> <p>Personally in this economy saving 1 years salary by the time you are 35 seems a little unrealistic. So, here’s some good advice about saving early in your 30s.  <br/>If you are in a situation where you are unable to get your rent below 50 percent of your income. There are a number of applications on  the web that assist you in <br/>auto saving by rounding off your change.  The most popular of these is <a href='https://www.acorns.com'>Acorns</a> . Available on Ios and Android.</p>",
   "p3":
    "<p>Other apps like <a href='https://www.digit.co'>Digit</a> will analyze your spending patterns and attempt to autosave some money for you. The essence of the these applications is START SAVING. 5 dollars 10 dollars your change. By the time you hit 35, if you aren’t saving with some regularity or looking to find ways to make that habit a part of your life, you are setting yourself up for failure. </p>",
   "p4":
    "<p>So the long story short is, if you will be retiring in your 60s, start in your 30s and begin by doing, quite literally whatever you can. The idea in your thirties is that it’s <br/>primarily about developing the behavior and making the effort as you first begin to transition into what should hopefully be your long and stable career. This is primarily<br/> achieved by first getting your rent to below 30 percent of your income most easily and then putting a few hundred dollars into a savings account every month. If this isn’t<br/> realistic, then using a savings app might be the way to go. </p>",
   "p5":
    "<p>The gist is you want thirty years of savings in order to let that 1x income you manage to put away in your 30s mature to 10 times your normal yearly salary so that <br/>you have fifteen to twenty years of easy living. This is contingent on a number of factors of course, but the idea at its core is to allow your accounts to mature slowly <br/>to 10x over the course of 30 years generally starting in your early thirties </p>",
   "id": "13",
   "vertical": "annuity",
  },
  {
   "title": "How Much Do I Need To Set Aside To Retire?",
   "date": "2/10/ 2022",
   "img1": SetAside1,
   "img2": SetAside2,
   "img3": SetAside3,
   "p1":
    "<p>In order to receive maximum social security someone must work full time hours and above a certain threshold to receive the 1850 dollars per month for SSI. Generally <br/>speaking, the cost of living without the added medical expenses that come as age progresses means that you can hardly afford to live off of social security alone.</p> <p>So then how much is enough? Conventional wisdom on the subject suggests saving 10 times your salary so that you can maintain your current standard of living<br/> for 10-15 years after retirement. That’s a great heuristic, 10x. But that doesn’t mean the same thing to everybody. So, this article is dedicated to finding exact numbers<br/> for different subsections of the country.</p>",
   "p2":
    "<p>The following bits of information attempt to quantify median monthly income for various parts of the country and use those figures  to map out what you can expect<br/> to need as a lump sum to survive ten or more years without substantially altering your lifestyle. Then further we attempt to derive a basic savings you SHOULD be able<br/> to contribute depending on your level of income and desired level of comfort in the present.</p> <p>Dividing the United States up into 4 quadrants based on median income from 2018, we are able to accurately infer an average amount of savings you’d have <br/>to put aside based on where you live. Briefly the methodology considers that you earn a full wage for 40 years, you receive and deduct the full balance of a social <br/> security check from your monthly overhead, and that each contribution to a 401k has a maturation rate of the 5-6 percent range. From this we derived two figures, what <br/>your contribution has to be worth by the time you retire and then what the minimum contribution is you should make if you want your money to be worth that over a period <br/>of some maturation. </p>",
   "p3":
    "<p>In Washington D.C. , Maryland, New Jersey, Hawaii, Massachusetts, Connecticut, California, New Hampshire, Alaska, Washington State, Virginia or Colorado (the top 12 places by median income) we found that in order to<br/> maintain a preretirment level of income the average contribution to a 401k has to be worth $797 which means you must make a payment of at least $306 dollars every two weeks. </p>",
   "p4":
    "<p> In Utah, Minnesota, New York, Illinois, Delaware, Rhode Island, North Dakota, Oregon, Wyoming, Pennsylvania, Vermont or Wisconsin, we found that in order to<br/> maintain a preretirement level of income the average contribution to a 401k has to be worth $598 dollars by the time you retire meaning you must contribute at least <br/>$230 every two weeks to maintain preretirement levels of income. </p> <p>In Iowa, Nebraska, Arizona, Georgia, Nevada, Kansas, Michigan, South Dakota, Ohio, Indiana Maine or Idaho, we found that in order to<br/> maintain a preretirement level of income the average contribution to a 401k  has to be worth $510 by the time you retire meaning that you must contribute at least <br/>$196.50 every two weeks. </p>",
   "p5":
    "<p>In Florida, Montana, Missouri, North Carolina, Tennessee, South Carolina, Oklahoma, Kentucky, Alabama, Louisiana, New Mexico, Arkansas, Mississippi or <br/>West Virginia, we found that in order to<br/> maintain a preretirement level of income the average contribution to a 401k  has to be worth $396 by the time you retire meaning that you must contribute at least <br/>$150 every two weeks.</p><p>If you would like tips on how to save please refer to our other reference material.</p>",
   "id": "14",
   "vertical": "annuity",
  },
  {
   "title": "What Is The Best Type of Retirement Account For Me?",
   "date": "2/10/ 2022",
   "img1": Annuity1,
   "img2": Annuity2,
   "img3": Annuity3,
   "p1":
    "<p>When setting up for retirement there are a lot of questions you need to answer for yourself that require basic considerations. The core being which sort of retirement <br/>account should I be structurturing, or if my employer is doing it for me what can I expect out of my retirement account when it comes to how my contributions affect my day<br/> to day and what kind of return I can expect from the dollars I invest. </p>",
   "p2":
    "<p>For those with plain old IRAs or Individual Retirement Arrangements, your contributions are tax-deductible which means the income you put in does not get taxed<br/> at the time of deposit but rather when you make the withdrawal from the account. This <br/>allows you to set aside larger chunks of money up front without the tax burdens<br/> associated with other parts of your regular salary. </p><p>Contrarily Roth IRAs are made with post tax income so that upon withdrawal there is no penalty incurred. In order to decide between regular and Roth IRAs you <br/>must have some long term sense about whether you think your annual income and tax bracket will be lower or higher in retirement.</p>",
   "p3":
    "<p>Generally speaking the Roth IRA is for singles who make less than a certain threshold, so that basically they pay taxes on their money and then put away savings, that savings is allowed to mature and then the money withdrawn does not suffer a penalty relative to the value of the money at the time of withdrawal. Basically allowing those who may have less at the time of retirement to have a smaller tax burden. </p>",
   "p4":
    "<p>Next up is the 401(k) which is a retirement account offered by an employer, for many this default option at the very least establishes an account for savings,<br/> and if you have no already started an IRA and are offered an option to pay into a retirement account via your employers 401k program, it is probably in your best<br/> interest to opt in, unless of course you intend on investing in an IRA, though predominantly its 401ks that get restructured into IRAs and not the other way around.</p>",
   "p5":
    "<p>In deciding whether or not to opt in to an employer based retirement plan be sure to check if they have a company match policy.  Incentives like this often make<br/> opting into this not only a simpler option but a more robust path to retirement by effectively adding as much as 3 percent of your paycheck directly to the IRA at no charge,<br/> which at 70,000 a year for 40 years is 84,000 towards retirement which would mature at the same. If there is no incentive you should ensure that you are not getting laden<br/> with any administration fees by contributing. These sort of limitations can be a good reason to instead opt into a traditional IRA. </p> <p>In summary going into retirement there are three major avenues to take, and depending on your relationship with your employer and intent to work with that company <br/>until retirement, deciding on whether to opt into a private IRA and defer tax payments or to pay into your employer offered 401k is something you should address by the time <br/>you are 40.</p>",
   "id": "15",
   "vertical": "annuity",
  },
  {
   "title": "I Took Money Out Early Because Of The Pandemic, Now What?",
   "date": "2/10/ 2022",
   "img1": CovidRetire1,
   "img2": CovidRetire2,
   "img3": CovidRetire3,
   "p1":
    "<p>Over the last year and a half many of our lives have been upended and millions of Americans have been forced to make sacrifices in the face of a landscape where<br/> small business and brick and mortar establishments cannot sustain their levels of income, meaning that those who had been trying to save for retirement were yet again<br/>beset by a national crisis. </p>",
   "p4":
    "<p>This is a fairly large net as many of us had to adjust how we do business and experienced a level of hardship or loss that can be easily documented.</p> <p>If any of these describes you or your financial hardship then according to the CARES Act you are entitled to up to 100,000 of early withdrawals to offset your hardship.<br/> In the most basic example of how to offset the taxes you may incur by making this sort of early withdrawal the IRS has allowed you to declare at least ⅓ of the amount <br/>withdrawn in  2022 over 2021, 2022 and 2023. Effectively meaning if you lost all or most of your income in  2022 and subsidize by withdrawals from an IRA your income<br/> can still adequately reflect the level of hardship and not leave you with a hefty tax bill.</p>",
   "p2":
    "<p>If you were one of the many people under 59½ who made early withdrawals from your 401k in  2022 there are a few things you should know. In general if you fit<br/> any of the following qualifications you may be able to avoid penalty or receive tax assistance for paying back any of the withdrawals according to the IRS website:</p>",
   "p3":
    "<p><ul><li>You are diagnosed with the virus SARS-CoV-2 or with coronavirus disease 2019 (COVID-19) by a test approved by the Centers for Disease Control and Prevention;</li><li>Your spouse or dependent is diagnosed with SARS-CoV-2 or with COVID-19 by a test approved by the Centers for Disease Control and Prevention;</li><li>You experience adverse financial consequences as a result of being quarantined, being furloughed or laid off, or having work hours reduced due to SARS-CoV-2 or COVID-19;</li><li>You experience adverse financial consequences as a result of being unable to work due to lack of child care due to SARS-CoV-2 or COVID-19; or</li><li>You experience adverse financial consequences as a result of closing or reducing hours of a business that you own or operate due to SARS-CoV-2 or COVID-19.</li></ul></p>",
   "p5":
    "<p>Further if instead of declaring the money as income you are instead able to earn it back through the course of the next three years you can pay it back directly and<br/> it will be treated as a trustee to trustee exchange and not be subject to Federal income tax. </p><p>The short of it is, as long as you make an effort to declare and payback anything you’ve taken out over the next three years you stand to iincur minimal tax burden, <br/>that being said, you must make an attempt to pay the money back or report it as income at some point before 2024.</p>",
   "id": "16",
   "vertical": "annuity",
  },
  {
   "title": "What Is The Safest Kind Of Retirement Investment?",
   "date": "2/10/ 2022",
   "img1": Annuity1,
   "img2": Annuity2,
   "img3": Annuity3,
   "p1":
    "<p>If you are considering retiring and how you intend on paying for yourself and those who you love as you age, one of the considerations you may be balancing is <br/>what sort of risk am I willing to put into the growth of my money. </p><p>Over the last ten years we have seen variable annuities have periods of intense growth in value as stocks have soared and then times of intense contraction <br/> to almost nothing in the blink of an eye when there is what seems like the cyclical financial crisis beset upon Americans.</p>",
   "p2":
    "<p>If riding this type of roller coaster ride isn’t your cup of tea, there are options where you get closer to a 1:1 guarantee of funds with a small amount of interest.  <br/>That being said these fixed annuities are known for being fairly illiquid meaning while you are guaranteed to receive that amount of money over the terms sought, <br/> if you incur hardship accessing more of your money could prove difficult. </p>",
   "p3":
    "<p>The following though are a slew of benefits for those who may decide to opt into a fixed annuity. </p><h3>Predictable investment return</h3><p>Rates on these fixed annuities are calculated from money made by the portfolio holder which traditionally holds bonds as its form of interest accrual. They then must pay to that contract directly. The lack of control over what your money is invested in, may not appeal to everyone though.</p>",
   "p4":
    "<h3>Guaranteed minimum rates</h3><p>Interest on bonds at the Federal level will often fluctuate in response to the economy. This can have a negative effect on the value of a bond based investment offered  <br/>by a fixed annuity. Therefore when entering a fixed contract many will offer a guaranteed minimum interest rate so that again you have an exact expectation for the money  <br/> you will receive when you need it. </p><h3>Tax-deferred growth</h3><p>As fixed annuities like Life Insurance qualify as a Tax Sheltered account, its growth is tax deferred, and you are only taxed upon withdrawal from the account. This <br/>allows you to invest large sums of income and have lower tax debt when you are working more and then with the stability of the plan you are effectively at a 1:1 rate<br/><br/> setting aside for tomorrow guaranteed that regardless of the next disaster that money will be there for you.  </p>",
   "p5":
    "<h3>Guaranteed income payments</h3><p>The ability to transfer a fixed annuity into an immediate annuity making all payments guaranteed is another key benefit. </p><h3>Relative safety of principal</h3><p>Since the end user does not hold the bonds they are subject to less risk in fulfilling the contracts to liquidate. Though be advised that no annuities are federally <br/> insured so in the end there is a level of risk you assume by doing business with any annuity based payout company. </p>",
   "id": "17",
   "vertical": "annuity",
  },
  {
   "title": "What Is The Highest Yield Retirement Investment?",
   "date": "2/10/ 2022",
   "img1": YeildRetire1,
   "img2": YeildRetire2,
   "img3": YeildRetire3,
   "p1":
    "<p>As opposed to a fixed annuity a variable annuity exposes the individual purchaser to risk by allowing them to influence the portfolio that constitutes the underlying<br/> value of the account. The plurality of IRAs and 401ks are some form of variable annuity. </p><p>To ascertain the value of a variable annuity you must consider two factors, the initial payment amount and the returns on the principle. Tracking how much you <br/>invested and comparing to the value over the years you work will show you a more accurate year over year growth rate. The industry average is %5 to %8. </p>",
   "p2":
    "<p>Most commonly variable annuities are formed as deferred annuities like retirement accounts which allow the purchaser to maximize the growth of their accumulation<br/> phase in order to pay in only a fraction of your salary every year but retire with several years of income security. The issue being, if your golden years happen to come<br/> during one of the cyclical crunches that eliminate billions from the market in a blink, you stand to see years of steady gain wiped. </p><p>Traditionally you will never see the value of your variable annuity reduced to zero though it is theoretically possible. This is a stark difference from the fixed bond <br/>based annuities that most whole life insurance companies use to manage payments to policyholders.   </p>",
   "p3":
    "<p>There are several advantages of variable annuities though, including tax-deferred growth, an income stream tailored to you, guaranteed death benefit, protection of funds from creditors. These are typical of many types of retirement accounts, but specifically your ability to control the size and shape of your payout phase is a definite marked difference from the fixed annuity. </p>",
   "p4":
    "<p>If full exposure to market participation is something you don’t fancy, but at the same time you want some flexibility in making investment choices and have some <br/> return on investment from market exposure is a fixed-indexed annuity. These plans will expose you to many of the same markets and funds of a variable annuity. The<br/><br/><br/> drawback is that your upside is limited by a participation rate, caps or a spread, each simultaneously reducing the inherent risk of the investment but also trimming from<br/> the overall maximum value you may attain.   The value of A fixed-indexed annuity is either the greater of a) an annual, guaranteed minimum rate of return; or b) the return <br/> from a specified stock market index (such as the S&P 500®), reduced by certain expenses and formulas.</p>",
   "p5":
    "<p>In summary the way to maximize the value of your annuities payout phase is to both defer payments and expose the sum invested to the market in a complete <br/>variable annuity that constitutes the plurality of IRAs and Roth IRAs. There are ways to both expose your fund to the maturing market and ensure a sense of security <br/>of your money so that you don’t ever reach the same level of risk seen by those who have to retire when the stock market is at an all time low. This is done by investing<br/> in a fixed indexed annuity.  </p>",
   "id": "18",
   "vertical": "annuity",
  },
  {
   "title": "Best Practices when required to change 401k because of career ",
   "date": "2/10/ 2022",
   "img1": ChangeRetire1,
   "img2": ChangeRetire2,
   "img3": ChangeRetire3,
   "p1":
    "<p>If you are like a lot of us in the last few months, you’ve faced a lot of career uncertainty, may have even lost your job, or be dealing with that as an impending<br/> consequence of the ongoing squeeze from the Pandemic. </p> <p>If you have to change jobs and must consider the fate of an ongoing retirement investment with an employer here are your options. </p>",
   "p2":
    "<p>While this is not always an option, the path of least resistance is to leave the money where it is. If you have invested a significant amount, usually $5,000  <br/>or more, sometimes your employer will allow you to hold the funds in place as you may be more familiar with the investment practice and your contributions to the <br/>fund often aren’t managed by the employer. </p> <p>If you or they insist upon moving your money, the first logical step is to contact your next employer about their plan, ensuring whether to ask there is a matching <br/> policy, what the vesting strategy is and what kind of administrative fees there are. In some cases you can get a plan to plan roll over that allows you to not incur any<br/> sort of penalties. But if that is not an option, you may incur a withholding of up to %20 of the lump sum for tax purposes. You must also be sure to report this transaction<br/> as income on your tax return. </p>",
   "p3":
    "<p>The next option is to seek to roll it over into a Private IRA or Roth IRA. This is a good strategy if you have opted into a few 401ks as you move up in the world, and have a few balances, rolling over and consolidating them into a single IRA is usually the best course of action. When you do a rollover you receive no tax consequences, so if you cannot directly invest from employer to employer contacting the retirement portfolio manager for the company you will soon be working for and finding out where and how they allow rollovers from, you can plan your transfer through a private IRA then back to the 401k, or simply maintain the IRA. The downside there is that you lose automated contributions and vested matching. </p>",
   "p4":
    "<p>Should you be in a situation where transferring the money is not practical or an option, spending the money comes with caution, but sometimes cannot be avoided<br/> due to the hardships caused by career change. Bear in mind, should you opt for a lump sum distribution, you will pay income tax on it, and if you are younger than 59½<br/> you incur another 10 percent penalty. Keep in mind that some of this can be mitigated by the CARES act if the trouble occurred in  2022. This lump sum must also affect <br/>your yearly tax bracket claim. </p>",
   "p5":
    "<p>The final option is basically allowing the employer to disperse as they choose here is where the amount in the 401k comes into play. If it is less than $1,000 you will <br/>probably get a straight sum from your employer that will need to get recorded, if you have less than $5,000 and you do not state a preference and they do not allow you <br/> to keep it, they do not need your permission to roll it over into an IRA of their choosing.</p><p>In closing the most important thing to remember is anytime something moves from a tax sheltered account to your checking account, even if it moves into a TSA of  <br/>your choosing after MUST be  reported to the IRS as income and penalties must be taken into account when setting aside taxes.</p>",
   "id": "19",
   "vertical": "annuity",
  },
 ];

 return (
  <Fragment>
   <h2 className='text-center lead'>
    <span className='text-primary'>Read</span>
    <br />
    The Latest
   </h2>
   <div style={blogId === null ? blogStyle : entryStyle}>
    {blogId != null ? (
     <Modal
      blog={blogs[blogId]}
      toggleModal={toggleModal}
      showModal={showModal}
      clearModal={clearModal}
     />
    ) : (
     blogs.map((blog) => (
      <BlogItem
       key={blog.id}
       blog={blog}
       toggleModal={toggleModal}
       showModal={showModal}
       blogId={blogId}
       clearModal={clearModal}
      />
     ))
    )}
   </div>
  </Fragment>
 );
};

const blogStyle = {
 display: "grid",
 gridTemplateColumns: "repeat(4,1fr)",
 gridGap: "1rem",
};

const entryStyle = {
 display: "block",
 width: "88vw",
};

export default Blogs;
