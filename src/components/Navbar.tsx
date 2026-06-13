'use client';

import { motion } from 'framer-motion';
import { useState, useCallback, useEffect } from 'react';

const tabs = [
  { href: '#about', label: 'about.luau', color: 'text-cyan-400', borderColor: 'border-cyan-400' },
  { href: '#skills', label: 'skills.config', color: 'text-purple-400', borderColor: 'border-purple-400' },
  { href: '#projects', label: 'projects.json', color: 'text-orange-400', borderColor: 'border-orange-400' },
  { href: '#reviews', label: 'reviews.log', color: 'text-cyan-400', borderColor: 'border-cyan-400' },
  { href: '#contact', label: 'contact.sh', color: 'text-purple-400', borderColor: 'border-purple-400' },
];

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function smoothScrollTo(targetY: number, duration = 600) {
  const startY = window.pageYOffset;
  const diff = targetY - startY;
  let startTime: number | null = null;

  function step(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeInOutCubic(progress);

    window.scrollTo(0, startY + diff * easedProgress);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

export function Navbar() {
  const [activeTab, setActiveTab] = useState(0);

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = tabs.map((t) => t.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = sectionIds.indexOf(entry.target.id);
            if (idx !== -1) setActiveTab(idx);
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const handleTabClick = useCallback((index: number, href: string) => {
    setActiveTab(index);
    const targetId = href.replace('#', '');
    const el = document.getElementById(targetId);
    if (el) {
      const targetY = el.getBoundingClientRect().top + window.pageYOffset - 80;
      smoothScrollTo(targetY, 600);
    }
  }, []);

  return (
    <motion.div
      className="max-w-7xl mx-auto bg-graphite-800 border border-white/[0.06] rounded-t-lg overflow-hidden shadow-lg shadow-black/20 mb-8"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav className="flex items-center justify-between bg-graphite-900 px-4 py-2 border-b border-white/[0.06] text-xs font-mono select-none">
        {/* macOS window controls */}
        <div className="flex gap-1.5 mr-4">
          <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block" />
        </div>

        {/* Editor Tabs */}
        <div className="flex gap-0.5 overflow-x-auto">
          {tabs.map((tab, i) => (
            <button
              key={tab.href}
              type="button"
              onClick={() => handleTabClick(i, tab.href)}
              className={`px-3 py-1.5 whitespace-nowrap transition-all duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-t-md active:scale-[0.97] ${
                activeTab === i
                  ? `bg-graphite-800 ${tab.color} border-t-2 ${tab.borderColor} font-bold`
                  : `bg-transparent text-gray-500 border-t-2 border-transparent hover:bg-white/[0.04] hover:text-gray-400`
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Decorative tokens */}
        <div className="hidden md:flex gap-3 text-gray-600 font-semibold pr-2">
          <span className="hover:text-cyan-400 cursor-default transition-colors duration-150">export</span>
          <span className="hover:text-purple-400 cursor-default transition-colors duration-150 font-bold">import</span>
          <span className="hover:text-orange-400 cursor-default transition-colors duration-150">function</span>
          <span className="hover:text-cyan-400 cursor-default transition-colors duration-150">local</span>
        </div>
      </nav>

      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 bg-graphite-800 px-4 py-1.5 border-b border-white/[0.04] text-xs font-mono text-gray-500">
        <span>workspace</span>
        <span className="text-gray-700">/</span>
        <span>src</span>
        <span className="text-gray-700">/</span>
        <span className="text-cyan-400">piloh</span>
        <span className="text-gray-700">/</span>
        <span className="text-orange-400">portfolio</span>
      </div>
    </motion.div>
  );
}
