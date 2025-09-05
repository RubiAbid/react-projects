import React from 'react';

const Affiliation = () => {
  const updateText = `Baryalay.law successfully advises FinVolution Group, China's largest NYSE-listed fintech, in setting up and licensing a lending NBFC in Pakistan which will operate its digital nano-lending app "Daira". Baryalay.law, Advocates & Consultants, advises an independent power producer (IPP) in connection with renegotiation of its power purchase agreement with the Government of Pakistan.`;

  return (
    <div className="bg-white text-[#1E3A5F] p-6 sm:p-10 md:p-14 flex flex-col gap-6">
     <div className="flex justify-center items-center md:justify-start w-full">
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
    Affiliations
  </h2>
</div>


{/* Description - responsive */}
<p className="text-base sm:text-sm md:text-lg font-bold text-black leading-relaxed 
              w-auto max-w-auto  px-10 sm:px-4 md:px-0 break-words">
  B<span className="font-normal">aryalay.law</span> is a member firm of Abasin Consult, a global network of closely affiliated corporate advisory service providers. 
  As a member of the Abasin Consult, B<span className="font-normal">aryalay.law</span> is able to service clients across multiple service areas in Pakistan as well
  as the United Kingdom, Europe and the Middle East. The partner firms of Abasin Consult offer a comprehensive range of business
  advisory services including legal (corporate and dispute resolution), tax, accounting, audit and financial advisory and business/transaction
  advisory services.
</p>

 {/* Link Section */}
<div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 text-center sm:text-left">
  <h3 className="font-extrabold text-black text-base sm:text-lg md:text-xl">
    For more information, please visit the Abasin Consult website:
  </h3>
  <a
    className="text-[#1E3A5F] text-base sm:text-lg md:text-xl underline font-extrabold"
    href="https://www.abasinconsult.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    www.abasinconsult.com
  </a>
</div>



      {/* Updates Section */}
      <div className="mt-6 w-full">
        <h1 className="text-[#1E3A5F] font-bold text-base sm:text-lg md:text-xl mb-2">
          Updates
        </h1>

        {/* Container with fixed borders */}
        <div className="overflow-hidden relative h-12 w-full border-t-2 border-b-2 border-slate-300">
          {/* Moving text */}
          <div className="flex absolute animate-marquee whitespace-nowrap p-2">
            <span className="px-2">{updateText}</span>
            <span className="px-2">{updateText}</span>
          </div>
        </div>
      </div>

      {/* Marquee Animation */}
      <style jsx>{`
        .animate-marquee {
          display: inline-flex;
          animation: marquee 40s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default Affiliation;
