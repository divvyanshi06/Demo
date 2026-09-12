import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { salonConfig } from '../config/business';
import { GalleryItem } from '../types/salon';
import { CTASection } from '../components/sections/CTASection';

interface GalleryPageProps {
  onOpenLightbox: (items: GalleryItem[], index: number) => void;
  onOpenBooking: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenLightbox, onOpenBooking }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Portfolio' },
    { id: 'hair', label: 'Hair & Color' },
    { id: 'makeup', label: 'Makeup & Glam' },
    { id: 'bridal', label: 'Bridal Couture' },
    { id: 'nails', label: 'Nail Art' },
    { id: 'skin', label: 'Skin Treatments' },
    { id: 'interior', label: 'Salon Ambiance' }
  ];

  const filteredItems = salonConfig.gallery.filter(
    (item) => selectedFilter === 'all' || item.category === selectedFilter
  );

  return (
    <div className="pt-24 sm:pt-28 pb-16 bg-salon-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs uppercase tracking-widest text-brand-600 font-bold block">
            Artistic Excellence
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-light text-stone-900 tracking-wide">
            Visual Gallery
          </h1>
          <p className="text-sm text-stone-600 font-light leading-relaxed">
            Browse real transformations, couture bridal makeovers, and our luxurious studio atmosphere.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto space-x-2 pb-4 no-scrollbar mb-10 px-2">
          {categories.map((cat) => {
            const isActive = selectedFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedFilter(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-luxury shrink-0 ${
                  isActive
                    ? 'bg-stone-900 text-white shadow-md'
                    : 'bg-white text-stone-600 hover:bg-stone-200 border border-stone-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(filteredItems, index)}
              className="relative h-80 rounded-xl overflow-hidden group cursor-pointer shadow-subtle hover:shadow-luxury transition-luxury bg-stone-900"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white">
                <div className="flex justify-end">
                  <span className="p-2 rounded-full bg-white/20 backdrop-blur-md">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-brand-300 block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-base font-medium">
                    {item.title}
                  </h3>
                  {item.caption && (
                    <p className="text-xs text-stone-300 font-light mt-0.5 line-clamp-1">
                      {item.caption}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className="mt-20">
        <CTASection onOpenBooking={onOpenBooking} />
      </div>
    </div>
  );
};
