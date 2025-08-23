import React from 'react';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
  color: string;
}

const testimonialsData: Testimonial[] = [
  { quote: '"Badgerr transformed how I approach wellness. The community support is incredible!"', name: 'Sarah Chen', role: 'Sr. Data Analyst', initials: 'SC', color: 'bg-gradient-to-br from-orange-500 to-red-500' },
  { quote: '"Finally broke my sedentary habits thanks to the smart reminders and gamification."', name: 'Mike Rodriguez', role: 'Enterprise Account Executive', initials: 'MR', color: 'bg-gradient-to-br from-blue-500 to-indigo-600' },
  { quote: '"The personalized goals fit perfectly into my hectic schedule. Game changer!"', name: 'Emily Watson', role: 'Adjunct Professor & Content Creator', initials: 'EW', color: 'bg-gradient-to-br from-purple-500 to-pink-500' },
];

const Testimonials: React.FC = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 overflow-hidden">
      {/* Background pattern for texture */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-indigo-200/40 to-blue-200/40 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Users
            <span className="block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Are Saying
            </span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Join growth minded users who have transformed their wellness journey with Badgerr
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="group bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50 hover:bg-white/90 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
              <div className="text-yellow-400 text-xl mb-4 flex justify-center">
                <span className="mr-1">★</span>
                <span className="mr-1">★</span>
                <span className="mr-1">★</span>
                <span className="mr-1">★</span>
                <span>★</span>
              </div>
              <p className="text-gray-700 mb-6 font-medium text-lg leading-relaxed group-hover:text-gray-800 transition-colors duration-300">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className={`w-12 h-12 rounded-full ${testimonial.color} text-white flex items-center justify-center font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {testimonial.initials}
                </div>
                <div className="ml-4">
                  <p className="font-bold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;