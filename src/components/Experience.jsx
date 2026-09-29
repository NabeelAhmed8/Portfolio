import React, { useState } from 'react';

const experiences = [
  {
    role: 'Frontend Web Developer',
    category: 'dev',
    company: 'Nexora Projects / Freelance',
    period: '2024 — Present',
    location: 'Remote',
    points: [
      'Developed responsive, modern interfaces using React, Vite, and Tailwind CSS.',
      'Constructed modular web components with clean glassmorphic design and CSS animations.',
      'Ensured cross-browser consistency and high performance on mobile devices.',
    ],
  },
  {
    role: 'Data Administrator',
    category: 'ops',
    company: 'Enterprise Administration Operations',
    period: '4 Years',
    location: 'Multan, Pakistan',
    points: [
      'Handled accurate record-keeping, office data processing, and document management.',
      'Created structured spreadsheet templates for internal reporting and workflow tracking.',
      'Maintained consistent data integrity across daily operational datasets.',
    ],
  },
  {
    role: 'Truck Dispatch & Customer Support',
    category: 'ops',
    company: 'Logistics Operations',
    period: 'Professional Experience',
    location: 'Multan, Pakistan / Remote',
    points: [
      'Managed freight tracking and driver dispatch communication schedules.',
      'Provided direct customer support and resolved operational logistics issues.',
    ],
  },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState('all');

  const filtered = activeTab === 'all'
    ? experiences
    : experiences.filter((item) => item.category === activeTab);

  return (
    <section id="experience" className="py-6 sm:py-12 bg-dark-800/40 relative w-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <span className="text-primary font-semibold text-xs uppercase tracking-wider">Career</span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mt-1">Experience & Background</h2>

          {/* Filter Tabs */}
          <div className="inline-flex p-1 rounded-xl bg-dark-700 border border-slate-700 mt-4 gap-1">
            {[
              { label: 'All', value: 'all' },
              { label: 'Web Dev', value: 'dev' },
              { label: 'Operations & Data', value: 'ops' },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`px-3 py-1 text-xs rounded-lg transition cursor-pointer ${
                  activeTab === tab.value
                    ? 'bg-primary text-dark-900 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-3 sm:ml-6 space-y-4 sm:space-y-6">
          {filtered.map((exp, idx) => (
            <div key={idx} className="relative pl-4 sm:pl-8">
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-primary border-4 border-dark-900" />
              <div className="glass-card p-4 sm:p-6 rounded-2xl border border-slate-800 shadow-lg">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                  <h3 className="text-sm sm:text-lg font-bold text-white">{exp.role}</h3>
                  <span className="text-[11px] sm:text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                    {exp.period}
                  </span>
                </div>
                <div className="text-xs text-slate-400 mb-2.5">
                  <span>{exp.company}</span> • <span>{exp.location}</span>
                </div>
                <ul className="space-y-1">
                  {exp.points.map((p, pIdx) => (
                    <li key={pIdx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                      <span className="text-primary mt-0.5">▸</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}