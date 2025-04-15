import React from 'react';
import CountUp from 'react-countup';
import { FaHeart } from "react-icons/fa6";
import { FaUsers, FaRegHeart, FaTrophy } from "react-icons/fa";

function SixthSection() {
  const stats = [
    { icon: <FaHeart />, number: 15500, label: "Love Marriage Solution" },
    { icon: <FaUsers />, number: 8456, label: "Happy Clients" },
    { icon: <FaRegHeart />, number: 12000, label: "Love Problem Solution" },
    { icon: <FaTrophy />, number: 100, label: "Win Awards", suffix: "+" },
  ];

  return (
    <div className="py-16 bg-[#390C05]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl flex flex-col items-center justify-center space-y-4"
            >
              <div className="bg-white p-4 rounded-full flex items-center justify-center">
                {React.cloneElement(stat.icon, {
                  className: "text-[#FFC107] text-4xl",
                })}
              </div>
              <h1 className="text-3xl font-bold text-[#FFC107]">
                <CountUp end={stat.number} duration={2} suffix={stat.suffix || ""} />
              </h1>
              <p className="text-[#FFC107]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SixthSection;
