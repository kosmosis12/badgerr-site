import React from 'react';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
  color: string;
}

const testimonialsData: Testimonial[] = [
  { quote: '"Badgerr transformed how I approach wellness. The community support is incredible!"', name: 'Sarah Chen', role: 'Fitness Enthusiast', initials: 'SC', color: 'bg-orange-500' },
  { quote: '"Finally broke my sedentary habits thanks to the smart reminders and gamification."', name: 'Mike Rodriguez', role: 'Remote Worker', initials: 'MR', color: 'bg-blue-500' },
  { quote: '"The personalized goals fit perfectly into my hectic schedule. Game changer!"', name: 'Emily Watson', role: 'Busy Parent', initials: 'EW', color: 'bg-purple-500' },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-md border border-gray-100">
              <div className="text-yellow-400 text-xl mb-4">★★★★★</div>
              <p className="text-gray-700 mb-6 font-medium text-lg leading-relaxed">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className={`w-12 h-12 rounded-full ${testimonial.color} text-white flex items-center justify-center font-bold text-xl`}>
                  {testimonial.initials}
                </div>
                <div className="ml-4">
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
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