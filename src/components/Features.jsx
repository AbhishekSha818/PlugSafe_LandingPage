import React from 'react';
import { Shield, Zap, Lock, CheckCircle } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'Advanced Detection',
      description: 'Uses machine learning algorithms to identify potentially harmful USB devices in seconds.',
    },
    {
      icon: Zap,
      title: 'Instant Results',
      description: 'Get real-time verification without any delays or complicated setup processes.',
    },
    {
      icon: Lock,
      title: 'Privacy Protected',
      description: 'Your device information is encrypted and never stored or shared with third parties.',
    },
    {
      icon: CheckCircle,
      title: 'Compatibility',
      description: 'Works with all USB devices and operating systems for complete protection.',
    },
  ];

  return (
    <section
      id="features"
      className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 transition-colors duration-300">
            Powerful <span className="text-primary-green">Features</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 transition-colors duration-300">
            Everything you need to keep your devices safe
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-xl border-2 border-transparent hover:border-primary-green transition-all duration-300 hover:shadow-lg hover:shadow-primary-green/20 group cursor-pointer transform hover:scale-105"
              >
                <div className="mb-4 inline-block p-3 bg-primary-green/10 rounded-lg group-hover:bg-primary-green group-hover:text-slate-900 transition-colors duration-300">
                  <IconComponent size={28} className="text-primary-green group-hover:text-slate-900 transition-colors duration-300" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
