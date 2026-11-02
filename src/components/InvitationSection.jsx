import React from 'react';
import { motion } from 'framer-motion';
import SectionDivider from './SectionDivider';
import { MonogramCrest } from './FloralDecorations';

export default function InvitationSection() {
  return (
    <section id="invitation" className="relative py-16 md:py-24 px-4 sm:px-6 overflow-hidden">
      {/* Background ambient blush */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-light/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-[#FFFDFB] rounded-2xl p-7 sm:p-10 md:p-14 shadow-luxury border-2 border-gold/40 text-center deckle-card"
        >
          {/* Inner Decorative Double Border Inset */}
          <div className="absolute inset-2.5 sm:inset-3.5 border border-gold/30 rounded-xl pointer-events-none" />
          <div className="absolute inset-4 sm:inset-5 border border-gold/15 rounded-lg pointer-events-none" />

          {/* Top Ornamental Monogram Emblem */}
          <div className="">
            <MonogramCrest />
          </div>

          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <h2 className="font-editorial text-sm sm:text-base md:text-lg tracking-[0.3em] uppercase text-deep-olive font-semibold">
              A Beautiful Beginning
            </h2>
          </motion.div>

          {/* Ornamental Divider */}
          <SectionDivider className="my-6 md:my-8" />

          {/* Invitation Invitation Body Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-6 max-w-xl mx-auto"
          >
            <p className="font-cormorant text-lg sm:text-xl md:text-2xl text-charcoal leading-relaxed font-normal">
              With immense joy and love, we invite you to celebrate the engagement ceremony of
            </p>

            {/* Couple Names */}
            <div className="py-2">
              <h3 className="font-cormorant text-4xl sm:text-5xl md:text-6xl font-normal text-charcoal tracking-tight">
                <span className="text-charcoal hover:text-gold-dark transition-colors">Urvi</span>
                <span className="font-script text-2xl sm:text-3xl md:text-4xl text-gold-dark mx-2 sm:mx-3 inline-block">
                  &amp;
                </span>
                <span className="text-charcoal hover:text-gold-dark transition-colors">Jigar</span>
              </h3>
            </div>

            <p className="font-cormorant text-lg sm:text-xl md:text-2xl text-charcoal leading-relaxed">
              as they begin a beautiful new chapter together.
            </p>

            <p className="font-sans text-sm sm:text-base text-charcoal-light leading-relaxed max-w-md mx-auto italic pt-2">
              &ldquo;Your presence and blessings will make this special occasion even more memorable.&rdquo;
            </p>
          </motion.div>

          {/* Host Signoff */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-10 pt-6 border-t border-gold/30 flex flex-col items-center"
          >
            <span className="font-script text-2xl sm:text-3xl text-gold-dark">
              With love,
            </span>
            <p className="font-editorial text-sm sm:text-base tracking-[0.2em] uppercase text-charcoal font-semibold mt-2">
              Satish Kolawala &amp; Jagruti Kolawala
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
