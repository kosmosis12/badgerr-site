import React from 'react';

const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-5xl font-extrabold text-indigo-600">9-10h</p>
            <p className="mt-2 text-gray-600 font-medium">Average Daily Sitting Time</p>
          </div>
          <div>
            <p className="text-5xl font-extrabold text-indigo-600">75%</p>
            <p className="mt-2 text-gray-600 font-medium">Tech Workers Want Better Habits</p>
          </div>
          <div>
            <p className="text-5xl font-extrabold text-indigo-600">+27%</p>
            <p className="mt-2 text-gray-600 font-medium">Increased Need for Collaboration</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;