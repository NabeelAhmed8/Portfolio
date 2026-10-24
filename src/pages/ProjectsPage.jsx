import { useState, useEffect, useCallback } from 'react';
import { getProjects } from '../services/api';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { Sparkles } from 'lucide-react';

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
        <div className="flex items-center pb-3 mb-10 border-b border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
            <Sparkles className="w-3.5 h-3.5 text-zinc-500" />
            <span>Featured Projects</span>
          </div>
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
          {projectsList.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </div>

      </div>

      {/* Project Specifications Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
