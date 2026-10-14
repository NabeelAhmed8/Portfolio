const skillCategories = [
  {
    code: '01',
    label: 'Core Languages',
    summary: 'Foundational web platform standards and core language mechanics.',
    skills: ['JavaScript ES6+', 'TypeScript', 'HTML5 Semantic', 'CSS3 Spec', 'REST APIs', 'DOM Manipulation'],
  },
  {
    code: '02',
    label: 'Frameworks & Engines',
    summary: 'Modular React component architecture, hooks, and modern build tooling.',
    skills: ['React 19', 'Vite Bundler', 'Tailwind CSS', 'Bootstrap 5', 'Next.js Basics'],
  },
  {
    code: '03',
    label: 'Interface Architecture',
    summary: 'Typographic precision, responsive grid systems, and high-contrast usability.',
    skills: ['High-Contrast UI', 'Responsive Grids', 'Design Systems', 'Figma to Code', 'Micro-Interactions'],
  },
  {
    code: '04',
    label: 'Workflow & Operations',
    summary: 'Version integrity, deployment pipelines, and operational record keeping.',
    skills: ['Git & GitHub', 'Vercel & Netlify', 'DevTools Profiling', 'Data Administration', 'Accessibility (A11y)'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 border-b-2 border-white bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b-2 border-white pb-3 mb-12 text-xs font-black uppercase tracking-widest text-white">
          <span>02. Technical Arsenal</span>
          <span className="hidden sm:inline">Stack Inventory</span>
        </div>

        {/* Section Title */}
        <div className="mb-14">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none text-white max-w-4xl">
            Precision Toolset.<br />
            Zero Redundant Libraries.
          </h2>
          <p className="text-sm sm:text-base font-light text-neutral-400 mt-4 max-w-2xl leading-relaxed">
            A curated frontend arsenal focused on constructing resilient, fast, and scalable client applications.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.code}
              className="border-2 border-white bg-black"
            >
              {/* Inverted Card Header */}
              <div className="bg-white text-black p-3.5 text-xs font-black uppercase flex items-center justify-between">
                <span>{cat.code}. {cat.label}</span>
                <span>Active Stack</span>
              </div>

              <div className="p-6 space-y-5">
                <p className="text-xs sm:text-sm font-light text-neutral-300 leading-relaxed">
                  {cat.summary}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="border border-white bg-black text-white px-3 py-1 text-xs font-bold uppercase hover:bg-white hover:text-black cursor-default select-none"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}