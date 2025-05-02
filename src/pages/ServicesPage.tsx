import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Building2, Plane as Crane, Cog, PenTool as Tool } from 'lucide-react';

import PageHeader from '../components/common/PageHeader';

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Building2 size={48} className="text-accent-500" />,
      title: t('services.elevator_sales.title'),
      description: t('services.elevator_sales.description'),
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      icon: <Crane size={48} className="text-accent-500" />,
      title: t('services.crane_sales.title'),
      description: t('services.crane_sales.description'),
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      icon: <Cog size={48} className="text-accent-500" />,
      title: t('services.spare_parts.title'),
      description: t('services.spare_parts.description'),
      image: 'https://images.pexels.com/photos/210158/pexels-photo-210158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      icon: <Tool size={48} className="text-accent-500" />,
      title: t('services.maintenance.title'),
      description: t('services.maintenance.description'),
      image: 'https://images.pexels.com/photos/8985511/pexels-photo-8985511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t('services.title')} - {t('meta.title')}</title>
      </Helmet>
      
      <PageHeader 
        title={t('services.title')}
        subtitle={t('services.intro')}
        backgroundImage="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-24">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: '-100px' }}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'order-1 md:order-2' : ''}>
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-primary-700 mb-4">{service.title}</h3>
                  <p className="text-lg text-secondary-700">{service.description}</p>
                </div>
                <div className={index % 2 === 1 ? 'order-2 md:order-1' : ''}>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="rounded-lg shadow-elevation-3 w-full h-auto"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;