import { useState } from 'react';
import { sendContact } from '../services/api';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const emailAddress = 'nabeelprojects@hotmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const result = await sendContact(form);

      if (result && result.success) {
        // Save to browser localStorage so client can track their dispatched inquiries
        try {
          const stored = JSON.parse(localStorage.getItem('user_inquiries') || '[]');
          stored.unshift({
            id: `INQ-${Date.now().toString().slice(-4)}`,
            name: form.name,
            timestamp: new Date().toISOString(),
            status: 'Dispatched to Nabeel ✓',
          });
          localStorage.setItem('user_inquiries', JSON.stringify(stored));
        } catch (_) {}

        setStatus({
          type: 'success',
          message: 'Inquiry Dispatched Successfully to Nabeel ✓',
        });
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: result?.error || 'Failed to dispatch message. Please contact via WhatsApp.',
        });
      }
    } catch {
      // Fake local fallback removed! Show honest notification to reach out directly.
      setStatus({
        type: 'error',
        message: 'Server offline. Please reach out directly via WhatsApp (+92 308 7300960) or Email.',
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 7000);
    }
  };

  return (
    <div className="pt-24 sm:pt-32 pb-20 sm:pb-28 bg-black text-white min-h-[calc(100vh-14rem)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b-2 border-white pb-3 mb-12 text-xs font-black uppercase tracking-widest text-white">
          <span>05. Contact &amp; Dispatch</span>
          <span className="hidden sm:inline">Page: contact</span>
        </div>

        {/* Section Title */}
        <div className="mb-14">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none text-white max-w-4xl">
            Dispatch a Brief.<br />
            Start a Project.
          </h1>
          <p className="text-sm sm:text-base font-light text-neutral-400 mt-4 max-w-2xl leading-relaxed">
            Accepting select commissions, frontend contract engineering, and full-stack engineering roles worldwide.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Info Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Channel Box */}
            <div className="border-2 border-white bg-black">
              <div className="bg-white text-black p-3.5 text-xs font-black uppercase flex justify-between">
                <span>Direct Channel</span>
                <span>Monitored Daily</span>
              </div>
              <div className="p-6 space-y-4">
                <div className="text-lg font-black text-white break-all">
                  {emailAddress}
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="px-4 py-2 bg-white text-black font-black text-xs uppercase tracking-wider border-2 border-white hover:bg-black hover:text-white cursor-pointer transition-colors"
                  >
                    {copied ? 'Copied to Clipboard ✓' : 'Copy Email Address'}
                  </button>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="px-4 py-2 bg-black text-white font-black text-xs uppercase tracking-wider border-2 border-white hover:bg-white hover:text-black cursor-pointer transition-colors"
                  >
                    Open Mail Client ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Coordinates & Response Telemetry */}
            <div className="border-2 border-white p-5 text-xs space-y-3 bg-black">
              <div className="text-neutral-500 font-bold uppercase tracking-wider">
                Availability Parameters
              </div>
              <div className="flex justify-between border-b border-neutral-800 pb-2">
                <span className="text-neutral-400">Base Location:</span>
                <span className="font-bold text-white">Multan, Punjab, PK (UTC+5)</span>
              </div>
              <div className="flex justify-between border-b border-neutral-800 pb-2">
                <span className="text-neutral-400">Response Window:</span>
                <span className="font-bold text-white">Within 24 Hours</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Status:</span>
                <span className="bg-white text-black font-black px-2 py-0.5 uppercase">Available</span>
              </div>
            </div>

            {/* External Links */}
            <div className="border-2 border-white p-5 text-xs space-y-3 bg-black">
              <div className="text-neutral-500 font-bold uppercase tracking-wider">
                Public Profiles
              </div>
              <div className="flex flex-col gap-2 pt-1 font-bold">
                <a
                  href="https://github.com/NabeelAhmed8"
                  target="_blank"
                  rel="noreferrer"
                  className="flex justify-between p-2.5 border border-white hover:bg-white hover:text-black transition-colors"
                >
                  <span>GitHub Archive</span>
                  <span>↗</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/nabeel-ahmed-447861238/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex justify-between p-2.5 border border-white hover:bg-white hover:text-black transition-colors"
                >
                  <span>LinkedIn Network</span>
                  <span>↗</span>
                </a>
                <a
                  href="https://www.instagram.com/nabeelprojects"
                  target="_blank"
                  rel="noreferrer"
                  className="flex justify-between p-2.5 border border-white hover:bg-white hover:text-black transition-colors"
                >
                  <span>Instagram</span>
                  <span>↗</span>
                </a>
                <a
                  href="https://wa.me/923087300960"
                  target="_blank"
                  rel="noreferrer"
                  className="flex justify-between p-2.5 border border-white hover:bg-white hover:text-black transition-colors"
                >
                  <span>WhatsApp</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="border-2 border-white bg-black"
            >
              <div className="bg-white text-black p-3.5 text-xs font-black uppercase flex justify-between">
                <span>Send a Message</span>
                <span>Inquiry Form</span>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-black uppercase tracking-wider text-white mb-2"
                  >
                    01. Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your full name..."
                    required
                    className="w-full p-3.5 bg-black text-white text-sm border-2 border-white placeholder-neutral-600 focus:bg-white focus:text-black focus:outline-none focus:placeholder-neutral-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-black uppercase tracking-wider text-white mb-2"
                  >
                    02. Your Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email address..."
                    required
                    className="w-full p-3.5 bg-black text-white text-sm border-2 border-white placeholder-neutral-600 focus:bg-white focus:text-black focus:outline-none focus:placeholder-neutral-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-black uppercase tracking-wider text-white mb-2"
                  >
                    03. Message &amp; Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="State your project goals, timeline, or contract requirements..."
                    required
                    className="w-full p-3.5 bg-black text-white text-sm border-2 border-white placeholder-neutral-600 focus:bg-white focus:text-black focus:outline-none focus:placeholder-neutral-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 font-black text-sm uppercase tracking-wider border-2 transition-colors cursor-pointer disabled:opacity-50 ${
                    status.type === 'error'
                      ? 'bg-red-950 text-white border-red-500'
                      : status.type === 'success'
                      ? 'bg-green-950 text-white border-green-500'
                      : 'bg-white text-black border-white hover:bg-black hover:text-white'
                  }`}
                >
                  {isSubmitting
                    ? 'Dispatching Message...'
                    : status.message
                    ? status.message
                    : 'Send Message →'}
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}

