import React from 'react';
import { ArrowRight } from 'lucide-react';
import USBBackground from './USBBackground';
import DeviceVerification from './DeviceVerification';

const Hero = ({ onGetStarted }) => {
  return (
    <section 
      id="hero"
      className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-3 sm:px-4 md:px-6 lg:px-8 min-h-screen flex items-center bg-white dark:bg-slate-900 transition-colors duration-300 overflow-hidden"
    >
      {/* USB Pendrive Background - Floating animated effect */}
      <USBBackground />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 leading-tight transition-colors duration-300">
              Test Before You <span className="text-primary-green">Plug</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-6 sm:mb-8 leading-relaxed transition-colors duration-300">
              PlugSafe ensures your USB devices are safe to use. Get instant verification and protect your computer from potentially harmful devices.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={onGetStarted}
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-primary-green text-slate-900 rounded-lg font-semibold text-sm sm:text-base hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-primary-green/50 flex items-center justify-center gap-2 group"
              >
                Get Started
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-primary-green text-primary-green rounded-lg font-semibold text-sm sm:text-base hover:bg-primary-green hover:text-slate-900 transition-all duration-300"
              >
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-gray-200 dark:border-slate-700 transition-colors duration-300">
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-primary-green">100K+</div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300 mt-1">Devices Tested</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-primary-green">99.9%</div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300 mt-1">Detection Rate</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-primary-green">2M+</div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300 mt-1">Users Protected</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <DeviceVerification />
        </div>
      </div>
    </section>
  );
};

export default Hero;
