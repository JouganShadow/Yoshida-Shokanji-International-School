/**
 * ============================================================================
 * ACHIEVEMENTS & CO-CURRICULAR SECTION (components/sections/AchievementsSection.tsx)
 * ============================================================================
 * Displays filterable cards for sports, academic, cultural, and leadership awards.
 *
 * KEY FEATURES:
 * 1. Category Filter Chips: All, Sports, Academic, Cultural, Leadership.
 * 2. Animated Card Grid: Uses Framer Motion / Motion `AnimatePresence`.
 * 3. Spotlight Modal: Clicking "View Highlights" pops open a detailed modal.
 * ============================================================================
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ACHIEVEMENTS } from '../../data/schoolData';
import { AchievementItem } from '../../types';
import { Trophy, Award, Filter, X, ChevronRight } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  // State for active category filter ('All', 'Sports', 'Academic', 'Cultural', 'Leadership')
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // State for selected achievement item to display in modal
  const [selectedAchievement, setSelectedAchievement] = useState<AchievementItem | null>(null);

  // Available categories list
  const categories = ['All', 'Sports', 'Academic', 'Cultural', 'Leadership'];

  // Filter items based on selected category chip
  const filteredAchievements =
    activeCategory === 'All'
      ? ACHIEVEMENTS
      : ACHIEVEMENTS.filter((item) => item.category === activeCategory);

  return (
    <section id="achievements" className="relative py-24 bg-transparent text-slate-900 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* ---------------------------------------------------------------- */}
        {/* 1. SECTION HEADER                                                */}
        {/* ---------------------------------------------------------------- */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="text-xs font-bold text-[#8B1538] uppercase tracking-widest flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-[#8B1538]/40" />
            <span>Co-Curricular & Student Success</span>
            <span className="w-8 h-px bg-[#8B1538]/40" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950">
            Honoring Champion <span className="text-[#8B1538]">Talent & Sportsmanship</span>
          </h2>

          <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-sans font-medium">
            Yoshida Shokanji International School provides dedicated training and platforms in Shotokan Karate, Olympic Swimming, Cambridge Academic Contests, Japanese Cultural Exchange, and Scouting.
          </p>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* 2. CATEGORY FILTER CHIPS                                         */}
        {/* ---------------------------------------------------------------- */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#8B1538] text-white shadow-lg scale-105 border border-[#8B1538]'
                    : 'bg-white/80 text-slate-800 border border-slate-200/90 backdrop-blur-xl hover:border-[#8B1538] hover:text-[#8B1538] shadow-sm'
                }`}
              >
                {cat === 'All' && <Filter className="w-3.5 h-3.5" />}
                {cat === 'Sports' && <Trophy className="w-3.5 h-3.5" />}
                {cat === 'Academic' && <Award className="w-3.5 h-3.5" />}
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* 3. ACHIEVEMENTS CARD GRID                                        */}
        {/* ---------------------------------------------------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredAchievements.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative rounded-3xl bg-white/85 backdrop-blur-xl border border-slate-200/90 overflow-hidden shadow-xl hover:border-[#8B1538]/60 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Image & Badge Container */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-95 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  {/* Category Tag */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-[11px] font-bold text-slate-900 shadow-md">
                    {item.category} • {item.year}
                  </div>

                  {/* Highlight Stats Tag */}
                  <div className="absolute bottom-4 left-4 px-3 py-1 rounded-xl bg-[#8B1538] backdrop-blur-md border border-rose-300/40 text-xs font-bold text-white shadow-lg flex items-center gap-1.5">
                    <Trophy className="w-3.5 h-3.5 text-rose-200" />
                    <span>{item.statsTag}</span>
                  </div>
                </div>

                {/* Card Text Content */}
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif font-bold text-lg text-slate-950 group-hover:text-[#8B1538] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-700 mt-2 line-clamp-3 leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                    <span className="text-[11px] text-slate-600 font-mono font-semibold">
                      Yoshida Co-Curricular
                    </span>
                    <button
                      onClick={() => setSelectedAchievement(item)}
                      className="inline-flex items-center gap-1 text-xs font-extrabold text-[#8B1538] hover:text-slate-950 transition-colors"
                    >
                      <span>View Highlights</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* 4. ACHIEVEMENT SPOTLIGHT MODAL                                   */}
        {/* Rendered when an achievement item is clicked                     */}
        {/* ---------------------------------------------------------------- */}
        <AnimatePresence>
          {selectedAchievement && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-2xl rounded-3xl bg-white border border-slate-200 backdrop-blur-2xl overflow-hidden shadow-2xl text-slate-900"
              >
                {/* Modal Close Button */}
                <button
                  onClick={() => setSelectedAchievement(null)}
                  className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-900/60 hover:bg-[#8B1538] text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="relative h-64 w-full">
                  <img
                    src={selectedAchievement.imageUrl}
                    alt={selectedAchievement.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <span className="px-3.5 py-1.5 rounded-full bg-[#8B1538] text-white font-bold text-xs shadow-md">
                      {selectedAchievement.statsTag}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-600">
                    <span>{selectedAchievement.category} Category</span>
                    <span>•</span>
                    <span>{selectedAchievement.year}</span>
                  </div>

                  <h3 className="font-serif font-black text-2xl text-slate-950">
                    {selectedAchievement.title}
                  </h3>

                  <p className="text-sm text-slate-700 font-medium leading-relaxed">
                    {selectedAchievement.description}
                  </p>

                  <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 text-xs text-slate-800 font-medium flex items-center justify-between">
                    <span>🏆 Coach & Mentorship Director: Sports Department</span>
                    <span className="text-[#8B1538] font-bold">Verified Achievement</span>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      onClick={() => setSelectedAchievement(null)}
                      className="px-6 py-2.5 rounded-full bg-[#8B1538] hover:bg-[#a11b43] text-white text-xs font-bold transition-all shadow-md"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
