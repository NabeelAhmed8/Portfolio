import { useState, useEffect } from 'react';
import { getSkills } from '../services/api';

export default function SkillsPage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSkills() {
      setLoading(true);
      const res = await getSkills();
      setCategories(res.data);
      setLoading(false);
    }
    loadSkills();
  }, []);

  return (
    <div className="pt-24 sm:pt-32 pb-20 sm:pb-28 bg-black text-white min-h-[calc(100vh-14rem)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b-2 border-white pb-3 mb-12 text-xs font-black uppercase tracking-widest text-white">
          <span>02. Technical Arsenal</span>
          <span className="hidden sm:inline">Page: skills</span>
        </div>

        {/* Section Title */}
        <div className="mb-14">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none text-white max-w-4xl">
            Precision Toolset.<br />
            Full Stack Capabilities.
          </h1>
          <p className="text-sm sm:text-base font-light text-neutral-400 mt-4 max-w-2xl leading-relaxed">
            A comprehensive arsenal spanning HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, React, Vite, MongoDB, MySQL, PHP, and Laravel.
          </p>
        </div>

        {/* Loading state */}
        {loading && (
          <div className="py-12 text-center text-xs uppercase tracking-widest text-neutral-400 font-mono">
            Loading Skills Matrix from Backend...
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat) => (
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
                      className="border border-white bg-black text-white px-3 py-1 text-xs font-bold uppercase hover:bg-white hover:text-black cursor-default select-none transition-colors"
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
    </div>
  );
}

