import React, { useState, useEffect, useRef } from 'react';
import { Music } from 'lucide-react';

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const loopIntervalRef = useRef(null);
  const userMutedRef = useRef(false);
  const audioStartedRef = useRef(false); // tracks if audio has actually started

  // Soft romantic harp/bell pentatonic progression (D major / B minor romantic frequencies)
  const notes = [
    293.66, // D4
    369.99, // F#4
    440.00, // A4
    587.33, // D5
    659.25, // E5
    739.99, // F#5
    880.00, // A5
  ];

  // Procedural gentle romantic harp/bell chime synthesis
  const playChime = (freq, time, duration = 2.5) => {
    if (!audioCtxRef.current || audioCtxRef.current.state !== 'running') return;
    const ctx = audioCtxRef.current;
    
    // Main chime oscillator
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    // Warm harmonic overtone
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, time);

    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(freq * 2, time);

    // Exponential decay for soft acoustic harp/bell feel
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(0.12, time + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    gain2.gain.setValueAtTime(0.0001, time);
    gain2.gain.exponentialRampToValueAtTime(0.03, time + 0.03);
    gain2.gain.exponentialRampToValueAtTime(0.0001, time + (duration * 0.7));

    osc.connect(gain);
    osc2.connect(gain2);
    gain.connect(ctx.destination);
    gain2.connect(ctx.destination);

    osc.start(time);
    osc2.start(time);
    osc.stop(time + duration);
    osc2.stop(time + duration);
  };

  const scheduleMelody = () => {
    if (!audioCtxRef.current) return;
    const ctx = audioCtxRef.current;
    const now = ctx.currentTime;
    
    // Romantic arpeggio sequence
    const sequence = [
      { note: notes[0], delay: 0.0 }, // D4
      { note: notes[1], delay: 0.6 }, // F#4
      { note: notes[2], delay: 1.2 }, // A4
      { note: notes[3], delay: 1.8 }, // D5
      { note: notes[5], delay: 2.6 }, // F#5
      { note: notes[4], delay: 3.4 }, // E5
      { note: notes[2], delay: 4.2 }, // A4
      { note: notes[1], delay: 5.0 }, // F#4
    ];

    sequence.forEach(({ note, delay }) => {
      playChime(note, now + delay, 3.0);
    });
  };

  const startPlaying = async () => {
    if (userMutedRef.current) return;
    try {
      if (!audioCtxRef.current) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        audioCtxRef.current = new AudioContextClass();
      }
      if (audioCtxRef.current.state === 'suspended') {
        await audioCtxRef.current.resume();
      }
      if (audioCtxRef.current.state === 'running' && !loopIntervalRef.current) {
        scheduleMelody();
        loopIntervalRef.current = setInterval(() => {
          scheduleMelody();
        }, 6200);
        audioStartedRef.current = true;
        setIsPlaying(true);
      }
    } catch {
      // Audio autoplay policy will be satisfied on first user interaction
    }
  };

  const toggleMusic = async () => {
    // If audio hasn't actually started yet (blocked by browser autoplay policy),
    // treat first button tap as "start" not "stop"
    if (!audioStartedRef.current) {
      userMutedRef.current = false;
      await startPlaying();
      return;
    }
    if (isPlaying) {
      userMutedRef.current = true;
      if (loopIntervalRef.current) {
        clearInterval(loopIntervalRef.current);
        loopIntervalRef.current = null;
      }
      if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
        await audioCtxRef.current.suspend();
      }
      setIsPlaying(false);
    } else {
      userMutedRef.current = false;
      await startPlaying();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    // Attempt automatic playback on mount
    startPlaying();

    // Auto-unlock on first user gesture (scroll, touch) if browser blocked initial autoplay
    // Note: button clicks are handled by toggleMusic directly, so exclude them
    const unlockOnGesture = (e) => {
      if (e.target?.closest('button')) return; // let button handle its own click
      if (!userMutedRef.current) {
        startPlaying();
      }
      cleanupListeners();
    };

    const cleanupListeners = () => {
      window.removeEventListener('click', unlockOnGesture);
      window.removeEventListener('touchstart', unlockOnGesture);
      window.removeEventListener('scroll', unlockOnGesture);
    };

    window.addEventListener('click', unlockOnGesture, { passive: true });
    window.addEventListener('touchstart', unlockOnGesture, { passive: true });
    window.addEventListener('scroll', unlockOnGesture, { passive: true });

    return () => {
      cleanupListeners();
      if (loopIntervalRef.current) {
        clearInterval(loopIntervalRef.current);
      }
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40">
      <button
        onClick={toggleMusic}
        type="button"
        aria-label={isPlaying ? "Mute romantic background melody" : "Play romantic background melody"}
        className="group flex items-center gap-2 px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-full bg-pearl/95 backdrop-blur-md border border-gold/40 shadow-luxury hover:shadow-luxury-hover hover:border-gold transition-all duration-300 text-charcoal active:scale-95 cursor-pointer"
      >
        {isPlaying ? (
          <>
            {/* Animated Equalizer Bars */}
            <div className="flex items-end gap-[3px] h-3.5 w-3.5">
              <span className="w-[2.5px] bg-gold-dark rounded-full eq-bar-1"></span>
              <span className="w-[2.5px] bg-rose-dark rounded-full eq-bar-2"></span>
              <span className="w-[2.5px] bg-gold-dark rounded-full eq-bar-3"></span>
              <span className="w-[2.5px] bg-rose rounded-full eq-bar-4"></span>
            </div>
            <span className="text-[11px] sm:text-xs font-sans font-medium tracking-wider text-charcoal uppercase">
              Melody On
            </span>
          </>
        ) : (
          <>
            <div className="relative">
              <Music className="w-3.5 h-3.5 text-gold-dark group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-[11px] sm:text-xs font-sans font-medium tracking-wider text-charcoal/80 uppercase">
              Play Music
            </span>
          </>
        )}
      </button>
    </div>
  );
}
