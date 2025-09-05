import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#232629] shadow-md">
      <div className="flex justify-between items-center h-[100px] px-6">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaNIXsAZwVGZenEASkOXrHVY6nfD38xLLFkg&s" 
            alt="Logo" 
            className="h-[95px] w-[180px] bg-white rounded-b-full" 
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-white hover:text-amber-400">Home</Link>
          <Link to="/about" className="text-white hover:text-amber-400">About</Link>
          <Link to="/contact" className="text-white hover:text-amber-400">Contact</Link>
          <Link to="/faq" className="text-white hover:text-amber-400">FAQ</Link>
          <Link to="/practice" className="text-white hover:text-amber-400">Practice Area</Link>
          <Link to="/client" className="text-white hover:text-amber-400">Our Clients</Link>
          <Link 
            to="/news" 
            className=" text-white py-2 px-4 rounded hover:bg-transparent hover:text-amber-400 transition"
          >
            News and Insights
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <div className="md:hidden text-white text-2xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#232629] w-full absolute top-[100px] left-0 flex flex-col items-center gap-4 py-4 shadow-lg">
          <Link onClick={toggleMenu} to="/" className="text-white hover:text-amber-400">Home</Link>
          <Link onClick={toggleMenu} to="/about" className="text-white hover:text-amber-400">About</Link>
          <Link onClick={toggleMenu} to="/contact" className="text-white hover:text-amber-400">Contact</Link>
          <Link onClick={toggleMenu} to="/faq" className="text-white hover:text-amber-400">FAQ</Link>
          <Link onClick={toggleMenu} to="/practice" className="text-white hover:text-amber-400">Practice Area</Link>
          <Link onClick={toggleMenu} to="/client" className="text-white hover:text-amber-400">Our Clients</Link>
          <Link 
            onClick={toggleMenu} 
            to="/news" 
            className="py-2 px-4 rounded hover:bg-transparent hover:text-black transition"
          >
            News and Insights
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
