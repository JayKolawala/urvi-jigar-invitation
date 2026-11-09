import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Users, Crown } from 'lucide-react';
import SectionDivider from './SectionDivider';

const kolawalaFamily = {
  title: 'Kolawala Family',
  subtitle: 'With Best Compliments & Blessings',
  elders: [
    { wife: 'Shantaben Kolawala', husband: 'Jayantilal Kolawala', note: 'Blessings' },
  ],
  couples: [
    { wife: 'Kalpana Kolawala', husband: 'Shailesh Kolawala' },
    { wife: 'Jagruti Kolawala', husband: 'Satish Kolawala', highlight: true },
    { wife: 'Veena Kolawala', husband: 'Naresh Kolawala' },
    { wife: 'Geeta Kosambi', husband: 'Jignesh Kosambi' },
    { wife: 'Anuja Kolawala', husband: 'Raj Kolawala' },
  ],
  sibling: { name: 'Jay Kolawala', relation: 'Sibling' },
  youngsters: ['Kruti Kolawala', 'Maitrie Kosambi', 'Hetvi Kosambi'],
};

const mosadPaksh = {
  title: 'Mosad Paksh',
  subtitle: 'Sinamiya Family',
  elders: [
    {
      wife: 'Late Lataben Sinamiya',
      husband: 'Girdharbhai Sinamiya',
      isMemory: true,
      note: 'In Cherished Memory & Blessings',
    },
  ],
  couples: [
    { wife: 'Shraddha Sinamiya', husband: 'Bhavesh Sinamiya' },
  ],
  youngsters: ['Maharshi Sinamiya', 'Vedansh Sinamiya'],
};

