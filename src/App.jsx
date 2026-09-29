import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState(() => {
    return localStorage.getItem('portfolio_active_tab') || 'home';
  });

  useEffect(() => {
    localStorage.setItem('portfolio_active_tab', activeTab);
    window.scrollTo(0, 0);
  }, [activeTab]);

  return (
    <div className="h-screen bg-dark-900 text-slate-100 flex flex-col justify-between overflow-hidden selection:bg-primary/25 selection:text-primary">
      
      {/* Top Navbar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Main Content Area - Home ya koi bhi tab screen ke andar fit rahega */}
      <main className="flex-grow pt-16 sm:pt-20 pb-2 w-full flex items-center justify-center overflow-y-auto">
        {activeTab === 'Home' && <Home />}
        {activeTab === 'About' && <About />}
        {activeTab === 'Skills' && <Skills />}
        {activeTab === 'Projects' && <Projects />}
        {activeTab === 'Experience' && <Experience />}
        {activeTab === 'Contact' && <Contact />}
      </main>

      {/* Footer - Hamesha bottom par visible rahega */}
      <div className="shrink-0 w-full">
        <Footer setActiveTab={setActiveTab} />
      </div>

    </div>
  );
}