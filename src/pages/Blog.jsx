import React, { useEffect } from 'react'
import { Card } from '../components';

function Blog() {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, []);

  return (
    <div className="w-[90%] mx-auto py-40 flex flex-col gap-[100px] md:gap-[75px] 2xl:gap-40">
      <div className="flex justify-start w-full mx-auto h-[1387px] md:h-auto xl:h-[656px]">
        <div className="flex flex-col w-full gap-[30px] md:gap-[40px] xl:gap-[141px] justify-between 2xl:justify-start">
          <h1 className='text-[50px] md:text-[40px] 2xl:text-6xl font-extrabold font-["Ubuntu",sans-serif]'>Blog</h1>
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px] md:gap-[60px] xl:gap-[145px] place-items-center">
              {
                [1, 2, 3].map((blog, index) => (
                  <Card key={index} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
