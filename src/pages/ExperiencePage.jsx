import { useState, useEffect } from 'react';
import { getExperience } from '../services/api';

export default function ExperiencePage() {
  const [activeTab, setActiveTab] = useState('all');
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadExperience() {
      setLoading(true);
      const res = await getExperience(activeTab);
      setExperiences(res.data);
      setLoading(false);
    }
    loadExperience();
  }, [activeTab]);

  return (
    <div className="pt-24 sm:pt-32 pb-20 sm:pb-28 bg-black text-white min-h-[calc(100vh-14rem)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b-2 border-white pb-3 mb-12 text-xs font-black uppercase tracking-widest text-white">
          <span>04. Experience Log</span>
          <span className="hidden sm:inline">Page: experience</span>
        </div>

        {/* Section Title & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none text-white max-w-2xl">
              Career Record &amp;<br />Experience.
            </h1>
            <p className="text-sm sm:text-base font-light text-neutral-400 mt-4 leading-relaxed">
              Demonstrated background in building scalable web solutions across modern frontend and backend architectures.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 self-start md:self-auto">
            {[
              { label: 'All Roles', value: 'all' },
              { label: 'Full Stack Dev', value: 'dev' },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`px-4 py-2 text-xs font-black uppercase tracking-wider border-2 border-white cursor-pointer transition-colors ${
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

        {/* Loading state */}
        {loading && (
          <div className="py-8 text-center text-xs uppercase tracking-widest text-neutral-400 font-mono">
            Filtering Career Records from Backend...
          </div>
        )}

        {/* Chronological List */}
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={exp.id || idx}
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
                  {exp.points?.map((p, pIdx) => (
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
    </div>
  );
}

