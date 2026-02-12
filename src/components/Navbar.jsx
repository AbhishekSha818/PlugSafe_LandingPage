import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = ({ onNavClick }) => {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Features', id: 'features' },
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'Team', id: 'team' },
  ];

  const handleNavClick = (id) => {
    onNavClick(id);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          
           {/* Logo */}
           <div className="flex-shrink-0">
             <div className="flex items-center gap-1 sm:gap-2">
               <img 
                 src="/plugsafe-logo.png" 
                 alt="PlugSafe Logo" 
                 className="w-8 h-8 sm:w-10 sm:h-10"
               />
               <span className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
                 PlugSafe
               </span>
             </div>
           </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8 md:gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-slate-700 dark:text-slate-200 hover:text-primary-green dark:hover:text-primary-green transition-colors duration-300 font-medium text-sm md:text-base"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right side: Theme Toggle + Get Started + Menu Button */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-primary-green hover:dark:bg-primary-green transition-colors duration-300 touch-target"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun size={18} className="text-yellow-400 sm:w-5 sm:h-5" />
              ) : (
                <Moon size={18} className="text-slate-700 sm:w-5 sm:h-5" />
              )}
            </button>

            {/* Get Started Button - Desktop */}
            <button
              onClick={() => handleNavClick('get-started')}
              className="hidden sm:block px-4 sm:px-6 py-2 bg-primary-green text-slate-900 rounded-lg font-semibold text-sm sm:text-base hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-primary-green/50"
            >
              Get Started
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-slate-900 dark:text-white touch-target"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 dark:border-slate-800 py-3 px-2 space-y-2 bg-white dark:bg-slate-900 transition-colors duration-300">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="w-full text-left px-3 py-2 text-sm sm:text-base text-slate-700 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-primary-green rounded-lg transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('get-started')}
              className="w-full px-3 py-2 bg-primary-green text-slate-900 rounded-lg font-semibold text-sm sm:text-base hover:bg-opacity-90 transition-all duration-300 mt-2"
            >
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
