export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t-2 border-white bg-black py-10 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs">
        
        <div className="text-center sm:text-left space-y-1">
          <div className="font-black uppercase tracking-wider text-white">
            Nabeel Ahmed Dhillon • Frontend Engineer
          </div>
          <div className="text-neutral-400 font-light tracking-wider text-[11px]">
            High-Contrast Architectural Brutalism • Built with React &amp; Tailwind CSS
          </div>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-neutral-500 uppercase font-bold">
            © {new Date().getFullYear()} All Rights Reserved
          </span>
          <button
            onClick={scrollToTop}
            className="px-4 py-2 border-2 border-white bg-black text-white hover:bg-white hover:text-black font-black uppercase text-xs"
          >
            Top ↑
          </button>
        </div>

      </div>
    </footer>
  );
}