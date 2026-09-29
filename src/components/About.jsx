import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-6 sm:py-12 relative w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="text-primary font-semibold text-xs uppercase tracking-wider">About Me</span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mt-1">Profile & Philosophy</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Card Presentation */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm glass-card rounded-2xl p-4 sm:p-6 border border-slate-700/60 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Nabeel Ahmed Dhillon</h3>
              <p className="text-primary text-xs font-semibold mb-2">Frontend Web Developer</p>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                Specialized in building clean, responsive user interfaces, structured components, and high-speed web solutions.
              </p>
              <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 font-mono space-y-1">
                <div>📍 Pakistan</div>
                <div>💼 Available for Remote & Freelance</div>
              </div>
            </div>
          </div>

          {/* Bio Text */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
              With experience spanning web development, data administration, and operational coordination, I bring an analytical and detail-oriented approach to frontend engineering.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              I prioritize responsive layouts, clean code organization, and intuitive navigation. From developing custom landing pages to architecting reusable component structures, my focus is always on speed, performance, and user satisfaction.
            </p>

            {/* Stat Counters */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="glass-card p-3 rounded-xl text-center">
                <div className="text-lg sm:text-2xl font-extrabold text-white">4+</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Years Work Exp</div>
              </div>
              <div className="glass-card p-3 rounded-xl text-center">
                <div className="text-lg sm:text-2xl font-extrabold text-white">100%</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Responsive UI</div>
              </div>
              <div className="glass-card p-3 rounded-xl text-center">
                <div className="text-lg sm:text-2xl font-extrabold text-white">24/7</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Client Focus</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}