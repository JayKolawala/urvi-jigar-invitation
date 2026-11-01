import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Navigation, ExternalLink } from 'lucide-react';
import SectionDivider from './SectionDivider';

export default function EventDetails() {
  const directionsUrl = "https://maps.app.goo.gl/RsuATqWArgGbvxra7";

  const cards = [
    {
      icon: Calendar,
      title: "DATE",
      primary: "Saturday, 21 November 2026",
      secondary: "An Auspicious Morning Ceremony",
      highlight: false,
    },
    {
      icon: Clock,
      title: "TIME",
      primary: "10:00 AM",
      // secondary: "Kindly be seated by 9:45 AM",
      highlight: false,
    },
    {
      icon: MapPin,
      title: "VENUE",
      primary: "Royal Dine Restaurant & Banquet",
      secondary: "Nr Bagban Kratos Circle Green city Road, Gaurav Path Road, Pal Gam, Surat, Gujarat 394510",
      highlight: true,
    },
  ];

  return (
    <section id="details" className="relative py-14 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-4 w-72 sm:w-96 h-72 sm:h-96 bg-gold-light/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto w-full">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="font-editorial text-[10px] sm:text-xs md:text-sm tracking-[0.3em] uppercase text-deep-olive font-semibold block mb-1.5">
            Ceremony Information
          </span>
          <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-charcoal font-normal">
            The Celebration
          </h2>
        </motion.div>

        <SectionDivider className="my-5 sm:my-8" />

        {/* 3 Distinct Information Cards - Mobile First Stack */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-stretch mt-4 sm:mt-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className={`relative flex flex-col items-center justify-between p-6 sm:p-8 rounded-2xl transition-all duration-300 text-center ${card.highlight
                  ? 'bg-[#FFFDF9] border-2 border-gold shadow-luxury order-first md:order-last'
                  : 'bg-[#FFFCF7] border border-gold/40 shadow-card hover:shadow-luxury'
                  }`}
              >
                {/* Decorative border inset */}
                <div className="absolute inset-2 border border-gold/20 rounded-xl pointer-events-none" />

                {/* Card Icon Header */}
                <div className="flex flex-col items-center w-full">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-pearl-dark border border-gold/40 flex items-center justify-center text-gold-dark mb-3 sm:mb-4 shadow-sm">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold-deep" />
                  </div>

                  <span className="font-editorial text-[10px] sm:text-xs tracking-[0.25em] uppercase text-deep-olive font-bold mb-2">
                    {card.title}
                  </span>

                  <h3
                    className={`font-cormorant text-charcoal font-semibold mb-2 leading-snug ${card.highlight ? 'text-2xl sm:text-3xl text-gold-deep' : 'text-xl sm:text-2xl'
                      }`}
                  >
                    {card.primary}
                  </h3>
                </div>

                {/* Subtitle / Full Address */}
                <p className="font-sans text-xs sm:text-sm text-charcoal-light leading-relaxed mt-1 max-w-xs">
                  {card.secondary}
                </p>

                {/* Specific Venue Action for Mobile & Desktop */}
                {card.highlight && (
                  <div className="mt-5 pt-4 w-full border-t border-gold/25">
                    <a
                      href={directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full min-h-[48px] px-5 py-3 rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-pearl font-editorial text-xs tracking-[0.2em] uppercase font-semibold shadow-md hover:shadow-lg transition-all duration-300 active:scale-95 group"
                    >
                      <Navigation className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                      <span>GET DIRECTIONS</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-90" />
                    </a>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
