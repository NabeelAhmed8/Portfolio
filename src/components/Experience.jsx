import { useState } from 'react';

const experiences = [
  {
    role: 'Frontend Web Developer',
    category: 'dev',
    company: 'Nexora Projects / Freelance',
    period: '2024 — Present',
    location: 'Remote Worldwide',
    points: [
      'Engineered responsive, accessible user interfaces using React, Vite, and Tailwind CSS.',
      'Constructed modular, reusable component systems with zero redundant styling and predictable state flows.',
      'Optimized cross-browser rendering, typographic hierarchy, and Lighthouse performance across mobile viewports.',
    ],
  },
  {
    role: 'Data Administrator',
    category: 'ops',
    company: 'Enterprise Administration Operations',
    period: '4 Years Duration',
    location: 'Multan, Pakistan',
    points: [
      'Managed high-density office datasets, enterprise spreadsheets, and digital documentation repositories.',
      'Architected structured reporting templates that accelerated workflow audits and eliminated duplicate entry.',
      'Maintained consistent validation protocols and confidential dataset integrity across daily operational cycles.',
    ],
  },
  {
    role: 'Truck Dispatch & Customer Support',
    category: 'ops',
    company: 'Logistics Operations',
    period: 'Professional Experience',
    location: 'Multan, PK / Remote',
    points: [
      'Coordinated real-time driver logistics schedules, freight routing, and urgent status updates.',
      'Delivered direct client communications and rapid operational problem resolution under strict timeframes.',
    ],
  },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState('all');

  const filtered = activeTab === 'all'
    ? experiences
    : experiences.filter((item) => item.category === activeTab);

  return (
    <section id="experience" className="py-20 sm:py-28 border-b-2 border-white bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b-2 border-white pb-3 mb-12 text-xs font-black uppercase tracking-widest text-white">
          <span>04. Experience Log</span>
          <span className="hidden sm:inline">2020 — 2026</span>
        </div>

        {/* Section Title & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none text-white max-w-2xl">
              Career Record &amp;<br />Experience.
            </h2>
            <p className="text-sm sm:text-base font-light text-neutral-400 mt-4 leading-relaxed">
              Professional background combining frontend engineering craft with disciplined operational accuracy.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 self-start md:self-auto">
            {[
              { label: 'All Roles', value: 'all' },
              { label: 'Development', value: 'dev' },
              { label: 'Operations & Data', value: 'ops' },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`px-4 py-2 text-xs font-black uppercase tracking-wider border-2 border-white ${
                  activeTab === tab.value
                    ? 'bg-white text-black'
                    : 'bg-black text-white hover:bg-white hover:text-black'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Chronological List */}
        <div className="space-y-6">
          {filtered.map((exp, idx) => (
            <div
              key={idx}
              className="border-2 border-white bg-black"
            >
              {/* Inverted Card Top */}
              <div className="bg-white text-black p-3.5 text-xs font-black uppercase flex flex-wrap items-center justify-between gap-2">
                <span>Role: {exp.role}</span>
                <span>{exp.period}</span>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="text-xs text-neutral-400 uppercase border-b border-neutral-800 pb-3 flex flex-wrap gap-2 font-bold">
                  <span className="text-white">{exp.company}</span>
                  <span className="text-neutral-600">•</span>
                  <span>{exp.location}</span>
                </div>

                <ul className="space-y-2.5 pt-2">
                  {exp.points.map((p, pIdx) => (
                    <li key={pIdx} className="text-xs sm:text-sm font-light text-neutral-300 leading-relaxed flex items-start gap-2.5">
                      <span className="text-white select-none mt-0.5">—</span>
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