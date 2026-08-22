/**
 * ============================================================================
 * PRINCIPAL'S SECTION (components/sections/PrincipalSection.tsx)
 * ============================================================================
 * Prominent, large-scale showcase section for the Principal's Desk and Welcome Message.
 * Features glassmorphic cards, block reveal swipe animations, key leadership pillars,
 * signature quote framing, and interactive message expansion.
 * ============================================================================
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import principaljpg from '../../assets/principal.jpg';
import { SchoolEmblem } from '../ui/SchoolEmblem';
import { SplitTextButton } from '../ui/SplitTextButton';
import { Quote, Award, BookOpen, GraduationCap, HeartHandshake, ShieldCheck, Sparkles, ChevronDown, ChevronUp, Mail, CheckCircle2 } from 'lucide-react';

/**
 * CardBlockReveal - A swipe curtain reveal for full component blocks.
 */
const CardBlockReveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  blockColor?: string;
  className?: string;
}> = ({ children, delay = 0, blockColor = 'bg-slate-200', className = '' }) => {
  return (
    <div className={`relative overflow-hidden rounded-3xl ${className}`}>
      {/* Revealed Content */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.01, delay: delay + 0.38 }}
        className="h-full"
      >
        {children}
      </motion.div>

      {/* Light Gray / Maroon Curtain Block Swiping Across */}
      <motion.div
        initial={{ left: '0%', width: '0%' }}
        whileInView={{
          left: ['0%', '0%', '100%'],
          width: ['0%', '100%', '0%'],
        }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{
          duration: 0.85,
          ease: [0.77, 0, 0.175, 1],
          delay: delay,
          times: [0, 0.45, 1],
        }}
        className={`absolute inset-y-0 ${blockColor} z-30 pointer-events-none rounded-3xl border border-slate-300/80 shadow-lg`}
      />
    </div>
  );
};

