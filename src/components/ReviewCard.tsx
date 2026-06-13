'use client';

import { motion } from 'framer-motion';

interface ReviewCardProps {
  quote: string;
  author: string;
  rating: number;
  index: number;
}

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;

  return (
    <div className="flex gap-0.5 text-orange-400 text-xs">
      {Array.from({ length: fullStars }, (_, i) => (
        <span key={i}>&#9733;</span>
      ))}
      {hasHalf && <span className="opacity-40">&#9733;</span>}
    </div>
  );
}

export function ReviewCard({ quote, author, rating, index }: ReviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="bg-graphite-800 border border-white/[0.06] rounded-xl p-5 hover:border-purple-400/30 transition-all duration-200 group"
    >
      <div className="flex items-center justify-between mb-3">
        <StarRating rating={rating} />
        <span className="text-[10px] font-mono text-gray-600">{rating}/5</span>
      </div>

      <p className="text-sm text-gray-300 leading-relaxed mb-4 font-mono line-clamp-3">
        <span className="text-cyan-400/40">&ldquo;</span>
        {quote}
        <span className="text-cyan-400/40">&rdquo;</span>
      </p>

      <div className="flex items-center gap-2.5 pt-3 border-t border-white/[0.04]">
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-400/20 to-cyan-400/20 flex items-center justify-center text-[10px] font-mono text-cyan-400 border border-white/[0.06]">
          {author.charAt(0) === '@' ? author.charAt(1).toUpperCase() : author.charAt(0).toUpperCase()}
        </div>
        <span className="text-xs font-mono text-purple-400">{author}</span>
      </div>
    </motion.div>
  );
}
