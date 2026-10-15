import { useEffect } from 'react';
import ProjectCarousel from './ProjectCarousel';

const isValidUrl = (url) =>
  typeof url === 'string' &&
  url.trim() !== '' &&
  url.trim() !== '#' &&
  (url.startsWith('http://') || url.startsWith('https://'));

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    // Lock background page scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Handle Escape key
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-xs"
    >
      <div className="w-full max-w-2xl bg-black border-4 border-white shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
        
        {/* Header */}
        <div className="bg-white text-black p-4 flex items-center justify-between font-black uppercase text-xs sm:text-sm tracking-wider">
          <div className="flex items-center gap-2">
            <span>Project Specification [{project.id}]</span>
          </div>
          <button
            onClick={onClose}
            className="border-2 border-black px-3 py-1 font-black hover:bg-black hover:text-white transition-colors cursor-pointer"
          >
            Close [ESC]
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto overscroll-contain">
          <div>
            <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-1">
              Category: {project.category} • Year: {project.year || '2025'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
              {project.title}
            </h2>
          </div>

          {/* Screenshot Carousel in Modal */}
          <ProjectCarousel images={project.images} title={project.title} />

          <div className="border-t border-b border-neutral-800 py-4">
            <h3 className="text-xs font-black uppercase tracking-wider text-neutral-400 mb-2">
              System Description &amp; Mechanics
            </h3>
            <p className="text-sm font-light text-neutral-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-neutral-400 mb-3">
              Configured Stack Matrix
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.stack?.map((tech, idx) => (
                <span
                  key={idx}
                  className="border border-white bg-black text-white px-3 py-1 text-xs font-bold uppercase"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-neutral-800">
            {hasLive ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 bg-white text-black font-black text-xs uppercase tracking-wider border-2 border-white hover:bg-black hover:text-white transition-colors cursor-pointer"
              >
                Launch Production Client ↗
              </a>
            ) : (
              <button
                type="button"
                disabled
                title="Live client deployment in progress"
                className="px-5 py-2.5 bg-neutral-900 text-neutral-500 font-bold text-xs uppercase tracking-wider border-2 border-neutral-800 opacity-60 cursor-not-allowed select-none"
              >
                Production Client (Pending)
              </button>
            )}

            {hasGithub ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 bg-black text-white font-black text-xs uppercase tracking-wider border-2 border-white hover:bg-white hover:text-black transition-colors cursor-pointer"
              >
                Inspect Repository
              </a>
            ) : (
              <button
                type="button"
                disabled
                title="Repository currently private / in staging"
                className="px-5 py-2.5 bg-neutral-900 text-neutral-500 font-bold text-xs uppercase tracking-wider border-2 border-neutral-800 opacity-60 cursor-not-allowed select-none"
              >
                Repository (Private)
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
