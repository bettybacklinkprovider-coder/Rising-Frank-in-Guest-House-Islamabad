import React, { useState } from 'react';
import { Maximize2, Camera, Layers } from 'lucide-react';
import { GalleryItem } from '../types';
import { GALLERY_ITEMS } from '../data/guestHouseData';

interface GalleryPageProps {
  onOpenLightbox: (item: GalleryItem, allFilteredItems: GalleryItem[]) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenLightbox }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'bedrooms', label: 'Bedroom Interiors' },
    { id: 'exterior', label: 'Exterior & Entrance' },
    { id: 'bathrooms', label: 'Clean Bathrooms' },
    { id: 'common', label: 'Common & Lounge Areas' },
    { id: 'dining', label: 'Dining & Food' },
    { id: 'islamabad', label: 'Islamabad Landmarks' }
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="py-12 sm:py-16 bg-stone-50 text-stone-900 space-y-12">
      
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-amber-700 text-xs font-bold uppercase tracking-widest font-brand">Photo Collection</span>
        <h1 className="text-3xl sm:text-5xl font-serif-title font-bold text-stone-900">
          Guest House Photo Gallery
        </h1>
        <p className="text-stone-600 text-base max-w-2xl mx-auto leading-relaxed">
          Take a visual tour of Rising Frank in Guest House Islamabad. Explore our bedrooms, spotless bathrooms, relaxing lounges, and Islamabad surroundings.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-2 border-b border-stone-200 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition duration-200 ${
                activeCategory === cat.id
                  ? 'bg-amber-800 text-amber-50 shadow-md'
                  : 'bg-white text-stone-600 hover:bg-stone-200 hover:text-stone-900 border border-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-stone-200 p-8 space-y-2">
            <Layers className="w-10 h-10 text-stone-400 mx-auto" />
            <p className="text-stone-600 font-medium text-sm">No images found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(item, filteredItems)}
                className="group relative bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition duration-300 cursor-pointer flex flex-col"
              >
                {/* Image Box */}
                <div className="relative h-64 overflow-hidden bg-stone-900">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-108 group-hover:opacity-90"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Category Tag */}
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-md text-amber-300 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {item.categoryLabel}
                  </div>

                  {/* Zoom Overlay */}
                  <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                    <div className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white border border-white/30 transform group-hover:scale-110 transition duration-300">
                      <Maximize2 className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Caption Bar */}
                <div className="p-4 bg-white flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-serif-title font-bold text-stone-900 group-hover:text-amber-700 transition">
                      {item.title}
                    </h3>
                    <p className="text-xs text-stone-500 mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-3 mt-2 border-t border-stone-100 flex items-center justify-between text-[11px] font-semibold text-amber-700">
                    <span>Click to view enlarged photo</span>
                    <Camera className="w-3.5 h-3.5 text-amber-600" />
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

    </div>
  );
};
