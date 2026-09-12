import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../../types/salon';

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate
}) => {
  if (currentIndex === null || !items[currentIndex]) return null;

  const current = items[currentIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prev = (currentIndex - 1 + items.length) % items.length;
    onNavigate(prev);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const next = (currentIndex + 1) % items.length;
    onNavigate(next);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-3 sm:p-4 animate-fadeIn"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 sm:p-3 rounded-full bg-stone-900/80 text-white hover:bg-stone-800 transition-colors z-50"
        aria-label="Close Lightbox"
      >
        <X className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Prev Button */}
      <button
        onClick={handlePrev}
        className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-stone-900/80 text-white hover:bg-stone-800 transition-colors z-50"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Image & Caption Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center relative px-2"
      >
        <img
          src={current.imageUrl}
          alt={current.title}
          className="max-w-full max-h-[70vh] sm:max-h-[75vh] object-contain rounded-lg shadow-2xl"
        />

        <div className="mt-4 text-center text-white">
          <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 bg-brand-500 rounded inline-block mb-1.5">
            {current.category}
          </span>
          <h3 className="font-serif text-xl font-medium tracking-wide">
            {current.title}
          </h3>
          {current.caption && (
            <p className="text-xs text-stone-400 font-light mt-1 max-w-md mx-auto">
              {current.caption}
            </p>
          )}
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-900/80 text-white hover:bg-stone-800 transition-colors z-50"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};
