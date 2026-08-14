/**
 * ============================================================================
 * CONTACT & FOOTER SECTION (components/sections/ContactFooter.tsx)
 * ============================================================================
 * Contains contact phone numbers, email addresses, office hours, campus address,
 * quick admission inquiry form, and copyright details.
 *
 * KEY EDITING POINTS:
 * - Phone numbers: Modify `tel:` links and text.
 * - Emails: Modify `mailto:` links and text.
 * - Quick Inquiry Form: Handles form submit state and dropdown options.
 * ============================================================================
 */

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Shield } from 'lucide-react';
import { SplitTextButton } from '../ui/SplitTextButton';

export const ContactFooter: React.FC = () => {
  // State for inquiry form submission response feedback
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Controlled form state with department routing
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    grade: 'Nursery / Playgroup',
    departmentEmail: 'info@yoshida.edu.lk',
    message: '',
  });

  // Handle form submission via server backend API to department email
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/submit-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setFormSubmitted(true);
        setTimeout(() => {
          setFormSubmitted(false);
          setFormData({
            name: '',
            phone: '',
            email: '',
            grade: 'Nursery / Playgroup',
            departmentEmail: 'info@yoshida.edu.lk',
            message: '',
          });
        }, 6000);
      } else {
        setSubmitError(data.error || 'Failed to submit inquiry.');
      }
    } catch (err) {
      console.error('Inquiry submission error:', err);
      setSubmitError('Network error. Please try calling the school directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="relative w-full bg-transparent text-slate-900 overflow-hidden">
      
      {/* ------------------------------------------------------------------ */}
      {/* MAIN FOOTER CONTAINER                                              */}
      {/* ------------------------------------------------------------------ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12 relative z-10">
        
        {/* Translucent Glass Footer Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white/85 border border-slate-200/90 backdrop-blur-xl shadow-xl mb-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            
            {/* ------------------------------------------------------------ */}
            {/* COLUMN 1: CAMPUS ADDRESS                                     */}
            {/* ------------------------------------------------------------ */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#8B1538] font-serif font-bold text-sm">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Sapugaskanda Campus</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                Yoshida Shokanji International School,<br />
                Takiko Yoshida Mawatha, Sapugaskanda,<br />
                Makola, Sri Lanka.
              </p>
              <div className="text-[11px] text-slate-600 font-mono font-semibold">
                GPS: 6.96876° N, 79.95856° E
              </div>
            </div>

            {/* ------------------------------------------------------------ */}
            {/* COLUMN 2: DIRECT PHONE LINES & HOTLINE                       */}
            {/* ------------------------------------------------------------ */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#8B1538] font-serif font-bold text-sm">
                <Phone className="w-4 h-4 shrink-0" />
                <span>Phone & Admissions</span>
              </div>
              <div className="space-y-2 text-xs text-slate-800 font-mono font-semibold">
                <a href="tel:+94112401469" className="flex items-center gap-2 hover:text-[#8B1538] transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#8B1538] shrink-0" />
                  <span>011 2401469 / 011 2400632</span>
                </a>
                <a href="https://wa.me/94771924546" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#8B1538] transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#8B1538] shrink-0" />
                  <span>077 1924546 (Call / WhatsApp)</span>
                </a>
                <a href="https://wa.me/94764609804" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#8B1538] transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#8B1538] shrink-0" />
                  <span>076 4609804 (Call / WhatsApp)</span>
                </a>
              </div>
            </div>

            {/* ------------------------------------------------------------ */}
            {/* COLUMN 3: EMAIL ADDRESSES & OFFICE HOURS                     */}
            {/* ------------------------------------------------------------ */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#8B1538] font-serif font-bold text-sm">
                <Mail className="w-4 h-4 shrink-0" />
                <span>Email & Office Hours</span>
              </div>
              <div className="space-y-2 text-xs text-slate-800">
                <a href="mailto:info@yoshida.edu.lk" className="flex items-center gap-2 hover:text-[#8B1538] transition-colors font-mono font-semibold">
                  <Mail className="w-3.5 h-3.5 text-[#8B1538] shrink-0" />
                  <span>info@yoshida.edu.lk</span>
                </a>
                <a href="mailto:yoshida1950@sltnet.lk" className="flex items-center gap-2 hover:text-[#8B1538] transition-colors font-mono font-semibold">
                  <Mail className="w-3.5 h-3.5 text-[#8B1538] shrink-0" />
                  <span>yoshida1950@sltnet.lk</span>
                </a>
                <div className="pt-1 flex items-center gap-1.5 text-xs text-slate-700 font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#8B1538] shrink-0" />
                  <span>Mon-Fri: 7:30 AM - 3:30 PM | Sat: 8:30 AM - 12:30 PM</span>
                </div>
              </div>
            </div>

            {/* ------------------------------------------------------------ */}
            {/* COLUMN 4: QUICK INQUIRY FORM                                 */}
            {/* ------------------------------------------------------------ */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#8B1538] font-serif font-bold text-sm">
                <Send className="w-4 h-4 shrink-0" />
                <span>Quick Admission Query</span>
              </div>

              {formSubmitted ? (
                <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                  <span>Inquiry successfully transmitted to department inbox! We will contact you soon.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-2">
                  {submitError && (
                    <div className="p-2 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-[11px] font-semibold">
                      {submitError}
                    </div>
                  )}
                  <select
                    value={formData.departmentEmail}
                    onChange={(e) => setFormData({ ...formData, departmentEmail: e.target.value })}
                    className="w-full px-2.5 py-1.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#8B1538] shadow-sm font-semibold"
                  >
                    <option value="info@yoshida.edu.lk">Admissions & General Office (info@yoshida.edu.lk)</option>
                    <option value="principal@yoshida.edu.lk">Principal's Office (principal@yoshida.edu.lk)</option>
                    <option value="yoshida1950@sltnet.lk">Accounts & Secretariat (yoshida1950@sltnet.lk)</option>
                  </select>

                  <input
                    type="text"
                    required
                    placeholder="Parent / Guardian Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-1.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#8B1538] shadow-sm font-medium"
                  />
                  <div className="flex gap-2">
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-1/2 px-3 py-1.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#8B1538] shadow-sm font-medium"
                    />
                    <select
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                      className="w-1/2 px-2 py-1.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#8B1538] shadow-sm font-medium"
                    >
                      <option className="bg-white text-slate-900">Nursery</option>
                      <option className="bg-white text-slate-900">Primary</option>
                      <option className="bg-white text-slate-900">Cambridge IGCSE</option>
                      <option className="bg-white text-slate-900">A-Levels</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#8B1538] text-white text-xs font-bold hover:bg-slate-950 transition-all shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    <span>{isSubmitting ? 'Transmitting Inquiry...' : 'Send Inquiry to Department'}</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

        {/* ------------------------------------------------------------------ */}
        {/* BOTTOM COPYRIGHT & LOCATION STRIP                                  */}
        {/* ------------------------------------------------------------------ */}
        <div className="pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-700 font-medium">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#8B1538]" />
            <span>© 2026 Yoshida Shokanji International School. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-semibold">
            <a href="#hero" className="hover:text-[#8B1538] transition-colors">Back to Top ↑</a>
            <span>•</span>
            <span className="text-slate-600">Sapugaskanda • Sri Lanka</span>
          </div>
        </div>

      </div>

    </footer>
  );
};
