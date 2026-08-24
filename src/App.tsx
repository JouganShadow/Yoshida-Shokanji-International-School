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
import { LandingHeroSection } from './components/sections/LandingHeroSection';
import { ScrollTextLinesSection } from './components/sections/ScrollTextLinesSection';
import { StatsAndHeritageSection } from './components/sections/StatsAndHeritageSection';
import { PhilosophyQuoteSection } from './components/sections/PhilosophyQuoteSection';
import { PrincipalWelcomeSection } from './components/sections/PrincipalWelcomeSection';
import { PrincipalFullMessageSection } from './components/sections/PrincipalFullMessageSection';
import { LocationAndMapSection } from './components/sections/LocationAndMapSection';
import { AchievementsAndAwardsSection } from './components/sections/AchievementsAndAwardsSection';
import { ManagementAndAdvisorySection } from './components/sections/ManagementAndAdvisorySection';
import { CurriculumPathwaysSection } from './components/sections/CurriculumPathwaysSection';
import { CampusFacilitiesSection } from './components/sections/CampusFacilitiesSection';
import { AdmissionsAndContactSection } from './components/sections/AdmissionsAndContactSection';
import { SplitTextButton } from './components/ui/SplitTextButton';
import { IOSPointer } from './components/ui/IOSPointer';
import { BlindsCurtainTransition } from './components/ui/BlindsCurtainTransition';
import { PageSkeleton } from './components/ui/Skeleton';

import { Sparkles, ChevronRight, GraduationCap, Building, PhoneCall, Compass, Trophy, Users, Mail, Clock, MapPin } from 'lucide-react';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<'home' | 'about' | 'principal' | 'academics' | 'campus' | 'contact'>('home');
  const [isLoading, setIsLoading] = useState(false);

  // Sync route state with window.location.hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      let nextRoute: 'home' | 'about' | 'principal' | 'academics' | 'campus' | 'contact' = 'home';
      if (hash.startsWith('#/principal')) {
        nextRoute = 'principal';
      } else if (hash.startsWith('#/about') || hash.startsWith('#/management')) {
        nextRoute = 'about';
      } else if (hash.startsWith('#/academics') || hash.startsWith('#/achievements')) {
        nextRoute = 'academics';
      } else if (hash.startsWith('#/campus') || hash.startsWith('#/location') || hash.startsWith('#/facilities')) {
        nextRoute = 'campus';
      } else if (hash.startsWith('#/contact')) {
        nextRoute = 'contact';
      } else {
        nextRoute = 'home';
      }
      
      setCurrentRoute(nextRoute);

      // Brief smooth skeleton loader trigger on route change
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 300);

      // Smooth scroll to top on page navigation
      window.scrollTo({ top: 0, behavior: 'smooth' });

      return () => clearTimeout(timer);
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial trigger
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="relative min-h-screen text-slate-800 bg-[#FAF9F6] font-sans selection:bg-[#8B1538] selection:text-white overflow-x-hidden">
      {/* Custom iOS/iPadOS style elastic pointer (disabled inside Landing Hero) */}
      <IOSPointer />

      {/* Curtains: Blinds page transition on route change */}
      <BlindsCurtainTransition currentRoute={currentRoute} />

      {/* ------------------------------------------------------------------ */}
      {/* BACKGROUND: Clean editorial background with subtle accents        */}
      {/* ------------------------------------------------------------------ */}
      <div className="fixed inset-0 z-0 bg-[#FAF9F6] pointer-events-none" />

      {/* ------------------------------------------------------------------ */}
      {/* NAVIGATION: Sticky Navbar with hash navigation updates            */}
      {/* ------------------------------------------------------------------ */}
      <Navbar />

      {/* ------------------------------------------------------------------ */}
      {/* MAIN CONTENT PORT: Animated view switcher or Skeleton Loader      */}
      {/* ------------------------------------------------------------------ */}
      <main className="relative z-10 pt-20">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key={`skeleton-${currentRoute}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <PageSkeleton pageType={currentRoute} />
            </motion.div>
          ) : (
            <React.Fragment key={currentRoute}>
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
              <LandingHeroSection />

              {/* Parallax Scroll Text Lines (YOSHIDA • SHOKANJI • INTERNATIONAL) */}
              <ScrollTextLinesSection />

              {/* Quick High-Impact Key Metrics */}
              <StatsAndHeritageSection />

              {/* Nurturing Japanese Ethics and English Medium Quote Section */}
              <PhilosophyQuoteSection />

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
                          "Education is the shared commitment between home and school to unlock every child's highest potential." Join Principal Mrs. Buddhini Jayasundera as she introduces our academic mission.
                        </p>
                      </div>

                      <a
                        href="#/principal"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-slate-950 text-xs font-bold bg-white text-slate-950 hover:bg-[#8B1538] hover:text-white transition-all shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]"
                      >
                        <span>Read Principal's Message</span>
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

          {currentRoute === 'principal' && (
            <motion.div
              key="principal-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              <PrincipalFullMessageSection />
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
              <PrincipalWelcomeSection />

              {/* Management Team Profiles, Advisory Board & Bulletins */}
              <ManagementAndAdvisorySection />
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
              <CurriculumPathwaysSection />

              {/* Achievements: Karate, Swimming, Academic honors */}
              <AchievementsAndAwardsSection />
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
              {/* Shotokan Karate Dojo & Olympic Pool highlight blocks */}
              <CampusFacilitiesSection />
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

              {/* 4. 3D Glass Location Map & Distance Indicators */}
              <LocationAndMapSection />
            </motion.div>
          )}
          </React.Fragment>
        )}
        </AnimatePresence>
      </main>

      {/* ------------------------------------------------------------------ */}
      {/* FOOTER: Contact forms and campus directories on every view        */}
      {/* ------------------------------------------------------------------ */}
      <AdmissionsAndContactSection />
    </div>
  );
}
