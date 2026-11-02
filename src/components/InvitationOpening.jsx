import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import ujLogo from '../assets/uj-logo.png';

export default function InvitationOpening({ onOpenComplete, isOpen, onReplay }) {
  const [stage, setStage] = useState('sealed'); // 'sealed' | 'opening' | 'revealed'
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handler = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const handleOpen = () => {
    if (stage !== 'sealed') return;
    setStage('opening');

    try {
      confetti({
        particleCount: 50,
        spread: 65,
        origin: { y: 0.58 },
        colors: ['#D9BD8A', '#D9B2AE', '#E8D2CF', '#FFFCF7', '#B89958'],
        disableForReducedMotion: true,
      });
    } catch {
      // fallback
    }

    if (reducedMotion) {
      setStage('revealed');
      setTimeout(() => {
        onOpenComplete();
      }, 900);
      return;
    }

    // Sequence timing for flap and card reveal
    setTimeout(() => {
      setStage('revealed');
    }, 800);

    setTimeout(() => {
      onOpenComplete();
    }, 3600);
  };

  const handleSkip = () => {
    setStage('revealed');
    onOpenComplete();
  };

  if (isOpen && stage === 'revealed') {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        key="invitation-overlay"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.7, ease: "easeInOut" } }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center p-3 sm:p-6 bg-pearl-dark/95 backdrop-blur-md overflow-hidden select-none"
      >
        {/* Subtle background ambient glow */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-lighter/70 via-pearl/40 to-pearl-dark/95" />

        {/* Skip Button - Safe Top Right Mobile Positioning */}
        <button
          onClick={handleSkip}
          type="button"
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 text-[10px] sm:text-xs tracking-widest uppercase font-sans text-charcoal/70 hover:text-charcoal px-3 py-1.5 rounded-full border border-gold/40 hover:border-gold bg-pearl/90 backdrop-blur-sm shadow-sm transition-all duration-300 active:scale-95 cursor-pointer"
        >
          Skip &rarr;
        </button>

        {/* Mobile-First Envelope Presentation Container */}
        <div className="relative w-full max-w-[325px] sm:max-w-[400px] md:max-w-[450px] flex flex-col items-center my-auto">

          {/* Header invitation caption */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-4 sm:mb-6"
          >
            <p className="font-script text-2xl sm:text-3xl md:text-4xl text-gold-dark">
              You are cordially invited
            </p>
            <p className="font-editorial text-[9px] sm:text-xs tracking-[0.25em] text-deep-olive uppercase mt-0.5">
              The Engagement of Urvi &amp; Jigar
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
                y: stage === 'revealed' ? -8 : 0
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative w-full h-full rounded-lg shadow-xl bg-[#F7F2E8] border border-gold/40 preserve-3d"
            >
              {/* Envelope Interior Lining */}
              <div className="absolute inset-1.5 sm:inset-2 rounded bg-gradient-to-b from-[#F2ECE1] to-[#FAF7F0] border border-gold/30 overflow-hidden">
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#D9BD8A_1px,transparent_1px)] [background-size:16px_16px]" />
              </div>

              {/* Emerging Invitation Letter Card */}
              <motion.div
                initial={{ y: 0, opacity: 0, scale: 0.95 }}
                animate={
                  stage === 'opening' || stage === 'revealed'
                    ? {
                      y: -95,
                      opacity: 1,
                      scale: 1.02,
                      zIndex: 35
                    }
                    : { y: 0, opacity: 0, scale: 0.95, zIndex: 5 }
                }
                transition={{
                  delay: 0.35,
                  duration: 1.0,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="absolute inset-x-2.5 sm:inset-x-4 top-2 bottom-2 bg-[#FFFCF7] rounded-md shadow-2xl border-2 border-gold/60 p-3 sm:p-5 flex flex-col items-center justify-between text-center deckle-card"
              >
                {/* Gold Frame Inset */}
                <div className="absolute inset-1.5 border border-gold/30 rounded pointer-events-none" />

                <div className="pt-0.5">
                  <span className="font-script text-gold-dark text-lg sm:text-2xl tracking-wide block">
                    Save our Date
                  </span>
                  <span className="font-editorial text-[8px] sm:text-[10px] tracking-[0.25em] text-deep-olive uppercase block">
                    Engagement Ceremony
                  </span>
                </div>

                {/* Couple Names */}
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

                {/* Date & Location */}
                <div className="pb-0.5 border-t border-gold/30 pt-1.5 w-full">
                  <p className="font-editorial text-[10px] sm:text-xs tracking-wider text-charcoal font-semibold">
                    SATURDAY, 21 NOVEMBER 2026
                  </p>
                  <p className="text-[9px] sm:text-[11px] text-charcoal-light font-sans mt-0.5 leading-tight">
                    Royal Dine Restaurant &amp; Banquet, Surat
                  </p>
                </div>
              </motion.div>

              {/* Envelope Pocket (Front Face: Left, Right, Bottom Flaps) */}
              <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden rounded-lg">
                <div
                  className="absolute inset-0 bg-[#FAF6EE]"
                  style={{
                    clipPath: 'polygon(0 0, 48% 52%, 0 100%)',
                    filter: 'drop-shadow(2px 0 3px rgba(57,56,50,0.04))',
                  }}
                />

                <div
                  className="absolute inset-0 bg-[#F8F4EA]"
                  style={{
                    clipPath: 'polygon(100% 0, 52% 52%, 100% 100%)',
                    filter: 'drop-shadow(-2px 0 3px rgba(57,56,50,0.04))',
                  }}
                />

                <div
                  className="absolute inset-0 bg-[#FFFDF9] border-b border-gold/30"
                  style={{
                    clipPath: 'polygon(0 100%, 50% 48%, 100% 100%)',
                    filter: 'drop-shadow(0 -3px 4px rgba(57,56,50,0.05))',
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
                {/* Front of the triangular flap (visible when closed) */}
                <div
                  className="absolute inset-0 backface-hidden"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 50% 55%)',
                    backgroundColor: '#FCFAF5',
                    filter: 'drop-shadow(0 4px 6px rgba(57,56,50,0.08))',
                  }}
                >
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon
                      points="0,0 100,0 50,55"
                      fill="#FCFAF5"
                      stroke="#D9BD8A"
                      strokeWidth="0.6"
                    />
                  </svg>
                </div>

                {/* Back of the flap (revealed when flipped 180deg upwards) */}
                <div
                  className="absolute inset-0"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 50% 55%)',
                    backgroundColor: '#F5EFE4',
                    transform: 'rotateX(180deg)',
                    backfaceVisibility: 'hidden',
                  }}
                >
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon
                      points="0,0 100,0 50,55"
                      fill="#F5EFE4"
                      stroke="#D9BD8A"
                      strokeWidth="0.5"
                    />
                  </svg>
                </div>
              </motion.div>

              {/* Perfectly Centered Wax Seal Container (Guaranteed Horizontal & Vertical Dead-Center) */}
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
                      {/* Gentle gold pulse halo */}
                      <div className="absolute inset-0 rounded-full bg-gold/30 animate-ping opacity-50 scale-110 pointer-events-none" />

                      {/* UJ Monogram Logo as Wax Seal */}
                      <img
                        src={ujLogo}
                        alt="U & J Monogram Seal"
                        className="w-24 h-24 sm:w-28 sm:h-28 object-contain rounded-full drop-shadow-[0_6px_12px_rgba(57,56,50,0.35)] transition-transform duration-300 group-hover:scale-105 active:scale-95 block mx-auto"
                      />
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Action button with high touch-target on mobile */}
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
                className="w-full max-w-[280px] py-3.5 rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-pearl font-editorial text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase shadow-lg hover:shadow-xl transition-all duration-300 border border-gold-light/40 flex items-center justify-center gap-2 group cursor-pointer active:scale-95"
              >
                <span>OPEN INVITATION</span>
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
                  className="w-full py-2.5 rounded-full bg-pearl border border-gold/50 shadow-sm text-xs font-editorial uppercase tracking-[0.18em] text-gold-deep hover:text-charcoal transition-all active:scale-95 cursor-pointer"
                >
                  Enter Ceremony Details &rarr;
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
