import { useState, useEffect, useCallback } from 'react';
import { getProjects } from '../services/api';
import AddProjectModal from '../components/AddProjectModal';
import ProjectModal from '../components/ProjectModal';

export default function ProjectsPage() {
  const [projectsList, setProjectsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
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

  const handleProjectAdded = (newProject) => {
    setProjectsList((prev) => [newProject, ...prev]);
  };

  return (
    <div className="pt-24 sm:pt-32 pb-20 sm:pb-28 bg-black text-white min-h-[calc(100vh-14rem)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b-2 border-white pb-3 mb-12 text-xs font-black uppercase tracking-widest text-white">
          <span>03. Selected Work</span>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline">
              Page: projects ({projectsList.length} Active)
            </span>
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="px-3 py-1 bg-white text-black font-black uppercase text-xs border border-white hover:bg-black hover:text-white cursor-pointer transition-colors"
            >
              + Add Project
            </button>
          </div>
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
            Fetching Project Archive from MongoDB...
          </div>
        )}

        {/* Projects List */}
        <div className="space-y-8">
          {projectsList.map((proj) => (
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
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      className="px-4 py-2 bg-white text-black font-black text-xs uppercase tracking-wider border-2 border-white hover:bg-black hover:text-white transition-colors"
                    >
                      Live Demo ↗
                    </a>
                  )}
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      className="px-4 py-2 bg-black text-white font-black text-xs uppercase tracking-wider border-2 border-white hover:bg-white hover:text-black transition-colors"
                    >
                      Source Code
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedProject(proj)}
                    className="px-4 py-2 bg-black text-neutral-400 hover:text-white font-black text-xs uppercase tracking-wider border-2 border-neutral-800 hover:border-white cursor-pointer transition-colors"
                  >
                    View Specs
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Add Project Modal */}
      <AddProjectModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onProjectAdded={handleProjectAdded}
      />

      {/* Project Spec Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

