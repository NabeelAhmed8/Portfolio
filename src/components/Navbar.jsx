import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Skills', path: '/skills' },
  { label: 'Projects', path: '/projects' },
  { label: 'Experience', path: '/experience' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-zinc-950/85 border-b border-white/8 transition-all">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

        {/* Brand */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <Logo size={28} />
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight text-zinc-100 group-hover:text-white transition-colors">
              Nabeel Dhillon
            </span>
            <span className="text-[10px] text-zinc-400 tracking-wide font-mono -mt-0.5 hidden sm:block">
              Full Stack Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-900/60 p-1 rounded-full border border-white/6">
          {navLinks.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `text-xs font-medium px-3.5 py-1.5 rounded-full transition-all duration-150 ${isActive
                  ? 'bg-zinc-800 text-white shadow-xs'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium px-4 py-1.5 bg-zinc-100 text-zinc-950 hover:bg-white rounded-full transition-all duration-150 shadow-xs hover:shadow-sm"
          >
            <span>Hire Me</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 transition-colors cursor-pointer"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950/95 backdrop-blur-2xl border-b border-white/8 px-5 py-4 space-y-1">
          {navLinks.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              end={item.path === '/'}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block text-sm font-medium px-3.5 py-2.5 rounded-lg transition-colors ${isActive
                  ? 'bg-zinc-850 text-white font-semibold'
                  : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/60'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <div className="pt-3 border-t border-white/6">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 text-center text-xs font-medium px-4 py-2.5 bg-zinc-100 text-zinc-950 hover:bg-white rounded-lg transition-colors cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
