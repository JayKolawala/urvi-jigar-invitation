import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Heart, Sparkles, Clock, Image, Users } from 'lucide-react';
import ujLogo from '../assets/uj-logo-gold.png';

const navLinks = [
  { href: '#hero', label: 'Home', icon: Heart },
  { href: '#surprises', label: 'Surprises', icon: Sparkles },
  { href: '#celebrations', label: 'Celebrations', icon: Calendar },
  { href: '#family', label: 'Family', icon: Users },
  { href: '#gallery', label: 'Gallery', icon: Image },
  { href: '#countdown', label: 'Countdown', icon: Clock },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // 1. If at top of the page, activate home
      if (window.scrollY < 120) {
        setActiveSection('hero');
        return;
      }

      // 2. If at bottom of the page, activate countdown
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80) {
        setActiveSection(navLinks[navLinks.length - 1].href.substring(1));
        return;
      }

      // 3. Scan sections from bottom to top using getBoundingClientRect
      const triggerThreshold = window.innerHeight * 0.35;

      for (let i = navLinks.length - 1; i >= 0; i--) {
        const id = navLinks[i].href.substring(1);
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerThreshold) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const id = href.substring(1);
    setActiveSection(id);
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 64;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${scrolled
          ? 'bg-pearl-dark/95 backdrop-blur-md border-b border-gold/30 shadow-[0_8px_30px_rgba(3,10,12,0.6)] py-2 sm:py-2.5'
          : 'bg-pearl-dark/75 backdrop-blur-sm border-b border-gold/15 py-3 sm:py-3.5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Monogram */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2.5 group py-1"
            aria-label="Urvi & Jigar Wedding - Go to top"
          >
            <img
              src={ujLogo}
              alt="U & J Monogram"
              className="h-11 sm:h-10 w-auto object-contain drop-shadow-[0_2px_8px_rgba(203,161,76,0.4)] transition-transform duration-300 group-hover:scale-105"
            />
            <div className="hidden sm:flex flex-col text-left">
              <span className="font-cormorant text-base lg:text-lg text-charcoal font-semibold tracking-wide leading-none">
                Urvi <span className="font-script text-gold-dark text-lg">&amp;</span> Jigar
              </span>
              <span className="font-editorial text-[9px] tracking-[0.25em] uppercase text-gold-deep mt-0.5">
                The Wedding
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-full font-editorial text-xs tracking-[0.18em] uppercase transition-all duration-300 ${isActive
                    ? 'text-gold-light bg-gold/15 border border-gold/50 shadow-sm'
                    : 'text-charcoal-light hover:text-gold-light hover:bg-gold/10'
                    }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Quick Date Tag & Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <span className="hidden xl:inline-block px-3 py-1 rounded-full border border-gold/30 bg-pearl-muted text-[10px] tracking-[0.2em] uppercase font-editorial text-gold-deep">
              31 Jan – 2 Feb 2027
            </span>

            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="md:hidden p-2 rounded-full border border-gold/40 bg-pearl-muted text-gold-dark hover:text-gold-light hover:border-gold transition-colors focus:outline-none"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-[80%] max-w-xs bg-pearl-dark border-l border-gold/30 shadow-2xl p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div>
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-5 border-b border-gold/20">
            <div className="flex items-center gap-2">
              <img src={ujLogo} alt="U & J Monogram" className="h-8 w-auto object-contain" />
              <div className="flex flex-col">
                <span className="font-cormorant text-base text-charcoal font-semibold">Urvi &amp; Jigar</span>
                <span className="font-editorial text-[8px] tracking-[0.2em] text-gold-deep uppercase">Wedding</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full border border-gold/30 text-gold-dark hover:text-gold-light"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-2 mt-6">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-editorial text-xs tracking-[0.2em] uppercase transition-all duration-200 ${isActive
                    ? 'text-gold-light bg-gold/20 border border-gold/60 font-semibold'
                    : 'text-charcoal-light hover:text-gold-light hover:bg-gold/10'
                    }`}
                >
                  <Icon className="w-4 h-4 text-gold-dark" />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </nav>
        </div>

        {/* Drawer Footer */}
        <div className="pt-6 border-t border-gold/20 text-center">
          <p className="font-editorial text-[9px] tracking-[0.22em] uppercase text-gold-deep">
            31 January – 2 February 2027
          </p>
          <p className="font-cormorant italic text-xs text-charcoal-muted mt-1">
            &ldquo;Two hearts, one lifetime.&rdquo;
          </p>
        </div>
      </div>
    </>
  );
}

