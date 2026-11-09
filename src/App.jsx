import React, { useState } from 'react';
import Navigation from './components/Navigation';
import WeddingOpening from './components/WeddingOpening';
import WeddingHero from './components/WeddingHero';
import CoupleGallery from './components/CoupleGallery';
import ScratchCardSection from './components/ScratchCardSection';
import WeddingTimeline from './components/WeddingTimeline';
import WeddingCountdown from './components/WeddingCountdown';
import FamilySection from './components/FamilySection';
import WeddingClosing from './components/WeddingClosing';
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
        <WeddingOpening
          isOpen={isInvitationOpen}
          onOpenComplete={handleOpenComplete}
          onReplay={handleReplayInvitation}
        />
      )}

      {/* Luxury Sticky Navigation Header */}
      <Navigation />

      {/* Main Page Scroll Flow */}
      <main className="relative w-full max-w-full overflow-x-hidden pt-12 sm:pt-16">
        {/* Section 1: Hero Wedding Announcement */}
        <WeddingHero />

        {/* Section 2: Interactive Scratch Card Experience */}
        <ScratchCardSection />

        {/* Section 3: Three-Day Celebration Timeline */}
        <WeddingTimeline />

        {/* Section 4: Our Beloved Family (Kolawala Family & Mosad Paksh) */}
        <FamilySection />

        {/* Section 5: Couple Photography Gallery */}
        <CoupleGallery />

        {/* Section 6: Live Wedding Countdown Timer */}
        <WeddingCountdown />

        {/* Section 7: Family Blessings & Closing */}
        <WeddingClosing onReplayInvitation={handleReplayInvitation} />
      </main>
    </div>
  );
}

export default App;
