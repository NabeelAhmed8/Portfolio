import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Messages({ isOpen, onClose }) {
  const [userInquiries, setUserInquiries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isOpen) return;

    try {
      const stored = JSON.parse(localStorage.getItem('user_inquiries') || '[]');
      setUserInquiries(Array.isArray(stored) ? stored : []);
    } catch {
      setUserInquiries([]);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClearHistory = () => {
    localStorage.removeItem('user_inquiries');
    setUserInquiries([]);
  };

  const handleNavigateToContact = () => {
    onClose();
    navigate('/contact');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-xs">
      <div className="w-full max-w-2xl bg-black border-4 border-white shadow-2xl flex flex-col max-h-[88vh]">
        
        {/* Header Bar */}
        <div className="bg-white text-black p-4 flex items-center justify-between font-black uppercase text-xs sm:text-sm tracking-wider">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2.5 h-2.5 bg-black animate-pulse" />
            <span>My Inquiries Status</span>
            <span className="border border-black px-2 py-0.5 text-[11px] font-mono">
              {userInquiries.length} {userInquiries.length === 1 ? 'Dispatch' : 'Dispatches'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="border-2 border-black px-3 py-1 font-black hover:bg-black hover:text-white transition-colors cursor-pointer"
          >
            Close [ESC]
          </button>
        </div>

        {/* Informational Sub-bar */}
        <div className="border-b-2 border-white p-3 flex flex-wrap items-center justify-between gap-2 text-xs bg-black text-white">
          <div className="text-neutral-400 font-mono text-[11px] uppercase tracking-wider">
            Channel: Direct Portfolio Dispatch • Monitored Daily
          </div>
          {userInquiries.length > 0 && (
            <button
              onClick={handleClearHistory}
              className="text-neutral-400 hover:text-white text-[11px] font-bold uppercase underline decoration-neutral-600 cursor-pointer"
            >
              Clear Log
            </button>
          )}
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-4 grow">
          {userInquiries.length === 0 ? (
            <div className="text-center py-12 px-4 border-2 border-dashed border-neutral-800 space-y-4">
              <div className="text-sm font-black uppercase tracking-wider text-white">
                No Inquiries Sent Yet
              </div>
              <p className="text-xs text-neutral-400 font-light max-w-md mx-auto leading-relaxed">
                You haven&apos;t submitted a project inquiry or contact brief from this device. Once you submit a message, its dispatch status will be tracked here.
              </p>
              <div className="pt-2 flex flex-wrap justify-center gap-3">
                <button
                  onClick={handleNavigateToContact}
                  className="px-4 py-2 bg-white text-black font-black text-xs uppercase tracking-wider border-2 border-white hover:bg-black hover:text-white cursor-pointer transition-colors"
                >
                  Send Inquiry Now →
                </button>
                <a
                  href="https://wa.me/923087300960?text=Hello%20Nabeel%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project%20with%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#25D366] text-white font-black text-xs uppercase tracking-wider border border-[#1ebd5b] hover:bg-[#20ba59] cursor-pointer transition-colors"
                >
                  WhatsApp Quick Chat ↗
                </a>
              </div>
            </div>
          ) : (
            userInquiries.map((inq) => (
              <div
                key={inq.id || inq.timestamp}
                className="border-2 border-white bg-black p-5 space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-white text-black font-black text-xs px-2 py-0.5 uppercase">
                      Sent &amp; Logged ✓
                    </span>
                    <span className="text-xs text-neutral-300 font-bold uppercase">
                      {inq.name}
                    </span>
                  </div>
                  <div className="text-neutral-500 font-mono text-[11px]">
                    {new Date(inq.timestamp).toLocaleString()}
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-1">
                    Your Message Brief:
                  </div>
                  <div className="text-xs sm:text-sm text-neutral-200 font-light leading-relaxed bg-neutral-950 p-3 border border-neutral-800">
                    {inq.message}
                  </div>
                </div>

                <div className="pt-1 flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                  <span>Target Reply: {inq.email}</span>
                  <span className="text-neutral-300 font-bold">Response: &lt; 24h</span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="border-t-2 border-white p-3 bg-black flex items-center justify-between text-xs text-neutral-400 font-mono">
          <span>Nabeel Ahmed Dhillon</span>
          <span className="text-white font-bold">Multan, PK (UTC+5)</span>
        </div>

      </div>
    </div>
  );
}
