import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProductCarousel: React.FC = () => {
  const { t } = useTranslation();

  const products = [
    {
      id: 1,
      title: t('homes.products.items.0.title'),
      image: '/images/593124_957220_GJJ Passenger hoist sinopro.jpg',
      description: t('homes.products.items.0.description'),
    },
    {
      id: 2,
      title: t('homes.products.items.1.title'),
      image: '/images/5-ton-tower-cranes-500x500.webp',
      description: t('homes.products.items.1.description'),
    },
    {
      id: 3,
      title: t('homes.products.items.2.title'),
      image: '/images/XCMG-Official-Xgt600-25s-China-25-Ton-Building-Construction-Topless-Tower-Crane-with-Cheap-Price.avif',
      description: t('homes.products.items.2.description'),
    },
    {
      id: 4,
      title: t('homes.products.items.3.title'),
      image: '/images/H816b89d24c2e4b8aa77244ccb706d159y.jpg_720x720q50.avif',
      description: t('homes.products.items.3.description'),
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-100px' }}
          className="section-title"
        >
          <h2 className="text-3xl font-bold text-primary-700">{t('home.products.title')}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-12"
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            modules={[Navigation, Pagination, Autoplay]}
            className="product-carousel"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="card h-full flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold text-primary-700 mb-2">{product.title}</h3>
                    <p className="text-secondary-600">{product.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCarousel;