import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    setIsLanguageDropdownOpen(false);
  };

  const navItems = [
    { path: '/', text: t('nav.home') },
    { path: '/about', text: t('nav.about') },
    { path: '/services', text: t('nav.services') },
    { path: '/gallery', text: t('nav.gallery') },
    { path: '/contact', text: t('nav.contact') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-elevation-2 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/logo.svg" alt="New Jersey Int." className="h-12 w-auto" />
          <span className={`ml-2 font-heading font-bold text-xl ${isScrolled ? 'text-primary-700' : 'text-white'}`}>
            New Jersey Int.
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `font-medium transition-colors duration-200 ${
                  isScrolled
                    ? `${isActive ? 'text-accent-500' : 'text-secondary-700 hover:text-primary-700'}`
                    : `${isActive ? 'text-accent-500' : 'text-white hover:text-accent-300'}`
                }`
              }
            >
              {item.text}
            </NavLink>
          ))}

          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              className={`flex items-center font-medium transition-colors duration-200 ${
                isScrolled ? 'text-secondary-700 hover:text-primary-700' : 'text-white hover:text-accent-300'
              }`}
            >
              <Globe size={18} className="mr-1" />
              {i18n.language === 'en' ? 'EN' : 'AR'}
            </button>
            {isLanguageDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 py-2 w-32 bg-white rounded-lg shadow-elevation-2">
                <button
                  onClick={toggleLanguage}
                  className="w-full text-left px-4 py-2 text-secondary-700 hover:bg-gray-100 transition-colors duration-200"
                >
                  {t('nav.language')}
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
            isScrolled ? 'text-primary-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
          }`}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: i18n.language === 'ar' ? -300 : 300 }}
              animate={{ x: 0 }}
              exit={{ x: i18n.language === 'ar' ? -300 : 300 }}
              transition={{ type: 'tween' }}
              className={`fixed top-0 ${i18n.language === 'ar' ? 'left-0' : 'right-0'} h-full w-4/5 max-w-sm bg-white shadow-elevation-3 z-50`}
            >
              <div className="p-5 flex flex-col h-full">
                <div className="flex justify-between items-center mb-8">
                  <Link to="/" className="font-heading font-bold text-xl text-primary-700">
                    New Jersey Int.
                  </Link>
                  <button 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-secondary-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  >
                    <X size={24} />
                  </button>
                </div>
                <nav className="flex-grow">
                  <ul className="space-y-4">
                    {navItems.map((item) => (
                      <li key={item.path}>
                        <NavLink
                          to={item.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={({ isActive }) =>
                            `block font-medium text-lg ${
                              isActive ? 'text-accent-500' : 'text-secondary-700 hover:text-primary-700'
                            }`
                          }
                        >
                          {item.text}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="pt-4 border-t border-gray-200">
                  <button
                    onClick={toggleLanguage}
                    className="flex items-center text-secondary-700 hover:text-primary-700 font-medium"
                  >
                    <Globe size={18} className="mr-2" />
                    {t('nav.language')}
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;