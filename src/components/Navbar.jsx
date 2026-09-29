import React, { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home', id: 'Home' },
  { name: 'About', id: 'About' },
  { name: 'Skills', id: 'Skills' },
  { name: 'Projects', id: 'Projects' },
  { name: 'Experience', id: 'Experience' },
  { name: 'Contact', id: 'Contact' },
];

export default function Navbar({ activeTab, setActiveTab }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button 
          onClick={() => setActiveTab('Home')}
          className="flex items-center gap-2 group text-left bg-transparent border-none cursor-pointer"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-dark-900 font-bold shadow-md shadow-primary/20">
            {/* Inline Code SVG */}
            <svg className="w-5 h-5 text-dark-900 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">
            Nabeel<span className="text-primary">.dev</span>
          </span>
        </button>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.id)}
              className={`text-sm font-medium transition-colors cursor-pointer bg-transparent border-none ${
                activeTab === item.id ? 'text-primary font-semibold' : 'text-slate-300 hover:text-primary'
              }`}
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => setActiveTab('contact')}
            className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 text-primary text-sm font-semibold hover:bg-primary hover:text-dark-900 transition-all duration-200 cursor-pointer"
          >
            Hire Me
          </button>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-dark-700 transition"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden glass-nav border-b border-slate-800 px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                setActiveTab(item.id);
                setIsOpen(false);
              }}
              className={`w-full text-left block px-3 py-2 text-sm font-medium rounded-md transition ${
                activeTab === item.id ? 'text-primary bg-dark-700/50 font-semibold' : 'text-slate-300 hover:text-primary hover:bg-dark-700'
              }`}
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => {
              setActiveTab('contact');
              setIsOpen(false);
            }}
            className="w-full text-center block mt-3 px-4 py-2 rounded-lg bg-primary text-dark-900 font-semibold text-sm cursor-pointer"
          >
            Hire Me
          </button>
        </div>
      )}
    </header>
  );
}