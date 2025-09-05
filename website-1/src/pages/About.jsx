"use client";

import { PiGraduationCapDuotone } from "react-icons/pi";
import { GiInjustice } from "react-icons/gi";
import { TbAward } from "react-icons/tb";
import { motion } from "framer-motion";

const services = [
  "Strategic counsel on complex transactions",
  "Corporate governance advisory",
  "Regulatory compliance solutions",
  "Tax planning & advisory",
  "Dispute resolution & litigation",
  "Cross-border investment structuring",
];

const About = () => {
  return (
    <div className="p-5 sm:p-10 flex flex-col items-center">

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[800px] text-center sm:text-left"
      >
<h1 className="text-center text-[#1E3A5F] py-5 text-3xl sm:text-3xl md:text-5xl lg:text-5xl font-bold">
  About
</h1>
        <p className="text-black font-bold text-sm sm:text-base md:text-lg leading-relaxed">
          B<span className="font-normal">aryalay.law</span> is a boutique corporate law firm in Pakistan providing comprehensive legal and tax advisory services, serving both domestic and international clients.  
          With a deep understanding of Pakistan's legal landscape and international best practices, we deliver:
        </p>
      </motion.div>

      {/* Services Section */}
      <div className="flex flex-wrap justify-center gap-5 mt-10 sm:mt-20">
        {services.map((text, index) => (
          <motion.div
            key={index}
            className="border-2 border-[#1E3A5F] rounded-md w-[90%] sm:w-[45%] md:w-[400px] h-[50px] flex justify-center items-center text-white bg-[#1E3A5F] 
                       hover:shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 text-sm sm:text-base md:text-base text-center px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {text}
          </motion.div>
        ))}
      </div>

      {/* Centered Text */}
      <div className="flex items-center justify-center text-center w-[95%] mt-10 sm:mt-20">
        <h2 className="font-extrabold text-2xl sm:text-3xl md:text-3xl leading-snug">
          Whether you're a multinational corporation, SME, startup, or individual entrepreneur,
          Baryalay.law is your trusted partner in Pakistan, providing:
        </h2>
      </div>

      {/* Info Cards */}
      <div className="bg-[#F5F5F5] w-full flex flex-col md:flex-row gap-10 mt-10 sm:mt-20 justify-center items-start p-5 sm:p-8">
        <div className="flex flex-col gap-5 w-full md:w-[300px]">
          <PiGraduationCapDuotone className="text-2xl text-[#B2986B]" />
          <h2 className="text-black text-xl font-bold">Qualified Legal Attorneys</h2>
          <p className="text-[#5A5A5A] text-sm sm:text-base">
            This is a short description elaborating the service you have mentioned above.​ 
          </p>
        </div>
        <div className="flex flex-col gap-5 w-full md:w-[300px]">
          <GiInjustice className="text-2xl text-[#B2986B]" />
          <h2 className="text-black text-xl font-bold">Over 20 Years of Experience</h2>
          <p className="text-[#5A5A5A] text-sm sm:text-base">
            This is a short description elaborating the service you have mentioned above.​ 
          </p>
        </div>
        <div className="flex flex-col gap-5 w-full md:w-[300px]">
          <TbAward className="text-2xl text-[#B2986B]" />
          <h2 className="text-black text-xl font-bold">Our Awards and Certificates</h2>
          <p className="text-[#5A5A5A] text-sm sm:text-base">
            This is a short description elaborating the service you have mentioned above.​ 
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
