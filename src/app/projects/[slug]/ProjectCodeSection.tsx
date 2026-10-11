'use client';

import { CodePreview } from '../../../components/CodePreview';
import { projectCodeFiles } from '../../../data/codeFiles';
import type { CodeFile } from '../../../data/projects';

interface ProjectCodeSectionProps {
  codeFile: CodeFile;
}

export function ProjectCodeSection({ codeFile }: ProjectCodeSectionProps) {
  const actualCode = projectCodeFiles[codeFile.filename] || codeFile.code;
  
  return (
    <section className="space-y-2.5">
      <h2 className="text-xs font-mono text-zinc-400 uppercase tracking-wide">
        Code Preview
      </h2>
      <CodePreview
        code={actualCode}
        filename={codeFile.filename}
        language={codeFile.language}
        isPartOfProject={codeFile.isPartOfProject}
      />
    </section>
  );
}
