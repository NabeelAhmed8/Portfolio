import { useState, useEffect } from 'react';
import { getSkills } from '../services/api';
import { Sparkles, Code2, Layers, Database, Cpu } from 'lucide-react';

export default function SkillsPage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSkills() {
      setLoading(true);
      const res = await getSkills();
      setCategories(res.data || []);
      setLoading(false);
    }
    loadSkills();
  }, []);

  const getCategoryIcon = (index) => {
    switch (index) {
      case 0:
        return Code2;
      case 1:
        return Layers;
      case 2:
        return Database;
      default:
        return Cpu;
    }
  };

  return (
    <div className="pt-28 sm:pt-36 pb-20 sm:pb-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="flex items-center justify-between pb-3 mb-10 border-b border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
            <Sparkles className="w-3.5 h-3.5 text-zinc-500" />
            <span>02 / Technical Stack</span>
          </div>
          <span className="text-xs text-zinc-500 font-mono">skills</span>
        </div>

        {/* Section Title */}
        <div className="mb-14">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-100 max-w-3xl leading-[1.12]">
            Tooling, technologies &amp; architecture.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl font-normal leading-relaxed">
            A comprehensive spectrum spanning modern frontend libraries, backend frameworks, relational &amp; document databases, and development workflows.
          </p>
        </div>

        {/* Loading state */}
        {loading && (
          <div className="py-20 text-center text-xs font-mono text-zinc-500 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-zinc-400 animate-ping" />
            <span>Loading technical stack...</span>
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {categories.map((cat, idx) => {
            const Icon = getCategoryIcon(idx);
            return (
              <div
                key={cat.code || idx}
                className="p-6 sm:p-7 rounded-2xl border border-white/[0.07] bg-zinc-900/30 hover:border-white/[0.14] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-zinc-800/60 border border-white/[0.06] text-zinc-300">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h2 className="text-base sm:text-lg font-semibold text-zinc-100">
                        {cat.label}
                      </h2>
                    </div>
                    <span className="text-xs font-mono text-zinc-500">
                      {cat.code}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 font-normal">
                    {cat.summary}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-white/[0.06] text-xs font-medium text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
