/**
 * ============================================================================
 * MAIN APPLICATION CONTAINER (App.tsx) - MULTI-PAGE IMPLEMENTATION
 * ============================================================================
 * Redesigned to support a robust client-side Hash Router matching premium
 * editorial Skillshare UI style:
 * - Crisp, high-contrast borders and block-shadowed cards (Skillshare aesthetic).
 * - Smooth motion transitions between distinct views.
 * - Flat, elegant, solid-filled badges and category menus.
 * 
 * PAGES SUPPORTED:
 * 1. 'home': Landing Hero, Key Metrics, Quote Section, and curated Highlights.
 * 2. 'about': Principal's Desk Welcome and School Management Profiles & Notices.
 * 3. 'academics': Premium Class-style course syllabi, and Filterable Achievements.
 * 4. 'campus': 3D glass interactive map, commute paths, and Facilities Dojo & Pool.
 * 5. 'contact': Admissions inquiries, department hotline numbers, and desk hours.
 * ============================================================================
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { LandingHero } from './components/sections/LandingHero';
import { StatsSection } from './components/sections/StatsSection';
import { QuoteSection } from './components/sections/QuoteSection';
import { PrincipalSection } from './components/sections/PrincipalSection';
import { LocationMapSection } from './components/sections/LocationMapSection';
import { AchievementsSection } from './components/sections/AchievementsSection';
import { ManagementSection } from './components/sections/ManagementSection';
import { AcademicsSection } from './components/sections/AcademicsSection';
import { FacilitiesSection } from './components/sections/FacilitiesSection';
import { ContactFooter } from './components/sections/ContactFooter';
import { SplitTextButton } from './components/ui/SplitTextButton';

import { Sparkles, ChevronRight, GraduationCap, Building, PhoneCall, Compass, Trophy, Users, Mail, Clock, MapPin } from 'lucide-react';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<'home' | 'about' | 'academics' | 'campus' | 'contact'>('home');

  // Sync route state with window.location.hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/about') || hash.startsWith('#/principal') || hash.startsWith('#/management')) {
        setCurrentRoute('about');
      } else if (hash.startsWith('#/academics') || hash.startsWith('#/achievements')) {
        setCurrentRoute('academics');
      } else if (hash.startsWith('#/campus') || hash.startsWith('#/location') || hash.startsWith('#/facilities')) {
        setCurrentRoute('campus');
      } else if (hash.startsWith('#/contact')) {
        setCurrentRoute('contact');
      } else {
        setCurrentRoute('home');
      }
      
      // Smooth scroll to top on page navigation
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial trigger
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="relative min-h-screen text-slate-800 bg-[#FAF9F6] font-sans selection:bg-[#8B1538] selection:text-white overflow-x-hidden">
      {/* ------------------------------------------------------------------ */}
      {/* BACKGROUND: Clean editorial background with subtle accents        */}
      {/* ------------------------------------------------------------------ */}
      <div className="fixed inset-0 z-0 bg-[#FAF9F6] pointer-events-none" />

      {/* ------------------------------------------------------------------ */}
      {/* NAVIGATION: Sticky Navbar with hash navigation updates            */}
      {/* ------------------------------------------------------------------ */}
      <Navbar />

      {/* ------------------------------------------------------------------ */}
      {/* MAIN CONTENT PORT: Animated view switcher                        */}
      {/* ------------------------------------------------------------------ */}
      <main className="relative z-10 pt-20">
        <AnimatePresence mode="wait">
          {currentRoute === 'home' && (
            <motion.div
              key="home-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-0"
            >
              {/* Landing Hero Screen with 3D shader wheel */}
              <LandingHero />

              {/* Quick High-Impact Key Metrics */}
              <StatsSection />

              {/* Nurturing Japanese Ethics and English Medium Quote Section */}
              <QuoteSection />

              {/* CURATED HIGHLIGHTS PORTAL (Skillshare-style 2-Column Promo) */}
              <section className="py-20 bg-white border-t-2 border-b-2 border-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
                    <span className="text-[11px] font-mono font-extrabold text-[#8B1538] uppercase tracking-widest block">
                      • ACADEMIC CHANNELS •
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl font-black text-slate-950">
                      Learn & Excel: <span className="text-[#8B1538]">Yoshida Highlights</span>
                    </h2>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-semibold">
                      Explore the key pillars of our campus culture, from academic excellence to cultural character.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Left Promo Card: Principal's Desk */}
                    <div className="bg-white border-2 border-slate-950 rounded-2xl p-8 sm:p-10 shadow-[6px_6px_0px_0px_rgba(139,21,56,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(139,21,56,1)] transition-all flex flex-col justify-between items-start space-y-6">
                      <div className="space-y-3">
                        <div className="w-12 h-12 rounded-xl bg-rose-100 text-[#8B1538] flex items-center justify-center border-2 border-slate-950">
                          <GraduationCap className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-mono font-extrabold text-slate-500 uppercase tracking-widest block">
                          MEET THE LEADERSHIP
                        </span>
                        <h3 className="font-serif font-black text-xl sm:text-2xl text-slate-950 leading-tight">
                          Message from the <span className="text-[#8B1538]">Principal's Desk</span>
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                          "At Yoshida, education is not merely the transmission of knowledge; it is the ignition of curiosity, character, and lifelong leadership." Join Mrs. Jeewana Hewawastham as she introduces our academic mission.
                        </p>
                      </div>

                      <a
                        href="#/about"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-slate-950 text-xs font-bold bg-white text-slate-950 hover:bg-[#8B1538] hover:text-white transition-all shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]"
                      >
                        <span>Read Welcoming Message</span>
                        <ChevronRight className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Right Promo Card: Course Syllabi */}
                    <div className="bg-white border-2 border-slate-950 rounded-2xl p-8 sm:p-10 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] transition-all flex flex-col justify-between items-start space-y-6">
                      <div className="space-y-3">
                        <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#8B1538] flex items-center justify-center border-2 border-slate-950">
                          <Building className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-mono font-extrabold text-slate-500 uppercase tracking-widest block">
                          CAMBRIDGE & JAPANESE
                        </span>
                        <h3 className="font-serif font-black text-xl sm:text-2xl text-slate-950 leading-tight">
                          Explore Our <span className="text-[#8B1538]">Curriculum Pathways</span>
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                          From Pre-School Montessori and Cambridge Primary to rigorous Advanced Levels and JLPT Japanese cultural electives. Discover how we support your child’s educational potential.
                        </p>
                      </div>

                      <a
                        href="#/academics"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-slate-950 text-xs font-bold bg-slate-950 text-white hover:bg-[#8B1538] transition-all shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]"
                      >
                        <span>View Class Catalog</span>
                        <ChevronRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {currentRoute === 'about' && (
            <motion.div
              key="about-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-0"
            >
              {/* Big Featured section for Principal's Desk, experience tag & speech */}
              <PrincipalSection />

              {/* Management Team Profiles, Advisory Board & Bulletins */}
              <ManagementSection />
            </motion.div>
          )}

          {currentRoute === 'academics' && (
            <motion.div
              key="academics-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="py-12 space-y-12"
            >
              {/* Premium Skillshare style course listing */}
              <AcademicsSection />

              {/* Achievements: Karate, Swimming, Academic honors */}
              <AchievementsSection />
            </motion.div>
          )}

          {currentRoute === 'campus' && (
            <motion.div
              key="campus-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="py-12 space-y-12"
            >
              {/* 3D glass location map & distance indicators */}
              <LocationMapSection />

              {/* Shotokan Karate Dojo & Olympic Pool highlight blocks */}
              <FacilitiesSection />
            </motion.div>
          )}

          {currentRoute === 'contact' && (
            <motion.div
              key="contact-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16"
            >
              {/* 1. SECTION INTRO */}
              <div className="text-center max-w-3xl mx-auto space-y-3">
                <span className="text-[10px] font-mono font-extrabold text-[#8B1538] uppercase tracking-widest block">
                  • DIRECT CONNECTION HUB •
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-slate-950">
                  Admissions Center & <span className="text-[#8B1538]">Office Directory</span>
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-semibold">
                  Get in touch with our administrative staff, book an in-person campus tour, or register your online inquiry directly.
                </p>
              </div>

              {/* 2. SKILLSHARE-STYLE KEY DIRECTORY BOARD */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Department Block 1 */}
                <div className="bg-white border-2 border-slate-950 rounded-2xl p-6 shadow-[4px_4px_0px_0px_rgba(139,21,56,1)] flex flex-col justify-between space-y-4">
                  <div className="space-y-2 text-left">
                    <div className="w-10 h-10 rounded-lg bg-rose-100 border border-slate-200 text-[#8B1538] flex items-center justify-center shrink-0">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif font-black text-lg text-slate-950">Admissions Desk</h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      For fee structures, registration requirements, transfer syllabi, and age limit guidelines.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 space-y-2 text-xs font-semibold text-slate-800 text-left">
                    <div className="flex items-center gap-2">
                      <PhoneCall className="w-4 h-4 text-[#8B1538]" />
                      <span>077 1924546 / 076 4609804</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#8B1538]" />
                      <span className="text-slate-950">info@yoshida.edu.lk</span>
                    </div>
                  </div>
                </div>

                {/* Department Block 2 */}
                <div className="bg-white border-2 border-slate-950 rounded-2xl p-6 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] flex flex-col justify-between space-y-4">
                  <div className="space-y-2 text-left">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 text-[#8B1538] flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif font-black text-lg text-slate-950">General Administration</h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      For general school certifications, document requests, term schedules, and school shuttle service questions.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 space-y-2 text-xs font-semibold text-slate-800 text-left">
                    <div className="flex items-center gap-2">
                      <PhoneCall className="w-4 h-4 text-[#8B1538]" />
                      <span>011 2401469 / 011 2400632</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#8B1538]" />
                      <span className="text-slate-950">yoshida1950@sltnet.lk</span>
                    </div>
                  </div>
                </div>

                {/* Department Block 3 */}
                <div className="bg-white border-2 border-slate-950 rounded-2xl p-6 shadow-[4px_4px_0px_0px_rgba(139,21,56,1)] flex flex-col justify-between space-y-4">
                  <div className="space-y-2 text-left">
                    <div className="w-10 h-10 rounded-lg bg-rose-100 border border-slate-200 text-[#8B1538] flex items-center justify-center shrink-0">
                      <Compass className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif font-black text-lg text-slate-950">Sports & Athletics</h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      For athletic squad schedules, dojo practices, swimming pool reservations, and tournament logistics.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 space-y-2 text-xs font-semibold text-slate-800 text-left">
                    <div className="flex items-center gap-2">
                      <PhoneCall className="w-4 h-4 text-[#8B1538]" />
                      <span>011 2401469 (Ext. Sports)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#8B1538]" />
                      <span className="text-slate-950">info@yoshida.edu.lk</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. VISUAL DEPT TIMINGS BANNER */}
              <div className="border-2 border-slate-950 rounded-2xl p-6 bg-[#8B1538] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[5px_5px_0px_0px_rgba(15,23,42,1)]">
                <div className="flex items-center gap-4 text-left">
                  <div className="w-11 h-11 bg-white/10 rounded-xl border border-white/20 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-amber-300" />
                  </div>
                  <div>
                    <h4 className="font-serif font-black text-sm">Administrative Working Hours</h4>
                    <p className="text-[11px] text-rose-100 font-medium">Nursery to AL desk operates Monday to Friday.</p>
                  </div>
                </div>
                <div className="text-xs font-mono font-bold bg-white/10 px-4 py-2 rounded-lg border border-white/20">
                  Mon - Fri: 7:30 AM - 3:30 PM | Sat: 8:30 AM - 12:30 PM (Admissions Only)
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* ------------------------------------------------------------------ */}
      {/* FOOTER: Contact forms and campus directories on every view        */}
      {/* ------------------------------------------------------------------ */}
      <ContactFooter />
    </div>
  );
}
