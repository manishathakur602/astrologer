import React from 'react';
import { FaStar } from "react-icons/fa";
import { IoChatbubblesOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
// Default features if none are passed
const defaultFeatures = [
  {
    title: "EXPERT GUIDANCE",
    description: "Get the best prediction and learn about the future with your astrology prediction expert.",
  },
  {
    title: "24/7 SUPPORT",
    description: "Connect with your astrologer anytime for instant guidance and insights.",
  }
];

function ThirdChunk({ name1, name2, para, features = defaultFeatures }) {
  return (
    <div className='max-w-sm ibarra-real-nova '>
      <h3 className='text-lg font-semibold text-gray-600'>{name1}</h3>
      <h1 className='text-3xl font-bold text-[#390C05] mb-2'>{name2}</h1>
      <p className='text-gray-700 mb-6'>{para}</p>

      <div className='space-y-6'>
        {features.map((feature, index) => (
          <div key={index} className='flex items-center gap-4'>
            <div className='bg-[#FFC107] p-2 w-20 h-20 rounded-full flex items-center justify-center'>
              <div className='bg-[#390C05] w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl '>
              {index === 0 ? (
                  <FaStar className='text-[#FFC107]' />
                ) : (
                  <SlCalender className='text-[#FFC107]' />
                )}
              </div>
            </div>
            <div>
              <p className='font-bold text-[#390C05]'>{feature.title}</p>
              <p className='text-sm text-gray-600'>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
      <a
 href="tel:+919876259510"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-black cursor-pointer rounded-md px-6 py-1 mt-10 text-white flex gap-2 items-center justify-center hover:bg-gray-800 transition"
>
  <IoChatbubblesOutline className="text-lg" />
  Chat Now
</a>
      {/* <a
  href="https://wa.me/9876259510"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-black cursor-pointer rounded-md px-6 py-1 mt-10 text-white flex gap-2 items-center justify-center hover:bg-gray-800 transition"
>
  <IoChatbubblesOutline className="text-lg" />
  Chat Now
</a> */}

    </div>
  );
}

export default ThirdChunk;
