const projects = [
  {
    id: '01',
    title: 'Nexora Digital Web Agency',
    category: 'Commercial Platform',
    description:
      'High-performance digital agency web interface featuring crisp typographic rhythm, modular reusable sections, and rapid interaction loops across mobile and desktop clients.',
    stack: ['React 19', 'Tailwind CSS', 'Vite', 'Responsive DOM'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: '02',
    title: 'Nexora Freight & Logistics Portal',
    category: 'Operational Dashboard',
    description:
      'Real-time logistics coordination interface designed for fleet dispatching, shipment tracking, and rigid high-density tabular data displays with responsive filters.',
    stack: ['React', 'State Management', 'Tailwind CSS', 'Modular UI'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: '03',
    title: 'Culinary Food Ordering Interface',
    category: 'E-Commerce Platform',
    description:
      'Responsive restaurant web app with structured dining menus, interactive shopping cart state flows, and accessible keyboard-navigable layout patterns.',
    stack: ['JavaScript ES6+', 'HTML5 Semantic', 'CSS Grid', 'Bootstrap 5'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 border-b-2 border-white bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b-2 border-white pb-3 mb-12 text-xs font-black uppercase tracking-widest text-white">
          <span>03. Selected Work</span>
          <span className="hidden sm:inline">03 Projects Deployed</span>
        </div>

        {/* Section Title */}
        <div className="mb-14">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none text-white max-w-4xl">
            Selected Client Work.<br />
            Tested &amp; Deployed.
          </h2>
          <p className="text-sm sm:text-base font-light text-neutral-400 mt-4 max-w-2xl leading-relaxed">
            Production web applications engineered with high-contrast precision, modern tooling, and disciplined code.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-8">
          {projects.map((proj) => (
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
                  {proj.stack.map((item, idx) => (
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
                  <a
                    href={proj.liveUrl}
                    className="px-4 py-2 bg-white text-black font-black text-xs uppercase tracking-wider border-2 border-white hover:bg-black hover:text-white"
                  >
                    Live Demo ↗
                  </a>
                  <a
                    href={proj.githubUrl}
                    className="px-4 py-2 bg-black text-white font-black text-xs uppercase tracking-wider border-2 border-white hover:bg-white hover:text-black"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}