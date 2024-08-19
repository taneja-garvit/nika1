import React, { useEffect } from 'react'

function TermsOfService() {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, []);

  return (
    <div className="w-[90%] mx-auto py-40 flex flex-col gap-[100px] md:gap-[75px] 2xl:gap-40">
<div className="flex justify-start w-full mx-auto">
        <div className="flex flex-col w-full gap-[30px] md:gap-[40px] xl:gap-[141px] justify-between 2xl:justify-start xs:text-center">
          <h1 className='text-[50px] md:text-[40px] 2xl:text-6xl font-extrabold font-["Ubuntu",sans-serif]'>Terms of Service</h1>
        </div>
      </div>
    </div>
  )
}

export default TermsOfService
