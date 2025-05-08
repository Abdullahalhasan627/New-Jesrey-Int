import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const IntroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="section bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: '-100px' }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-elevation-3">
                <img 
                  src="public/images/3331f1ebf94d4b459083d4ca9f03a535.jpg" 
                  alt="Construction equipment" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-lg overflow-hidden shadow-elevation-2">
                <img 
                  src="public/images/cq5dam.web.1280.1280.webp" 
                  alt="Construction site" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: '-100px' }}
              className="text-center lg:text-left"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary-700 mb-8">{t('home.intro.title')}</h2>
              <p className="text-xl text-secondary-700 mb-10 leading-relaxed">{t('home.intro.content')}</p>
              <Link to="/about" className="btn btn-primary text-lg px-10 py-4">
                {t('buttons.readMore')}
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;