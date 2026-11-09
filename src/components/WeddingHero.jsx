import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronDown, Sparkles } from 'lucide-react';
import botanicalTopImg from '../assets/botanical-top.png';
import botanicalBottomImg from '../assets/botanical-bottom.png';
import coupleHeroImg from '../assets/gallery/couple-hero.jpg';
import { BotanicalCorner } from './FloralDecorations';

export default function WeddingHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] md:min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 py-20 md:py-24 overflow-hidden"
    >
      {/* Corner Filigree Ornaments */}
      <BotanicalCorner position="top-left" className="absolute top-2 left-2 sm:top-4 sm:left-4" />
      <BotanicalCorner position="top-right" className="absolute top-2 right-2 sm:top-4 sm:right-4" />
      <BotanicalCorner position="bottom-left" className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4" />
      <BotanicalCorner position="bottom-right" className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4" />

      {/* Royal Palace Radial Glows */}
      <div className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(circle_at_50%_35%,rgba(203,161,76,0.18)_0%,rgba(45,117,132,0.14)_45%,transparent_75%)]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-4xl mx-auto flex flex-col items-center z-10 w-full"
      >
        {/* Top Tagline */}
        <motion.div variants={itemVariants} className="mb-3 sm:mb-5">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/50 bg-pearl-light/90 backdrop-blur-sm font-editorial text-[10px] sm:text-xs tracking-[0.28em] uppercase text-gold-deep font-semibold shadow-sm">
            <Sparkles className="w-3 h-3 text-gold-dark" />
            <span>TOGETHER WITH OUR FAMILIES</span>
            <Sparkles className="w-3 h-3 text-gold-dark" />
          </span>
        </motion.div>

        {/* Botanical Garland Composition Framing Couple's Names */}
        <div className="relative w-full max-w-[320px] sm:max-w-[440px] md:max-w-[500px] my-1 sm:my-2 flex flex-col items-center">
          {/* Top Floral Garland Arch */}
          <motion.div
            initial={{ opacity: 0, y: -14, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="w-full pointer-events-none select-none"
          >
            <img
              src={botanicalTopImg}
              alt="Watercolor royal floral arch crown"
              className="w-full h-auto object-contain mx-auto drop-shadow-[0_4px_16px_rgba(0,0,0,0.4)] opacity-95"
            />
          </motion.div>

          {/* Couple Names — Main Regal Focus */}
          <div className="py-2 sm:py-3 my-1 text-center w-full">
            <motion.h1
              variants={itemVariants}
              className="font-cormorant font-normal tracking-tight text-charcoal leading-[1.05]"
            >
              <span className="block text-4xl sm:text-6xl md:text-7xl hover:text-gold-light transition-colors duration-300">
                Urvi
              </span>
              <span className="block font-script text-2xl sm:text-4xl md:text-5xl text-gold-dark my-1 sm:my-2 font-normal">
                &amp;
              </span>
              <span className="block text-4xl sm:text-6xl md:text-7xl hover:text-gold-light transition-colors duration-300">
                Jigar
              </span>
            </motion.h1>
          </div>

          {/* Bottom Floral Garland */}
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
            className="w-full pointer-events-none select-none"
          >
            <img
              src={botanicalBottomImg}
              alt="Watercolor royal floral garland"
              className="w-full h-auto object-contain mx-auto drop-shadow-[0_4px_16px_rgba(0,0,0,0.4)] opacity-95"
            />
          </motion.div>
        </div>

        {/* Wedding Announcement Subheading */}
        <motion.div variants={itemVariants} className="mt-4 sm:mt-6">
          <p className="font-editorial text-xs sm:text-sm md:text-base tracking-[0.3em] uppercase text-gold-deep font-semibold">
            ARE GETTING MARRIED
          </p>
          <p className="font-cormorant italic text-lg sm:text-xl md:text-2xl text-charcoal-light mt-1.5 max-w-lg mx-auto">
            &ldquo;Two hearts, one journey, a lifetime of togetherness.&rdquo;
          </p>
        </motion.div>

        {/* Editorial Couple Portrait Hero Visual */}
        {/* <motion.div
          variants={itemVariants}
          className="relative mt-8 sm:mt-10 group"
        >
          <div className="relative w-48 sm:w-64 md:w-72 aspect-[4/5] rounded-t-full rounded-b-2xl p-2 bg-gradient-to-b from-gold/70 via-gold-dark/40 to-gold/70 shadow-luxury overflow-hidden">
            <div className="w-full h-full rounded-t-full rounded-b-xl overflow-hidden relative bg-pearl-light border border-gold/40">
              <img
                src={coupleHeroImg}
                alt="Urvi & Jigar — Wedding Couple Portrait"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pearl-dark/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-3 inset-x-0 text-center pointer-events-none">
                <span className="font-editorial text-[9px] tracking-[0.25em] uppercase text-gold-light bg-pearl-dark/90 px-3 py-1 rounded-full border border-gold/40 shadow-sm backdrop-blur-sm">
                  URVI &bull; JIGAR
                </span>
              </div>
            </div>
          </div>
        </motion.div> */}

        {/* Dates Capsule */}
        <motion.div
          variants={itemVariants}
          className="mt-6 sm:mt-8 flex items-center justify-center gap-2 sm:gap-3 text-charcoal"
        >
          <div className="flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-pearl-light/95 border border-gold/40 shadow-sm backdrop-blur-sm">
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-dark" />
            <span className="font-editorial text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-gold-deep">
              31 JANUARY — 2 FEBRUARY 2027
            </span>
          </div>
        </motion.div>

        {/* Call to Scroll */}
        <motion.div variants={itemVariants} className="mt-8 sm:mt-12 flex flex-col items-center">
          <a
            href="#celebrations"
            className="group flex flex-col items-center text-charcoal-muted hover:text-gold-light transition-colors py-1"
            aria-label="Scroll to explore wedding celebrations"
          >
            <span className="font-editorial text-[9px] sm:text-[10px] tracking-[0.25em] uppercase mb-1">
              Scroll to explore festivities
            </span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ChevronDown className="w-4 h-4 text-gold-dark group-hover:scale-125 transition-transform" />
            </motion.div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
