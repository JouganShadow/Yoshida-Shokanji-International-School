/**
 * ============================================================================
 * ANIMATED COUNTER CARD COMPONENT (ui/StatCounterCard.tsx)
 * ============================================================================
 * Displays a metric card with an animated count-up number when scrolled into view.
 *
 * PROPS:
 * - numericValue: Target number to count up to (e.g. 20, 1000)
 * - suffix: Optional string appended to the number (e.g. '+', ' World Wins')
 * - prefix: Optional string prepended to the number
 * - label: Card title/headline
 * - description: Card descriptive paragraph
 * - icon: Lucide icon component
 * - watermarkIcon: Lucide icon component rendered faintly in background
 * ============================================================================
 */

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, animate } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface StatCounterCardProps {
  numericValue: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description: string;
  icon: LucideIcon;
  watermarkIcon: LucideIcon;
  highlightColor?: 'rose' | 'maroon' | 'neutral';
  delay?: number;
}

export const StatCounterCard: React.FC<StatCounterCardProps> = ({
  numericValue,
  suffix = '',
  prefix = '',
  label,
  description,
  icon: Icon,
  watermarkIcon: WatermarkIcon,
  highlightColor = 'maroon',
  delay = 0,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Hook detecting when card enters user's viewport
  const isInView = useInView(cardRef, { once: true, margin: '-50px' });

  // State holding animated current counter integer value
  const [displayCount, setDisplayCount] = useState(0);

  // Counter Animation Effect when scrolled into view
  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, numericValue, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1], // smooth deceleration curve
      onUpdate(value) {
        setDisplayCount(Math.floor(value));
      },
    });

    return () => controls.stop();
  }, [isInView, numericValue]);

  // Format large numbers with commas if needed (e.g. 1,000)
  const formattedNumber = displayCount.toLocaleString();

  // Split label into words array
  const labelWords = label.split(' ');

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 35 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="group relative p-7 sm:p-8 rounded-3xl bg-white/85 backdrop-blur-xl border border-slate-200/90 shadow-xl overflow-hidden hover:border-[#8B1538]/70 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between min-h-[260px]"
    >
      {/* Hover Gradient Glow Border */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#8B1538]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Background Watermark Icon */}
      <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500 pointer-events-none">
        <WatermarkIcon className="w-28 h-28 sm:w-32 sm:h-32 text-slate-500" />
      </div>

      {/* Icon Badge */}
      <div className="relative z-10 mb-5 flex items-center justify-between">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-rose-100/80 border border-rose-200 flex items-center justify-center shadow-inner group-hover:bg-[#8B1538] group-hover:border-[#8B1538] transition-all duration-300">
          <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#8B1538] group-hover:text-white group-hover:scale-110 transition-transform" />
        </div>
      </div>

      {/* Animated Counter Display */}
      <div className="relative z-10 mb-3 flex items-baseline flex-wrap gap-x-1">
        <span className="font-serif font-black text-4xl sm:text-5xl md:text-6xl text-slate-950 tracking-tight leading-none">
          {prefix}
          {formattedNumber}
        </span>
        {suffix && (
          <span className="font-sans font-bold text-xl sm:text-2xl text-[#8B1538] tracking-normal ml-0.5">
            {suffix}
          </span>
        )}
      </div>

      {/* Title Label */}
      <div className="relative z-10 mb-2">
        <h3 className="font-serif font-bold text-base sm:text-lg text-slate-900 leading-snug group-hover:text-[#8B1538] transition-colors flex flex-wrap gap-x-1.5">
          {labelWords.map((word, idx) => (
            <motion.span
              key={idx}
              className="inline-block"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: delay + 0.2 + idx * 0.05 }}
            >
              {word}
            </motion.span>
          ))}
        </h3>
      </div>

      {/* Description */}
      <p className="relative z-10 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans font-medium">
        {description}
      </p>
    </motion.div>
  );
};
