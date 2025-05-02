import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const IntroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="section bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <img 
              src="https://images.pexels.com/photos/2323261/pexels-photo-2323261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Construction equipment" 
              className="rounded-lg shadow-elevation-3 w-full h-auto"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h2 className="text-3xl font-bold text-primary-700 mb-6">{t('home.intro.title')}</h2>
            <p className="text-lg text-secondary-700 mb-8">{t('home.intro.content')}</p>
            <Link to="/about" className="btn btn-primary">
              {t('buttons.readMore')}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;