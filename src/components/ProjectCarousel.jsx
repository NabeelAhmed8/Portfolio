import { useState } from 'react';

export default function ProjectCarousel({ images = [], title = 'Project Screenshot' }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightbox, setIsLightbox] = useState(false);
  const [imageError, setImageError] = useState({});

  if (!images || images.length === 0) {
    return (
      <div className="w-full aspect-16/9 bg-neutral-950 border-2 border-neutral-800 flex flex-col items-center justify-center p-6 text-center select-none">
        <div className="w-12 h-12 border border-dashed border-neutral-700 flex items-center justify-center text-neutral-500 font-mono text-xs mb-3">
          IMG
        </div>
        <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
          Screenshots Pending
        </p>
        <p className="text-[11px] text-neutral-600 mt-1">
          Drop image in <span className="text-neutral-400">/public/projects/</span> to display
        </p>
      </div>
    );
  }

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleImageError = (index) => {
    setImageError((prev) => ({ ...prev, [index]: true }));
  };

  const currentImage = images[currentIndex];
  const hasError = imageError[currentIndex];

  return (
    <>
      <div className="w-full border-2 border-white bg-black overflow-hidden group">
        {/* Carousel Toolbar / Counter Header */}
        <div className="bg-neutral-900 border-b border-white px-3 py-2 flex items-center justify-between text-xs font-mono uppercase text-white">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="font-bold tracking-wider">Preview Frame</span>
            {images.length > 1 && (
              <span className="text-neutral-400">
                [{String(currentIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}]
              </span>
            )}
          </div>

          {images.length > 1 && (
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous screenshot"
                className="px-2 py-0.5 bg-black border border-white text-white hover:bg-white hover:text-black font-bold text-xs cursor-pointer transition-colors"
              >
                ← PREV
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next screenshot"
                className="px-2 py-0.5 bg-black border border-white text-white hover:bg-white hover:text-black font-bold text-xs cursor-pointer transition-colors"
              >
                NEXT →
              </button>
            </div>
          )}
        </div>

        {/* Image Display Area */}
        <div
          onClick={() => !hasError && setIsLightbox(true)}
          className={`relative aspect-16/9 bg-neutral-950 flex items-center justify-center overflow-hidden ${
            !hasError ? 'cursor-zoom-in' : ''
          }`}
          title="Click to view full screen"
        >
          {hasError ? (
            <div className="p-6 text-center select-none font-mono">
              <div className="text-neutral-500 text-xs uppercase mb-1">Image Not Found</div>
              <p className="text-[11px] text-neutral-600 break-all">{currentImage}</p>
              <p className="text-[10px] text-neutral-500 mt-2">
                Make sure the file exists in your <span className="text-white">public/projects/</span> folder
              </p>
            </div>
          ) : (
            <img
              src={currentImage}
              alt={`${title} - Slide ${currentIndex + 1}`}
              onError={() => handleImageError(currentIndex)}
              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
              loading="lazy"
            />
          )}

          {/* Quick Click Hint Overlay */}
          {!hasError && (
            <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-white border border-white px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider select-none pointer-events-none">
              Zoom ↗
            </div>
          )}
        </div>

        {/* Thumbnail / Dot Navigation */}
        {images.length > 1 && (
          <div className="bg-black border-t border-neutral-800 p-2 flex items-center justify-center gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                className={`h-1.5 transition-all cursor-pointer ${
                  currentIndex === idx
                    ? 'w-8 bg-white'
                    : 'w-2 bg-neutral-700 hover:bg-neutral-500'
                }`}
                aria-label={`Jump to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {isLightbox && (
        <div
          onClick={() => setIsLightbox(false)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm p-4 sm:p-8 flex flex-col items-center justify-center animate-fadeIn cursor-zoom-out"
        >
          <div className="w-full max-w-5xl flex items-center justify-between pb-3 text-white text-xs font-mono uppercase">
            <span>
              {title} — [{currentIndex + 1} / {images.length}]
            </span>
            <button
              onClick={() => setIsLightbox(false)}
              className="border border-white px-3 py-1 font-bold hover:bg-white hover:text-black transition-colors"
            >
              CLOSE [ESC] ✕
            </button>
          </div>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[80vh] border-2 border-white bg-black overflow-hidden flex items-center justify-center"
          >
            <img
              src={currentImage}
              alt={`${title} enlarged`}
              className="max-h-[80vh] w-auto object-contain"
            />

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-black border-2 border-white text-white px-3 py-2 font-black text-xs hover:bg-white hover:text-black transition-colors cursor-pointer"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-black border-2 border-white text-white px-3 py-2 font-black text-xs hover:bg-white hover:text-black transition-colors cursor-pointer"
                >
                  →
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
