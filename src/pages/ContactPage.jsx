import { useState } from 'react';
import { sendContact } from '../services/api';
import {
  Sparkles,
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  Send,
  MapPin,
  Clock,
} from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa6';

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
        setStatus({
          type: 'success',
          message: 'Thank you! Your message was sent successfully. I will get back to you shortly.',
        });
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: result?.error || 'Failed to send message. Please contact via WhatsApp or direct email.',
        });
      }
    } catch {
      setStatus({
        type: 'error',
        message: 'Unable to reach backend service. Please reach out directly via WhatsApp (+92 308 7300960) or Email.',
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 7000);
    }
  };

  return (
    <div className="pt-28 sm:pt-36 pb-20 sm:pb-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="flex items-center justify-between pb-3 mb-10 border-b border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
            <Sparkles className="w-3.5 h-3.5 text-zinc-500" />
            <span>05 / Direct Communication</span>
          </div>
          <span className="text-xs text-zinc-500 font-mono">contact</span>
        </div>

        {/* Section Title */}
        <div className="mb-14">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-100 max-w-3xl leading-[1.12]">
            Let&apos;s start a conversation.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl font-normal leading-relaxed">
            Interested in working together or discussing potential projects? Send a message through the form or connect directly through my channels.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* Info Column */}
          <div className="lg:col-span-5 space-y-5">

            {/* Direct Channel Box */}
            <div className="p-6 rounded-2xl border border-white/[0.07] bg-zinc-900/30 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono uppercase text-zinc-400 pb-3 border-b border-white/[0.06]">
                <span>Direct Inbox</span>
                <span>Monitored Daily</span>
              </div>
              <div className="text-base sm:text-lg font-semibold text-zinc-100 break-all">
                {emailAddress}
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-100 text-zinc-950 font-medium text-xs hover:bg-white shadow-xs transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy Email'}</span>
                </button>
                <a
                  href={`mailto:${emailAddress}`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-white/[0.08] text-zinc-300 hover:text-white hover:border-zinc-700 font-medium text-xs transition-colors cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Open Mail</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                </a>
              </div>
            </div>

            {/* Coordinates & Response Telemetry */}
            <div className="p-6 rounded-2xl border border-white/[0.07] bg-zinc-900/30 text-xs space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 pb-2 border-b border-white/[0.06]">
                Availability Parameters
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-zinc-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Base Location</span>
                </span>
                <span className="text-zinc-200 font-medium">Multan, Pakistan</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-zinc-500 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Response Time</span>
                </span>
                <span className="text-zinc-200 font-medium">Within 24 Hours</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-white/[0.06]">
                <span className="text-zinc-500">Current Status</span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Available for Hire
                </span>
              </div>
            </div>

            {/* Public Links */}
            <div className="p-6 rounded-2xl border border-white/[0.07] bg-zinc-900/30 text-xs space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 pb-2 border-b border-white/[0.06]">
                Social Profiles
              </div>
              <div className="space-y-1.5 pt-1">
                <a
                  href="https://github.com/NabeelAhmed8"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-900/50 hover:bg-zinc-800/60 border border-white/[0.04] text-zinc-300 hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <FaGithub className="w-4 h-4 text-zinc-400" />
                    <span>GitHub</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
                </a>

                <a
                  href="https://www.linkedin.com/in/nabeel-ahmed-447861238/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-900/50 hover:bg-zinc-800/60 border border-white/[0.04] text-zinc-300 hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <FaLinkedin className="w-4 h-4 text-zinc-400" />
                    <span>LinkedIn</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
                </a>

                <a
                  href="https://www.instagram.com/nabeelprojects"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-900/50 hover:bg-zinc-800/60 border border-white/[0.04] text-zinc-300 hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <FaInstagram className="w-4 h-4 text-zinc-400" />
                    <span>Instagram</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
                </a>

                <a
                  href="https://wa.me/923087300960"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-900/50 hover:bg-zinc-800/60 border border-white/[0.04] text-zinc-300 hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <FaWhatsapp className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
                </a>
              </div>
            </div>

          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl border border-white/[0.07] bg-zinc-900/30 backdrop-blur-xs space-y-5"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-xs font-mono uppercase text-zinc-400">
                <span>Inquiry Dispatch</span>
                <span>Send a Message</span>
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-medium text-zinc-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 text-zinc-100 text-sm border border-white/[0.08] placeholder-zinc-500 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-zinc-300 mb-2"
                >
                  Your Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="e.g. john@example.com"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 text-zinc-100 text-sm border border-white/[0.08] placeholder-zinc-500 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-zinc-300 mb-2"
                >
                  Message &amp; Project Overview
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Describe your project, timeline, or requirements..."
                  required
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 text-zinc-100 text-sm border border-white/[0.08] placeholder-zinc-500 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all resize-none"
                />
              </div>

              {status.message && (
                <div
                  className={`p-4 rounded-xl text-xs leading-relaxed border ${status.type === 'error'
                      ? 'bg-red-500/10 border-red-500/20 text-red-300'
                      : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300'
                    }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-zinc-100 text-zinc-950 font-semibold text-sm hover:bg-white shadow-xs transition-all cursor-pointer disabled:opacity-50 active:scale-[0.99]"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
