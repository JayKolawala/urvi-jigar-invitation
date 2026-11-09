import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Sparkles, Heart, Home, MapPin, Navigation, ExternalLink } from 'lucide-react';
import SectionDivider from './SectionDivider';
import MapModal from './MapModal';

export default function HaldiSection() {
  const [showMapModal, setShowMapModal] = useState(false);

  const homeVenue = {
    name: 'Swapna Shrushti Residency (Home)',
    badge: 'Haldi Ceremony Venue',
    address: 'B/1 - 201, Swapna Shrushti Residency, Opp. Raj Corner, Pal, Surat - 395009',
    directionsUrl:
      'https://www.google.com/maps/search/?api=1&query=Swapna+Shrusti+Residency,+Opp.+Raj+Corner,+Pal,+Surat+-+395009',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d946.2463344381458!2d72.77403508792493!3d21.199856998098046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04c4ea6bec233%3A0x84c8c3f4d5e4b72a!2sSwapna%20Shrusti%20Residency!5e1!3m2!1sen!2sin!4v1794236007865!5m2!1sen!2sin',
  };

  return (
    <section id="haldi" className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
      {/* Warm Golden-Yellow Ambient Radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#E5BF67]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Map Lightbox Modal */}
      {showMapModal && <MapModal venue={homeVenue} onClose={() => setShowMapModal(false)} />}

      {/* Floating Marigold Petal Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none -z-10">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${15 + i * 14}%`,
              top: `${10 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -18, 0],
              rotate: [0, 15, -10, 0],
            }}
            transition={{
              duration: 5 + i * 0.8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.4,
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="opacity-40">
              <path
                d="M12 2C9 6 6 9 6 13C6 17 9 20 12 22C15 20 18 17 18 13C18 9 15 6 12 2Z"
                fill="#F4D48A"
                fillOpacity="0.8"
                stroke="#CBA14C"
                strokeWidth="0.5"
              />
            </svg>
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Main Haldi Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85 }}
          className="relative rounded-3xl p-6 sm:p-10 md:p-14 bg-gradient-to-b from-[#14333B] via-pearl-light to-pearl-dark border-2 border-[#E5BF67]/70 shadow-luxury text-center deckle-card overflow-hidden"
        >
          {/* Inner Golden Border */}
          <div className="absolute inset-3 sm:inset-4 border border-[#E5BF67]/35 rounded-2xl pointer-events-none" />

          {/* Marigold Crest Emblem */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#E5BF67]/30 to-[#9E7428]/20 border-2 border-[#E5BF67] flex items-center justify-center text-amber-300 shadow-md mb-4"
          >
            <Sun className="w-7 h-7 sm:w-8 sm:h-8 text-amber-300 animate-spin-slow" />
          </motion.div>

          {/* Section Tagline */}
          <span className="font-editorial text-[10px] sm:text-xs tracking-[0.3em] uppercase text-amber-300 font-bold block mb-1.5">
            Traditional Joy &amp; Sunshine
          </span>

          <h2 className="font-cormorant text-3xl sm:text-5xl md:text-6xl text-charcoal font-normal leading-tight">
            A Splash of Yellow &amp; Happiness
          </h2>

          <SectionDivider className="my-4 sm:my-6" />

          {/* Ceremony Details Strip */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 my-5">
            <div className="px-4 py-1.5 rounded-full bg-pearl-muted/90 border border-[#E5BF67]/50 shadow-sm">
              <span className="font-editorial text-xs sm:text-sm font-semibold tracking-wider text-charcoal">
                Monday, 1 February 2027
              </span>
            </div>

            <div className="px-4 py-1.5 rounded-full bg-pearl-muted/90 border border-[#E5BF67]/50 shadow-sm">
              <span className="font-editorial text-xs sm:text-sm font-semibold tracking-wider text-amber-300">
                10:00 AM
              </span>
            </div>
          </div>

          {/* Dedicated Dress Code Announcement Pill */}
          <div className="my-5 max-w-sm mx-auto p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-amber-500/20 via-yellow-500/25 to-amber-500/20 border-2 border-amber-400/80 shadow-md">
            <span className="font-editorial text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-amber-200 font-bold block">
              Special Dress Code
            </span>
            <p className="font-cormorant text-xl sm:text-2xl font-bold text-amber-300 mt-0.5">
              Bright &amp; Festive Yellow
            </p>
            <p className="font-sans text-[11px] sm:text-xs text-charcoal-light mt-0.5">
              Wear your sunniest shades of yellow, turmeric, and gold to brighten our morning!
            </p>
          </div>

          {/* Ultra-Clean Compact Venue Pill */}
          <div className="my-6 max-w-lg mx-auto p-3.5 sm:p-4 rounded-2xl bg-pearl-muted/80 border border-gold/40 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-pearl-dark border border-gold/50 flex items-center justify-center text-gold-deep flex-shrink-0">
                <Home className="w-4 h-4 text-gold-deep" />
              </div>
              <div>
                <span className="font-editorial text-[9px] tracking-widest uppercase text-gold-deep font-bold block">
                  Venue &bull; Home
                </span>
                <h4 className="font-cormorant text-lg font-semibold text-charcoal leading-tight">
                  Swapna Shrushti Residency
                </h4>
                <p className="font-sans text-[11px] text-charcoal-light line-clamp-1">
                  {homeVenue.address}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0 self-start sm:self-center">
              <button
                onClick={() => setShowMapModal(true)}
                type="button"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gold/40 hover:border-gold bg-pearl-dark/60 hover:bg-gold/15 text-gold-deep hover:text-gold-light text-[11px] font-editorial uppercase tracking-wider transition-all duration-200 cursor-pointer"
              >
                <MapPin className="w-3 h-3 text-gold-dark" />
                <span>View Map</span>
              </button>
              <a
                href={homeVenue.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-gold-deep via-gold to-gold-dark text-pearl-dark text-[11px] font-editorial uppercase tracking-wider font-bold shadow-sm hover:shadow-luxury transition-all duration-200 active:scale-95 group"
              >
                <Navigation className="w-3 h-3 group-hover:rotate-45 transition-transform" />
                <span>Directions</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-80" />
              </a>
            </div>
          </div>

          {/* Haldi Blessing & Description */}
          <p className="font-cormorant italic text-base sm:text-xl text-charcoal-light max-w-xl mx-auto leading-relaxed mt-4">
            &ldquo;Turmeric for purity, laughter for warmth, and loved ones for blessings as we color our special morning in shades of joy.&rdquo;
          </p>

          {/* Decorative Footer Signature */}
          <div className="mt-6 pt-5 border-t border-gold/25 flex flex-col items-center">
            <span className="font-script text-2xl sm:text-3xl text-gold-dark">
              Join the Celebration
            </span>
            <span className="font-editorial text-[10px] tracking-[0.2em] uppercase text-charcoal-muted mt-1">
              Urvi &amp; Jigar &bull; Haldi Ceremony
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
