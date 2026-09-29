import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-6 sm:py-12 relative w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <span className="text-primary font-semibold text-xs uppercase tracking-wider">Contact</span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mt-1">Get In Touch</h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">Open for freelance projects and developer roles.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-start max-w-4xl mx-auto">
          
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-3">
            <div className="glass-card p-3 sm:p-4 rounded-xl border border-slate-800 shadow-md">
              <div className="text-[11px] text-slate-400 uppercase font-mono">Email</div>
              <a href="mailto:nabeelahmed679@hotmail.com" className="text-xs sm:text-sm font-semibold text-white hover:text-primary transition truncate block">
                nabeelahmed679@hotmail.com
              </a>
            </div>

            <div className="glass-card p-3 sm:p-4 rounded-xl border border-slate-800 shadow-md">
              <div className="text-[11px] text-slate-400 uppercase font-mono">Location</div>
              <p className="text-xs sm:text-sm font-semibold text-white">Pakistan</p>
            </div>

            <div className="glass-card p-3 sm:p-4 rounded-xl border border-slate-800 shadow-md">
              <div className="text-[11px] text-slate-400 uppercase font-mono">Instagram</div>
              <a href="https://instagram.com/_https.nabeel" target="_blank" rel="noreferrer" className="text-xs sm:text-sm font-semibold text-white hover:text-primary transition">
                @_https.nabeel
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="glass-card p-4 sm:p-6 rounded-2xl space-y-3 border border-slate-800 shadow-lg">
              
              <div>
                <label htmlFor="name" className="block text-[11px] uppercase font-mono text-slate-300 mb-1">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-3 py-2 rounded-lg bg-dark-700/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-primary text-xs sm:text-sm transition"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[11px] uppercase font-mono text-slate-300 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-3 py-2 rounded-lg bg-dark-700/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-primary text-xs sm:text-sm transition"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[11px] uppercase font-mono text-slate-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  autoComplete="off"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  required
                  className="w-full px-3 py-2 rounded-lg bg-dark-700/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-primary text-xs sm:text-sm transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-lg bg-primary text-dark-900 font-bold hover:bg-primary/90 transition text-xs sm:text-sm shadow-md shadow-primary/20 cursor-pointer"
              >
                {sent ? 'Message Sent Successfully ✓' : 'Send Message'}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}