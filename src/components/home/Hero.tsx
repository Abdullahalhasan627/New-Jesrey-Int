import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ 
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" 
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {t('home.hero.title')}
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto"
          >
            {t('home.hero.subtitle')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link to="/services" className="btn btn-accent text-lg px-8 py-4 w-full sm:w-auto" id='hero-button'>
              {t('buttons.viewServices')}
            </Link>
            <Link to="/contact" className="btn btn-outline border-2 border-white text-white hover:bg-white hover:text-primary-700 text-lg px-8 py-4 w-full sm:w-auto">
              {t('buttons.contactUs')}
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1.5,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse" 
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white"
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </div>
  );
};

export default Hero;