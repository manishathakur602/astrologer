import React, { useEffect, useState } from 'react';
import image1 from '../../assets/Images/image1.png';
import image2 from '../../assets/Images/image2.png';
import image3 from '../../assets/Images/image3.png';
import { PhoneCall, MessageCircle } from 'lucide-react';

const cardData = [
  {
    img: image1,
    title: 'Fix Love & Marriage Problems with Astrology',
    highlight: 'Expert',
    description: `Facing problems in love or marriage? Don’t let anger and misunderstandings break
your relationship. Get powerful astrology solutions for love marriage issues,
husband-wife fights, family problems, and more. Bring peace and love back with
expert guidance that really works`
  },
  {
    img: image2,
    title: 'Expert in Solving Love Life Issues',
    highlight: 'Solution',
    description:
      `Is your love life going through problems? Whether it’s misunderstandings,
breakup, or extra affairs, our expert gives simple astrology solutions to fix your
relationship. Get help to bring back trust, love, and happiness in your life`
  },
  {
    img: image3,
    title: 'Expert in Solving Love Life Issues',
    highlight: 'Specialist',
    description:
     `Is your love life going through problems? Whether it’s misunderstandings,
breakup, or extra affairs, our expert gives simple astrology solutions to fix your
relationship. Get help to bring back trust, love, and happiness in your life.`
  },
];

// Highlight keyword in a string with a span
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

const phoneNumber = '+91 9876259510';
const whatsappNumber = '9876259510';

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
    <div id="test1" className="bg-black">
      <div className="relative w-full h-screen overflow-hidden">
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
            {highlightKeyword(currentCard.title, currentCard.highlight)}{' '}
            <span className="text-[#FFC107]">{currentCard.highlight}</span>
          </h2>
          <p className="max-w-3xl text-base sm:text-lg mb-6 ibarra-real-nova">
            {currentCard.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleCallNow}
              aria-label="Call Now"
              className="flex items-center justify-center gap-2 cursor-pointer bg-[#FFC107] text-black px-6 py-3 rounded-full ibarra-real-nova"
            >
              <PhoneCall size={18} /> Call Now
            </button>

            <button
              onClick={handleChatNow}
              aria-label="Chat Now on WhatsApp"
              className="flex items-center justify-center gap-2 cursor-pointer bg-white text-black px-6 py-3 rounded-full ibarra-real-nova"
            >
              <MessageCircle size={18} /> Chat Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
