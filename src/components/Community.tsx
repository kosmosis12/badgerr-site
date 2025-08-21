import React from 'react';

const Community: React.FC = () => {
  return (
    <section id="community" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Join Our Thriving
          <br />
          <span className="text-indigo-600">Wellness Community</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Connect with users who are transforming their lives through healthy habits and mutual support.
        </p>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl mx-auto mb-4 bg-purple-100 text-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center">💬</div>
            <h3 className="text-xl font-bold text-gray-800">Daily Discussions</h3>
            <p className="mt-2 text-gray-600">Share experiences and get advice from peers.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mx-auto mb-4 bg-purple-100 text-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center">❤️</div>
            <h3 className="text-xl font-bold text-gray-800">Motivation Boost</h3>
            <p className="mt-2 text-gray-600">Get encouragement when you need it most.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mx-auto mb-4 bg-purple-100 text-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center">🔗</div>
            <h3 className="text-xl font-bold text-gray-800">Share Progress</h3>
            <p className="mt-2 text-gray-600">Celebrate victories together with the community.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mx-auto mb-4 bg-purple-100 text-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center">⭐</div>
            <h3 className="text-xl font-bold text-gray-800">Expert Tips</h3>
            <p className="mt-2 text-gray-600">Learn from wellness professionals and coaches.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;