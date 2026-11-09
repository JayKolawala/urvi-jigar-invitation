import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import ujLogo from '../assets/uj-logo-gold.png';

// Floating rose & gold petals component
export function FloatingPetals() {
  // Generate a small fixed array of petals to avoid excessive rendering
  const petals = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${(i * 7 + 4) % 96}%`,
      delay: i * 0.7,
      duration: 10 + (i % 6) * 2,
      size: 14 + (i % 4) * 5,
      type: i % 3 === 0 ? 'gold' : i % 3 === 1 ? 'rose' : 'sage',
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden select-none">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute -top-10"
          style={{ left: petal.left }}
          initial={{ y: -40, opacity: 0, rotate: 0 }}
          animate={{
            y: ['0vh', '108vh'],
            x: [0, 25, -20, 15, 0],
            rotate: [0, 180, 360],
            opacity: [0, 0.75, 0.8, 0.5, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {petal.type === 'rose' && (
            <svg
              width={petal.size}
              height={petal.size}
              viewBox="0 0 24 24"
              fill="none"
              className="drop-shadow-sm opacity-80"
            >
              <path
                d="M12 2C7 5 4 10 6 16C8 22 16 22 18 16C20 10 17 5 12 2Z"
                fill="#D98F82"
                fillOpacity="0.85"
                stroke="#E6A69B"
                strokeWidth="0.5"
              />
            </svg>
          )}
          {petal.type === 'gold' && (
            <svg
              width={petal.size * 0.9}
              height={petal.size * 0.9}
              viewBox="0 0 24 24"
              fill="none"
              className="drop-shadow-sm opacity-80"
            >
              <path
                d="M12 3C8 6 6 11 8 16C10 21 16 21 18 15C20 9 16 5 12 3Z"
                fill="#CBA14C"
                fillOpacity="0.85"
                stroke="#F4D48A"
                strokeWidth="0.5"
              />
            </svg>
          )}
          {petal.type === 'sage' && (
            <svg
              width={petal.size * 0.8}
              height={petal.size * 0.8}
              viewBox="0 0 24 24"
              fill="none"
              className="drop-shadow-sm opacity-70"
            >
              <path
                d="M3 12C9 7 15 7 21 12C15 17 9 17 3 12Z"
                fill="#2D7584"
                fillOpacity="0.75"
              />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  );
}

// Ornate Corner Ornament
export function BotanicalCorner({ position = 'top-left', className = '' }) {
  const rotationClass = {
    'top-left': 'rotate-0',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90',
  }[position] || 'rotate-0';

  return (
    <div className={`pointer-events-none select-none ${rotationClass} ${className}`}>
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" className="w-16 h-16 md:w-24 md:h-24 text-gold">
        {/* Subtle decorative corner lines */}
        <path d="M4 30 L4 4 L30 4" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6" fill="none" />
        <path d="M8 25 L8 8 L25 8" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.3" fill="none" />
        {/* Botanical leaf flourishes */}
        <path
          d="M4 4 C14 14, 25 20, 42 20 C25 25, 20 36, 4 4 Z"
          fill="currentColor"
          fillOpacity="0.15"
          stroke="currentColor"
          strokeWidth="0.6"
        />
        <path
          d="M12 12 C22 22, 35 25, 50 22 C38 30, 25 38, 12 12 Z"
          fill="#2D7584"
          fillOpacity="0.35"
          stroke="#CBA14C"
          strokeWidth="0.4"
          strokeOpacity="0.5"
        />
        <circle cx="4" cy="4" r="2.5" fill="#CBA14C" />
      </svg>
    </div>
  );
}

// Vintage Monogram Crest SVG (used in sections & fallback)
export function MonogramCrest({ className = '' }) {
  return (
    <div className={`inline-flex flex-col items-center justify-center ${className}`}>
      <img
        src={ujLogo}
        alt="U & J Monogram"
        className="w-32 h-32 md:w-48 md:h-48 object-contain drop-shadow-[0_4px_16px_rgba(203,161,76,0.35)]"
      />
    </div>
  );
}

// Tasteful Traditional Lord Ganesha Auspicious Motif
export function GaneshMotif({ className = 'w-10 h-10' }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Outer sacred circle */}
      <circle cx="50" cy="50" r="46" stroke="#CBA14C" strokeWidth="1.2" strokeDasharray="3 2" />
      <circle cx="50" cy="50" r="41" stroke="#CBA14C" strokeWidth="0.8" strokeOpacity="0.5" />
      
      {/* Crown / Mukut */}
      <path d="M42 24 L50 14 L58 24 Z" fill="#CBA14C" fillOpacity="0.4" stroke="#CBA14C" strokeWidth="1.2" />
      <circle cx="50" cy="18" r="2.5" fill="#F4D48A" />

      {/* Head & Trunk Silhouette */}
      <path
        d="M36 34 C36 27, 44 26, 50 26 C56 26, 64 27, 64 34 C64 42, 59 48, 54 53 C51 56, 51 64, 53 70 C54 73, 58 74, 60 71 C62 68, 62 65, 60 63"
        stroke="#CBA14C"
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      {/* Tilak / Trishul mark */}
      <path d="M47 31 L50 27 L53 31" stroke="#F4D48A" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="50" cy="34" r="1.5" fill="#D98F82" />

      {/* Ears */}
      <path d="M36 32 C27 34, 27 46, 36 48" stroke="#CBA14C" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M64 32 C73 34, 73 46, 64 48" stroke="#CBA14C" strokeWidth="1.8" strokeLinecap="round" />

      {/* Modak in Hand */}
      <circle cx="68" cy="56" r="3.5" fill="#F4D48A" stroke="#CBA14C" strokeWidth="1" />
    </svg>
  );
}

// Festive Marigold Blossom SVG
export function MarigoldFlower({ className = 'w-8 h-8' }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <g fill="#E5BF67" stroke="#B88A36" strokeWidth="0.5">
        <circle cx="30" cy="30" r="22" fillOpacity="0.25" />
        {/* Layered Petals */}
        <ellipse cx="30" cy="14" rx="6" ry="10" fillOpacity="0.8" />
        <ellipse cx="30" cy="46" rx="6" ry="10" fillOpacity="0.8" />
        <ellipse cx="14" cy="30" rx="10" ry="6" fillOpacity="0.8" />
        <ellipse cx="46" cy="30" rx="10" ry="6" fillOpacity="0.8" />
        <ellipse cx="18" cy="18" rx="7" ry="9" transform="rotate(-45 18 18)" fillOpacity="0.85" />
        <ellipse cx="42" cy="42" rx="7" ry="9" transform="rotate(-45 42 42)" fillOpacity="0.85" />
        <ellipse cx="42" cy="18" rx="7" ry="9" transform="rotate(45 42 18)" fillOpacity="0.85" />
        <ellipse cx="18" cy="42" rx="7" ry="9" transform="rotate(45 18 42)" fillOpacity="0.85" />
      </g>
      {/* Center Pistil */}
      <circle cx="30" cy="30" r="9" fill="#D98F82" />
      <circle cx="30" cy="30" r="5" fill="#F4D48A" />
    </svg>
  );
}
