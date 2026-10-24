import { useState } from 'react';
import { Send } from 'lucide-react';
import { sendContact } from '../services/api';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

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
          className={`p-4 rounded-xl text-xs leading-relaxed border ${
            status.type === 'error'
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
  );
}
