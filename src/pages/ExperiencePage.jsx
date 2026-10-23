import { useState, useEffect } from 'react';
import { getExperience } from '../services/api';
import { Sparkles, Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function ExperiencePage() {
  const [activeTab, setActiveTab] = useState('all');
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadExperience() {
      setLoading(true);
      const res = await getExperience(activeTab);
      setExperiences(res.data || []);
      setLoading(false);
    }
    loadExperience();
  }, [activeTab]);

  return (
    <div className="pt-28 sm:pt-36 pb-20 sm:pb-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="flex items-center pb-3 mb-10 border-b border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
            <Sparkles className="w-3.5 h-3.5 text-zinc-500" />
            <span>Professional Experience</span>
          </div>
        </div>

        {/* Section Title & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-100 max-w-2xl leading-[1.12]">
              Career trajectory &amp; roles.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl font-normal leading-relaxed">
              Demonstrated record of architecting scalable web solutions across modern frontend stacks and robust backend services.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-zinc-900/60 border border-white/[0.06] self-start md:self-auto">
            {[
              { label: 'All Roles', value: 'all' },
              { label: 'Full Stack', value: 'dev' },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-150 cursor-pointer ${activeTab === tab.value
                  ? 'bg-zinc-100 text-zinc-950 shadow-xs'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Loading state */}
        {loading && (
          <div className="py-20 text-center text-xs font-mono text-zinc-500 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-zinc-400 animate-ping" />
            <span>Retrieving career records...</span>
          </div>
        )}

        {/* Experience List */}
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={exp.id || idx}
              className="p-6 sm:p-8 rounded-2xl border border-white/[0.07] bg-zinc-900/30 hover:border-white/[0.14] transition-all"
            >
              {/* Header meta */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-white/[0.06] mb-5">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-zinc-100">
                    {exp.role}
                  </h2>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400 mt-1">
                    <span className="flex items-center gap-1 font-medium text-zinc-300">
                      <Briefcase className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{exp.company}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 self-start sm:self-center px-3 py-1 rounded-full bg-zinc-900 border border-white/[0.08] text-xs font-mono text-zinc-300">
                  <Calendar className="w-3 h-3 text-zinc-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Responsibilities list */}
              <ul className="space-y-3">
                {exp.points?.map((p, pIdx) => (
                  <li
                    key={pIdx}
                    className="flex items-start gap-3 text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal"
                  >
                    <CheckCircle2 className="w-4 h-4 text-zinc-500 mt-0.5 shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
