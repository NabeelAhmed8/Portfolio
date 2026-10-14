export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 border-b-2 border-white bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b-2 border-white pb-3 mb-12 text-xs font-black uppercase tracking-widest text-white">
          <span>01. Profile and Philosophy</span>
          <span className="hidden sm:inline">Section Reference</span>
        </div>

        {/* Section Title */}
        <div className="mb-14">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none text-white max-w-4xl">
            Strip away the non-essential.<br />
            Let the raw interface speak.
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Manifesto & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="border-l-4 border-white pl-4 py-1 text-white font-bold text-sm uppercase tracking-wide">
              Frontend Standards
            </div>

            <p className="font-light text-neutral-300 text-sm sm:text-base leading-relaxed">
              I build digital experiences stripped of superfluous decoration. No gauzy glows, no redundant dependencies, and no unnecessary layout shift. Just razor-sharp accessible HTML, modular React components, and disciplined Tailwind CSS architecture.
            </p>

            <p className="font-light text-neutral-300 text-sm sm:text-base leading-relaxed">
              My professional background spans frontend engineering, enterprise data administration, and logistics dispatch coordination. This multi-disciplinary foundation drives rigorous error resilience, unyielding accuracy, and calm execution under pressure.
            </p>

            <div className="border-2 border-white p-5 bg-black space-y-3 mt-6">
              <div className="text-xs font-black uppercase text-white tracking-widest mb-3">
                Core Principles
              </div>
              <div className="flex items-start gap-3 text-xs font-bold text-white">
                <span className="bg-white text-black px-1.5 py-0.5 font-mono">01</span>
                <span>Semantic, accessible HTML5 and clean DOM structure</span>
              </div>
              <div className="flex items-start gap-3 text-xs font-bold text-white">
                <span className="bg-white text-black px-1.5 py-0.5 font-mono">02</span>
                <span>Zero jank, zero cumulative layout shift (CLS)</span>
              </div>
              <div className="flex items-start gap-3 text-xs font-bold text-white">
                <span className="bg-white text-black px-1.5 py-0.5 font-mono">03</span>
                <span>Reusable, predictable component architecture and state hooks</span>
              </div>
              <div className="flex items-start gap-3 text-xs font-bold text-white">
                <span className="bg-white text-black px-1.5 py-0.5 font-mono">04</span>
                <span>High-contrast, readability-first interface hierarchy</span>
              </div>
            </div>
          </div>

          {/* Metrics & Dossier Box */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Scorecard */}
            <div className="border-2 border-white bg-black">
              <div className="border-b-2 border-white p-3.5 text-xs font-black uppercase bg-white text-black flex justify-between">
                <span>Vital Metrics</span>
                <span>Verified Record</span>
              </div>

              <div className="grid grid-cols-2 divide-x-2 divide-y-2 divide-white">
                <div className="p-4">
                  <div className="text-4xl sm:text-5xl font-black text-white leading-none">
                    04+
                  </div>
                  <div className="text-[11px] font-bold text-neutral-400 mt-2 uppercase">
                    Years Operations
                  </div>
                </div>

                <div className="p-4">
                  <div className="text-4xl sm:text-5xl font-black text-white leading-none">
                    100%
                  </div>
                  <div className="text-[11px] font-bold text-neutral-400 mt-2 uppercase">
                    Responsive Fidelity
                  </div>
                </div>

                <div className="p-4">
                  <div className="text-4xl sm:text-5xl font-black text-white leading-none">
                    100
                  </div>
                  <div className="text-[11px] font-bold text-neutral-400 mt-2 uppercase">
                    Lighthouse Target
                  </div>
                </div>

                <div className="p-4">
                  <div className="text-4xl sm:text-5xl font-black text-white leading-none">
                    24/7
                  </div>
                  <div className="text-[11px] font-bold text-neutral-400 mt-2 uppercase">
                    Async Availability
                  </div>
                </div>
              </div>
            </div>

            {/* Dossier Details */}
            <div className="border-2 border-white p-5 bg-black text-xs space-y-2.5">
              <div className="text-neutral-500 font-bold uppercase tracking-wider">
                Operator Details
              </div>
              <div className="flex justify-between border-b border-neutral-800 pb-1.5">
                <span className="text-neutral-400">Name:</span>
                <span className="font-bold text-white">Nabeel Ahmed Dhillon</span>
              </div>
              <div className="flex justify-between border-b border-neutral-800 pb-1.5">
                <span className="text-neutral-400">Location:</span>
                <span className="font-bold text-white">Multan, Punjab, PK</span>
              </div>
              <div className="flex justify-between border-b border-neutral-800 pb-1.5">
                <span className="text-neutral-400">Engagement:</span>
                <span className="font-bold text-white">Remote, Freelance, Contract</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-neutral-400">Status:</span>
                <span className="bg-white text-black font-black px-2 py-0.5 uppercase">Available</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}