/**
 * ============================================================================
 * CURTAINS: MIXED EFFECTS TRANSITION (Cover: Iris -> Reveal: Stagger Wipe)
 * ============================================================================
 * Implements the signature Motion+ "Cover: Iris -> Reveal: Stagger wipe" effect:
 * 1. COVER (Iris): Expanding circular curtain originating from the toggle button coordinates.
 * 2. MIDPOINT: The theme state (dark/light) swaps seamlessly while covered.
 * 3. REVEAL (Stagger Wipe): Stepped vertical columns wiping across the viewport
 *    in sequence, revealing the new theme underneath in a diagonal staircase wave.
 * ============================================================================
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface IrisStaggerTransitionProps {
  isActive: boolean;
  origin: { x: number; y: number };
  phase: 'idle' | 'iris' | 'stagger';
  curtainColor?: string;
}

const TOTAL_COLUMNS = 9;

export const IrisStaggerTransition: React.FC<IrisStaggerTransitionProps> = ({
  isActive,
  origin,
  phase,
  curtainColor = '#750E2A',
}) => {
  if (!isActive || phase === 'idle') return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[99999] pointer-events-none w-screen h-screen overflow-hidden select-none"
    >
      <AnimatePresence mode="wait">
        {/* PHASE 1: COVER - IRIS CIRCLE EXPANSION FROM TRIGGER POINT */}
        {phase === 'iris' && (
          <motion.div
            key="iris-cover"
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundColor: curtainColor,
            }}
            initial={{
              clipPath: `circle(0px at ${origin.x}px ${origin.y}px)`,
            }}
            animate={{
              clipPath: `circle(160vmax at ${origin.x}px ${origin.y}px)`,
            }}
            transition={{
              duration: 0.38,
              ease: [0.25, 1, 0.5, 1], // Smooth snappy expansion
            }}
          />
        )}

        {/* PHASE 2: REVEAL - STAGGER WIPE WITH STEPPED VERTICAL COLUMNS */}
        {phase === 'stagger' && (
          <div key="stagger-reveal" className="absolute inset-0 w-full h-full flex flex-row">
            {Array.from({ length: TOTAL_COLUMNS }).map((_, index) => (
              <motion.div
                key={`stagger-col-${index}`}
                className="relative h-full flex-1 origin-bottom"
                style={{
                  backgroundColor: curtainColor,
                }}
                initial={{
                  scaleY: 1,
                  originY: 1, // Exits from top to bottom (or collapses downward)
                }}
                animate={{
                  scaleY: 0,
                  originY: 1,
                }}
                transition={{
                  duration: 0.42,
                  delay: index * 0.038, // Stepped staircase reveal from left to right
                  ease: [0.33, 1, 0.68, 1],
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
