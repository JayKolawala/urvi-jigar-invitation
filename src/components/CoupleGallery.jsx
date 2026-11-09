import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles, Heart } from 'lucide-react';
import SectionDivider from './SectionDivider';

import coupleHeroImg from '../assets/gallery/couple-hero.jpg';
import gallery1Img from '../assets/gallery/couple-gallery-1.jpg';
import gallery2Img from '../assets/gallery/couple-gallery-2.jpg';
import gallery3Img from '../assets/gallery/couple-gallery-3.jpg';

const photos = [
  {
    id: 1,
    src: coupleHeroImg,
    title: 'Urvi & Jigar',
    subtitle: 'The Royal Wedding Portrait',
    caption: 'Two hearts embarking on an eternal sacred journey.',
    aspect: 'aspect-[4/5]',
    colSpan: 'md:col-span-7',
    featured: true,
  },
  {
    id: 2,
    src: gallery1Img,
    title: 'Auspicious Beginnings',
    subtitle: 'Traditional Moments & Prayers',
    caption: 'Blessed by elders, rooted in timeless traditions.',
    aspect: 'aspect-[4/5]',
    colSpan: 'md:col-span-5',
    featured: false,
  },
  {
    id: 3,
    src: gallery2Img,
    title: 'Laughter & Festivity',
    subtitle: 'Haldi & Sangeet Celebrations',
    caption: 'Filled with music, vibrant colors, and unforgettable joy.',
    aspect: 'aspect-[16/10]',
    colSpan: 'md:col-span-7',
    featured: false,
  },
  {
    id: 4,
    src: gallery3Img,
    title: 'Together Forever',
    subtitle: 'A Lifetime of Love',
    caption: 'Hand in hand, ready for tomorrow and always.',
    aspect: 'aspect-[4/5]',
    colSpan: 'md:col-span-5',
    featured: false,
  },
];

export default function CoupleGallery() {
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);

  const openLightbox = (index) => {
    setActivePhotoIndex(index);
  };

  const closeLightbox = () => {
    setActivePhotoIndex(null);
  };

  const prevPhoto = (e) => {
    e.stopPropagation();
    setActivePhotoIndex((prev) => (prev > 0 ? prev - 1 : photos.length - 1));
  };

  const nextPhoto = (e) => {
    e.stopPropagation();
    setActivePhotoIndex((prev) => (prev < photos.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="gallery" className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-sage/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="font-editorial text-[10px] sm:text-xs md:text-sm tracking-[0.3em] uppercase text-gold-deep font-semibold block mb-2">
            Captured Moments
          </span>
          <h2 className="font-cormorant text-3xl sm:text-5xl md:text-6xl text-charcoal font-normal">
            Moments of Forever
          </h2>
          <p className="font-cormorant italic text-base sm:text-lg text-charcoal-light mt-2 max-w-md mx-auto">
            &ldquo;Every photograph tells the story of our love and cherished celebrations.&rdquo;
          </p>
        </motion.div>

        <SectionDivider className="my-6 sm:my-8" />

        {/* Asymmetrical Luxury Editorial Gallery Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-7 items-stretch mt-6">
          {photos.map((photo, idx) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.7 }}
              className={`${photo.colSpan} flex flex-col`}
            >
              <div
                onClick={() => openLightbox(idx)}
                className="group relative w-full h-full rounded-2xl overflow-hidden bg-pearl-light border-2 border-gold/40 hover:border-gold shadow-card hover:shadow-luxury transition-all duration-500 cursor-pointer flex flex-col justify-between"
              >
                {/* Photo Container */}
                <div className={`relative w-full ${photo.aspect} overflow-hidden bg-pearl-muted`}>
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    loading="lazy"
                  />

                  {/* Gradient Shadow Inset */}
                  <div className="absolute inset-0 bg-gradient-to-t from-pearl-dark/90 via-pearl-dark/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Hover Zoom Icon Pill */}
                  <div className="absolute top-4 right-4 p-2.5 rounded-full bg-pearl-dark/80 backdrop-blur-md border border-gold/50 text-gold-light opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-gold/60 pointer-events-none" />
                </div>

                {/* Caption Strip */}
                <div className="p-4 sm:p-5 border-t border-gold/25 flex flex-col justify-between flex-grow bg-gradient-to-b from-pearl-light to-pearl-muted/70">
                  <div className="flex items-center justify-between">
                    <span className="font-editorial text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-gold-deep font-semibold">
                      {photo.subtitle}
                    </span>
                    <Heart className="w-3.5 h-3.5 text-gold-dark/60 group-hover:text-gold-dark transition-colors" />
                  </div>
                  <h3 className="font-cormorant text-xl sm:text-2xl text-charcoal font-semibold mt-1">
                    {photo.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-charcoal-light mt-1 leading-relaxed">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full-screen Lightbox Modal */}
      <AnimatePresence>
        {activePhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label="Image Lightbox"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 sm:top-8 sm:right-8 z-50 p-2.5 rounded-full bg-pearl-dark/80 border border-gold/50 text-gold-light hover:bg-gold/20 transition-all cursor-pointer"
              aria-label="Close photo view"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev Photo Button */}
            <button
              onClick={prevPhoto}
              className="absolute left-3 sm:left-6 z-50 p-3 rounded-full bg-pearl-dark/80 border border-gold/50 text-gold-light hover:bg-gold/20 transition-all cursor-pointer"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Photo Button */}
            <button
              onClick={nextPhoto}
              className="absolute right-3 sm:right-6 z-50 p-3 rounded-full bg-pearl-dark/80 border border-gold/50 text-gold-light hover:bg-gold/20 transition-all cursor-pointer"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Active Photo Container */}
            <motion.div
              key={activePhotoIndex}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl max-h-[85vh] flex flex-col items-center justify-center rounded-2xl overflow-hidden border-2 border-gold/60 shadow-2xl bg-pearl-dark"
            >
              <img
                src={photos[activePhotoIndex].src}
                alt={photos[activePhotoIndex].title}
                className="max-w-full max-h-[70vh] object-contain"
              />
              <div className="w-full p-4 sm:p-5 text-center bg-pearl-dark/95 border-t border-gold/30">
                <span className="font-editorial text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-gold-deep font-semibold">
                  {photos[activePhotoIndex].subtitle}
                </span>
                <h3 className="font-cormorant text-2xl text-charcoal font-semibold mt-0.5">
                  {photos[activePhotoIndex].title}
                </h3>
                <p className="font-cormorant italic text-sm text-charcoal-light mt-1">
                  &ldquo;{photos[activePhotoIndex].caption}&rdquo;
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

