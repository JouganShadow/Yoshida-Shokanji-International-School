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
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Shield, Rocket } from 'lucide-react';
import { SplitTextButton } from '../ui/SplitTextButton';

export const AdmissionsAndContactSection: React.FC = () => {
  // Form submission success notification state
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Controlled form state with department, parentName, phoneNumber, and grade
  const [formData, setFormData] = useState({
    department: 'Admissions & General Office',
    parentName: '',
    phoneNumber: '',
    grade: 'Nursery',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.parentName || !formData.phoneNumber) return;

    // Format WhatsApp message with line breaks (%0A) and bold text (*Text*)
    const message = `*New Admission Inquiry*%0A` +
      `--------------------------------%0A` +
      `*Department:* ${encodeURIComponent(formData.department)}%0A` +
      `*Parent / Guardian Name:* ${encodeURIComponent(formData.parentName)}%0A` +
      `*Phone Number:* ${encodeURIComponent(formData.phoneNumber)}%0A` +
      `*Grade / Program:* ${encodeURIComponent(formData.grade)}%0A` +
      `--------------------------------%0A` +
      `Sent via Yoshida Shokanji Official Web Portal`;

    const whatsappNumber = '94764609804'; // Admissions Hotline WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(whatsappUrl, '_blank');

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        department: 'Admissions & General Office',
        parentName: '',
        phoneNumber: '',
        grade: 'Nursery',
      });
    }, 4000);
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
                  <span>071 3195191 (Call / WhatsApp)</span>
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
                  <span>WhatsApp opened with your pre-formatted admission inquiry! Our admissions office will respond shortly.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-2">
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full px-2.5 py-1.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#8B1538] shadow-sm font-semibold"
                  >
                    <option value="Admissions & General Office">Admissions & General Office</option>
                    <option value="Principal's Office">Principal's Office</option>
                    <option value="Accounts & Secretariat">Accounts & Secretariat</option>
                  </select>

                  <input
                    type="text"
                    required
                    placeholder="Parent / Guardian Name"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full px-3 py-1.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#8B1538] shadow-sm font-medium"
                  />
                  <div className="flex gap-2">
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      className="w-1/2 px-3 py-1.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#8B1538] shadow-sm font-medium"
                    />
                    <select
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                      className="w-1/2 px-2 py-1.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#8B1538] shadow-sm font-medium"
                    >
                      <option className="bg-white text-slate-900" value="Nursery">Nursery</option>
                      <option className="bg-white text-slate-900" value="Primary">Primary</option>
                      <option className="bg-white text-slate-900" value="Cambridge IGCSE">Cambridge IGCSE</option>
                      <option className="bg-white text-slate-900" value="A-Levels">A-Levels</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 rounded-xl bg-[#8B1538] text-white text-xs font-bold hover:bg-slate-950 transition-all shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] flex items-center justify-center gap-2"
                  >
                    <span>Send Inquiry via WhatsApp</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

        {/* ------------------------------------------------------------------ */}
        {/* BOTTOM COPYRIGHT & LOCATION STRIP & CONTRIBUTOR BADGE              */}
        {/* ------------------------------------------------------------------ */}
        <div className="pt-6 border-t border-slate-200/80 space-y-4">
          {/* Prominent Contributor Callout Banner */}
          <div className="p-3.5 rounded-xl bg-rose-50 border-2 border-[#8B1538]/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left shadow-sm">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-[#8B1538] text-white flex items-center justify-center shrink-0">
                <Rocket className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-serif font-black text-slate-950">
                Official Web Portal Initiative
              </span>
            </div>
            <div className="text-xs font-bold text-[#8B1538] font-mono tracking-tight bg-white px-3 py-1 rounded-lg border border-rose-200 shadow-2xs">
              🦖 A contribution by the 2026 Head Prefect
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-700 font-medium">
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

      </div>

    </footer>
  );
};
