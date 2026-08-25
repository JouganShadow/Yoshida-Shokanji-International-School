/**
 * ============================================================================
 * NAVIGATION HEADER COMPONENT (Navbar.tsx)
 * ============================================================================
 * Updated for the Multi-Page Hash Router and Skillshare visual design:
 * - Links point to separate pages: Home, About, Academics, Campus, Contact.
 * - Live state-tracking highlights the active subpage with solid outline tags.
 * - Clean editorial border lines and precise branding alignment.
 * ============================================================================
 */

import React, { useState, useEffect } from 'react';
import { Shield, MapPin, Award, Users, Mail, Menu, X, Phone, GraduationCap, Sun, Moon } from 'lucide-react';
import { motion } from 'motion/react';
import { SchoolEmblem } from './ui/SchoolEmblem';
import { SplitTextButton } from './ui/SplitTextButton';
import { AdmissionsTickerBanner } from './ui/AdmissionsTickerBanner';
import { IrisStaggerTransition } from './ui/IrisStaggerTransition';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#/home');
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Curtains: Cover (Iris) -> Reveal (Stagger Wipe) Transition States
  const [transitionActive, setTransitionActive] = useState(false);
  const [transitionOrigin, setTransitionOrigin] = useState({ x: 0, y: 0 });
  const [transitionPhase, setTransitionPhase] = useState<'idle' | 'iris' | 'stagger'>('idle');

  useEffect(() => {
    // Default is light mode (white). Only enable dark mode if explicitly chosen by user and stored in localStorage.
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        setIsDarkMode(true);
        document.documentElement.classList.add('dark');
      } else {
        setIsDarkMode(false);
        document.documentElement.classList.remove('dark');
      }
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#/home');
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    
    // Initial check
    handleHashChange();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#/home', icon: Shield },
    { name: 'Principal', fullName: "Principal's Message", href: '#/principal', icon: GraduationCap },
    { name: 'About', fullName: 'About & Leaders', href: '#/about', icon: Users },
    { name: 'Academics', fullName: 'Academics & Wins', href: '#/academics', icon: Award },
    { name: 'Campus', fullName: 'Campus Facilities', href: '#/campus', icon: MapPin },
    { name: 'Contact', fullName: 'Admissions & Contact', href: '#/contact', icon: Mail },
  ];

  const isLinkActive = (href: string) => {
    if (href === '#/home' && (currentHash === '' || currentHash === '#' || currentHash === '#/home')) {
      return true;
    }
    return currentHash.startsWith(href);
  };

  const toggleDarkMode = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (transitionActive) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      if (isDarkMode) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        setIsDarkMode(false);
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        setIsDarkMode(true);
      }
      return;
    }

    // Capture button coordinate center as iris origin
    const rect = e.currentTarget.getBoundingClientRect();
    const originX = rect.left + rect.width / 2;
    const originY = rect.top + rect.height / 2;

    setTransitionOrigin({ x: originX, y: originY });
    setTransitionPhase('iris');
    setTransitionActive(true);

    // Phase 1: Iris cover fully envelopes screen at ~380ms -> switch theme -> trigger Reveal: Stagger wipe
    setTimeout(() => {
      if (isDarkMode) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        setIsDarkMode(false);
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        setIsDarkMode(true);
      }
      setTransitionPhase('stagger');
    }, 380);

    // Phase 2: Stagger wipe completes at ~860ms -> reset
    setTimeout(() => {
      setTransitionPhase('idle');
      setTransitionActive(false);
    }, 860);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-2 border-slate-950 ${
        scrolled
          ? 'bg-white shadow-md'
          : 'bg-[#FAF9F6]'
      }`}
    >
      <div className={`w-full max-w-[1500px] mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4 transition-all duration-300 ${
        scrolled ? 'py-2 sm:py-2.5' : 'py-2.5 sm:py-3.5'
      }`}>
        
        {/* 1. BRAND LOGO (Left side) */}
        <a 
          href="#/home" 
          onClick={(e) => {
            e.preventDefault();
            window.location.hash = '#/home';
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2 sm:gap-3 group shrink-0 min-w-0"
        >
          <div className="p-1 rounded-xl bg-white border-2 border-slate-950 group-hover:border-[#8B1538] transition-all group-hover:scale-105 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] shrink-0">
            <SchoolEmblem className="w-7 h-7 sm:w-9 sm:h-9 text-[#8B1538]" />
          </div>

          <div className="flex flex-col justify-center">
            <span className="font-sans font-black text-[11px] sm:text-sm lg:text-base tracking-tight text-slate-950 leading-tight group-hover:text-[#8B1538] transition-colors uppercase whitespace-nowrap">
              YOSHIDA SHOKANJI
            </span>
            <span className="font-sans font-extrabold text-[7px] sm:text-[9px] tracking-widest text-slate-600 uppercase leading-none mt-0.5 whitespace-nowrap">
              INTERNATIONAL SCHOOL
            </span>
          </div>
        </a>

        {/* 2. DESKTOP NAVIGATION LINKS (Pill styling) */}
        <nav className="hidden lg:flex items-center gap-1 bg-white px-2 py-1.5 rounded-xl border-2 border-slate-950 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] shrink-0">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const active = isLinkActive(link.href);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-black transition-all flex items-center gap-1.5 whitespace-nowrap border-2 ${
                  active
                    ? 'bg-[#8B1538] text-white border-slate-950 shadow-[1px_1px_0px_0px_rgba(15,23,42,1)]'
                    : 'text-slate-700 border-transparent hover:text-[#8B1538] hover:bg-rose-50'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${active ? 'text-white' : 'text-[#8B1538]'}`} />
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* 3. RIGHT CONTACT & ADMISSIONS */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          
          {/* Dark Mode Toggle with Motion+ Curtains (Iris -> Stagger Wipe) Effect */}
          <button
            onClick={toggleDarkMode}
            disabled={transitionActive}
            className="relative flex items-center justify-center p-2 rounded-xl bg-white border-2 border-slate-950 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] text-slate-950 hover:text-[#8B1538] hover:scale-105 active:scale-95 transition-all shrink-0 overflow-hidden group cursor-pointer disabled:opacity-80"
            aria-label="Toggle Dark Mode"
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            <motion.div
              key={isDarkMode ? 'dark-icon' : 'light-icon'}
              initial={{ rotate: -90, scale: 0.6, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4 text-amber-500 group-hover:rotate-45 transition-transform" />
              ) : (
                <Moon className="w-4 h-4 text-slate-900 group-hover:-rotate-12 transition-transform" />
              )}
            </motion.div>
          </button>

          {/* Admissions button redirects to #/contact page */}
          <div className="shrink-0">
            <SplitTextButton
              href="#/contact"
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = '#/contact';
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              text="Enroll Now"
              theme="maroon"
            />
          </div>

          {/* Mobile/Tablet toggle button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white border-2 border-slate-950 text-slate-950 hover:text-[#8B1538] transition-colors shrink-0 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* 4. MOBILE / TABLET NAVIGATION DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 mx-3 sm:mx-6 mb-2 p-4 rounded-xl bg-white border-2 border-slate-950 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] space-y-3 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isLinkActive(link.href);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-xs font-black transition-all flex items-center gap-3 border-2 ${
                    active
                      ? 'bg-[#8B1538] text-white border-slate-950'
                      : 'text-slate-800 border-slate-100 hover:bg-rose-50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${active ? 'text-white' : 'text-[#8B1538]'}`} />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-200 flex flex-col gap-2">
            <a
              href="tel:+94112401469"
              className="w-full py-2.5 text-center text-xs font-bold text-slate-800 bg-slate-50 rounded-lg border-2 border-slate-200 flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#8B1538]" />
              <span>Hotline: 011 2401469 / 077 1924546</span>
            </a>
          </div>
        </div>
      )}

      {/* 5. 10PX CONTINUOUS MAROON TICKER BANNER */}
      <AdmissionsTickerBanner />

      {/* 6. CURTAINS: MIXED EFFECTS DARK MODE TRANSITION (Cover: Iris -> Reveal: Stagger Wipe) */}
      <IrisStaggerTransition
        isActive={transitionActive}
        origin={transitionOrigin}
        phase={transitionPhase}
        curtainColor="#750E2A"
      />
    </header>
  );
};
