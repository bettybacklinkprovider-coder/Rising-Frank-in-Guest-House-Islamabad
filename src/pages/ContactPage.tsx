import React, { useState } from 'react';
import { 
  Phone, MapPin, Mail, MessageSquare, Send, CheckCircle2, Clock, Calendar, Navigation, Building2, User
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/guestHouseData';
import { BookingFormData } from '../types';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    checkInDate: '',
    checkOutDate: '',
    numberOfGuests: 2,
    roomType: 'Deluxe Room',
    specialRequests: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello Rising Frank Guest House!\n\nI have an inquiry from your website:\n` +
      `- Name: ${formData.fullName || 'Guest'}\n` +
      `- Phone: ${formData.phoneNumber}\n` +
      `- Dates: ${formData.checkInDate || 'Flexible'} to ${formData.checkOutDate || 'Flexible'}\n` +
      `- Guests: ${formData.numberOfGuests}\n` +
      `- Room Choice: ${formData.roomType}\n` +
      (formData.specialRequests ? `- Message: ${formData.specialRequests}` : '')
    );
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${text}`, '_blank');
  };

  return (
    <div className="py-12 sm:py-16 bg-stone-50 text-stone-900 space-y-12">
      
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-amber-700 text-xs font-bold uppercase tracking-widest font-brand">Get in Touch</span>
        <h1 className="text-3xl sm:text-5xl font-serif-title font-bold text-stone-900">
          Contact & Reservations
        </h1>
        <p className="text-stone-600 text-base max-w-2xl mx-auto leading-relaxed">
          Reach out to Rising Frank in Guest House Islamabad for direct room availability, reservation inquiries, or location assistance.
        </p>
      </div>

      {/* Quick Action Contact Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-900 text-white p-6 rounded-2xl shadow-xl border border-stone-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="p-4 bg-amber-700 hover:bg-amber-800 rounded-xl transition flex items-center justify-center gap-3 shadow-md group"
          >
            <Phone className="w-5 h-5 text-amber-200 group-hover:scale-110 transition" />
            <div className="text-left">
              <span className="block text-[10px] uppercase font-bold text-amber-200">Call Now</span>
              <span className="text-sm font-bold text-white">{BUSINESS_INFO.phone}</span>
            </div>
          </a>

          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-emerald-700 hover:bg-emerald-800 rounded-xl transition flex items-center justify-center gap-3 shadow-md group"
          >
            <MessageSquare className="w-5 h-5 text-emerald-200 group-hover:scale-110 transition" />
            <div className="text-left">
              <span className="block text-[10px] uppercase font-bold text-emerald-200">WhatsApp Chat</span>
              <span className="text-sm font-bold text-white">+{BUSINESS_INFO.whatsappRaw}</span>
            </div>
          </a>

          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-stone-800 hover:bg-stone-750 rounded-xl transition flex items-center justify-center gap-3 border border-stone-700 group"
          >
            <Navigation className="w-5 h-5 text-amber-400 group-hover:scale-110 transition" />
            <div className="text-left">
              <span className="block text-[10px] uppercase font-bold text-stone-400">Map Location</span>
              <span className="text-sm font-bold text-amber-100">Get Directions</span>
            </div>
          </a>

        </div>
      </div>

      {/* Main Grid: Info + Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Business Info & Card */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-md space-y-6">
              
              <div className="border-b border-stone-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-700 text-white flex items-center justify-center">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif-title font-bold text-stone-900">{BUSINESS_INFO.name}</h3>
                    <p className="text-xs text-amber-700 font-semibold uppercase tracking-wider">Sector G-9/4, Islamabad</p>
                  </div>
                </div>
              </div>

              {/* Details List */}
              <div className="space-y-4 text-xs text-stone-700">
                
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-50 text-amber-800 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-bold text-stone-900 uppercase tracking-wider text-[10px]">Phone Number</span>
                    <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-sm font-bold text-amber-800 hover:underline">
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-50 text-amber-800 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-bold text-stone-900 uppercase tracking-wider text-[10px]">Physical Address</span>
                    <p className="text-xs text-stone-700 leading-relaxed font-medium">
                      {BUSINESS_INFO.fullAddress}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-50 text-amber-800 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-bold text-stone-900 uppercase tracking-wider text-[10px]">Reception & Check-In</span>
                    <p className="text-xs text-stone-700 font-medium">24/7 Front Desk Assistance Available</p>
                  </div>
                </div>

              </div>

              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 shadow-sm transition"
                >
                  <Navigation className="w-4 h-4 text-amber-400" />
                  Open in Google Maps Application
                </a>
              </div>

            </div>

            {/* Quick Tips Box */}
            <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200 text-xs space-y-2 text-stone-800">
              <h4 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Visiting Us for the First Time?
              </h4>
              <p className="text-stone-600 leading-relaxed">
                Our guest house is located in Sector G-9/4, Islamabad (Street 55). We are only 15-20 minutes away from Faisal Mosque, Centaurus Mall, and major bus terminals.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-stone-200 shadow-md">
            
            <div className="mb-6 border-b border-stone-100 pb-4">
              <h3 className="text-2xl font-serif-title font-bold text-stone-900">Send an Inquiry</h3>
              <p className="text-stone-600 text-xs sm:text-sm mt-1">
                Fill out the form below to ask about room rates, availability, or make a stay request.
              </p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-serif-title text-stone-900">Inquiry Sent Successfully!</h4>
                <p className="text-stone-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-bold text-stone-900">{formData.fullName}</span>. Your inquiry for stay at Rising Frank Guest House has been logged. We will contact you at <strong>{formData.phoneNumber}</strong> shortly.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleWhatsAppRedirect}
                    className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl text-sm flex items-center justify-center gap-2 shadow-md transition"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Open WhatsApp Chat Now
                  </button>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 bg-stone-200 hover:bg-stone-300 text-stone-800 font-medium rounded-xl text-sm transition"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-600/30 focus:border-amber-600 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+92 333 1234567"
                      value={formData.phoneNumber}
                      onChange={e => setFormData({ ...formData, phoneNumber: e.target.value })}
                      className="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-600/30 focus:border-amber-600 transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-600/30 focus:border-amber-600 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Room Preference
                    </label>
                    <select
                      value={formData.roomType}
                      onChange={e => setFormData({ ...formData, roomType: e.target.value })}
                      className="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-600/30 focus:border-amber-600 transition"
                    >
                      <option value="Comfortable Guest Room">Comfortable Guest Room</option>
                      <option value="Deluxe Room">Deluxe Room</option>
                      <option value="Family Accommodation">Family Accommodation</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      value={formData.checkInDate}
                      onChange={e => setFormData({ ...formData, checkInDate: e.target.value })}
                      className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-600/30 focus:border-amber-600 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Check-out Date
                    </label>
                    <input
                      type="date"
                      value={formData.checkOutDate}
                      onChange={e => setFormData({ ...formData, checkOutDate: e.target.value })}
                      className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-600/30 focus:border-amber-600 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Number of Guests
                    </label>
                    <select
                      value={formData.numberOfGuests}
                      onChange={e => setFormData({ ...formData, numberOfGuests: Number(e.target.value) })}
                      className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-600/30 focus:border-amber-600 transition"
                    >
                      <option value={1}>1 Guest</option>
                      <option value={2}>2 Guests</option>
                      <option value={3}>3 Guests</option>
                      <option value={4}>4 Guests</option>
                      <option value={5}>5+ Family Group</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Message / Special Requests
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your arrival time, extra requirements, corporate stay details, etc."
                    value={formData.specialRequests}
                    onChange={e => setFormData({ ...formData, specialRequests: e.target.value })}
                    className="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-600/30 focus:border-amber-600 transition resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3.5 px-6 bg-amber-700 hover:bg-amber-800 text-white font-bold rounded-xl text-sm shadow-md transition flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Inquiry
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppRedirect}
                    className="py-3.5 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-sm transition flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Instant WhatsApp
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>
      </div>

      {/* ==========================================
          INTERACTIVE GOOGLE MAPS SECTION
         ========================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-md space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-4">
            <div>
              <span className="text-amber-700 text-xs font-bold uppercase tracking-widest font-brand">Location Map</span>
              <h3 className="text-xl font-serif-title font-bold text-stone-900">Find Us in Islamabad (Sector G-9/4)</h3>
            </div>
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-amber-50 hover:bg-amber-100 text-amber-800 text-xs font-bold rounded-lg border border-amber-200/80 transition inline-flex items-center gap-1.5 self-start sm:self-auto"
            >
              <Navigation className="w-3.5 h-3.5 text-amber-700" />
              Open Full Map Directions
            </a>
          </div>

          <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden border border-stone-200 shadow-inner bg-stone-100">
            <iframe
              title="Rising Frank Guest House Islamabad Location Map"
              src="https://maps.google.com/maps?q=Sector+House,+50+Street+55,+G-9/4,+Islamabad,+Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
          <p className="text-xs text-stone-500 text-center">
            Address: <strong>{BUSINESS_INFO.fullAddress}</strong>
          </p>
        </div>
      </div>

    </div>
  );
};
