import { useState } from 'react';
import { createProject } from '../services/api';

export default function AddProjectModal({ isOpen, onClose, onProjectAdded }) {
  const [formData, setFormData] = useState({
    title: '',
    category: 'Commercial Platform',
    description: '',
    stack: '',
    liveUrl: '#',
    githubUrl: '#',
    year: String(new Date().getFullYear()),
    featured: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ error: null, success: false });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description) return;

    setIsSubmitting(true);
    setStatus({ error: null, success: false });

    try {
      const payload = {
        ...formData,
        stack: formData.stack
          ? formData.stack.split(',').map((s) => s.trim()).filter(Boolean)
          : ['React', 'Tailwind CSS'],
      };

      const result = await createProject(payload);
      setStatus({ error: null, success: true });
      if (onProjectAdded) onProjectAdded(result.data);

      setTimeout(() => {
        onClose();
        setStatus({ error: null, success: false });
        setFormData({
          title: '',
          category: 'Commercial Platform',
          description: '',
          stack: '',
          liveUrl: '#',
          githubUrl: '#',
          year: String(new Date().getFullYear()),
          featured: true,
        });
      }, 1200);
    } catch (err) {
      setStatus({ error: err.message || 'Failed to submit project to archive', success: false });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-xs">
      <div className="w-full max-w-2xl bg-black border-4 border-white shadow-2xl flex flex-col max-h-[92vh] overflow-hidden">
        
        {/* Header */}
        <div className="bg-white text-black p-4 flex items-center justify-between font-black uppercase text-xs sm:text-sm tracking-wider">
          <div className="flex items-center gap-2">
            <span>03. Add Project Record (POST /api/projects)</span>
          </div>
          <button
            onClick={onClose}
            className="border-2 border-black px-3 py-1 font-black hover:bg-black hover:text-white transition-colors cursor-pointer"
          >
            Close [ESC]
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="overflow-y-auto p-6 space-y-5">
          {status.error && (
            <div className="p-3 border-2 border-white bg-red-950/40 text-white text-xs font-bold uppercase">
              Notice: {status.error}
            </div>
          )}

          {status.success && (
            <div className="p-3 border-2 border-white bg-green-950/40 text-white text-xs font-bold uppercase">
              Project registered successfully in backend store! ✓
            </div>
          )}

          <div>
            <label className="block text-xs font-black uppercase tracking-wider mb-1.5 text-white">
              Project Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. Omnichannel Supply Chain Portal"
              required
              className="w-full p-3 bg-black text-white text-xs sm:text-sm border-2 border-white placeholder-neutral-600 focus:bg-white focus:text-black focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-black uppercase tracking-wider mb-1.5 text-white">
                Category
              </label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="e.g. Commercial Platform"
                className="w-full p-3 bg-black text-white text-xs sm:text-sm border-2 border-white placeholder-neutral-600 focus:bg-white focus:text-black focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-black uppercase tracking-wider mb-1.5 text-white">
                Year
              </label>
              <input
                type="text"
                name="year"
                value={formData.year}
                onChange={handleChange}
                placeholder="2026"
                className="w-full p-3 bg-black text-white text-xs sm:text-sm border-2 border-white placeholder-neutral-600 focus:bg-white focus:text-black focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-black uppercase tracking-wider mb-1.5 text-white">
              Technical Stack (comma separated)
            </label>
            <input
              type="text"
              name="stack"
              value={formData.stack}
              onChange={handleChange}
              placeholder="React 19, Tailwind CSS, Vite, Express, REST API"
              className="w-full p-3 bg-black text-white text-xs sm:text-sm border-2 border-white placeholder-neutral-600 focus:bg-white focus:text-black focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-black uppercase tracking-wider mb-1.5 text-white">
              Project Narrative &amp; Description *
            </label>
            <textarea
              rows={4}
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe the architectural challenge, performance achievements, and key mechanics..."
              required
              className="w-full p-3 bg-black text-white text-xs sm:text-sm border-2 border-white placeholder-neutral-600 focus:bg-white focus:text-black focus:outline-none resize-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-black uppercase tracking-wider mb-1.5 text-white">
                Live URL
              </label>
              <input
                type="text"
                name="liveUrl"
                value={formData.liveUrl}
                onChange={handleChange}
                placeholder="https://..."
                className="w-full p-3 bg-black text-white text-xs sm:text-sm border-2 border-white placeholder-neutral-600 focus:bg-white focus:text-black focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-black uppercase tracking-wider mb-1.5 text-white">
                GitHub Repository URL
              </label>
              <input
                type="text"
                name="githubUrl"
                value={formData.githubUrl}
                onChange={handleChange}
                placeholder="https://github.com/..."
                className="w-full p-3 bg-black text-white text-xs sm:text-sm border-2 border-white placeholder-neutral-600 focus:bg-white focus:text-black focus:outline-none"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <input
              type="checkbox"
              id="featured"
              name="featured"
              checked={formData.featured}
              onChange={handleChange}
              className="w-4 h-4 accent-white cursor-pointer"
            />
            <label htmlFor="featured" className="text-xs font-bold uppercase tracking-wider text-white cursor-pointer select-none">
              Mark as Featured Project
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-white text-black font-black text-xs sm:text-sm uppercase tracking-wider border-2 border-white hover:bg-black hover:text-white disabled:opacity-50 transition-colors cursor-pointer mt-4"
          >
            {isSubmitting ? 'Registering In Backend...' : 'Commit Project To Backend →'}
          </button>
        </form>

      </div>
    </div>
  );
}

