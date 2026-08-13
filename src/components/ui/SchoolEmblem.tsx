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
  className = "w-10 h-10",
  style,
}) => {
  return (
    <img
      src={schoolLogoSvg}
      alt="Yoshida Shokanji International School Emblem"
      className={`object-contain aspect-square shrink-0 ${className}`}
      style={{
        maxHeight: '100%',
        maxWidth: '100%',
        ...style,
      }}
      referrerPolicy="no-referrer"
    />
  );
};
