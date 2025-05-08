import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Plane as Crane, Cog, PenTool as Tool, Building2 } from 'lucide-react';

import ServiceCard from '../common/ServiceCard';

const ProductsSection: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t('home.products.construction_elevators.title'),
      description: t('home.products.construction_elevators.description'),
      icon: <Building2 size={48} />,
      image: '/images/images.jpg',
      link: '/services',
    },
    {
      title: t('home.products.tower_cranes.title'),
      description: t('home.products.tower_cranes.description'),
      icon: <Crane size={48} />,
      image: '/images/images (1).jpg',
      link: '/services',
    },
    {
      title: t('home.products.spare_parts.title'),
      description: t('home.products.spare_parts.description'),
      icon: <Cog size={48} />,
      image: '/images/images (2).jpg',
      link: '/services',
    },
    {
      title: t('home.products.maintenance.title'),
      description: t('home.products.maintenance.description'),
      icon: <Tool size={48} />,
      image: '/images/images (3).jpg',
      link: '/services',
    },
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            {t('home.products.title')}
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              image={service.image}
              link={service.link}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;