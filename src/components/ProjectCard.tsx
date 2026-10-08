'use client';

import Link from 'next/link';
import type { Project } from '../data/projects';
import { projectCodeFiles } from '../data/codeFiles';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="block group">
      <article
        data-testid="project-card"
        className="bg-[#12161f] p-5 md:p-6 rounded-lg border border-zinc-800 hover:border-zinc-600 transition-colors duration-150 flex flex-col sm:flex-row gap-5 min-h-[14rem]"
      >
        {/* Visual / Code preview */}
        {project.image ? (
          <div className="sm:w-1/3 w-full h-36 sm:h-auto bg-[#0a0d14] rounded overflow-hidden flex-shrink-0 border border-zinc-800/80">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </div>
        ) : project.codeFile ? (
          <div className="sm:w-1/3 w-full h-36 sm:h-auto bg-[#0a0d14] rounded overflow-hidden flex-shrink-0 border border-zinc-800/80 p-2.5 font-mono text-[9px] text-zinc-400">
            <div className="text-zinc-500 pb-1 mb-1 border-b border-zinc-800 truncate">
              {project.codeFile.filename}
            </div>
            <pre className="text-zinc-500 overflow-hidden leading-relaxed max-h-24">
              <code>{(projectCodeFiles[project.codeFile.filename] || '').substring(0, 180)}...</code>
            </pre>
          </div>
        ) : (
          <div className="sm:w-1/3 w-full h-36 sm:h-auto bg-[#0a0d14] rounded flex-shrink-0 border border-zinc-800/80 p-3 flex flex-col justify-center items-center text-center">
            <span className="text-zinc-400 font-mono text-xs">{project.category}</span>
          </div>
        )}

        {/* Content */}
        <div className="sm:w-2/3 w-full flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wide">
                {project.category}
              </span>
              <span className="text-xs text-zinc-500 font-mono group-hover:text-zinc-300 transition-colors">
                View breakdown &rarr;
              </span>
            </div>

            <h3 className="text-base md:text-lg font-semibold text-zinc-100 mb-2 group-hover:text-white transition-colors">
              {project.title}
            </h3>

            <p
              data-testid="project-snippet"
              className="text-xs md:text-sm text-zinc-400 leading-relaxed line-clamp-3"
            >
              {project.snippet}
            </p>
          </div>

          <div className="font-mono text-[11px] text-zinc-400 mt-4 flex flex-wrap gap-1.5">
            {project.techStack.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 rounded bg-zinc-800/60 border border-zinc-700/50 text-zinc-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
