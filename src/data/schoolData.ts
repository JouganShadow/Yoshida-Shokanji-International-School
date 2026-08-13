/**
 * ============================================================================
 * SCHOOL DATA FILE (data/schoolData.ts)
 * ============================================================================
 * This file contains all central text, statistics, management team information,
 * achievements, residential corridor numbers, and current notices.
 *
 * EDITING INSTRUCTIONS:
 * - Modify any of the text values below to instantly update content across
 *   the entire website.
 * - Change numbers, phone numbers, staff names, images, or notices here.
 * ============================================================================
 */

import { SchoolStat, ResidentialArea, AchievementItem, ManagementMember, SchoolNotice } from '../types';

/**
 * ----------------------------------------------------------------------------
 * 1. SCHOOL KEY STATISTICS
 * ----------------------------------------------------------------------------
 * Used in the Stats & Culture section to display key metrics.
 * You can change values, labels, subtitles, or icon names ('Award', 'Trophy', etc.).
 */
export const SCHOOL_STATS: SchoolStat[] = [
  {
    id: 'culture',
    value: '20+',
    label: 'Years of Excellence',
    subtitle: 'Rich cultural heritage & holistic international education since establishment.',
    iconName: 'Award',
  },
  {
    id: 'cambridge',
    value: '2',
    label: 'World Cambridge Awards',
    subtitle: 'Top in the World Awards: 2 World Wins in French & Computer Science.',
    iconName: 'Trophy',
  },
  {
    id: 'students',
    value: '1,000+',
    label: 'Enrolled Students',
    subtitle: 'Vibrant, multicultural student body across Nursery to Advanced Level.',
    iconName: 'Users',
  },
  {
    id: 'passrate',
    value: '100%',
    label: 'Exam Pass Rate',
    subtitle: 'Consistent distinction records in Cambridge IGCSE & A-Levels.',
    iconName: 'GraduationCap',
  },
  {
    id: 'ratio',
    value: '1:15',
    label: 'Teacher-Student Ratio',
    subtitle: 'Personalized mentoring ensuring every child achieves full potential.',
    iconName: 'UserCheck',
  },
  {
    id: 'clubs',
    value: '30+',
    label: 'Clubs & Sports Teams',
    subtitle: 'State-of-the-art Karate Dojo, Olympic swimming pool & robotics labs.',
    iconName: 'Activity',
  },
];

/**
 * ----------------------------------------------------------------------------
 * 2. RESIDENTIAL AREAS (20-MINUTE CORRIDOR)
 * ----------------------------------------------------------------------------
 * Displays surrounding suburbs, estimated commute times, and distances.
 * Used in the Location & Map Section.
 */
export const RESIDENTIAL_AREAS: ResidentialArea[] = [
  {
    name: 'Kiribathgoda',
    timeMinutes: 8,
    distanceKm: '3.2 km',
    description: 'Bustling commercial hub with direct AC bus route access to Sapugaskanda campus.',
  },
  {
    name: 'Kelaniya',
    timeMinutes: 12,
    distanceKm: '5.1 km',
    description: 'Historic city area with easy highway connecting access for commuting families.',
  },
  {
    name: 'Kadawatha',
    timeMinutes: 14,
    distanceKm: '6.5 km',
    description: 'Outer Circular Highway interchange node with dedicated school transport shuttle service.',
  },
  {
    name: 'Makola',
    timeMinutes: 3,
    distanceKm: '1.1 km',
    description: 'Immediate neighborhood residential sector within safe walking & quick drop-off distance.',
  },
  {
    name: 'Delgoda',
    timeMinutes: 15,
    distanceKm: '7.8 km',
    description: 'Serene residential township connected via Biyagama-Sapugaskanda main corridor.',
  },
  {
    name: 'Kaduwela',
    timeMinutes: 18,
    distanceKm: '9.2 km',
    description: 'Key eastern suburb accessed seamlessly via Biyagama expressway bridge link.',
  },
];

/**
 * ----------------------------------------------------------------------------
 * 3. STUDENT & CO-CURRICULAR ACHIEVEMENTS
 * ----------------------------------------------------------------------------
 * Highlighted in the Achievements filterable section.
 * You can edit titles, categories, images, or add new items.
 */
export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'karate-championship',
    title: 'International Shotokan Karate Gold Champions',
    category: 'Sports',
    year: '2024 - 2025',
    description: 'Yoshida Karate Dojo secured 12 Gold Medals at the National Inter-School Martial Arts Championship in Colombo, maintaining Japan-Sri Lanka martial arts tradition.',
    imageUrl: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80&w=1000',
    statsTag: '12 Gold Medals',
  },
  {
    id: 'cambridge-award',
    title: 'Top in the World Cambridge Learner Award',
    category: 'Academic',
    year: '2023 - 2024',
    description: 'Recognized by Cambridge Assessment International Education for achieving highest score worldwide, including 2 World Wins in French and 2 World Wins in Computer Science.',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000',
    statsTag: 'World #1 Award',
  },
  {
    id: 'swimming-gala',
    title: 'All-Island Aquatic Meet Overall Trophy',
    category: 'Sports',
    year: '2024',
    description: 'The Yoshida Swimming Squad set 3 national school records in 100m Butterfly and Medley Relay at the Sugathadasa Indoor Aquatic Complex.',
    imageUrl: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&q=80&w=1000',
    statsTag: '3 Record Time Breaks',
  },
  {
    id: 'japanese-culture',
    title: 'Japanese Speech & Cultural Pageant First Place',
    category: 'Cultural',
    year: '2024',
    description: 'Students demonstrated fluent Japanese speech, calligraphy, and traditional musical arts during the Embassy of Japan Annual Cultural Exchange.',
    imageUrl: 'https://images.unsplash.com/photo-1528164344705-47542687990d?auto=format&fit=crop&q=80&w=1000',
    statsTag: 'Embassy Award',
  },
  {
    id: 'robotics-expo',
    title: 'Young Inventors & Robotics Challenge Champions',
    category: 'Academic',
    year: '2025',
    description: 'Yoshida STEM Club constructed an autonomous AI environmental monitoring rover for local Sri Lankan wetland conservation.',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000',
    statsTag: 'National Innovation Winner',
  },
  {
    id: 'scouting-badgemen',
    title: 'President Scouts & Girl Guide Badge Honours',
    category: 'Leadership',
    year: '2024',
    description: '5 Senior Yoshida Scouts were awarded the prestigious President Scout Badge following community service initiatives in Gampaha district.',
    imageUrl: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1000',
    statsTag: '5 President Badges',
  },
];

