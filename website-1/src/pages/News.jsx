import { FaArrowRight } from "react-icons/fa";

const links = [
  { title: "The Asset Management Review", url: "https://baryalay.law/assets/pakistan-Dw8yOgOr.pdf" },
  { title: "Liquidity management in Islamic financial institutions", url: "https://baryalay.law/assets/v15i02_30-7vCIOO3h.pdf" },
  { title: "DOING BUSINESS IN PAKISTAN", url: "https://baryalay.law/assets/doing_a_business_in_pakistan-D4mUsX4X.pdf" },
  { title: "ISLAMIC FINANCE MORE THAN WINDOW DRESSING?", url: "https://baryalay.law/assets/islamic_finance_more_than_window_dressing-C8y-Vttc.pdf" },
  { title: "LAND ACQUISITION IN PAKISTAN: A COLONIAL LEGACY AND THE NEED FOR REFORM", url: "https://baryalay.law/assets/land_acquisition_in_pakistan-o-zOONdN.pdf" },
  { title: "THE COMPANIES ACT, 2017", url: "https://baryalay.law/assets/the_pakistani_companies_act_2017-Eo5IwHJs.pdf" },
  { title: "ISLAMIC CAPITAL MARKETS UNDERSTANDING SUKUK", url: "https://baryalay.law/assets/understanding_sukuk-CJGoCoL1.pdf" }
];

const News = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto p-5 sm:p-10">
      {/* Articles List */}
      <div className="flex flex-col gap-4 sm:gap-5 mb-8">
        {links.map((link, index) => (
          <div
            key={index}
            className="flex flex-row gap-3 items-start sm:items-center mb-2 hover:underline"
          >
            <FaArrowRight className="mt-1 sm:mt-0" />
            <a
              href={link.url}
              className="text-black text-base sm:text-lg md:text-xl cursor-pointer"
            >
              {link.title}
            </a>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <p className="text-[#8B909B] text-sm sm:text-base md:text-lg">
        The articles published on this website are for general information only and may not 
        be relied on without seeking specific legal advice. We reserve the right to change
        the opinions and views expressed in these publications without prior notice and shall 
        have no obligation to inform you. If you require legal guidance on the topics discussed 
        in these publications, please contact us on:{" "}
        <a href="mailto:haroon@baryalay.law" className="text-blue-600 underline">
          haroon@baryalay.law
        </a>
        .
      </p>
    </div>
  );
};

export default News;
