import React from 'react';

const categories = [
  {
    title: 'Core Development',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript basics'],
  },
  {
    title: 'Frameworks & CSS',
    skills: ['React.js', 'Vite', 'Tailwind CSS', 'Bootstrap 5'],
  },
  {
    title: 'UI Design & Layout',
    skills: ['Responsive Design', 'Glassmorphism', 'Dark-Mode UI', 'CSS Animations'],
  },
  {
    title: 'Operations & Tools',
    skills: ['Git & GitHub', 'Data Administration', 'Office Administration', 'REST APIs'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-6 sm:py-12 bg-dark-800/40 relative w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="text-primary font-semibold text-xs uppercase tracking-wider">Expertise</span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mt-1">Skills & Technologies</h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="glass-card p-4 sm:p-5 rounded-2xl flex flex-col justify-between border border-slate-800 shadow-lg">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 sm:py-1 text-[11px] sm:text-xs font-medium rounded-lg bg-dark-700/80 border border-slate-700/60 text-slate-300"
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