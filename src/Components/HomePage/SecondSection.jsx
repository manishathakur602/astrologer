import React from "react";
import logo1 from "../../assets/Images/logo1.png";
import logo2 from "../../assets/Images/logo2.png";
import logo3 from "../../assets/Images/logo3.png";
import logo4 from "../../assets/Images/logo4.png";

function SecondSection() {
  const obj = [
    {
      logo: logo1,
      heading: "27+ Years of Trusted ",
      word: " Astrology Expertise",
      para: `With over 27 years of experience in astrology, Astrologer Kinaram Baba Ji has
           solved thousands of love, relationship, marriage, and life problems. Known for
          accurate readings and quick results, he is a top-rated love problem expert in India`
    },
    {
      logo: logo2,
      heading: "98,000+ Happy & Loyal",
      word:" Clients",
      para: `Kinaram Baba Ji has successfully helped more than 98,000 clients with trusted
     astrology services. His high success rate and powerful solutions make him one of
     the most reliable astrologers in the country`
    },
    {
      logo: logo3,
      heading: "Global Astrology Support – ",
      word:" Worldwide Clients",
      para: `Clients from the USA, UK, Canada, Australia, and more trust his astrological
      remedies. From love issues to business problems, he offers online astrology
      consultation that works anywhere`
    },
    {
      logo: logo4,
      heading: "100% Effective & Fast ",
      word:"Results",
      para: `Get 100% working solutions for love marriage, husband-wife disputes, family
      issues, and more. All remedies are personalized and result-driven to solve
      problems fast and safely`
    },
  ];

  return (
    <div className="bg-[#FFC107] py-10" id="test2">
      <div className="text-center mb-8">
        <h3 className="text-lg font-medium text-[#390C05] ibarra-real-nova">Astrology</h3>
        <h1 className="text-3xl font-bold text-white ibarra-real-nova">
          Our Awesome <span className="text-[#390C05] ibarra-real-nova">Services</span>
        </h1>
      </div>

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {obj.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center hover:scale-105 transition duration-150 items-center space-y-3 py-6 px-6 md:px-10 rounded-lg w-full bg-[#390C05] text-white shadow-lg"
            >
              <div className="p-4 bg-white rounded-full shadow-md">
                <img src={item.logo} alt={item.heading} className="w-16 h-16" />
              </div>
              <h2 className="text-xl font-semibold text-center ibarra-real-nova">
                {item.heading} <span className="text-[#FFC107]">{item.word}</span>
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
