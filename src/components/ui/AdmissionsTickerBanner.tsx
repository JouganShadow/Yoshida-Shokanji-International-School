import React from 'react';
import { motion } from 'motion/react';

export const AdmissionsTickerBanner: React.FC = () => {
  const text = "2027 september admissions open!";
  const repetitions = 14;

  const whatsappMessage = encodeURIComponent(
    "Hello Yoshida Shokanji International School, I would like to inquire about 2027 September admissions."
  );
  const whatsappUrl = `https://wa.me/94764609804?text=${whatsappMessage}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full h-[20px] bg-[#750E2A] hover:bg-[#8B1538] overflow-hidden border-b border-slate-950/40 select-none z-50 transition-colors cursor-pointer"
      aria-label="Admissions Announcement - Click to chat on WhatsApp"
      title="Click to inquire about 2027 September Admissions via WhatsApp"
    >
      <div className="w-full h-full flex items-center">
        <motion.div
          className="flex items-center whitespace-nowrap text-[7.5px] font-black tracking-widest text-white group-hover:text-amber-200 uppercase leading-[10px] transition-colors"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 25,
          }}
        >
          {Array.from({ length: repetitions }).map((_, index) => (
            <span key={index} className="inline-flex items-center px-4">
              <span>{text}</span>
              <span className="mx-3 inline-block w-1 h-1 rounded-full bg-amber-300/90 group-hover:scale-125 transition-transform" />
            </span>
          ))}
        </motion.div>
      </div>
    </a>
  );
};
