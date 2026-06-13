'use client';

import { Navbar } from '../components/Navbar';
import { ProjectCard } from '../components/ProjectCard';
import { ReviewCard } from '../components/ReviewCard';
import { SkillCategory } from '../components/SkillCategory';
import { GlitchText } from '../components/GlitchText';
import { projects } from '../data/projects';
import { Cpu, Code2, Calculator, GitBranch } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
  {
    quote:
      'Insane work on the combat framework. The movement feels buttery smooth. Totally worth the price, took a bit longer to iron out the bugs. 4.5/5',
    author: '@VoidWalker',
    rating: 4.5,
  },
  {
    quote:
      "Bro's low level knowledge is crazy. Helped me optimize my voxel game from 20fps to steady 60. Highly recommend. 5/5",
    author: '@Dev_Alex',
    rating: 5,
  },
  {
    quote:
      'Very professional. The custom Luau VM integration was exactly what our engine needed. Clean code, well documented. 5/5',
    author: 'Studio Lead (NDA)',
    rating: 5,
  },
  {
    quote:
      'The horror systems he coded are terrifyingly good. Fake lag and audio manipulation worked flawlessly on production. 5/5',
    author: '@NightmareDev',
    rating: 5,
  },
];

const skillCategories = [
  {
    icon: Cpu,
    title: 'Low-Level & Engines',
    skills: ['C++', 'Vulkan', 'Memory Management', 'CMake'],
    accentColor: 'text-cyan-400',
  },
  {
    icon: Code2,
    title: 'Luau & Roblox Ecosystem',
    skills: ['Parallel Luau', 'Rojo', 'Wally', 'Knit', 'ProfileService'],
    accentColor: 'text-purple-400',
  },
  {
    icon: Calculator,
    title: 'Math & Algorithms',
    skills: ['Perlin Noise', 'Octrees', 'Kinematics', 'Raycasting', '3D Matrix Math'],
    accentColor: 'text-orange-400',
  },
  {
    icon: GitBranch,
    title: 'Architecture',
    skills: ['FSM', 'Clean Architecture', 'RPC Optimization', 'Promises'],
    accentColor: 'text-cyan-400',
  },
];

export default function Home() {
  return (
    <div className="min-h-dvh bg-graphite-900 font-sans text-gray-200">
      {/* Navbar */}
      <div className="px-4 md:px-8 pt-4 md:pt-8 pb-0">
        <Navbar />
      </div>

      <main className="max-w-7xl mx-auto px-4 md:px-8">
        {/* About */}
        <section id="about" className="pt-6 pb-20">
          <GlitchText text="about.luau" />

          <motion.div
            className="mt-8 bg-graphite-800 border border-white/[0.06] rounded-xl p-6 md:p-8 max-w-3xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-gray-300 leading-relaxed text-sm md:text-base max-w-[65ch]">
              Hey, I&apos;m <span className="text-cyan-400 font-bold font-mono">Piloh</span>. I&apos;ve been diving
              into code for over{' '}
              <span className="text-orange-400 font-mono font-bold">5 years</span>. My core passion lies in
              engineering robust, highly functional game mechanics built from the ground up for future scalability.
              I love digging into low-level architecture and relentlessly optimizing my code.
            </p>

            {/* Code comment quote */}
            <div className="mt-6 pl-4 border-l-2 border-purple-400/30">
              <p className="text-sm font-mono text-gray-500">
                <span className="text-purple-400/70">{'--'}</span>{' '}
                <span className="text-gray-400 italic">
                  &quot;I&apos;d rather have a few bugs now than dozens later.&quot;
                </span>
              </p>
            </div>
          </motion.div>
        </section>

        {/* Skills */}
        <section id="skills" className="pb-20">
          <GlitchText text="skills.config" />

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillCategories.map((cat, i) => (
              <SkillCategory
                key={cat.title}
                icon={cat.icon}
                title={cat.title}
                skills={cat.skills}
                accentColor={cat.accentColor}
                index={i}
              />
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="pb-20">
          <GlitchText text="projects.json" />

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-5">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="pb-20">
          <GlitchText text="reviews.log" />

          <div className="mt-8 columns-1 md:columns-2 gap-4 space-y-4">
            {reviews.map((review, i) => (
              <div key={review.author} className="break-inside-avoid">
                <ReviewCard
                  quote={review.quote}
                  author={review.author}
                  rating={review.rating}
                  index={i}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="pb-16">
          <GlitchText text="contact.sh" />

          <motion.div
            className="mt-8 bg-graphite-800 border border-white/[0.06] rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Editor tab bar */}
            <div className="flex items-center gap-2 bg-graphite-900 px-4 py-2 border-b border-white/[0.04] text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-[#27C93F] inline-block" />
              <span className="text-gray-500">contact.sh</span>
              <span className="text-gray-700 ml-auto">UTF-8</span>
            </div>

            {/* Code block */}
            <pre className="p-5 md:p-6 text-xs md:text-sm font-mono leading-relaxed overflow-x-auto">
              <code>
                <span className="text-purple-400">const</span>{' '}
                <span className="text-cyan-400">contact</span>{' '}
                <span className="text-gray-500">= {'{'}</span>
                {'\n'}
                <span className="text-gray-500">{'  '}discord:</span>{' '}
                <a
                  href="https://discord.com/users/piloh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-cyan-400 transition-colors duration-150 underline underline-offset-2 decoration-orange-400/30 hover:decoration-cyan-400/50"
                >
                  &quot;piloh&quot;
                </a>
                <span className="text-gray-600">,</span>
                {'\n'}
                <span className="text-gray-500">{'  '}email:</span>{' '}
                <a
                  href="mailto:piloh8907@gmail.com"
                  className="text-orange-400 hover:text-cyan-400 transition-colors duration-150 underline underline-offset-2 decoration-orange-400/30 hover:decoration-cyan-400/50"
                >
                  &quot;piloh8907@gmail.com&quot;
                </a>
                <span className="text-gray-600">,</span>
                {'\n'}
                <span className="text-gray-500">{'  '}roblox:</span>{' '}
                <a
                  href="https://www.roblox.com/users/1310143767/profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-cyan-400 transition-colors duration-150 underline underline-offset-2 decoration-orange-400/30 hover:decoration-cyan-400/50"
                >
                  &quot;roblox.com/users/1310143767&quot;
                </a>
                <span className="text-gray-600">,</span>
                {'\n'}
                <span className="text-gray-500">{'  '}github:</span>{' '}
                <a
                  href="https://github.com/PilohWhy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-cyan-400 transition-colors duration-150 underline underline-offset-2 decoration-orange-400/30 hover:decoration-cyan-400/50"
                >
                  &quot;github.com/PilohWhy&quot;
                </a>
                <span className="text-gray-600">,</span>
                {'\n'}
                <span className="text-gray-500">{'  '}status:</span>{' '}
                <span className="text-[#98C379]">&quot;Looking for complex commission work.&quot;</span>
                {'\n'}
                <span className="text-gray-500">{'}'}</span>
              </code>
            </pre>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/[0.04] py-8 text-center">
          <p className="text-xs font-mono text-gray-600">
            {'// EOF - Built with Next.js, Tailwind CSS & Framer Motion'}
          </p>
        </footer>
      </main>
    </div>
  );
}
