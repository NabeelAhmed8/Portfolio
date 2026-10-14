export default function Footer() {
  return (
    <footer className="border-t-2 border-white bg-black py-8 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="text-center sm:text-left">
          <div className="font-black uppercase tracking-wider text-white">
            Nabeel Ahmed Dhillon • Junior Full Stack Developer
          </div>
        </div>

        <div className="text-neutral-500 uppercase font-bold text-[11px]">
          © {new Date().getFullYear()} All Rights Reserved
        </div>
      </div>
    </footer>
  );
}