/**
 * ============================================================================
 * SCHOOL EMBLEM LOGO COMPONENT (ui/SchoolEmblem.tsx)
 * ============================================================================
 * Renders the official Yoshida Shokanji International School logo emblem vector.
 * Used in the top navbar and hero section.
 * ============================================================================
 */

import React from 'react';
import schoolLogoSvg from '../../assets/schoollogo.svg';

interface SchoolEmblemProps {
  className?: string;
  variant?: 'color' | 'monochrome';
  style?: React.CSSProperties;
}

export const SchoolEmblem: React.FC<SchoolEmblemProps> = ({
  className = "",
  style,
}) => {
  return (
    <img
      src={schoolLogoSvg}
      alt="Yoshida Shokanji International School Emblem"
      /* Fix: Explicit min-width/height prevents flex squishing, shrink-0 ensures strict sizing */
      className={`shrink-0 min-w-10 min-h-10 w-12 h-12 object-contain aspect-square ${className}`}
      style={{ ...style }}
      referrerPolicy="no-referrer"
    />
  );
};