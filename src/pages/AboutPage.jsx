import { Sparkles, CheckCircle2, MapPin, Clock, Award, Terminal } from 'lucide-react';

export default function AboutPage() {
  const principles = [
    {
      title: 'Clean, Semantic Architecture',
      desc: 'Writing structured HTML5, maintainable CSS, and idiomatic React components with clear separation of concerns.',
    },
    {
      title: 'Performance & Zero Jank',
      desc: 'Ensuring fast load times, minimal bundle footprint, zero layout shifts (CLS), and fluid 60fps user interactions.',
    },
    {
      title: 'Predictable State & APIs',
      desc: 'Architecting robust state management and well-structured RESTful APIs with PHP, Laravel, and Express.',
    },
    {
      title: 'Refined Minimalist Aesthetics',
      desc: 'Emphasizing high readability, thoughtful whitespace, modern typography, and intuitive accessibility.',
    },
  ];

  const startYear = 2025;
  const currentYear = new Date().getFullYear();
  const expYears = Math.max(1, currentYear - startYear);
  const expFormatted = `${expYears}+ Year${expYears > 1 ? 's' : ''}`;

  const metrics = [
    { number: expFormatted, label: 'Experience', sub: '2025 — Present' },
    { number: '10+', label: 'Core Technologies', sub: 'React, Laravel, Node, DBs' },
    { number: '100%', label: 'Responsive Layouts', sub: 'Mobile-first fluid design' },
    { number: '<24h', label: 'Response Window', sub: 'Prompt direct communication' },
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-20 sm:pb-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="flex items-center pb-3 mb-10 border-b border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
            <Sparkles className="w-3.5 h-3.5 text-zinc-500" />
            <span>Profile &amp; Background</span>
          </div>
        </div>

        {/* Headline */}
        <div className="mb-14">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-100 max-w-3xl leading-[1.12]">
            Engineering thoughtful digital products with modern simplicity.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl font-normal leading-relaxed">
            I craft end-to-end web applications with a focus on clean engineering, responsive layouts, and user-centric design.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* Main Narrative & Philosophy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="p-6 sm:p-7 rounded-2xl border border-white/[0.07] bg-zinc-900/30 space-y-4">
              <h2 className="text-lg font-semibold text-zinc-100 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-zinc-400" />
                <span>Development Philosophy</span>
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed">
                I believe that good software should be fast, intuitive, and quiet. By removing unnecessary visual noise and bloated dependencies, interfaces become clearer and far more enjoyable to use.
              </p>
              <p className="text-sm text-zinc-400 leading-relaxed">
                My work spans both frontend engineering with modern React, Vite, and Tailwind CSS, as well as full-stack architectures utilizing PHP, Laravel, MySQL, and MongoDB.
              </p>
            </div>

            {/* Principles */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500 px-1">
                Core Principles
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {principles.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl border border-white/[0.06] bg-zinc-900/20 hover:border-white/[0.12] transition-colors"
                  >
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" />
                      <div>
                        <h4 className="text-sm font-semibold text-zinc-200">
                          {item.title}
                        </h4>
                        <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dossier & Scorecard */}
          <div className="lg:col-span-5 space-y-6">

            {/* Minimalist Metrics Grid */}
            <div className="p-6 rounded-2xl border border-white/[0.07] bg-zinc-900/30">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-5">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Key Metrics
                </span>
                <Award className="w-4 h-4 text-zinc-500" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {metrics.map((m, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-zinc-900/50 border border-white/[0.04]">
                    <div className="text-2xl sm:text-3xl font-bold text-zinc-100">
                      {m.number}
                    </div>
                    <div className="text-xs font-medium text-zinc-300 mt-1">
                      {m.label}
                    </div>
                    <div className="text-[11px] text-zinc-500 mt-0.5">
                      {m.sub}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Details Card */}
            <div className="p-6 rounded-2xl border border-white/[0.07] bg-zinc-900/30 space-y-3.5 text-xs">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 pb-2 border-b border-white/[0.06]">
                Developer Details
              </div>

              <div className="flex justify-between items-center py-1">
                <span className="text-zinc-500">Name</span>
                <span className="text-zinc-200 font-medium">Nabeel Ahmed Dhillon</span>
              </div>

              <div className="flex justify-between items-center py-1">
                <span className="text-zinc-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Location</span>
                </span>
                <span className="text-zinc-200 font-medium">Multan, Pakistan</span>
              </div>

              <div className="flex justify-between items-center py-1">
                <span className="text-zinc-500 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Timezone</span>
                </span>
                <span className="text-zinc-200 font-medium">PKT (UTC+5)</span>
              </div>

              <div className="flex justify-between items-center py-1">
                <span className="text-zinc-500">Stack Focus</span>
                <span className="text-zinc-200 font-medium">Full Stack (MERN / LAMP)</span>
              </div>

              <div className="flex justify-between items-center pt-2 border-t border-white/[0.06]">
                <span className="text-zinc-500">Current Status</span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Available for Hire
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
