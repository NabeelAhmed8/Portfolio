import { useState } from 'react';
import Logo from './Logo';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b-2 border-white text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
        
        {/* Brand */}
        <a href="#home" className="flex items-center gap-3 group">
          <Logo size={26} />
          <span className="font-bold text-sm uppercase tracking-wider text-white group-hover:bg-white group-hover:text-black px-1.5 py-0.5">
            Nabeel Dhillon
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-bold uppercase tracking-wider text-white px-3 py-1.5 hover:bg-white hover:text-black"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-3 text-xs font-black uppercase tracking-wider px-4 py-2 bg-white text-black border-2 border-white hover:bg-black hover:text-white"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="md:hidden font-bold text-xs uppercase px-3 py-1 border-2 border-white bg-black text-white hover:bg-white hover:text-black"
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-black border-t-2 border-white px-4 py-4 space-y-2">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-bold uppercase tracking-wider text-white px-2 py-2 hover:bg-white hover:text-black"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block text-center mt-3 font-black text-xs uppercase px-4 py-2.5 bg-white text-black border-2 border-white hover:bg-black hover:text-white"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}