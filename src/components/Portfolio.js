import React from 'react';
import logo from '../assets/white.png';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-dark-bg flex">
      {/* Left side - Logo */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-[400px]">
          <img 
            src={logo} 
            alt="CreativeMind Productions Logo" 
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Right side - Portfolio Title */}
      <div className="w-1/2 p-8 flex flex-col justify-center">
        <div className="space-y-4">
          <h1 className="text-white text-7xl font-bold">My</h1>
          <h1 className="text-white text-7xl font-bold flex items-center">
            Portfolio
            <span className="ml-4 h-0.5 flex-grow bg-white"></span>
          </h1>
        </div>
        <div className="absolute bottom-8 right-8">
          <p className="text-white text-sm">Page 1/01</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
