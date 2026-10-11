'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, Download, ChevronDown, ChevronUp } from 'lucide-react';

interface CodePreviewProps {
  code: string;
  filename: string;
  language?: string;
  isPartOfProject?: boolean; // if true, shows "one of many files" label
}

export function CodePreview({ code, filename, language = 'luau', isPartOfProject = false }: CodePreviewProps) {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const lines = code.split('\n');
  const previewLines = expanded ? lines : lines.slice(0, 20);
  const hasMore = lines.length > 20;

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = code;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [code]);

  const handleDownload = useCallback(() => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [code, filename]);

  return (
    <motion.div
      className="bg-[#0d1117] border border-white/10 rounded-lg overflow-hidden group/code"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {/* Tab bar */}
      <div className="flex items-center justify-between bg-[#161b22] px-3.5 py-2 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-zinc-300 font-medium">{filename}</span>
          {isPartOfProject && (
            <span className="text-[10px] font-mono text-zinc-500 bg-zinc-800/80 px-1.5 py-0.5 rounded">
              file preview
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-zinc-500">{language}</span>
          <button
            onClick={handleCopy}
            className="p-1 rounded hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-white"
            title="Copy code"
            type="button"
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                  <Check size={14} className="text-emerald-400" />
                </motion.div>
              ) : (
                <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                  <Copy size={14} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
          <button
            onClick={handleDownload}
            className="p-1 rounded hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-white"
            title="Download file"
            type="button"
          >
            <Download size={14} />
          </button>
        </div>
      </div>

      {/* Code content */}
      <div className="overflow-x-auto">
        <pre className="p-3 text-[11px] leading-[1.6] font-mono">
          <code>
            {previewLines.map((line, i) => (
              <div key={i} className="flex">
                <span className="text-gray-600 select-none w-8 text-right mr-3 shrink-0">
                  {i + 1}
                </span>
                <span className="text-gray-300 whitespace-pre">{line}</span>
              </div>
            ))}
          </code>
        </pre>
      </div>

      {/* Expand/Collapse toggle */}
      {hasMore && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-center gap-1.5 py-2 bg-[#161b22] border-t border-zinc-800 text-[11px] font-mono text-zinc-400 hover:text-zinc-200 transition-colors"
          type="button"
        >
          {expanded ? (
            <>
              <ChevronUp size={12} />
              Collapse ({lines.length} lines)
            </>
          ) : (
            <>
              <ChevronDown size={12} />
              Show all {lines.length} lines
            </>
          )}
        </button>
      )}
    </motion.div>
  );
}
