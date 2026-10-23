import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Layers,
  Code2,
  Briefcase,
  Mail,
  User,
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

export default function HomePage() {
  const directorySections = [
    {
      code: '01',
      title: 'About & Ethos',
      path: '/about',
      desc: 'Engineering principles, core philosophy, and technical foundation.',
      icon: User,
    },
    {
      code: '02',
      title: 'Skills & Stack',
      path: '/skills',
      desc: 'Full-stack languages, modern frameworks, databases, and tooling.',
      icon: Code2,
    },
    {
      code: '03',
      title: 'Featured Projects',
      path: '/projects',
      desc: 'Tested, production-grade applications including AURA and Nocturne.',
      icon: Layers,
    },
    {
      code: '04',
      title: 'Career & Experience',
      path: '/experience',
      desc: 'Track record of delivering full-stack web solutions and applications.',
      icon: Briefcase,
    },
    {
      code: '05',
      title: 'Contact & Inquiry',
      path: '/contact',
      desc: 'Direct email dispatch, WhatsApp, and commission brief channels.',
      icon: Mail,
    },
  ];

  const startYear = 2025;
  const currentYear = new Date().getFullYear();
  const expYears = Math.max(1, currentYear - startYear);
  const expLabel = `${expYears}+ Year${expYears > 1 ? 's' : ''} (2025 — Present)`;

  const highlights = [
    { label: 'Specialty', value: 'Full Stack Web Developer' },
    { label: 'Location', value: 'Multan, Pakistan (Remote)' },
    { label: 'Experience', value: expLabel },
    { label: 'Focus', value: 'React, Laravel, Tailwind & DBs' },
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-20 sm:pb-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Ambient Top Glow */}
        <div className="relative">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-white/[0.08] backdrop-blur-md mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-medium text-zinc-300 tracking-tight">
              Available for full-time &amp; contract roles
            </span>
          </div>

          {/* Hero Headline */}
          <div className="space-y-4 mb-8">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-100 max-w-4xl leading-[1.08]">
              Crafting modern, scalable &amp; intuitive web experiences.
            </h1>
            <p className="text-base sm:text-xl font-normal text-zinc-400 max-w-2xl leading-relaxed pt-2">
              I&apos;m <span className="text-zinc-100 font-medium">Nabeel Ahmed Dhillon</span>, a Full Stack Developer building resilient, high-performance web applications with React, Vite, Tailwind CSS, Laravel, PHP, MySQL, and MongoDB.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 mb-16">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-100 text-zinc-950 font-medium text-xs sm:text-sm hover:bg-white shadow-xs hover:shadow transition-all duration-150 cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900/70 border border-white/[0.1] text-zinc-300 hover:text-white hover:border-zinc-700 hover:bg-zinc-850 font-medium text-xs sm:text-sm transition-all duration-150 cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Minimalist Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-20">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl border border-white/[0.06] bg-zinc-900/30 backdrop-blur-xs hover:border-white/[0.12] transition-colors"
            >
              <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-1">
                {item.label}
              </div>
              <div className="text-sm sm:text-base font-semibold text-zinc-200">
                {item.value}
              </div>
            </div>
          ))}
        </div>

        {/* Directory Navigator */}
        <div className="space-y-6">
          <div className="flex items-center pb-3 border-b border-white/[0.08]">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
              <Sparkles className="w-3.5 h-3.5 text-zinc-500" />
              <span>Explore Portfolio</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {directorySections.map((sec) => {
              const Icon = sec.icon;
              return (
                <Link
                  key={sec.path}
                  to={sec.path}
                  className="group p-5 sm:p-6 rounded-2xl border border-white/[0.06] bg-zinc-900/30 hover:bg-zinc-900/70 hover:border-white/[0.15] transition-all duration-200 flex flex-col justify-between min-h-[170px]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 rounded-xl bg-zinc-800/60 border border-white/[0.06] text-zinc-400 group-hover:text-white transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono text-zinc-500 group-hover:text-zinc-400">
                        {sec.code}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-zinc-100 group-hover:text-white flex items-center justify-between">
                      <span>{sec.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-zinc-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-400 group-hover:text-zinc-300 leading-relaxed mt-3">
                    {sec.desc}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Social / External Links Bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs font-mono text-zinc-500">
            CONNECT DIRECTLY
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <a
              href="https://github.com/NabeelAhmed8"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/[0.08] bg-zinc-900/40 text-xs text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
            >
              <FaGithub className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/nabeel-ahmed-447861238/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/[0.08] bg-zinc-900/40 text-xs text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
            >
              <FaLinkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:nabeelprojects@hotmail.com"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/[0.08] bg-zinc-900/40 text-xs text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>nabeelprojects@hotmail.com</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
