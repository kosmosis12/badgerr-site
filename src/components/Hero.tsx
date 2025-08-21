import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 text-white overflow-hidden">
      {/* This div provides a subtle pattern overlay, similar to the original design */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}
      ></div>

      <div className="container mx-auto px-6 py-28 md:py-32 relative z-10 text-center">
        
        {/* Centered Content */}
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            Reward your healthy habits
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-indigo-100 leading-relaxed">
            Transform your wellness journey with personalized recommendations 
            and a supportive community. Break free from sedentary habits and 
            embrace a healthier lifestyle.
          </p>
          <form className="mt-10 flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-5 py-3 rounded-lg bg-white/20 backdrop-blur-sm text-white placeholder-indigo-200 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
              aria-label="Email Address"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-indigo-600 font-bold rounded-lg hover:bg-indigo-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              Get Started →
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Hero;
