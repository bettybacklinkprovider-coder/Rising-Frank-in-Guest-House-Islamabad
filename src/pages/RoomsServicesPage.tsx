import React from 'react';
import { 
  BedDouble, Users, Maximize2, Check, Wifi, Car, Sparkles, Utensils, Snowflake, ShieldCheck, Clock, Calendar, MessageSquare, Phone
} from 'lucide-react';
import { Room } from '../types';
import { BUSINESS_INFO, ROOMS_DATA } from '../data/guestHouseData';

interface RoomsServicesPageProps {
  onOpenBooking: (roomId?: string) => void;
  onSelectRoom: (room: Room) => void;
}

export const RoomsServicesPage: React.FC<RoomsServicesPageProps> = ({ onOpenBooking, onSelectRoom }) => {

  const servicesList = [
    {
      title: 'Free High-Speed Wi-Fi',
      desc: 'Seamless Wi-Fi access throughout guest rooms and common areas for work or entertainment.',
      icon: <Wifi className="w-6 h-6 text-amber-600" />,
      imageUrl: 'https://i.pinimg.com/1200x/8f/4d/93/8f4d939f68c68c5d2eac489677e9aea2.jpg'
    },
    {
      title: 'Secure Vehicle Parking',
      desc: 'Safe, gated parking inside and in front of the premises for guest cars and travel vans.',
      icon: <Car className="w-6 h-6 text-amber-600" />,
      imageUrl: 'https://i.pinimg.com/1200x/1e/9c/8b/1e9c8b91f6048178f4529cc2efa4d74e.jpg'
    },
    {
      title: 'Daily Housekeeping',
      desc: 'Daily room cleaning, fresh bed linens, towel replacements, and sanitized surfaces.',
      icon: <Sparkles className="w-6 h-6 text-amber-600" />
    },
    {
      title: 'In-Room Food Service',
      desc: 'Fresh tea, coffee, breakfast, and local Pakistani meal options served directly to your room.',
      icon: <Utensils className="w-6 h-6 text-amber-600" />,
      imageUrl: 'https://i.pinimg.com/1200x/f0/2c/d2/f02cd220711f0893f4f2958d4f2292d2.jpg'
    },
    {
      title: 'Clean Bathrooms',
      desc: 'Hygiene-first attached bathrooms featuring modern fittings, 24/7 hot & cold water, and fresh towels.',
      icon: <Sparkles className="w-6 h-6 text-amber-600" />,
      imageUrl: 'https://i.pinimg.com/736x/e5/12/ee/e512ee8cc948879589bbe34e55aae2bb.jpg'
    },
    {
      title: 'Inverter Air Conditioning',
      desc: 'Modern climate-controlled inverter AC systems in every room for summer and winter comfort.',
      icon: <Snowflake className="w-6 h-6 text-amber-600" />,
      imageUrl: 'https://i.pinimg.com/1200x/e5/98/74/e5987450235731712a11c34849606d2a.jpg'
    },
    {
      title: 'Comfortable Orthopaedic Bedding',
      desc: 'Premium plush mattresses, clean cotton sheets, and soft pillows to ensure sound sleep.',
      icon: <BedDouble className="w-6 h-6 text-amber-600" />,
      imageUrl: 'https://i.pinimg.com/736x/55/f8/24/55f824b5f2d78ace487ef445682cc9b9.jpg'
    },
    {
      title: '24/7 Guest Assistance',
      desc: 'Round-the-clock front desk help, taxi hailing, luggage assistance, and local guidance.',
      icon: <Clock className="w-6 h-6 text-amber-600" />,
      imageUrl: 'https://i.pinimg.com/1200x/f5/de/52/f5de52665db54a943107e774fb38dd17.jpg'
    },
    {
      title: '24/7 Security & Power Backup',
      desc: 'Gated compound with dedicated security guards and generator backup support.',
      icon: <ShieldCheck className="w-6 h-6 text-amber-600" />,
      imageUrl: 'https://i.pinimg.com/1200x/ef/ee/65/efee65502795b288aa19ad7e90b682d7.jpg'
    }
  ];

  return (
    <div className="py-12 sm:py-16 bg-stone-50 text-stone-900 space-y-16">
      
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-amber-700 text-xs font-bold uppercase tracking-widest font-brand">Our Offerings</span>
        <h1 className="text-3xl sm:text-5xl font-serif-title font-bold text-stone-900">
          Rooms & Guest Services
        </h1>
        <p className="text-stone-600 text-base max-w-2xl mx-auto leading-relaxed">
          Discover our meticulously maintained guest rooms and hospitable guest amenities designed for a restful stay in Sector G-9/4, Islamabad.
        </p>
      </div>

      {/* ==========================================
          ROOMS SECTION
         ========================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="border-b border-stone-200 pb-4">
          <h2 className="text-2xl font-serif-title font-bold text-stone-900 flex items-center gap-2">
            <BedDouble className="w-6 h-6 text-amber-700" />
            Guest Room Accommodation Options
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm mt-1">
            All rooms feature attached bathrooms, AC, flat-screen LED TV, and daily cleaning.
          </p>
        </div>

        <div className="space-y-12">
          {ROOMS_DATA.map((room, idx) => (
            <div
              key={room.id}
              className={`bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-md hover:shadow-lg transition duration-300 grid grid-cols-1 lg:grid-cols-12 ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              
              {/* Room Image Container */}
              <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-auto overflow-hidden group">
                <img
                  src={room.mainImage}
                  alt={room.name}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-stone-900/90 backdrop-blur-md text-amber-300 text-xs font-bold px-3.5 py-1.5 rounded-lg border border-amber-500/20">
                  {room.category}
                </div>
                <div className="absolute bottom-4 left-4 bg-amber-800 text-white text-xs font-bold px-4 py-2 rounded-lg shadow-md">
                  {room.pricePerNight}
                </div>
              </div>

              {/* Room Details */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-2xl font-serif-title font-bold text-stone-900">{room.name}</h3>
                  </div>

                  {/* Specs Bar */}
                  <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-stone-600 my-3 py-2 px-3 bg-stone-100 rounded-lg">
                    <span className="flex items-center gap-1.5">
                      <BedDouble className="w-4 h-4 text-amber-700" />
                      {room.bedType}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-amber-700" />
                      {room.capacity}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Maximize2 className="w-4 h-4 text-amber-700" />
                      {room.size}
                    </span>
                  </div>

                  <p className="text-stone-600 text-sm leading-relaxed">
                    {room.fullDescription}
                  </p>
                </div>

                {/* Amenities Grid */}
                <div>
                  <span className="text-xs uppercase font-bold text-stone-400 tracking-wider block mb-2">Room Amenities</span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {room.amenities.map((amenity, aIdx) => (
                      <div key={aIdx} className="flex items-center gap-1.5 text-xs text-stone-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3 border-t border-stone-100">
                  <button
                    onClick={() => onSelectRoom(room)}
                    className="flex-1 py-3 px-5 bg-stone-100 hover:bg-stone-200 text-stone-900 font-semibold rounded-xl text-xs transition text-center"
                  >
                    View Room Photos & Specs
                  </button>
                  <button
                    onClick={() => onOpenBooking(room.id)}
                    className="flex-1 py-3 px-5 bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition"
                  >
                    <Calendar className="w-4 h-4" />
                    Book This Room
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* ==========================================
          SERVICES SECTION
         ========================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        <div className="border-b border-stone-200 pb-4 text-center max-w-3xl mx-auto">
          <span className="text-amber-700 text-xs font-bold uppercase tracking-widest font-brand">Included Hospitality</span>
          <h2 className="text-2xl sm:text-3xl font-serif-title font-bold text-stone-900 mt-1">
            Guest Services & Facilities
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm mt-1">
            We provide a complete suite of services to ensure your stay is comfortable and convenient.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((srv, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-stone-200 shadow-xs hover:shadow-md transition overflow-hidden flex flex-col justify-between">
              {srv.imageUrl ? (
                <div className="relative h-44 overflow-hidden bg-stone-100">
                  <img
                    src={srv.imageUrl}
                    alt={srv.title}
                    className="w-full h-full object-cover transition duration-500 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md border border-stone-200 flex items-center justify-center shadow-xs">
                    {srv.icon}
                  </div>
                </div>
              ) : null}

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {!srv.imageUrl && (
                    <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center mb-4">
                      {srv.icon}
                    </div>
                  )}
                  <h3 className="text-base font-serif-title font-bold text-stone-900 mb-1">{srv.title}</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">{srv.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ==========================================
          BOTTOM CTA: CONTACT FOR BOOKING
         ========================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-stone-800 text-center space-y-6">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest font-brand">Instant Reservations</span>
          <h2 className="text-2xl sm:text-4xl font-serif-title font-bold text-amber-50">
            Contact for Booking & Special Rates
          </h2>
          <p className="text-stone-300 text-sm max-w-2xl mx-auto leading-relaxed">
            Need long-term accommodation, corporate booking, or immediate room availability? Contact our reception team directly for instant reservation confirmation.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-3.5 bg-amber-700 hover:bg-amber-800 text-white font-bold rounded-xl text-sm shadow-md transition flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Online Now
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full sm:w-auto px-8 py-3.5 bg-stone-800 hover:bg-stone-700 text-amber-400 font-bold rounded-xl text-sm border border-stone-700 transition flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call: {BUSINESS_INFO.phone}
            </a>

            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl text-sm transition flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp Booking
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};
