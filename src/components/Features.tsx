import React from 'react';

// Using a type for feature data for type safety
interface Feature {
  icon: string; // Using emoji as a placeholder
  title: string;
  description: string;
}

const featuresData: Feature[] = [
  { icon: '🎯', title: 'Personalized Goals', description: 'Set and track custom wellness goals tailored to your lifestyle and preferences.' },
  { icon: '👥', title: 'Community Support', description: 'Connect with like-minded individuals on their wellness journey for motivation and accountability.' },
  { icon: '🏆', title: 'Reward System', description: 'Earn points and unlock achievements as you build and maintain healthy habits.' },
  { icon: '⚡️', title: 'Break Sedentary Habits', description: 'Get smart reminders and suggestions to keep you active throughout the day.' },
  { icon: '📈', title: 'Progress Tracking', description: 'Visualize your improvement with detailed analytics and progress reports.' },
  { icon: '📱', title: 'Mobile First', description: 'Seamless experience across all devices with our intuitive mobile app.' },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Make Health
          <br />
          <span className="text-indigo-600">Your New High Score</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Experience the future of wellness with AI-powered recommendations and a gamified approach to healthy living.
        </p>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-left transform hover:-translate-y-2 transition-transform duration-300">
              <div className="text-4xl mb-5 bg-indigo-100 text-indigo-600 w-16 h-16 rounded-xl flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;