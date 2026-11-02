import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import ujLogo from '../assets/uj-logo.png';

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
                fill="#D9B2AE"
                fillOpacity="0.85"
                stroke="#E8D2CF"
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
              className="drop-shadow-sm opacity-70"
            >
              <path
                d="M12 3C8 6 6 11 8 16C10 21 16 21 18 15C20 9 16 5 12 3Z"
                fill="#D9BD8A"
                fillOpacity="0.7"
                stroke="#F4E8D3"
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
              className="drop-shadow-sm opacity-60"
            >
              <path
                d="M3 12C9 7 15 7 21 12C15 17 9 17 3 12Z"
                fill="#A8B5A0"
                fillOpacity="0.6"
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
          fill="#A8B5A0"
          fillOpacity="0.25"
          stroke="#465448"
          strokeWidth="0.4"
          strokeOpacity="0.4"
        />
        <circle cx="4" cy="4" r="2.5" fill="#D9BD8A" />
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
        className="w-32 h-32 md:w-48 md:h-48 object-contain"
      />
    </div>
  );
}
