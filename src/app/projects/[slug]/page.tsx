import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
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
    <div className="min-h-dvh p-4 md:p-10 bg-[#0d1017] font-sans text-zinc-200">
      <main className="max-w-3xl mx-auto space-y-6">
        <div>
          <Link
            href="/"
            data-testid="back-button"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors py-1.5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to projects</span>
          </Link>
        </div>

        <article className="bg-[#121620] border border-zinc-800 rounded-lg p-6 md:p-8 space-y-7">
          <header className="space-y-3 border-b border-zinc-800 pb-6">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wide">
              {project.category}
            </span>

            <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-white">
              {project.title}
            </h1>

            <div className="flex flex-wrap gap-4 text-xs font-mono text-zinc-400 pt-1">
              <div>
                <span className="text-zinc-500">Role: </span>
                <span data-testid="project-role" className="text-zinc-300">{project.role}</span>
              </div>
              <div>
                <span className="text-zinc-500">Timeline: </span>
                <span data-testid="project-timeline" className="text-zinc-300">{project.timeline}</span>
              </div>
            </div>
          </header>

          {/* Media Visual */}
          {project.image && (
            <div className="rounded overflow-hidden border border-zinc-800 bg-zinc-950">
              <Image
                src={project.image}
                alt={project.title}
                width={1200}
                height={675}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          )}

          {project.codeFile && (
            <ProjectCodeSection codeFile={project.codeFile} />
          )}

          {project.video && (
            <div className="rounded overflow-hidden border border-zinc-800 bg-zinc-950">
              <video
                className="w-full"
                controls
                preload="metadata"
              >
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}

          {/* Overview */}
          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">
              Overview
            </h2>
            <p data-testid="project-description" className="text-zinc-300 text-sm md:text-base leading-relaxed">
              {project.description}
            </p>
          </section>

          {/* Technologies */}
          <section className="space-y-2">
            <h2 className="text-xs font-mono text-zinc-400 uppercase tracking-wide">
              Stack
            </h2>
            <div data-testid="project-technologies" className="flex flex-wrap gap-1.5 font-mono text-xs">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Challenges & Solutions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-zinc-800">
            <div className="p-4 bg-zinc-900/60 border border-zinc-800/80 rounded space-y-1.5">
              <h3 className="text-xs font-mono font-semibold text-zinc-300 uppercase">
                The Hard Part
              </h3>
              <p data-testid="project-challenges" className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                {project.challenges}
              </p>
            </div>

            <div className="p-4 bg-zinc-900/60 border border-zinc-800/80 rounded space-y-1.5">
              <h3 className="text-xs font-mono font-semibold text-zinc-300 uppercase">
                How It Was Handled
              </h3>
              <p data-testid="project-solutions" className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                {project.solutions}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-zinc-800 flex justify-between items-center text-xs">
            <Link
              href="/"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              &larr; Back to all projects
            </Link>

            <a
              href="https://discord.com/users/piloh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-300 font-mono transition-colors"
            >
              Discord: piloh
            </a>
          </div>
        </article>
      </main>
    </div>
  );
}
