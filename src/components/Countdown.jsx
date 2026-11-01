import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarPlus, Heart } from 'lucide-react';
import { useCountdown } from '../hooks/useCountdown';
import SectionDivider from './SectionDivider';

export default function Countdown() {
  const { days, hours, minutes, seconds, isToday, isPassed } = useCountdown();

  // Helper to generate Google Calendar URL
  const getGoogleCalendarUrl = () => {
    const title = encodeURIComponent("Urvi & Jigar — Engagement Ceremony");
    const dates = "20261121T043000Z/20261121T083000Z";
    const details = encodeURIComponent(
      "Engagement Ceremony of Urvi & Jigar.\nVenue: Royal Dine Restaurant & Banquet\nMap: https://maps.app.goo.gl/RsuATqWArgGbvxra7\nHosts: Satish Kolawala & Jagruti Kolawala\nWe look forward to celebrating with you!"
    );
    const location = encodeURIComponent(
      "Royal Dine Restaurant & Banquet, Nr Bagban Kratos Circle Green city Road, Gaurav Path Road, Pal Gam, Surat, Gujarat 394510"
    );
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  };

  // Helper to download .ics iCalendar file
  const downloadIcs = () => {
    const icsData = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Urvi & Jigar Engagement//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      "UID:urvi-jigar-engagement-2026@wedding.invitation",
      "DTSTAMP:20261101T000000Z",
      "DTSTART:20261121T043000Z",
      "DTEND:20261121T083000Z",
      "SUMMARY:Urvi & Jigar — Engagement Ceremony",
      "DESCRIPTION:Engagement Ceremony of Urvi & Jigar. Venue: Royal Dine Restaurant & Banquet. Hosts: Satish Kolawala & Jagruti Kolawala.",
      "LOCATION:Royal Dine Restaurant & Banquet\\, Nr Bagban Kratos Circle Green city Road\\, Gaurav Path Road\\, Pal Gam\\, Surat\\, Gujarat 394510",
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", "Urvi-Jigar-Engagement.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const timeUnits = [
    { label: 'Days', value: days },
    { label: 'Hours', value: hours },
    { label: 'Mins', value: minutes },
    { label: 'Secs', value: seconds },
  ];

  return (
    <section id="countdown" className="relative py-14 sm:py-20 md:py-24 px-3 sm:px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-editorial text-[10px] sm:text-xs md:text-sm tracking-[0.3em] uppercase text-deep-olive font-semibold block mb-1.5">
            Counting Down The Moments
          </span>
          <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-charcoal font-normal">
            Until We Celebrate
          </h2>
        </motion.div>

        <SectionDivider className="my-5 sm:my-8" />

        {/* Dynamic Countdown View */}
        {isPassed ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-6 sm:p-10 rounded-2xl bg-pearl-light border border-gold/40 shadow-card max-w-md mx-auto"
          >
            <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-gold-dark mx-auto mb-2.5" />
            <h3 className="font-cormorant text-2xl sm:text-3xl text-charcoal">
              A beautiful beginning, forever remembered
            </h3>
            <p className="font-sans text-xs sm:text-sm text-charcoal-light mt-1.5">
              Thank you for being a cherished part of our journey.
            </p>
          </motion.div>
        ) : isToday ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-6 sm:p-10 rounded-2xl bg-pearl-light border-2 border-gold shadow-luxury max-w-md mx-auto"
          >
            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-2.5">
              <Heart className="w-5 h-5 text-gold-deep animate-pulse" />
            </div>
            <h3 className="font-cormorant text-2xl sm:text-3xl text-charcoal font-semibold">
              Today is the Day!
            </h3>
            <p className="font-editorial text-[10px] sm:text-xs tracking-[0.2em] uppercase text-deep-olive mt-1.5">
              Engagement Ceremony &bull; 10:00 AM IST
            </p>
            <p className="font-sans text-xs text-charcoal-light mt-2">
              We look forward to welcoming you at Royal Dine Restaurant &amp; Banquet, Surat.
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-4 gap-1.5 sm:gap-4 max-w-md sm:max-w-xl mx-auto px-1"
          >
            {timeUnits.map((unit) => (
              <div
                key={unit.label}
                className="relative flex flex-col items-center justify-center py-3.5 px-1 sm:py-5 sm:px-3 rounded-xl sm:rounded-2xl bg-[#FFFDFB] border border-gold/40 shadow-sm transition-all duration-300"
              >
                {/* Subtle ornamental corner dot */}
                <div className="absolute top-1.5 left-1.5 w-1 h-1 rounded-full bg-gold/50" />
                <div className="absolute top-1.5 right-1.5 w-1 h-1 rounded-full bg-gold/50" />
                <div className="absolute bottom-1.5 left-1.5 w-1 h-1 rounded-full bg-gold/50" />
                <div className="absolute bottom-1.5 right-1.5 w-1 h-1 rounded-full bg-gold/50" />

                {/* Number Display with Pop Transition */}
                <div className="h-10 sm:h-14 flex items-center justify-center overflow-hidden">
                  <AnimatePresence mode="popLayout">
                    <motion.span
                      key={unit.value}
                      initial={{ y: 15, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -15, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="font-editorial text-2xl sm:text-4xl font-semibold text-charcoal"
                    >
                      {String(unit.value).padStart(2, '0')}
                    </motion.span>
                  </AnimatePresence>
                </div>

                {/* Unit Label */}
                <span className="font-sans text-[9px] sm:text-[11px] tracking-wider uppercase text-charcoal-light font-medium mt-0.5">
                  {unit.label}
                </span>
              </div>
            ))}
          </motion.div>
        )}

        {/* Add to Calendar Action Buttons - Touch-friendly on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-6 sm:mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 px-2"
        >
          <a
            href={getGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 sm:px-5 py-2.5 rounded-full bg-pearl-light border border-gold/50 shadow-sm hover:border-gold text-charcoal font-sans text-xs tracking-wider uppercase font-medium transition-all duration-300 active:scale-95"
          >
            <CalendarPlus className="w-3.5 h-3.5 text-gold-dark" />
            <span>Google Calendar</span>
          </a>

          <button
            onClick={downloadIcs}
            type="button"
            className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 sm:px-5 py-2.5 rounded-full bg-pearl-light border border-gold/50 shadow-sm hover:border-gold text-charcoal font-sans text-xs tracking-wider uppercase font-medium transition-all duration-300 active:scale-95"
          >
            <CalendarPlus className="w-3.5 h-3.5 text-gold-dark" />
            <span>Apple / iCal File</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
