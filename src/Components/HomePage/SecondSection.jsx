import React from "react";
import logo1 from "../../assets/Images/logo1.png";
import logo2 from "../../assets/Images/logo2.png";
import logo3 from "../../assets/Images/logo3.png";
import logo4 from "../../assets/Images/logo4.png";

function SecondSection() {
  const obj = [
    {
      logo: logo1,
      heading: "27+ YEARS EXPERIENCE",
      para: "Over 27 years of experience in the field of astrology. Able to solve love, relationship problems and other issues in life.",
    },
    {
      logo: logo2,
      heading: "98000+ TRUSTED CLIENTS",
      para: "Kinaram Baba Ji has been a renowned astrologer due to his successful track record of handling 98,000+ loyal customers.",
    },
    {
      logo: logo3,
      heading: "WORLD WIDE CLIENTS",
      para: "Astrologer Kinaram Baba Ji has his own astrology center in India, he provides his astrology solutions to people all over the world.",
    },
    {
      logo: logo4,
      heading: "100% EFFECTIVE SOLUTION",
      para: "Whatever the issue, you will find a 100% workable solution here. Seek advice right away to resolve your problems quickly.",
    },
  ];

  return (
    <div className="bg-[#FFC107] py-10">
      <div className="text-center mb-8">
        <h3 className="text-lg font-medium text-[#390C05] ibarra-real-nova">Astrology</h3>
        <h1 className="text-3xl font-bold text-white ibarra-real-nova">
          Our Awesome <span className="text-[#390C05] ibarra-real-nova">Services</span>
        </h1>
      </div>

      <div className="">
        <div className="flex flex-col md:flex-row justify-center gap-6 px-4 ">
          {obj.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col justify-center hover:scale-105 transition duration-150 items-center space-y-3 py-6 px-6 md:px-10 rounded-lg w-full md:w-72 bg-[#390C05] text-white shadow-lg"
            >
              <div className="p-4 bg-white rounded-full shadow-md">
                <img src={item.logo} alt={item.heading} className="w-16 h-16" />
              </div>
              <h2 className="text-xl font-semibold text-center ibarra-real-nova">
                {item.heading}
              </h2>
              <p className="text-center text-sm ibarra-real-nova">{item.para}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
