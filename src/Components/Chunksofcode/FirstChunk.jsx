import React from 'react';
import image3 from '../../assets/Images/1c5cd556-29f8-4651-b42e-c97d8919b4ac 1.png';
import { BsFillTelephoneFill } from "react-icons/bs";

function FirstChunk() {
  return (
    <div className="flex ibarra-real-nova">
      <div className="bg-[#390C05] text-white max-w-xl w-full p-6 flex flex-col items-center text-center  rounded-b-2xl">
        <h1 className="text-2xl font-bold text-[#FFC107]">Astrology Solutions by Shiv Aghori Baba Ji</h1>
        <img src={image3} alt="Astrologer" className="w-full h-auto   object-cover rounded-full" />
        
        <p className="text-sm">Struggling with love, marriage, or relationship issues?</p>
        
        <h2 className="text-lg font-semibold text-[#FFC107]">Shiv Aghori baba ji</h2>
        
        <p className="text-sm">
        Get quick and effective remedies from India's trusted astrologer
        </p>
        
        <img src={image3} alt="Remedies" className="w-full h-auto object-cover rounded-md" />
        
        <a href="tel:+919876259510" className="flex items-center gap-2 text-[#FFC107]  hover:underline">
          <BsFillTelephoneFill className="text-lg" />
          <p className="font-medium text-lg">+91 9876259510</p>
        </a>
      </div>
    </div>
  );
}

export default FirstChunk;
