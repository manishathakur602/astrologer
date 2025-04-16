import React from 'react';
import image1 from '../../assets/Images/-a-realistic-romantic-couple-posing-lovingly--the- 1.png';
import image2 from '../../assets/Images/Group 256.png';
import image3 from '../../assets/Images/1c5cd556-29f8-4651-b42e-c97d8919b4ac 1.png';
import { BsFillTelephoneFill } from "react-icons/bs";

function ThirdSection() {
  return (
    <div className="bg-white">
      <div className="md:flex flex-col md:flex-row items-center justify-between s md:space-y-0">

        {/* Left Image */}
        <div>
          <img
            src={image1}
            alt="Couple"
            className="w-full h-auto"
          />
        </div>

        {/* Center Content */}
        <div className="bg-[#390C05] text-white p-6 flex h-full flex-col justify-center items-center space-y-2">
          <h1 className="text-2xl font-bold text-[#FFC107] lg:text-3xl ibarra-real-nova">Astrology Solution</h1>
          <img src={image3} alt="Decorative" className="w-full h-auto" />
          <p className='text-sm lg:text-lg ibarra-real-nova'>Solve Your All Problem With the Help Of</p>
          <h2 className="text-xl font-semibold md:text-3xl text-[#FFC107] ibarra-real-nova">Shiv Aghori baba ji</h2>
          <p className='text-sm lg:text-xl text-center ibarra-real-nova'>Get Quick Solutions Of your Problems with The Help Of Effective Remedies!</p>
          <img src={image3} alt="Decorative" className="w-full h-auto" />
          <a href="tel:+919876259510" className="flex items-center gap-2 text-[#FFC107] pt-2">
            <BsFillTelephoneFill className='text-sm md:text-2xl' />
            <p className="font-medium md:text-xl ibarra-real-nova">+91 9876259510</p>
          </a>
        </div>

        {/* Right Image */}
        <div>
          <img
            src={image2}
            alt="Side Graphic"
            className="w-full h-auto"
          />
        </div>

      </div>
    </div>
  );
}

export default ThirdSection;
