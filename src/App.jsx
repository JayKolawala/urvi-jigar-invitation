import React, { useState } from 'react';
import ujLogo from './assets/uj-logo-gold.png';
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
    <div className="relative min-h-screen bg-paper text-charcoal selection:bg-gold/30 selection:text-white overflow-x-hidden w-full max-w-full">
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

      {/* Luxury Sticky Header - Centered Logo Only */}
      <header className="sticky top-0 z-30 w-full bg-pearl-dark/90 backdrop-blur-md border-b border-gold/30 transition-all duration-300">
        <div className="max-w-5xl mx-auto h-12 sm:h-14 flex items-center justify-center">
          <a
            href="#hero"
            className="flex items-center justify-center group py-1"
          >
            <img
              src={ujLogo}
              alt="Urvi & Jigar Monogram"
              className="h-9 sm:h-10 w-auto object-contain drop-shadow-[0_2px_8px_rgba(203,161,76,0.4)] transition-transform duration-300 group-hover:scale-105"
            />
          </a>
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
