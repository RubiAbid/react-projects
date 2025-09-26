import { FaInstagram, FaFacebookF, FaWhatsapp, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      {/* Horizontal line */}
      <div className='w-full border-t-4 border-[#4C625B]'></div>

      <div className='bg-[#EBCDB8] w-full flex flex-col items-center justify-center py-8 gap-4'>
        {/* Logo */}
        <img 
          src="logo1.png" 
          alt="logo"
          className="w-[180px] h-auto"
        />

        {/* Social icons row */}
        <div className='flex flex-row gap-6 text-[#1B5241] text-2xl'>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
          <a href="mailto:example@example.com">
            <FaEnvelope />
          </a>
        </div>

        {/* Description */}
        <p className='text-[#181818] text-center w-[900px]'>
          Empowering ambitious women to unleash their full potential, establish thriving online brands from the ground up, and attain complete financial independence.
        </p>

       {/* Buttons row */}
<div className='flex flex-row gap-6 mt-4 text-[#1B5241]'>
  <button className='hover:text-[#A05525] transition-colors'>
    Contact Us
  </button>
  <button className='hover:text-[#A05525] transition-colors'>
    FAQs
  </button>
  <button className='hover:text-[#A05525] transition-colors'>
    Terms & Conditions
  </button>
</div>

      </div>

      <div className='bg-[#A05425] w-full h-[80px] text-center p-5'>
        <h2 className='text-[#EBDBD0]'>
          Copyright 2025 | RiseAcademy. All Rights Reserved
        </h2>
      </div>
    </div>
  )
}

export default Footer
