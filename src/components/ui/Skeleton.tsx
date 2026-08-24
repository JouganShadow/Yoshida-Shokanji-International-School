import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SchoolEmblem } from './SchoolEmblem';
import { ImageIcon } from 'lucide-react';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: 'rect' | 'circle' | 'text' | 'rounded' | 'badge' | 'button';
  shimmer?: boolean;
  pulse?: boolean;
}

/**
 * Base Skeleton Component with high-contrast borders and shimmer wave
 */
export const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  variant = 'rounded',
  shimmer = true,
  pulse = true,
  ...props
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'circle':
        return 'rounded-full';
      case 'text':
        return 'rounded h-3.5 w-full my-1';
      case 'badge':
        return 'rounded-full h-5 w-20';
      case 'button':
        return 'rounded-xl h-10 w-32 border-2 border-slate-950/20';
      case 'rect':
        return 'rounded-none';
      case 'rounded':
      default:
        return 'rounded-xl';
    }
  };

  return (
    <div
      aria-hidden="true"
      className={`
        relative overflow-hidden
        bg-slate-200/80 dark:bg-neutral-800/80
        ${pulse ? 'animate-pulse' : ''}
        ${shimmer ? 'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.8s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/40 dark:before:via-white/10 before:to-transparent' : ''}
        ${getVariantClasses()}
        ${className}
      `}
      {...props}
    />
  );
};

/**
 * ImageWithSkeleton - Displays an animated skeleton placeholder until the image finishes loading,
 * then smoothly fades in the image with no layout shift. Includes fallback for broken images.
 */
export interface ImageWithSkeletonProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt?: string;
  className?: string;
  imgClassName?: string;
  containerClassName?: string;
  aspectRatio?: string;
  fallbackIcon?: React.ReactNode;
}

