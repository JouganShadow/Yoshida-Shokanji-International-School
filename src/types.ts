/**
 * ============================================================================
 * TYPE DEFINITIONS FILE (types.ts)
 * ============================================================================
 * This file defines all data structures and TypeScript interfaces used across
 * the Yoshida Shokanji International School website.
 *
 * EDITING GUIDE:
 * - If you want to add new fields to stats, achievements, notices, or staff,
 *   update these interfaces first, then update 'data/schoolData.ts'.
 * ============================================================================
 */

/**
 * Interface representing a key statistic or metric card (e.g., "20+ Years").
 */
export interface SchoolStat {
  id: string;        // Unique identifier (e.g. 'culture', 'cambridge')
  label: string;     // Main title for the stat (e.g. 'Years of Excellence')
  value: string;     // Display value (e.g. '20+', '100%')
  subtitle: string;  // Brief explanation or subtitle text
  iconName: string;  // Name of the Lucide icon to display (e.g. 'Award', 'Trophy')
}

/**
 * Interface representing a surrounding residential suburb and its commute distance/time.
 */
export interface ResidentialArea {
  name: string;         // Suburb name (e.g. 'Kiribathgoda', 'Kelaniya')
  timeMinutes: number;  // Commute time in minutes from campus (e.g. 8, 12)
  distanceKm: string;   // Distance in kilometers (e.g. '3.2 km')
  description: string;  // Short notes on access, bus routes, or location context
}

/**
 * Interface representing a student or co-curricular achievement.
 */
export interface AchievementItem {
  id: string;                                                  // Unique ID (e.g. 'karate-championship')
  title: string;                                               // Achievement headline
  category: 'Sports' | 'Academic' | 'Cultural' | 'Leadership'; // Category filter
  year: string;                                                // Year or range (e.g. '2024 - 2025')
  description: string;                                         // Detailed description of the achievement
  imageUrl: string;                                            // Unsplash or hosted image URL
  statsTag: string;                                            // Highlight tag (e.g. '12 Gold Medals')
}

/**
 * Interface representing a school leadership or administration board member.
 */
export interface ManagementMember {
  id: string;             // Unique ID (e.g. 'chairman', 'ceo')
  name: string;           // Full name and title
  role: string;           // Position/Role (e.g. 'Chairman', 'Chief Executive Officer')
  bio: string;            // Biography & responsibilities summary
  imageUrl: string;       // Hosted headshot or profile photo URL
  quote?: string;         // Optional quote from the leader
  qualifications: string; // Academic/Professional titles
}

/**
 * Interface representing a current notice, news update, or calendar event.
 */
export interface SchoolNotice {
  id: string;                                               // Unique ID (e.g. 'n1', 'n2')
  title: string;                                            // Notice headline
  date: string;                                             // Published date string
  category: 'Academic' | 'Sports' | 'Admission' | 'Event';  // Category tag
  summary: string;                                          // Brief summary of the notice
  urgent?: boolean;                                         // Optional boolean to highlight as urgent
}
