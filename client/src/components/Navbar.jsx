import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
  import '../../public/fonts.css'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home'); // Default active link
  const location = useLocation();

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  useEffect(() => {
    // Update activeLink when the route changes
    setActiveLink(location.hash || '#home'); // Use hash for internal links
  }, [location]);

  const navLinks = [
    { id: '#home', label: 'Home' },
    { id: '#feature', label: 'Features' },
    { id: '#how-it-works', label: 'How It Works' }, // Added "How It Works"
    { id: '#create', label: 'Create' },
   
  ];

  return (
    <nav className="bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-lg font-custom font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="#home"
              id="home-link"
              className="text-2xl font-bold text-white"
              onClick={() => handleLinkClick('#home')}
            >
              CertifyPro
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map(({ id, label }) => (
              <a
                key={id}
                href={id}
                id={`${id.replace('#', '')}-link`}
                className={`transition-colors px-3 py-1 rounded ${
                  activeLink === id ? 'bg-white text-black' : 'text-white'
                }`}
                onClick={() => handleLinkClick(id)}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      :'M4 6h16M4 12h16m-7 6h7'
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-green-400 to-blue-500">
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={id}
              id={`${id.replace('#', '')}-link`}
              className={`block px-4 py-2 transition-colors rounded ${
                activeLink === id ? 'bg-white text-black' : 'text-white'
              }`}
              onClick={() => handleLinkClick(id)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
