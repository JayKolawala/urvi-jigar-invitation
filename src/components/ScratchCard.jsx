import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ScratchCard({
  dayNumber,
  dayTitle,
  dateString,
  themeColor = 'gold',
  children,
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const isDrawingRef = useRef(false);
  const isRevealedRef = useRef(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [scratchPercent, setScratchPercent] = useState(0);

  // Initialize canvas with luxury burnished gold / ornate foil texture
  const initCanvas = useCallback(() => {
    // If already revealed, do not re-cover under any circumstances
    if (isRevealedRef.current) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const width = container.offsetWidth;
    const height = container.offsetHeight;
    if (width === 0 || height === 0) return;

    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    // Reset composite operation
    ctx.globalCompositeOperation = 'source-over';

    // Base background: Royal burnished gold gradient
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#CBA14C');
    gradient.addColorStop(0.3, '#E5BF67');
    gradient.addColorStop(0.6, '#B88A36');
    gradient.addColorStop(1, '#9E7428');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Subtle jali / geometric ornamental texture pattern
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.16)';
    ctx.lineWidth = 1;
    const step = 24;
    for (let x = -width; x < width * 2; x += step) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x + height, height);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(x, height);
      ctx.lineTo(x + height, 0);
      ctx.stroke();
    }

    // Gilded inner decorative frame
    ctx.strokeStyle = 'rgba(255, 253, 248, 0.45)';
    ctx.lineWidth = 2;
    ctx.strokeRect(10, 10, width - 20, height - 20);

    ctx.strokeStyle = 'rgba(255, 253, 248, 0.25)';
    ctx.lineWidth = 1;
    ctx.strokeRect(14, 14, width - 28, height - 28);

    // Center Ornamental Badge
    const cx = width / 2;
    const cy = height / 2 - 15;

    ctx.fillStyle = '#0E242B';
    ctx.beginPath();
    ctx.arc(cx, cy, 38, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#CBA14C';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Sparkle icon / text inside badge
    ctx.font = 'bold 18px Georgia, serif';
    ctx.fillStyle = '#F4D48A';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('✨', cx, cy - 2);

    // Scratch Prompt Text
    ctx.font = '600 12px "DM Sans", sans-serif';
    ctx.fillStyle = '#0B1E24';
    ctx.letterSpacing = '2px';
    ctx.fillText('SCRATCH TO REVEAL', cx, cy + 62);

    ctx.font = '400 10px "DM Sans", sans-serif';
    ctx.fillStyle = '#2A1D07';
    ctx.fillText('Touch or drag across the card', cx, cy + 80);
  }, []);

  useEffect(() => {
    initCanvas();

    const handleResize = () => {
      // Never re-cover if already scratched/revealed
      if (!isRevealedRef.current) {
        initCanvas();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [initCanvas]);

  const lastPosRef = useRef(null);

  // Scratch Action Handler with smooth continuous strokes
  const scratch = (clientX, clientY) => {
    if (isRevealedRef.current || isRevealed) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.globalCompositeOperation = 'destination-out';

    if (lastPosRef.current) {
      ctx.beginPath();
      ctx.moveTo(lastPosRef.current.x, lastPosRef.current.y);
      ctx.lineTo(x, y);
      ctx.lineWidth = 44;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.stroke();
    } else {
      ctx.beginPath();
      ctx.arc(x, y, 22, 0, Math.PI * 2);
      ctx.fill();
    }

    lastPosRef.current = { x, y };
    checkScratchProgress();
  };

  // Check progress: when 40% is scratched, automatically reveal whole card!
  const checkScratchProgress = () => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealedRef.current || isRevealed) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    if (width === 0 || height === 0) return;

    // Sample every 8th pixel to keep performance butter-smooth on mobile
    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;
    let transparentPixels = 0;
    const totalSampled = data.length / 32;

    for (let i = 3; i < data.length; i += 32) {
      if (data[i] === 0) {
        transparentPixels++;
      }
    }

    const percent = Math.round((transparentPixels / totalSampled) * 100);
    setScratchPercent(Math.min(100, percent));

    // When scratched for 40%, automatically and completely reveal the card
    if (percent >= 40) {
      revealFull();
    }
  };

  // Automatically clear the entire remaining cover and trigger celebration
  const revealFull = () => {
    if (isRevealedRef.current) return;
    isRevealedRef.current = true;
    setIsRevealed(true);
    setScratchPercent(100);

    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }

    try {
      confetti({
        particleCount: 40,
        spread: 65,
        origin: { y: 0.65 },
        colors: ['#CBA14C', '#F4D48A', '#2D7584', '#FFFDF9'],
        disableForReducedMotion: true,
      });
    } catch {
      // safe fallback
    }
  };

  // Mouse Events
  const handleMouseDown = (e) => {
    if (isRevealedRef.current || isRevealed) return;
    isDrawingRef.current = true;
    lastPosRef.current = null;
    scratch(e.clientX, e.clientY);
  };

  const handleMouseMove = (e) => {
    if (!isDrawingRef.current || isRevealedRef.current || isRevealed) return;
    scratch(e.clientX, e.clientY);
  };

  const handleMouseUp = () => {
    isDrawingRef.current = false;
    lastPosRef.current = null;
  };

  // Touch Events for Mobile
  const handleTouchStart = (e) => {
    if (isRevealedRef.current || isRevealed) return;
    isDrawingRef.current = true;
    lastPosRef.current = null;
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      scratch(touch.clientX, touch.clientY);
    }
  };

  const handleTouchMove = (e) => {
    if (!isDrawingRef.current || isRevealedRef.current || isRevealed) return;
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      scratch(touch.clientX, touch.clientY);
    }
  };

  const handleTouchEnd = () => {
    isDrawingRef.current = false;
    lastPosRef.current = null;
  };

  return (
    <div className="relative flex flex-col items-center w-full max-w-sm mx-auto">
      {/* Outer Luxury Card Shell */}
      <div
        ref={containerRef}
        className="relative w-full min-h-[360px] sm:min-h-[380px] rounded-2xl bg-pearl-light border-2 border-gold/40 shadow-luxury overflow-hidden flex flex-col justify-between"
      >
        {/* Hidden Reveal Content Underneath Canvas */}
        <div className="relative z-10 w-full h-full p-5 sm:p-6 flex flex-col justify-between text-center select-none">
          {/* Card Day Header */}
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-gold/25">
              <span className="font-editorial text-[10px] tracking-[0.25em] uppercase text-gold-deep font-bold">
                {dayTitle}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-gold/15 border border-gold/40 text-[9px] font-editorial uppercase tracking-wider text-gold-light">
                {dateString}
              </span>
            </div>

            {/* Revealed Festive Content */}
            <div className="py-4 flex flex-col items-center">{children}</div>
          </div>

          {/* Reveal Status Tag */}
          <div className="pt-3 border-t border-gold/20 flex items-center justify-between text-[10px] text-charcoal-muted font-sans">
            <span className="flex items-center gap-1.5 text-gold-light font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-gold-dark" />
              <span>Festivity Unlocked!</span>
            </span>
            <span className="font-editorial text-[9px] tracking-widest uppercase text-gold-deep/80">
              Revealed
            </span>
          </div>
        </div>

        {/* HTML Canvas Scratchable Cover Layer */}
        <canvas
          ref={canvasRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className={`absolute inset-0 z-20 w-full h-full cursor-crosshair touch-none transition-opacity duration-500 ${
            isRevealed ? 'pointer-events-none opacity-0 invisible' : 'opacity-100 visible'
          }`}
          aria-label={`Interactive scratch card for ${dayTitle}. Drag or touch to scratch and reveal the events.`}
        />
      </div>

      {/* Progress pill below card */}
      <div className="mt-3 flex items-center gap-2">
        {!isRevealed ? (
          <span className="font-editorial text-[10px] tracking-[0.2em] uppercase text-charcoal-muted">
            Scratched: <strong className="text-gold-light">{scratchPercent}%</strong>
          </span>
        ) : (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pearl-muted border border-gold/40 text-gold-deep text-[10px] font-editorial uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3 h-3 text-gold-dark" />
            <span>Celebration Unlocked</span>
          </div>
        )}
      </div>
    </div>
  );
}
