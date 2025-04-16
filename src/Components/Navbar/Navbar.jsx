import React, { useState } from 'react';
import { FiMenu, FiX, FiPhone, FiMessageCircle } from 'react-icons/fi';
import Logo from '../../assets/Images/ChatGPT Image Apr 15, 2025, 10_10_39 AM-Photoroom 1.png';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const phoneNumber = '9876259510';

  return (
    <header className="w-full josefin-sans">
      <div className="bg-[#FFC003] py-2">
        {/* Top banner */}
        <p className="text-center text-sm font-medium py-2">
          100% Clients Satisfaction
        </p>

        {/* Highlighted message */}
        <div className="flex justify-center px-4 py-2 ibarra-real-nova">
          <p className="bg-[#450B00] text-white px-6 py-2 rounded-full text-center text-sm max-w-4xl w-full">
            <marquee>One astrological advice from us can change the condition and direction of your life. Call and</marquee>
          </p>
        </div>

        {/* Navigation bar */}
        <nav className="px-4 sm:px-6 md:px-8 py-4 relative">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <img src={Logo} alt=" " className="h-20 w-20" />

            {/* Desktop nav center items */}
            <div className="hidden lg:flex absolute lg:left-1/6 lg:-translate-x-1/15 xl:left-1/3 xl:-translate-x-1/4">
              <ul className="flex gap-8 md:gap-5 xl:gap-10 text-[#450B00] font-medium">
                <Link  to="test1" spy={true} smooth={true} offset={-100} duration={200} className="cursor-pointer"><li>Home</li></Link>
                <Link  to="test2" spy={true} smooth={true} offset={-100} duration={300} className="cursor-pointer"><li>Services</li></Link>
                <Link  to="test3" spy={true} smooth={true} offset={-100} duration={400} className="cursor-pointer"><li>About Us</li></Link>
                <Link  to="test4" spy={true} smooth={true} offset={-100} duration={500} className=" cursor-pointer"><li>Choose Us</li></Link>
                <Link  to="test5" spy={true} smooth={true} offset={-100} duration={600} className="cursor-pointer"><li>Other Services</li></Link>
                <Link  to="test6" spy={true} smooth={true} offset={-100} duration={700} className="cursor-pointer"><li>Testimonials</li></Link>
                
               
              </ul>
            </div>

            {/* Desktop buttons */}
            <div className="hidden lg:flex gap-4">
              <a href={`tel:${phoneNumber}`} className="bg-[#450B00] text-white px-6 py-2 rounded-full hover:bg-[#5c1307] transition flex items-center gap-2">
                <FiPhone /> Call Now
              </a>
              <a href={`https://wa.me/91${phoneNumber}`} target="_blank" rel="noopener noreferrer" className="border border-[#450B00] text-[#450B00] px-6 py-2 rounded-full hover:bg-[#450B00] hover:text-white transition flex items-center gap-2">
                <FiMessageCircle /> Chat Now
              </a>
            </div>

            {/* Hamburger menu (mobile only) */}
            <div className="lg:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#450B00] text-2xl">
                {menuOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="mt-4 lg:hidden flex flex-col gap-6">
            <ul className="flex flex-col gap-6 text-[#450B00] font-medium">
  <Link to="test1" smooth={true} offset={-100} duration={300} className="" onClick={() => setMenuOpen(false)}>
    <li>Home</li>
  </Link>
  <Link to="test2" smooth={true} offset={-100} duration={300} className="" onClick={() => setMenuOpen(false)}>
    <li>Services</li>
  </Link>
  <Link to="test3" smooth={true} offset={-100} duration={300} className="" onClick={() => setMenuOpen(false)}>
    <li>About Us</li>
  </Link>
  <Link to="test4" smooth={true} offset={-100} duration={300} className="" onClick={() => setMenuOpen(false)}>
    <li>Choose Us</li>
  </Link>
  <Link to="test5" smooth={true} offset={-100} duration={300} className="" onClick={() => setMenuOpen(false)}>
    <li>Other Services</li>
  </Link>
  <Link to="test6" smooth={true} offset={-100} duration={300} className="" onClick={() => setMenuOpen(false)}>
    <li>Testimonials</li>
  </Link>
</ul>

              <div className="flex flex-col gap-2 mt-4">
                <a href={`tel:${phoneNumber}`} className="bg-[#450B00] text-white px-4 py-2 rounded-full hover:bg-[#5c1307] transition flex items-center gap-2">
                  <FiPhone /> Call Now
                </a>
                <a href={`https://wa.me/91${phoneNumber}`} target="_blank" rel="noopener noreferrer" className="border border-[#450B00] text-[#450B00] px-4 py-2 rounded-full hover:bg-[#450B00] hover:text-white transition flex items-center gap-2">
                  <FiMessageCircle /> Chat Now
                </a>
              </div>
            </div>
          )}
        </nav>

        {/* Bottom quote/message */}
        <div className="bg-[#450B00] mt-2 text-center py-2 text-white px-4 text-sm ibarra-real-nova">
          <marquee>Before solving any problem, keep your mind clear, have faith and trust.</marquee>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
