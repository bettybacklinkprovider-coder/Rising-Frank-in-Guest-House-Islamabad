import React, { useState } from 'react';
import { Phone, Menu, X, Calendar, MapPin, Building2, ChevronRight } from 'lucide-react';
import { Page } from '../types';
import { BUSINESS_INFO } from '../data/guestHouseData';

interface HeaderProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onPageChange, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: Page; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'rooms', label: 'Rooms & Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (pageId: Page) => {
    onPageChange(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-stone-900/95 backdrop-blur-md border-b border-stone-800 text-stone-100 shadow-md">
      
      {/* Top Notification Bar */}
      <div className="bg-stone-950 text-stone-300 text-xs py-1.5 px-4 border-b border-stone-850">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-stone-400">
            <MapPin className="w-3.5 h-3.5 text-amber-500" />
            <span className="truncate">{BUSINESS_INFO.sector}, Islamabad, Pakistan</span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-amber-400 font-semibold transition"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <span className="hidden sm:inline text-stone-600">|</span>
            <span className="hidden sm:inline text-amber-400/90 font-medium">Clean, Peaceful & Convenient Stay</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group focus:outline-none"
        >
          <div className="w-11 h-11 rounded-xl bg-stone-950 flex items-center justify-center text-amber-100 shadow-md border border-amber-500/40 group-hover:scale-105 transition overflow-hidden p-0.5">
            {BUSINESS_INFO.logoUrl ? (
              <img 
                src={BUSINESS_INFO.logoUrl} 
                alt="Rising Frank Crest Logo" 
                className="w-full h-full object-cover rounded-lg"
                referrerPolicy="no-referrer"
              />
            ) : (
              <Building2 className="w-5 h-5 text-amber-200" />
            )}
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-serif-title font-bold text-amber-50 leading-tight group-hover:text-amber-400 transition">
              Rising Frank
            </h1>
            <p className="text-[10px] sm:text-xs text-stone-400 uppercase tracking-wider font-medium">
              Guest House Islamabad
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition duration-200 ${
                  isActive
                    ? 'text-amber-400 bg-stone-800/80 font-semibold border border-amber-500/20 shadow-inner'
                    : 'text-stone-300 hover:text-white hover:bg-stone-800/50'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center space-x-3">
          <button
            onClick={onOpenBooking}
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-amber-50 font-semibold rounded-xl text-xs sm:text-sm shadow-md hover:shadow-lg transition transform active:scale-98 border border-amber-500/30"
          >
            <Calendar className="w-4 h-4 text-amber-200" />
            <span>Book Your Stay</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-stone-300 hover:text-white bg-stone-800/80 hover:bg-stone-800 border border-stone-700 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-stone-900 border-b border-stone-800 px-4 pt-3 pb-6 space-y-3 animate-slide-down">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition ${
                    isActive
                      ? 'bg-amber-700/30 text-amber-300 font-bold border border-amber-500/30'
                      : 'text-stone-300 hover:bg-stone-800 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-stone-500" />
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-stone-800 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded-xl text-sm flex items-center justify-center gap-2 shadow-md"
            >
              <Calendar className="w-4 h-4" />
              Book Your Stay
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium rounded-xl flex items-center justify-center gap-2 border border-stone-700"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              Call: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      )}

    </header>
  );
};
