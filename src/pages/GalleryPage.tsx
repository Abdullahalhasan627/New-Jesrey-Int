import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import PageHeader from '../components/common/PageHeader';

const GalleryPage: React.FC = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(-1);

  const media = [
    { src: '/images/video_2025-05-08_17-59-02.mp4', type: 'video', width: 1260, height: 750, alt: 'Construction Elevator' },
    { src: '/images/photo_2025-05-08_18-41-02.jpg', type: 'image', width: 1260, height: 750, alt: 'Tower Crane' },
    { src: '/images/photo_2025-05-08_18-22-08.jpg', type: 'image', width: 1260, height: 750, alt: 'Construction Site' },
    { src: '/images/photo_2025-05-08_17-58-37.jpg', type: 'image', width: 1260, height: 750, alt: 'Industrial Equipment' },
    { src: '/images/video_2025-05-08_18-19-56.mp4', type: 'video', width: 1260, height: 750, alt: 'Construction Workers' },
    { src: '/images/96773715_113595587023052_7846634263125426176_n.jpg', type: 'image', width: 1260, height: 750, alt: 'Tower Crane' },
  ];

  // Fixed type compatibility for Lightbox slides
  const lightboxMedia = media.map(item => ({
    src: item.src,
    alt: item.alt,
    type: item.type === 'video' ? 'image' : item.type // Treat videos as images for Lightbox compatibility
  }));

  return (
    <>
      <Helmet>
        <title>{t('gallery.title')} - {t('meta.title')}</title>
      </Helmet>
      
      <PageHeader 
        title={t('gallery.title')}
        subtitle={t('gallery.intro')}
        backgroundImage="/images/P-Cat-Tower-Crane1.jpg"
      />
      
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {media.map((item, idx) => (
                <div key={idx} className="relative w-full h-64 overflow-hidden">
                  {item.type === 'video' ? (
                    <video
                      src={item.src}
                      controls={false}
                      autoPlay
                      loop
                      muted
                      className="w-full h-full object-cover cursor-pointer"
                      onClick={() => setIndex(idx)}
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover cursor-pointer"
                      onClick={() => setIndex(idx)}
                    />
                  )}
                </div>
              ))}
            </div>
            
            <Lightbox
              slides={lightboxMedia}
              open={index >= 0}
              index={index}
              close={() => setIndex(-1)}
              render={{
                slide: ({ slide }) => (
                  <div className="max-w-3xl mx-auto p-4 bg-white rounded-lg shadow-lg">
                    {slide.type === 'image' ? (
                      slide.src.endsWith('.mp4') ? (
                        <video
                          src={slide.src}
                          controls
                          autoPlay
                          loop
                          muted
                          className="w-full h-auto object-cover rounded-lg"
                        />
                      ) : (
                        <img
                          src={slide.src}
                          alt={slide.alt}
                          className="w-full h-auto object-cover rounded-lg"
                        />
                      )
                    ) : null}
                  </div>
                )
              }}
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;