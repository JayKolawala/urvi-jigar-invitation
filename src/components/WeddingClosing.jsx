import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Heart } from 'lucide-react';
import SectionDivider from './SectionDivider';
import { MonogramCrest } from './FloralDecorations';

export default function WeddingClosing({ onReplayInvitation }) {
  return (
    <footer id="closing" className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden text-center bg-gradient-to-b from-pearl via-pearl-light to-pearl-dark">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-rose-light/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center">
        {/* Monogram Crest */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-4"
        >
          <MonogramCrest className="w-28 h-28 sm:w-36 sm:h-36" />
        </motion.div>

        {/* Section Pre-title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-editorial text-[11px] sm:text-xs md:text-sm tracking-[0.3em] uppercase text-gold-deep font-semibold">
            WITH THE BLESSINGS OF OUR FAMILIES
          </h2>
        </motion.div>

        <SectionDivider className="my-5 sm:my-7" />

        {/* Couple Names */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="my-3 sm:my-5"
        >
          <h3 className="font-cormorant text-4xl sm:text-6xl md:text-7xl text-charcoal font-semibold tracking-tight">
            <span>Urvi</span>
            <span className="font-script text-3xl sm:text-5xl text-gold-dark mx-3">
              &amp;
            </span>
            <span>Jigar</span>
          </h3>
        </motion.div>

        {/* Blessing Messages */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="space-y-3 max-w-xl mx-auto"
        >
          <p className="font-cormorant italic text-lg sm:text-2xl text-charcoal-light leading-relaxed">
            &ldquo;We would be delighted to have you with us as we celebrate the beginning of our forever.&rdquo;
          </p>
          <p className="font-sans text-xs sm:text-sm text-charcoal-muted leading-relaxed">
            Your presence, love, and blessings mean the world to us and our families.
          </p>
        </motion.div>

        {/* Host Blessings */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="mt-8 flex flex-col items-center"
        >
          <span className="font-script text-2xl sm:text-3xl text-gold-dark">
            With love and blessings,
          </span>
          <p className="font-editorial text-xs sm:text-sm md:text-base tracking-[0.2em] uppercase text-charcoal font-semibold mt-1.5 leading-relaxed">
            Jagruti Kolawala <br /> Satish Kolawala <br />&amp; Family
          </p>
        </motion.div>

        {/* Replay Wedding Invitation Call-to-action */}
        {onReplayInvitation && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-10 sm:mt-12"
          >
            <button
              onClick={onReplayInvitation}
              type="button"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full bg-pearl-muted border border-gold/50 shadow-sm hover:border-gold hover:bg-gold/15 text-charcoal hover:text-white font-editorial text-[10px] sm:text-xs tracking-[0.2em] uppercase transition-all duration-300 active:scale-95 cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 text-gold-dark" />
              <span>Replay Wedding Invitation Opening</span>
            </button>
          </motion.div>
        )}

        {/* Delicate Thank You */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.75, duration: 0.7 }}
          className="mt-12 sm:mt-16 pt-6 border-t border-gold/30 w-full flex flex-col items-center"
        >
          <span className="font-script text-2xl sm:text-3xl text-gold-dark block">
            Thank You
          </span>
          <p className="text-[10px] sm:text-[11px] font-sans text-charcoal-muted tracking-widest uppercase mt-1.5">
            Urvi &amp; Jigar &bull; Wedding Celebration &bull; 31 January – 2 February 2027
          </p>
          <p className="text-[10px] sm:text-[11px] font-sans text-charcoal-muted tracking-wider mt-3">
            Developed by{' '}
            <a
              href="https://jaykolawala.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-deep hover:text-gold-light font-medium underline underline-offset-4 decoration-gold/40 hover:decoration-gold transition-colors duration-200"
            >
              Jay Kolawala
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

