import React, { useState } from 'react';
import { X, Calendar, User, Phone, Mail, CheckCircle2, MessageSquare, BedDouble } from 'lucide-react';
import { BUSINESS_INFO, ROOMS_DATA } from '../data/guestHouseData';
import { BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedRoomId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, preselectedRoomId }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    checkInDate: '',
    checkOutDate: '',
    numberOfGuests: 2,
    roomType: preselectedRoomId ? ROOMS_DATA.find(r => r.id === preselectedRoomId)?.name || 'Deluxe Room' : 'Deluxe Room',
    specialRequests: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello Rising Frank Guest House!\n\nI would like to inquire/book a room:\n` +
      `- Name: ${formData.fullName || 'Guest'}\n` +
      `- Phone: ${formData.phoneNumber}\n` +
      `- Room: ${formData.roomType}\n` +
      `- Check-in: ${formData.checkInDate || 'TBD'}\n` +
      `- Check-out: ${formData.checkOutDate || 'TBD'}\n` +
      `- Guests: ${formData.numberOfGuests}\n` +
      (formData.specialRequests ? `- Note: ${formData.specialRequests}` : '')
    );
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${text}`, '_blank');
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-amber-100 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-stone-900 text-white p-6 relative flex items-center justify-between">
          <div>
            <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase font-brand">Reservations & Inquiry</span>
            <h3 className="text-2xl font-serif-title text-amber-50 mt-1">Book Your Stay in Islamabad</h3>
            <p className="text-stone-300 text-xs mt-1">Direct booking & inquiries for {BUSINESS_INFO.name}</p>
          </div>
          <button 
            onClick={handleResetAndClose}
            className="p-2 rounded-full bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {isSubmitted ? (
            <div className="text-center py-8 px-4 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-serif-title text-stone-900">Inquiry Submitted Successfully!</h4>
              <p className="text-stone-600 text-sm max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-stone-900">{formData.fullName}</span>. We have received your stay details for <strong>{formData.roomType}</strong>. Our guest manager will contact you shortly on <strong>{formData.phoneNumber}</strong> to confirm your room availability.
              </p>

              <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-left max-w-md mx-auto text-xs space-y-2 text-stone-700">
                <div className="flex justify-between border-b border-amber-200/60 pb-1">
                  <span className="font-medium text-stone-500">Phone Contact:</span>
                  <span className="font-bold text-stone-900">{BUSINESS_INFO.phone}</span>
                </div>
                <div className="flex justify-between border-b border-amber-200/60 pb-1">
                  <span className="font-medium text-stone-500">Check-in Date:</span>
                  <span className="font-semibold">{formData.checkInDate || 'Flexible'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-stone-500">Location:</span>
                  <span className="font-semibold">{BUSINESS_INFO.sector}, Islamabad</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleWhatsAppRedirect}
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl text-sm flex items-center justify-center gap-2 shadow-md transition"
                >
                  <MessageSquare className="w-4 h-4" />
                  Connect via WhatsApp Now
                </button>
                <button
                  onClick={handleResetAndClose}
                  className="px-6 py-3 bg-stone-200 hover:bg-stone-300 text-stone-800 font-medium rounded-xl text-sm transition"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Muhammad Ali"
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-600/30 focus:border-amber-600 transition"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Phone / WhatsApp <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+92 300 1234567"
                      value={formData.phoneNumber}
                      onChange={e => setFormData({ ...formData, phoneNumber: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-600/30 focus:border-amber-600 transition"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Email Address */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-600/30 focus:border-amber-600 transition"
                    />
                  </div>
                </div>

                {/* Room Category */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Room Type
                  </label>
                  <div className="relative">
                    <BedDouble className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <select
                      value={formData.roomType}
                      onChange={e => setFormData({ ...formData, roomType: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-600/30 focus:border-amber-600 transition appearance-none"
                    >
                      {ROOMS_DATA.map(r => (
                        <option key={r.id} value={r.name}>{r.name} ({r.capacity})</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Check in */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Check-in Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <input
                      type="date"
                      value={formData.checkInDate}
                      onChange={e => setFormData({ ...formData, checkInDate: e.target.value })}
                      className="w-full pl-9 pr-2 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-600/30 focus:border-amber-600 transition"
                    />
                  </div>
                </div>

                {/* Check out */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Check-out Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <input
                      type="date"
                      value={formData.checkOutDate}
                      onChange={e => setFormData({ ...formData, checkOutDate: e.target.value })}
                      className="w-full pl-9 pr-2 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-600/30 focus:border-amber-600 transition"
                    />
                  </div>
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                    Guests
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <select
                      value={formData.numberOfGuests}
                      onChange={e => setFormData({ ...formData, numberOfGuests: Number(e.target.value) })}
                      className="w-full pl-9 pr-3 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-600/30 focus:border-amber-600 transition"
                    >
                      <option value={1}>1 Guest</option>
                      <option value={2}>2 Guests</option>
                      <option value={3}>3 Guests</option>
                      <option value={4}>4 Guests</option>
                      <option value={5}>5+ Family Group</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                  Special Requests / Additional Details
                </label>
                <textarea
                  rows={2}
                  placeholder="Expected arrival time, extra bed request, corporate stay info, etc."
                  value={formData.specialRequests}
                  onChange={e => setFormData({ ...formData, specialRequests: e.target.value })}
                  className="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-600/30 focus:border-amber-600 transition resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3 px-6 bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded-xl text-sm shadow-lg shadow-amber-900/10 transition transform active:scale-98"
                >
                  Send Booking Inquiry
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppRedirect}
                  className="py-3 px-5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl text-sm flex items-center justify-center gap-2 transition"
                >
                  <MessageSquare className="w-4 h-4" />
                  Instant WhatsApp
                </button>
              </div>

            </form>
          )}
        </div>

        {/* Footer info bar */}
        <div className="bg-stone-100 p-4 border-t border-stone-200 text-center text-xs text-stone-600">
          Or call direct: <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-bold text-amber-800 hover:underline">{BUSINESS_INFO.phone}</a> | {BUSINESS_INFO.sector}, Islamabad
        </div>

      </div>
    </div>
  );
};
