import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ChevronDown } from 'lucide-react';
import botanicalTopImg from '../assets/botanical-top.png';
import botanicalBottomImg from '../assets/botanical-bottom.png';
import { BotanicalCorner } from './FloralDecorations';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] md:min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 py-10 md:py-16 overflow-hidden"
    >
      {/* Delicate Botanical Corners */}
      <BotanicalCorner position="top-left" className="absolute top-2 left-2 sm:top-4 sm:left-4" />
      <BotanicalCorner position="top-right" className="absolute top-2 right-2 sm:top-4 sm:right-4" />
      <BotanicalCorner position="bottom-left" className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4" />
      <BotanicalCorner position="bottom-right" className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4" />

      {/* Subtle background ambient watercolor gradient */}
      <div className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(circle_at_50%_40%,rgba(203,161,76,0.18)_0%,rgba(45,117,132,0.15)_45%,transparent_75%)]" />

      {/* Main Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-3xl mx-auto flex flex-col items-center z-10 w-full"
      >
        {/* Top Tagline */}
        <motion.div variants={itemVariants} className="mb-2 sm:mb-4">
          <span className="inline-block px-3.5 py-1 rounded-full border border-gold/50 bg-pearl-light/90 backdrop-blur-sm font-editorial text-[9px] sm:text-xs tracking-[0.28em] uppercase text-gold-deep font-semibold shadow-sm">
            The Beginning of Forever
          </span>
        </motion.div>

        {/* Botanical Garland Composition Framing Couple's Names with Ample Breathing Room */}
        <div className="relative w-full max-w-[310px] sm:max-w-[420px] md:max-w-[480px] my-1 sm:my-3 flex flex-col items-center">
          
          {/* Top Floral Garland Arch */}
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="w-full pointer-events-none select-none"
          >
            <img 
              src={botanicalTopImg} 
              alt="Watercolor floral arch crown" 
              className="w-full h-auto object-contain mx-auto drop-shadow-[0_4px_16px_rgba(0,0,0,0.35)] opacity-95"
            />
          </motion.div>

          {/* Couple Names - Regally Spaced and 100% Free of Any Floral Overlap */}
          <div className="py-2 sm:py-4 my-1 text-center w-full">
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

          {/* Bottom Floral Garland Cradling Names */}
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            className="w-full pointer-events-none select-none"
          >
            <img 
              src={botanicalBottomImg} 
              alt="Watercolor floral arch garland" 
              className="w-full h-auto object-contain mx-auto drop-shadow-[0_4px_16px_rgba(0,0,0,0.35)] opacity-95"
            />
          </motion.div>
        </div>

        {/* Event Title */}
        <motion.div variants={itemVariants} className="mt-3 sm:mt-5">
          <p className="font-editorial text-xs sm:text-sm md:text-base tracking-[0.28em] uppercase text-gold-deep font-semibold">
            Engagement Ceremony
          </p>
          <p className="font-cormorant italic text-base sm:text-lg md:text-xl text-charcoal-light mt-1 max-w-md mx-auto">
            &ldquo;Two hearts. One beautiful beginning.&rdquo;
          </p>
        </motion.div>

        {/* Date & Time Capsule - Mobile-First Safe Tap Targets */}
        <motion.div 
          variants={itemVariants}
          className="mt-4 sm:mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-charcoal"
        >
          <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-pearl-light/95 border border-gold/40 shadow-sm backdrop-blur-sm">
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-dark" />
            <span className="font-sans text-[11px] sm:text-xs md:text-sm font-medium tracking-wide">
              Saturday, 21 November 2026
            </span>
          </div>

          <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-pearl-light/95 border border-gold/40 shadow-sm backdrop-blur-sm">
            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-dark" />
            <span className="font-sans text-[11px] sm:text-xs md:text-sm font-medium tracking-wide">
              10:00 AM IST
            </span>
          </div>
        </motion.div>

        {/* Call to Scroll */}
        <motion.div
          variants={itemVariants}
          className="mt-6 sm:mt-10 flex flex-col items-center"
        >
          <a
            href="#invitation"
            className="group flex flex-col items-center text-charcoal-light hover:text-gold-dark transition-colors py-1"
          >
            <span className="font-editorial text-[9px] sm:text-[10px] tracking-[0.25em] uppercase mb-1">
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-4 h-4 text-gold-dark group-hover:scale-125 transition-transform" />
            </motion.div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
