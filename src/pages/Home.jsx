import React, { useEffect } from 'react'
import { graph, product1, product2, product3, product4 } from '../assets'

function Home() {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, []);

  return (
    <>
      <div className="w-[90%] mx-auto py-40 flex flex-col gap-[100px] md:gap-[75px] 2xl:gap-40">
        
        <div className="flex justify-between w-full 2xl:h-[657px]">
          <div className="2xl:w-[50%] flex flex-col gap-[30px] md:gap-[100px] 2xl:gap-[141px] ">
            <h1 className='text-[40px] md:text-6xl font-extrabold font-["Ubuntu",sans-serif]'>On-Chain Diversification Made <span className='text-[#ff7e00]'>Simple</span>.</h1>
            <p className='text-lg md:text-2xl'>Investment opportunities available to everyone </p>
            <button className='btn btn1'>Waitlist</button>
          </div>
          <div className="hidden 2xl:block w-[800px]">
            <img src={graph} className='w-full h-full object-cover' alt="" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-[41px] md:gap-[50px] 2xl:gap-[100px]">
          <div className="text-[40px] md:text-6xl font-extrabold w-full md:text-center font-['Ubuntu',sans-serif]">Our Products</div>
          <div className="flex flex-col gap-[30px] md: 2xl:gap-[200px] w-full lg:w-[90%] 2xl:w-[80%]">
            <div className="w-full 2xl:h-[375px] flex items-center justify-between">
              <div className="hidden md:block h-[250px] w-[250px] 2xl:h-[336px] 2xl:w-[336px] overflow-hidden ">
                <img src={product1} className='w-full h-full object-cover' alt="" />
              </div>
              <div className="p-0 md:p-8 flex flex-col gap-[41px] md:gap-[57px] w-full md:w-[398px] lg:w-[575px] ">
                <h6 className='text-[#ff7e00] text-2xl font-["Ubuntu",sans-serif] '>Crypto Asset Indices</h6>
                <p className='text-lg md:text-xl text-[#cccccc]'>No more Twitter, Discord, and whitepapers, our products are designed to provide diversified exposure to the crypto market.</p>
              </div>
            </div>
            <div className="w-full 2xl:h-[375px] flex flex-row-reverse items-center justify-between">
              <div className="hidden md:block h-[250px] w-[250px] 2xl:h-[336px] 2xl:w-[336px] overflow-hidden ">
                <img src={product2} className='w-full h-full object-cover' alt="" />
              </div>
              <div className="p-0 md:p-8 flex flex-col gap-[41px] md:gap-[57px] w-full md:w-[398px] lg:w-[575px] ">
                <h6 className='text-[#ff7e00] text-2xl font-["Ubuntu",sans-serif] '>Yield and Trading Products</h6>
                <p className='text-lg md:text-xl text-[#cccccc]'>Our optimized yield generation and leverage products remove the complications of DeFi, allowing you to focus on your strategy.</p>
              </div>
            </div>
            <div className="w-full 2xl:h-[375px] flex items-center justify-between">
              <div className="hidden md:block h-[250px] w-[250px] 2xl:h-[336px] 2xl:w-[336px] overflow-hidden ">
                <img src={product3} className='w-full h-full object-cover' alt="" />
              </div>
              <div className="p-0 md:p-8 flex flex-col gap-[41px] md:gap-[57px] w-full md:w-[398px] lg:w-[575px] ">
                <h6 className='text-[#ff7e00] text-2xl font-["Ubuntu",sans-serif] '>Arbitrage & Quant Strategies</h6>
                <p className='text-lg md:text-xl text-[#cccccc]'>You don’t have to be a professional trader to feel like one. Our algorithmic trading products capitalize on market inefficiencies and quantitative models.</p>
              </div>
            </div>
            <div className="w-full 2xl:h-[375px] flex flex-row-reverse items-center justify-between">
              <div className="hidden md:block h-[250px] w-[250px] 2xl:h-[336px] 2xl:w-[336px] overflow-hidden ">
                <img src={product4} className='w-full h-full object-cover' alt="" />
              </div>
              <div className="p-0 md:p-8 flex flex-col gap-[41px] md:gap-[57px] w-full md:w-[398px] lg:w-[575px] ">
                <h6 className='text-[#ff7e00] text-2xl font-["Ubuntu",sans-serif] '>Real-World Asset (RWA) Products</h6>
                <p className='text-lg md:text-xl text-[#cccccc]'>With tokenized traditional assets from real estate to alternative investments, we make your on-chain portfolio complete. </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-[41px] md:gap-[50px] 2xl:gap-[100px]">
          <div className="text-[40px] md:text-6xl font-extrabold w-full md:text-center font-['Ubuntu',sans-serif] h-[132px] 2xl:">Nika simplifies crypto investing          </div>
          <div className="flex flex-col items-center 2xl:flex-row gap-[30px] md: 2xl:gap-[200px] w-full">
            <div className="flex flex-col gap-[10px] max-w-[430px] h-[200px] 2xl:h-[217px] 2xl:justify-between ">
              <h6 className='text-[#ff7e00] text-2xl font-["Ubuntu",sans-serif] '>Institutional-Grade Security</h6>
              <p className='text-lg 2xl:text-2xl leading-9 text-[#cccccc]'>Third-party custodians, audited products, and insurance options ensure the safety of your assets.</p>
            </div>
            <div className="flex flex-col gap-[10px] max-w-[430px] h-[200px] 2xl:h-[217px] 2xl:justify-between ">
              <h6 className='text-[#ff7e00] text-2xl font-["Ubuntu",sans-serif] '>Investor-Centric</h6>
              <p className='text-lg 2xl:text-2xl leading-9 text-[#cccccc]'>Expertly curated products designed to optimize risk-adjusted returns, tailored to meet your investment goals.</p>
            </div>
            <div className="flex flex-col gap-[10px] max-w-[430px] h-[200px] 2xl:h-[217px] 2xl:justify-between ">
              <h6 className='text-[#ff7e00] text-2xl font-["Ubuntu",sans-serif] '>Accessibility</h6>
              <p className='text-lg 2xl:text-2xl leading-9 text-[#cccccc]'>Invest in diverse products without capital constraints, enabling you to diversify your investments freely.</p>
            </div>
          </div>
        </div>

        <div className="w-full rounded-[30px] flex flex-col py-10 justify-center items-center h-[308px] sm:h-[379px] md:h-[713px] bg-gradient-to-r from-[#6195cc] via-[#5a6cae] to-[#534694] ">
          <div className="h-[449px] flex flex-col justify-between items-center 2xl:gap-[90px] ">
            <p className="text-[#1a1a1a] text-[22px] md:text-2xl ">Stay ahead of the curve</p>
            <p className="text-[20px] sm:text-[40px] md:text-6xl text-center font-extrabold md:text-center font-['Ubuntu',sans-serif] max-w-[706px]">Sign Up for Early Access and Exclusive Insights</p>
            <div className="btn btn1">Get Started</div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Home
