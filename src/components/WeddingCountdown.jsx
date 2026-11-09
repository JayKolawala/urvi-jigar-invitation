import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarPlus, Heart, Sparkles, Clock } from 'lucide-react';
import { useCountdown } from '../hooks/useCountdown';
import SectionDivider from './SectionDivider';

export default function WeddingCountdown() {
  const { days, hours, minutes, seconds, isToday, isPassed } = useCountdown(
    '2027-02-02T19:00:00+05:30'
  );

  // Helper to generate Google Calendar URL
  const getGoogleCalendarUrl = () => {
    const title = encodeURIComponent('Urvi & Jigar — Wedding Ceremony');
    // 2 February 2027, 7:00 PM IST = 13:30 UTC
    const dates = '20270202T133000Z/20270202T183000Z';
    const details = encodeURIComponent(
      'The Wedding Ceremony of Urvi & Jigar.\n' +
        'Dates: 31 January – 2 February 2027\n' +
        'Main Wedding Ceremony: 2 February 2027 at 7:00 PM IST\n' +
        'Schedule:\n' +
        '• 31 Jan, 8:00 AM: Ganesh Pooja\n' +
        '• 1 Feb, 10:00 AM: Haldi (Dress Code: Yellow)\n' +
        '• 1 Feb, 4:00 PM: Grah Shanti Pooja\n' +
        '• 1 Feb, 7:00 PM: Dinner\n' +
        '• 1 Feb, 9:00 PM: Sangeet Night\n' +
        '• 2 Feb, 7:00 PM: Wedding Ceremony\n\n' +
        'Invited by: Jagruti Kolawala & Satish Kolawala & Family\n' +
        'We look forward to celebrating with you!'
    );
    const location = encodeURIComponent('Surat, Gujarat, India');
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  };

  // Helper to download .ics iCalendar file
  const downloadIcs = () => {
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Urvi & Jigar Wedding//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      'UID:urvi-jigar-wedding-2027@invitation',
      'DTSTAMP:20270101T000000Z',
      'DTSTART:20270202T133000Z',
      'DTEND:20270202T183000Z',
      'SUMMARY:Urvi & Jigar — Wedding Ceremony',
      'DESCRIPTION:The Wedding Ceremony of Urvi & Jigar. 31 Jan - 2 Feb 2027. Invited by Jagruti Kolawala & Satish Kolawala & Family.',
      'LOCATION:Surat\\, Gujarat\\, India',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Urvi-Jigar-Wedding.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const timeUnits = [
    { label: 'DAYS', value: Math.max(0, days) },
    { label: 'HOURS', value: Math.max(0, hours) },
    { label: 'MINUTES', value: Math.max(0, minutes) },
    { label: 'SECONDS', value: Math.max(0, seconds) },
  ];

  return (
    <section id="countdown" className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden text-center">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-editorial text-[10px] sm:text-xs md:text-sm tracking-[0.3em] uppercase text-gold-deep font-semibold block mb-2">
            Counting Down
          </span>
          <h2 className="font-cormorant text-3xl sm:text-5xl md:text-6xl text-charcoal font-normal">
            Until Forever Begins
          </h2>
          <p className="font-cormorant italic text-base sm:text-xl text-charcoal-light mt-2 max-w-md mx-auto">
            &ldquo;Every second brings us closer to the most magical moment of our lives.&rdquo;
          </p>
        </motion.div>

        <SectionDivider className="my-6 sm:my-8" />

        {/* Live Counters or Celebration Begun Message */}
        {isPassed || (isToday && days === 0 && hours === 0 && minutes === 0 && seconds === 0) ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="p-8 sm:p-12 rounded-3xl bg-pearl-light border-2 border-gold shadow-luxury max-w-xl mx-auto"
          >
            <Sparkles className="w-10 h-10 text-gold-light mx-auto mb-3 animate-spin-slow" />
            <h3 className="font-cormorant text-3xl sm:text-5xl font-bold text-gold-light tracking-wide">
              THE CELEBRATION HAS BEGUN!
            </h3>
            <p className="font-cormorant italic text-lg sm:text-xl text-charcoal-light mt-2">
              Thank you for being a cherished part of our journey.
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md sm:max-w-xl mx-auto px-1"
          >
            {timeUnits.map((unit) => (
              <div
                key={unit.label}
                className="relative flex flex-col items-center justify-center py-4 px-1 sm:py-6 sm:px-3 rounded-xl sm:rounded-2xl bg-pearl-light border-2 border-gold/40 shadow-card hover:border-gold transition-all duration-300"
              >
                {/* Corner Dots */}
                <div className="absolute top-1.5 left-1.5 w-1 h-1 rounded-full bg-gold/60" />
                <div className="absolute top-1.5 right-1.5 w-1 h-1 rounded-full bg-gold/60" />
                <div className="absolute bottom-1.5 left-1.5 w-1 h-1 rounded-full bg-gold/60" />
                <div className="absolute bottom-1.5 right-1.5 w-1 h-1 rounded-full bg-gold/60" />

                {/* Animated Number Digit */}
                <div className="h-10 sm:h-14 flex items-center justify-center overflow-hidden">
                  <AnimatePresence mode="popLayout">
                    <motion.span
                      key={unit.value}
                      initial={{ y: 15, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -15, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="font-editorial text-2xl sm:text-4xl md:text-5xl font-semibold text-gold-deep"
                    >
                      {String(unit.value).padStart(2, '0')}
                    </motion.span>
                  </AnimatePresence>
                </div>

                {/* Label */}
                <span className="font-sans text-[9px] sm:text-[11px] tracking-wider uppercase text-charcoal-muted font-medium mt-1">
                  {unit.label}
                </span>
              </div>
            ))}
          </motion.div>
        )}

        {/* Target Time Caption */}
        <div className="mt-5 text-center">
          <p className="font-editorial text-[10px] sm:text-xs tracking-[0.22em] uppercase text-gold-deep">
            Tuesday, 2 February 2027 &bull; 7:00 PM IST
          </p>
        </div>

        {/* Add to Calendar Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 px-2"
        >
          <a
            href={getGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 min-h-[46px] px-5 sm:px-6 py-2.5 rounded-full bg-pearl-muted border border-gold/50 shadow-sm hover:border-gold hover:bg-gold/15 text-charcoal font-sans text-xs tracking-wider uppercase font-medium transition-all duration-300 active:scale-95"
          >
            <CalendarPlus className="w-4 h-4 text-gold-dark" />
            <span>Add to Google Calendar</span>
          </a>

          <button
            onClick={downloadIcs}
            type="button"
            className="inline-flex items-center justify-center gap-2 min-h-[46px] px-5 sm:px-6 py-2.5 rounded-full bg-pearl-muted border border-gold/50 shadow-sm hover:border-gold hover:bg-gold/15 text-charcoal font-sans text-xs tracking-wider uppercase font-medium transition-all duration-300 active:scale-95 cursor-pointer"
          >
            <CalendarPlus className="w-4 h-4 text-gold-dark" />
            <span>Apple / iCal File</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

