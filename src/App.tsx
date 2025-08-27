import React, { useState } from 'react';
import { Target, Users, Trophy, Zap, LineChart, Smartphone } from 'lucide-react';

// NOTE: All components from your project have been consolidated into this single file.
// This makes it easy to copy and paste, but for larger projects, keeping them in separate files is recommended.

// --- COMPONENT DEFINITIONS ---

// src/components/Navbar.tsx
const Navbar: React.FC<{ setCurrentPage: (page: string) => void }> = ({ setCurrentPage }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" onClick={handleNavClick}>
            <span className="font-extrabold text-3xl bg-gradient-to-r from-blue-800 via-purple-800 to-cyan-700 bg-clip-text text-transparent">
              Badgerr
            </span>
          </a>
        </div>
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-transparent hover:border-white/20 transform hover:scale-105">
          Get Started
        </button>
      </nav>
    </header>
  );
};

// src/components/Hero.tsx
const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/20 to-transparent transform -skew-y-12 scale-150"></div>
      </div>
      <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
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
              <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-light">
                Break free from sedentary routines, complete personalized challenges with friends, and win prizes.
                <span className="block mt-2 text-blue-200 font-normal">
                  It's time to transform your wellness journey.
                </span>
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex justify-center">
                <button className="group relative px-8 py-4 bg-white text-blue-700 font-bold text-lg rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg">
                  <span className="relative z-10">Get Started Free</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-clip-text text-transparent font-bold">
                    Get Started Free
                  </span>
                </button>
              </div>
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
              <p className="text-sm text-blue-200 opacity-80">
                🚀 Join thousands of early adopters
              </p>
            </div>
          </div>
          <div className="mt-16 flex justify-center space-x-4">
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600"></div>
    </section>
  );
};

