import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

import PageHeader from '../components/common/PageHeader';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  const values = [
    {
      title: t('about.values.quality'),
      description: t('about.values.quality_desc'),
    },
    {
      title: t('about.values.reliability'),
      description: t('about.values.reliability_desc'),
    },
    {
      title: t('about.values.expertise'),
      description: t('about.values.expertise_desc'),
    },
    {
      title: t('about.values.customer_service'),
      description: t('about.values.customer_service_desc'),
    },
  ];

  const partners = [
    { name: 'Potain', logo: 'public/images/images (4).jpg' },
    { name: 'XCMG', logo: 'public/images/images.png' },
    { name: 'GJJ', logo: 'public/images/asakco_logo.jpg' },
    { name: 'Orbit', logo: 'public/images/images (1).png' },
  ];

  return (
    <>
      <Helmet>
        <title>{t('about.title')} - {t('meta.title')}</title>
      </Helmet>
      
      <PageHeader 
        title={t('about.title')} 
        backgroundImage="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      {/* Mission Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <h2 className="text-3xl font-bold text-primary-700 mb-6">{t('about.mission.title')}</h2>
              <p className="text-lg text-secondary-700">{t('about.mission.content')}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <img 
                src="https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Mission" 
                className="rounded-lg shadow-elevation-3 w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Story Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: '-100px' }}
              className="order-2 md:order-1"
            >
              <img 
                src="public/images/XGT8020-16-1 (1).jpg" 
                alt="Our Story" 
                className="rounded-lg shadow-elevation-3 w-full h-auto"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: '-100px' }}
              className="order-1 md:order-2"
            >
              <h2 className="text-3xl font-bold text-primary-700 mb-6">{t('about.story.title')}</h2>
              <p className="text-lg text-secondary-700">{t('about.story.content')}</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: '-100px'}}
            >
              {t('about.values.title')}
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: '-100px' }}
                className="card p-6"
              >
                <div className="text-accent-500 mb-4">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-xl font-bold text-primary-700 mb-3">{value.title}</h3>
                <p className="text-secondary-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              {t('about.partners.title')}
            </motion.h2>
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-lg text-center text-secondary-700 max-w-3xl mx-auto mb-12"
          >
            {t('about.partners.content')}
          </motion.p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: '-100px' }}
                className="bg-white rounded-lg shadow-elevation-2 p-6 flex items-center justify-center"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-24 w-auto"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;