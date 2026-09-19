import React, { useState } from 'react';
import { X, Check, BedDouble, Users, Maximize2, ShieldCheck, Calendar } from 'lucide-react';
import { Room } from '../types';
import { BUSINESS_INFO } from '../data/guestHouseData';

interface RoomDetailsModalProps {
  room: Room | null;
  onClose: () => void;
  onBookClick: (roomId: string) => void;
}

export const RoomDetailsModal: React.FC<RoomDetailsModalProps> = ({ room, onClose, onBookClick }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!room) return null;

  const currentMainImage = selectedImage || room.mainImage;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-stone-200 max-h-[92vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="bg-stone-900 text-white p-4 sm:p-5 flex items-center justify-between">
          <div>
            <span className="text-amber-400 text-xs font-semibold tracking-wider uppercase font-brand">{room.category}</span>
            <h3 className="text-xl sm:text-2xl font-serif-title text-amber-50">{room.name}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700 transition"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-5 overflow-y-auto space-y-6 flex-1">
          
          {/* Main Image Display */}
          <div className="space-y-3">
            <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden shadow-md group">
              <img
                src={currentMainImage}
                alt={room.name}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 right-3 bg-stone-900/80 backdrop-blur-md text-amber-300 text-xs font-bold px-3 py-1.5 rounded-lg border border-amber-500/30">
                {room.pricePerNight}
              </div>
            </div>

            {/* Gallery Thumbnails */}
            <div className="flex gap-2 overflow-x-auto pb-1">
              {room.galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`relative w-20 h-16 rounded-lg overflow-hidden shrink-0 border-2 transition ${
                    currentMainImage === img ? 'border-amber-600 ring-2 ring-amber-600/20' : 'border-stone-200 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`${room.name} ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Key Quick Specs Bar */}
          <div className="grid grid-cols-3 gap-3 p-4 bg-amber-50/70 rounded-xl border border-amber-200/60 text-center">
            <div className="flex flex-col items-center">
              <BedDouble className="w-5 h-5 text-amber-700 mb-1" />
              <span className="text-[10px] uppercase font-bold text-stone-500">Bed Type</span>
              <span className="text-xs font-semibold text-stone-900">{room.bedType}</span>
            </div>
            <div className="flex flex-col items-center border-x border-amber-200/80">
              <Users className="w-5 h-5 text-amber-700 mb-1" />
              <span className="text-[10px] uppercase font-bold text-stone-500">Capacity</span>
              <span className="text-xs font-semibold text-stone-900">{room.capacity}</span>
            </div>
            <div className="flex flex-col items-center">
              <Maximize2 className="w-5 h-5 text-amber-700 mb-1" />
              <span className="text-[10px] uppercase font-bold text-stone-500">Room Size</span>
              <span className="text-xs font-semibold text-stone-900">{room.size}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-stone-800 mb-2">Room Overview</h4>
            <p className="text-stone-600 text-sm leading-relaxed">{room.fullDescription}</p>
          </div>

          {/* Amenities & Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200/80">
              <h5 className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-3 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                Included Room Amenities
              </h5>
              <ul className="space-y-2">
                {room.amenities.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-stone-700">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200/80">
              <h5 className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-3 flex items-center gap-1.5">
                <BedDouble className="w-4 h-4 text-amber-600" />
                Comfort Highlights
              </h5>
              <ul className="space-y-2">
                {room.features.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-stone-700">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="bg-stone-100 p-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-stone-700 text-xs">
            Direct Phone: <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-bold text-amber-800">{BUSINESS_INFO.phone}</a>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 bg-stone-200 hover:bg-stone-300 text-stone-800 text-xs font-medium rounded-xl transition"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookClick(room.id);
              }}
              className="flex-1 sm:flex-none px-6 py-2.5 bg-amber-700 hover:bg-amber-800 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 shadow-md transition"
            >
              <Calendar className="w-4 h-4" />
              Book This Room
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
