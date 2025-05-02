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
      title: 'Construction Elevator SC200/200',
      image: 'https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Dual cage construction elevator with 2000kg lifting capacity',
    },
    {
      id: 2,
      title: 'Tower Crane Potain MCT 85',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Compact city tower crane with 5-ton maximum capacity',
    },
    {
      id: 3,
      title: 'XCMG XGT160 Tower Crane',
      image: 'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Heavy-duty tower crane for large construction projects',
    },
    {
      id: 4,
      title: 'Construction Elevator SC100/100',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Single cage construction elevator with 1000kg lifting capacity',
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