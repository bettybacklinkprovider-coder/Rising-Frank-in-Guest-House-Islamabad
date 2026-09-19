import React from 'react';
import { 
  Phone, Calendar, MapPin, CheckCircle2, ChevronRight, ArrowRight,
  Wifi, Bath, Snowflake, Utensils, Car, Clock, ShieldCheck, Bed, Heart, Star, Navigation
} from 'lucide-react';
import { Page, Room } from '../types';
import { BUSINESS_INFO, ROOMS_DATA, AMENITIES_SERVICES_DATA, WHY_US_POINTS } from '../data/guestHouseData';

interface HomePageProps {
  onPageChange: (page: Page) => void;
  onOpenBooking: (roomId?: string) => void;
  onSelectRoom: (room: Room) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onPageChange, onOpenBooking, onSelectRoom }) => {

  // Icon mapping for Section 4
  const renderAmenityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bed': return <Bed className="w-6 h-6 text-amber-600" />;
      case 'Wifi': return <Wifi className="w-6 h-6 text-amber-600" />;
      case 'Bath': return <Bath className="w-6 h-6 text-amber-600" />;
      case 'Snowflake': return <Snowflake className="w-6 h-6 text-amber-600" />;
      case 'Utensils': return <Utensils className="w-6 h-6 text-amber-600" />;
      case 'Car': return <Car className="w-6 h-6 text-amber-600" />;
      case 'Clock': return <Clock className="w-6 h-6 text-amber-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-amber-600" />;
      default: return <CheckCircle2 className="w-6 h-6 text-amber-600" />;
    }
  };

  return (
    <div className="space-y-0">
      
      {/* ==========================================
          SECTION 1 — HERO
         ========================================== */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-stone-900 text-white overflow-hidden">
        
        {/* Background Image with Dark Elegant Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=2000&q=85"
            alt="Rising Frank Guest House Bedroom Interior"
            className="w-full h-full object-cover scale-105 animate-pulse-subtle"
          />
          {/* Dark gradient & vignette overlay for extreme contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/80 to-stone-900/60"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-800/80 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium backdrop-blur-md">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span>Top Rated Accommodation in Sector G-9/4, Islamabad</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif-title font-bold text-amber-50 leading-tight tracking-tight drop-shadow-md">
            Welcome to Rising Frank in Guest House Islamabad
          </h1>

          <p className="text-lg sm:text-2xl text-stone-200 font-light max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
            A comfortable and peaceful stay in the heart of Islamabad.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 hover:from-amber-700 hover:to-amber-900 text-white font-bold rounded-xl text-base shadow-xl shadow-amber-950/40 border border-amber-500/40 transition transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Book Your Stay
            </button>

            <button
              onClick={() => {
                onPageChange('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4 bg-stone-800/90 hover:bg-stone-800 text-amber-100 font-semibold rounded-xl text-base border border-stone-600 backdrop-blur-md transition hover:-translate-y-0.5"
            >
              Contact Us
            </button>
          </div>

          {/* Phone Display */}
          <div className="pt-4 flex items-center justify-center">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-3 px-6 py-3 bg-stone-900/90 hover:bg-stone-900 text-amber-400 hover:text-amber-300 font-bold rounded-2xl border border-amber-500/40 backdrop-blur-md shadow-lg transition"
            >
              <Phone className="w-5 h-5 text-amber-500" />
              <span className="text-base sm:text-lg tracking-wide">{BUSINESS_INFO.phone}</span>
            </a>
          </div>

        </div>

        {/* Bottom Curved Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-6 bg-stone-50 rounded-t-3xl z-10"></div>
      </section>

      {/* ==========================================
          SECTION 2 — WELCOME / ABOUT
         ========================================== */}
      <section className="py-16 sm:py-24 bg-stone-50 text-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Text Content */}
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-amber-700 text-xs font-bold uppercase tracking-widest font-brand">About Our Guest House</span>
                <h2 className="text-3xl sm:text-4xl font-serif-title font-bold text-stone-900 mt-1 leading-snug">
                  Your Peaceful Home Away From Home in Islamabad
                </h2>
              </div>

              <p className="text-stone-600 leading-relaxed text-base">
                <strong>Rising Frank in Guest House Islamabad</strong> provides comfortable, clean, and welcoming accommodation for visitors looking for a peaceful and convenient stay in the capital city of Pakistan. Whether traveling for business, family vacations, or short visits, our guest house ensures warmth, hygiene, and complete ease.
              </p>

              {/* Mention List */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-stone-200/80 shadow-xs">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-stone-800">Comfortable Accommodation</h4>
                    <p className="text-xs text-stone-600">Soft bedding, climate control, attached modern bathrooms, and quiet rooms.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-stone-200/80 shadow-xs">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-stone-800">Clean and Welcoming Environment</h4>
                    <p className="text-xs text-stone-600">Daily housekeeping and strict hygiene protocols across all guest rooms.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-stone-200/80 shadow-xs">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-stone-800">Convenient Location</h4>
                    <p className="text-xs text-stone-600">Located in Sector G-9/4, with quick access to commercial markets and transport.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-stone-200/80 shadow-xs">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-stone-800">Friendly Hospitality</h4>
                    <p className="text-xs text-stone-600">Attentive staff ready 24/7 to make your stay pleasant and stress-free.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-stone-200/80 shadow-xs">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-stone-800">Suitable for Short and Extended Stays</h4>
                    <p className="text-xs text-stone-600">Flexible options tailored for nightly visits, corporate trips, or family stays.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Guest House Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white group">
                <img
                  src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
                  alt="Rising Frank Guest House Room Interior"
                  className="w-full h-[450px] object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white p-4 bg-stone-900/80 backdrop-blur-md rounded-xl border border-white/10">
                  <p className="text-xs font-semibold text-amber-300 uppercase tracking-wider">Sector G-9/4, Islamabad</p>
                  <p className="text-sm font-serif-title font-medium mt-0.5">Quiet, secure, and restful guest house setting</p>
                </div>
              </div>

              {/* Decorative accent card */}
              <div className="absolute -bottom-6 -left-6 bg-amber-700 text-amber-50 p-4 rounded-2xl shadow-xl hidden sm:block border border-amber-600 max-w-[200px]">
                <p className="text-2xl font-bold font-brand">24/7</p>
                <p className="text-xs leading-tight text-amber-100 mt-1">Dedicated Guest Assistance & Hot Water</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 3 — ROOMS & ACCOMMODATION
         ========================================== */}
      <section className="py-16 sm:py-24 bg-stone-100 text-stone-900 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-amber-700 text-xs font-bold uppercase tracking-widest font-brand">Our Accommodations</span>
            <h2 className="text-3xl sm:text-4xl font-serif-title font-bold text-stone-900">
              Rooms & Accommodation
            </h2>
            <p className="text-stone-600 text-sm sm:text-base">
              Choose from our clean, well-appointed guest rooms designed for maximum relaxation and privacy in Islamabad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ROOMS_DATA.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 border border-stone-200 flex flex-col group"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={room.mainImage}
                    alt={room.name}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-md text-amber-300 text-xs font-bold px-3 py-1 rounded-md">
                    {room.category}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-amber-800 text-white text-xs font-bold px-3 py-1 rounded-md shadow-sm">
                    {room.pricePerNight}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-serif-title font-bold text-stone-900 group-hover:text-amber-700 transition">
                      {room.name}
                    </h3>
                    <p className="text-xs text-stone-500 font-medium mt-1">Capacity: {room.capacity} | {room.bedType}</p>
                    <p className="text-xs text-stone-600 mt-3 leading-relaxed line-clamp-3">
                      {room.shortDescription}
                    </p>
                  </div>

                  {/* Amenities Preview */}
                  <div className="space-y-2 pt-2 border-t border-stone-100">
                    <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider">Key Amenities</span>
                    <div className="flex flex-wrap gap-1.5">
                      {room.amenities.slice(0, 3).map((amenity, idx) => (
                        <span key={idx} className="text-[11px] bg-stone-100 text-stone-700 px-2.5 py-1 rounded-md font-medium">
                          ✓ {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Details Button */}
                  <div className="pt-2">
                    <button
                      onClick={() => onSelectRoom(room)}
                      className="w-full py-2.5 bg-stone-900 hover:bg-amber-700 text-white font-semibold rounded-xl text-xs flex items-center justify-center gap-2 transition duration-200"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => {
                onPageChange('rooms');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded-xl text-sm shadow-md transition"
            >
              <span>Explore All Rooms & Rates</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* ==========================================
          SECTION 4 — AMENITIES & SERVICES
         ========================================== */}
      <section className="py-16 sm:py-24 bg-stone-50 text-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-amber-700 text-xs font-bold uppercase tracking-widest font-brand">Guest Facilities</span>
            <h2 className="text-3xl sm:text-4xl font-serif-title font-bold text-stone-900">
              Amenities & Services
            </h2>
            <p className="text-stone-600 text-sm sm:text-base">
              Everything you need for a relaxed, convenient, and safe stay in Islamabad.
            </p>
          </div>

          {/* Icon-Based Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AMENITIES_SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-stone-200/90 shadow-sm hover:shadow-md hover:border-amber-400/50 transition duration-300 group flex flex-col justify-between overflow-hidden"
              >
                {service.imageUrl ? (
                  <div className="relative h-44 overflow-hidden bg-stone-100">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md border border-stone-200/80 flex items-center justify-center shadow-sm">
                      {renderAmenityIcon(service.iconName)}
                    </div>
                  </div>
                ) : null}

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {!service.imageUrl && (
                      <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-amber-100 transition duration-300">
                        {renderAmenityIcon(service.iconName)}
                      </div>
                    )}
                    <h3 className="text-base font-serif-title font-bold text-stone-900 group-hover:text-amber-700 transition">
                      {service.title}
                    </h3>
                    <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  {service.badge && (
                    <span className="mt-4 inline-block self-start text-[10px] font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full">
                      {service.badge}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==========================================
          SECTION 5 — WHY STAY WITH US
         ========================================== */}
      <section className="py-16 sm:py-24 bg-stone-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Col: Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-stone-700 group">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
                  alt="Islamabad Margalla Hills Surroundings"
                  className="w-full h-[420px] object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5 text-stone-100 p-4 bg-stone-900/80 backdrop-blur-md rounded-xl border border-stone-700">
                  <p className="text-xs font-bold text-amber-400 uppercase tracking-widest font-brand">Islamabad Experience</p>
                  <p className="text-sm font-serif-title mt-0.5">Serene view of Islamabad's natural beauty and Margalla foothills nearby.</p>
                </div>
              </div>
            </div>

            {/* Right Col: Why Stay Grid */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-amber-400 text-xs font-bold uppercase tracking-widest font-brand">Guest Satisfaction</span>
                <h2 className="text-3xl sm:text-4xl font-serif-title font-bold text-amber-50 mt-1">
                  Why Stay With Us
                </h2>
                <p className="text-stone-300 text-sm mt-2">
                  At Rising Frank in Guest House Islamabad, we prioritize guest satisfaction above all else. Here is why visitors choose us for their stay:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {WHY_US_POINTS.map((pt, idx) => (
                  <div key={idx} className="bg-stone-800/80 p-4 rounded-xl border border-stone-700 hover:border-amber-500/50 transition">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                      <h4 className="text-sm font-bold text-amber-100">{pt.title}</h4>
                    </div>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      {pt.description}
                    </p>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ==========================================
          SECTION 6 — CONTACT / BOOKING CTA
         ========================================== */}
      <section className="py-16 sm:py-20 bg-stone-50 text-stone-900 border-t border-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          <div className="space-y-3">
            <span className="text-amber-700 text-xs font-bold uppercase tracking-widest font-brand">Inquiries & Reservations</span>
            <h2 className="text-3xl sm:text-4xl font-serif-title font-bold text-stone-900">
              Plan Your Stay in Islamabad
            </h2>
            <p className="text-stone-600 text-base max-w-2xl mx-auto leading-relaxed">
              Contact Rising Frank in Guest House Islamabad to inquire about availability and your stay.
            </p>
          </div>

          {/* Contact Highlight Box */}
          <div className="bg-amber-50 p-6 sm:p-8 rounded-2xl border border-amber-200/80 shadow-sm max-w-2xl mx-auto space-y-6">
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-full bg-amber-700 text-white flex items-center justify-center shrink-0 shadow-md">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold text-stone-500 tracking-wider">Direct Reception Phone</span>
                <p className="text-2xl font-serif-title font-bold text-amber-900">{BUSINESS_INFO.phone}</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full sm:w-auto px-8 py-3.5 bg-amber-700 hover:bg-amber-800 text-white font-bold rounded-xl text-sm shadow-md transition flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 bg-stone-900 hover:bg-stone-800 text-white font-bold rounded-xl text-sm shadow-md transition flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4 text-amber-400" />
                Get Directions
              </a>
            </div>

            {/* Complete Address Display */}
            <div className="pt-4 border-t border-amber-200/80 text-xs text-stone-700 flex items-start justify-center gap-2">
              <MapPin className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span className="font-medium text-stone-800">{BUSINESS_INFO.fullAddress}</span>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
