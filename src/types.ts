export type Page = 'home' | 'rooms' | 'gallery' | 'contact';

export interface Room {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  pricePerNight: string;
  capacity: string;
  bedType: string;
  size: string;
  mainImage: string;
  galleryImages: string[];
  amenities: string[];
  features: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
  imageUrl?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'bedrooms' | 'exterior' | 'bathrooms' | 'common' | 'dining' | 'islamabad';
  categoryLabel: string;
  imageUrl: string;
  description: string;
}

export interface BusinessInfo {
  name: string;
  phone: string;
  phoneRaw: string;
  whatsappRaw: string;
  address: string;
  sector: string;
  city: string;
  country: string;
  postalCode: string;
  fullAddress: string;
  googleMapsUrl: string;
  email: string;
  logoUrl?: string;
}

export interface BookingFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  checkInDate: string;
  checkOutDate: string;
  numberOfGuests: number;
  roomType: string;
  specialRequests: string;
}
