import React from 'react';
import { Smartphone, Search, CheckCircle, AlertCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Smartphone,
      number: '01',
      title: 'Connect Device',
      description: 'Simply plug in your USB device to start the verification process.',
    },
    {
      icon: Search,
      number: '02',
      title: 'Automatic Scan',
      description: 'Our AI performs a comprehensive analysis of the device firmware and signature.',
    },
    {
      icon: CheckCircle,
      number: '03',
      title: 'Get Results',
      description: 'Receive instant verification results with detailed safety information.',
    },
    {
      icon: AlertCircle,
      number: '04',
      title: 'Stay Protected',
      description: 'Get alerts for any suspicious devices and recommendations for safe usage.',
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 lg:px-8 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 transition-colors duration-300">
            How It <span className="text-primary-green">Works</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 transition-colors duration-300">
            Simple, secure, and incredibly fast
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connection line - hidden on mobile and tablet */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary-green to-transparent"></div>
                )}

                <div className="relative z-10 p-6 sm:p-8 bg-gray-50 dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 transition-all duration-300 hover:border-primary-green hover:shadow-lg hover:shadow-primary-green/20">
                  {/* Step number */}
                  <div className="absolute -top-4 -left-4 w-10 h-10 sm:w-12 sm:h-12 bg-primary-green rounded-full flex items-center justify-center font-bold text-slate-900 text-base sm:text-lg shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-4 sm:mb-6 inline-block p-3 bg-primary-green/10 rounded-lg">
                    <IconComponent size={28} className="text-primary-green" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