/**
 * ----------------------------------------------------------------------------
 * 4. SCHOOL MANAGEMENT & BOARD MEMBERS
 * ----------------------------------------------------------------------------
 * Displayed in the Management Section.
 * Edit names, titles, bios, quotes, and image links here.
 */
export const MANAGEMENT_MEMBERS: ManagementMember[] = [
  {
    id: 'chairman',
    name: 'Ven. Banagala Upatissa Nayaka Thero',
    role: 'Chairman',
    bio: 'Founder and Chairman of Yoshida Educational and Agricultural Development Society. Dedicated to providing modern international education in English medium while preserving Sri Lankan cultural values, religious heritage, and moral discipline.',
    imageUrl: 'https://yoshida.edu.lk/assets/img/team/5.png',
    quote: 'The purpose of establishing Yoshida Shokanji International School was to provide an opportunity for children to receive an education in the English Medium in a conducive atmosphere while preserving Sri Lankan traditional values and cultural heritage.',
    qualifications: 'Chairman & Founder, Chief Incumbent of Japan Sri Lanka Mahabodhi Viharaya',
  },
  {
    id: 'ceo',
    name: 'Mrs. Ambapali Sikurajapathy',
    role: 'Chief Executive Officer',
    bio: 'Chief Executive Officer directing operational strategy, academic standards, and institutional development across primary and secondary educational sectors.',
    imageUrl: 'https://yoshida.edu.lk/assets/img/team/1.jpg',
    qualifications: 'Chief Executive Officer',
  },
  {
    id: 'director-duminda',
    name: 'Mr. Duminda Mayadunna',
    role: 'Director',
    bio: 'Member of the Board of Directors, overseeing strategic planning, administrative governance, and infrastructure development.',
    imageUrl: 'https://yoshida.edu.lk/assets/img/team/WhatsApp%20Image%202025-03-13%20at%2010.28.00_91b63f29.jpg',
    qualifications: 'Member of the Board of Directors',
  },
  {
    id: 'director-prabath',
    name: 'Dr. Prabath Weerasinghe',
    role: 'Director',
    bio: 'Member of the Board of Directors, bringing academic oversight, healthcare guidance, and research initiatives to student development.',
    imageUrl: 'https://yoshida.edu.lk/assets/img/team/Dr%20Weerasinghe.jpg',
    qualifications: 'Member of the Board of Directors',
  },
  {
    id: 'chief-advisor',
    name: 'Mr. Brigadier Udaya Ariyaratne',
    role: 'Chief Advisor',
    bio: 'Chief Advisor to the Management, guiding leadership, student discipline, campus security, and strategic institutional governance.',
    imageUrl: 'https://yoshida.edu.lk/assets/img/team/3.jpg',
    qualifications: 'Chief Advisor to Management',
  },
  {
    id: 'headmaster',
    name: 'Mr. Sisira De Silva',
    role: 'Head Master / Disciplinarian',
    bio: 'Head Master and Chief Disciplinarian, leading academic discipline, student conduct, co-curricular sports, and moral welfare.',
    imageUrl: 'https://yoshida.edu.lk/assets/img/team/HM.jpeg',
    qualifications: 'Head Master & Disciplinarian',
  },
];

/**
 * ----------------------------------------------------------------------------
 * 5. CURRENT NOTICES & SCHOOL ANNOUNCEMENTS
 * ----------------------------------------------------------------------------
 * Displayed in the "Current Stuff & School Notices" section.
 * You can add new announcements, change dates, or mark items as urgent.
 */
export const SCHOOL_NOTICES: SchoolNotice[] = [
  {
    id: 'n1',
    title: 'Admissions Open for 2026/2027 Academic Year',
    date: 'July 20, 2026',
    category: 'Admission',
    summary: 'Applications are now invited for Nursery, Primary, Cambridge IGCSE, and A-Level streams. Early registration entrance evaluations are scheduled for next month.',
    urgent: true,
  },
  {
    id: 'n2',
    title: 'Cambridge Outstanding Learner Awards Ceremony',
    date: 'July 15, 2026',
    category: 'Academic',
    summary: 'Congratulations to our 4 world-winning students who received official Cambridge Assessment commendations at the Bandaranaike Memorial Hall.',
  },
  {
    id: 'n3',
    title: 'Annual Inter-House Swimming Gala & Aquatic Meet',
    date: 'July 08, 2026',
    category: 'Sports',
    summary: 'The Annual Aquatic Championship will take place at the Yoshida Olympic-Standard Pool Complex. Parents and alumni are warmly invited.',
  },
  {
    id: 'n4',
    title: 'Japanese Exchange Delegation & Cultural Day',
    date: 'June 28, 2026',
    category: 'Event',
    summary: 'A 20-member delegation from Tokyo sister schools visited Yoshida campus for a week of collaborative workshops in Japanese arts and STEM robotics.',
  },
];
