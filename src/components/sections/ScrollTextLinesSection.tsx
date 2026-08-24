/**
 * ============================================================================
 * SCROLL TEXT LINES SECTION (components/sections/ScrollTextLinesSection.tsx)
 * ============================================================================
 * Editorial parallax typography lines ("YOSHIDA", "SHOKANJI", "INTERNATIONAL")
 * smoothly drifting between the Landing Hero and Stats sections.
 * 
 * Blends seamlessly on the page's natural background without borders,
 * badges, or boxy section dividers.
 * ============================================================================
 */

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface TextLineProps {
  word: string;
  direction?: 'left' | 'right';
  speedMultiplier?: number;
  progress: any; // MotionValue<number>
  startFilled?: boolean;
}

const TextLine: React.FC<TextLineProps> = ({
  word,
  direction = 'left',
  speedMultiplier = 1,
  progress,
  startFilled = true,
}) => {
  // Transform scroll progress [0, 1] into horizontal translation
  const moveDistance = 320 * speedMultiplier;
  const x = useTransform(
    progress,
    [0, 1],
    direction === 'left' ? [moveDistance, -moveDistance] : [-moveDistance, moveDistance]
  );

  // Repeat the word multiple times to ensure continuous coverage across all viewport widths
  const repeatCount = 10;
  const items = Array.from({ length: repeatCount }, (_, i) => ({
    id: i,
    isFilled: startFilled ? i % 2 === 0 : i % 2 !== 0,
  }));

  return (
    <div className="overflow-hidden whitespace-nowrap py-1 sm:py-1.5 select-none">
      <motion.div
        style={{ x }}
        className="inline-flex items-center gap-6 sm:gap-10 md:gap-14 will-change-transform"
      >
        {items.map((item) => (
          <span
            key={item.id}
            className={`font-black uppercase tracking-tighter text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-none transition-colors duration-300 ${
              item.isFilled
                ? 'text-[#8B1538]'
                : 'text-transparent'
            }`}
            style={{
              WebkitTextStroke: item.isFilled
                ? 'none'
                : '2px rgba(102, 0, 0, 0.75)',
            }}
          >
            {word}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export const ScrollTextLinesSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-transparent overflow-hidden py-4 sm:py-8 md:py-12 pointer-events-none"
    >
      {/* Parallax Scroll Text Rows */}
      <div className="flex flex-col space-y-1 sm:space-y-2">
        {/* Line 1: YOSHIDA */}
        <TextLine
          word="YOSHIDA"
          direction="left"
          speedMultiplier={1.2}
          progress={scrollYProgress}
          startFilled={true}
        />

        {/* Line 2: SHOKANJI */}
        <TextLine
          word="SHOKANJI"
          direction="right"
          speedMultiplier={0.9}
          progress={scrollYProgress}
          startFilled={false}
        />

        {/* Line 3: INTERNATIONAL */}
        <TextLine
          word="INTERNATIONAL"
          direction="left"
          speedMultiplier={1.3}
          progress={scrollYProgress}
          startFilled={true}
        />
      </div>
    </div>
  );
};
