import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Team from './components/Team';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider>
      <LoadingScreen isVisible={isLoading} onLoadingComplete={handleLoadingComplete} />
      
      <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
        <Navbar onNavClick={handleNavClick} />
        
        {/* Main Content */}
        <main className="pt-20">
          <Hero onGetStarted={() => handleNavClick('get-started')} />
          <Features />
          <HowItWorks />
          <Team />
          
          {/* Get Started Section */}
          <section
            id="get-started"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 transition-colors duration-300"
          >
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300">
                Ready to Keep Your Devices <span className="text-primary-green">Safe</span>?
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 transition-colors duration-300">
                Start testing your USB devices today with PlugSafe. Get instant verification and peace of mind.
              </p>
              <button
                onClick={() => alert('Get Started - Coming Soon!')}
                className="px-8 py-4 bg-primary-green text-slate-900 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-primary-green/50"
              >
                Download PlugSafe Now
              </button>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
