import { useState, useEffect, useCallback } from 'react';
import { getMessages } from '../services/api';

export default function Messages({ isOpen, onClose }) {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedMessage, setSelectedMessage] = useState(null);

  const fetchTransmissions = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await getMessages();
      if (res.success) {
        setMessages(res.data.reverse()); // latest first
      } else {
        setError(res.error || 'Failed to retrieve messages');
      }
    } catch (err) {
      setError(err.message || 'Network error');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const timer = window.setTimeout(() => {
      void fetchTransmissions();
    }, 0);

    return () => window.clearTimeout(timer);
  }, [isOpen, fetchTransmissions]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-xs">
      <div className="w-full max-w-4xl bg-black border-4 border-white shadow-2xl flex flex-col max-h-[90vh]">
        
        {/* Header Bar */}
        <div className="bg-white text-black p-4 flex items-center justify-between font-black uppercase text-xs sm:text-sm tracking-wider">
          <div className="flex items-center gap-3">
            <span className="inline-block w-3 h-3 bg-black animate-pulse" />
            <span>Transmissions Archive (GET /api/contact/messages)</span>
            <span className="border border-black px-2 py-0.5 text-[11px]">
              {messages.length} Records
            </span>
          </div>
          <button
            onClick={onClose}
            className="border-2 border-black px-3 py-1 font-black hover:bg-black hover:text-white transition-colors cursor-pointer"
          >
            Close [ESC]
          </button>
        </div>

        {/* Toolbar */}
        <div className="border-b-2 border-white p-3 flex items-center justify-between text-xs bg-black text-white">
          <div className="text-neutral-400 uppercase tracking-widest font-mono">
            Status: {loading ? 'Fetching...' : error ? 'Error / Offline' : 'Operational'}
          </div>
          <button
            onClick={fetchTransmissions}
            disabled={loading}
            className="px-4 py-1.5 bg-white text-black font-black uppercase text-xs border border-white hover:bg-black hover:text-white disabled:opacity-50 cursor-pointer"
          >
            {loading ? 'Refreshing...' : 'Refresh Stream ↻'}
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-4 grow">
          {error && (
            <div className="p-4 border-2 border-white bg-neutral-950 text-white text-xs space-y-1">
              <div className="font-black text-white uppercase tracking-wider">Connection Notice</div>
              <p className="text-neutral-400">
                Could not connect to backend endpoint. Ensure `npm run dev` or `npm start` is active in the `backend/` folder.
              </p>
            </div>
          )}

          {messages.length === 0 && !loading && !error && (
            <div className="text-center py-16 border-2 border-dashed border-neutral-700 text-neutral-400 text-xs uppercase tracking-widest">
              Zero transmissions logged in backend archive.
            </div>
          )}

          {messages.map((msg) => (
            <div
              key={msg.id}
              onClick={() => setSelectedMessage(selectedMessage?.id === msg.id ? null : msg)}
              className="border-2 border-white bg-black hover:bg-neutral-950 transition-colors p-4 cursor-pointer text-left"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-800 pb-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-black text-white uppercase">{msg.name}</span>
                  <span className="text-neutral-400 font-mono">({msg.email})</span>
                </div>
                <div className="text-neutral-500 font-mono text-[11px]">
                  {new Date(msg.timestamp).toLocaleString()}
                </div>
              </div>

              <div className="mt-3 text-xs sm:text-sm font-light text-neutral-200 line-clamp-3 leading-relaxed">
                {msg.message}
              </div>

              {selectedMessage?.id === msg.id && (
                <div className="mt-4 pt-4 border-t border-dashed border-neutral-700 text-xs space-y-2 text-neutral-400 font-mono">
                  <div><span className="text-white font-bold">Transmission ID:</span> {msg.id}</div>
                  <div><span className="text-white font-bold">IP Source:</span> {msg.ip}</div>
                  <div className="truncate"><span className="text-white font-bold">User-Agent:</span> {msg.userAgent}</div>
                  <div className="pt-2">
                    <a
                      href={`mailto:${msg.email}?subject=Re: Portfolio Inquiry`}
                      className="inline-block px-3 py-1 bg-white text-black font-black uppercase text-xs border border-white hover:bg-black hover:text-white"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Reply Directly ↗
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t-2 border-white p-3 bg-black text-right text-xs text-neutral-400 font-mono">
          Nabeel Ahmed Dhillon | Contact Inquiries
        </div>

      </div>
    </div>
  );
}

