export default function Home() {
  return (
    <section id="home" className="pt-28 sm:pt-36 pb-16 sm:pb-24 border-b-2 border-white bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Status Bar */}
        <div className="inline-flex items-center gap-3 border-2 border-white bg-black px-4 py-1.5 mb-8 text-xs font-bold uppercase tracking-wider text-white">
          <span className="inline-block w-2.5 h-2.5 bg-white animate-pulse" />
          <span>Status: Available for New Work and Contracts</span>
        </div>

        {/* Monumental Brutalist Display Title */}
        <div className="space-y-3 mb-8">
          <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] text-white select-none">
            Frontend<br />
            Engineer.
          </h1>
          <div className="text-lg sm:text-2xl lg:text-3xl font-bold uppercase tracking-tight text-white pt-2 border-l-4 border-white pl-4">
            Nabeel Ahmed Dhillon
          </div>
        </div>

        {/* Thin Clean Statement */}
        <p className="max-w-3xl text-base sm:text-lg font-light text-neutral-300 leading-relaxed mb-10 tracking-normal">
          Raw code. Uncompromising fidelity. Zero bloat. Building relentless, high-contrast digital interfaces with modern React, Tailwind CSS, and meticulous structural precision.
        </p>

        {/* High-Contrast Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-14">
          <a
            href="#projects"
            className="px-6 py-3.5 bg-white text-black font-black text-xs sm:text-sm uppercase tracking-wider border-2 border-white hover:bg-black hover:text-white"
          >
            View Projects ↓
          </a>
          <a
            href="#contact"
            className="px-6 py-3.5 bg-black text-white font-black text-xs sm:text-sm uppercase tracking-wider border-2 border-white hover:bg-white hover:text-black"
          >
            Get in Touch →
          </a>
        </div>

        {/* Structural Telemetry Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-2 border-white text-xs uppercase divide-y-2 md:divide-y-0 md:divide-x-2 divide-white bg-black">
          <div className="p-4 bg-black">
            <span className="text-neutral-500 block mb-1 font-bold">01. Specialty</span>
            <span className="font-black text-white">React &amp; Tailwind UI</span>
          </div>
          <div className="p-4 bg-black">
            <span className="text-neutral-500 block mb-1 font-bold">02. Base</span>
            <span className="font-black text-white">Multan, Pakistan</span>
          </div>
          <div className="p-4 bg-black">
            <span className="text-neutral-500 block mb-1 font-bold">03. Background</span>
            <span className="font-black text-white">4+ Years Operations</span>
          </div>
          <div className="p-4 bg-black">
            <span className="text-neutral-500 block mb-1 font-bold">04. Dispatch</span>
            <span className="font-black text-white">Remote Worldwide</span>
          </div>
        </div>

        {/* Quick Direct Links */}
        <div className="pt-6 flex flex-wrap items-center gap-4 text-xs font-bold uppercase">
          <span className="text-neutral-500">Channels:</span>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:bg-white hover:text-black px-2 py-0.5 border border-white text-white"
          >
            GitHub ↗
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:bg-white hover:text-black px-2 py-0.5 border border-white text-white"
          >
            LinkedIn ↗
          </a>
          <a
            href="mailto:contact@nabeeldhillon.dev"
            className="hover:bg-white hover:text-black px-2 py-0.5 border border-white text-white"
          >
            contact@nabeeldhillon.dev ↗
          </a>
        </div>

      </div>
    </section>
  );
}