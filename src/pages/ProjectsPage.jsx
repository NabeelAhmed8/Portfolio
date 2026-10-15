import { useState, useEffect, useCallback } from 'react';
import { getProjects } from '../services/api';
import ProjectModal from '../components/ProjectModal';

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
    <div className="pt-24 sm:pt-32 pb-20 sm:pb-28 bg-black text-white min-h-[calc(100vh-14rem)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b-2 border-white pb-3 mb-12 text-xs font-black uppercase tracking-widest text-white">
          <span>03. Selected Work</span>
          <span className="hidden sm:inline">
            Page: projects ({projectsList.length} Active)
          </span>
        </div>

        {/* Section Title */}
        <div className="mb-14">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none text-white max-w-4xl">
            Selected Client Work.<br />
            Tested &amp; Deployed.
          </h1>
          <p className="text-sm sm:text-base font-light text-neutral-400 mt-4 max-w-2xl leading-relaxed">
            Production web applications engineered with high-contrast precision, modern tooling, and disciplined code.
          </p>
        </div>

        {/* Loading Indicator */}
        {loading && (
          <div className="py-12 text-center text-xs uppercase tracking-widest text-neutral-400 font-mono">
            Loading Project Archive...
          </div>
        )}

        {/* Projects List */}
        <div className="space-y-8">
          {projectsList.map((proj) => {
            const hasLive = isValidUrl(proj.liveUrl);
            const hasGithub = isValidUrl(proj.githubUrl);

            return (
              <article
                key={proj.id}
                className="border-2 border-white bg-black"
              >
                {/* Card Meta Bar */}
                <div className="bg-white text-black p-3.5 text-xs font-black uppercase flex flex-wrap items-center justify-between gap-2">
                  <span>{proj.id}. {proj.title}</span>
                  <span>Category: {proj.category}</span>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white">
                      {proj.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm font-light text-neutral-300 leading-relaxed max-w-3xl">
                      {proj.description}
                    </p>
                  </div>

                  {/* Stack Pills */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-neutral-800">
                    {proj.stack?.map((item, idx) => (
                      <span
                        key={idx}
                        className="border border-white bg-black text-white px-2.5 py-1 text-xs font-bold uppercase"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Raw Action Row */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    {/* Live Demo Button */}
                    {hasLive ? (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 bg-white text-black font-black text-xs uppercase tracking-wider border-2 border-white hover:bg-black hover:text-white transition-colors cursor-pointer"
                      >
                        Live Demo ↗
                      </a>
                    ) : (
                      <button
                        type="button"
                        disabled
                        title="Live Demo currently in staging / pending deployment"
                        className="px-4 py-2 bg-neutral-900 text-neutral-500 font-bold text-xs uppercase tracking-wider border-2 border-neutral-800 opacity-60 cursor-not-allowed select-none"
                      >
                        Live Demo (Pending)
                      </button>
                    )}

                    {/* Source Code Button */}
                    {hasGithub ? (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 bg-black text-white font-black text-xs uppercase tracking-wider border-2 border-white hover:bg-white hover:text-black transition-colors cursor-pointer"
                      >
                        Source Code
                      </a>
                    ) : (
                      <button
                        type="button"
                        disabled
                        title="Repository currently private / pending release"
                        className="px-4 py-2 bg-neutral-900 text-neutral-500 font-bold text-xs uppercase tracking-wider border-2 border-neutral-800 opacity-60 cursor-not-allowed select-none"
                      >
                        Source Code (Private)
                      </button>
                    )}

                    {/* View Specs Button */}
                    <button
                      onClick={() => setSelectedProject(proj)}
                      className="px-4 py-2 bg-black text-neutral-400 hover:text-white font-black text-xs uppercase tracking-wider border-2 border-neutral-800 hover:border-white cursor-pointer transition-colors"
                    >
                      View Specs
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
