import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="font-extrabold text-2xl text-gray-800">Badgerr</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">Features</a>
          <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">Community</a>
          <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">About</a>
        </div>
        <button className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-indigo-700 transition-all duration-300 shadow-sm hover:shadow-md">
          Get Started
        </button>
      </nav>
    </header>
  );
};

export default Navbar;