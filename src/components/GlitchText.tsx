'use client';

import { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GLITCH_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*<>[]{}|;:';
const ITERATIONS_PER_CHAR = 3;
const FRAME_DELAY_MS = 30;

function randomChar(): string {
  return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
}

export function GlitchText({ text, className = '' }: GlitchTextProps) {
  const [display, setDisplay] = useState(text);
  const isAnimating = useRef(false);
  const rafId = useRef<number | null>(null);

  const scramble = useCallback(() => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    let iteration = 0;
    let lastTime = 0;

    const step = (timestamp: number) => {
      if (timestamp - lastTime < FRAME_DELAY_MS) {
        rafId.current = requestAnimationFrame(step);
        return;
      }
      lastTime = timestamp;

      const resolved = Math.floor(iteration / ITERATIONS_PER_CHAR);

      setDisplay(
        text
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' ';
            if (i < resolved) return text[i];
            return randomChar();
          })
          .join('')
      );

      iteration++;

      if (resolved >= text.length) {
        setDisplay(text);
        isAnimating.current = false;
        return;
      }

      rafId.current = requestAnimationFrame(step);
    };

    rafId.current = requestAnimationFrame(step);
  }, [text]);

  const handleMouseLeave = useCallback(() => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    isAnimating.current = false;
    setDisplay(text);
  }, [text]);

  return (
    <motion.span
      onMouseEnter={scramble}
      onMouseLeave={handleMouseLeave}
      className={`inline-block cursor-default font-mono select-none transition-colors duration-200 hover:text-cyan-400 ${className}`}
      aria-label={text}
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="text-gray-500 mr-1.5">&gt;</span>
      <span className="text-xl md:text-2xl font-bold tracking-tight text-gray-100">
        {display}
      </span>
      <span className="inline-block w-[2px] h-5 bg-cyan-400/60 ml-1 align-middle animate-pulse" />
    </motion.span>
  );
}
