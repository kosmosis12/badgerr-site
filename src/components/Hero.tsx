import React from 'react';

// This path is now correct, assuming you rename your image file as instructed.
import heroImage from '../assets/hero-image.png';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white overflow-hidden">
      <div className="container mx-auto px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Content & Form */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
              Reward your healthy habits
            </h1>
            <p className="mt-4 text-lg lg:text-xl text-indigo-100 max-w-xl mx-auto md:mx-0">
              Break free from sedentary routines, complete personalized challenges with friends, and win prizes. It's time to transform your wellness journey.
            </p>
            <div className="mt-10 flex justify-center md:justify-start">
              <form className="w-full max-w-md flex items-center bg-white/20 backdrop-blur-sm rounded-lg p-2 border border-white/30">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent text-white placeholder-indigo-100 px-4 py-2 focus:outline-none"
                  aria-label="Email Address"
                />
                <button
                  type="submit"
                  className="bg-white text-indigo-600 font-semibold py-2 px-6 rounded-md hover:bg-indigo-100 transition duration-300 flex-shrink-0"
                >
                  Get Started →
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="flex justify-center items-center">
            <img 
              src={heroImage} 
              alt="Badgerr App Mockup" 
              className="w-full max-w-sm lg:max-w-md" 
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;