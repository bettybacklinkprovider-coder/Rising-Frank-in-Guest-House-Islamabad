import { BusinessInfo, GalleryItem, Room, ServiceItem } from '../types';

export const BUSINESS_INFO: BusinessInfo = {
  name: 'Rising Frank in Guest House Islamabad',
  phone: '+92 333 5450784',
  phoneRaw: '+923335450784',
  whatsappRaw: '923335450784',
  address: 'M2MQ+27R Sector House, 50 Street 55, G-9/4, G-9',
  sector: 'G-9/4, G-9',
  city: 'Islamabad',
  country: 'Pakistan',
  postalCode: '44000',
  fullAddress: 'M2MQ+27R Sector House, 50 Street 55, G-9/4, G-9, Islamabad, 44000, Pakistan',
  googleMapsUrl: 'https://maps.google.com/?q=Sector+House,+50+Street+55,+G-9/4,+Islamabad,+44000,+Pakistan',
  email: 'info@risingfrankguesthouse.pk',
  logoUrl: '/src/assets/images/rising_frank_logo_1789815356482.jpg'
};

export const ROOMS_DATA: Room[] = [
  {
    id: 'comfortable-guest-room',
    name: 'Comfortable Guest Room',
    category: 'Standard Room',
    shortDescription: 'Ideal for solo travellers or couples looking for a quiet, cozy, and budget-friendly stay with modern essential amenities.',
    fullDescription: 'Our Comfortable Guest Room is designed for peace, privacy, and relaxation. Featuring a plush queen-sized bed, sound-proof windows, independent air conditioning, high-speed Wi-Fi, and a clean attached bathroom, this room provides the ultimate retreat after a busy day exploring Islamabad.',
    pricePerNight: 'PKR 4,500 / night',
    capacity: 'Up to 2 Guests',
    bedType: '1 Queen Bed',
    size: '220 sq. ft.',
    mainImage: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['Air Conditioning', 'Free High-Speed Wi-Fi', 'Clean Attached Bathroom', 'Flat-screen LED TV', 'Daily Housekeeping', '24/7 Hot Water'],
    features: ['Quiet street view', 'Fresh cotton linens', 'Work desk & chair', 'Electric kettle on request', '24/7 Security guard', 'Backup generator']
  },
  {
    id: 'deluxe-room',
    name: 'Deluxe Room',
    category: 'Executive Deluxe',
    shortDescription: 'Spacious & elegant room with premium furnishings, King bed, extra seating space, and superior comfort for business or leisure guests.',
    fullDescription: 'Experience elevated luxury in our Deluxe Room. Featuring a plush King bed, ambient lighting, dedicated sitting area, smart TV, mini-fridge, and an updated modern tiled bathroom with rain shower. Perfect for executives, families, and discerning guests seeking extended relaxation.',
    pricePerNight: 'PKR 6,500 / night',
    capacity: 'Up to 3 Guests',
    bedType: '1 King Bed + Extra Sofa Bed',
    size: '320 sq. ft.',
    mainImage: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['Inverter Air Conditioner', 'Ultra-Fast Wi-Fi', 'Luxury Tiled Bathroom', 'Smart TV with Cable', 'Mini Refrigerator', 'Room Service', 'Complimentary Tea/Coffee'],
    features: ['Seating lounge sofa', 'Balcony / Window light', 'Premium orthopaedic mattress', 'Wardrobe & dress mirror', 'Daily fresh towels', 'Secure key entry']
  },
  {
    id: 'family-room',
    name: 'Family Accommodation',
    category: 'Family Suite',
    shortDescription: 'Generously proportioned multi-bed suite catering to families or group visits with complete safety and homely warmth.',
    fullDescription: 'Designed specifically for family vacations, business delegations, or group visits to Islamabad. The Family Accommodation offers multiple plush beds, a generous living zone, dining corner, climate control, and two full clean bathrooms for ultimate ease and group comfort.',
    pricePerNight: 'PKR 9,500 / night',
    capacity: 'Up to 5 Guests',
    bedType: '1 King Bed + 2 Single Beds',
    size: '480 sq. ft.',
    mainImage: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['Dual Inverter ACs', 'High-Speed Wi-Fi', '2 Clean Bathrooms', 'Large Smart TV', 'Dedicated Seating Area', 'Secure Gated Parking', '24/7 Room Assistance'],
    features: ['Homely ambiance', 'Spacious storage wardrobes', 'In-room breakfast available', 'Child-safe environment', 'Near G-9 Markaz shops & dining']
  }
];

