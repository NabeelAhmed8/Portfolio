import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 250) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-40 p-2.5 rounded-full bg-zinc-900/80 backdrop-blur-md border border-white/10 text-zinc-300 hover:text-white hover:bg-zinc-800 hover:border-zinc-600 shadow-xl transition-all duration-200 cursor-pointer group hover:scale-105 active:scale-95"
    >
      <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
    </button>
  );
}
