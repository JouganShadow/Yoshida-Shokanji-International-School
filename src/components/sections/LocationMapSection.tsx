/**
 * ============================================================================
 * LOCATION & MAP SECTION (components/sections/LocationMapSection.tsx)
 * ============================================================================
 * Showcases the Sapugaskanda campus location and surrounding suburb access.
 *
 * KEY FEATURES & COMPONENTS:
 * 1. Embedded Google Map iframe: Precise coordinates for Yoshida School.
 * 2. Dropping Pin Animation: Spring-animated pin that drops on viewport scroll.
 * 3. 20-Minute Residential Corridor: Pills displaying surrounding towns, times, & distances.
 * 4. GPS Coordinates & Quick Map Link: Direct button to open Google Maps app/browser.
 * ============================================================================
 */

import React from 'react';
import { motion } from 'motion/react';
import { RESIDENTIAL_AREAS } from '../../data/schoolData';
import { MapPin, Clock, Car, ExternalLink } from 'lucide-react';

export const LocationMapSection: React.FC = () => {
  /**
   * Exact Google Maps embed URL targeting Yoshida Shokanji International School campus
   * Coordinates: 6.96876281276733, 79.95855983462086
   */
  const YOSHIDA_MAP_EMBED_URL =
    'https://maps.google.com/maps?q=6.96876281276733,79.95855983462086&z=17&output=embed';

  return (
    <section id="location" className="relative py-24 bg-transparent text-slate-900 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* ---------------------------------------------------------------- */}
        {/* 1. SECTION HEADER                                                */}
        {/* ---------------------------------------------------------------- */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-bold text-[#8B1538] uppercase tracking-widest flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-[#8B1538]/40" />
            <span>Prime Sapugaskanda Campus Location</span>
            <span className="w-8 h-px bg-[#8B1538]/40" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950">
            Accessible Within <span className="text-[#8B1538] font-sans">20 Minutes</span> From Major Suburbs
          </h2>

          <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-medium">
            Situated in a tranquil, eco-friendly environment at Sapugaskanda, Yoshida Shokanji International School is conveniently reachable from Colombo’s primary residential zones.
          </p>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* 2. 3D GLASS TABLE & EMBEDDED MAP CONTAINER                      */}
        {/* ---------------------------------------------------------------- */}
        <div className="max-w-5xl mx-auto space-y-8">
          
          <div className="relative group">
            
            {/* 3D Perspective Glass Frame */}
            <motion.div
              initial={{ opacity: 0, rotateX: 12, y: 40 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="relative rounded-3xl bg-white/80 border border-slate-200/90 p-3 sm:p-5 shadow-2xl backdrop-blur-2xl"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Glass Table Rim Highlight */}
              <div className="absolute inset-0 rounded-3xl border border-white/80 pointer-events-none" />

              {/* Embedded Interactive Map Card */}
              <div className="relative w-full h-[400px] sm:h-[480px] rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100">
                
                {/* Embedded Live Google Map View */}
                <iframe
                  title="Yoshida International School Map"
                  src={YOSHIDA_MAP_EMBED_URL}
                  className="w-full h-full grayscale-[10%] contrast-[105%] opacity-90 hover:opacity-100 transition-opacity pointer-events-none"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Translucent Glass Map Controls Overlay */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <div className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-xs font-mono font-semibold text-slate-800 flex items-center gap-2 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>GPS: 6.96876° N, 79.95856° E</span>
                  </div>
                  <div className="px-3 py-1.5 rounded-full bg-[#8B1538] backdrop-blur-md border border-[#8B1538] text-xs font-bold text-white shadow-md">
                    Sapugaskanda Main Campus
                  </div>
                </div>

                {/* Glassy Table Base Platform Reflection */}
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-white via-white/90 to-transparent flex items-center justify-between text-xs">
                  <span className="text-slate-900 font-semibold flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#8B1538] shrink-0" />
                    <span>Sapugaskanda Road, Makola / Kelaniya, Sri Lanka</span>
                  </span>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=6.96876281276733,79.95855983462086"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-[#8B1538] hover:bg-[#a11b43] text-white font-bold transition-colors flex items-center gap-1.5 pointer-events-auto shadow-md"
                  >
                    <span>Open Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </motion.div>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* 3. RESIDENTIAL SUBURBS & COMMUTE TIMES CORRIDOR                  */}
          {/* ---------------------------------------------------------------- */}
          <div className="p-7 sm:p-8 rounded-3xl bg-white/85 border border-slate-200/90 backdrop-blur-xl shadow-xl">
            <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-200">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-rose-100 border border-rose-200 flex items-center justify-center shrink-0">
                  <Car className="w-5.5 h-5.5 text-[#8B1538]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-slate-950">
                    Within 20 Minutes From Key Residential Suburbs
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium mt-0.5">
                    Convenient school van access across all major surrounding townships
                  </p>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-xs sm:text-sm text-slate-800 font-mono font-bold bg-slate-100 px-3.5 py-1.5 rounded-full border border-slate-200">
                <Clock className="w-4 h-4 text-[#8B1538]" />
                <span>Rapid Access Radius</span>
              </div>
            </div>

            {/* Suburb Area Pills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3.5 sm:gap-4">
              {RESIDENTIAL_AREAS.map((area) => (
                <div
                  key={area.name}
                  className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200 hover:border-[#8B1538] hover:bg-rose-50/50 transition-all text-center flex flex-col items-center justify-center shadow-sm hover:scale-[1.02]"
                >
                  <span className="text-sm font-bold text-slate-900 mb-1">{area.name}</span>
                  <span className="text-xs font-mono font-bold text-[#8B1538]">{area.timeMinutes} mins</span>
                  <span className="text-[11px] text-slate-600 font-mono font-semibold mt-0.5">({area.distanceKm})</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
