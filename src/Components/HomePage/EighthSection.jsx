import React from 'react';
import { FaCheck, FaHeart, FaUsers, FaBriefcase } from 'react-icons/fa';

function EighthSection() {
  const cardData = [
    {
      icon: <FaHeart className="text-[#FFC107] text-4xl" />,
      
      services: [
        'Love Marriage Solution',
        'Lost Love Back',
        'Relationship Advice',
        'Intercaste Marriage',
        'Breakup Solutions',
      ],
    },
    {
      icon: <FaUsers className="text-[#FFC107] text-4xl" />,
   
      services: [
        'Husband Wife Dispute',
        'Family Problems',
        'Trust Issues',
        'Childless Couple Issues',
        'Communication Gaps',
      ],
    },
    {
      icon: <FaBriefcase className="text-[#FFC107] text-4xl" />,
     
      services: [
        'Career Problem Solution',
        'Business Growth Help',
        'Job Problem Advice',
        'Financial Stability',
        'Business Partner Issues',
      ],
    },
  ];

  return (
    <div className="py-10 bg-[#FFC107] ibarra-real-nova" id='test5'>
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h1 className="text-xl  text-white">Services</h1>
        <p className="text-white text-5xl mt-2 mb-10">Other   <span className="text-black">Services</span> </p>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-[#390C05] border-2 border-white hover:shadow-2xl hover:shadow-white transition duration-100 hover:scale-105 rounded-2xl py-6 px-10 md:py-10  shadow-2xl flex flex-col justify-between items-center"
            >
              {/* Icon on top */}
              <div className="mb-4 bg-white border border-[#FFC107] p-4 rounded-full">
                {card.icon}
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-[#390C05] mb-4">{card.title}</h2>

              {/* Services */}
              <ul className="text-white space-y-3 mb-6 w-full">
                {card.services.map((service, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="  bg-[#FFC107] text-sm rounded-full p-2">
                      <FaCheck className="text-black " />
                    </span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <a
  href="https://wa.me/9876259510"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-[#FFC107] text-black px-6 py-1 rounded-md cursor-pointer hover:bg-yellow-400 transition"
>
  Chat Now
</a>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EighthSection;
