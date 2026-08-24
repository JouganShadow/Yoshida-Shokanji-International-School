/**
 * ============================================================================
 * CUSTOM iOS STYLE POINTER COMPONENT (ui/IOSPointer.tsx)
 * ============================================================================
 * Provides an iPadOS/iOS style cursor/pointer across the website.
 * Features:
 * 1. Translucent smooth-following circle with elastic spring animations.
 * 2. Automatic hiding inside the Landing Hero section (allowing CursorTrail).
 * 3. Morph/scale response when hovering over any interactive element.
 * 4. Micro-squeeze scale animation on click (whileTap mimic).
 * 5. Clean, touch-aware fallback (disables automatically on touch screens).
 * ============================================================================
 */

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export const IOSPointer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isHero, setIsHero] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Motion coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring configuration for smooth iPadOS-like inertia (tuned faster)
  const springConfig = { damping: 18, stiffness: 380, mass: 0.35 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect if device supports touch/coarse pointer
    const checkTouch = () => {
      const hasTouch = window.matchMedia('(pointer: coarse)').matches || 
                       ('ontouchstart' in window) || 
                       (navigator.maxTouchPoints > 0);
      setIsTouchDevice(hasTouch);
    };

    checkTouch();

    // Mouse movement event listener
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      if (!isVisible) {
        setIsVisible(true);
      }

      // Check if mouse is currently over the Landing Hero element or its descendants
      const target = e.target as HTMLElement | null;
      const insideHero = !!target?.closest('#hero');
      setIsHero(insideHero);

      // Check if mouse is hovering over interactive elements
      if (target) {
        // Find if target or any parent is interactive
        const interactiveEl = target.closest('a, button, input, select, textarea, [role="button"], [data-clickable="true"]');
        let isInteractiveStyle = false;

        try {
          const computedStyle = window.getComputedStyle(target);
          if (computedStyle.cursor === 'pointer') {
            isInteractiveStyle = true;
          }
        } catch (err) {
          // Ignore errors
        }

        setIsHovered(!!interactiveEl || isInteractiveStyle);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseDown = () => {
      setIsPressed(true);
    };

    const handleMouseUp = () => {
      setIsPressed(false);
    };

    // Listeners on window
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [mouseX, mouseY, isVisible]);

  // Handle system cursor visibility dynamically
  useEffect(() => {
    if (isTouchDevice) {
      document.body.style.cursor = '';
      return;
    }

    if (isVisible && !isHero) {
      document.body.style.cursor = 'none';
      
      // Also apply style to interactive elements so system hand cursor doesn't blink
      const style = document.createElement('style');
      style.id = 'ios-cursor-suppress';
      style.innerHTML = `
        *, *:hover, a:hover, button:hover, select:hover, input:hover, textarea:hover, [role="button"]:hover {
          cursor: none !important;
        }
      `;
      document.head.appendChild(style);

      return () => {
        document.body.style.cursor = '';
        const existingStyle = document.getElementById('ios-cursor-suppress');
        if (existingStyle) {
          existingStyle.remove();
        }
      };
    } else {
      document.body.style.cursor = '';
      const existingStyle = document.getElementById('ios-cursor-suppress');
      if (existingStyle) {
        existingStyle.remove();
      }
    }
  }, [isVisible, isHero, isTouchDevice]);

  // Do not render custom pointer on touch screens or if hidden
  if (isTouchDevice || !isVisible || isHero) {
    return null;
  }

  // Animation states / variants
  const getScale = () => {
    if (isPressed) return 0.8;
    if (isHovered) return 1.8;
    return 1;
  };

  const getBgColor = () => {
    // When hovering over an interactive element, we can make it maroon colored with less opacity
    if (isHovered) return 'rgba(110, 10, 35, 0.32)'; // Darker, richer maroon
    return 'rgba(102, 0, 0, 0.75)'; // Darker slate grey (slate-800) with 75% opacity
  };

  const getBorderColor = () => {
    if (isHovered) return 'rgba(110, 10, 35, 0.55)'; // 55% Maroon border
    return 'rgba(15, 23, 42, 0.35)'; // 35% Slate-900 border
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[99999] shadow-sm backdrop-blur-[1px] flex items-center justify-center"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
        width: 14,
        height: 14,
        backgroundColor: getBgColor(),
        borderWidth: 1.5,
        borderColor: getBorderColor(),
      }}
      animate={{
        scale: getScale(),
      }}
      transition={{
        type: 'spring',
        damping: 20,
        stiffness: 400,
        mass: 0.35,
      }}
    />
  );
};
