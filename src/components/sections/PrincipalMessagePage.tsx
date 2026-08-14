/**
 * ============================================================================
 * PRINCIPAL'S MESSAGE PAGE (components/sections/PrincipalMessagePage.tsx)
 * ============================================================================
 * Dedicated separate page for the Principal of Yoshida Shokanji International School,
 * featuring Mrs. Buddhini Jayasundera, her official welcome address, academic philosophy,
 * professional credentials, and direct LinkedIn profile integration.
 * ============================================================================
 */

import React from 'react';
import { motion } from 'motion/react';
import { SchoolEmblem } from '../ui/SchoolEmblem';
import { SplitTextButton } from '../ui/SplitTextButton';
import { Quote, Award, BookOpen, GraduationCap, HeartHandshake, ShieldCheck, Sparkles, Mail, Phone, ExternalLink, CheckCircle2 } from 'lucide-react';

export const PrincipalMessagePage: React.FC = () => {
  const pillars = [
    {
      icon: BookOpen,
      title: 'Cambridge & National Excellence',
      description: 'Rigorous academic standards preparing students for top international examinations and lifelong intellectual curiosity.',
    },
    {
      icon: HeartHandshake,
      title: 'Japanese & Cultural Ethics',
      description: 'Cultivating mindfulness, respect, punctuality, and mutual care inspired by Japanese educational philosophy.',
    },
    {
      icon: GraduationCap,
      title: 'Pastoral Care & Growth',
      description: 'A supportive, nurturing environment ensuring every child feels safe, valued, and empowered to reach their potential.',
    },
    {
      icon: ShieldCheck,
      title: 'Character & Leadership',
      description: 'Developing integrity, resilience, and collaborative teamwork through sports, arts, and community service.',
    },
  ];

  return (
    <div className="py-12 sm:py-16 bg-[#FAF9F6] text-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* PAGE HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs font-bold text-[#8B1538] uppercase tracking-widest flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-[#8B1538]/40" />
            <Sparkles className="w-3.5 h-3.5 text-[#8B1538]" />
            <span>Dedicated Principal's Desk</span>
            <span className="w-8 h-px bg-[#8B1538]/40" />
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-black tracking-tight text-slate-950">
            Message From The <span className="text-[#8B1538]">Principal</span>
          </h1>

          <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
            Welcome to Yoshida Shokanji International School. Read the official welcoming address and leadership philosophy from our Principal.
          </p>
        </div>

        {/* MAIN PRINCIPAL PROFILE & MESSAGE CARD */}
        <div className="bg-white border-2 border-slate-950 rounded-3xl p-8 sm:p-12 md:p-16 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: PRINCIPAL PORTRAIT & PROFESSIONAL INFO */}
          <div className="lg:col-span-5 flex flex-col items-center text-center space-y-6">
            <div className="relative group w-full max-w-sm">
              
              {/* Decorative Frame */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#8B1538]/20 via-rose-300/30 to-[#8B1538]/10 blur-md" />

              {/* Portrait Container */}
              <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border-4 border-slate-950 shadow-2xl bg-slate-100 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                  alt="Mrs. Buddhini Jayasundera, Principal"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />

                {/* Gradient Banner */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Overlay Details */}
                <div className="absolute bottom-4 left-4 right-4 text-left text-white space-y-1">
                  <span className="text-[10px] font-mono font-bold text-rose-300 uppercase tracking-widest block">
                    HEAD OF SCHOOL & PRINCIPAL
                  </span>
                  <h3 className="font-serif font-black text-xl text-white">
                    Mrs. Buddhini Jayasundera
                  </h3>
                  <p className="text-xs text-slate-200 font-medium">
                    B.A., M.Ed. (Leadership in Education)
                  </p>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-3 -right-3 w-14 h-14 rounded-full bg-white border-2 border-slate-950 shadow-xl flex items-center justify-center p-2 z-20">
                <SchoolEmblem className="w-full h-full" />
              </div>
            </div>

            {/* LinkedIn Profile Link Button */}
            <a
              href="https://www.linkedin.com/in/buddhini-jayasundera-5b477035a/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-xs py-3 px-4 rounded-xl bg-slate-950 text-white hover:bg-[#8B1538] transition-all border-2 border-slate-950 text-xs font-black shadow-[4px_4px_0px_0px_rgba(139,21,56,1)] flex items-center justify-center gap-2 group"
            >
              <ExternalLink className="w-4 h-4 text-rose-300 group-hover:scale-110 transition-transform" />
              <span>Connect on Professional LinkedIn</span>
            </a>

            {/* Contact Details */}
            <div className="pt-2 text-xs text-slate-600 font-medium space-y-1 text-center">
              <span className="inline-flex items-center gap-1.5 font-semibold text-slate-800">
                <Mail className="w-3.5 h-3.5 text-[#8B1538]" />
                <span>principal@yoshida.edu.lk</span>
              </span>
              <p className="font-mono text-[11px] text-slate-500">
                Sapugaskanda Campus, Takiko Yoshida Mawatha
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: WELCOME ADDRESS & PHILOSOPHY */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-[#8B1538] text-xs font-bold">
              <span>Official Principal's Address</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-black text-slate-950 leading-snug">
              "Education is the shared commitment between home and school to unlock every child's highest potential."
            </h2>

            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
              <p>
                Dear Parents, Students, and Well-Wishers,
              </p>
              <p>
                It is with great joy and pride that I welcome you to <strong className="text-slate-950">Yoshida Shokanji International School</strong>. For over two decades, our campus in Sapugaskanda has stood as a beacon of academic excellence, character formation, and cultural harmony.
              </p>
              <p>
                Our philosophy bridges the best of both worlds: the globally recognized <strong className="text-[#8B1538]">Cambridge International Curriculum</strong> paired with the profound discipline, cleanliness, and mutual respect of <strong className="text-[#8B1538]">Japanese educational values</strong>. We believe that true education goes beyond textbooks—it builds resilient character, emotional intelligence, and a lifelong love for learning.
              </p>
              <p>
                Our dedicated faculty members work tirelessly to maintain a supportive 1:15 teacher-student ratio, ensuring that every pupil receives individualized attention, moral encouragement, and rigorous academic challenge.
              </p>
              
              <div className="p-4 rounded-xl bg-slate-50 border-2 border-slate-200 text-xs font-semibold text-slate-900 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>We invite you to visit our campus, meet our educators, and experience the Yoshida community firsthand.</span>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-serif font-black text-base text-slate-950">Mrs. Buddhini Jayasundera</h4>
                  <p className="text-xs text-slate-600">Principal, Yoshida Shokanji International School</p>
                </div>

                <SplitTextButton
                  href="#/contact"
                  text="Book Campus Visit"
                  theme="maroon"
                />
              </div>
            </div>
          </div>
        </div>

        {/* PILLARS OF LEADERSHIP GRID */}
        <div className="space-y-8 pt-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] font-mono font-extrabold text-[#8B1538] uppercase tracking-widest block">
              • CORE VALUES •
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-black text-slate-950">
              Our Educational <span className="text-[#8B1538]">Pillars</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border-2 border-slate-950 rounded-2xl p-6 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all space-y-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-rose-50 text-[#8B1538] border-2 border-slate-950 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif font-black text-lg text-slate-950">{pillar.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
