import { Link } from 'react-router-dom';

export default function HomePage() {
  const pageNav = [
    { code: '01', title: 'Profile & Philosophy', path: '/about', desc: 'Minimalist standards, core engineering ethos, and vital metrics.' },
    { code: '02', title: 'Technical Arsenal', path: '/skills', desc: 'Full-stack languages, frameworks, databases, and dev tools.' },
    { code: '03', title: 'Selected Work', path: '/projects', desc: 'High-contrast production platforms including AURA and Nocturne.' },
    { code: '04', title: 'Experience Log', path: '/experience', desc: 'Full Stack Web Developer record and operational background.' },
    { code: '05', title: 'Direct Dispatch', path: '/contact', desc: 'Commission inquiries, project briefs, and communication channels.' },
  ];

  return (
    <div className="pt-24 sm:pt-32 pb-20 sm:pb-28 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Status Bar */}
        <div className="inline-flex items-center gap-3 border-2 border-white bg-black px-4 py-1.5 mb-8 text-xs font-bold uppercase tracking-wider text-white">
          <span className="inline-block w-2.5 h-2.5 bg-white animate-pulse" />
          <span>Status: Available for Full-Stack &amp; Frontend Roles</span>
        </div>

        {/* Monumental Brutalist Title */}
        <div className="space-y-3 mb-8">
          <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] text-white select-none">
            Full Stack Web<br />
            Developer.
          </h1>
          <div className="text-lg sm:text-2xl lg:text-3xl font-bold uppercase tracking-tight text-white pt-2 border-l-4 border-white pl-4">
            Nabeel Ahmed Dhillon
          </div>
        </div>

        {/* Statement */}
        <p className="max-w-3xl text-base sm:text-lg font-light text-neutral-300 leading-relaxed mb-10 tracking-normal">
          Raw code. Uncompromising fidelity. Zero bloat. Building resilient, high-contrast web applications with React, Vite, Tailwind CSS, Laravel, PHP, MySQL, and MongoDB.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-14">
          <Link
            to="/projects"
            className="px-6 py-3.5 bg-white text-black font-black text-xs sm:text-sm uppercase tracking-wider border-2 border-white hover:bg-black hover:text-white transition-colors"
          >
            Explore Projects ↗
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3.5 bg-black text-white font-black text-xs sm:text-sm uppercase tracking-wider border-2 border-white hover:bg-white hover:text-black transition-colors"
          >
            Initiate Contact →
          </Link>
        </div>

        {/* Structural Telemetry Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-2 border-white text-xs uppercase divide-y-2 md:divide-y-0 md:divide-x-2 divide-white bg-black mb-16">
          <div className="p-4 bg-black">
            <span className="text-neutral-500 block mb-1 font-bold">01. Specialty</span>
            <span className="font-black text-white">Full Stack Web Developer</span>
          </div>
          <div className="p-4 bg-black">
            <span className="text-neutral-500 block mb-1 font-bold">02. Base</span>
            <span className="font-black text-white">Multan, Pakistan</span>
          </div>
          <div className="p-4 bg-black">
            <span className="text-neutral-500 block mb-1 font-bold">03. Background</span>
            <span className="font-black text-white">1+ Year Experience</span>
          </div>
          <div className="p-4 bg-black">
            <span className="text-neutral-500 block mb-1 font-bold">04. Dispatch</span>
            <span className="font-black text-white">Remote Worldwide</span>
          </div>
        </div>

        {/* Directory / Page Navigator Cards */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b-2 border-white pb-3 mb-6 text-xs font-black uppercase tracking-widest text-white">
            <span>Portfolio Directory</span>
            <span>Dedicated Section Pages</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {pageNav.map((page) => (
              <Link
                key={page.path}
                to={page.path}
                className="group border-2 border-white p-6 bg-black hover:bg-white hover:text-black transition-colors flex flex-col justify-between min-h-42.5"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono font-bold mb-3 text-neutral-400 group-hover:text-black">
                    <span>{page.code}.</span>
                    <span>View Page ↗</span>
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tight text-white group-hover:text-black">
                    {page.title}
                  </h3>
                </div>
                <p className="text-xs text-neutral-400 group-hover:text-neutral-800 leading-relaxed mt-4 font-light">
                  {page.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Direct Links */}
        <div className="pt-12 mt-12 border-t border-neutral-800 flex flex-wrap items-center gap-4 text-xs font-bold uppercase">
          <span className="text-neutral-500">Channels:</span>
          <a
            href="https://github.com/NabeelAhmed8"
            target="_blank"
            rel="noreferrer"
            className="hover:bg-white hover:text-black px-2 py-0.5 border border-white text-white"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/nabeel-ahmed-447861238/"
            target="_blank"
            rel="noreferrer"
            className="hover:bg-white hover:text-black px-2 py-0.5 border border-white text-white"
          >
            LinkedIn ↗
          </a>
          <a
            href="mailto:nabeelprojects@hotmail.com"
            className="hover:bg-white hover:text-black px-2 py-0.5 border border-white text-white"
          >
            nabeelprojects@hotmail.com ↗
          </a>
        </div>

      </div>
    </div>
  );
}

