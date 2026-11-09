import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Sun, Flame, Music, Utensils, Heart, MapPin, Home } from 'lucide-react';
import SectionDivider from './SectionDivider';
import ScratchCard from './ScratchCard';

export default function ScratchCardSection() {
  return (
    <section id="surprises" className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gold/10 rounded-full blur-3xl pointer-events-none -z-10" />

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
            Interactive Experience
          </span>
          <h2 className="font-cormorant text-3xl sm:text-5xl md:text-6xl text-charcoal font-normal">
            A Little Surprise For You
          </h2>
          <p className="font-cormorant italic text-base sm:text-xl text-charcoal-light mt-2 max-w-lg mx-auto">
            &ldquo;Every celebration holds a special moment. Scratch to reveal the festivities!&rdquo;
          </p>
        </motion.div>

        <SectionDivider className="my-6 sm:my-8" />

        {/* 3 Interactive Scratch Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-start mt-6">
          {/* Card 1: The Auspicious Beginning */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            <ScratchCard
              dayNumber="1"
              dayTitle="Day 1 &bull; Auspicious Beginning"
              dateString="31 Jan 2027"
            >
              <div className="w-12 h-12 rounded-full bg-pearl-muted border border-gold/40 flex items-center justify-center text-gold-deep mb-3 shadow-inner">
                <Flame className="w-6 h-6 text-gold-deep" />
              </div>
              <h3 className="font-cormorant text-2xl sm:text-3xl font-semibold text-charcoal leading-snug">
                Ganesh Pooja
              </h3>
              <div className="inline-block px-3 py-1 mt-2.5 rounded-full bg-gold/15 border border-gold/40 text-gold-deep font-editorial text-xs tracking-wider uppercase font-semibold">
                8:00 AM
              </div>
              <p className="font-cormorant italic text-sm text-charcoal-light mt-3 max-w-[200px]">
                Seeking sacred divine blessings for an auspicious start to our wedding journey.
              </p>
              {/* Venue Tag */}
              <div className="mt-2.5 text-[10px] text-charcoal-muted flex items-center justify-center gap-1.5 font-sans">
                <Home className="w-3 h-3 text-gold-dark flex-shrink-0" />
                <span className="truncate max-w-[220px]">Home (Swapna Shrushti)</span>
              </div>
            </ScratchCard>
          </motion.div>

          {/* Card 2: The Celebration Begins */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.22, duration: 0.7 }}
          >
            <ScratchCard
              dayNumber="2"
              dayTitle="Day 2 &bull; Celebration Begins"
              dateString="1 Feb 2027"
            >
              <div className="w-12 h-12 rounded-full bg-pearl-muted border border-gold/40 flex items-center justify-center text-gold-deep mb-2 shadow-inner">
                <Sun className="w-6 h-6 text-gold-deep animate-pulse" />
              </div>
              <h3 className="font-cormorant text-2xl font-semibold text-charcoal">
                Festive Highlights
              </h3>

              {/* Event Stack */}
              <div className="w-full space-y-1.5 mt-2.5 text-left text-xs font-sans">
                <div className="flex items-center justify-between p-1.5 rounded-lg bg-pearl-muted/70 border border-gold/25">
                  <span className="font-semibold text-charcoal flex items-center gap-1.5">
                    <Sun className="w-3.5 h-3.5 text-gold-dark" /> Haldi (Home)
                  </span>
                  <span className="text-gold-deep font-editorial">10:00 AM</span>
                </div>
                <div className="flex items-center justify-between p-1.5 rounded-lg bg-pearl-muted/70 border border-gold/25">
                  <span className="font-medium text-charcoal">Grah Shanti Pooja</span>
                  <span className="text-gold-deep font-editorial">4:00 PM</span>
                </div>
                <div className="flex items-center justify-between p-1.5 rounded-lg bg-pearl-muted/70 border border-gold/25">
                  <span className="font-medium text-charcoal flex items-center gap-1.5">
                    <Utensils className="w-3 h-3 text-gold-dark" /> Royal Dinner
                  </span>
                  <span className="text-gold-deep font-editorial">7:00 PM</span>
                </div>
                <div className="flex items-center justify-between p-1.5 rounded-lg bg-pearl-muted/70 border border-gold/25">
                  <span className="font-medium text-charcoal flex items-center gap-1.5">
                    <Music className="w-3 h-3 text-gold-dark" /> Sangeet Night
                  </span>
                  <span className="text-gold-deep font-editorial">9:00 PM</span>
                </div>
              </div>

              {/* Haldi Yellow Dress Code Highlight */}
              <div className="mt-2.5 px-2.5 py-1 rounded-full bg-[#E5BF67]/15 border border-[#E5BF67]/50 text-[#F4D48A] text-[10px] font-editorial uppercase tracking-wider font-semibold">
                Haldi Dress Code: Yellow
              </div>

              {/* Multi-Venue Summary */}
              <div className="mt-2 text-[10px] text-charcoal-muted flex items-center justify-center gap-1.5 font-sans">
                <MapPin className="w-3 h-3 text-gold-dark flex-shrink-0" />
                <span>10 AM Home &bull; 4 PM+ Farm House</span>
              </div>
            </ScratchCard>
          </motion.div>

          {/* Card 3: The Big Day */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.34, duration: 0.7 }}
          >
            <ScratchCard
              dayNumber="3"
              dayTitle="Day 3 &bull; The Big Day"
              dateString="2 Feb 2027"
            >
              <div className="w-12 h-12 rounded-full bg-pearl-muted border border-gold/40 flex items-center justify-center text-gold-deep mb-3 shadow-inner">
                <Heart className="w-6 h-6 text-gold-deep" />
              </div>
              <h3 className="font-cormorant text-2xl sm:text-3xl font-semibold text-charcoal leading-snug">
                Wedding Ceremony
              </h3>
              <div className="inline-block px-3 py-1 mt-2.5 rounded-full bg-gold/15 border border-gold/40 text-gold-deep font-editorial text-xs tracking-wider uppercase font-semibold">
                7:00 PM
              </div>
              <p className="font-cormorant italic text-sm text-charcoal-light mt-3 max-w-[200px]">
                The sacred vows, joyful pheras, and the beginning of our forever union.
              </p>
              {/* Venue Tag */}
              <div className="mt-2.5 text-[10px] text-charcoal-muted flex items-center justify-center gap-1.5 font-sans">
                <MapPin className="w-3 h-3 text-gold-dark flex-shrink-0" />
                <span className="truncate max-w-[220px]">Shukan Party Plot, Surat</span>
              </div>
            </ScratchCard>
          </motion.div>
        </div>

        {/* Note reassuring guests that events are also in the main schedule */}
        <div className="mt-8 text-center">
          <p className="font-sans text-xs text-charcoal-muted">
            ✨ Don&apos;t worry if you haven&apos;t scratched yet — the full comprehensive schedule and venue details are also available in the celebration timeline below.
          </p>
        </div>
      </div>
    </section>
  );
}
