'use client';

import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface SkillCategoryProps {
  icon: LucideIcon;
  title: string;
  skills: string[];
  accentColor: string;
  index: number;
}

export function SkillCategory({
  icon: Icon,
  title,
  skills,
  accentColor,
  index,
}: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="group rounded-xl p-6 bg-graphite-800 border border-white/[0.06]
                 hover:border-cyan-400/30 transition-all duration-200
                 shadow-sm hover:shadow-md hover:shadow-cyan-400/[0.04]
                 active:scale-[0.985]"
      style={{ willChange: 'transform' }}
    >
      {/* Icon */}
      <div
        className={`mb-4 w-11 h-11 rounded-lg bg-white/[0.04] flex items-center justify-center
                    border border-white/[0.06] group-hover:border-white/[0.1] transition-colors duration-200
                    ${accentColor}`}
      >
        <Icon size={22} strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3 className={`text-sm font-bold font-mono mb-3 ${accentColor} text-wrap-balance`}>
        {title}
      </h3>

      {/* Skills list */}
      <div className="flex flex-wrap gap-1.5">
        {skills.map((skill) => (
          <span
            key={skill}
            className="text-[11px] font-mono px-2.5 py-1 rounded-md
                       bg-white/[0.03] text-gray-400 border border-white/[0.06]
                       group-hover:text-gray-300 group-hover:border-white/[0.1]
                       transition-colors duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
