import React from 'react';
import { NavLink } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative w-full h-[700px] flex items-center justify-center">
      {/* Background with blur + overlay */}
      <div className="absolute inset-0">
        <img
          src="pexels1.jpg"
          alt="bgimage"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0  backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-12 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1B5241] mb-6">
          Unlock Your Potential with Our Courses
        </h1>
        <p className="text-white text-lg md:text-xl mb-8 leading-relaxed">
          Our courses are designed for everyone — whether you’re just starting your journey 
          or aiming to master advanced skills. Join thousands of learners <span className="font-semibold text-[#1B5241]">gaining the tools, knowledge, and confidence </span>
          knowledge, and confidence to achieve success in today’s fast-paced digital world.  
          <br />Are you ready to start?
        </p>

        <NavLink
          to="/courses"
          className="inline-block px-8 py-3 text-lg font-semibold text-white bg-[#1B5241] rounded-lg shadow-lg 
                     transition-all duration-300 hover:bg-[#A05525]"
        >
          Enroll Now
        </NavLink>
      </div>
    </div>
  );
};

export default HeroSection;
