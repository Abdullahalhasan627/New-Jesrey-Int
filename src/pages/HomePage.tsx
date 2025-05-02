import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import Hero from '../components/home/Hero';
import IntroSection from '../components/home/IntroSection';
import ProductsSection from '../components/home/ProductsSection';
import ProductCarousel from '../components/home/ProductCarousel';
import CTASection from '../components/home/CTASection';

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('meta.title')}</title>
      </Helmet>
      
      <Hero />
      <IntroSection />
      <ProductCarousel />
      <ProductsSection />
      <CTASection />
    </>
  );
};

export default HomePage;