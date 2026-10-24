import { useState } from 'react';
import {
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  MapPin,
  Clock,
} from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa6';

export default function ContactInfo({ emailAddress = 'nabeelprojects@hotmail.com' }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/NabeelAhmed8', icon: FaGithub },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nabeel-ahmed-447861238/', icon: FaLinkedin },
    { label: 'Instagram', href: 'https://www.instagram.com/nabeelprojects', icon: FaInstagram },
    { label: 'WhatsApp', href: 'https://wa.me/923087300960', icon: FaWhatsapp, iconClass: 'text-emerald-400' },
  ];

  return (
    <div className="space-y-5">
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

      {/* Availability Parameters */}
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

      {/* Social Profiles */}
      <div className="p-6 rounded-2xl border border-white/[0.07] bg-zinc-900/30 text-xs space-y-3">
        <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 pb-2 border-b border-white/[0.06]">
          Social Profiles
        </div>
        <div className="space-y-1.5 pt-1">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-900/50 hover:bg-zinc-800/60 border border-white/[0.04] text-zinc-300 hover:text-white transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Icon className={`w-4 h-4 ${item.iconClass || 'text-zinc-400'}`} />
                  <span>{item.label}</span>
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
