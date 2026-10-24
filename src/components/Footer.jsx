import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-zinc-950 py-12 text-zinc-400">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/6">

          <div className="flex items-center gap-3">
            <Logo size={28} />
            <div>
              <div className="font-semibold text-zinc-200 text-sm">
                Nabeel Ahmed Dhillon
              </div>
              <div className="text-xs text-zinc-500">
                Full Stack Web Developer • Available for worldwide opportunities
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <a
              href="https://github.com/NabeelAhmed8"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/8 bg-zinc-900/60 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
            >
              <FaGithub className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/nabeel-ahmed-447861238/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/8 bg-zinc-900/60 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
            >
              <FaLinkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:nabeelprojects@hotmail.com"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/8 bg-zinc-900/60 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} Nabeel Ahmed Dhillon. All rights reserved.
          </div>
          <div className="text-zinc-500">
            Full Stack Web Engineering &amp; Architecture
          </div>
        </div>
      </div>
    </footer>
  );
}
