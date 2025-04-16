import React, { useState, useEffect } from "react";
import Ellipse61 from '../../assets/Images/Ellipse 61.png';
import Ellipse62 from '../../assets/Images/Ellipse 62.png';
import Ellipse63 from '../../assets/Images/Ellipse 63.png';

const testimonials = [
  {
    name: "Shaipali Singh",
    location: "Delhi - (India)",
    feedback: "We were childless and we decided to meet Kinaram Baba Ji. He brought hope into our lives and now we’re blessed with twins. Thank you!",
    image: Ellipse61,
  },
  {
    name: "Ravi Sharma",
    location: "Delhi - (India)",
    feedback: "We had family disputes that felt impossible to resolve, but Baba Ji gave us remedies that restored peace in our home.",
    image: Ellipse62,
  },
  {
    name: "Priya Mehta",
    location: "Delhi - (India)",
    feedback: "We were facing constant health problems. After Baba Ji’s guidance, things changed drastically for the better.",
    image: Ellipse63,
  },
  {
    name: "Rohit Verma",
    location: "Mumbai - (India)",
    feedback: "My business was sinking, and I had lost all hope. Baba Ji’s advice turned things around. Forever grateful!",
    image: Ellipse62,
  },
  {
    name: "Anita Desai",
    location: "Lucknow - (India)",
    feedback: "Marriage issues were eating us up. Baba Ji’s remedies worked wonders and brought us closer again.",
    image: Ellipse63,
  },
  {
    name: "Jatin Bhardwaj",
    location: "Chandigarh - (India)",
    feedback: "We were trying to conceive for years. After meeting Baba Ji, our prayers were answered.",
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
          Astrologer Kinaram Baba Ji has transformed the lives of over{" "}
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
