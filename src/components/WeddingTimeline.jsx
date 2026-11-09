import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sun,
  Flame,
  Music,
  Utensils,
  Heart,
  Sparkles,
  MapPin,
  Navigation as NavigationIcon,
  ExternalLink,
  Home,
} from 'lucide-react';
import SectionDivider from './SectionDivider';
import { GaneshMotif, MarigoldFlower } from './FloralDecorations';
import MapModal from './MapModal';

const timelineData = [
  {
    dayNumber: 'DAY 1',
    dayOfWeek: 'Sunday',
    date: '31 January 2027',
    theme: 'Auspicious Beginnings',
    badgeColor: 'border-gold/40 text-gold-deep bg-pearl-muted',
    accentColor: 'gold',
    venues: [
      {
        id: 'day1-home',
        timing: '8:00 AM &bull; Home Ceremony',
        badge: 'Ganesh Pooja Venue',
        forEvents: 'Ganesh Pooja',
        name: 'Swapna Shrushti Residency (Home)',
        address: 'B/1 - 201, Swapna Shrushti Residency, Opp. Raj Corner, Pal, Surat - 395009',
        mapEmbedUrl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d946.2463344381458!2d72.77403508792493!3d21.199856998098046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04c4ea6bec233%3A0x84c8c3f4d5e4b72a!2sSwapna%20Shrusti%20Residency!5e1!3m2!1sen!2sin!4v1794236007865!5m2!1sen!2sin',
        directionsUrl:
          'https://www.google.com/maps/search/?api=1&query=Swapna+Shrusti+Residency,+Opp.+Raj+Corner,+Pal,+Surat+-+395009',
        icon: Home,
      },
    ],
    events: [
      {
        time: '8:00 AM',
        title: 'Ganesh Pooja',
        subtitle: 'Invoking the Divine Lord Ganesha for Blessings & Prosperity',
        venueLabel: 'Home (Swapna Shrushti Residency)',
        description:
          'A sacred Vedic ceremony invoking Lord Ganesha to remove all obstacles and bestow divine blessings upon the couple and their families.',
        icon: GaneshMotif,
        isCustomSvg: true,
        highlight: false,
      },
    ],
  },
  {
    dayNumber: 'DAY 2',
    dayOfWeek: 'Monday',
    date: '1 February 2027',
    theme: 'Colors, Rituals & Celebrations',
    badgeColor: 'border-[#E5BF67]/60 text-[#F4D48A] bg-[#CBA14C]/15',
    accentColor: 'yellow',
    venues: [
      {
        id: 'morning-home',
        timing: 'Morning (10:00 AM)',
        badge: 'Haldi Ceremony Venue',
        forEvents: 'Haldi Ceremony',
        name: 'Swapna Shrushti Residency (Home)',
        address: 'B/1 - 201, Swapna Shrushti Residency, Opp. Raj Corner, Pal, Surat - 395009',
        mapEmbedUrl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d946.2463344381458!2d72.77403508792493!3d21.199856998098046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04c4ea6bec233%3A0x84c8c3f4d5e4b72a!2sSwapna%20Shrusti%20Residency!5e1!3m2!1sen!2sin!4v1794236007865!5m2!1sen!2sin',
        directionsUrl:
          'https://www.google.com/maps/search/?api=1&query=Swapna+Shrusti+Residency,+Opp.+Raj+Corner,+Pal,+Surat+-+395009',
        icon: Home,
      },
      {
        id: 'evening-farmhouse',
        timing: 'From 4:00 PM Onwards',
        badge: 'Evening Festivities Venue',
        forEvents: 'Grah Shanti Pooja • Royal Dinner • Sangeet Night',
        name: 'Viththalbapa Farm House',
        address:
          'Block no. 10, Skyline road, Northern skyline, T.P. 15, aa &10/B, Gaurav Path Road, near Bagban circle, Surat - 394510',
        mapEmbedUrl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d591.6261422025128!2d72.77073447354867!3d21.19194303322173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d003484d257%3A0xb8430e8086c7d947!2sViththalbapa%20Farm%20House!5e1!3m2!1sen!2sin!4v1794235424065!5m2!1sen!2sin',
        directionsUrl:
          'https://www.google.com/maps/search/?api=1&query=Viththalbapa+Farm+House,+Block+no.+10,+Skyline+road,+Northern+skyline,+T.P.+15,+aa+%2610/B,+Gaurav+Path+Road,+near+Bagban+circle,+Surat,+Gujarat+394510',
        icon: MapPin,
      },
    ],
    events: [
      {
        time: '10:00 AM',
        title: 'Haldi Ceremony',
        subtitle: 'A Splash of Yellow & Happiness',
        venueLabel: 'Home (Swapna Shrushti)',
        description:
          'A cheerful, joyous morning of turmeric paste, fragrant marigolds, singing, and celebration.',
        dressCode: 'Yellow',
        icon: MarigoldFlower,
        isCustomSvg: true,
        highlight: true,
      },
      {
        time: '4:00 PM',
        title: 'Grah Shanti Pooja',
        subtitle: 'Universal Peace & Harmony',
        venueLabel: 'Viththalbapa Farm House',
        description:
          'Sacred rituals performed to bring auspicious planetary harmony, peace, and long-lasting prosperity to the new home.',
        icon: Sparkles,
        highlight: false,
      },
      {
        time: '7:00 PM',
        title: 'Royal Dinner Feast',
        subtitle: 'Culinary Delights & Gathering',
        venueLabel: 'Viththalbapa Farm House',
        description:
          'An extravagant culinary spread of traditional and gourmet delicacies shared with loved ones.',
        icon: Utensils,
        highlight: false,
      },
      {
        time: '9:00 PM',
        title: 'Sangeet Night',
        subtitle: 'Rhythms, Dance & Festive Beats',
        venueLabel: 'Viththalbapa Farm House',
        description:
          'An electric evening of music, dance performances, and celebration under the starlit sky.',
        icon: Music,
        highlight: false,
      },
    ],
  },
  {
    dayNumber: 'DAY 3',
    dayOfWeek: 'Tuesday',
    date: '2 February 2027',
    theme: 'The Grand Wedding Ceremony',
    badgeColor: 'border-gold text-gold-light bg-gold/20',
    accentColor: 'royal',
    venues: [
      {
        id: 'wedding-shukan',
        timing: '7:00 PM &bull; Wedding Ceremony',
        badge: 'The Wedding Ceremony Venue',
        forEvents: 'Hastamelap • Varmala • Sacred Pheras • Dinner Feast',
        name: 'Shukan Party Plot',
        address:
          'Shukan Party Plot, Brahmand Rd, near brahmand residency, Nani Ved, Pramukh Darshan Society, Dabholi, Surat - 395004',
        mapEmbedUrl:
          'https://www.google.com/maps/embed?pb=!1m17!1m11!1m3!1d237.46690765563446!2d72.81207154576313!3d21.241624585608868!2m2!1f63.52915064461218!2f45!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x3be04f70f72f861f%3A0x2c31ae1246b0a3f7!2sShukan%20Party%20Plot!5e1!3m2!1sen!2sin!4v1794236667704!5m2!1sen!2sin',
        directionsUrl:
          'https://www.google.com/maps/search/?api=1&query=Shukan+Party+Plot,+Brahmand+Rd,+near+brahmand+residency,+Nani+Ved,+Pramukh+Darshan+Society,+Dabholi,+Surat,+Gujarat+395004',
        icon: Heart,
      },
    ],
    events: [
      {
        time: '7:00 PM',
        title: 'Wedding Ceremony',
        subtitle: 'Hastamelap, Varmala & Sacred Pheras',
        venueLabel: 'Shukan Party Plot, Dabholi',
        description:
          'The sacred culmination where Urvi & Jigar unite their lives, take their seven vows around the holy fire, and begin their lifetime of forever.',
        icon: Heart,
        highlight: true,
        grand: true,
      },
    ],
  },
];

