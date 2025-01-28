import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white">CertifyPro</h2>
            <p className="text-gray-400 mt-2">
              Easily design and generate professional certificates for any occasion.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center md:justify-end space-x-6">
            <a href="/" className="text-gray-400 hover:text-white transition-colors duration-300">
              Home
            </a>
            <a href="#feature" className="text-gray-400 hover:text-white transition-colors duration-300">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors duration-300">
              How It Works
            </a>
            <a href="#create" className="text-gray-400 hover:text-white transition-colors duration-300">
              Create
            </a>
           
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-600 my-8" />

        {/* Copyright */}
        <div className="text-center text-gray-400">
          &copy; {new Date().getFullYear()} CertifyPro. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
