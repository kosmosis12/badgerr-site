import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 text-white overflow-hidden">
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Background pattern for texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/20 to-transparent transform -skew-y-12 scale-150"></div>
      </div>
      
      <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Main Content */}
          <div className="space-y-8">
            {/* Main heading with enhanced typography */}
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-8xl font-black leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Reward your
                </span>
                <br />
                <span className="text-white">
                  healthy habits
                </span>
              </h1>
              
              {/* Enhanced subtitle */}
              <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-light">
                Break free from sedentary routines, complete personalized challenges with friends, and win prizes. 
                <span className="block mt-2 text-blue-200 font-normal">
                  It's time to transform your wellness journey.
                </span>
              </p>
            </div>

            {/* Enhanced CTA section */}
            <div className="space-y-6">
              {/* Primary CTA Button */}
              <div className="flex justify-center">
                <button className="group relative px-8 py-4 bg-white text-blue-700 font-bold text-lg rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg">
                  <span className="relative z-10">Get Started Free</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-clip-text text-transparent font-bold">
                    Get Started Free
                  </span>
                </button>
              </div>
              
              {/* Email form with enhanced styling */}
              <div className="flex justify-center">
                <form className="w-full max-w-lg flex items-center bg-white/10 backdrop-blur-md rounded-2xl p-1 border border-white/20 shadow-xl">
                  <input
                    type="email"
                    placeholder="Enter your email for early access"
                    className="w-full bg-transparent text-white placeholder-blue-200 px-6 py-4 focus:outline-none text-lg"
                    aria-label="Email Address"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-white via-blue-200 to-purple-300 text-blue-700 font-semibold py-4 px-8 rounded-xl hover:from-blue-50 hover:via-purple-50 hover:to-white transition-all duration-300 transform hover:scale-105 shadow-lg border border-blue-200"
                  >
                    Join Waitlist
                  </button>
                </form>
              </div>
              
              {/* Trust indicators */}
              <p className="text-sm text-blue-200 opacity-80">
                🚀 Join thousands of early adopters
              </p>
            </div>
          </div>

          {/* Visual accent elements */}
          <div className="mt-16 flex justify-center space-x-4">
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-3 h-3 bg-indigo-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>
      </div>
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600"></div>
    </section>
  );
};

export default Hero;