'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import type { Project } from '../data/projects';
import { projectCodeFiles } from '../data/codeFiles';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href={`/projects/${project.slug}`} className="block group">
        <article
          data-testid="project-card"
          className="bg-graphite-800 p-5 md:p-6 rounded-xl border border-white/[0.06] hover:border-cyan-400/40 focus-within:border-cyan-400 cursor-pointer flex flex-col sm:flex-row gap-5 min-h-[16rem] overflow-hidden transition-all duration-200 relative active:scale-[0.99]"
          style={{ willChange: 'transform' }}
        >
          {/* Hover glow - subtle */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/[0.03] via-transparent to-purple-400/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-xl" />

          {/* Left visual */}
          {project.image ? (
            <div className="sm:w-1/3 w-full h-40 sm:h-full bg-graphite-900 rounded-lg overflow-hidden relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite-900/60 to-transparent" />
            </div>
          ) : project.codeFile ? (
            <div className="sm:w-1/3 w-full h-40 sm:h-full bg-[#0d1117] rounded-lg overflow-hidden relative border border-white/[0.06] group-hover:border-cyan-400/20 transition-colors">
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-[#161b22] border-b border-white/5 text-[9px] font-mono">
                <span className="w-2 h-2 rounded-full bg-[#27C93F]" />
                <span className="text-gray-500 truncate">{project.codeFile.filename}</span>
              </div>
              <pre className="p-2 text-[8px] leading-[1.5] font-mono text-gray-500 overflow-hidden max-h-[calc(100%-28px)]">
                <code className="text-gray-400">{(projectCodeFiles[project.codeFile.filename] || '').substring(0, 200)}...</code>
              </pre>
              <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-[#0d1117] to-transparent" />
            </div>
          ) : (
            <div className="sm:w-1/3 w-full h-40 sm:h-full border border-dashed border-orange-400/20 bg-graphite-900 rounded-lg flex flex-col items-center justify-center text-orange-400 font-mono text-xs transition-colors group-hover:border-orange-400/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-orange-400/[0.03] to-transparent" />
              <span className="text-gray-600 text-[10px] relative z-10">{'// Graphic'}</span>
              <span className="text-[10px] text-gray-700 mt-1 relative z-10">{project.imagePlaceholder}</span>
            </div>
          )}

          {/* Right content */}
          <div className="sm:w-2/3 w-full flex flex-col justify-between relative z-10">
            <div>
              <span className="text-[10px] font-mono text-orange-400/80 tracking-wider block mb-1.5 font-bold uppercase">
                {project.category}
              </span>
              <h3 className="text-base md:text-lg font-bold font-mono text-gray-100 mb-2 group-hover:text-cyan-400 transition-colors duration-200 text-wrap-balance">
                {project.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-400 line-clamp-4 leading-relaxed max-w-[55ch]">
                {project.description}
              </p>
            </div>

            <div className="font-mono text-[10px] text-gray-500 mt-4 flex flex-wrap gap-x-1.5 gap-y-1">
              {project.techStack.slice(0, 5).map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-gray-400 group-hover:text-cyan-400/80 group-hover:border-cyan-400/20 transition-colors duration-200"
                >
                  {t}
                </span>
              ))}
              {project.techStack.length > 5 && (
                <span className="text-gray-600">+{project.techStack.length - 5}</span>
              )}
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
