import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import botanicalBottomImg from '../assets/botanical-bottom.png';
import SectionDivider from './SectionDivider';

export default function ClosingSection({ onReplayInvitation }) {
  return (
    <footer id="closing" className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden text-center bg-gradient-to-b from-pearl via-pearl-light to-pearl-dark">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-rose-light/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-2xl mx-auto relative z-10 flex flex-col items-center">
        {/* Soft Floral Composition Accent */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-44 sm:w-56 mx-auto mb-4 opacity-90 pointer-events-none select-none"
        >
          <img
            src={botanicalBottomImg}
            alt="Botanical floral bouquet"
            className="w-full h-auto object-contain mix-blend-multiply"
          />
        </motion.div> */}

        {/* Closing Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-editorial text-[11px] sm:text-xs md:text-sm tracking-[0.28em] uppercase text-gold-deep font-semibold">
            We Would Love To Celebrate With You
          </h2>
        </motion.div>

        <SectionDivider className="my-5 sm:my-7" />

        {/* Blessing Message */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="font-cormorant text-lg sm:text-2xl md:text-3xl text-charcoal italic max-w-lg mx-auto leading-relaxed"
        >
          &ldquo;Your presence and blessings will make our special day even more memorable.&rdquo;
        </motion.p>

        {/* Couple Names */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="my-5 sm:my-7"
        >
          <h3 className="font-cormorant text-3xl sm:text-5xl md:text-6xl text-charcoal font-semibold tracking-tight">
            <span>Urvi</span>
            <span className="font-script text-2xl sm:text-3xl md:text-4xl text-gold-dark mx-2 sm:mx-3">
              &amp;
            </span>
            <span>Jigar</span>
          </h3>
        </motion.div>

        {/* Host Blessings */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="flex flex-col items-center"
        >
          <span className="font-script text-2xl sm:text-3xl text-gold-dark">
            With love and blessings,
          </span>
          <p className="font-editorial text-xs sm:text-sm md:text-base tracking-[0.2em] uppercase text-charcoal font-semibold mt-1.5">
            Jagruti Kolawala <br /> Satish Kolawala <br />&amp; Family
          </p>
        </motion.div>

        {/* Replay Envelope Call-to-action */}
        {onReplayInvitation && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 sm:mt-10"
          >
            <button
              onClick={onReplayInvitation}
              type="button"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-pearl-muted border border-gold/50 shadow-sm hover:border-gold hover:bg-gold/15 text-charcoal hover:text-white font-editorial text-[10px] sm:text-xs tracking-[0.2em] uppercase transition-all duration-300 active:scale-95 cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 text-gold-dark" />
              <span>Replay Invitation Opening</span>
            </button>
          </motion.div>
        )}

        {/* Delicate Thank You */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.75, duration: 0.7 }}
          className="mt-10 sm:mt-12 pt-6 border-t border-gold/30 w-full flex flex-col items-center"
        >
          <span className="font-script text-2xl sm:text-3xl text-gold-dark block">
            Thank You
          </span>
          <p className="text-[10px] sm:text-[11px] font-sans text-charcoal-muted tracking-widest uppercase mt-1.5">
            Urvi &amp; Jigar &bull; Engagement Ceremony &bull; 21 November 2026
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
