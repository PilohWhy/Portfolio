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
    <section className="mb-8">
      <h2 className="text-lg font-mono text-purple-400 mb-3 flex items-center gap-2">
        <span className="text-gray-600">{'--'}</span> Source Code
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
