import { useState } from 'react';
import { createProject } from '../services/api';
import { X, Plus, Sparkles } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-6 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-2xl bg-[#0d0d10] border border-white/[0.12] rounded-2xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden">

        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-zinc-400" />
            <h2 className="text-sm font-semibold text-zinc-100">
              Add Project Record
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="overflow-y-auto p-6 space-y-4">
          {status.error && (
            <div className="p-3.5 rounded-xl border border-red-500/20 bg-red-500/10 text-red-300 text-xs leading-relaxed">
              {status.error}
            </div>
          )}

          {status.success && (
            <div className="p-3.5 rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-300 text-xs leading-relaxed">
              Project record saved successfully!
            </div>
          )}

          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1.5">
              Project Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. Modern Web Platform"
              required
              className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/80 text-zinc-100 text-sm border border-white/[0.08] placeholder-zinc-500 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                Category
              </label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="e.g. E-Commerce"
                className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/80 text-zinc-100 text-sm border border-white/[0.08] placeholder-zinc-500 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                Year
              </label>
              <input
                type="text"
                name="year"
                value={formData.year}
                onChange={handleChange}
                placeholder="2026"
                className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/80 text-zinc-100 text-sm border border-white/[0.08] placeholder-zinc-500 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1.5">
              Technical Stack (comma separated)
            </label>
            <input
              type="text"
              name="stack"
              value={formData.stack}
              onChange={handleChange}
              placeholder="React 19, Tailwind CSS, Vite, Laravel, MySQL"
              className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/80 text-zinc-100 text-sm border border-white/[0.08] placeholder-zinc-500 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1.5">
              Description &amp; Overview *
            </label>
            <textarea
              rows={4}
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe the architecture, capabilities, and key features..."
              required
              className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/80 text-zinc-100 text-sm border border-white/[0.08] placeholder-zinc-500 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all resize-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                Live URL
              </label>
              <input
                type="text"
                name="liveUrl"
                value={formData.liveUrl}
                onChange={handleChange}
                placeholder="https://..."
                className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/80 text-zinc-100 text-sm border border-white/[0.08] placeholder-zinc-500 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                GitHub Repository URL
              </label>
              <input
                type="text"
                name="githubUrl"
                value={formData.githubUrl}
                onChange={handleChange}
                placeholder="https://github.com/..."
                className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/80 text-zinc-100 text-sm border border-white/[0.08] placeholder-zinc-500 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-2.5 pt-1">
            <input
              type="checkbox"
              id="featured"
              name="featured"
              checked={formData.featured}
              onChange={handleChange}
              className="rounded border-zinc-700 bg-zinc-900 text-zinc-100 accent-zinc-100 cursor-pointer"
            />
            <label htmlFor="featured" className="text-xs text-zinc-300 font-medium cursor-pointer select-none">
              Featured project
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-4 rounded-xl bg-zinc-100 text-zinc-950 font-semibold text-xs sm:text-sm hover:bg-white shadow-xs transition-all cursor-pointer mt-3 disabled:opacity-50"
          >
            {isSubmitting ? 'Saving Project...' : 'Save Project Record'}
          </button>
        </form>

      </div>
    </div>
  );
}