export const AMENITIES_SERVICES_DATA: ServiceItem[] = [
  {
    id: 'comfortable-rooms',
    title: 'Comfortable Rooms',
    description: 'Elegantly furnished bedrooms with premium orthopaedic bedding, clean linens, and peaceful sound control.',
    iconName: 'Bed',
    badge: 'Guest Favorite',
    imageUrl: 'https://i.pinimg.com/736x/55/f8/24/55f824b5f2d78ace487ef445682cc9b9.jpg'
  },
  {
    id: 'free-wifi',
    title: 'Free High-Speed Wi-Fi',
    description: 'Seamless high-speed fibre internet coverage across all guest rooms, common lounges, and dining areas.',
    iconName: 'Wifi',
    imageUrl: 'https://i.pinimg.com/1200x/8f/4d/93/8f4d939f68c68c5d2eac489677e9aea2.jpg'
  },
  {
    id: 'clean-bathrooms',
    title: 'Clean Bathrooms',
    description: 'Hygiene-first attached bathrooms featuring modern fittings, 24/7 hot & cold water, and fresh towels.',
    iconName: 'Bath',
    imageUrl: 'https://i.pinimg.com/736x/e5/12/ee/e512ee8cc948879589bbe34e55aae2bb.jpg'
  },
  {
    id: 'air-conditioning',
    title: 'Air Conditioning',
    description: 'Individual inverter AC climate control in every room to keep you cool and comfortable year-round.',
    iconName: 'Snowflake',
    imageUrl: 'https://i.pinimg.com/1200x/e5/98/74/e5987450235731712a11c34849606d2a.jpg'
  },
  {
    id: 'room-service',
    title: 'Room Service',
    description: 'Prompt in-room dining, fresh tea, coffee, and local food assistance served directly to your door.',
    iconName: 'Utensils',
    imageUrl: 'https://i.pinimg.com/1200x/f0/2c/d2/f02cd220711f0893f4f2958d4f2292d2.jpg'
  },
  {
    id: 'parking',
    title: 'Secure Parking',
    description: 'Dedicated safe parking area inside and in front of the premises for your car or rental vehicle.',
    iconName: 'Car',
    imageUrl: 'https://i.pinimg.com/1200x/1e/9c/8b/1e9c8b91f6048178f4529cc2efa4d74e.jpg'
  },
  {
    id: '247-assistance',
    title: '24/7 Assistance',
    description: 'Round-the-clock friendly staff and security guard ready to assist with check-in, directions, or requests.',
    iconName: 'Clock',
    imageUrl: 'https://i.pinimg.com/1200x/f5/de/52/f5de52665db54a943107e774fb38dd17.jpg'
  },
  {
    id: 'peaceful-environment',
    title: 'Peaceful Environment',
    description: 'Nestled in Sector G-9/4 Islamabad, offering a calm, green, residential backdrop away from traffic noise.',
    iconName: 'ShieldCheck',
    imageUrl: 'https://i.pinimg.com/1200x/ef/ee/65/efee65502795b288aa19ad7e90b682d7.jpg'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Deluxe Guest Bedroom Interior',
    category: 'bedrooms',
    categoryLabel: 'Bedroom Interiors',
    imageUrl: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
    description: 'Warm lighting and cozy king bed in our deluxe suite.'
  },
  {
    id: 'g2',
    title: 'Guest House Main Exterior Front',
    category: 'exterior',
    categoryLabel: 'Exterior & Entrance',
    imageUrl: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80',
    description: 'Welcoming entrance and peaceful residential surroundings in G-9/4 Islamabad.'
  },
  {
    id: 'g3',
    title: 'Modern Tiled Bathroom',
    category: 'bathrooms',
    categoryLabel: 'Clean Bathrooms',
    imageUrl: 'https://i.pinimg.com/736x/e5/12/ee/e512ee8cc948879589bbe34e55aae2bb.jpg',
    description: 'Spotless attached bathroom with 24/7 hot water supply and rain shower.'
  },
  {
    id: 'g4',
    title: 'Cozy Family Room Setup',
    category: 'bedrooms',
    categoryLabel: 'Bedroom Interiors',
    imageUrl: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
    description: 'Spacious family room with crisp white linens and seating lounge.'
  },
  {
    id: 'g5',
    title: 'Guest Reception Lounge',
    category: 'common',
    categoryLabel: 'Common Areas',
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    description: 'Comfortable seating area for guests to relax or wait for transport.'
  },
  {
    id: 'g6',
    title: 'In-Room Breakfast & Tea Service',
    category: 'dining',
    categoryLabel: 'Dining & Food',
    imageUrl: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=80',
    description: 'Freshly prepared tea and breakfast served straight to guest rooms.'
  },
  {
    id: 'g7',
    title: 'Margalla Hills & Islamabad Scenery',
    category: 'islamabad',
    categoryLabel: 'Islamabad Surroundings',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    description: 'Breathtaking natural hills and green avenues of Islamabad nearby.'
  },
  {
    id: 'g8',
    title: 'Faisal Mosque Landmark View',
    category: 'islamabad',
    categoryLabel: 'Islamabad Surroundings',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description: 'The iconic Faisal Mosque, just minutes away from our Sector G-9 location.'
  },
  {
    id: 'g9',
    title: 'Standard Double Guest Bed Details',
    category: 'bedrooms',
    categoryLabel: 'Bedroom Interiors',
    imageUrl: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    description: 'Clean bed setup with orthopaedic mattress and soft pillows.'
  },
  {
    id: 'g10',
    title: 'Inverter Air Conditioning Unit',
    category: 'common',
    categoryLabel: 'Air Conditioning',
    imageUrl: 'https://i.pinimg.com/1200x/e5/98/74/e5987450235731712a11c34849606d2a.jpg',
    description: 'Individual inverter AC climate control in every room for optimal comfort.'
  },
  {
    id: 'g11',
    title: 'Comfortable Bedroom Setup',
    category: 'bedrooms',
    categoryLabel: 'Bedroom Interiors',
    imageUrl: 'https://i.pinimg.com/736x/55/f8/24/55f824b5f2d78ace487ef445682cc9b9.jpg',
    description: 'Elegantly furnished guest room with plush orthopaedic bed and soft lighting.'
  },
  {
    id: 'g12',
    title: 'High-Speed Wi-Fi Area',
    category: 'common',
    categoryLabel: 'Common & Lounge Areas',
    imageUrl: 'https://i.pinimg.com/1200x/8f/4d/93/8f4d939f68c68c5d2eac489677e9aea2.jpg',
    description: 'Ultra-fast fibre Wi-Fi coverage across rooms and common areas.'
  },
  {
    id: 'g13',
    title: 'In-Room Dining & Food Service',
    category: 'dining',
    categoryLabel: 'Dining & Food',
    imageUrl: 'https://i.pinimg.com/1200x/f0/2c/d2/f02cd220711f0893f4f2958d4f2292d2.jpg',
    description: 'Fresh tea, coffee, breakfast, and delicious Pakistani meals served directly to your room.'
  },
  {
    id: 'g14',
    title: 'Secure Vehicle Parking Area',
    category: 'exterior',
    categoryLabel: 'Exterior & Entrance',
    imageUrl: 'https://i.pinimg.com/1200x/1e/9c/8b/1e9c8b91f6048178f4529cc2efa4d74e.jpg',
    description: 'Dedicated safe parking space inside and in front of the guest house.'
  },
  {
    id: 'g15',
    title: '24/7 Reception & Guest Assistance',
    category: 'common',
    categoryLabel: 'Common & Lounge Areas',
    imageUrl: 'https://i.pinimg.com/1200x/f5/de/52/f5de52665db54a943107e774fb38dd17.jpg',
    description: 'Round-the-clock friendly reception staff and security guard.'
  },
  {
    id: 'g16',
    title: 'Peaceful Sector G-9/4 Environment',
    category: 'exterior',
    categoryLabel: 'Exterior & Entrance',
    imageUrl: 'https://i.pinimg.com/1200x/ef/ee/65/efee65502795b288aa19ad7e90b682d7.jpg',
    description: 'Serene, green residential surroundings in Islamabad.'
  }
];

export const WHY_US_POINTS = [
  {
    title: 'Comfortable & Peaceful Stay',
    description: 'Enjoy quiet nights with plush mattresses, clean linens, and serene surroundings in Sector G-9/4.'
  },
  {
    title: 'Clean & Welcoming Environment',
    description: 'We follow strict sanitation and daily housekeeping standards for a pristine, hygienic guest experience.'
  },
  {
    title: 'Convenient Islamabad Location',
    description: 'Easy access to G-9 Markaz, Peshawar Road, Kashmir Highway, Metro Bus, and top city attractions.'
  },
  {
    title: 'Guest-Focused Hospitality',
    description: 'Our attentive staff is committed to warm Pakistani hospitality, personalized care, and instant assistance.'
  },
  {
    title: 'Relaxing & Secure Atmosphere',
    description: 'Gated facility with 24/7 security, backup power support, and a peaceful residential residential setting.'
  },
  {
    title: 'Easy Access to Nearby Areas',
    description: 'Proximity to restaurants, markets, government offices, hospitals, and Faisal Mosque.'
  }
];
