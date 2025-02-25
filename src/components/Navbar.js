import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-dark-bg z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#" className="text-white text-lg font-semibold">
            CreativeMind Production
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-gray-300 transition-colors">
              Home
            </a>
            <a href="#about" className="text-white hover:text-gray-300 transition-colors">
              About
            </a>
            <a href="#photo" className="text-white hover:text-gray-300 transition-colors">
              Photo
            </a>
            <a href="#contact" className="text-white hover:text-gray-300 transition-colors">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-16 6h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
