import React from 'react';

const projects = [
  {
    title: 'Nexora Digital Web Agency',
    description: 'A modern dark-mode digital agency landing page with glassmorphism components and responsive layouts.',
    tags: ['React', 'Tailwind CSS', 'Vite'],
    link: '#',
  },
  {
    title: 'Nexora Logistics Portal',
    description: 'Dispatch coordination and freight-tracking dashboard interface designed for fleet operations.',
    tags: ['React', 'Tailwind CSS', 'Modular UI'],
    link: '#',
  },
  {
    title: 'Culinary Food Ordering Landing Page',
    description: 'Interactive restaurant landing page featuring structured menus, clean dish cards, and call-to-action buttons.',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-6 sm:py-12 relative w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="text-primary font-semibold text-xs uppercase tracking-wider">Showcase</span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mt-1">Featured Projects</h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((proj, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-4 sm:p-6 flex flex-col justify-between group border border-slate-800 shadow-lg">
              <div>
                <div className="h-28 sm:h-36 rounded-xl bg-dark-700/80 border border-slate-700/50 flex items-center justify-center mb-3 sm:mb-4 group-hover:border-primary/40 transition">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-slate-600 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-primary transition-colors">
                  {proj.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm mt-1 sm:mt-2 mb-3 sm:mb-4 leading-relaxed">
                  {proj.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-3 sm:mb-4">
                  {proj.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 text-[10px] sm:text-[11px] rounded bg-dark-700 text-primary border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={proj.link}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-primary transition cursor-pointer"
                >
                  <span>Explore Demo</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}