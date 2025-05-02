import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import PageHeader from '../components/common/PageHeader';

const GalleryPage: React.FC = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(-1);

  const photos = [
    { src: 'https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', width: 1260, height: 750, alt: 'Construction Elevator' },
    { src: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', width: 1260, height: 750, alt: 'Tower Crane' },
    { src: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', width: 1260, height: 750, alt: 'Construction Site' },
    { src: 'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', width: 1260, height: 750, alt: 'Industrial Equipment' },
    { src: 'https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', width: 1260, height: 750, alt: 'Construction Workers' },
    { src: 'https://images.pexels.com/photos/210158/pexels-photo-210158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', width: 1260, height: 750, alt: 'Machinery Parts' },
    { src: 'https://images.pexels.com/photos/8985511/pexels-photo-8985511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', width: 1260, height: 750, alt: 'Maintenance' },
    { src: 'https://images.pexels.com/photos/2323261/pexels-photo-2323261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', width: 1260, height: 750, alt: 'Construction Equipment' },
  ];

  const lightboxPhotos = photos.map(photo => ({ src: photo.src, alt: photo.alt }));

  return (
    <>
      <Helmet>
        <title>{t('gallery.title')} - {t('meta.title')}</title>
      </Helmet>
      
      <PageHeader 
        title={t('gallery.title')}
        subtitle={t('gallery.intro')}
        backgroundImage="https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <PhotoAlbum 
              photos={photos} 
              layout="rows" 
              targetRowHeight={300}
              onClick={({ index }) => setIndex(index)}
              spacing={20}
              padding={0}
            />
            
            <Lightbox
              slides={lightboxPhotos}
              open={index >= 0}
              index={index}
              close={() => setIndex(-1)}
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;