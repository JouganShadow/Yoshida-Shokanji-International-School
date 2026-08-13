/**
 * ============================================================================
 * SPLIT-TEXT ANIMATED BUTTON COMPONENT (ui/SplitTextButton.tsx)
 * ============================================================================
 * An interactive button component with character-by-character split-text hover
 * animation and a diagonal sliding arrow icon.
 *
 * PROPS:
 * - text: String text to display on the button
 * - href?: Optional anchor link (if provided, renders as <a> instead of <button>)
 * - onClick?: Optional click handler callback
 * - theme?: 'maroon' | 'lime' | 'dark'
 * ============================================================================
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface SplitTextButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  theme?: 'maroon' | 'lime' | 'dark';
}

export const SplitTextButton: React.FC<SplitTextButtonProps> = ({
  text,
  href,
  onClick,
  className = '',
  theme = 'maroon',
}) => {
  // State tracking hover to trigger split character and arrow animations
  const [isHovered, setIsHovered] = useState(false);

  // Split text into individual characters array
  const characters = text.split('');

  // Determine button background color and theme styles
  const getThemeStyles = () => {
    switch (theme) {
      case 'lime':
        return 'bg-lime-400 text-neutral-950 hover:bg-lime-300 border-lime-300/50 shadow-lime-950/30';
      case 'dark':
        return 'bg-neutral-900 text-white hover:bg-neutral-800 border-neutral-700/60 shadow-black/40';
      case 'maroon':
      default:
        return 'bg-gradient-to-r from-[#8B1538] via-[#75112e] to-[#590e24] text-white border-rose-400/30 shadow-rose-950/50';
    }
  };

  // Determine icon circle background style
  const getIconBg = () => {
    switch (theme) {
      case 'lime':
        return 'bg-neutral-950 text-lime-400';
      case 'dark':
        return 'bg-rose-500 text-white';
      case 'maroon':
      default:
        return 'bg-white/15 text-white border border-white/20';
    }
  };

  // Dynamically switch component tag between <a> link or <button>
  const Component = href ? 'a' : 'button';

  return (
    <Component
      href={href}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative inline-flex items-center justify-between gap-3 px-4 sm:px-5 py-2.5 rounded-full font-sans text-xs sm:text-sm font-bold tracking-wide uppercase transition-all duration-300 border shadow-lg hover:shadow-xl active:scale-95 ${getThemeStyles()} ${className}`}
    >
      {/* Accessible sr-only text for screen readers */}
      <span className="sr-only">{text}</span>

      {/* Split Character Animation Container */}
      <div className="relative inline-flex overflow-hidden py-0.5 leading-none" aria-hidden="true">
        <div className="flex">
          {characters.map((char, i) => (
            <span
              key={`char1-${i}`}
              className="inline-block relative overflow-hidden"
              style={{ minWidth: char === ' ' ? '0.3em' : undefined }}
            >
              {/* Primary character sliding up on hover */}
              <motion.span
                className="inline-block"
                animate={{ y: isHovered ? '-100%' : '0%' }}
                transition={{
                  duration: 0.3,
                  ease: [0.33, 1, 0.68, 1],
                  delay: i * 0.018,
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>

              {/* Secondary character entering from bottom on hover */}
              <motion.span
                className="absolute left-0 top-0 inline-block text-rose-300 font-extrabold"
                initial={{ y: '100%' }}
                animate={{ y: isHovered ? '0%' : '100%' }}
                transition={{
                  duration: 0.3,
                  ease: [0.33, 1, 0.68, 1],
                  delay: i * 0.018,
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            </span>
          ))}
        </div>
      </div>

      {/* Diagonal Sliding Arrow Icon Circle */}
      <div className={`relative w-6 h-6 rounded-full flex items-center justify-center shrink-0 overflow-hidden transition-transform duration-300 group-hover:scale-110 ${getIconBg()}`}>
        {/* Sliding Arrow 1 (Exits top-right) */}
        <motion.div
          className="absolute flex items-center justify-center"
          animate={{
            x: isHovered ? '120%' : '0%',
            y: isHovered ? '-120%' : '0%',
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <ArrowUpRight className="w-3.5 h-3.5" />
        </motion.div>

        {/* Sliding Arrow 2 (Enters from bottom-left) */}
        <motion.div
          className="absolute flex items-center justify-center"
          initial={{ x: '-120%', y: '120%' }}
          animate={{
            x: isHovered ? '0%' : '-120%',
            y: isHovered ? '0%' : '120%',
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <ArrowUpRight className="w-3.5 h-3.5 text-rose-300" />
        </motion.div>
      </div>
    </Component>
  );
};
