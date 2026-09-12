import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { StickyMobileBar } from './components/layout/StickyMobileBar';
import { BookingModal } from './components/common/BookingModal';
import { ServiceDetailModal } from './components/common/ServiceDetailModal';
import { Lightbox } from './components/common/Lightbox';

import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

import { ServiceItem, GalleryItem } from './types/salon';

export function App() {
  const [activePage, setActivePage] = useState<string>('home');

  // Booking Modal state
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [bookingServiceId, setBookingServiceId] = useState<string | undefined>(undefined);

  // Service Detail Modal state
  const [activeServiceDetail, setActiveServiceDetail] = useState<ServiceItem | null>(null);

  // Lightbox state
  const [lightboxItems, setLightboxItems] = useState<GalleryItem[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleOpenBooking = (serviceId?: string) => {
    setBookingServiceId(serviceId);
    setIsBookingOpen(true);
  };

  const handleOpenLightbox = (items: GalleryItem[], index: number) => {
    setLightboxItems(items);
    setLightboxIndex(index);
  };

  return (
    <div className="min-h-screen flex flex-col bg-salon-bg text-salon-text font-sans antialiased">
      
      {/* Top Fixed Header */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Dynamic View */}
      <div className="flex-1">
        {activePage === 'home' && (
          <HomePage
            onOpenBooking={handleOpenBooking}
            onOpenServiceDetail={setActiveServiceDetail}
            onOpenLightbox={handleOpenLightbox}
            setActivePage={setActivePage}
          />
        )}

        {activePage === 'services' && (
          <ServicesPage
            onOpenServiceDetail={setActiveServiceDetail}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {activePage === 'gallery' && (
          <GalleryPage
            onOpenLightbox={handleOpenLightbox}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {activePage === 'about' && (
          <AboutPage onOpenBooking={() => handleOpenBooking()} />
        )}

        {activePage === 'contact' && (
          <ContactPage />
        )}
      </div>

      {/* Footer */}
      <Footer
        setActivePage={setActivePage}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Mobile Conversion Sticky Bar */}
      <StickyMobileBar onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedServiceId={bookingServiceId}
      />

      <ServiceDetailModal
        service={activeServiceDetail}
        onClose={() => setActiveServiceDetail(null)}
        onBookService={handleOpenBooking}
      />

      <Lightbox
        items={lightboxItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
      />

    </div>
  );
}

export default App;
