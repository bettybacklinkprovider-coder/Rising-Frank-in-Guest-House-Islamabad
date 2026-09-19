import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onNavigate: (newItem: GalleryItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, items, onClose, onNavigate }) => {
  if (!item) return null;

  const currentIndex = items.findIndex(i => i.id === item.id);
  const prevIndex = (currentIndex - 1 + items.length) % items.length;
  const nextIndex = (currentIndex + 1) % items.length;

  const handlePrev = () => onNavigate(items[prevIndex]);
  const handleNext = () => onNavigate(items[nextIndex]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Button */}
      {items.length > 1 && (
        <button
          onClick={handlePrev}
          className="absolute left-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition hidden sm:flex items-center justify-center"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Main Image Container */}
      <div className="max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
          referrerPolicy="no-referrer"
        />
        <div className="mt-4 text-center text-white space-y-1">
          <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest">{item.categoryLabel}</span>
          <h4 className="text-lg font-serif-title">{item.title}</h4>
          <p className="text-stone-300 text-xs max-w-md mx-auto">{item.description}</p>
        </div>
      </div>

      {/* Next Button */}
      {items.length > 1 && (
        <button
          onClick={handleNext}
          className="absolute right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition hidden sm:flex items-center justify-center"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};