export default function WeddingTimeline() {
  const [activeMapVenue, setActiveMapVenue] = useState(null);

  return (
    <section id="celebrations" className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden scroll-mt-16 sm:scroll-mt-20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-5 w-80 h-80 bg-gold-light/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-5 w-96 h-96 bg-sage/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Interactive Map Lightbox Modal */}
      <MapModal venue={activeMapVenue} onClose={() => setActiveMapVenue(null)} />

      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="font-editorial text-[10px] sm:text-xs md:text-sm tracking-[0.3em] uppercase text-gold-deep font-semibold block mb-2">
            Wedding Itinerary
          </span>
          <h2 className="font-cormorant text-3xl sm:text-5xl md:text-6xl text-charcoal font-normal">
            Three Days of Love &amp; Celebration
          </h2>
          <p className="font-cormorant italic text-base sm:text-xl text-charcoal-light mt-2 max-w-lg mx-auto">
            &ldquo;Join us as we celebrate each cherished ritual and joyful festive milestone.&rdquo;
          </p>
        </motion.div>

        <SectionDivider className="my-6 sm:my-10" />

        {/* 3 Day Groups */}
        <div className="space-y-10 sm:space-y-12 mt-6">
          {timelineData.map((dayGroup, dayIdx) => (
            <motion.div
              key={dayGroup.dayNumber}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: dayIdx * 0.1, duration: 0.7 }}
              className="relative rounded-3xl p-5 sm:p-8 md:p-10 bg-pearl-light/95 border-2 border-gold/40 shadow-luxury deckle-card overflow-hidden"
            >
              {/* Inner Decorative Inset Border */}
              <div className="absolute inset-2 sm:inset-3 border border-gold/25 rounded-2xl pointer-events-none" />

              {/* Day Header Banner */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 mb-6 border-b border-gold/30 gap-3">
                <div>
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-block px-3 py-0.5 rounded-full border text-[10px] sm:text-[11px] font-editorial uppercase tracking-[0.2em] font-bold ${dayGroup.badgeColor}`}
                    >
                      {dayGroup.dayNumber} &bull; {dayGroup.dayOfWeek}
                    </span>
                    <span className="font-editorial text-xs sm:text-sm tracking-wider uppercase text-charcoal-muted">
                      {dayGroup.date}
                    </span>
                  </div>
                  <h3 className="font-cormorant text-2xl sm:text-4xl text-charcoal font-semibold mt-1.5">
                    {dayGroup.theme}
                  </h3>
                </div>

                {/* Day Badge Emblem */}
                <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-pearl-muted border border-gold/40 shadow-inner text-gold-deep">
                  <Sparkles className="w-5 h-5 text-gold-dark" />
                </div>
              </div>

              {/* Day Events Stack */}
              <div className="space-y-4 sm:space-y-5 relative">
                {/* Vertical timeline spine */}
                <div className="hidden md:block absolute top-4 bottom-4 left-6 w-[2px] bg-gradient-to-b from-gold/50 via-gold/30 to-gold/10 pointer-events-none" />

                {dayGroup.events.map((evt) => {
                  const Icon = evt.icon;
                  return (
                    <div
                      key={evt.title}
                      className={`relative md:pl-16 p-4 sm:p-5 rounded-2xl transition-all duration-300 ${
                        evt.grand
                          ? 'bg-gradient-to-br from-pearl-muted via-pearl-light to-pearl-muted border-2 border-gold shadow-luxury'
                          : evt.highlight
                          ? 'bg-pearl-muted/70 border border-[#E5BF67]/60 shadow-sm'
                          : 'bg-pearl-muted/40 border border-gold/25 hover:border-gold/50'
                      }`}
                    >
                      {/* Timeline Icon Node (Desktop) */}
                      <div className="hidden md:flex absolute top-5 left-2.5 w-8 h-8 rounded-full bg-pearl-dark border-2 border-gold items-center justify-center text-gold-deep shadow-md z-10 overflow-hidden">
                        {evt.isCustomSvg ? (
                          <Icon className="w-4 h-4" />
                        ) : (
                          <Icon className="w-3.5 h-3.5 text-gold-deep" />
                        )}
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                        <div>
                          {/* Mobile Icon & Time Pill */}
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="md:hidden flex items-center justify-center w-6 h-6 rounded-full bg-pearl-dark border border-gold text-gold-deep overflow-hidden">
                              {evt.isCustomSvg ? (
                                <Icon className="w-3.5 h-3.5" />
                              ) : (
                                <Icon className="w-3 h-3 text-gold-deep" />
                              )}
                            </span>
                            <span className="inline-block px-2.5 py-0.5 rounded-full bg-gold/15 border border-gold/50 font-editorial text-xs font-semibold tracking-wider uppercase text-gold-light">
                              {evt.time}
                            </span>
                            {evt.venueLabel && (
                              <span className="inline-flex items-center gap-1 text-[11px] font-sans text-gold-deep font-medium">
                                <MapPin className="w-3 h-3 text-gold-dark" />
                                <span>{evt.venueLabel}</span>
                              </span>
                            )}
                          </div>

                          <h4
                            className={`font-cormorant font-semibold text-charcoal leading-snug ${
                              evt.grand ? 'text-2xl sm:text-3xl text-gold-light' : 'text-xl sm:text-2xl'
                            }`}
                          >
                            {evt.title}
                          </h4>

                          <p className="font-editorial text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-gold-deep font-semibold mt-0.5">
                            {evt.subtitle}
                          </p>

                          <p className="font-sans text-xs sm:text-sm text-charcoal-light leading-relaxed mt-2 max-w-2xl">
                            {evt.description}
                          </p>
                        </div>

                        {/* Special Dress Code Badge for Haldi */}
                        {evt.dressCode && (
                          <div className="sm:text-right flex-shrink-0 mt-1 sm:mt-0">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5BF67]/20 border border-[#E5BF67] text-[11px] font-editorial font-bold tracking-wider uppercase text-[#F4D48A] shadow-sm">
                              <Sun className="w-3.5 h-3.5 text-amber-400" />
                              <span>Dress Code: {evt.dressCode}</span>
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Ultra-Sleek Luxury Venue Strip (No Bulky iFrames Taking Up Space) */}
              {dayGroup.venues && (
                <div className="mt-6 pt-5 border-t border-gold/25">
                  <div className="space-y-2.5">
                    {dayGroup.venues.map((venue) => {
                      const VenueIcon = venue.icon;
                      return (
                        <div
                          key={venue.id}
                          className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 sm:p-4 rounded-2xl bg-pearl-muted/65 border border-gold/30 hover:border-gold/50 transition-colors shadow-sm"
                        >
                          {/* Venue info & icon */}
                          <div className="flex items-start sm:items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-pearl-dark border border-gold/50 flex items-center justify-center text-gold-deep flex-shrink-0 mt-0.5 sm:mt-0">
                              <VenueIcon className="w-4 h-4 text-gold-deep" />
                            </div>
                            <div>
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="font-editorial text-[9px] tracking-[0.2em] uppercase text-gold-deep font-bold">
                                  {venue.timing}
                                </span>
                              </div>
                              <h5 className="font-cormorant text-lg sm:text-xl font-semibold text-charcoal leading-tight">
                                {venue.name}
                              </h5>
                              <p className="font-sans text-xs text-charcoal-light line-clamp-1 max-w-xl">
                                {venue.address}
                              </p>
                            </div>
                          </div>

                          {/* Quick Actions: View Map Lightbox & Direct Navigation */}
                          <div className="flex items-center gap-2 flex-shrink-0 self-start sm:self-center">
                            <button
                              onClick={() => setActiveMapVenue(venue)}
                              type="button"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gold/40 hover:border-gold bg-pearl-dark/60 hover:bg-gold/15 text-gold-deep hover:text-gold-light text-[11px] font-editorial uppercase tracking-wider transition-all duration-200 active:scale-95 cursor-pointer"
                            >
                              <MapPin className="w-3 h-3 text-gold-dark" />
                              <span>View Map</span>
                            </button>

                            <a
                              href={venue.directionsUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-gold-deep via-gold to-gold-dark text-pearl-dark text-[11px] font-editorial uppercase tracking-wider font-bold shadow-sm hover:shadow-luxury transition-all duration-200 active:scale-95 group"
                            >
                              <NavigationIcon className="w-3 h-3 group-hover:rotate-45 transition-transform" />
                              <span>Directions</span>
                              <ExternalLink className="w-2.5 h-2.5 opacity-80" />
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
