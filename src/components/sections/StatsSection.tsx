/**
 * ============================================================================
 * STATS & HERITAGE SECTION (components/sections/StatsSection.tsx)
 * ============================================================================
 * Displays key statistical achievements and metrics for the school.
 *
 * KEY FEATURES & COMPONENTS:
 * 1. Section Header: Title, subtitle, and badge highlighting 20+ years culture.
 * 2. StatCounterCards: High-impact animated numerical counters (F1 counter effect).
 * 3. Secondary Metric Grid: Displays remaining statistics from `SCHOOL_STATS`.
 * 4. Triple Curriculum Synergy Banner: Overview of Cambridge, Pearson & National streams.
 * ============================================================================
 */

import React from 'react';
import { motion } from 'motion/react';
import { SCHOOL_STATS } from '../../data/schoolData';
import { StatCounterCard } from '../ui/StatCounterCard';
import { SplitTextButton } from '../ui/SplitTextButton';
import { Award, Trophy, Users, GraduationCap, UserCheck, Activity, Sparkles, CheckCircle2 } from 'lucide-react';

export const StatsSection: React.FC = () => {
  /**
   * Helper function to return Lucide icon component based on string icon name
   */
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-8 h-8 text-[#8B1538]" />;
      case 'Trophy':
        return <Trophy className="w-8 h-8 text-[#8B1538]" />;
      case 'Users':
        return <Users className="w-8 h-8 text-slate-700" />;
      case 'GraduationCap':
        return <GraduationCap className="w-8 h-8 text-slate-700" />;
      case 'UserCheck':
        return <UserCheck className="w-8 h-8 text-slate-700" />;
      case 'Activity':
        return <Activity className="w-8 h-8 text-slate-700" />;
      default:
        return <Sparkles className="w-8 h-8 text-[#8B1538]" />;
    }
  };

  return (
    <section id="stats" className="relative py-24 bg-transparent text-slate-900 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* ---------------------------------------------------------------- */}
        {/* 1. SECTION HEADER                                                */}
        {/* ---------------------------------------------------------------- */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-bold text-[#8B1538] uppercase tracking-widest flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-[#8B1538]/40" />
            <span>Academic Excellence & Heritage</span>
            <span className="w-8 h-px bg-[#8B1538]/40" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            20+ Years of Shaping <span className="text-[#8B1538]">Global World Champions</span>
          </h2>

          <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-sans font-medium">
            From Cambridge Outstanding Learner Awards to national aquatic and karate championships, Yoshida Shokanji International School blends academic distinction with Japanese character discipline in Sapugaskanda.
          </p>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* 2. PRIMARY ANIMATED STATS GRID (Top 3 Counters)                  */}
        {/* Uses StatCounterCard for animated count-up numbers               */}
        {/* ---------------------------------------------------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: 20+ Years Culture */}
          <StatCounterCard
            numericValue={25}
            suffix="+"
            label="Years Rich Culture & Tradition"
            description="Established with a vision to combine Japanese cultural harmony, moral integrity, and modern international pedagogy in Sapugaskanda."
            icon={Award}
            watermarkIcon={Award}
            delay={0}
          />

          {/* Card 2: 2 World Wins */}
          <StatCounterCard
            numericValue={2}
            suffix=" World Wins"
            label="Cambridge Learner Awards"
            description="Proving world-class academic supremacy by producing student candidates ranked Top in the World — featuring 2 World Wins in French and Computer Science."
            icon={Trophy}
            watermarkIcon={Trophy}
            delay={0.1}
          />

          {/* Card 3: 1,000+ Students */}
          <StatCounterCard
            numericValue={1000}
            suffix="+"
            label="Thriving Students"
            description="A vibrant community of learners from Playgroup to Advanced Level, flourishing in an inclusive, safe, and motivating campus."
            icon={Users}
            watermarkIcon={Users}
            delay={0.3}
          />

        </div>

        {/* ---------------------------------------------------------------- */}
        {/* 3. SECONDARY METRICS HIGHLIGHTS GRID                              */}
        {/* Displays remaining stats from schoolData.ts                      */}
        {/* ---------------------------------------------------------------- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {SCHOOL_STATS.slice(3).map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-5 rounded-2xl bg-white/80 backdrop-blur-xl border border-slate-200/90 shadow-lg hover:border-[#8B1538]/50 transition-all flex flex-col items-start"
            >
              <div className="mb-3">{getIcon(stat.iconName)}</div>
              <div className="font-serif font-extrabold text-2xl sm:text-3xl text-slate-950 mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-extrabold text-[#8B1538] uppercase tracking-wider mb-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-700 leading-snug font-medium">
                {stat.subtitle}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* 4. SCHOOL CURRICULUM SYNERGY BANNER                              */}
        {/* ---------------------------------------------------------------- */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-white/85 backdrop-blur-xl border border-slate-200/90 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-rose-100 border border-rose-200 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6 text-[#8B1538]" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-slate-950 text-base sm:text-lg">
                Triple Curriculum Synergy
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 font-medium">
                Offering Cambridge Assessment International, Pearson Edexcel & Sri Lanka National Examinations.
              </p>
            </div>
          </div>
          <SplitTextButton
            href="#contact"
            text="Join Us"
            theme="maroon"
            className="shrink-0"
          />
        </div>

      </div>
    </section>
  );
};
