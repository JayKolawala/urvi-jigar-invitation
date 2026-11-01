import React from 'react';
import { motion } from 'framer-motion';

export default function SectionDivider({ className = '' }) {
  return (
    <div className={`flex items-center justify-center my-8 md:my-12 px-6 ${className}`}>
      {/* Left gold hairline */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="h-[1px] w-16 md:w-32 bg-gradient-to-r from-transparent via-gold to-gold-dark origin-right"
      />

      {/* Center Botanical Floral Emblem */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mx-3 flex items-center gap-1.5 text-gold-dark"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-gold">
          <path 
            d="M12 2C12 2 13.5 7 17 8C20.5 9 22 12 22 12C22 12 17 13.5 16 17C15 20.5 12 22 12 22C12 22 10.5 17 7 16C3.5 15 2 12 2 12C2 12 7 10.5 8 7C9 3.5 12 2 12 2Z" 
            fill="currentColor" 
            fillOpacity="0.25"
            stroke="currentColor" 
            strokeWidth="0.8"
          />
          <circle cx="12" cy="12" r="2.5" fill="#D9BD8A" />
        </svg>
      </motion.div>

      {/* Right gold hairline */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="h-[1px] w-16 md:w-32 bg-gradient-to-l from-transparent via-gold to-gold-dark origin-left"
      />
    </div>
  );
}
