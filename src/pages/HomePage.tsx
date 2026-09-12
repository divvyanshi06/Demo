import React from 'react';
import { Hero } from '../components/sections/Hero';
import { FeaturedServices } from '../components/sections/FeaturedServices';
import { AboutPreview } from '../components/sections/AboutPreview';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { GalleryPreview } from '../components/sections/GalleryPreview';
import { Testimonials } from '../components/sections/Testimonials';
import { CTASection } from '../components/sections/CTASection';
import { ServiceItem, GalleryItem } from '../types/salon';

interface HomePageProps {
  onOpenBooking: (serviceId?: string) => void;
  onOpenServiceDetail: (service: ServiceItem) => void;
  onOpenLightbox: (items: GalleryItem[], index: number) => void;
  setActivePage: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenBooking,
  onOpenServiceDetail,
  onOpenLightbox,
  setActivePage
}) => {
  return (
    <main>
      <Hero
        onOpenBooking={() => onOpenBooking()}
        onExploreServices={() => {
          const el = document.getElementById('featured-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      <div id="featured-section">
        <FeaturedServices
          onOpenDetail={onOpenServiceDetail}
          onOpenBooking={onOpenBooking}
          onViewAllServices={() => setActivePage('services')}
        />
      </div>

      <WhyChooseUs />

      <AboutPreview onReadMore={() => setActivePage('about')} />

      <GalleryPreview
        onOpenLightbox={onOpenLightbox}
        onViewFullGallery={() => setActivePage('gallery')}
      />

      <Testimonials />

      <CTASection onOpenBooking={() => onOpenBooking()} />
    </main>
  );
};
