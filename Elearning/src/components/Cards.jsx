import React from 'react'

const Cards = () => {
  return (
    <div className='bg-[#FFEDE1] w-full h-[600px] flex flex-col justify-center items-center gap-5'>
        <p className='text-[#22634C] text-center'>Here is How We Help You</p>
        <div className='flex flex-row gap-8 flex-wrap'>
   

<div className="relative border-2 border-[#9E572B] w-[350px] h-[300px] rounded-lg flex justify-center items-center">
  <img
    src="pic1.jpg"
    alt="pic1"
    className="w-[320px] h-[270px] object-cover"
  />

  {/* Floating bottom box */}
  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 
                  bg-[#FFEDE1] border-[#FFEDE1] w-[200px] h-[50px] flex items-center justify-center border-2 rounded-md text-[#004F35] font-bold shadow-md">
    Learn Digital Skills
  </div>
</div>


              {/* Card 2 */}
  <div className='relative border-2 border-[#9E572B] w-[350px] h-[300px] rounded-lg [box-shadow:0_0px_10px_#9E572B] flex justify-center items-center'>
    <img src="pic2.jpg" alt="pic2" className='w-[320px] h-[270px]' />
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 
                    bg-[#FFEDE1] border-[#FFEDE1] w-[200px] h-[50px] flex items-center justify-center border-2 rounded-md text-[#004F35] font-bold shadow-md">
      Start Earning
    </div>
  </div>

  {/* Card 3 */}
  <div className='relative border-2 border-[#9E572B] w-[350px] h-[300px] rounded-lg [box-shadow:0_0px_10px_#9E572B] flex justify-center items-center'>
    <img src="pic3.jpg" alt="pic3" className='w-[320px] h-[270px]' />
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 
                    bg-[#FFEDE1] border-[#FFEDE1] w-[200px] h-[50px] flex items-center justify-center border-2 rounded-md text-[#004F35] font-bold shadow-md">
      Build Your Business
    </div>
        </div>
 </div>
    </div>
  )
}

export default Cards