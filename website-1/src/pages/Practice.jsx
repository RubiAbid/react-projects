import { FaRegHandPeace } from "react-icons/fa";
import { ImCrying } from "react-icons/im";
import { FaHandshake } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { TbWomanFilled } from "react-icons/tb";
import { IoNewspaperSharp } from "react-icons/io5";


const Practice = () => {
  return (
    <div className="w-full relative bg-cover bg-center flex flex-col">
      {/* Hero Section */}
      <div
        className="w-full relative bg-cover bg-center flex flex-col justify-center px-5 pt-[100px] pb-20"
        style={{
          backgroundImage:
            "url('https://images.squarespace-cdn.com/content/v1/564f8016e4b01e432db571e9/1453141758982-WBLJZR824VXTDM63W173/Depositphotos_65284815_l-2015.jpg?format=2500w')",
        }}
      >
        {/* Optional overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Hero content */}
        <div className="relative z-10 max-w-[1200px] mx-auto">
{/* Line + Text above */}
<div className="w-full flex justify-center">
  <p className="text-white font-serif font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center break-words">
    PRACTICE AREAS
  </p>
</div>

          </div>
      </div>





<div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10 mb-10 px-4">
  {/* Line + Heading */}
  <div className="flex flex-row items-center lg:items-start  gap-5 mt-10">
    <hr className="border-t-2 border-[#B3996B] w-16 text-center mt-10" />
    <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-center lg:text-left">
      Why You Need the Top Lawyers
    </h2>
  </div>

  {/* Paragraph 1 */}
  <p className="text-[#5A5A5A] text-base sm:text-lg text-center lg:text-left">
    <span className="text-[#B2986B] text-4xl sm:text-5xl md:text-6xl p-1 relative top-1">A</span>
    short description to tell people about the topic mentioned above. Elaborate on it and explain how to go about with an issue or a situation like this. Gain people’s confidence and encourage them to hire you.
  </p>

  {/* Paragraph 2 */}
  <p className="text-[#5A5A5A] text-base sm:text-lg text-center lg:text-left">
    A short description to tell people about the topic mentioned above. Elaborate on it and explain how to go about with an issue or a situation like this. Gain people’s confidence and encourage them to hire you.
  </p>
</div>







<div className="w-full h-auto bg-[#F5F5F5] flex flex-wrap justify-center items-start gap-6 p-5">
  {/* Single Card Template */}
  <div className="border border-[#EAEAEA] p-4 flex flex-col items-start space-y-3 bg-[#F5F5F5] hover:bg-white rounded-md shadow-sm w-full sm:w-[48%] md:w-[30%]">
    <FaRegHandPeace className="text-[#B2986B] w-6 h-6" />
    <p className="text-black font-bold text-xl">Divorce & Separation</p>
    <p className="text-[#5A5A5A] text-sm">
      This is a short description elaborating the service you have mentioned above.
    </p>
  </div>

  <div className="border border-[#EAEAEA] p-4 flex flex-col items-start space-y-3 bg-[#F5F5F5] hover:bg-white rounded-md shadow-sm w-full sm:w-[48%] md:w-[30%]">
    <IoNewspaperSharp className="text-[#B2986B] w-6 h-6" />
    <p className="text-black font-bold text-xl">Property Settlements​</p>
    <p className="text-[#5A5A5A] text-sm">
      This is a short description elaborating the service you have mentioned above.
    </p>
  </div>

  <div className="border border-[#EAEAEA] p-4 flex flex-col items-start space-y-3 bg-[#F5F5F5] hover:bg-white rounded-md shadow-sm w-full sm:w-[48%] md:w-[30%]">
    <FaHandshake className="text-[#B2986B] w-6 h-6" />
    <p className="text-black font-bold text-xl">Child Custody</p>
    <p className="text-[#5A5A5A] text-sm">
      This is a short description elaborating the service you have mentioned above.​ 
    </p>
  </div>

  <div className="border border-[#EAEAEA] p-4 flex flex-col items-start space-y-3 bg-[#F5F5F5] hover:bg-white rounded-md shadow-sm w-full sm:w-[48%] md:w-[30%]">
    <ImCrying className="text-[#B2986B] w-6 h-6" />
    <p className="text-black font-bold text-xl">Domestic Violence</p>
    <p className="text-[#5A5A5A] text-sm">
      This is a short description elaborating the service you have mentioned above.​ 
    </p>
  </div>

  <div className="border border-[#EAEAEA] p-4 flex flex-col items-start space-y-3 bg-[#F5F5F5] hover:bg-white rounded-md shadow-sm w-full sm:w-[48%] md:w-[30%]">
    <CiHeart className="text-[#B2986B] w-6 h-6" />
    <p className="text-black font-bold text-xl">Marriage/Civil Unions</p>
    <p className="text-[#5A5A5A] text-sm">
      This is a short description elaborating the service you have mentioned above.
    </p>
  </div>

  <div className="border border-[#EAEAEA] p-4 flex flex-col items-start space-y-3 bg-[#F5F5F5] hover:bg-white rounded-md shadow-sm w-full sm:w-[48%] md:w-[30%]">
    <TbWomanFilled className="text-[#B2986B] w-6 h-6" />
    <p className="text-black font-bold text-xl">Adoption & Surrogacy​</p>
    <p className="text-[#5A5A5A] text-sm">
      This is a short description elaborating the service you have mentioned above.
    </p>
  </div>
</div>

          




    </div>
  );
};

export default Practice;
