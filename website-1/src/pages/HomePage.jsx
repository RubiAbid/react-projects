import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import Affiliation from "../components/Affiliation"

const HomePage = () => {
  return (
    <div className="w-full relative bg-cover bg-center flex flex-col">
      {/* Hero Section */}
      <div 
        className="w-full relative bg-cover bg-center flex flex-col justify-center px-8 pt-[100px] pb-20"
        style={{ backgroundImage: "url('https://palegio.com.br/wp-content/uploads/2023/09/Hero.webp')" }}
      >
        {/* Optional overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Hero content */}
        <div className="relative z-10 max-w-[1200px] mx-auto">
          {/* Line + Text above */}
          {/* Line + Text above */}
<div className="flex flex-row sm:flex-row items-center sm:items-center gap-2 text-center sm:text-left">
  <span className="block w-8 sm:w-10 h-[2px] bg-[#AF9669]"></span>
  <p className="text-[#AF9669] text-sm sm:text-lg md:text-xl leading-snug">
    Committed to Helping Our Clients Succeed
  </p>
</div>

{/* Heading */}
<h1
  className="text-xxl sm:text-2xl md:text-3xl font-bold mt-4 
             w-[50%] sm:w-[60%] md:w-[75%] text-white leading-snug 
             text-center sm:text-left break-words"
>
  You Need a Reliable Law Firm That Helps Deal with Your Family Matters
</h1>


          {/* Line + Location + Phone */}
          <div className="mt-20 w-full max-w-[800px] mx-auto flex flex-col items-center">
            <hr className="w-full border-t border-[#565455] mt-6" />

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-4 gap-6 w-full">
              {/* Location */}
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <IoLocationOutline className="text-[#B2986B]" size={20} />
                  <p className="text-[#B2986B] text-lg">Our Location</p>
                </div>
                <p className="text-white text-xl font-bold">Melbourne, Australia​</p>
              </div>

              {/* Phone */}
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <FaPhone className="text-[#B2986B]" size={20} />
                  <p className="text-[#B2986B] text-lg">Free Review</p>
                </div>
                <p className="text-white text-xl font-bold">91 123-456-7890/91</p>
              </div>
            </div>
          </div>
        </div>
      
      </div>

      {/* Affiliation Section at bottom */}
      <Affiliation />
    </div>
  )
}

export default HomePage
