import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import Image from 'next/image';
import { projects } from '../../../data/projects';
import { ProjectCodeSection } from './ProjectCodeSection';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-dvh p-4 md:p-8 bg-graphite-900 font-sans text-gray-200">
      <div className="max-w-5xl mx-auto">
        {/* ── Top bar ── */}
        <div className="bg-graphite-800 border border-white/10 rounded-t-lg overflow-hidden shadow-2xl">
          {/* Window controls + filepath */}
          <div className="flex items-center justify-between bg-graphite-900 px-4 py-2 border-b border-white/[0.06] text-xs font-mono select-none">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block" />
              </div>
              <Link
                href="/"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <ChevronLeft className="w-3 h-3" /> workspace
              </Link>
            </div>
            <span className="text-gray-500">
              src/projects/<span className="text-orange-400">{project.slug}</span>/page.tsx
            </span>
          </div>

          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 bg-graphite-800 px-4 py-1.5 border-b border-white/5 text-xs font-mono text-gray-400">
            <Link href="/" className="hover:text-cyan-400 transition-colors">
              workspace
            </Link>
            <span>/</span>
            <span>projects</span>
            <span>/</span>
            <span className="text-orange-400">{project.slug}</span>
          </div>
        </div>

        {/* ── Main content ── */}
        <div className="bg-graphite-800 border-x border-b border-white/[0.06] rounded-b-lg p-6 md:p-10 shadow-2xl">
          {/* Header */}
          <header className="mb-8 pb-6 border-b border-white/5">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <h1 className="text-2xl md:text-4xl font-mono font-bold text-cyan-400">
                {project.title}
              </h1>
              <span className="px-3 py-1 bg-orange-400/10 border border-orange-400/30 text-orange-400 rounded-md text-xs font-mono font-bold">
                {project.category}
              </span>
            </div>

            {/* Role & Timeline grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="bg-graphite-900 border border-white/[0.06] rounded-lg p-4">
                <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider block mb-1">
                  Role
                </span>
                <p className="text-sm font-mono text-gray-300">{project.role}</p>
              </div>
              <div className="bg-graphite-900 border border-white/[0.06] rounded-lg p-4">
                <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider block mb-1">
                  Timeline
                </span>
                <p className="text-sm font-mono text-gray-300">{project.timeline}</p>
              </div>
            </div>
          </header>

          {/* Project Image */}
          {project.image && (
            <section className="mb-8">
              <h2 className="text-lg font-mono text-purple-400 mb-3 flex items-center gap-2">
                <span className="text-gray-600">{'--'}</span> Preview
              </h2>
              <div className="bg-graphite-900 border border-white/[0.06] rounded-lg overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-2 bg-graphite-900 border-b border-white/[0.06] text-[10px] font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block" />
                  <span className="text-gray-500">{project.slug}.png</span>
                </div>
                <div className="p-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={675}
                    className="w-full h-auto rounded-md"
                    priority
                  />
                </div>
              </div>
            </section>
          )}

          {/* Code Preview */}
          {project.codeFile && (
            <ProjectCodeSection codeFile={project.codeFile} />
          )}
          {project.video && (
            <section className="mb-8">
              <h2 className="text-lg font-mono text-purple-400 mb-3 flex items-center gap-2">
                <span className="text-gray-600">{'--'}</span> Demo
              </h2>
              <div className="bg-graphite-900 border border-white/[0.06] rounded-lg overflow-hidden">
                {/* Mini tab bar */}
                <div className="flex items-center gap-2 px-4 py-2 bg-graphite-900 border-b border-white/[0.06] text-[10px] font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 inline-block" />
                  <span className="text-gray-500">{project.slug}.mp4</span>
                </div>
                <div className="p-4">
                  <video
                    className="w-full rounded-md"
                    controls
                    preload="metadata"
                  >
                    <source src={project.video} type="video/mp4" />
                    Twoja przeglądarka nie obsługuje elementu video.
                  </video>
                </div>
              </div>
            </section>
          )}

          {/* Description */}
          <section className="mb-8">
            <h2 className="text-lg font-mono text-purple-400 mb-3 flex items-center gap-2">
              <span className="text-gray-600">{'--'}</span> Description
            </h2>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base max-w-[65ch]">
              {project.description}
            </p>
          </section>

          {/* Technologies */}
          <section className="mb-8">
            <h2 className="text-lg font-mono text-purple-400 mb-3 flex items-center gap-2">
              <span className="text-gray-600">{'--'}</span> Technologies
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-graphite-900 border border-white/[0.06] text-cyan-400 rounded-md font-mono text-xs hover:border-cyan-400/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Challenges & Solutions grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Challenges */}
            <section className="bg-graphite-900 border border-white/[0.06] rounded-lg p-5">
              <h2 className="text-sm font-mono text-orange-400 mb-3 flex items-center gap-2 font-bold">
                <span className="w-2 h-2 rounded-full bg-orange-400 inline-block" />
                Challenges
              </h2>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-[65ch]">
                {project.challenges}
              </p>
            </section>

            {/* Solutions */}
            <section className="bg-graphite-900 border border-white/[0.06] rounded-lg p-5">
              <h2 className="text-sm font-mono text-green-400 mb-3 flex items-center gap-2 font-bold">
                <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
                Solutions
              </h2>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-[65ch]">
                {project.solutions}
              </p>
            </section>
          </div>

          {/* Code Snippet */}
          {project.snippet && (
            <section>
              <h2 className="text-lg font-mono text-purple-400 mb-3 flex items-center gap-2">
                <span className="text-gray-600">{'--'}</span> Snippet
              </h2>
              <div className="bg-graphite-900 border border-white/[0.06] rounded-lg overflow-hidden">
                {/* Mini tab bar */}
                <div className="flex items-center gap-2 px-4 py-2 bg-graphite-900 border-b border-white/[0.06] text-[10px] font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block" />
                  <span className="text-gray-500">{project.slug}.luau</span>
                </div>
                <pre className="p-5 overflow-x-auto text-xs md:text-sm font-mono text-orange-400 leading-relaxed scrollbar-thin">
                  <code>{project.snippet}</code>
                </pre>
              </div>
            </section>
          )}

          {/* Back link */}
          <div className="mt-10 pt-6 border-t border-white/5">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-cyan-400 font-mono text-sm hover:text-cyan-300 transition-colors active:scale-[0.97]"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Return to workspace</span>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-xs font-mono text-gray-600">
            {'// EOF - Built with Next.js, Tailwind CSS & Framer Motion'}
          </p>
        </div>
      </div>
    </div>
  );
}
