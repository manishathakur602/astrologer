import React, { useEffect, useState } from 'react';
import image1 from '../../assets/Images/image1.png';
import image2 from '../../assets/Images/image2.png';
import image3 from '../../assets/Images/image3.png';
import { PhoneCall, MessageCircle } from 'lucide-react';

const cardData = [
  {
    img: image1,
    title: 'Love Problem Solution Expert',
    highlight: 'Expert',
    description:
      'Wedding Problems, Desired Love, Family Problems, Marriage Problems, Husband-Wife Problems, Extra Affair Problems, Foreign Trip Problems, Love Breakup Problems, Love Marriage, Business Problems, Money Problems',
  },
  {
    img: image2,
    title: 'Husband Wife Dispute Solution',
    highlight: 'Solution',
    description:
      'Wedding Problems, Desired Love, Family Problems, Marriage Problems, Husband-Wife Problems, Extra Affair Problems, Foreign Trip Problems, Love Breakup Problems, Love Marriage, Business Problems, Money Problems',
  },
  {
    img: image3,
    title: 'Love Marriage Specialist',
    highlight: 'Specialist',
    description:
      'Wedding Problems, Desired Love, Family Problems, Marriage Problems, Husband-Wife Problems, Extra Affair Problems, Foreign Trip Problems, Love Breakup Problems, Love Marriage, Business Problems, Money Problems',
  },
];

function highlightKeyword(text, keyword) {
  return text.split(new RegExp(`(${keyword})`, 'i')).map((part, i) =>
    part.toLowerCase() === keyword.toLowerCase() ? (
      <span key={i} className="text-[#FFC107]">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}


const phoneNumber = '+91 9876259510'; // Replace with your number
  const whatsappNumber = '9876259510'; // No '+' sign for WhatsApp

  const handleChatNow = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  const handleCallNow = () => {
    window.location.href = `tel:${phoneNumber}`;
  };


function FirstSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const currentCard = cardData[currentIndex];

  return (
    <div id="test1" className=" bg-danger">
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Background Image */}
      <img
        src={currentCard.img}
        alt={currentCard.title}
        className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
          fade ? 'opacity-80' : 'opacity-0'
        }`}
      />

      {/* Overlay Content */}
      <div
        className={`relative z-10 h-full w-full flex flex-col justify-center items-center text-white px-6 text-center transition-all duration-700 ${
          fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <h2 className="text-4xl font-bold mb-4 ibarra-real-nova">
          {highlightKeyword(currentCard.title, currentCard.highlight)}
        </h2>
        <p className="max-w-3xl text-base sm:text-lg mb-6 ibarra-real-nova">
          {currentCard.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
         
         <button onClick={handleCallNow} className="flex items-center justify-center gap-2 cursor-pointer bg-[#FFC107] text-black px-6 py-3 rounded-4xl ibarra-real-nova">
            <PhoneCall size={18} /> Call Now
          </button>
        
          <button onClick={handleChatNow} className="flex items-center justify-center gap-2 cursor-pointer bg-white text-black px-6 py-3 rounded-4xl ibarra-real-nova">
            <MessageCircle size={18} /> Chat Now
          </button>
         
        </div>
      </div>
    </div>
    </div>
  );
}

export default FirstSection;
