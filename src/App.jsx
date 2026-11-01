import React, { useState } from 'react';
import InvitationOpening from './components/InvitationOpening';
import HeroSection from './components/HeroSection';
import InvitationSection from './components/InvitationSection';
import Countdown from './components/Countdown';
import EventDetails from './components/EventDetails';
import ClosingSection from './components/ClosingSection';
import MusicToggle from './components/MusicToggle';
import { FloatingPetals } from './components/FloralDecorations';

function App() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);

  const handleOpenComplete = () => {
    setIsInvitationOpen(true);
  };

  const handleReplayInvitation = () => {
    setIsInvitationOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-paper text-charcoal selection:bg-rose-light selection:text-charcoal overflow-x-hidden w-full max-w-full">
      {/* Floating Petals gentle animation layer across the entire page */}
      <FloatingPetals />

      {/* Floating Music Toggle with romantic audio */}
      <MusicToggle />

      {/* Interactive Envelope Opening Sequence Overlay */}
      {!isInvitationOpen && (
        <InvitationOpening 
          isOpen={isInvitationOpen} 
          onOpenComplete={handleOpenComplete} 
          onReplay={handleReplayInvitation}
        />
      )}

      {/* Mobile-Optimized Luxury Sticky Header */}
      <header className="sticky top-0 z-30 w-full bg-pearl/90 backdrop-blur-md border-b border-gold/25 transition-all duration-300">
        <div className="max-w-5xl mx-auto px-3 sm:px-6 h-13 sm:h-16 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a 
            href="#hero" 
            className="flex items-center gap-1.5 group text-charcoal hover:text-gold-dark transition-colors py-1 shrink-0"
          >
            <span className="font-cormorant font-bold text-lg sm:text-2xl tracking-wide text-charcoal">
              U <span className="font-script text-gold-dark text-base sm:text-xl">&amp;</span> J
            </span>
          </a>

          {/* Quick Section Navigation Links */}
          <nav className="flex items-center gap-2 sm:gap-6 text-[10px] sm:text-xs font-editorial uppercase tracking-[0.12em] sm:tracking-[0.2em] text-charcoal-light font-medium">
            <a href="#hero" className="hover:text-gold-deep transition-colors py-1">
              Ceremony
            </a>
            <a href="#invitation" className="hover:text-gold-deep transition-colors py-1">
              Invitation
            </a>
            <a href="#countdown" className="hover:text-gold-deep transition-colors py-1">
              Countdown
            </a>
            <a href="#details" className="hover:text-gold-deep transition-colors py-1">
              Details
            </a>
          </nav>
        </div>
      </header>

      {/* Main Page Scroll Flow */}
      <main className="relative w-full max-w-full overflow-x-hidden">
        {/* Section 2: Hero Section */}
        <HeroSection />

        {/* Section 3: Our Special Invitation */}
        <InvitationSection />

        {/* Section 4: Live Countdown Timer */}
        <Countdown />

        {/* Section 5: Event Details & Directions */}
        <EventDetails />

        {/* Section 6: Closing & Family Blessings */}
        <ClosingSection onReplayInvitation={handleReplayInvitation} />
      </main>
    </div>
  );
}

export default App;
