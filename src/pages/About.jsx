import React, { useEffect } from 'react'

function About() {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, []);

  return (
    <div className="w-[90%] mx-auto pb-[75px] 2xl:pb-40 pt-40 flex flex-col gap-[100px] md:gap-[75px] 2xl:gap-40">
      
      <div className="flex justify-start 2xl:justify-center w-full 2xl:max-w-[1064px] mx-auto md:h-[347px] 2xl:h-[513px] 2xl:text-center">
        <div className="flex flex-col gap-[30px] md:gap-[40px] 2xl:gap-[175px] justify-between 2xl:justify-start">
          <h1 className='text-[32px] md:text-[40px] 2xl:text-6xl font-extrabold font-["Ubuntu",sans-serif]'>We believe in the future of blockchain technology and decentralized finance.</h1>
          <p className='text-lg md:text-2xl text-[#f5f5f5]'>We simplify digital asset investing with systematic, long-term strategies, offering tailored products for both institutional and individual investors. We build secure and accesible DeFi products, enabling everyone to gain exposure to key themes in decentralized finance.</p>
        </div>
      </div>

      <div className="w-full rounded-[30px] flex flex-col py-[40px] xs:py-[62px] justify-center items-center h-[265px] sm:h-[379px] md:h-[265px] 2xl:h-[339px] bg-gradient-to-r from-[#bf5626] via-[#974e69] to-[#52418f] ">
          <div className="flex flex-col justify-between items-center gap-5 2xl:gap-[55px] ">
            <p className="text-[24px] sm:text-[40px] md:text-[28px] text-center font-extrabold md:text-center font-['Ubuntu',sans-serif] max-w-[706px]">Join us in shaping the future of finance</p>
            <div className="btn btn1">Get Started</div>
          </div>
        </div>

    </div>
  )
}

export default About