export default function FamilySection() {
  return (
    <section id="family" className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden scroll-mt-16 sm:scroll-mt-20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gold-light/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-sage/10 rounded-full blur-3xl pointer-events-none -z-10" />

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
            Warm Regards &amp; Best Compliments
          </span>
          <h2 className="font-cormorant text-3xl sm:text-5xl md:text-6xl text-charcoal font-normal">
            Our Beloved Family
          </h2>
          <p className="font-cormorant italic text-base sm:text-xl text-charcoal-light mt-2 max-w-lg mx-auto">
            &ldquo;Surrounded by the unconditional love, warmth, and sacred blessings of our elders and family.&rdquo;
          </p>
        </motion.div>

        <SectionDivider className="my-6 sm:my-10" />

        {/* 2 Symmetrical Luxury Family Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch mt-8">
          {/* Pillar 1: Kolawala Family */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="relative rounded-3xl p-6 sm:p-10 bg-pearl-light/95 border-2 border-gold/40 shadow-luxury deckle-card flex flex-col justify-between overflow-hidden"
          >
            {/* Inner Decorative Inset Border */}
            <div className="absolute inset-2 sm:inset-3 border border-gold/25 rounded-2xl pointer-events-none" />

            <div className="relative z-10">
              {/* Card Header */}
              <div className="text-center pb-6 border-b border-gold/25">
                <div className="mx-auto w-12 h-12 rounded-full bg-pearl-muted border border-gold/40 flex items-center justify-center text-gold-deep mb-3 shadow-inner">
                  <Crown className="w-5 h-5 text-gold-dark" />
                </div>
                <span className="font-editorial text-[10px] tracking-[0.25em] uppercase text-gold-deep font-bold block">
                  {kolawalaFamily.subtitle}
                </span>
                <h3 className="font-cormorant text-3xl sm:text-4xl text-charcoal font-semibold mt-1">
                  {kolawalaFamily.title}
                </h3>
              </div>

              {/* Elders Section */}
              <div className="py-6 border-b border-gold/20 text-center">
                <span className="font-editorial text-[9px] tracking-[0.22em] uppercase text-gold-light font-bold block mb-2">
                  Elders &bull; With Blessings
                </span>
                {kolawalaFamily.elders.map((elder) => (
                  <div key={elder.husband} className="p-3 rounded-2xl bg-gold/10 border border-gold/30">
                    <p className="font-cormorant text-xl sm:text-2xl font-semibold text-charcoal">
                      <span>{elder.wife}</span>
                      <span className="font-script text-gold-dark text-xl mx-2">&amp;</span>
                      <span>{elder.husband}</span>
                    </p>
                  </div>
                ))}
              </div>

              {/* Family Couples */}
              <div className="py-6 border-b border-gold/20">
                <span className="font-editorial text-[9px] tracking-[0.22em] uppercase text-charcoal-muted font-bold block text-center mb-3">
                  Family Members
                </span>
                <div className="space-y-2.5">
                  {kolawalaFamily.couples.map((c) => (
                    <div
                      key={c.husband}
                      className={`p-3 rounded-xl text-center transition-all ${
                        c.highlight
                          ? 'bg-pearl-muted/90 border border-gold/50 shadow-sm'
                          : 'bg-pearl-muted/40 border border-gold/20 hover:border-gold/40'
                      }`}
                    >
                      <p className="font-cormorant text-lg sm:text-xl font-medium text-charcoal">
                        <span>{c.wife}</span>
                        <span className="font-script text-gold-dark text-lg mx-2">&amp;</span>
                        <span>{c.husband}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sibling & Young Generation */}
              <div className="pt-6 space-y-4">
                {/* Sibling Highlight */}
                <div className="text-center p-3 rounded-xl bg-pearl-muted/60 border border-gold/30">
                  <span className="font-editorial text-[9px] tracking-[0.2em] uppercase text-gold-deep font-bold block mb-1">
                    Brother of the Bride
                  </span>
                  <p className="font-cormorant text-xl font-semibold text-charcoal">
                    {kolawalaFamily.sibling.name}
                  </p>
                </div>

                {/* Youngsters */}
                <div className="text-center pt-2">
                  <span className="font-editorial text-[9px] tracking-[0.2em] uppercase text-charcoal-muted font-bold block mb-2">
                    Youngsters &bull; Siblings &amp; Cousins
                  </span>
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    {kolawalaFamily.youngsters.map((name) => (
                      <span
                        key={name}
                        className="px-3 py-1 rounded-full bg-pearl-muted border border-gold/35 text-xs font-cormorant font-semibold text-charcoal shadow-sm"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Pillar 2: Mosad Paksh (Sinamiya Family) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.22, duration: 0.7 }}
            className="relative rounded-3xl p-6 sm:p-10 bg-pearl-light/95 border-2 border-gold/40 shadow-luxury deckle-card flex flex-col justify-between overflow-hidden"
          >
            {/* Inner Decorative Inset Border */}
            <div className="absolute inset-2 sm:inset-3 border border-gold/25 rounded-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                {/* Card Header */}
                <div className="text-center pb-6 border-b border-gold/25">
                  <div className="mx-auto w-12 h-12 rounded-full bg-pearl-muted border border-gold/40 flex items-center justify-center text-gold-deep mb-3 shadow-inner">
                    <Heart className="w-5 h-5 text-gold-dark" />
                  </div>
                  <span className="font-editorial text-[10px] tracking-[0.25em] uppercase text-gold-deep font-bold block">
                    Maternal Family &bull; {mosadPaksh.subtitle}
                  </span>
                  <h3 className="font-cormorant text-3xl sm:text-4xl text-charcoal font-semibold mt-1">
                    {mosadPaksh.title}
                  </h3>
                </div>

                {/* Elders Section / In Cherished Memory */}
                <div className="py-6 border-b border-gold/20 text-center">
                  <span className="font-editorial text-[9px] tracking-[0.22em] uppercase text-gold-light font-bold block mb-2">
                    Elders &bull; In Cherished Memory &amp; Eternal Blessings
                  </span>
                  {mosadPaksh.elders.map((elder) => (
                    <div
                      key={elder.husband}
                      className="p-3.5 rounded-2xl bg-gold/10 border border-gold/35 text-center relative"
                    >
                      <p className="font-cormorant text-xl sm:text-2xl font-semibold text-charcoal">
                        <span>{elder.wife}</span>
                        <span className="font-script text-gold-dark text-xl mx-2">&amp;</span>
                        <span>{elder.husband}</span>
                      </p>
                      <span className="font-editorial text-[9px] tracking-wider uppercase text-gold-deep/80 block mt-1">
                        Always in our hearts &bull; With eternal love &amp; blessings
                      </span>
                    </div>
                  ))}
                </div>

                {/* Family Couples */}
                <div className="py-6 border-b border-gold/20">
                  <span className="font-editorial text-[9px] tracking-[0.22em] uppercase text-charcoal-muted font-bold block text-center mb-3">
                    Family Members
                  </span>
                  <div className="space-y-2.5">
                    {mosadPaksh.couples.map((c) => (
                      <div
                        key={c.husband}
                        className="p-3 rounded-xl bg-pearl-muted/70 border border-gold/30 text-center shadow-sm"
                      >
                        <p className="font-cormorant text-lg sm:text-xl font-medium text-charcoal">
                          <span>{c.wife}</span>
                          <span className="font-script text-gold-dark text-lg mx-2">&amp;</span>
                          <span>{c.husband}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Young Generation */}
              <div className="pt-6 text-center">
                <span className="font-editorial text-[9px] tracking-[0.2em] uppercase text-charcoal-muted font-bold block mb-2">
                  Youngsters &bull; Cousins
                </span>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {mosadPaksh.youngsters.map((name) => (
                    <span
                      key={name}
                      className="px-3.5 py-1 rounded-full bg-pearl-muted border border-gold/35 text-xs font-cormorant font-semibold text-charcoal shadow-sm"
                    >
                      {name}
                    </span>
                  ))}
                </div>

                <div className="mt-8 pt-4 border-t border-gold/20 text-center">
                  <p className="font-cormorant italic text-sm text-charcoal-light">
                    &ldquo;Blessed by love across every bond and cherished generation.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

