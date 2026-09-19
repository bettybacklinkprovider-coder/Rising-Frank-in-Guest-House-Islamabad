import React, { useState, useEffect } from 'react';
import { Page, Room, GalleryItem } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { RoomsServicesPage } from './pages/RoomsServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { BookingModal } from './components/BookingModal';
import { RoomDetailsModal } from './components/RoomDetailsModal';
import { LightboxModal } from './components/LightboxModal';
import { Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from './data/guestHouseData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [preselectedRoomId, setPreselectedRoomId] = useState<string | undefined>(undefined);
  const [selectedRoomDetails, setSelectedRoomDetails] = useState<Room | null>(null);
  
  // Lightbox state
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const [lightboxItemsList, setLightboxItemsList] = useState<GalleryItem[]>([]);

  // Synchronize route page with window hash on load & popstate
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as Page;
      if (['home', 'rooms', 'gallery', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange(); // initial check
    window.addEventListener('popstate', handleHashChange);
    return () => window.removeEventListener('popstate', handleHashChange);
  }, []);

  const handlePageChange = (page: Page) => {
    setCurrentPage(page);
    window.location.hash = page;
  };

  const handleOpenBooking = (roomId?: string) => {
    setPreselectedRoomId(roomId);
    setBookingModalOpen(true);
  };

  const handleOpenLightbox = (item: GalleryItem, filteredList: GalleryItem[]) => {
    setLightboxItem(item);
    setLightboxItemsList(filteredList);
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 font-sans selection:bg-amber-800 selection:text-white">
      
      {/* Sticky Top Header */}
      <Header
        currentPage={currentPage}
        onPageChange={handlePageChange}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Page Body */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onPageChange={handlePageChange}
            onOpenBooking={handleOpenBooking}
            onSelectRoom={(room) => setSelectedRoomDetails(room)}
          />
        )}

        {currentPage === 'rooms' && (
          <RoomsServicesPage
            onOpenBooking={handleOpenBooking}
            onSelectRoom={(room) => setSelectedRoomDetails(room)}
          />
        )}

        {currentPage === 'gallery' && (
          <GalleryPage
            onOpenLightbox={handleOpenLightbox}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Footer across all 4 pages */}
      <Footer
        onPageChange={handlePageChange}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Floating Action Buttons for WhatsApp & Direct Call */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-2xl border-2 border-white/20 transition duration-300 transform hover:scale-110 active:scale-95 group"
          aria-label="WhatsApp Contact"
          title="Chat on WhatsApp"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="absolute right-16 bg-stone-900 text-emerald-300 text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none border border-emerald-500/30">
            WhatsApp Us
          </span>
        </a>

        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="w-13 h-13 rounded-full bg-amber-700 hover:bg-amber-800 text-white flex items-center justify-center shadow-2xl border-2 border-white/20 transition duration-300 transform hover:scale-110 active:scale-95 group"
          aria-label="Call Guest House"
          title="Call Reception"
        >
          <Phone className="w-6 h-6" />
          <span className="absolute right-16 bg-stone-900 text-amber-300 text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none border border-amber-500/30">
            Call Reception
          </span>
        </a>
      </div>

      {/* Dialogs & Modals */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedRoomId={preselectedRoomId}
      />

      <RoomDetailsModal
        room={selectedRoomDetails}
        onClose={() => setSelectedRoomDetails(null)}
        onBookClick={(roomId) => handleOpenBooking(roomId)}
      />

      <LightboxModal
        item={lightboxItem}
        items={lightboxItemsList}
        onClose={() => setLightboxItem(null)}
        onNavigate={(newItem) => setLightboxItem(newItem)}
      />

    </div>
  );
}
