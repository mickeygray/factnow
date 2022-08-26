import React from "react";
import img1 from "../../images/testimonial1.jpg";
import img2 from "../../images/W1.jpg";
import img3 from "../../images/M1.jpg";
import img4 from "../../images/W2.jpg";

const SuccessStories = () => {
 return (
  <div className='bg-light'>
   <h1 className='text-center'>Success Stories</h1>

   <div className='grid-2'>
    <div className='card'>
     <span>
      <img className='round-img1' src={img1} />
      <b>
       {"     "}Jason B.{"     "}
      </b>
      <i style={{ color: "#FFD700" }} className='fa-solid fa-star'></i>
      <i style={{ color: "#FFD700" }} className='fa-solid fa-star'></i>
      <i style={{ color: "#FFD700" }} className='fa-solid fa-star'></i>
      <i style={{ color: "#FFD700" }} className='fa-solid fa-star'></i>

      <i style={{ color: "#FFD700" }} className='fa-solid fa-star'></i>
     </span>
     <h5>A Fresh Start</h5>
     <p>
      I was afraid to make the call at first. I hadn’t filed in over 10 years. I
      worked various jobs and had no Idea where to start. I started receiving
      notice for amounts that I knew I could never pay. It felt hopeless Keller
      Dunn took action they called the IRS right away and started the process to
      and helped me in my time of need. I couldn’t thank them enough for the
      professionalism and their expertise.
     </p>
    </div>
    <div className='card'>
     <span>
      <img className='round-img1' src={img2} />
      <b>
       {"     "}Christie H.{"     "}
      </b>
      <i style={{ color: "#FFD700" }} className='fa-solid fa-star'></i>
      <i style={{ color: "#FFD700" }} className='fa-solid fa-star'></i>
      <i style={{ color: "#FFD700" }} className='fa-solid fa-star'></i>
      <i style={{ color: "#FFD700" }} className='fa-solid fa-star'></i>

      <i style={{ color: "#FFD700" }} className='fa-solid fa-star'></i>
     </span>
     <h5>A New Lease On Life</h5>
     <p>
      I owed 110K to the IRS and I hired a CPA to do an Offer for me. After
      almost a year the 25K offer got rejected, needless to saw I was angry and
      frustrated. I called around to number of places and I kept getting the
      Used Car Sales Pitch. No one was explaining what went wrong with the
      Offer, they just wanted my money. I called Keller Dunn and spoke with Ted,
      he was the complete opposite of everyone else. What a relief, he really
      knew his stuff. He explained that I should have been making estimated
      payments along with a few other things in order for the Offer to get
      accepted. I hired them on the spot and 6 months later the IRS accepted an
      offer of $4,300. I really couldn’t believe it, my business is back on
      track and paying my current taxes. I don’t know where I would be without
      them, 5 stars across the board!
     </p>
    </div>
    <div className='card'>
     <span>
      <img className='round-img1' src={img3} />
      <b>
       {"     "}Ali M. {"     "}
      </b>
      <i style={{ color: "#FFD700" }} className='fa-solid fa-star'></i>
      <i style={{ color: "#FFD700" }} className='fa-solid fa-star'></i>
      <i style={{ color: "#FFD700" }} className='fa-solid fa-star'></i>
      <i style={{ color: "#FFD700" }} className='fa-solid fa-star'></i>

      <i style={{ color: "#FFD700" }} className='fa-solid fa-star'></i>
     </span>
     <h5>Audit Specialists</h5>
     <p>
      We’re a California based company and we received an audit notice from the
      State of Ohio. They were requesting information from 2011 through 2017 and
      not just business information. They were also requesting all the personal
      tax information from each officer of the Corporation. It was very
      overwhelming and I wasn’t sure whom to turn to until I called Keller Dunn.
      I spoke with Ted and right away he put my mind at ease. He explained that
      there was definitely going to be balances owed, based on what I told him,
      but they were going to ensure we paid back the smallest amount with little
      or no exposure to the officers of the company. There were numerous people
      involved from our company, but Ted & Steven made everything seamless. The
      numerous conference calls and emails were always clear, concise and
      returned in a timely manner. They were able to take a very scary situation
      and turn it into a very manageable one. I appreciate their professionalism
      and would recommend them to anyone it a similar situation.
     </p>
    </div>
    <div className='card'>
     <span>
      <img className='round-img1 m2 p2' src={img4} />
      {"     "}
      <b>Jasmine W.</b>
      {"     "}
      <i style={{ color: "#FFD700" }} className='fa-solid fa-star'></i>
      <i style={{ color: "#FFD700" }} className='fa-solid fa-star'></i>
      <i style={{ color: "#FFD700" }} className='fa-solid fa-star'></i>
      <i style={{ color: "#FFD700" }} className='fa-solid fa-star'></i>

      <i style={{ color: "#FFD700" }} className='fa-solid fa-star'></i>
     </span>
     <h5>Keller Dunn Will Fight For You</h5>
     <p>
      “I’m not perfect, every year I always owed taxes and I knew what I was
      doing was wrong. I’ve always managed to pay what I owe throughout the year
      always behind owing year after year. I just figured it was the only way I
      could pay my taxes. It got to a point that I received a visit from an IRS
      Agent and then all of a sudden all my receivables were being levied every
      time I received payment from a client. I was just going to call it to
      quits and shut down my business because I couldn’t handle the stress. I
      called Keller Dunn and spoke with Ted. He quickly evaluated my situation
      and pointed out that the IRS had the wrong information and my tax
      liability was not accurate. I thought I owed it because that’s what the
      IRS was saying and I just believed them. Keller Dunn resolved the problem,
      educated me on how to operate efficiently and now I’m current with all my
      taxes.
     </p>
    </div>
   </div>
  </div>
 );
};

export default SuccessStories;
