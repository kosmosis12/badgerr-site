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
                            <li><a href="#privacy" onClick={(e) => handleNavClick(e, 'privacy')} className="hover:text-white transition-colors">Privacy</a></li>
                            <li><a href="#terms" onClick={(e) => handleNavClick(e, 'terms')} className="hover:text-white transition-colors">Terms</a></li>
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

// This is the "About" page component.
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

// This is the "Terms and Conditions" page component.
const TermsPage: React.FC = () => (
    <section className="bg-gray-50 text-gray-700 py-20 px-4">
        <div className="container mx-auto max-w-4xl prose lg:prose-lg">
            <h1>Badgerr Terms & Conditions</h1>
            <p><strong>Effective Date: 5/14/2025</strong></p>
            <p>Welcome to Badgerr. These Terms and Conditions (“Terms”) constitute a legal agreement between you (“User,” “you,” or “your”) and Badgerr, Inc. (“Company,” “we,” “our,” or “us”) governing your use of our mobile application (“App”) and any related services, software, features, or content made available by us.</p>
            <p>By accessing or using Badgerr, you agree to be bound by these Terms. If you do not agree to all of these Terms, do not access or use our App.</p>
            
            <h2>1. Eligibility and Account Registration</h2>
            <p>To use Badgerr, you must be at least 18 years old or have the consent of a legal guardian. You agree that the information you provide during registration is accurate, complete, and will be kept up-to-date.</p>
            
            <h2>2. Description of Service</h2>
            <p>Badgerr is a gamified wellness application that provides users with personalized wellness reminders, encourages participation in healthy activities, and facilitates friendly competitions with peers. It includes educational content, self-reported health tracking, and rewards for engagement.</p>
            <p>Badgerr does not provide medical advice, diagnoses, or treatment plans. All content is provided for informational and motivational purposes only and should not replace consultation with a licensed medical professional.</p>
            
            <h2>3. User Responsibilities</h2>
            <p>You acknowledge and agree:</p>
            <ul>
                <li>You are solely responsible for the data you input (e.g., weight, height, sleep, mood).</li>
                <li>You should consult your physician before beginning any new wellness regimen, especially if you have existing medical conditions.</li>
                <li>You will not use the App in a way that violates any laws or infringes on others' rights.</li>
            </ul>

            <h2>4. Data Collection & Privacy</h2>
            <p>We may collect and process certain personal and wellness-related data, including: Basic profile information (e.g., name, email), Wellness-related inputs (e.g., hydration, sleep tracking, exercise participation), and Biometric inputs (e.g., height, weight, mood check-ins). We are committed to protecting your data. All data is processed in accordance with our [Privacy Policy] and relevant data protection laws, including the California Consumer Privacy Act (CCPA) and General Data Protection Regulation (GDPR) where applicable. Badgerr does not sell user data. Data may be anonymized and aggregated for analytics and platform improvement only.</p>

            <h2>5. Health Disclaimers</h2>
            <p>The App’s wellness suggestions (e.g., grounding, mindfulness, hydration, natural light exposure) are informational only and based on publicly available research (see Harnessing Nature study). No activity recommended or prompted by Badgerr should be interpreted as a substitute for professional medical care. Participation in challenges or reminders is entirely voluntary and at your own discretion and risk.</p>
            <p><strong>Emergency Use Warning:</strong> The App is not designed for crisis intervention. If you are experiencing a medical or mental health emergency, call 911 or seek immediate assistance.</p>
            
            <h2>6. Gamification and Prizes</h2>
            <p>Badgerr includes in-app gamification (e.g., badges, points, leaderboards). Prizes or rewards, if offered, are non-transferable and may be subject to additional terms. Badgerr reserves the right to modify or discontinue prize programs at any time.</p>

            <h2>7. User Content and Conduct</h2>
            <p>You may upload or input data, including personal reflections or wellness goals. By doing so, you grant Badgerr a limited, non-exclusive, royalty-free license to use this content solely to provide services to you. You agree not to: Upload harmful, abusive, or misleading content; Engage in any behavior that disrupts or abuses the App ecosystem; or Attempt unauthorized access to Badgerr’s backend systems.</p>

            <h2>8. Security and Data Retention</h2>
            <p>We use industry-standard encryption and security practices to protect your data. However, no system is entirely immune to breaches. You use the App at your own risk and agree to notify us immediately of any unauthorized use. Data will be retained only as long as necessary for providing services or as required by law. You may request deletion of your data at any time by contacting support.</p>

            <h2>9. License and Intellectual Property</h2>
            <p>All App content, design, text, graphics, and trademarks are the property of Badgerr or its licensors. You are granted a limited, non-transferable license to use the App for personal, non-commercial use. You may not reverse-engineer, modify, or distribute the App or its content without written permission.</p>

            <h2>10. Modifications to Terms and the App</h2>
            <p>Badgerr reserves the right to update these Terms at any time. You will be notified of material changes. Continued use of the App after changes constitutes acceptance of the revised Terms. We may also modify, suspend, or discontinue parts of the App without liability.</p>

            <h2>11. Termination</h2>
            <p>We reserve the right to suspend or terminate your access to the App if you violate these Terms, for suspected misuse, or for technical or legal reasons. You may stop using the App at any time. Upon termination, certain provisions (e.g., intellectual property, disclaimers, limitation of liability) will survive.</p>

            <h2>12. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law: Badgerr is not liable for any indirect, incidental, or consequential damages arising from use of the App. Badgerr makes no warranties about the accuracy, completeness, or reliability of any content or outcomes derived from App usage. Your sole remedy for dissatisfaction is to discontinue use.</p>

            <h2>13. Indemnification</h2>
            <p>You agree to indemnify, defend, and hold harmless Badgerr, its affiliates, and its personnel from any claims, liabilities, damages, or legal fees arising from your use of the App or breach of these Terms.</p>

            <h2>14. Governing Law and Dispute Resolution</h2>
            <p>These Terms are governed by the laws of the State of California, United States, without regard to its conflict of laws principles. You agree to resolve any disputes through binding arbitration in Orange County, California, waiving class actions and jury trials to the fullest extent permitted.</p>
        </div>
    </section>
);

