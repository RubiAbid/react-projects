import React from 'react';

const Footer = () => {
  return (
    <div className="bg-[#232629] text-[#7A7A7A]">
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-between gap-10 p-8 sm:p-14">
        
        {/* Column 1 */}
        <div className="flex flex-col gap-4 sm:w-[300px]">
         <div className="w-full flex justify-center sm:justify-start">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaNIXsAZwVGZenEASkOXrHVY6nfD38xLLFkg&s"
    alt="Logo"
    className="h-[90px] w-[150px] bg-white rounded-md"
  />
</div>

          <p className="text-sm sm:text-base">
            Prime Lawyers is a leading law firm providing top legal services in Pakistan and abroad.
          </p>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-2 sm:w-[200px]">
          <h3 className="text-white font-bold mb-2 text-xl">Contact Detail</h3>
          <p className="text-sm sm:text-base">Address: 678 Melbourne, Australia</p>
          <p className="text-sm sm:text-base">Number: 91 123-456-7890</p>
          <p className="text-sm sm:text-base">Email: info@example.com</p>
          <p className="text-sm sm:text-base">Mon to Fri: 9.00 AM – 5.00 PM</p>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-2 sm:w-[200px]">
          <h3 className="text-white font-bold mb-2 text-xl">Practice Areas</h3>
          <p className="text-sm sm:text-base">Child Custody</p>
          <p className="text-sm sm:text-base">Adoption</p>
          <p className="text-sm sm:text-base">Domestic Violence</p>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col gap-2 sm:w-[200px] mt-4 sm:mt-0">
          <p className="text-sm sm:text-base">Marriage</p>
          <p className="text-sm sm:text-base">Civil Union & Divorce</p>
          <p className="text-sm sm:text-base">Property Settlements & Rights</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="p-5 bg-[#232629] border-t border-[#7A7A7A]">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 px-4 sm:px-10">
          <p className="text-[#7A7A7A] text-sm sm:text-base">Copyright © 2025 Prime Lawyers</p>
          <p className="text-[#7A7A7A] text-sm sm:text-base">Powered by Prime Lawyers</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
