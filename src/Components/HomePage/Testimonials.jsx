import React, { useState } from 'react';
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
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  const [pageIndex, setPageIndex] = useState(0);

  const nextPage = () => {
    setPageIndex((prev) => (prev + 1) % totalPages);
  };

  const paginatedTestimonials = testimonials.slice(
    pageIndex * itemsPerPage,
    pageIndex * itemsPerPage + itemsPerPage
  );

  return (
    <section className="bg-gradient-to-br from-[#fff6e5] to-white py-20 px-4 ibarra-real-nova">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-lg text-[#FFC107] mb-2 tracking-widest font-semibold">Testimonials</h2>
        <h1 className="text-4xl md:text-6xl text-black mb-6 leading-tight">
          What Our Clients <span className="text-[#FFC107]">Say's</span>
        </h1>
        <p className="text-gray-700 mb-14 max-w-2xl mx-auto text-lg">
          Astrologer Kinaram Baba Ji has transformed the lives of over <strong>98,000+</strong> clients with his spiritual insight and powerful remedies.
        </p>

        {/* Carousel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {paginatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              onClick={nextPage}
              className="bg-[#390C05] cursor-pointer backdrop-blur-lg border border-[#FFC107]/30 rounded-3xl shadow-lg p-8 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover ring-2 ring-white"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-1">{testimonial.name}</h3>
              <p className="text-sm text-white font-medium mb-4">{testimonial.location}</p>
              <p className="text-white text-sm leading-relaxed">
                “{testimonial.feedback}”
              </p>
            </div>
          ))}
        </div>

        {/* Dots for Navigation */}
        <div className="mt-12 flex justify-center flex-wrap gap-3">
          {Array.from({ length: totalPages }).map((_, index) => (
            <div
              key={index}
              onClick={() => setPageIndex(index)}
              className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 transform ${
                index === pageIndex
                  ? 'bg-[#390C05] scale-125 ring-2 ring-[#FFC107]'
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
