import React from 'react';
import { motion } from 'motion/react';

export const AdmissionsTickerBanner: React.FC = () => {
  const text = "2027 september admissions open!";
  const repetitions = 14;

  return (
    <div 
      className="w-full h-[20px] bg-[#750E2A] overflow-hidden flex items-center border-b border-slate-950/40 select-none z-50"
      aria-label="Admissions Announcement"
    >
      <motion.div
        className="flex items-center whitespace-nowrap text-[7.5px] font-black tracking-widest text-white uppercase leading-[10px]"
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
            <span className="mx-3 inline-block w-1 h-1 rounded-full bg-amber-300/90" />
          </span>
        ))}
      </motion.div>
    </div>
  );
};
