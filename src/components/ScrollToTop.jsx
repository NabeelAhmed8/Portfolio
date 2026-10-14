import { useState, useEffect } from 'react';

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
      className="fixed bottom-6 right-6 z-40 bg-white text-black hover:bg-black hover:text-white border-2 border-white px-4 py-2.5 font-black text-xs uppercase tracking-widest shadow-2xl transition-all cursor-pointer flex items-center gap-2 group animate-fade-in"
    >
      <span className="group-hover:-translate-y-0.5 transition-transform">TOP ↑</span>
    </button>
  );
}

