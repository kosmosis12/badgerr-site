import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-extrabold text-2xl text-white mb-2">Badgerr</h3>
            <p className="text-sm">Transforming wellness through technology, community, and personalized experiences.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4 tracking-wider uppercase text-sm">Product</h4>
            <ul className="space-y-2">
              {/* The link below now points to the Google Play Store page for the Badgerr App. */}
              <li><a href="https://play.google.com/store/apps/details?id=com.badgerr.app" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Mobile App</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4 tracking-wider uppercase text-sm">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4 tracking-wider uppercase text-sm">Support</h4>
            <ul className="space-y-2">
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

export default Footer;