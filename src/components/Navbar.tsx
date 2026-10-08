'use client';

import { motion } from 'framer-motion';
import { useState, useCallback, useEffect } from 'react';

const tabs = [
  { id: 'about', href: '#about', label: 'About', testId: 'nav-link-about' },
  { id: 'projects', href: '#projects', label: 'Projects', testId: 'nav-link-projects' },
  { id: 'skills', href: '#skills', label: 'Skills', testId: 'nav-link-skills' },
  { id: 'contact', href: '#contact', label: 'Contact', testId: 'nav-link-contact' },
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

  useEffect(() => {
    const sectionIds = tabs.map((t) => t.id);
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
    <motion.header
      className="bg-[#121620] border border-zinc-800 rounded-lg p-3 shadow-md"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <nav aria-label="Main Navigation" className="flex items-center justify-between text-sm select-none">
        {/* Brand / Logo with Real Avatar */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-zinc-700 flex-shrink-0 bg-zinc-900">
            <img
              src="/images/avatar.webp"
              alt="Piloh"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-zinc-100 text-sm">Piloh</span>
            <span className="text-[11px] text-zinc-400 font-mono">Game Systems & Low-Level Dev</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-1 md:gap-2">
          {tabs.map((tab, i) => (
            <a
              key={tab.href}
              href={tab.href}
              data-testid={tab.testId}
              onClick={(e) => {
                e.preventDefault();
                handleTabClick(i, tab.href);
              }}
              className={`px-3 py-1.5 rounded text-xs md:text-sm transition-colors font-medium ${
                activeTab === i
                  ? 'bg-zinc-800 text-white'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-850'
              }`}
            >
              {tab.label}
            </a>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