// This is the new "Privacy Policy" page component.
const PrivacyPage: React.FC = () => (
    <section className="bg-gray-50 text-gray-700 py-20 px-4">
        <div className="container mx-auto max-w-4xl prose lg:prose-lg">
            <h1>Privacy Policy</h1>
            <p><strong>Effective Date: 8/27/2025</strong></p>
            <p>At Badgerr, your trust comes first. We built this platform with one principle in mind: your health and personal data belongs to you. We don’t sell it, we don’t misuse it, and we keep it safe.</p>

            <h2>1. Information We Collect</h2>
            <p>When you use Badgerr, we may collect the following types of information:</p>
            <ul>
                <li><strong>Account Information:</strong> Email address, username, and profile details you choose to provide.</li>
                <li><strong>Wellness Data:</strong> Activities you log, milestones you complete, and badges you earn.</li>
                <li><strong>Device Information:</strong> Basic technical data (like browser type, operating system, IP address) to improve app performance.</li>
            </ul>
            <p>We do not require or collect sensitive medical records.</p>

            <h2>2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
                <li>Power your experience in the app (badges, progress tracking, personalized insights).</li>
                <li>Improve performance, usability, and overall reliability.</li>
                <li>Communicate updates, features, or changes relevant to your use of Badgerr.</li>
            </ul>
            <p>We will never use your data for reasons unrelated to your wellness journey.</p>

            <h2>3. How We Share Your Information</h2>
            <p>We don’t sell, rent, or trade your personal information to advertisers.</p>
            <ul>
                <li><strong>Third-Party Services:</strong> We may use secure third-party providers (for hosting, analytics, or crash reporting), but they only receive the data needed to provide those services.</li>
                <li><strong>Legal Compliance:</strong> We may share information if required by law, but only when absolutely necessary.</li>
            </ul>

            <h2>4. How We Protect Your Data</h2>
            <ul>
                <li>Data is encrypted in transit and at rest.</li>
                <li>Access to your data is restricted to authorized personnel only.</li>
                <li>We regularly review our security measures to ensure ongoing protection.</li>
            </ul>

            <h2>5. Your Choices & Rights</h2>
            <p>You are in control:</p>
            <ul>
                <li>You can update or delete your account at any time.</li>
                <li>You can request a copy of your data.</li>
                <li>You can opt out of non-essential communications.</li>
            </ul>

            <h2>6. Children’s Privacy</h2>
            <p>Badgerr is not intended for users under the age of 13. We do not knowingly collect data from children.</p>

            <h2>7. Updates to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. When we do, we’ll post the new version here and update the effective date.</p>

            <h2>8. Contact Us</h2>
            <p>If you have any questions about your data or this Privacy Policy, contact us at: privacy@badgerr.com</p>
        </div>
    </section>
);


// --- MAIN APP ---

const App: React.FC = () => {
    // State to track the current page ('home', 'about', 'terms', or 'privacy')
    const [currentPage, setCurrentPage] = useState('home');

    // Function to render the correct page component based on the state
    const renderPage = () => {
        switch (currentPage) {
            case 'about':
                return <AboutPage />;
            case 'terms':
                return <TermsPage />;
            case 'privacy':
                return <PrivacyPage />;
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


