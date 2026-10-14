import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from './Logo';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Skills', path: '/skills' },
  { label: 'Projects', path: '/projects' },
  { label: 'Experience', path: '/experience' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar({ onOpenMessages }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b-2 border-white text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
        
        {/* Brand */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <Logo size={26} />
          <span className="font-bold text-sm uppercase tracking-wider text-white group-hover:bg-white group-hover:text-black px-1.5 py-0.5 transition-colors">
            Nabeel Dhillon
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1.5">
          {navLinks.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `text-xs font-bold uppercase tracking-wider px-3 py-1.5 transition-colors ${
                  isActive
                    ? 'bg-white text-black font-black'
                    : 'text-white hover:bg-white hover:text-black'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          {onOpenMessages && (
            <button
              onClick={onOpenMessages}
              className="text-xs font-bold uppercase tracking-wider text-neutral-400 hover:text-white px-3 py-1.5 border border-neutral-800 hover:border-white cursor-pointer ml-1 transition-colors"
              title="Track Sent Inquiries"
            >
              Inquiries ✉
            </button>
          )}

          <Link
            to="/contact"
            className="ml-2 text-xs font-black uppercase tracking-wider px-4 py-2 bg-white text-black border-2 border-white hover:bg-black hover:text-white cursor-pointer transition-colors"
          >
            Hire Me
          </Link>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="md:hidden font-bold text-xs uppercase px-3 py-1 border-2 border-white bg-black text-white hover:bg-white hover:text-black cursor-pointer"
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-black border-t-2 border-white px-4 py-4 space-y-2">
          {navLinks.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              end={item.path === '/'}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block text-sm font-bold uppercase tracking-wider px-3 py-2 transition-colors ${
                  isActive
                    ? 'bg-white text-black font-black'
                    : 'text-white hover:bg-white hover:text-black'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          {onOpenMessages && (
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenMessages();
              }}
              className="w-full text-left font-bold text-sm uppercase px-3 py-2 text-neutral-300 hover:bg-white hover:text-black cursor-pointer transition-colors"
            >
              Inquiries Status ✉
            </button>
          )}

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-center mt-3 font-black text-xs uppercase px-4 py-2.5 bg-white text-black border-2 border-white hover:bg-black hover:text-white cursor-pointer transition-colors"
          >
            Hire Me
          </Link>
        </div>
      )}
    </header>
  );
}