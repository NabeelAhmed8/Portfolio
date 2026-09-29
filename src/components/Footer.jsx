import React from 'react';

export default function Footer({ setActiveTab }) {
  const handleBackToHome = () => {
    if (setActiveTab) {
      setActiveTab('home');
    }
    // Window ko smooth tarike se top par scroll karne ke liye
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-dark-900 py-6 mt-auto w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold text-white">Nabeel Ahmed Dhillon</p>
          <p className="text-xs text-slate-500">Frontend Web Developer • Multan, PK</p>
        </div>

        <button
          onClick={handleBackToHome}
          className="px-3.5 py-2 rounded-lg glass-card text-xs text-slate-300 hover:text-primary hover:border-primary/40 transition cursor-pointer font-medium"
        >
          ↑ Back to Home
        </button>
      </div>
    </footer>
  );
}