// src/components/Features.tsx
const Features: React.FC = () => {
    const featuresData = [
        { icon: <Target className="w-8 h-8" />, title: 'Personalized Goals', description: 'Set and track custom wellness goals tailored to your lifestyle and preferences.' },
        { icon: <Users className="w-8 h-8" />, title: 'Community Support', description: 'Connect with like-minded individuals on their wellness journey for motivation and accountability.' },
        { icon: <Trophy className="w-8 h-8" />, title: 'Reward System', description: 'Earn points and unlock achievements as you build and maintain healthy habits.' },
        { icon: <Zap className="w-8 h-8" />, title: 'Break Sedentary Habits', description: 'Get smart reminders and suggestions to keep you active throughout the day.' },
        { icon: <LineChart className="w-8 h-8" />, title: 'Progress Tracking', description: 'Visualize your improvement with detailed analytics and progress reports.' },
        { icon: <Smartphone className="w-8 h-8" />, title: 'Mobile First', description: 'Seamless experience across all devices with our intuitive mobile app.' },
    ];

    return (
        <section id="features" className="relative py-24 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 overflow-hidden">
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-indigo-200/40 to-blue-200/40 rounded-full blur-3xl"></div>
            </div>
            <div className="container mx-auto px-6 text-center relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    Make Health
                    <br />
                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        Your New High Score
                    </span>
                </h2>
                <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
                    Experience the future of wellness with AI-powered recommendations and a gamified approach to healthy living.
                </p>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuresData.map((feature, index) => (
                        <div key={index} className="group bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50 text-left transform hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 hover:bg-white/90">
                            <div className="text-4xl mb-5 bg-gradient-to-br from-indigo-500 to-purple-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">{feature.title}</h3>
                            <p className="mt-2 text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// src/components/Stats.tsx
const Stats: React.FC = () => (
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

// src/components/Community.tsx
const Community: React.FC = () => (
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

// src/components/Testimonials.tsx
const Testimonials: React.FC = () => {
    const testimonialsData = [
        { quote: '"Badgerr transformed how I approach wellness. The community support is incredible!"', name: 'Sarah Chen', role: 'Sr. Data Analyst', initials: 'SC', color: 'bg-gradient-to-br from-orange-500 to-red-500' },
        { quote: '"Finally broke my sedentary habits thanks to the smart reminders and gamification."', name: 'Mike Rodriguez', role: 'Enterprise Account Executive', initials: 'MR', color: 'bg-gradient-to-br from-blue-500 to-indigo-600' },
        { quote: '"The personalized goals fit perfectly into my hectic schedule. Game changer!"', name: 'Emily Watson', role: 'Adjunct Professor & Content Creator', initials: 'EW', color: 'bg-gradient-to-br from-purple-500 to-pink-500' },
    ];
    return (
        <section className="relative py-24 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 overflow-hidden">
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-indigo-200/40 to-blue-200/40 rounded-full blur-3xl"></div>
            </div>
            <div className="container mx-auto px-6 relative z-10">
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
                                <span className="mr-1">★</span><span className="mr-1">★</span><span className="mr-1">★</span><span className="mr-1">★</span><span>★</span>
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

// src/components/CTA.tsx
const CTA: React.FC = () => (
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

// src/components/Footer.tsx
const Footer: React.FC<{ setCurrentPage: (page: string) => void }> = ({ setCurrentPage }) => {
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, page: string) => {
        e.preventDefault();
        setCurrentPage(page);
        window.scrollTo(0, 0);
    };

    return (
        <footer className="bg-gray-900 text-gray-400">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    <div className="col-span-2 md:col-span-1">
                        <h3 className="font-extrabold text-2xl text-white mb-2">
                            <a href="#" onClick={(e) => handleNavClick(e, 'home')}>Badgerr</a>
                        </h3>
                        <p className="text-sm">Transforming wellness through technology, community, and personalized experiences.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-white mb-4 tracking-wider uppercase text-sm">Product</h4>
                        <ul className="space-y-2">
                            <li><a href="#features" onClick={(e) => handleNavClick(e, 'home')} className="hover:text-white transition-colors">Features</a></li>
                            <li><a href="https://play.google.com/store/apps/details?id=com.badgerr.app" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Mobile App</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-white mb-4 tracking-wider uppercase text-sm">Company</h4>
                        <ul className="space-y-2">
                            <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-white transition-colors">About</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-white mb-4 tracking-wider uppercase text-sm">Support</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-white mb-4 tracking-wider uppercase text-sm">Legal</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center text-sm">
                    <p>&copy; 2025 Badgerr. All rights reserved.</p>
                    <p className="mt-4 sm:mt-0">Made with ❤️ for your wellness journey</p>
                </div>
            </div>
        </footer>
    );
};


// --- PAGE COMPONENTS ---

// This component wraps all the sections of your main landing page.
const HomePage: React.FC = () => (
    <>
        <Hero />
        <Features />
        <Stats />
        <Community />
        <Testimonials />
        <CTA />
    </>
);

// This is the new "About" page component.
const AboutPage: React.FC = () => (
    <section className="bg-white text-gray-800 py-20 px-4">
        <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold text-center mb-12">About Badgerr</h1>
            <div className="space-y-6 text-lg leading-relaxed">
                <p>Badgerr was built on a simple truth: most wellness apps overcomplicate what should feel natural, rewarding, and fun. We don’t believe in gimmicks or endless tracking for the sake of it—we believe in momentum.</p>
                <p>That’s why Badgerr turns your personal health journey into a series of wins you can actually feel. Every milestone you hit—whether it’s completing a workout, staying consistent with your sleep, or sticking to your nutrition goals—earns you a badge. Not the meaningless kind, but a visual reminder that you’re stacking progress, day after day.</p>
                <p>Badgerr isn’t about perfection. It’s about consistency. It’s about proving to yourself that small, steady wins compound into lasting transformation. No noise, no fluff—just a clean, motivating system that makes better health something you look forward to every single day.</p>
                <p>At its core, Badgerr is here for people who want to gamify discipline, celebrate progress, and unlock the best version of themselves—without drowning in another app that feels like work.</p>
                <p className="font-semibold pt-4">Welcome to Badgerr. Earn your wins. Build your streaks. Turn wellness into momentum.</p>
            </div>
        </div>
    </section>
);


// --- MAIN APP ---

const App: React.FC = () => {
    // State to track the current page ('home' or 'about')
    const [currentPage, setCurrentPage] = useState('home');

    // Function to render the correct page component based on the state
    const renderPage = () => {
        switch (currentPage) {
            case 'about':
                return <AboutPage />;
            case 'home':
            default:
                return <HomePage />;
        }
    };

    return (
        <div className="bg-white">
            <Navbar setCurrentPage={setCurrentPage} />
            <main>
                {renderPage()}
            </main>
            <Footer setCurrentPage={setCurrentPage} />
        </div>
    );
};

export default App;

