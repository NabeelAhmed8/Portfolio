import { useEffect } from 'react';
import { X, ArrowUpRight, Calendar, Tag } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

const isValidUrl = (url) =>
  typeof url === 'string' &&
  url.trim() !== '' &&
  url.trim() !== '#' &&
  (url.startsWith('http://') || url.startsWith('https://'));

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const hasLive = isValidUrl(project.liveUrl);
  const hasGithub = isValidUrl(project.githubUrl);

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-6 backdrop-blur-md animate-fade-in"
    >
      <div className="w-full max-w-2xl bg-[#0d0d10] border border-white/[0.12] rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">

        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-mono text-zinc-500">
              [{project.id}]
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-zinc-900 border border-white/[0.08] text-xs text-zinc-300">
              <Tag className="w-3 h-3 text-zinc-400" />
              <span>{project.category}</span>
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto overscroll-contain">
          <div>
            <div className="flex items-center gap-2 text-xs text-zinc-500 mb-1.5 font-mono">
              <Calendar className="w-3.5 h-3.5" />
              <span>Project Year: {project.year || '2026'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
              {project.title}
            </h2>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-zinc-900/50 border border-white/[0.06] space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              System Overview &amp; Specifications
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
              Technologies &amp; Libraries
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.stack?.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/[0.06] text-xs font-medium text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/[0.08]">
            {hasLive ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-zinc-100 text-zinc-950 font-medium text-xs sm:text-sm hover:bg-white shadow-xs transition-colors cursor-pointer"
              >
                <span>Launch Live Site</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-zinc-900 border border-white/[0.06] text-zinc-500 text-xs font-medium cursor-not-allowed">
                <span>Live Demo (Pending Deployment)</span>
              </span>
            )}

            {hasGithub ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-zinc-900 border border-white/[0.08] text-zinc-300 hover:text-white hover:border-zinc-700 text-xs sm:text-sm font-medium transition-colors cursor-pointer"
              >
                <FaGithub className="w-4 h-4" />
                <span>Source Repository</span>
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-zinc-900 border border-white/[0.06] text-zinc-500 text-xs font-medium cursor-not-allowed">
                <span>Repository (Private Access)</span>
              </span>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
