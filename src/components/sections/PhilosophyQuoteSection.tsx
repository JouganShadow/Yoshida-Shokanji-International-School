/**
 * ============================================================================
 * IMPACT EDUCATIONAL QUOTE SECTION (components/sections/QuoteSection.tsx)
 * ============================================================================
 * High-impact mission statement section featuring line-by-line split-text reveal
 * animations with bold typography, central crest emblem, and glassmorphic card framing.
 * ============================================================================
 */

import React from 'react';
import { motion } from 'motion/react';
import { SchoolEmblem } from '../ui/SchoolEmblem';
import { Quote, Sparkles, GraduationCap } from 'lucide-react';
import { SplitTextButton } from '../ui/SplitTextButton';

/**
 * MaroonBlockReveal - A high-impact block curtain reveal component.
 * A maroon block swipes across the text line from left to right,
 * revealing the typography behind it as it exits.
 */
const MaroonBlockReveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
  blockColor?: string;
}> = ({ children, delay = 0, className = '', blockColor = 'bg-[#8B1538]' }) => {
  return (
    <div className={`relative inline-block overflow-hidden py-1 ${className}`}>
      {/* Revealed Text Content */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.01, delay: delay + 0.38 }}
        className="relative z-10"
      >
        {children}
      </motion.div>

      {/* Maroon Swipe Curtain Block */}
      <motion.div
        initial={{ left: '0%', width: '0%' }}
        whileInView={{
          left: ['0%', '0%', '100%'],
          width: ['0%', '100%', '0%'],
        }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{
          duration: 0.85,
          ease: [0.77, 0, 0.175, 1], // Custom cubic bezier for smooth velocity curve
          delay: delay,
          times: [0, 0.45, 1],
        }}
        className={`absolute inset-y-0 ${blockColor} z-20 pointer-events-none rounded-xs shadow-md`}
      />
    </div>
  );
};

export const PhilosophyQuoteSection: React.FC = () => {
  return (
    <section id="mission" className="relative py-20 bg-transparent text-slate-900 overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Glassmorphic Container Card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative rounded-3xl bg-white/85 border border-slate-200/90 p-8 sm:p-12 md:p-16 shadow-2xl backdrop-blur-2xl text-center space-y-8 overflow-hidden"
        >
          {/* Subtle Ambient Decorative Glows */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#8B1538]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 right-10 w-72 h-72 bg-rose-200/40 rounded-full blur-2xl pointer-events-none" />

          {/* 1. EMBLEM & CREST CENTERPIECE */}
          <div className="relative inline-flex flex-col items-center justify-center space-y-3">
            <div className="relative">
              {/* Outer Pulsing Ring */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-[#8B1538]/20 via-rose-300/30 to-[#8B1538]/20 blur-md animate-pulse" />
              
              {/* Central Emblem Badge */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white border-2 border-[#8B1538]/30 shadow-xl flex items-center justify-center p-3">
                <SchoolEmblem className="w-full h-full drop-shadow" />
              </div>

              {/* Floating Quote Badge */}
              <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-[#8B1538] text-white flex items-center justify-center shadow-md">
                <Quote className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* EYEBROW BADGE */}
            <div className="px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200/80 text-[11px] sm:text-xs font-mono font-extrabold text-[#8B1538] uppercase tracking-widest flex items-center gap-2 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#8B1538]" />
              <span>MISSION STATEMENT • YOSHIDA SHOKANJI</span>
              <GraduationCap className="w-3.5 h-3.5 text-[#8B1538]" />
            </div>
          </div>

          {/* 2. MAROON BLOCK SWIPE REVEAL MISSION STATEMENT */}
          <div className="space-y-6 max-w-4xl mx-auto">
            {/* Primary Heading Lines */}
            <div className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-950 leading-snug sm:leading-tight tracking-tight flex flex-col items-center space-y-2">
              
              <MaroonBlockReveal delay={0.1}>
                <span>
                  We are dedicated to the{' '}
                  <strong className="text-[#8B1538] font-black">individual development</strong>
                </span>
              </MaroonBlockReveal>

              <MaroonBlockReveal delay={0.25}>
                <span className="text-slate-900">
                  of attitudes, skills, knowledge and responsibility
                </span>
              </MaroonBlockReveal>

              <MaroonBlockReveal delay={0.4}>
                <span>
                  essential for{' '}
                  <strong className="text-[#8B1538] font-black underline decoration-rose-400/50 underline-offset-4">
                    successful achievement
                  </strong>{' '}
                  in school and society.
                </span>
              </MaroonBlockReveal>

            </div>

            {/* Sub-paragraph Lines */}
            <div className="text-slate-800 text-lg sm:text-xl md:text-2xl font-serif font-bold leading-relaxed max-w-3xl mx-auto flex flex-col items-center space-y-2 pt-2">
              
              <MaroonBlockReveal delay={0.55} blockColor="bg-[#A11B43]">
                <span>
                  Our aim is to provide a{' '}
                  <strong className="text-[#8B1538]">holistic learning environment</strong>
                </span>
              </MaroonBlockReveal>

              <MaroonBlockReveal delay={0.7} blockColor="bg-[#A11B43]">
                <span>
                  that <strong className="text-[#8B1538]">empowers children</strong> to reach their
                </span>
              </MaroonBlockReveal>

              <MaroonBlockReveal delay={0.85} blockColor="bg-[#8B1538]">
                <span>
                  <strong className="bg-gradient-to-r from-[#8B1538] via-rose-800 to-[#590e24] bg-clip-text text-transparent font-black">
                    educational, spiritual and personal potential
                  </strong>
                </span>
              </MaroonBlockReveal>

              <MaroonBlockReveal delay={1.0} blockColor="bg-[#8B1538]">
                <span>
                  while nurturing their <strong className="text-[#8B1538]">self-confidence</strong> and{' '}
                  <strong className="text-[#8B1538]">self-esteem</strong>.
                </span>
              </MaroonBlockReveal>

            </div>
          </div>

          {/* 3. CTA & SIGNATURE FOOTER */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-slate-200/80">
            <div className="text-left text-xs font-sans">
              <span className="block font-serif font-black text-slate-950 text-sm sm:text-base">
                Yoshida Shokanji International School
              </span>
              <span className="text-slate-600 font-mono font-semibold">
                Sapugaskanda Campus • Colombo Suburbs
              </span>
            </div>

            <div className="hidden sm:block w-px h-8 bg-slate-200 mx-2" />

            <SplitTextButton
              href="#/contact"
              text="Join Our Legacy"
              theme="maroon"
            />
          </div>

        </motion.div>

      </div>
    </section>
  );
};

