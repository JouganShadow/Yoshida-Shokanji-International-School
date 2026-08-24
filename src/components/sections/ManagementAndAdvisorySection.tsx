/**
 * ============================================================================
 * MANAGEMENT & ANNOUNCEMENTS SECTION (components/sections/ManagementSection.tsx)
 * ============================================================================
 * Displays school leadership profiles and official announcements/notices.
 *
 * KEY COMPONENTS:
 * 1. Leadership Grid: Cards rendering `MANAGEMENT_MEMBERS` from `schoolData.ts`.
 * 2. Current Stuff / Notices Bulletin: Rendered from `SCHOOL_NOTICES`.
 * ============================================================================
 */

import React from 'react';
import { motion } from 'motion/react';
import { MANAGEMENT_MEMBERS, SCHOOL_NOTICES } from '../../data/schoolData';
import { Users, Bell, Quote, Calendar, ShieldCheck, ArrowUpRight, ChevronRight } from 'lucide-react';
import { ImageWithSkeleton, ManagementCardSkeleton, NoticeCardSkeleton } from '../ui/Skeleton';

/**
 * CardBlockReveal - A high-impact swipe curtain reveal for full component blocks.
 * A light gray block swipes across the entire card component as it enters viewport,
 * revealing the full management staff profile underneath.
 */
const CardBlockReveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  blockColor?: string;
  className?: string;
}> = ({ children, delay = 0, blockColor = 'bg-slate-200', className = '' }) => {
  return (
    <div className={`relative overflow-hidden rounded-3xl ${className}`}>
      {/* Revealed Management Staff Card Component */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.01, delay: delay + 0.38 }}
        className="h-full flex flex-col justify-between"
      >
        {children}
      </motion.div>

      {/* Light Gray Curtain Block Swiping Across */}
      <motion.div
        initial={{ left: '0%', width: '0%' }}
        whileInView={{
          left: ['0%', '0%', '100%'],
          width: ['0%', '100%', '0%'],
        }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{
          duration: 0.85,
          ease: [0.77, 0, 0.175, 1],
          delay: delay,
          times: [0, 0.45, 1],
        }}
        className={`absolute inset-y-0 ${blockColor} z-30 pointer-events-none rounded-3xl border border-slate-300/80 shadow-lg`}
      />
    </div>
  );
};

export const ManagementAndAdvisorySection: React.FC = () => {
  return (
    <section id="management" className="relative py-24 bg-transparent text-slate-900 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* ---------------------------------------------------------------- */}
        {/* 1. SECTION HEADER                                                */}
        {/* ---------------------------------------------------------------- */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-bold text-[#8B1538] uppercase tracking-widest flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-[#8B1538]/40" />
            <span>School Administration & Visionaries</span>
            <span className="w-8 h-px bg-[#8B1538]/40" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950">
            Guided by Visionary <span className="text-[#8B1538]">Academic Management</span>
          </h2>

          <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-medium">
            Our leadership brings decades of pioneering experience in international school administration, Cambridge curriculum accreditation, and character mentoring in Sri Lanka.
          </p>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* 2. MANAGEMENT LEADERSHIP PROFILES GRID                            */}
        {/* ---------------------------------------------------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {MANAGEMENT_MEMBERS.map((member, idx) => (
            <CardBlockReveal key={member.id} delay={idx * 0.15} blockColor="bg-slate-200">
              <div className="p-6 sm:p-8 rounded-3xl bg-white/85 border border-slate-200/90 backdrop-blur-xl shadow-xl hover:border-[#8B1538]/60 transition-all duration-300 flex flex-col justify-between h-full">
                <div className="space-y-6">
                  
                  {/* Header Profile Info */}
                  <div className="flex items-center gap-5">
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#8B1538] shrink-0 shadow-lg bg-slate-100 flex items-center justify-center">
                      <ImageWithSkeleton
                        src={member.imageUrl}
                        alt={member.name}
                        imgClassName="w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <span className="text-xs font-extrabold text-[#8B1538] uppercase tracking-wider block mb-1">
                        {member.role}
                      </span>
                      <h3 className="font-serif font-black text-lg sm:text-xl text-slate-950">
                        {member.name}
                      </h3>
                      <p className="text-xs text-slate-600 font-mono font-semibold mt-1">
                        {member.qualifications}
                      </p>
                    </div>
                  </div>

                  {/* Optional Quote Block */}
                  {member.quote && (
                    <div className="p-4 rounded-2xl bg-slate-100/90 border border-slate-200 text-xs italic text-slate-800 font-medium flex items-start gap-3">
                      <Quote className="w-5 h-5 text-[#8B1538] shrink-0 mt-0.5" />
                      <span>"{member.quote}"</span>
                    </div>
                  )}

                  {/* Biography Text */}
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {member.bio}
                  </p>

                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600 font-medium">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Yoshida Leadership Council</span>
                  </span>
                  <span className="font-mono text-[#8B1538] font-bold">Academic Board</span>
                </div>
              </div>
            </CardBlockReveal>
          ))}
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* 3. CURRENT STUFF & SCHOOL NOTICES BULLETIN                       */}
        {/* ---------------------------------------------------------------- */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white/85 border border-slate-200/90 backdrop-blur-xl shadow-2xl">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 border-b border-slate-200 pb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 border border-rose-200 flex items-center justify-center">
                <Bell className="w-6 h-6 text-[#8B1538]" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-2xl text-slate-950">
                  Current Stuff & School Notices
                </h3>
                <p className="text-xs text-slate-600 font-medium">
                  Stay updated with official academic schedules, term events, and admissions.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full bg-[#8B1538] hover:bg-[#a11b43] text-xs font-bold text-white transition-all flex items-center gap-2 shadow-md"
            >
              <span>Download Prospectus</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </a>
          </div>

          {/* Notices Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SCHOOL_NOTICES.map((notice) => (
              <div
                key={notice.id}
                className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                  notice.urgent
                    ? 'bg-rose-50/90 border-rose-300 shadow-md'
                    : 'bg-white border-slate-200 hover:border-[#8B1538]/50 shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span
                      className={`px-2.5 py-0.5 rounded-full font-bold text-[10px] uppercase ${
                        notice.urgent
                          ? 'bg-[#8B1538] text-white'
                          : 'bg-slate-200 text-slate-800'
                      }`}
                    >
                      {notice.category}
                    </span>
                    <span className="text-slate-600 font-mono text-[11px] font-semibold flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#8B1538]" />
                      {notice.date}
                    </span>
                  </div>

                  <h4 className="font-serif font-bold text-base text-slate-950 mb-2">
                    {notice.title}
                  </h4>

                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    {notice.summary}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                  <span className="text-slate-500 text-[11px] font-semibold">Official Bulletin</span>
                  <a
                    href="#contact"
                    className="text-[#8B1538] hover:text-slate-950 font-bold flex items-center gap-1 transition-colors"
                  >
                    <span>More Info</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
