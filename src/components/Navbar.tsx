import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="font-extrabold text-3xl bg-gradient-to-r from-blue-800 via-purple-800 to-cyan-700 bg-clip-text text-transparent">
            Badgerr
          </span>
        </div>
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-transparent hover:border-white/20 transform hover:scale-105">
          Get Started
        </button>
      </nav>
    </header>
  );
};

export default Navbar;