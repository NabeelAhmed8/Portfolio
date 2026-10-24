import { ArrowUpRight, Info } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { isValidUrl } from '../utils/url';

export default function ProjectActions({ project, onSelect }) {
  const hasLive = isValidUrl(project?.liveUrl);
  const hasGithub = isValidUrl(project?.githubUrl);

  return (
    <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-white/[0.06]">
      {/* Live Demo Action */}
      {hasLive ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-zinc-100 text-zinc-950 font-medium text-xs hover:bg-white shadow-xs transition-colors cursor-pointer"
        >
          <span>Live Demo</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      ) : (
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-white/[0.06] text-zinc-500 text-xs font-medium cursor-not-allowed">
          <span>Live Demo (Pending)</span>
        </span>
      )}

      {/* GitHub Source Code Action */}
      {hasGithub ? (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-white/[0.08] text-zinc-300 hover:text-white hover:border-zinc-700 text-xs font-medium transition-colors cursor-pointer"
        >
          <FaGithub className="w-3.5 h-3.5" />
          <span>Source Code</span>
        </a>
      ) : (
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-white/[0.06] text-zinc-500 text-xs font-medium cursor-not-allowed">
          <span>Source Code (Private)</span>
        </span>
      )}

      {/* View Specifications Button */}
      {onSelect && (
        <button
          type="button"
          onClick={() => onSelect(project)}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-transparent border border-white/[0.08] text-zinc-400 hover:text-white hover:border-zinc-600 text-xs font-medium transition-colors cursor-pointer ml-auto"
        >
          <Info className="w-3.5 h-3.5" />
          <span>View Specifications</span>
        </button>
      )}
    </div>
  );
}
