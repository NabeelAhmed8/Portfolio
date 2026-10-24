import { Sparkles } from 'lucide-react';
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-20 sm:pb-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center pb-3 mb-10 border-b border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
            <Sparkles className="w-3.5 h-3.5 text-zinc-500" />
            <span>Direct Communication &amp; Inquiry</span>
          </div>
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
          {/* Contact Details & Channels */}
          <div className="lg:col-span-5">
            <ContactInfo emailAddress="nabeelprojects@hotmail.com" />
          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>

      </div>
    </div>
  );
}
