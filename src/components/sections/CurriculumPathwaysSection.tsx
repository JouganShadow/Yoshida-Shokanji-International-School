/**
 * ============================================================================
 * ACADEMICS SECTION (components/sections/AcademicsSection.tsx)
 * ============================================================================
 * Curated academic streams presented in a high-contrast Skillshare Class Card Grid.
 * Features 2px solid dark borders, flat offset shadows, metadata badges (student counts,
 * difficulty/level, duration), and a focus on premium editorial typography.
 * ============================================================================
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Users, Clock, Languages, Award, Shield, CheckCircle2, ChevronRight, GraduationCap } from 'lucide-react';
import { SplitTextButton } from '../ui/SplitTextButton';
import { ImageWithSkeleton, CourseCardSkeleton } from '../ui/Skeleton';
import feesImageUrl from '../../assets/images/Fees.jpg';

interface AcademicCourse {
  id: string;
  title: string;
  category: 'Primary' | 'Secondary' | 'Advanced' | 'Language';
  coverImage: string;
  ageGroup: string;
  duration: string;
  ratio: string;
  skillsGained: string[];
  studentsCount: string;
  ratingBadge: string;
  description: string;
  highlights: string[];
}

export const CurriculumPathwaysSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Primary', 'Secondary', 'Advanced', 'Language'];

  const courses: AcademicCourse[] = [
    {
      id: 'pre-nursery',
      title: 'Pre-School & Montessori Foundations',
      category: 'Primary',
      coverImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600',
      ageGroup: 'Age 2.5 - 5 Years',
      duration: 'Full-Time',
      ratio: '1:10 Ratio',
      studentsCount: '180+ Enrolled',
      ratingBadge: 'Best Montessori Standard',
      skillsGained: ['Sensory Training', 'English Phonics', 'Japanese Politeness', 'Social Play'],
      description: 'Blending international early-childhood pedagogy with core Japanese values of orderliness, empathy, and respect for nature.',
      highlights: ['Individual learning apparatus', 'Cleanliness & self-care drills', 'Speech & language therapy play'],
    },
    {
      id: 'cambridge-primary',
      title: 'Cambridge Primary Curriculum',
      category: 'Primary',
      coverImage: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=600',
      ageGroup: 'Age 6 - 11 Years',
      duration: '5 Academic Years',
      ratio: '1:15 Ratio',
      studentsCount: '420+ Enrolled',
      ratingBadge: 'Top Cambridge Foundation',
      skillsGained: ['Critical Arithmetic', 'Scientific Inquiry', 'ICT Literacy', 'Speech & Drama'],
      description: 'An international academic framework designed to build deep cognitive comprehension, structured math skills, and proactive scientific reasoning.',
      highlights: ['Cambridge Progression Exams', 'Primary level research projects', 'Interactive language classrooms'],
    },
    {
      id: 'cambridge-igcse',
      title: 'Cambridge IGCSE (Ordinary Levels)',
      category: 'Secondary',
      coverImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600',
      ageGroup: 'Age 12 - 16 Years',
      duration: '2-Year Syllabus',
      ratio: '1:12 Ratio',
      studentsCount: '250+ Enrolled',
      ratingBadge: '100% Pass Distinction',
      skillsGained: ['Advanced Physics', 'Business Economics', 'Computer Science', 'Literature'],
      description: 'The world’s most popular secondary qualification, recognized globally for nurturing analytical critical-thinking and academic rigor.',
      highlights: ['Dedicated science lab practice', 'Weekly examination mock cycles', 'Top-in-the-World prep sessions'],
    },
    {
      id: 'gce-advanced',
      title: 'Cambridge GCE Advanced Levels (A/L)',
      category: 'Advanced',
      coverImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600',
      ageGroup: 'Age 17 - 19 Years',
      duration: '2-Year Specialization',
      ratio: '1:10 Ratio',
      studentsCount: '150+ Enrolled',
      ratingBadge: 'Ivy League Entry Path',
      skillsGained: ['Advanced Calculus', 'Organic Chemistry', 'AI Coding', 'Accounting Principles'],
      description: 'Designed as a gateway to top-tier international universities. Focuses on deep conceptual specialization, academic writing, and university readiness.',
      highlights: ['University admission counseling', 'Student leadership council posts', 'Advanced research seminars'],
    },
    {
      id: 'japanese-culture',
      title: 'Japanese Language & Cultural Heritage',
      category: 'Language',
      coverImage: 'https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&q=80&w=600',
      ageGroup: 'All Grade Levels',
      duration: 'Weekly Elective',
      ratio: '1:12 Ratio',
      studentsCount: '650+ Enrolled',
      ratingBadge: 'Yoshida Cultural Core',
      skillsGained: ['Japanese Hiragana/Katana', 'Traditional Etiquette', 'Kanji Calligraphy', 'Tea Ceremony'],
      description: 'Our signature cultural curriculum directly connecting Sri Lankan children to Japanese values of moral integrity, discipline, and respect.',
      highlights: ['Japanese cultural day celebrations', 'Direct student exchange counseling', 'JLPT N5/N4 exam training'],
    },
  ];

  const filteredCourses = activeCategory === 'All' 
    ? courses 
    : courses.filter(c => c.category === activeCategory);

  return (
    <section className="py-12 bg-transparent text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Skillshare-style Category Filtering Menu */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-slate-950 pb-6 mb-10 gap-6">
          <div>
            <span className="text-[11px] font-mono font-extrabold text-[#8B1538] uppercase tracking-widest block mb-1">
              • ACADEMIC DIRECTORY & SYLLABI •
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-slate-950">
              Explore Our <span className="text-[#8B1538]">Curriculum Pathways</span>
            </h2>
          </div>

          {/* Clean Flat Category Buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all border-2 ${
                    isActive
                      ? 'bg-[#8B1538] text-white border-slate-950 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] translate-y-[-2px]'
                      : 'bg-white text-slate-800 border-slate-200 hover:border-slate-950 hover:bg-slate-50'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Courses Grid - SKILLSHARE STYLE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <motion.div
              key={course.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group bg-white border-2 border-slate-950 rounded-2xl overflow-hidden shadow-[5px_5px_0px_0px_rgba(139,21,56,0.15)] hover:shadow-[8px_8px_0px_0px_rgba(139,21,56,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 flex flex-col h-full"
            >
              {/* Cover Image & Category Tag Overlay */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden border-b-2 border-slate-950 bg-slate-100">
                <ImageWithSkeleton
                  src={course.coverImage}
                  alt={course.title}
                  imgClassName="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Custom Overlay Tag */}
                <div className="absolute top-4 left-4 bg-slate-950 text-white px-2.5 py-1 text-[10px] font-mono font-extrabold uppercase tracking-wider rounded border border-slate-800 z-20">
                  {course.category}
                </div>

                {/* Rating Badge Overlay */}
                <div className="absolute bottom-4 left-4 bg-[#8B1538] text-white px-2 py-0.5 text-[9px] font-sans font-bold uppercase tracking-wide rounded z-20">
                  {course.ratingBadge}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  {/* Classroom Metrics row */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-slate-500 font-mono font-bold">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#8B1538]" />
                      <span>{course.duration}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-slate-700">
                      <Users className="w-3.5 h-3.5 text-[#8B1538]" />
                      <span>{course.studentsCount}</span>
                    </span>
                    <span>•</span>
                    <span className="text-slate-700">{course.ageGroup}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif font-black text-lg sm:text-xl text-slate-950 group-hover:text-[#8B1538] transition-colors leading-tight">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {course.description}
                  </p>
                </div>

                {/* Skills gained pills */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono font-extrabold text-[#8B1538] uppercase tracking-wider block">
                    Core Developmental Focus:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {course.skillsGained.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-slate-100 text-slate-800 border border-slate-300 text-[10px] font-sans font-semibold px-2 py-0.5 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key highlights (Curriculum features) */}
                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <span className="text-[10px] font-mono font-extrabold text-[#8B1538] uppercase tracking-wider block">
                    Highlights:
                  </span>
                  <ul className="space-y-1">
                    {course.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center gap-1.5 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom solid card link / button trigger */}
              <div className="p-6 pt-0 border-t border-slate-100">
                <a
                  href="#contact"
                  className="w-full mt-4 py-2.5 px-4 bg-white hover:bg-slate-950 hover:text-white border-2 border-slate-950 rounded-xl text-xs font-bold text-slate-950 transition-all text-center flex items-center justify-center gap-2 group-hover:border-slate-950"
                >
                  <span>Enquire for Admissions</span>
                  <ChevronRight className="w-4 h-4 text-[#8B1538] group-hover:text-white" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3. Bottom Overview Info box (Skillshare style banner) */}
        <div className="mt-16 bg-[#8B1538] text-white rounded-2xl border-2 border-slate-950 p-8 sm:p-10 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute top-0 right-0 w-80 h-80 bg-rose-800/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="space-y-3 max-w-2xl text-left z-10">
            <span className="text-[10px] font-mono font-bold text-rose-300 uppercase tracking-widest block">
              • SCHOLARSHIPS & ACADEMIC SUPPORT •
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-black">
              Nurturing High Achievers With Merit Scholarships
            </h3>
            <p className="text-xs sm:text-sm text-rose-100 leading-relaxed font-medium">
              Yoshida Shokanji offers fully funded and partial merit-based scholarships for exceptionally performing students in Cambridge exams, national level sports, and international championships.
            </p>
          </div>

          <div className="shrink-0 z-10">
            <a
              href={feesImageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between gap-3 px-5 py-3 rounded-full font-sans text-xs sm:text-sm font-bold tracking-wide uppercase transition-all duration-300 border shadow-lg hover:shadow-xl active:scale-95 bg-lime-400 text-neutral-950 hover:bg-lime-300 border-lime-300/50"
            >
              <span>Download Scholarship Guide</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
