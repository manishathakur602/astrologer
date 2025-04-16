import React from 'react';
import { FiMessageCircle } from 'react-icons/fi';
import image4 from '../../assets/Images/image4.png';
import image5 from '../../assets/Images/image5.png';
import image6 from '../../assets/Images/image6.png';
import image7 from '../../assets/Images/image7.png';
import image8 from '../../assets/Images/image8.png';
import image9 from '../../assets/Images/image9.png';

function FourthSection() {
  const services = [
    {
      title: 'Love Problem Solution',
      image: image8,
      description:
        'Two Individuals Those Who Are In Love Always Want To Marry Each Other And Such Kind Of The Marriage Is Known As Love Marriage. Love Marriage Is The Marriage In Which There Come So Many Problems Before Love Marriage. Get instant solution to call now.',
    },
    {
      title: 'Love Marriage Specialist',
      image: image9,
      description:
        'Two Individuals Those Who Are In Love Always Want To Marry Each Other And Such Kind Of The Marriage Is Known As Love Marriage. Love Marriage Is The Marriage In Which There Come So Many Problems Before Love Marriage. Get instant solution to call now.',
    },
    {
      title: 'Husband Wife Dispute',
      image: image8,
      description:
        'Two Individuals Those Who Are In Love Always Want To Marry Each Other And Such Kind Of The Marriage Is Known As Love Marriage. Love Marriage Is The Marriage In Which There Come So Many Problems Before Love Marriage. Get instant solution to call now.',
    },
    {
      title: 'Love Marriage Specialist',
      image: image4,
      description:
        'Two Individuals Those Who Are In Love Always Want To Marry Each Other And Such Kind Of The Marriage Is Known As Love Marriage. Love Marriage Is The Marriage In Which There Come So Many Problems Before Love Marriage. Get instant solution to call now.',
    },
    {
      title: 'Love Marriage Specialist',
      image: image5,
      description:
        'Two Individuals Those Who Are In Love Always Want To Marry Each Other And Such Kind Of The Marriage Is Known As Love Marriage. Love Marriage Is The Marriage In Which There Come So Many Problems Before Love Marriage. Get instant solution to call now.',
    },
    {
      title: 'Love Marriage Specialist',
      image: image6,
      description:
        'Two Individuals Those Who Are In Love Always Want To Marry Each Other And Such Kind Of The Marriage Is Known As Love Marriage. Love Marriage Is The Marriage In Which There Come So Many Problems Before Love Marriage. Get instant solution to call now.',
    },
  ];

  return (
    <div className="relative p-4 overflow-hidden">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${image7})` }}
      ></div>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

      {/* Content Layer */}
      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 px-4 bg-opacity-60 rounded-xl py-8">
          <h2 className="text-3xl font-bold text-[#FFC107] ibarra-real-nova">Services</h2>
          <h1 className="text-6xl font-semibold text-white mt-2 ibarra-real-nova">
            Our Awesome <span className="text-[#FFC107] ">Services</span>
          </h1>
          <p className="text-white mt-4 text-lg ibarra-real-nova">
            One of our astrological advice can change the condition and direction of your life.
            So don't think and call now to get a solution to all your problems.
          </p>
        </div>

        {/* Cards Section */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-2xl border-2 p-3 border-black shadow-2xl bg-white flex flex-col justify-between ibarra-real-nova"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-80 object-cover rounded-t-2xl"
                />
                <div className="py-5 flex-grow">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 ">{service.title}</h3>
                  <p className="text-black text-sm">{service.description}</p>
                </div>
                <div className="py-3">
                <div className='flex'>
                <a
                    href="https://wa.me/9876259510"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#FFC107] text-black px-7  py-1 rounded-2xl cursor-pointer hover:scale-105 transition-transform duration-200 flex items-center gap-2"
                  >
                    <FiMessageCircle className="text-lg" /> Chat now
                  </a>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FourthSection;
