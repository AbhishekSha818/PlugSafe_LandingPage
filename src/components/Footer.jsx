import React from 'react';
import { Mail, Smartphone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 dark:bg-black text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/plugsafe-logo.png" 
                alt="PlugSafe Logo" 
                className="w-10 h-10 sm:w-12 sm:h-12"
              />
              <span className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">PlugSafe</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400">
              Ensuring your USB devices are safe, one test at a time.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold mb-4 text-primary-green text-sm sm:text-base">Product</h4>
            <ul className="space-y-2 text-slate-400 text-xs sm:text-sm">
              <li><button className="hover:text-primary-green transition-colors duration-300">Features</button></li>
              <li><button className="hover:text-primary-green transition-colors duration-300">Pricing</button></li>
              <li><button className="hover:text-primary-green transition-colors duration-300">Security</button></li>
              <li><button className="hover:text-primary-green transition-colors duration-300">Roadmap</button></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4 text-primary-green text-sm sm:text-base">Company</h4>
            <ul className="space-y-2 text-slate-400 text-xs sm:text-sm">
              <li><button className="hover:text-primary-green transition-colors duration-300">About</button></li>
              <li><button className="hover:text-primary-green transition-colors duration-300">Blog</button></li>
              <li><button className="hover:text-primary-green transition-colors duration-300">Careers</button></li>
              <li><button className="hover:text-primary-green transition-colors duration-300">Contact</button></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-4 text-primary-green text-sm sm:text-base">Stay Updated</h4>
            <p className="text-slate-400 mb-4 text-xs sm:text-sm">Subscribe to get security updates</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-3 py-2 bg-slate-800 text-white text-xs sm:text-sm rounded-lg focus:outline-none focus:border-primary-green border border-slate-700 transition-colors duration-300"
              />
              <button className="px-3 py-2 bg-primary-green text-slate-900 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300">
                <Mail size={16} className="sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-slate-400 text-xs sm:text-sm gap-4 sm:gap-0">
            <p>&copy; 2024 PlugSafe. All rights reserved.</p>
            <div className="flex gap-3 sm:gap-6 flex-wrap justify-center">
              <button className="hover:text-primary-green transition-colors duration-300">Privacy Policy</button>
              <button className="hover:text-primary-green transition-colors duration-300">Terms of Service</button>
              <button className="hover:text-primary-green transition-colors duration-300">Cookie Policy</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
