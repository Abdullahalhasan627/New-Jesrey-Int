import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  link: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, image, link, delay = 0 }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true, margin: '-50px' }}
      className="card group"
    >
      <div className="relative overflow-hidden h-56">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary-700 bg-opacity-60 flex items-center justify-center">
          <div className="text-white text-4xl">{icon}</div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary-700 mb-3">{title}</h3>
        <p className="text-secondary-600 mb-4">{description}</p>
        <Link 
          to={link} 
          className="inline-flex items-center text-accent-500 font-medium hover:text-accent-600 transition-colors"
        >
          {t('buttons.learnMore')} &rarr;
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;