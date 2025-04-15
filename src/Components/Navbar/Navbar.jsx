import React, { useState } from 'react';
import { FiMenu, FiX, FiPhone, FiMessageCircle } from 'react-icons/fi';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full josefin-sans">
      <div className="bg-[#FFC003] py-2">
        {/* {/ Top banner /} */}
        <p className="text-center text-sm font-medium py-2">
          100% Clients Satisfaction
        </p>

        {/* {/ Highlighted message /} */}
        <div className="flex justify-center px-4 py-2">
          <p className="bg-[#450B00] text-white px-6 py-2 rounded-full text-center text-sm max-w-4xl w-full">
            <marquee>One astrological advice from us can change the condition and direction of your life. Call and</marquee>
          </p>
        </div>

        {/* {/ Navigation bar /} */}
        <nav className="bg-white shadow-md px-4 sm:px-6 md:px-8 py-4 relative">
          <div className="flex items-center justify-between">
            {/* {/ Logo /} */}
            <a href="#" className="text-xl font-bold text-[#450B00]">
              LOGO
            </a>

            {/* {/ Desktop nav center items /} */}
            <div className="hidden lg:flex absolute lg:left-1/3 lg:-translate-x-1/3 xl:left-1/2 xl:-translate-x-1/2">
              <ul className="flex gap-8 md:gap-16 text-[#450B00] font-medium">
                <li className="hover:underline cursor-pointer">Home</li>
                <li className="hover:underline cursor-pointer">About</li>
                <li className="hover:underline cursor-pointer">Blog</li>
                <li className="hover:underline cursor-pointer">Contact</li>
              </ul>
            </div>

            {/* {/ Desktop buttons /} */}
            <div className="hidden lg:flex gap-4">
              <button className="bg-[#450B00] text-white px-6 py-2 rounded-full hover:bg-[#5c1307] transition flex items-center gap-2">
                <FiPhone /> Call Now
              </button>
              <button className="border border-[#450B00] text-[#450B00] px-6 py-2 rounded-full hover:bg-[#450B00] hover:text-white transition flex items-center gap-2">
                <FiMessageCircle /> Chat Now
              </button>
            </div>

            {/* {/ Hamburger menu (mobile only) /} */}
            <div className="lg:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#450B00] text-2xl">
                {menuOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </div>

          {/* {/ Mobile menu /} */}
          {menuOpen && (
            <div className="mt-4 lg:hidden flex flex-col gap-6">
              <ul className="flex flex-col gap-6 text-[#450B00] font-medium">
                <li className="hover:underline cursor-pointer">Home</li>
                <li className="hover:underline cursor-pointer">About</li>
                <li className="hover:underline cursor-pointer">Blog</li>
                <li className="hover:underline cursor-pointer">Contact</li>
              </ul>
              <div className="flex flex-col gap-2 mt-4">
                <button className="bg-[#450B00] text-white px-4 py-2 rounded-full hover:bg-[#5c1307] transition flex items-center gap-2">
                  <FiPhone /> Call Now
                </button>
                <button className="border border-[#450B00] text-[#450B00] px-4 py-2 rounded-full hover:bg-[#450B00] hover:text-white transition flex items-center gap-2">
                  <FiMessageCircle /> Chat Now
                </button>
              </div>
            </div>
          )}
        </nav>

        {/* {/ Bottom quote/message /} */}
        <div className="bg-[#450B00] mt-2 text-center py-2 text-white px-4 text-sm">
          <marquee>Before solving any problem, keep your mind clear, have faith and trust.</marquee>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