export const PrincipalWelcomeSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const pillars = [
    {
      icon: BookOpen,
      title: 'Cambridge Academic Rigor',
      description: 'Fostering critical thinking, international benchmarks, and Top-in-the-World examination performance.',
    },
    {
      icon: HeartHandshake,
      title: 'Japanese Character Values',
      description: 'Nurturing self-discipline, respect, cleanliness, and harmony based on Japanese educational philosophy.',
    },
    {
      icon: GraduationCap,
      title: 'Holistic Student Growth',
      description: 'Balancing academic brilliance with Olympic-grade athletics, martial arts, and creative arts.',
    },
    {
      icon: ShieldCheck,
      title: 'Personalized Mentorship',
      description: 'Maintaining a 1:15 teacher-student ratio so every child is recognized, guided, and inspired.',
    },
  ];

  return (
    <section id="principal" className="relative py-24 bg-transparent text-slate-900 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* SECTION HEADER BADGE */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-bold text-[#8B1538] uppercase tracking-widest flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-[#8B1538]/40" />
            <Sparkles className="w-3.5 h-3.5 text-[#8B1538]" />
            <span>Academic Leadership & Inspiration</span>
            <span className="w-8 h-px bg-[#8B1538]/40" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950">
            Message From The <span className="text-[#8B1538]">Chairman's Desk</span>
          </h2>

          <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-medium">
            Welcoming every student into a warm, disciplined, and world-class educational sanctuary at Yoshida Shokanji International School.
          </p>
        </div>

        {/* FEATURED PRINCIPAL SHOWCASE CARD (BIG SECTION) */}
        <CardBlockReveal delay={0.1} blockColor="bg-slate-200">
          <div className="relative rounded-3xl bg-white/90 border border-slate-200/90 p-8 sm:p-12 md:p-16 shadow-2xl backdrop-blur-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Ambient Lighting Gradients */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B1538]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-100/50 rounded-full blur-2xl pointer-events-none" />

            {/* LEFT COLUMN: CHAIRMAN PORTRAIT & EMBLEM BADGE */}
            <div className="lg:col-span-5 flex flex-col items-center text-center space-y-6">
              <div className="relative group">
                
                {/* Decorative Glowing Backdrop Frame */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#8B1538]/30 via-rose-300/40 to-[#8B1538]/20 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Main Portrait Frame */}
                <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-slate-100">
                  <img
                    src="https://yoshida.edu.lk/assets/img/team/5.png"
                    alt="Most Ven. Banagala Upatissa Nayaka Thero, Chairman & Founder"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  {/* Name Badge Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-left text-white space-y-0.5">
                    <span className="text-[10px] font-mono font-bold text-rose-300 uppercase tracking-widest block">
                      CHAIRMAN & FOUNDER
                    </span>
                    <h3 className="font-serif font-black text-lg text-white leading-snug">
                      Most Ven. Banagala Upatissa Nayaka Thero
                    </h3>
                    <p className="text-xs text-slate-200 font-medium">
                      Chief Sangha Nayake of Japan • Chairman, Mahabodhi Society
                    </p>
                  </div>
                </div>

                {/* Floating Crest Badge */}
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-white border-2 border-[#8B1538] shadow-2xl flex items-center justify-center p-2 z-20">
                  <SchoolEmblem className="w-full h-full drop-shadow" />
                </div>

                {/* Floating Experience Tag */}
                <div className="absolute -bottom-3 -left-3 bg-[#8B1538] text-white px-4 py-2 rounded-xl text-xs font-bold shadow-lg flex items-center gap-2 z-20">
                  <Award className="w-4 h-4 text-amber-300" />
                  <span>Est. 2000 in Sapugaskanda</span>
                </div>
              </div>

              {/* Quick Contact & Office Hours */}
              <div className="pt-2 text-xs text-slate-600 font-medium space-y-1">
                <span className="inline-flex items-center gap-1.5 font-semibold text-slate-800">
                  <Mail className="w-3.5 h-3.5 text-[#8B1538]" />
                  <span>info@yoshida.edu.lk</span>
                </span>
                <p className="font-mono text-[11px] text-slate-500">
                  Takiko Yoshida Mawatha, Sapugaskanda, Sri Lanka
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN: WELCOME ADDRESS & PILLARS */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Heart-Grabbing Quote Block */}
              <div className="relative p-6 sm:p-8 rounded-2xl bg-rose-50/80 border border-rose-200/80 shadow-sm space-y-3">
                <Quote className="w-8 h-8 text-[#8B1538] opacity-80" />
                
                <h3 className="font-serif text-xl sm:text-2xl font-black text-slate-950 leading-snug">
                  "The purpose of establishing Yoshida Shokanji International School in the year 2000 was to provide an opportunity for children to receive an education in the English Medium in a conducive atmosphere consistent with modern educational trends, while preserving Sri Lankan traditional values and cultural heritage."
                </h3>

                <p className="text-xs sm:text-sm text-slate-700 font-bold leading-relaxed">
                  — Most Ven. Banagala Upatissa Nayaka Thero (Chairman & Founder)
                </p>
              </div>

              {/* Main Welcome Message Paragraphs */}
              <div className="space-y-4 text-slate-800 text-sm sm:text-base leading-relaxed font-medium">
                <p>
                  Welcome to <strong className="text-slate-950">Yoshida Shokanji International School</strong>. Founded under the visionary patronage of the <strong className="text-[#8B1538]">Yoshida Educational and Social Service Foundation</strong> (est. 1979 in partnership with Japanese philanthropist Madam Takiko Yoshida), our institution stands as a unique beacon in Sri Lanka’s educational landscape.
                </p>

                {/* Collapsible Extended Message */}
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-4 pt-2 border-t border-slate-200 text-slate-700"
                  >
                    <p>
                      We harmoniously fuse the globally renowned <strong className="text-slate-950">Cambridge International & National Curricula</strong> with the timeless discipline, mutual respect, and moral character of Sri Lankan and Japanese educational ethics.
                    </p>
                    <p>
                      Under the active leadership of Head Master Mr. Sisira De Silva, Chief Advisor Brigadier Udaya Ariyaratne, and our dedicated academic board, we maintain a supportive 1:15 teacher-student ratio. Our campus at Takiko Yoshida Mawatha features state-of-the-art Shotokan Karate Dojo facilities, an Olympic-standard 6-lane aquatic center, science laboratories, and vocational training suites.
                    </p>
                    <div className="p-4 rounded-xl bg-slate-100/90 border border-slate-200 text-xs font-semibold text-slate-900 flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>Admissions are open for Pre-Nursery, Primary, Cambridge IGCSE, and A-Level streams.</span>
                    </div>
                  </motion.div>
                )}

                {/* Expand / Collapse Toggle Button */}
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8B1538] hover:text-slate-950 transition-colors cursor-pointer py-1"
                >
                  <span>{isExpanded ? 'Show Less' : 'Read Full Welcome Message'}</span>
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>

              {/* Key Leadership Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                {pillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-50/90 border border-slate-200/80 hover:border-[#8B1538]/40 transition-colors flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-rose-100 text-[#8B1538] flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-xs text-slate-950">
                          {pillar.title}
                        </h4>
                        <p className="text-[11px] text-slate-600 leading-normal mt-0.5 font-medium">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <SplitTextButton
                  href="#contact"
                  text="Meet With The Principal"
                  theme="maroon"
                />

                <a
                  href="#contact"
                  className="px-6 py-3 rounded-full text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-all flex items-center gap-2 shadow-sm"
                >
                  <BookOpen className="w-4 h-4 text-[#8B1538]" />
                  <span>Request Academic Prospectus</span>
                </a>
              </div>

            </div>

          </div>
        </CardBlockReveal>

      </div>
    </section>
  );
};
