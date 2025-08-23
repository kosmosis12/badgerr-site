import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Ready to Transform Your Wellness Journey?</h2>
        <p className="mt-4 text-indigo-100 max-w-2xl mx-auto">
          Be among the first to experience the future of wellness tracking. Get personalized recommendations and community support.
        </p>
        <div className="mt-8 flex justify-center">
          <form className="w-full max-w-md flex items-center bg-white/20 backdrop-blur-sm rounded-lg p-2 border border-white/30">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full bg-transparent text-white placeholder-indigo-100 px-4 py-2 focus:outline-none"
              aria-label="Email Address"
            />
            <button
              type="submit"
              className="bg-white text-indigo-600 font-semibold py-2 px-6 rounded-md hover:bg-indigo-100 transition duration-300 whitespace-nowrap"
            >
              Start Free →
            </button>
          </form>
        </div>
        <p className="text-sm mt-3 text-indigo-200">Find Your Happiness Routine.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-indigo-100 max-w-xl mx-auto">
            <div className="font-semibold">✓ Free Forever Plan</div>
            <div className="font-semibold">✓ No Credit Card Required</div>
            <div className="font-semibold">✓ 24/7 Support Available</div>
        </div>
      </div>
    </section>
  );
};

export default CTA;