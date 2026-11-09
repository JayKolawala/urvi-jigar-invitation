import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Navigation, ExternalLink } from 'lucide-react';

export default function MapModal({ venue, onClose }) {
  useEffect(() => {
    if (!venue) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    // Lock body scroll while modal is open
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [venue, onClose]);

  if (!venue) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-sm"
          aria-hidden="true"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-pearl-dark border-2 border-gold/60 rounded-3xl p-5 sm:p-7 shadow-[0_20px_60px_rgba(3,10,12,0.85)] z-10 overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-label={`${venue.name} Location`}
        >
          {/* Inner ornamental border */}
          <div className="absolute inset-2 border border-gold/25 rounded-2xl pointer-events-none" />

          {/* Modal Header */}
          <div className="relative z-10 flex items-start justify-between pb-4 mb-4 border-b border-gold/30 gap-4">
            <div>
              <div className="flex items-center gap-2 text-gold-deep mb-1">
                <MapPin className="w-4 h-4 text-gold-dark" />
                <span className="font-editorial text-[10px] tracking-[0.25em] uppercase font-bold">
                  {venue.badge || 'Venue Location'}
                </span>
              </div>
              <h3 className="font-cormorant text-2xl sm:text-3xl font-semibold text-charcoal">
                {venue.name}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-charcoal-light mt-1 max-w-lg leading-relaxed">
                {venue.address}
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              type="button"
              className="p-2 rounded-full border border-gold/40 bg-pearl-muted text-gold-dark hover:text-gold-light hover:border-gold hover:bg-gold/15 transition-all cursor-pointer flex-shrink-0"
              aria-label="Close map"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Interactive Google Map iFrame */}
          <div className="relative z-10 w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden border border-gold/40 shadow-inner bg-pearl-dark/50">
            <iframe
              src={venue.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title={`${venue.name} Location Map`}
              className="w-full h-full rounded-2xl"
            />
          </div>

          {/* Modal Footer with Direct Directions Action */}
          <div className="relative z-10 mt-5 pt-4 border-t border-gold/25 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="font-editorial text-[10px] tracking-wider uppercase text-charcoal-muted">
              Tap below to open GPS navigation
            </span>
            <a
              href={venue.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-2.5 rounded-full bg-gradient-to-r from-gold-deep via-gold to-gold-dark text-pearl-dark font-editorial text-xs tracking-[0.18em] uppercase font-bold shadow-md hover:shadow-luxury transition-all duration-300 active:scale-95 group"
            >
              <Navigation className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
              <span>Get Directions</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

