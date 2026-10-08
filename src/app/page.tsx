'use client';

import { Navbar } from '../components/Navbar';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';
import { MessageSquare, Mail, ExternalLink, ArrowUpRight } from 'lucide-react';

const skills = [
  {
    category: 'Low-Level & C++',
    items: ['C++', 'Vulkan API', 'EnTT (ECS)', 'Memory Layout & Cache', 'CMake'],
  },
  {
    category: 'Roblox & Luau',
    items: ['Luau', 'Rojo', 'Wally', 'ProfileService', 'Custom Physics & Replication'],
  },
  {
    category: 'Math & Algorithms',
    items: ['Sparse Octrees', 'Perlin Noise', 'Kinematics', 'Raycasting', 'Vector / Matrix Math'],
  },
  {
    category: 'Architecture',
    items: ['State Machines (FSM)', 'Server-Authoritative Netcode', 'Prediction & Lag Handling'],
  },
];

export default function Home() {
  return (
    <div className="min-h-dvh bg-[#0d1017] text-zinc-200 font-sans selection:bg-zinc-700 selection:text-white">
      {/* Top Navigation */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 pt-6">
        <Navbar />
      </div>

      <main className="max-w-4xl mx-auto px-4 md:px-6 py-8 space-y-14">
        {/* About Section */}
        <section id="about" data-testid="about-section" className="space-y-6 scroll-mt-24">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Piloh
            </h1>
            <p className="text-base md:text-lg text-zinc-400">
              Low-level & game systems developer (C++, Luau / Roblox)
            </p>
          </div>

          <div className="p-6 bg-[#121620] border border-zinc-800 rounded-lg space-y-3.5 leading-relaxed text-sm md:text-base text-zinc-300">
            <p data-testid="about-text">
              Hey, I&apos;m Piloh. I&apos;ve been coding for over 5 years, mostly focusing on low-level systems, custom engines, and game mechanics in C++ and Luau. I like building things from scratch and understanding what actually happens under the hood instead of just relying on slow defaults.
            </p>
            <p className="text-zinc-400">
              A lot of my projects involve pushing platform limits: streaming huge procedural voxel landscapes without melting memory, writing custom Vulkan pipelines with ECS, or building multiplayer combat that stays responsive even when connections get spotty.
            </p>
          </div>

          {/* Funny Cat GIF */}
          <div className="flex items-center gap-4 p-4 bg-[#121620] border border-zinc-800 rounded-lg">
            <img
              src="/images/cat-no.gif"
              alt="Cat says no"
              className="w-16 h-16 rounded object-cover flex-shrink-0"
            />
            <div className="space-y-0.5">
              <p className="font-semibold text-zinc-200 text-sm">
                Senior Code Reviewer
              </p>
              <p className="text-zinc-400 text-xs md:text-sm">
                Cat strictly says NO to memory leaks, unanchored parts, frame drops, and overcomplicated wrappers.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section id="projects" className="space-y-5 scroll-mt-24">
          <div className="border-b border-zinc-800 pb-2.5">
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              Featured Projects
            </h2>
          </div>

          <div data-testid="projects-grid" className="grid grid-cols-1 gap-4">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="space-y-5 scroll-mt-24">
          <div className="border-b border-zinc-800 pb-2.5">
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              Skills & Tools
            </h2>
          </div>

          <div data-testid="skills-grid" className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {skills.map((s) => (
              <div key={s.category} className="p-4 bg-[#121620] border border-zinc-800 rounded-lg space-y-2.5">
                <h3 className="text-xs font-semibold font-mono text-zinc-300 uppercase tracking-wide">
                  {s.category}
                </h3>
                <div className="flex flex-wrap gap-1.5 font-mono text-xs text-zinc-400">
                  {s.items.map((item) => (
                    <span key={item} className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" data-testid="contact-section" className="space-y-5 scroll-mt-24">
          <div className="border-b border-zinc-800 pb-2.5">
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              Contact
            </h2>
            <p className="text-xs text-zinc-400 mt-1">
              Have a question, commission, or want to discuss a system? Feel free to reach out.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href="https://discord.com/users/piloh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-lg bg-[#121620] border border-zinc-800 hover:border-zinc-700 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <MessageSquare size={16} className="text-zinc-400 group-hover:text-white" />
                <div>
                  <span className="font-medium text-zinc-200 block text-sm">Discord</span>
                  <span className="text-xs text-zinc-500 font-mono">piloh</span>
                </div>
              </div>
              <ArrowUpRight size={14} className="text-zinc-600 group-hover:text-zinc-300" />
            </a>

            <a
              href="mailto:piloh8907@gmail.com"
              className="flex items-center justify-between p-3.5 rounded-lg bg-[#121620] border border-zinc-800 hover:border-zinc-700 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-zinc-400 group-hover:text-white" />
                <div>
                  <span className="font-medium text-zinc-200 block text-sm">Email</span>
                  <span className="text-xs text-zinc-500 font-mono">piloh8907@gmail.com</span>
                </div>
              </div>
              <ArrowUpRight size={14} className="text-zinc-600 group-hover:text-zinc-300" />
            </a>

            <a
              href="https://www.roblox.com/users/1310143767/profile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-lg bg-[#121620] border border-zinc-800 hover:border-zinc-700 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <ExternalLink size={16} className="text-zinc-400 group-hover:text-white" />
                <div>
                  <span className="font-medium text-zinc-200 block text-sm">Roblox</span>
                  <span className="text-xs text-zinc-500 font-mono">1310143767</span>
                </div>
              </div>
              <ArrowUpRight size={14} className="text-zinc-600 group-hover:text-zinc-300" />
            </a>

            <a
              href="https://github.com/PilohWhy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-lg bg-[#121620] border border-zinc-800 hover:border-zinc-700 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <ExternalLink size={16} className="text-zinc-400 group-hover:text-white" />
                <div>
                  <span className="font-medium text-zinc-200 block text-sm">GitHub</span>
                  <span className="text-xs text-zinc-500 font-mono">@PilohWhy</span>
                </div>
              </div>
              <ArrowUpRight size={14} className="text-zinc-600 group-hover:text-zinc-300" />
            </a>
          </div>
        </section>

        {/* Minimal Footer */}
        <footer className="pt-6 border-t border-zinc-800 text-xs text-zinc-500 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p>© {new Date().getFullYear()} Piloh.</p>
          <div className="flex gap-4 font-mono text-xs">
            <a href="https://github.com/PilohWhy" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300">GitHub</a>
            <a href="https://discord.com/users/piloh" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300">Discord</a>
            <a href="mailto:piloh8907@gmail.com" className="hover:text-zinc-300">Email</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
