import React from 'react';

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

export default AboutPage;