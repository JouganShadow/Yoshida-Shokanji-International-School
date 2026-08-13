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
import { Trophy, Shield, HelpCircle, MapPin, Check, Sparkles } from 'lucide-react';

interface FacilityItem {
  id: string;
  name: string;
  type: string;
  imageUrl: string;
  capacity: string;
  coaches?: string;
  description: string;
  features: string[];
}

export const FacilitiesSection: React.FC = () => {
  const facilities: FacilityItem[] = [
    {
      id: 'karate',
      name: 'Shotokan Karate & Martial Arts Dojo',
      type: 'Sport & Discipline',
      imageUrl: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80&w=600',
      capacity: '100+ Athletes',
      coaches: 'Japanese Master Certified',
      description: 'Our world-renowned, wood-floored training dojo dedicated to cultivating physical resilience, reflex speed, and moral character in Japanese Shotokan Karate traditions.',
      features: ['Imported tatami sparring mats', 'Professional target apparatus', 'International competition prep'],
    },
    {
      id: 'swimming',
      name: 'Olympic-Standard 6-Lane Swimming Pool',
      type: 'Aquatic Center',
      imageUrl: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=600',
      capacity: '6 Lanes, Full Squad',
      coaches: 'Certified Lifeguards & Coaches',
      description: 'A custom, clean blue 6-lane athletic pool where our champion swimming squads train for national meets, water-polo events, and life-saving certifications.',
      features: ['Anti-turbulence lane lines', 'Continuous sanitization plant', 'Custom starting blocks'],
    },
    {
      id: 'labs',
      name: 'Advanced Science & Science-ICT Labs',
      type: 'Academic Innovation',
      imageUrl: 'https://images.unsplash.com/photo-1532187863486-abf9d39d66e8?auto=format&fit=crop&q=80&w=600',
      capacity: 'Physics, Chemistry & ICT',
      coaches: 'Specialized Lab Instructors',
      description: 'Fully equipped practical workstations tailored for Cambridge IGCSE, A-Levels, and National syllabus experiments. Includes high-speed workstations and optics rigs.',
      features: ['High-speed internet workstations', 'Certified chemical storage cabinets', 'Individual experiment apparatus'],
    },
    {
      id: 'library',
      name: 'Heritage Library & Resource Sanctuary',
      type: 'Research & Study',
      imageUrl: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=600',
      capacity: '80+ Readers',
      coaches: 'Academic Librarians',
      description: 'A tranquil reading environment holding extensive Cambridge examination reference guides, classical English literature, and Japanese language archives.',
      features: ['Dedicated silent study booths', 'Digital catalog access', 'Comfortable reading lounge'],
    },
    {
      id: 'recreation',
      name: 'Pre-School & Primary Playgrounds',
      type: 'Outdoor Recreation',
      imageUrl: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=600',
      capacity: 'All Nursery & Primary Students',
      coaches: 'Supervised Student Safety',
      description: 'Safe, landscaped outdoor play grounds and recreational play structures designed for early childhood physical agility and social play at Takiko Yoshida Mawatha.',
      features: ['Child-safe cushioned turf', 'Modular climbing apparatus', 'Shaded seating areas'],
    },
    {
      id: 'auditorium',
      name: 'Auditorium & Vocational Training Center',
      type: 'Assembly & Skills',
      imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=600',
      capacity: '300+ Attendees',
      coaches: 'Event & Technical Crew',
      description: 'Multipurpose venue for school assemblies, speech & drama, cultural programs, IT skill workshops, and teacher training seminars.',
      features: ['Acoustic sound system', 'Stage lighting rigs', 'HD projection facilities'],
    },
  ];

  return (
    <section className="py-12 bg-transparent text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER BAR */}
        <div className="border-b-2 border-slate-950 pb-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
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
          {facilities.map((fac) => (
            <motion.div
              key={fac.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group bg-white border-2 border-slate-950 rounded-2xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(15,23,42,0.1)] hover:shadow-[6px_6px_0px_0px_#8B1538] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 flex flex-col sm:flex-row h-full"
            >
              {/* Image Left Side on tablet/desktop */}
              <div className="relative w-full sm:w-2/5 h-48 sm:h-auto overflow-hidden bg-slate-100 shrink-0 border-b-2 sm:border-b-0 sm:border-r-2 border-slate-950">
                <img
                  src={fac.imageUrl}
                  alt={fac.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Type Badge Overlay */}
                <div className="absolute top-3 left-3 bg-slate-950 text-white px-2 py-0.5 text-[9px] font-mono font-extrabold uppercase rounded">
                  {fac.type}
                </div>
              </div>

              {/* Content Right Side */}
              <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                <div className="space-y-1.5">
                  {/* Capacity Info Tag */}
                  <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-slate-500">
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
                  <h3 className="font-serif font-black text-base sm:text-lg text-slate-950 group-hover:text-[#8B1538] transition-colors leading-tight">
                    {fac.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {fac.description}
                  </p>
                </div>

                {/* Features Checklist */}
                <div className="space-y-1 pt-2 border-t border-slate-100">
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
          ))}
        </div>

      </div>
    </section>
  );
};
