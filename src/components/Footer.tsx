import React from 'react';
import { Building2, Phone, MapPin, Mail, MessageSquare, ArrowUpRight, ShieldCheck, Clock } from 'lucide-react';
import { Page } from '../types';
import { BUSINESS_INFO } from '../data/guestHouseData';

interface FooterProps {
  onPageChange: (page: Page) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onPageChange, onOpenBooking }) => {
  const handleNav = (page: Page) => {
    onPageChange(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-850">
      
      {/* Top Banner Accent */}
      <div className="bg-gradient-to-r from-amber-800 via-amber-700 to-amber-900 py-6 px-4 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <h3 className="text-xl font-serif-title text-amber-50">Planning Your Visit to Islamabad?</h3>
            <p className="text-amber-100 text-xs mt-1">Book directly for clean, comfortable rooms and genuine Pakistani hospitality in Sector G-9/4.</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={onOpenBooking}
              className="px-6 py-2.5 bg-stone-900 hover:bg-stone-800 text-amber-300 font-semibold text-xs rounded-xl shadow-lg border border-amber-500/30 transition"
            >
              Book Your Stay
            </button>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-medium text-xs rounded-xl flex items-center gap-1.5 shadow-lg transition"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Col 1: About Business */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-stone-900 flex items-center justify-center text-amber-100 shadow-md border border-amber-500/30 overflow-hidden p-0.5">
              {BUSINESS_INFO.logoUrl ? (
                <img 
                  src={BUSINESS_INFO.logoUrl} 
                  alt="Rising Frank Crest Logo" 
                  className="w-full h-full object-cover rounded-lg"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <Building2 className="w-5 h-5 text-amber-100" />
              )}
            </div>
            <div>
              <h4 className="text-base font-serif-title font-bold text-amber-50">{BUSINESS_INFO.name}</h4>
              <p className="text-[10px] text-stone-400 uppercase tracking-widest font-semibold">G-9/4 Islamabad</p>
            </div>
          </div>
          <p className="text-xs text-stone-400 leading-relaxed">
            A comfortable and peaceful guest house accommodation in the heart of Islamabad, providing clean rooms, modern facilities, 24/7 security, and friendly service for short and extended stays.
          </p>
          <div className="flex items-center gap-2 text-xs text-amber-400/90 bg-stone-900 p-2.5 rounded-lg border border-stone-800">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Safe, family-friendly & quiet environment</span>
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div className="space-y-3">
          <h5 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-brand">Quick Navigation</h5>
          <ul className="space-y-2 text-xs">
            <li>
              <button onClick={() => handleNav('home')} className="hover:text-amber-400 transition flex items-center gap-1 text-stone-300">
                <span className="text-amber-500">›</span> Home Page
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('rooms')} className="hover:text-amber-400 transition flex items-center gap-1 text-stone-300">
                <span className="text-amber-500">›</span> Rooms & Accommodation
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('rooms')} className="hover:text-amber-400 transition flex items-center gap-1 text-stone-300">
                <span className="text-amber-500">›</span> Guest Services & Amenities
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('gallery')} className="hover:text-amber-400 transition flex items-center gap-1 text-stone-300">
                <span className="text-amber-500">›</span> Photo Gallery
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('contact')} className="hover:text-amber-400 transition flex items-center gap-1 text-stone-300">
                <span className="text-amber-500">›</span> Contact & Location Map
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Contact Info */}
        <div className="space-y-3">
          <h5 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-brand">Contact Details</h5>
          <div className="space-y-2.5 text-xs text-stone-300">
            <div className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <span className="block text-[10px] uppercase font-semibold text-stone-500">Call / Inquire</span>
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-semibold text-stone-100 hover:text-amber-400 transition">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <MessageSquare className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <span className="block text-[10px] uppercase font-semibold text-stone-500">WhatsApp Chat</span>
                <a 
                  href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-semibold text-emerald-400 hover:underline inline-flex items-center gap-1"
                >
                  +{BUSINESS_INFO.whatsappRaw} <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <span className="block text-[10px] uppercase font-semibold text-stone-500">Front Desk Hours</span>
                <span className="text-stone-300">24 Hours / 7 Days Open</span>
              </div>
            </div>
          </div>
        </div>

        {/* Col 4: Location Address */}
        <div className="space-y-3">
          <h5 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-brand">Location Address</h5>
          <div className="flex items-start gap-2.5 text-xs text-stone-300">
            <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <address className="not-italic leading-relaxed text-stone-300">
              {BUSINESS_INFO.fullAddress}
            </address>
          </div>
          <div className="pt-2">
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-stone-900 hover:bg-stone-800 text-amber-400 text-xs font-medium rounded-lg border border-stone-800 transition"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              Get Google Directions
              <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-stone-950 py-4 px-4 border-t border-stone-900 text-center text-xs text-stone-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
          <p className="text-stone-600">Sector G-9/4, Islamabad, Pakistan</p>
        </div>
      </div>

    </footer>
  );
};
