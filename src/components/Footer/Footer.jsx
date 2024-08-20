import React from 'react'
import { logo } from '../../assets'
import { Link } from 'react-router-dom'
import axios from "axios"
import { useState } from 'react'




function Footer() {
  const [email, setEmail] = useState("");
const [error, setError] = useState(null);

function collectMail(){
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert("Enter Valid Email");
    setError("Please enter a valid email address.");
    setTimeout(() => setError(null), 2000);
    return;
  }
  
  axios.get(`https://script.google.com/macros/s/AKfycbxF1wcL6GXVJanGmsElMO9zABwL2MzM0nAHPxvyAwjBTVEjKRl4sNM0nRx57H2ODrXNPw/exec?email=${email}`)
  .then(res => {
    setError("Email sent successfully!");
    alert("Email recorded successfully!");
    setTimeout(() => setError(null), 2000);
    setEmail('')
  })
  .catch(err => {
    setError("An error occurred. Try again later.");
    setTimeout(() => setError(null), 2000);
    return;
  });
};

  return (
    <div className=" h-[2305px] xs:h-[1144px] lg:h-[858px] w-[90%] mx-auto flex flex-col justify-between gap-3">

   
    <div className="bg-[#00043e] grid grid-cols-1 xs:grid-cols-3 2xl:grid-cols-6 gap-6 2xl:gap-1 2xl:place-items-center ">
        <div className="w-[7.25rem] h-20 xs:col-span-3 2xl:col-span-1">
          <img src={logo} className="w-full h-full object-cover" alt="" />
        </div>
        <div className="flex flex-col gap-[19px] ">
          <p className="text-2xl font-medium font-['Ubuntu',sans-serif]">Resources</p>
          <ul className="list-none h-[84px] flex flex-col gap-1 ">
            <li className="text-base hover:underline cursor-pointer"><Link to="/about">About Us</Link></li>
            <li className="text-base hover:underline cursor-pointer"><Link to="/blog">Blog</Link></li>
            <li className="text-base hover:underline cursor-pointer"><Link to="/documentation">Product Documentation</Link></li>
          </ul>
        </div>
        <div className="flex flex-col gap-[19px]">
          <p className="text-2xl font-medium font-['Ubuntu',sans-serif]">Social</p>
          <ul className="list-none h-[84px] flex flex-col gap-1 ">
            <li className="text-base hover:underline cursor-pointer"><Link to="/">LinkedIn</Link></li>
            <li className="text-base hover:underline cursor-pointer"><Link to="/">Twitter</Link></li>
            <li className="text-base hover:underline cursor-pointer"><Link to="/">Discord</Link></li>
          </ul>
        </div>
        <div className="flex flex-col gap-[19px]">
          <p className="text-2xl font-medium font-['Ubuntu',sans-serif]">Legal</p>
          <ul className="list-none h-[84px] flex flex-col gap-1 ">
            <li className="text-base hover:underline cursor-pointer"><Link to="/privacy">Privacy Policy</Link></li>
            <li className="text-base hover:underline cursor-pointer"><Link to="/terms">Terms of Service</Link></li>
          </ul>
        </div>
        <div className="flex flex-col gap-[19px] xs:col-span-3 2xl:col-span-2  place-items-center">
          <p className="text-2xl font-medium font-['Ubuntu',sans-serif]">Join our newsletter</p>
          <div className="h-[54px] 2xl:h-[99px] xs:w-max flex items-center bg-[#544f9a] rounded-[100px]">
            <input type="email" value={email} placeholder='Email Address' className="bg-transparent px-8 w-full h-full outline-none" onChange={e => setEmail(e.target.value)} />
            <button className="btn btn1 h-[54px] 2xl:h-[99px] 2xl:w-[176px] px-3 py-1" onClick={collectMail}>Submit</button>
          </div>
        </div>

    </div>

    <div className="flex flex-col gap-[14px] text-[#808080] text-xs font-['Ubuntu',sans-serif] leading-[22px]">
        <p>Disclaimer: The material contained on this website is for informational purposes only and is not legal, tax, investment, financial, or other advice. You should not take, or refrain from taking, any action based on any information contained herein or any other information that we make available at any time, including blog posts, data, articles, links to third-party content, Discord content, news feeds, tutorials, tweets, and videos. Before making any financial, legal, technical, or other decisions, seek independent professional advice from a licensed and qualified individual in the appropriate area.</p>
        <p>You shall not purchase or otherwise acquire our token products if you are: a citizen, resident (tax or otherwise), and/or green card holder, incorporated in, owned or controlled by a person or entity in, located in, or have a registered office or principal place of business in the U.S. (defined as a U.S. person), or if you are a person in any jurisdiction in which such offer, sale, and/or purchase of any of our token products is unlawful, prohibited, or unauthorized (together with U.S. persons, a “Restricted Person”). The term “Restricted Person” includes, but is not limited to, any natural person residing in, or any firm, company, partnership, trust, corporation, entity, government, state or agency of a state, or any other incorporated or unincorporated body or association that is established and/or lawfully existing under the laws of a jurisdiction in which such offer, sale, and/or purchase of any of our token products is unlawful, prohibited, or unauthorized.</p>
        <p>Products referenced on this website may not be available to persons who are located in, or residents of, the United States and are subject to the risks associated with purchasing crypto assets, including cryptocurrencies and crypto tokens. Because crypto assets are a new technological innovation with a limited history, they are highly speculative assets. Future regulatory actions or policies may limit the ability to sell, exchange, or use a crypto asset. The price of a crypto asset may be impacted by the transactions of a small number of holders. Crypto assets may decline in popularity, acceptance, or use, impacting their price. Carefully consider the risk factors, purchase objectives, fees, expenses, and other information associated with any investment before making a purchase decision. All products that are speculative in nature involve a high degree of risk and uncertainty. There is no guarantee that any token will grow in value.</p>
        <p>Past performance of any product is not indicative of future results. Prospective users must not construe the contents of this website as legal, tax, investment, or other advice. Each prospective user is urged to consult with its own advisors with respect to legal, tax, regulatory, financial, accounting, and similar consequences of investing in any product, the suitability of the purchase, and other relevant matters. This website contains an overview summary of the constituents of each product. This website is neither an offer to sell nor a solicitation or recommendation to buy units or shares in any product. The summary set forth on this website does not purport to be complete and may be qualified either in whole or in part by reference to other documents or sources of information. Do not place undue reliance on this website. To the extent this website or any product refers to or incorporates third-party content, DiversiFi is not responsible for any errors or omissions in such content. The tokens have not been approved or disapproved by the Securities and Exchange Commission, are not registered under the Securities Act of 1933, the Investment Company Act of 1940, or any state securities commission or other regulatory body. DiversiFi is not registered as an Investment Adviser under the Investment Advisers Act of 1940 or as a Commodity Pool Operator or Commodity Trading Adviser under the Commodity Exchange Act. Your use of this site signifies that you accept our Terms and Conditions of Use (HYPERLINK), including the Privacy Policy (HYPERLINK).</p>
    </div>

     </div>
  )
}

export default Footer
