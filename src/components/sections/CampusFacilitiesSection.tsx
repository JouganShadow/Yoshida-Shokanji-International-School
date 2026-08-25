/**
 * ============================================================================
 * FACILITIES SECTION (components/sections/FacilitiesSection.tsx)
 * ============================================================================
 * Displays the campus facilities (Karate Dojo, Swimming Pool, labs, library)
 * in a high-contrast Skillshare visual layout with precise solid borders,
 * key tags, capacity descriptors, and smooth hover interaction.
 * ============================================================================
 */

import React from 'react';
import { motion } from 'motion/react';
import { Shield, MapPin, Check, BookOpen, FlaskConical, Waves, Smile, ImageIcon } from 'lucide-react';
import { Skeleton } from '../ui/Skeleton';

interface FacilityItem {
  id: string;
  name: string;
  type: string;
  icon: React.ComponentType<{ className?: string }>;
  capacity: string;
  coaches?: string;
  description: string;
  features: string[];
  imageUrl?: string; // Optional for when user adds photos later
}

export const CampusFacilitiesSection: React.FC = () => {
  const facilities: FacilityItem[] = [
    {
      id: 'karate',
      name: 'Shotokan Karate & Martial Arts Dojo',
      type: 'Sport & Discipline',
      icon: Shield,
      capacity: '100+ Athletes',
      coaches: 'Japanese Master Certified',
      description: 'Our world-renowned, wood-floored training dojo dedicated to cultivating physical resilience, reflex speed, and moral character in Japanese Shotokan Karate traditions.',
      features: ['Imported tatami sparring mats', 'Professional target apparatus', 'International competition prep'],
    },
    {
      id: 'swimming',
      name: '6-Lane Swimming Pool',
      type: 'Aquatic Center',
      icon: Waves,
      capacity: '6 Lanes, Full Squad',
      coaches: 'Certified Lifeguards & Coaches',
      description: 'A custom, clean blue 6-lane athletic pool where our champion swimming squads train for national meets, and life-saving certifications.',
      features: ['Anti-turbulence lane lines', 'Continuous sanitization plant', 'Custom starting blocks'],
    },
    {
      id: 'labs',
      name: 'Advanced Science & Science-ICT Labs',
      type: 'Academic Innovation',
      icon: FlaskConical,
      capacity: 'Physics, Chemistry & ICT',
      coaches: 'Specialized Lab Instructors',
      description: 'Fully equipped practical workstations tailored for Cambridge IGCSE, A-Levels, and National syllabus experiments. Includes high-speed workstations and optics rigs.',
      features: ['High-speed internet workstations', 'Certified chemical storage cabinets', 'Individual experiment apparatus'],
    },
    {
      id: 'library',
      name: 'Heritage Library & Resource Sanctuary',
      type: 'Research & Study',
      icon: BookOpen,
      capacity: '80+ Readers',
      coaches: 'Academic Librarians',
      description: 'A tranquil reading environment holding extensive Cambridge examination reference guides, classical English literature, and Japanese language archives.',
      features: ['Dedicated silent study booths', 'Digital catalog access', 'Comfortable reading lounge'],
    },
    {
      id: 'recreation',
      name: 'Pre-School & Primary Playgrounds',
      type: 'Outdoor Recreation',
      icon: Smile,
      capacity: 'All Nursery & Primary Students',
      coaches: 'Supervised Student Safety',
      description: 'Safe, landscaped outdoor play grounds and recreational play structures designed for early childhood physical agility and social play at Takiko Yoshida Mawatha.',
      features: ['Child-safe cushioned turf', 'Modular climbing apparatus', 'Shaded seating areas'],
    },
  ];

  return (
    <section className="py-12 bg-transparent text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER BAR */}
        <div className="border-b-2 border-slate-950 pb-6 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-[10px] font-mono font-extrabold text-[#8B1538] uppercase tracking-widest block">
              • WORLD-CLASS INFRASTRUCTURE •
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-slate-950">
              Campus Facilities & <span className="text-[#8B1538]">Training Grounds</span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-slate-600 leading-relaxed font-medium text-left">
            Empowering students with premium equipment, athletic safety protocols, and advanced laboratories in the heart of Sapugaskanda.
          </p>
        </div>

        {/* FACILITIES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((fac) => {
            const IconComponent = fac.icon;
            return (
              <motion.div
                key={fac.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group bg-white border-2 border-slate-950 rounded-2xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:shadow-[6px_6px_0px_0px_#8B1538] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 flex flex-col sm:flex-row h-full"
              >
                {/* PHOTO CONTAINER WITH SKELETON PLACEHOLDER */}
                <div className="relative w-full sm:w-2/5 min-h-[190px] sm:min-h-full overflow-hidden bg-slate-100 dark:bg-neutral-800 shrink-0 border-b-2 sm:border-b-0 sm:border-r-2 border-slate-950 flex items-center justify-center">
                  {fac.imageUrl ? (
                    <img
                      src={fac.imageUrl}
                      alt={fac.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="relative w-full h-full min-h-[190px] flex flex-col items-center justify-center p-4">
                      {/* Animated Shimmer Skeleton Background */}
                      <Skeleton
                        className="absolute inset-0 w-full h-full rounded-none opacity-90"
                        shimmer={true}
                        pulse={true}
                      />
                      
                      {/* Placeholder Indicator */}
                      <div className="relative z-10 flex flex-col items-center justify-center text-slate-400 dark:text-neutral-500 space-y-1.5 pointer-events-none select-none">
                        <div className="w-10 h-10 rounded-xl bg-white/80 dark:bg-neutral-900/80 border border-slate-950/20 flex items-center justify-center shadow-sm">
                          <ImageIcon className="w-5 h-5 text-slate-400 dark:text-neutral-400" />
                        </div>
                        <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-slate-500 dark:text-neutral-400">
                          Photo Pending
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Type Badge Overlay */}
                  <div className="absolute top-3 left-3 bg-slate-950 text-white px-2.5 py-1 text-[9px] font-mono font-extrabold uppercase rounded-lg border border-slate-800 z-20 shadow-sm">
                    {fac.type}
                  </div>
                </div>

                {/* CONTENT SECTION */}
                <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                  <div className="space-y-2">
                    {/* Capacity & Coach Info */}
                    <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono font-bold text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-[#8B1538]" />
                      <span>{fac.capacity}</span>
                      {fac.coaches && (
                        <>
                          <span>•</span>
                          <span className="text-[#8B1538]">{fac.coaches}</span>
                        </>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-serif font-black text-lg sm:text-xl text-slate-950 group-hover:text-[#8B1538] transition-colors leading-tight">
                      {fac.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      {fac.description}
                    </p>
                  </div>

                  {/* Features Checklist */}
                  <div className="space-y-1.5 pt-3 border-t-2 border-slate-100">
                    {fac.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-800 font-semibold">
                        <div className="w-3.5 h-3.5 rounded bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
