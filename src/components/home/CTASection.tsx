import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const CTASection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section 
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{ 
        backgroundImage: "linear-gradient(rgba(30, 58, 138, 0.85), rgba(30, 58, 138, 0.85)), url('https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" 
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-3xl md:text-4xl font-bold text-white mb-6"
        >
          {t('home.cta.title')}
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
        >
          {t('home.cta.content')}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <Link to="/contact" className="btn btn-accent text-lg px-8 py-4">
            {t('buttons.contactUs')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;