import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#FFC107] text-black py-10">
      <div className="max-w-7xl px-2 md:px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center items-start gap-10">
        
        {/* Logo Section */}
        <div className="flex flex-col justify-start items-start text-center md:text-left">
          <h1 className="text-6xl text-black mb-4">Logo</h1>
          <p className="text-lg">Astrologer Kinaram Baba Ji is a well-known astrologer who encourages people to use astrology for good purposes.</p>
        </div>

        {/* Services */}
        <div className="flex flex-col justify-start items-start text-center md:text-left">
          <h2 className="text-2xl font-semibold text-black mb-3">Services</h2>
          <ul className="space-y-2 text-sm">
            <li>Love Problem Solution</li>
            <li>Love Marriage Solution</li>
            <li>Get Ex Love Back</li>
            <li>Get Lost Love Back</li>
            <li>Breakup Solution</li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="flex flex-col justify-start items-start text-center md:text-left">
          <h2 className="text-2xl font-semibold text-black mb-3">Our Services</h2>
          <ul className="space-y-2 text-sm">
            <li>Divorce Problem Solution</li>
            <li>Husband Wife Dispute</li>
            <li>Relationship Problem</li>
            <li>Family problem Solution</li>
            <li>Childless Problem Solution</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center items-center text-center md:text-left mt-4 md:mt-0">
          <h2 className="text-2xl font-semibold text-black mb-3">Contact Us</h2>
          <p className="text-xl mb-4">📞 +91 9876259510</p>
          {/* <p className="text-sm">📧 support@yourdomain.com</p> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
