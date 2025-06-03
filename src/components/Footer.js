import React from 'react';

const Footer = () => (
  <footer className="bg-emerald-800 text-white py-12 px-6">
    <div className="container mx-auto max-w-6xl grid md:grid-cols-3 gap-10">
      
      {/* Company Info */}
      <div>
        <h3 className="text-2xl font-bold mb-4">GreenRoof Realty</h3>
        <p className="text-sm text-gray-300">
          123 EcoLane Ave, Quezon City, Metro Manila, Philippines
        </p>
        <p className="text-sm text-gray-300 mt-2">Email: info@greenroofrealty.ph</p>
        <p className="text-sm text-gray-300">Phone: +63 912 345 6789</p>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="#properties" className="hover:underline text-gray-300">Listings</a></li>
          <li><a href="#about" className="hover:underline text-gray-300">About Us</a></li>
          <li><a href="#contact" className="hover:underline text-gray-300">Contact</a></li>
          <li><a href="#faq" className="hover:underline text-gray-300">FAQs</a></li>
        </ul>
      </div>

      {/* Newsletter */}
      <div>
        <h4 className="text-xl font-semibold mb-4">Subscribe</h4>
        <p className="text-sm text-gray-300 mb-3">Get updates on new listings and offers.</p>
        <form className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Your email"
            className="p-3 rounded-md text-gray-800 w-full focus:outline-none"
          />
          <button
            type="submit"
            className="bg-white text-emerald-800 px-4 py-2 rounded-md font-medium hover:bg-gray-200"
          >
            Subscribe
          </button>
        </form>
      </div>

    </div>

    <div className="text-center text-gray-400 text-sm mt-10">
      &copy; {new Date().getFullYear()} GreenRoof Realty. All rights reserved.
    </div>
  </footer>
);

export default Footer;
