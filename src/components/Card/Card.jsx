import React from 'react'

function Card() {
  return (
    <div className='h-[449px] w-full xxs:w-[330.59px] p-5 font-["Inter",sans-serif] bg-white text-[#0F1717] rounded-[10px] flex flex-col justify-between gap-[110px]  '>
      <div className="text-[22px] text-center">Blog Image</div>
      <div className="flex flex-col gap-[72px] items-start ">
        <h6 className='text-[32px]'>Blog Title</h6>
        <p className="text-[#626F6F] text-base">Blog Description</p>
        <div className="flex flex-col text-sm items-start">
          <p className='font-bold'>Company Name</p>
          <p className='text-[#626F6F] '>Publish Date</p>
        </div>
      </div>
    </div>
  )
}

export default Card
