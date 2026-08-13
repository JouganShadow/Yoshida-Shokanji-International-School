/**
 * ============================================================================
 * ROTATING EMBLEM WHEEL COMPONENT (ui/SchoolLogoWheel.tsx)
 * ============================================================================
 * An interactive hero element consisting of:
 * 1. An outer SVG gear wheel that rotates as the user scrolls down the page.
 * 2. A central glassmorphic badge displaying the school name, emblem, location,
 *    and establishment year.
 * ============================================================================
 */

import React from 'react';
import { motion, MotionValue } from 'motion/react';
import { SchoolEmblem } from './SchoolEmblem';

interface SchoolLogoWheelProps {
  rotation: MotionValue<number>; // MotionValue driving wheel rotation (degrees)
  scale?: MotionValue<number>;   // MotionValue driving wheel scale
  opacity?: MotionValue<number>; // MotionValue driving wheel opacity fade
}

export const SchoolLogoWheel: React.FC<SchoolLogoWheelProps> = ({ rotation, scale, opacity }) => {
  return (
    <div className="relative flex items-center justify-center p-4">
      
      {/* ------------------------------------------------------------------ */}
      {/* 1. OUTER ROTATING WHEEL STRUCTURE (SVG)                           */}
      {/* ------------------------------------------------------------------ */}
      <motion.div
        style={{ rotate: rotation, scale, opacity }}
        className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[480px] md:h-[480px] flex items-center justify-center select-none"
      >
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full"
        >
          <defs>
            {/* Slate & Maroon Gradients */}
            <linearGradient id="maroonSlateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B1538" />
              <stop offset="50%" stopColor="#64748B" />
              <stop offset="100%" stopColor="#94A3B8" />
            </linearGradient>

            <linearGradient id="wheelRimGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#64748B" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#8B1538" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#CBD5E1" stopOpacity="0.9" />
            </linearGradient>
          </defs>

          {/* Outer Tooth Gear Rim (24 teeth) */}
          <g transform="translate(250,250)">
            {Array.from({ length: 24 }).map((_, i) => {
              const angle = (i * 360) / 24;
              return (
                <rect
                  key={i}
                  x="-7"
                  y="-238"
                  width="14"
                  height="22"
                  rx="4"
                  fill="#450303"
                  transform={`rotate(${angle})`}
                />
              );
            })}
          </g>

          {/* Outer Ring */}
          <circle
            cx="250"
            cy="250"
            r="220"
            fill="none"
            stroke="#450303"
            strokeWidth="6"
            strokeDasharray="12 6"
          />

          {/* Inner Accent Ring */}
          <circle
            cx="250"
            cy="250"
            r="200"
            fill="none"
            stroke="#450303"
            strokeWidth="2"
            strokeOpacity="0.7"
          />

          {/* 12 Wheel Spokes */}
          <g transform="translate(250,250)">
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i * 360) / 12;
              return (
                <line
                  key={i}
                  x1="0"
                  y1="-110"
                  x2="0"
                  y2="-200"
                  stroke="#450303"
                  strokeWidth="4"
                  transform={`rotate(${angle})`}
                />
              );
            })}
          </g>

          {/* Concentric Decorative Pattern Ring */}
          <circle
            cx="250"
            cy="250"
            r="160"
            fill="rgba(69, 3, 3, 0.2)"
            stroke="#450303"
            strokeWidth="3"
            strokeDasharray="4 8"
          />

          {/* Academic Crest Emblem Dots around hub */}
          <g transform="translate(250,250)">
            {Array.from({ length: 8 }).map((_, i) => {
              const angle = (i * 360) / 8;
              const rad = (angle * Math.PI) / 180;
              const cx = 130 * Math.cos(rad);
              const cy = 130 * Math.sin(rad);
              return (
                <circle
                  key={i}
                  cx={cx}
                  cy={cy}
                  r="6"
                  fill="#450303"
                />
              );
            })}
          </g>
        </svg>
      </motion.div>

      {/* ------------------------------------------------------------------ */}
      {/* 2. CENTRAL GLASS BADGE (Static Overlay)                            */}
      {/* ------------------------------------------------------------------ */}
      <motion.div
        style={{ opacity, scale }}
        className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center pointer-events-none z-10"
      >
        <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-white/70 via-white/45 to-white/30 backdrop-blur-xl border-2 border-white/90 shadow-[0_20px_50px_rgba(0,0,0,0.15),inset_0_1px_3px_rgba(255,255,255,1),inset_0_-2px_6px_rgba(0,0,0,0.08)] ring-1 ring-slate-400/20 flex flex-col items-center justify-center p-4 sm:p-6 transition-all duration-300 overflow-hidden">
          
          {/* Top Glass Reflection Arc */}
          <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/40 via-white/10 to-transparent rounded-t-full pointer-events-none" />

          <div className="relative z-10 w-12 h-0.5 bg-gradient-to-r from-transparent via-[#8B1538] to-transparent my-1 sm:my-2" />

          {/* Emblem & School Name Title */}
          <div className="relative z-10 mb-2">
            <SchoolEmblem className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 drop-shadow-sm" />
          </div>
          <h1 className="relative z-10 font-sans text-lg sm:text-xl md:text-2xl font-black tracking-tight text-slate-950 uppercase leading-tight">
            YOSHIDA SHOKANJI
            <span className="block text-xs sm:text-sm md:text-base font-sans font-extrabold text-slate-800 tracking-widest mt-0.5">
              INTERNATIONAL SCHOOL
            </span>
          </h1>

          <div className="relative z-10 w-16 h-0.5 bg-gradient-to-r from-transparent via-[#8B1538] to-transparent my-2" />

          {/* Subtitle & Establishment Tag */}
          <div className="relative z-10 text-[10px] sm:text-xs text-slate-800 tracking-widest uppercase font-bold">
            Sapugaskanda • Sri Lanka
          </div>
          <div className="relative z-10 text-[9px] text-[#8B1538] font-mono tracking-wider font-extrabold mt-0.5">
            EST. 2000
          </div>
        </div>
      </motion.div>
    </div>
  );
};
