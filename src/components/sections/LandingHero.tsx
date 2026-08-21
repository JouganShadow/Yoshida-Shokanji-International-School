/**
 * ============================================================================
 * LANDING HERO SECTION (components/sections/LandingHero.tsx)
 * ============================================================================
 * This is the primary landing hero banner component.
 *
 * KEY VISUAL & INTERACTIVE ELEMENTS:
 * 1. ShaderAnimation: 3D WebGL background shader (speed can be adjusted).
 * 2. CursorTrail: Interactive cursor particle trail.
 * 3. Academic Banner Tag: "Sapugaskanda Campus • 20+ Years..."
 * 4. SchoolLogoWheel: Rotating school emblem wheel that spins on scroll.
 * 5. Tagline & CTA Buttons: Direct links to explore stats or view interactive map.
 * 6. Scroll Down Indicator: Animated arrow leading to #stats.
 * ============================================================================
 */

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ShaderAnimation } from '../ui/shader-animation';
import { CursorTrail } from '../ui/CursorTrail';
import { SchoolLogoWheel } from '../ui/SchoolLogoWheel';
import { SplitTextButton } from '../ui/SplitTextButton';
import { ArrowDown, ShieldCheck } from 'lucide-react';

export const LandingHero: React.FC = () => {
  // Reference attached to hero section container
  const heroRef = useRef<HTMLDivElement | null>(null);

  /**
   * Scroll Animations setup using Motion/React:
   * As the user scrolls down from hero, the central emblem wheel gently rotates
   * and scales down slightly.
   */
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Wheel rotates as user scrolls down (e.g. 0 to 240 degrees)
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 240]);

  // Wheel scales slightly down as scroll begins (1 -> 0.75)
  const wheelScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.75]);

  // Wheel and tagline fade out as user approaches stats section
  const wheelOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-transparent text-slate-900 pt-20 pb-12"
    >
      {/* ------------------------------------------------------------------ */}
      {/* 1. 3D WEBGL SHADER ANIMATION BACKGROUND                           */}
      {/* Edit speed prop (e.g. 0.08) to speed up or slow down motion       */}
      {/* ------------------------------------------------------------------ */}
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-multiply pointer-events-none">
        <ShaderAnimation className="w-full h-full" speed={0.08} />
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* 2. INTERACTIVE CURSOR TRAIL                                        */}
      {/* Particle trail follows cursor inside hero section                  */}
      {/* ------------------------------------------------------------------ */}
      <CursorTrail containerRef={heroRef} />

      {/* ------------------------------------------------------------------ */}
      {/* 3. LIGHT RADIAL VIGNETTE OVERLAY                                   */}
      {/* ------------------------------------------------------------------ */}
      <div className="absolute inset-0 bg-radial from-transparent via-slate-100/10 to-slate-200/30 pointer-events-none z-10" />

      {/* ------------------------------------------------------------------ */}
      {/* 4. MAIN HERO CONTENT CONTAINER                                     */}
      {/* ------------------------------------------------------------------ */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center my-auto">
        
        {/* Academic Tag / Heritage Banner */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-2xl bg-white/90 border border-slate-300/90 backdrop-blur-xl text-slate-800 text-xs sm:text-sm font-semibold mb-6 shadow-md"
        >
          <ShieldCheck className="w-4 h-4 text-[#8B1538] shrink-0" />
          <span className="tracking-wide">Sapugaskanda Campus • 20+ Years of Character & Educational Distinction</span>
        </motion.div>

        {/* Central Rotating Wheel Logo & School Title Emblem */}
        <div className="my-2 sm:my-4">
          <SchoolLogoWheel rotation={rotation} scale={wheelScale} opacity={wheelOpacity} />
        </div>

        {/* Hero Description & Call-To-Action Buttons */}
        <motion.div
          style={{ opacity: wheelOpacity }}
          className="max-w-3xl mx-auto mt-4 space-y-4"
        >
          <p className="text-base sm:text-lg md:text-xl font-medium text-slate-800 tracking-wide leading-relaxed font-sans">
            Nurturing global leaders through <span className="text-slate-950 font-bold underline decoration-[#8B1538] decoration-2 underline-offset-4">Cambridge & National curricula</span>, world-class athletic dojos, and 20+ years of character excellence in Sapugaskanda.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <SplitTextButton
              href="#stats"
              text="Explore Heritage & Stats"
              theme="maroon"
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = '#/home';
                setTimeout(() => {
                  const statsEl = document.getElementById('stats');
                  if (statsEl) {
                    statsEl.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
            />

            <SplitTextButton
              href="#location"
              text="View Interactive Map"
              theme="dark"
            />
          </div>
        </motion.div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* 5. SCROLL DOWN INDICATOR                                           */}
      {/* Bouncing down arrow button that scrolls smoothly to #stats         */}
      {/* ------------------------------------------------------------------ */}
      <motion.div
        style={{ opacity: wheelOpacity }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-30 mt-8 flex flex-col items-center text-slate-700 text-xs font-mono tracking-widest uppercase cursor-pointer"
        onClick={() => {
          const statsEl = document.getElementById('stats');
          statsEl?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="mb-2 text-slate-600 font-bold text-[10px]">Scroll To Discover Stats</span>
        <div className="w-8 h-8 rounded-full border border-slate-300 bg-white/80 backdrop-blur-md flex items-center justify-center shadow-md hover:bg-white transition-all">
          <ArrowDown className="w-4 h-4 text-[#8B1538]" />
        </div>
      </motion.div>
    </section>
  );
};
