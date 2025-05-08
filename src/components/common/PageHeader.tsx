import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, backgroundImage }) => {
  const { i18n } = useTranslation();

  const defaultBg = "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  
  return (
    <div 
      className="relative pt-28 pb-20 md:pt-32 md:pb-24 bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.8)), url(${backgroundImage || defaultBg})` 
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-100 max-w-3xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;