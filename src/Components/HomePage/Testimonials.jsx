import React, { useState, useEffect } from "react";
import Ellipse61 from '../../assets/Images/Ellipse 61.png';
import Ellipse62 from '../../assets/Images/Ellipse 62.png';
import Ellipse63 from '../../assets/Images/Ellipse 63.png';

const testimonials = [
  {
    name: "sanjana kumari",
    location: "Delhi - (India)",
    feedback: `I was going through a tough time in my relationship, filled with
       misunderstandings and constant fights. After consulting Shiv Aghori Baba Ji, I
      saw a remarkable change. His astrology remedies brought peace back into my
      love life, and now my partner and I are happier than ever. Thank you for your
      guidance`,
    image: Ellipse61,
  },
  {
    name: "Rajesh & Neha M.",
    location: "Mumbai - (India)",
    feedback: `"We were about to get married, but we wanted to be sure about our compatibility.
    After a detailed kundli matching with Baba Ji, we felt more confident and secure
    about our decision. His insights gave us clarity and helped us prepare for a happy
    married life. We highly recommend his services`,
    image: Ellipse62,
  },
  {
    name: "Sanjay K",
    location: "Bangalore) - (India)",
    feedback: `I was facing a major career block, and my business was not doing well. Baba Ji’s
    astrological guidance provided me with remedies that not only helped me regain
    confidence but also turned my business around. I’m now experiencing steady
    growth and success. Truly grateful for his help`,
    image: Ellipse63,
  },
  {
    name: "Anjali R",
    location: "Jaipur - (India)",
    feedback: `My marriage was on the edge due to constant arguments and lack of understanding. I reached out to Shiv Aghori Baba Ji as a last hope. His simple yet powerful remedies helped restore peace and love in our relationship. Today, my husband and I share a stronger bond than ever before. He truly saved my marriage`,
    image: Ellipse62,
  },
  {
    name: " Vikram T",
    location: "Chandigarh- (India)",
    feedback: `After a painful breakup, I never thought I’d get a second chance with my ex. Baba Ji’s positive energy and Vashikaran solutions brought us back together. Not only did we reconnect, but we’re now planning a future together. I’ll always be thankful for his help during my darkest time`,
    image: Ellipse63,
  },
  {
    name: "JMeena D",
    location: "Hyderabad - (India)",
    feedback: `I was constantly falling ill and struggling with stress. No medical tests found anything serious, but I still felt weak. Shiv Aghori Baba Ji identified the astrological reasons behind my health issues and gave me personalized remedies. Within weeks, I felt healthier, calmer, and more balanced. His guidance changed my life`,
    image: Ellipse61,
  },
];

const TestimonialsSection = () => {
  const [cardsToShow, setCardsToShow] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Set responsive card count
  useEffect(() => {
    const updateCardsToShow = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCardsToShow(1);
      } else if (width < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / cardsToShow);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const getVisibleTestimonials = () => {
    const start = currentIndex * cardsToShow;
    return testimonials.slice(start, start + cardsToShow);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 ibarra-real-nova">
      <div className="relative overflow-hidden">
        <h2 className="text-lg text-[#FFC107] mb-2 tracking-widest font-semibold text-center">
          Testimonials
        </h2>
        <h1 className="text-4xl md:text-6xl text-black mb-6 leading-tight text-center">
          What Our Clients <span className="text-[#FFC107]">Say's</span>
        </h1>
        <p className="text-gray-700 mb-14 max-w-2xl mx-auto text-lg text-center">
        Shiv Aghori Baba Ji has transformed the lives of over{" "}
          <strong>98,000+</strong> clients with his spiritual insight and
          powerful remedies.
        </p>

        <div className="flex flex-wrap justify-center gap-4 transition-all duration-500">
          {getVisibleTestimonials().map((testimonial, index) => (
            <div
              key={index}
              className="w-full sm:w-[48%] lg:w-[32%] bg-[#390C05] text-white shadow-lg rounded-xl p-6 flex flex-col items-center justify-center text-center space-y-4"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-gray-300"
              />
              <p className="">"{testimonial.feedback}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors cursor-pointer duration-300 ${
                index === currentIndex ? "bg-black" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
