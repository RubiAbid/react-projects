import { useState } from "react";

const questions = [
  {
    q: "Where should I incorporate my business?",
    a: "Ans: Deciding where to incorporate your business depends on factors like taxes, legal protections, and administrative costs."
  },
  {
    q: "What documents are required for registration?",
    a: "Ans: Typically, you need your ID, proof of address, and company formation documents depending on your jurisdiction."
  },
  {
    q: "Do I need a lawyer to start a business?",
    a: "Ans: While not mandatory, a lawyer can help avoid costly mistakes and ensure compliance with local laws."
  },
  {
    q: "How much does incorporation cost?",
    a: "Ans: The cost varies by country and state, ranging from a few hundred to a few thousand dollars."
  }
];

const FlipCard = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="h-auto m-5 p-5 flex flex-col justify-center items-center gap-6 ">
      {questions.map((item, index) => (
        <div key={index} className="w-full max-w-[90%] sm:max-w-md md:max-w-lg lg:max-w-xl flex flex-col items-center">
          {/* Question Card */}
          <div
            className="w-full p-4 bg-[#C0A18C] text-white rounded-xl shadow-lg cursor-pointer"
            onClick={() => toggleAnswer(index)}
          >
            <div className="font-bold text-base sm:text-lg md:text-xl">{item.q}</div>
          </div>

          {/* Answer with smooth transition */}
          <div
            className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${
              activeIndex === index ? "max-h-40 mt-2 p-3" : "max-h-0 p-0"
            } bg-white text-[#2c2c2c] rounded-lg shadow-md`}
          >
            <p className="text-sm sm:text-base">{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlipCard;
