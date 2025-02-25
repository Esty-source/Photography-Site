import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-dark-bg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-white text-lg font-light">CreativeMind Production</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#" className="text-white hover:text-gray-300 text-sm">Home</a>
              <a href="#" className="text-white hover:text-gray-300 text-sm">Photo</a>
              <a href="#" className="text-white hover:text-gray-300 text-sm">About Me</a>
              <a href="#" className="text-white hover:text-gray-300 text-sm">Contact</a>
            </div>
          </div>
          <div className="md:hidden">
            <button className="text-white p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
