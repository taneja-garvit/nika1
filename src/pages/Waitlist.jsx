import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function Waitlist() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  function collectMail() {
    axios
      .get(
        `https://script.google.com/macros/s/AKfycbxF1wcL6GXVJanGmsElMO9zABwL2MzM0nAHPxvyAwjBTVEjKRl4sNM0nRx57H2ODrXNPw/exec?email=${email}`
      )
      .then((res) => {
        setError("Email sent successfully!");
        alert("Email recorded successfully!");
        setTimeout(() => setError(null), 2000);
        setEmail("");
      })
      .catch((err) => {
        setError("An error occurred. Try again later.");
        setTimeout(() => setError(null), 2000);
        return;
      });
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-[90%] mx-auto py-40 flex flex-col gap-[100px] md:gap-[75px] 2xl:gap-40">
      <div className="flex justify-center w-full mx-auto h-[428px] md:h-[254px] 2xl:h-[362px] text-center">
        <div className="flex flex-col justify-between gap-[30px] md:gap-[50px] 2xl:gap-[93px] items-center">
          <h1 className='text-[40px] 2xl:text-6xl font-extrabold font-["Ubuntu",sans-serif]'>
            On-chain diversification starts here
          </h1>
          <p className="text-lg 2xl:text-2xl text-[#f5f5f5] md:w-[470px] mx-auto">
            Join the waitlist for early access and rewards eligibility
          </p>
          <div className="flex items-center gap-2 2xl:w-[425px]">
            <input
              type="email"
              className="bg-white outline-none py-2 px-3 rounded-lg text-black"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="border border-[#ff7e00] p-2 rounded-lg text-[#ff7e00]"
              onClick={collectMail}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Waitlist;
