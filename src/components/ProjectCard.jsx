import { Tag } from 'lucide-react';
import ProjectActions from './ProjectActions';

export default function ProjectCard({ project, onSelect }) {
  return (
    <article className="group p-6 sm:p-8 rounded-2xl border border-white/[0.07] bg-zinc-900/30 hover:border-white/[0.14] transition-all duration-200">
      {/* Meta Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div className="flex items-center gap-2.5">
          <span className="text-xs font-mono text-zinc-500">
            {project.id}
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-zinc-900 border border-white/8 text-xs text-zinc-300">
            <Tag className="w-3 h-3 text-zinc-400" />
            <span>{project.category}</span>
          </span>
        </div>

        <span className="text-xs text-zinc-500 font-mono">
          {project.year || '2026'}
        </span>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100 group-hover:text-white transition-colors">
          {project.title}
        </h2>
        <p className="text-sm text-zinc-400 leading-relaxed max-w-3xl font-normal">
          {project.description}
        </p>

        {/* Stack Pills */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.stack?.map((item, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-lg bg-zinc-900/80 border border-white/6 text-xs text-zinc-300 font-medium"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Actions Row */}
        <ProjectActions project={project} onSelect={onSelect} />
      </div>
    </article>
  );
}
