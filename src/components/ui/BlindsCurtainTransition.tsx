/**
 * ============================================================================
 * CURTAINS: BLINDS PAGE TRANSITION (ui/BlindsCurtainTransition.tsx)
 * ============================================================================
 * Implements a pure #750E2A maroon Venetian Blinds page transition triggered
 * whenever the user navigates between routes.
 * 
 * FEATURES:
 * - 9 horizontal slats in solid #750E2A that sweep across the viewport in staggered sequence.
 * - Hardware-accelerated transforms with non-blocking pointer events and no borders.
 * ============================================================================
 */

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';

interface BlindsCurtainTransitionProps {
  currentRoute: string;
}

const TOTAL_SLATS = 9;
const SLAT_COLOR = '#750E2A';

export const BlindsCurtainTransition: React.FC<BlindsCurtainTransitionProps> = ({ currentRoute }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Avoid triggering blinds on first mount / initial load
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setIsTransitioning(true);

    // Blinds stay closed briefly, then animate out
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 850);

    return () => clearTimeout(timer);
  }, [currentRoute]);

  if (!isTransitioning) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[99990] pointer-events-none flex flex-col w-full h-full overflow-hidden select-none"
    >
      {/* Horizontal Venetian Blinds Slats */}
      <div className="relative flex-1 w-full flex flex-col">
        {Array.from({ length: TOTAL_SLATS }).map((_, index) => (
          <motion.div
            key={`slat-${index}`}
            className="relative w-full flex-1 origin-top overflow-hidden bg-[#750E2A]"
            initial={{ scaleY: 0 }}
            animate={{
              scaleY: [0, 1, 1, 0],
              originY: [0, 0, 1, 1], // Expands from top down, then exits from bottom up
            }}
            transition={{
              duration: 0.75,
              times: [0, 0.4, 0.6, 1],
              delay: index * 0.032, // Stagger effect from top to bottom
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ))}
      </div>
    </div>
  );
};
