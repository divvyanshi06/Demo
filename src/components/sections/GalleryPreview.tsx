import React from 'react';
import { Maximize2, ArrowRight } from 'lucide-react';
import { salonConfig } from '../../config/business';
import { GalleryItem } from '../../types/salon';

interface GalleryPreviewProps {
  onOpenLightbox: (items: GalleryItem[], index: number) => void;
  onViewFullGallery: () => void;
}

export const GalleryPreview: React.FC<GalleryPreviewProps> = ({
  onOpenLightbox,
  onViewFullGallery
}) => {
  const previewItems = salonConfig.gallery.slice(0, 6);

  return (
    <section className="py-20 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-stone-200 pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-brand-600 font-bold block mb-2">
              Visual Portfolio
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-stone-900 tracking-wide">
              The Aura Gallery
            </h2>
          </div>
          <button
            onClick={onViewFullGallery}
            className="mt-4 md:mt-0 inline-flex items-center text-xs font-bold tracking-widest uppercase text-stone-900 hover:text-brand-600 transition-colors group"
          >
            Explore Full Gallery <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(previewItems, index)}
              className="relative h-72 rounded-xl overflow-hidden group cursor-pointer shadow-subtle hover:shadow-luxury transition-luxury bg-stone-900"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white">
                <div className="flex justify-end">
                  <span className="p-2 rounded-full bg-white/20 backdrop-blur-md">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-brand-300 block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg font-medium">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
