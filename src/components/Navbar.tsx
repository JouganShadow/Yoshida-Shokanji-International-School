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
import { Shield, MapPin, Award, Users, Mail, Menu, X, Phone, GraduationCap } from 'lucide-react';
import { SchoolEmblem } from './ui/SchoolEmblem';
import { SplitTextButton } from './ui/SplitTextButton';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#/home');

  useEffect(() => {
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
    { name: "Principal's Message", href: '#/principal', icon: GraduationCap },
    { name: 'About & Leaders', href: '#/about', icon: Users },
    { name: 'Academics & Wins', href: '#/academics', icon: Award },
    { name: 'Campus Facilities', href: '#/campus', icon: MapPin },
    { name: 'Admissions & Contact', href: '#/contact', icon: Mail },
  ];

  const isLinkActive = (href: string) => {
    if (href === '#/home' && (currentHash === '' || currentHash === '#' || currentHash === '#/home')) {
      return true;
    }
    return currentHash.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-2 border-slate-950 ${
        scrolled
          ? 'py-2.5 bg-white shadow-md'
          : 'py-4 bg-[#FAF9F6]'
      }`}
    >
      <div className="w-full max-w-[1600px] 2xl:max-w-[1850px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between gap-4">
        
        {/* 1. BRAND LOGO (Left side) */}
        <a 
          href="#/home" 
          onClick={(e) => {
            e.preventDefault();
            window.location.hash = '#/home';
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 group shrink-0"
        >
          <div className="p-1 rounded-xl bg-white border-2 border-slate-950 group-hover:border-[#8B1538] transition-all group-hover:scale-105 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">
            <SchoolEmblem className="w-8 h-8 sm:w-10 sm:h-10 text-[#8B1538]" />
          </div>

          <div className="flex flex-col justify-center">
            <span className="font-sans font-black text-xs sm:text-base tracking-tight text-slate-950 leading-tight group-hover:text-[#8B1538] transition-colors uppercase whitespace-nowrap">
              YOSHIDA SHOKANJI
            </span>
            <span className="font-sans font-extrabold text-[8px] sm:text-[10px] tracking-widest text-slate-600 uppercase leading-none mt-0.5 whitespace-nowrap">
              INTERNATIONAL SCHOOL
            </span>
          </div>
        </a>

        {/* 2. DESKTOP NAVIGATION LINKS (Skillshare pill styling) */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-white px-2.5 py-1.5 rounded-xl border-2 border-slate-950 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] shrink-0">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const active = isLinkActive(link.href);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all flex items-center gap-1.5 whitespace-nowrap border-2 ${
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
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          {/* Quick Telephone */}
          <a
            href="tel:+94112401469"
            className="hidden sm:flex items-center gap-2 text-xs font-black text-slate-950 hover:text-[#8B1538] transition-colors bg-white px-3 py-1.5 rounded-xl border-2 border-slate-950 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 text-[#8B1538]" />
            <span>011 2400632</span>
          </a>

          {/* Admissions button redirects to #/contact page */}
          <div className="shrink -translate-x-[10px]">
            <SplitTextButton
              href="#/contact"
              text="Enroll Now"
              theme="maroon"
            />
          </div>

          {/* Mobile toggle with standard black outlines */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-white border-2 border-slate-950 text-slate-950 hover:text-[#8B1538] transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* 4. MOBILE NAVIGATION DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 mx-4 p-4 rounded-xl bg-white border-2 border-slate-950 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] space-y-3 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="grid grid-cols-1 gap-2">
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
    </header>
  );
};
