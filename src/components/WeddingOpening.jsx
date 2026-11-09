import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import ujLogo from '../assets/uj-logo-gold.png';

export default function WeddingOpening({ onOpenComplete, isOpen, onReplay }) {
  const [stage, setStage] = useState('sealed'); // 'sealed' | 'opening' | 'revealed'

  const reducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const handleOpen = () => {
    if (stage !== 'sealed') return;
    setStage('opening');

    try {
      confetti({
        particleCount: 65,
        spread: 70,
        origin: { y: 0.58 },
        colors: ['#CBA14C', '#F4D48A', '#2D7584', '#FFFDF9', '#E5BF67'],
        disableForReducedMotion: true,
      });
    } catch {
      // fallback safe
    }

    if (reducedMotion) {
      setStage('revealed');
      setTimeout(() => {
        onOpenComplete();
      }, 900);
      return;
    }

    setTimeout(() => {
      setStage('revealed');
    }, 750);

    setTimeout(() => {
      onOpenComplete();
    }, 3800);
  };

  const handleSkip = () => {
    onOpenComplete();
  };

  return (
    <AnimatePresence>
      <motion.div
        key="wedding-invitation-overlay"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.9, ease: 'easeInOut' } }}
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden bg-gradient-to-b from-[#061418]/95 via-[#0A1E24]/95 to-[#061418]/95 backdrop-blur-md"
      >
        {/* Subtle radial starlight glow behind envelope */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10">
          <div className="w-[340px] sm:w-[520px] h-[340px] sm:h-[520px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(203,161,76,0.18)_0%,rgba(45,117,132,0.15)_50%,transparent_75%)] blur-2xl" />
        </div>

        {/* Skip button in top corner */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50">
          <button
            onClick={handleSkip}
            type="button"
            className="px-3.5 py-1.5 rounded-full bg-pearl-muted/80 hover:bg-gold/20 border border-gold/40 text-charcoal hover:text-gold-light text-[11px] sm:text-xs font-editorial uppercase tracking-[0.2em] transition-all backdrop-blur-sm cursor-pointer active:scale-95"
            aria-label="Skip wedding invitation opening"
          >
            Skip to Website &rarr;
          </button>
        </div>

        {/* Mobile-First Envelope Presentation Container */}
        <div className="relative w-full max-w-[325px] sm:max-w-[420px] md:max-w-[460px] flex flex-col items-center my-auto">
          {/* Header invitation caption */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-4 sm:mb-6"
          >
            <span className="font-script text-2xl sm:text-3xl md:text-4xl text-gold-dark block">
              A New Chapter Begins
            </span>
            <p className="font-editorial text-[9px] sm:text-xs tracking-[0.25em] text-gold-deep uppercase mt-0.5">
              The Wedding of Urvi &amp; Jigar
            </p>
            <p className="font-editorial text-[8px] sm:text-[10px] tracking-[0.2em] text-charcoal-muted uppercase mt-1">
              Together with our families
            </p>
          </motion.div>

          {/* 3D Perspective Envelope Container */}
          <div className="relative w-full aspect-[16/11] perspective-1000">
            {/* Outer Envelope Wrapper */}
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                y: stage === 'revealed' ? -10 : 0,
              }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="relative w-full h-full rounded-lg shadow-2xl bg-[#0D242B] border-2 border-gold/50 preserve-3d"
            >
              {/* Envelope Interior Lining */}
              <div className="absolute inset-1.5 sm:inset-2 rounded bg-gradient-to-b from-[#08191E] to-[#112F38] border border-gold/30 overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#CBA14C_1px,transparent_1px)] [background-size:16px_16px]" />
              </div>

              {/* Emerging Wedding Invitation Card */}
              <motion.div
                initial={{ y: 0, opacity: 0, scale: 0.95 }}
                animate={
                  stage === 'opening' || stage === 'revealed'
                    ? {
                        y: -105,
                        opacity: 1,
                        scale: 1.02,
                        zIndex: 35,
                      }
                    : { y: 0, opacity: 0, scale: 0.95, zIndex: 5 }
                }
                transition={{
                  delay: 0.35,
                  duration: 1.0,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute inset-x-2.5 sm:inset-x-4 top-2 bottom-2 bg-pearl-light rounded-md shadow-2xl border-2 border-gold/60 p-3 sm:p-5 flex flex-col items-center justify-between text-center deckle-card"
              >
                {/* Gold Frame Inset */}
                <div className="absolute inset-1.5 border border-gold/40 rounded pointer-events-none" />

                <div className="pt-0.5">
                  <span className="font-script text-gold-dark text-lg sm:text-2xl tracking-wide block">
                    Save The Dates
                  </span>
                  <span className="font-editorial text-[8px] sm:text-[10px] tracking-[0.25em] text-gold-deep uppercase block">
                    Wedding Celebration
                  </span>
                </div>

                {/* Couple Names with Staggered Reveal */}
                <div className="my-auto py-0.5">
                  <motion.h2
                    initial={{ opacity: 0, y: 8 }}
                    animate={stage === 'revealed' ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="font-cormorant text-2xl sm:text-4xl font-semibold tracking-normal text-charcoal leading-tight"
                  >
                    Urvi
                  </motion.h2>
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={stage === 'revealed' ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.85, duration: 0.5 }}
                    className="font-script text-xl sm:text-3xl text-gold-dark block -my-1"
                  >
                    &amp;
                  </motion.span>
                  <motion.h2
                    initial={{ opacity: 0, y: 8 }}
                    animate={stage === 'revealed' ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.0, duration: 0.6 }}
                    className="font-cormorant text-2xl sm:text-4xl font-semibold tracking-normal text-charcoal leading-tight"
                  >
                    Jigar
                  </motion.h2>
                </div>

                {/* Wedding Dates */}
                <div className="pb-0.5 border-t border-gold/30 pt-1.5 w-full">
                  <p className="font-editorial text-[9px] sm:text-xs tracking-wider text-charcoal font-semibold">
                    31 JANUARY – 2 FEBRUARY 2027
                  </p>
                  <p className="text-[8px] sm:text-[10px] text-charcoal-muted font-sans mt-0.5 leading-tight">
                    Three Days of Love &amp; Celebration
                  </p>
                </div>
              </motion.div>

              {/* Envelope Pocket (Left, Right, Bottom Flaps) */}
              <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden rounded-lg">
                <div
                  className="absolute inset-0 bg-[#0E2830]"
                  style={{
                    clipPath: 'polygon(0 0, 48% 52%, 0 100%)',
                    filter: 'drop-shadow(2px 0 4px rgba(3,10,12,0.4))',
                  }}
                />

                <div
                  className="absolute inset-0 bg-[#112E37]"
                  style={{
                    clipPath: 'polygon(100% 0, 52% 52%, 100% 100%)',
                    filter: 'drop-shadow(-2px 0 4px rgba(3,10,12,0.4))',
                  }}
                />

                <div
                  className="absolute inset-0 bg-[#143640] border-b border-gold/40"
                  style={{
                    clipPath: 'polygon(0 100%, 50% 48%, 100% 100%)',
                    filter: 'drop-shadow(0 -3px 6px rgba(3,10,12,0.5))',
                  }}
                />
              </div>

              {/* Top Envelope Flap with 3D Fold Transition */}
              <motion.div
                initial={false}
                animate={{
                  rotateX: stage === 'sealed' ? 0 : 180,
                  zIndex: stage === 'sealed' ? 30 : 2,
                }}
                transition={{ duration: 0.85, ease: [0.4, 0, 0.2, 1] }}
                style={{ transformOrigin: 'top center' }}
                className="absolute top-0 left-0 right-0 h-full preserve-3d pointer-events-none"
              >
                {/* Front of flap (visible when closed) */}
                <div
                  className="absolute inset-0 backface-hidden"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 50% 55%)',
                    backgroundColor: '#163B45',
                    filter: 'drop-shadow(0 4px 8px rgba(3,10,12,0.5))',
                  }}
                >
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon
                      points="0,0 100,0 50,55"
                      fill="#163B45"
                      stroke="#CBA14C"
                      strokeWidth="0.8"
                    />
                  </svg>
                </div>

                {/* Back of flap (revealed when open) */}
                <div
                  className="absolute inset-0"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 50% 55%)',
                    backgroundColor: '#0D242B',
                    transform: 'rotateX(180deg)',
                    backfaceVisibility: 'hidden',
                  }}
                >
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon
                      points="0,0 100,0 50,55"
                      fill="#0D242B"
                      stroke="#CBA14C"
                      strokeWidth="0.7"
                    />
                  </svg>
                </div>
              </motion.div>

              {/* Centered Wax Seal with U & J Monogram */}
              <AnimatePresence>
                {stage === 'sealed' && (
                  <div
                    className="absolute inset-x-0 z-40 flex items-center justify-center pointer-events-none"
                    style={{
                      top: '55%',
                      transform: 'translateY(-50%)',
                    }}
                  >
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 1.25, opacity: 0, y: -12 }}
                      transition={{ duration: 0.35 }}
                      onClick={handleOpen}
                      className="relative cursor-pointer group pointer-events-auto flex items-center justify-center"
                    >
                      {/* Pulse halo */}
                      <div className="absolute inset-0 rounded-full bg-gold/40 animate-ping opacity-50 scale-110 pointer-events-none" />

                      {/* U & J Monogram Seal */}
                      <img
                        src={ujLogo}
                        alt="U & J Monogram Seal"
                        className="w-24 h-24 sm:w-28 sm:h-28 object-contain rounded-full drop-shadow-[0_6px_16px_rgba(3,10,12,0.7)] transition-transform duration-300 group-hover:scale-105 active:scale-95 block mx-auto"
                      />
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Action button */}
          <div className="mt-6 sm:mt-8 text-center flex flex-col items-center w-full">
            {stage === 'sealed' ? (
              <motion.button
                onClick={handleOpen}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                type="button"
                className="w-full max-w-[290px] py-3.5 rounded-full bg-gradient-to-r from-gold-deep via-gold to-gold-dark text-pearl-dark font-editorial text-xs sm:text-sm font-bold tracking-[0.2em] uppercase shadow-lg hover:shadow-luxury transition-all duration-300 border border-gold-light/40 flex items-center justify-center gap-2 group cursor-pointer active:scale-95"
              >
                <span>OPEN WEDDING INVITATION</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </motion.button>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-1 w-full max-w-[280px]"
              >
                <button
                  onClick={handleSkip}
                  type="button"
                  className="w-full py-2.5 rounded-full bg-pearl-muted border border-gold/50 shadow-sm text-xs font-editorial uppercase tracking-[0.18em] text-gold-deep hover:text-white transition-all active:scale-95 cursor-pointer"
                >
                  Enter Celebration &rarr;
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

