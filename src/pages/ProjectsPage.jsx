import { useState, useEffect, useCallback } from 'react';
import { getProjects } from '../services/api';
import ProjectModal from '../components/ProjectModal';
import { Sparkles, ArrowUpRight, Info, Tag } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

const isValidUrl = (url) =>
  typeof url === 'string' &&
  url.trim() !== '' &&
  url.trim() !== '#' &&
  (url.startsWith('http://') || url.startsWith('https://'));

export default function ProjectsPage() {
  const [projectsList, setProjectsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  const loadProjects = useCallback(async () => {
    setLoading(true);

    try {
      const response = await getProjects();
      const payload = response?.data ?? response;
      const projects = Array.isArray(payload)
        ? payload
        : Array.isArray(payload?.projects)
          ? payload.projects
          : [];

      setProjectsList(projects);
    } catch (error) {
      console.error('Failed to fetch projects:', error);
      setProjectsList([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      void loadProjects();
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [loadProjects]);

  return (
    <div className="pt-28 sm:pt-36 pb-20 sm:pb-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="flex items-center justify-between pb-3 mb-10 border-b border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
            <Sparkles className="w-3.5 h-3.5 text-zinc-500" />
            <span>03 / Selected Works</span>
          </div>
          <span className="text-xs text-zinc-500 font-mono">
            {projectsList.length} Active Records
          </span>
        </div>

        {/* Section Title */}
        <div className="mb-14">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-100 max-w-3xl leading-[1.12]">
            Crafted digital platforms &amp; applications.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl font-normal leading-relaxed">
            Featured client and personal engineering projects built with responsive layouts, modern state management, and clean architecture.
          </p>
        </div>

        {/* Loading Indicator */}
        {loading && (
          <div className="py-20 text-center text-xs font-mono text-zinc-500 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-zinc-400 animate-ping" />
            <span>Loading projects archive...</span>
          </div>
        )}

        {/* Projects List */}
        <div className="space-y-6">
          {projectsList.map((proj) => {
            const hasLive = isValidUrl(proj.liveUrl);
            const hasGithub = isValidUrl(proj.githubUrl);

            return (
              <article
                key={proj.id}
                className="group p-6 sm:p-8 rounded-2xl border border-white/[0.07] bg-zinc-900/30 hover:border-white/[0.14] transition-all duration-200"
              >
                {/* Meta Top */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono text-zinc-500">
                      {proj.id}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-zinc-900 border border-white/[0.08] text-xs text-zinc-300">
                      <Tag className="w-3 h-3 text-zinc-400" />
                      <span>{proj.category}</span>
                    </span>
                  </div>

                  <span className="text-xs text-zinc-500 font-mono">
                    {proj.year || '2025'}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100 group-hover:text-white transition-colors">
                    {proj.title}
                  </h2>
                  <p className="text-sm text-zinc-400 leading-relaxed max-w-3xl font-normal">
                    {proj.description}
                  </p>

                  {/* Stack Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {proj.stack?.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-zinc-900/80 border border-white/[0.06] text-xs text-zinc-300 font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Action Row */}
                  <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-white/[0.06]">
                    {/* Live Demo */}
                    {hasLive ? (
                      <a
                        href={proj.liveUrl}
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

                    {/* GitHub */}
                    {hasGithub ? (
                      <a
                        href={proj.githubUrl}
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

                    {/* View Specs */}
                    <button
                      onClick={() => setSelectedProject(proj)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-transparent border border-white/[0.08] text-zinc-400 hover:text-white hover:border-zinc-600 text-xs font-medium transition-colors cursor-pointer ml-auto"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>View Specifications</span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* Project Spec Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