export const ImageWithSkeleton: React.FC<ImageWithSkeletonProps> = ({
  src,
  alt = 'Image',
  className = '',
  imgClassName = '',
  containerClassName = '',
  aspectRatio,
  fallbackIcon,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden w-full h-full bg-slate-100 dark:bg-neutral-900 ${containerClassName} ${className}`}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {/* Skeleton placeholder shown while loading */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 z-10">
          <Skeleton className="w-full h-full rounded-none" pulse shimmer />
        </div>
      )}

      {/* Error Fallback State */}
      {hasError ? (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-100 dark:bg-neutral-800 p-4 text-center text-slate-400">
          {fallbackIcon || (
            <div className="w-12 h-12 rounded-xl bg-slate-200 dark:bg-neutral-700 flex items-center justify-center mb-2">
              <SchoolEmblem className="w-8 h-8 opacity-40" />
            </div>
          )}
          <span className="text-[10px] font-mono uppercase font-bold text-slate-500">Image Unavailable</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          referrerPolicy="no-referrer"
          className={`
            w-full h-full object-cover transition-all duration-700
            ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}
            ${imgClassName}
          `}
          {...props}
        />
      )}
    </div>
  );
};

/**
 * Course Card Skeleton (Skillshare Style)
 */
export const CourseCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white dark:bg-neutral-800 border-2 border-slate-950 rounded-2xl overflow-hidden shadow-[5px_5px_0px_0px_rgba(15,23,42,0.1)] flex flex-col h-full animate-pulse">
      {/* Cover Image Skeleton */}
      <div className="relative h-48 sm:h-52 w-full bg-slate-200 dark:bg-neutral-700 border-b-2 border-slate-950">
        <Skeleton className="w-full h-full rounded-none" />
        <div className="absolute top-4 left-4">
          <Skeleton className="w-20 h-5 rounded" />
        </div>
        <div className="absolute bottom-4 left-4">
          <Skeleton className="w-28 h-4 rounded" />
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          {/* Metadata Row */}
          <div className="flex items-center gap-2">
            <Skeleton className="w-20 h-3.5" />
            <Skeleton className="w-16 h-3.5" />
            <Skeleton className="w-24 h-3.5" />
          </div>

          {/* Title Lines */}
          <Skeleton className="w-4/5 h-6" />
          <Skeleton className="w-2/3 h-6" />

          {/* Description Lines */}
          <div className="space-y-1.5 pt-1">
            <Skeleton className="w-full h-3" />
            <Skeleton className="w-full h-3" />
            <Skeleton className="w-3/4 h-3" />
          </div>
        </div>

        {/* Skill Pills Skeleton */}
        <div className="space-y-2 pt-2">
          <Skeleton className="w-32 h-3" />
          <div className="flex flex-wrap gap-1.5">
            <Skeleton className="w-20 h-5 rounded-md" />
            <Skeleton className="w-24 h-5 rounded-md" />
            <Skeleton className="w-16 h-5 rounded-md" />
          </div>
        </div>

        {/* Highlights Checklist */}
        <div className="pt-3 border-t border-slate-100 dark:border-neutral-700 space-y-2">
          <Skeleton className="w-20 h-3" />
          <div className="space-y-1.5">
            <Skeleton className="w-full h-3" />
            <Skeleton className="w-4/5 h-3" />
          </div>
        </div>
      </div>

      {/* Button Skeleton */}
      <div className="p-6 pt-0 border-t border-slate-100 dark:border-neutral-700">
        <Skeleton className="w-full h-10 mt-4 rounded-xl" />
      </div>
    </div>
  );
};

/**
 * Facility Card Skeleton
 */
export const FacilityCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white dark:bg-neutral-800 border-2 border-slate-950 rounded-2xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(15,23,42,0.1)] flex flex-col sm:flex-row h-full animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full sm:w-2/5 h-48 sm:h-auto bg-slate-200 dark:bg-neutral-700 shrink-0 border-b-2 sm:border-b-0 sm:border-r-2 border-slate-950">
        <Skeleton className="w-full h-full rounded-none min-h-[160px]" />
      </div>

      {/* Content Skeleton */}
      <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Skeleton className="w-24 h-3.5" />
            <Skeleton className="w-28 h-3.5" />
          </div>
          <Skeleton className="w-4/5 h-6" />
          <div className="space-y-1.5">
            <Skeleton className="w-full h-3" />
            <Skeleton className="w-full h-3" />
            <Skeleton className="w-3/5 h-3" />
          </div>
        </div>

        {/* Features Checklist Skeleton */}
        <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-neutral-700">
          <Skeleton className="w-full h-3.5" />
          <Skeleton className="w-4/5 h-3.5" />
          <Skeleton className="w-3/4 h-3.5" />
        </div>
      </div>
    </div>
  );
};

/**
 * Achievement Card Skeleton
 */
export const AchievementCardSkeleton: React.FC = () => {
  return (
    <div className="rounded-3xl bg-white/90 dark:bg-neutral-800/90 border border-slate-200 dark:border-neutral-700 overflow-hidden shadow-xl flex flex-col justify-between h-full animate-pulse">
      {/* Thumbnail */}
      <div className="relative h-56 w-full bg-slate-200 dark:bg-neutral-700">
        <Skeleton className="w-full h-full rounded-none" />
        <div className="absolute top-4 left-4">
          <Skeleton className="w-24 h-6 rounded-full" />
        </div>
        <div className="absolute bottom-4 left-4">
          <Skeleton className="w-32 h-7 rounded-xl" />
        </div>
      </div>

      {/* Text Info */}
      <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
        <div>
          <Skeleton className="w-4/5 h-6 mb-2" />
          <div className="space-y-1.5">
            <Skeleton className="w-full h-3" />
            <Skeleton className="w-full h-3" />
            <Skeleton className="w-2/3 h-3" />
          </div>
        </div>

        <div className="pt-4 border-t border-slate-200 dark:border-neutral-700 flex items-center justify-between">
          <Skeleton className="w-28 h-3" />
          <Skeleton className="w-24 h-4 rounded" />
        </div>
      </div>
    </div>
  );
};

/**
 * Management Profile Card Skeleton
 */
export const ManagementCardSkeleton: React.FC = () => {
  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-neutral-800/90 border border-slate-200 dark:border-neutral-700 shadow-xl flex flex-col justify-between h-full animate-pulse">
      <div className="space-y-5">
        <div className="flex items-center gap-5">
          <Skeleton className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl shrink-0" />
          <div className="space-y-2 flex-1">
            <Skeleton className="w-28 h-3 rounded" />
            <Skeleton className="w-4/5 h-6" />
            <Skeleton className="w-36 h-3" />
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-100 dark:bg-neutral-700/60 border border-slate-200 dark:border-neutral-700 space-y-1.5">
          <Skeleton className="w-full h-3" />
          <Skeleton className="w-3/4 h-3" />
        </div>

        <div className="space-y-2">
          <Skeleton className="w-full h-3" />
          <Skeleton className="w-full h-3" />
          <Skeleton className="w-4/5 h-3" />
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-200 dark:border-neutral-700 flex items-center justify-between">
        <Skeleton className="w-32 h-4" />
        <Skeleton className="w-24 h-4" />
      </div>
    </div>
  );
};

/**
 * Stat Counter Card Skeleton
 */
export const StatCardSkeleton: React.FC = () => {
  return (
    <div className="p-8 rounded-3xl bg-white/90 dark:bg-neutral-800/90 border-2 border-slate-950 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] flex flex-col justify-between h-full animate-pulse">
      <div className="flex items-center justify-between mb-6">
        <Skeleton className="w-12 h-12 rounded-2xl" />
        <Skeleton className="w-20 h-6 rounded-full" />
      </div>
      <div className="space-y-3">
        <Skeleton className="w-32 h-10" />
        <Skeleton className="w-48 h-5" />
        <div className="space-y-1.5 pt-2">
          <Skeleton className="w-full h-3" />
          <Skeleton className="w-4/5 h-3" />
        </div>
      </div>
    </div>
  );
};

/**
 * School Notice Card Skeleton
 */
export const NoticeCardSkeleton: React.FC = () => {
  return (
    <div className="p-5 rounded-2xl border border-slate-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 shadow-sm flex flex-col justify-between animate-pulse">
      <div>
        <div className="flex items-center justify-between mb-3">
          <Skeleton className="w-20 h-5 rounded-full" />
          <Skeleton className="w-24 h-3.5" />
        </div>
        <Skeleton className="w-4/5 h-5 mb-2" />
        <div className="space-y-1.5">
          <Skeleton className="w-full h-3" />
          <Skeleton className="w-full h-3" />
          <Skeleton className="w-2/3 h-3" />
        </div>
      </div>
      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-neutral-700 flex items-center justify-between">
        <Skeleton className="w-24 h-3" />
        <Skeleton className="w-16 h-3.5" />
      </div>
    </div>
  );
};

/**
 * Map & Corridor Section Skeleton
 */
export const MapSkeleton: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-pulse">
      {/* 3D Glass Frame Placeholder */}
      <div className="rounded-3xl bg-white/80 dark:bg-neutral-800/80 border border-slate-200 dark:border-neutral-700 p-3 sm:p-5 shadow-2xl">
        <div className="relative w-full h-[400px] sm:h-[480px] rounded-2xl bg-slate-200 dark:bg-neutral-700 flex flex-col justify-between p-4 overflow-hidden">
          <Skeleton className="w-full h-full absolute inset-0 rounded-none" />
          <div className="relative z-10 flex justify-between">
            <Skeleton className="w-44 h-8 rounded-full" />
            <Skeleton className="w-36 h-8 rounded-full" />
          </div>
          <div className="relative z-10 flex justify-between items-center bg-white/90 dark:bg-neutral-800/90 p-4 rounded-xl">
            <Skeleton className="w-64 h-4" />
            <Skeleton className="w-24 h-8 rounded-lg" />
          </div>
        </div>
      </div>

      {/* Suburbs Grid Skeleton */}
      <div className="p-7 sm:p-8 rounded-3xl bg-white/85 dark:bg-neutral-800/85 border border-slate-200 dark:border-neutral-700 shadow-xl space-y-4">
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-neutral-700">
          <div className="flex items-center gap-3">
            <Skeleton className="w-11 h-11 rounded-2xl" />
            <div className="space-y-2">
              <Skeleton className="w-64 h-5" />
              <Skeleton className="w-48 h-3" />
            </div>
          </div>
          <Skeleton className="w-36 h-8 rounded-full" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3.5">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="p-4 rounded-2xl bg-white dark:bg-neutral-750 border border-slate-200 dark:border-neutral-700 text-center flex flex-col items-center justify-center space-y-2">
              <Skeleton className="w-16 h-4" />
              <Skeleton className="w-12 h-3.5" />
              <Skeleton className="w-10 h-2.5" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * Full Page Skeleton View for seamless transitions
 */
export const PageSkeleton: React.FC<{ pageType: 'home' | 'about' | 'principal' | 'academics' | 'campus' | 'contact' }> = ({ pageType }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 animate-in fade-in duration-300">
      {/* Header Skeleton */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="flex justify-center">
          <Skeleton className="w-40 h-5 rounded-full" />
        </div>
        <Skeleton className="w-3/4 h-10 mx-auto" />
        <Skeleton className="w-1/2 h-4 mx-auto" />
      </div>

      {pageType === 'home' && (
        <div className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCardSkeleton />
            <StatCardSkeleton />
            <StatCardSkeleton />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CourseCardSkeleton />
            <CourseCardSkeleton />
          </div>
        </div>
      )}

      {pageType === 'academics' && (
        <div className="space-y-10">
          <div className="flex justify-between items-center border-b-2 border-slate-950 pb-4">
            <Skeleton className="w-64 h-8" />
            <div className="flex gap-2">
              <Skeleton className="w-16 h-8 rounded-lg" />
              <Skeleton className="w-20 h-8 rounded-lg" />
              <Skeleton className="w-20 h-8 rounded-lg" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CourseCardSkeleton />
            <CourseCardSkeleton />
            <CourseCardSkeleton />
          </div>
        </div>
      )}

      {pageType === 'campus' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FacilityCardSkeleton />
          <FacilityCardSkeleton />
          <FacilityCardSkeleton />
          <FacilityCardSkeleton />
        </div>
      )}

      {(pageType === 'about' || pageType === 'principal') && (
        <div className="space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white dark:bg-neutral-800 border-2 border-slate-950 rounded-3xl p-8 shadow-xl">
            <div className="lg:col-span-5 flex justify-center">
              <Skeleton className="w-64 h-80 sm:w-72 sm:h-96 rounded-2xl" />
            </div>
            <div className="lg:col-span-7 space-y-4">
              <Skeleton className="w-full h-24 rounded-2xl" />
              <Skeleton className="w-full h-4" />
              <Skeleton className="w-full h-4" />
              <Skeleton className="w-3/4 h-4" />
              <div className="grid grid-cols-2 gap-4 pt-4">
                <Skeleton className="h-16 rounded-xl" />
                <Skeleton className="h-16 rounded-xl" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ManagementCardSkeleton />
            <ManagementCardSkeleton />
          </div>
        </div>
      )}

      {pageType === 'contact' && (
        <div className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <NoticeCardSkeleton />
            <NoticeCardSkeleton />
            <NoticeCardSkeleton />
          </div>
          <MapSkeleton />
        </div>
      )}
    </div>
  );
};
