import React from 'react';
import { Clock, ArrowRight, Eye } from 'lucide-react';
import { salonConfig } from '../../config/business';
import { ServiceItem } from '../../types/salon';

interface FeaturedServicesProps {
  onOpenDetail: (service: ServiceItem) => void;
  onOpenBooking: (serviceId: string) => void;
  onViewAllServices: () => void;
}

export const FeaturedServices: React.FC<FeaturedServicesProps> = ({
  onOpenDetail,
  onOpenBooking,
  onViewAllServices
}) => {
  const featured = salonConfig.services.filter((s) => s.isFeatured).slice(0, 6);

  return (
    <section className="py-20 bg-salon-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-stone-200 pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-brand-600 font-bold block mb-2">
              Curated Offerings
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-stone-900 tracking-wide">
              Featured Services
            </h2>
          </div>
          <button
            onClick={onViewAllServices}
            className="mt-4 md:mt-0 inline-flex items-center text-xs font-bold tracking-widest uppercase text-stone-800 hover:text-brand-600 transition-colors group"
          >
            View Full Service Menu <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((srv) => (
            <div
              key={srv.id}
              className="bg-white rounded-xl overflow-hidden border border-stone-200/80 shadow-subtle hover:shadow-luxury transition-luxury flex flex-col group"
            >
              {/* Image Header */}
              <div className="relative h-56 overflow-hidden bg-stone-900">
                <img
                  src={srv.imageUrl}
                  alt={srv.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  {srv.popularFor && (
                    <span className="px-2.5 py-1 bg-stone-950/80 backdrop-blur-sm text-white text-[10px] uppercase font-bold tracking-wider rounded">
                      {srv.popularFor}
                    </span>
                  )}
                </div>
                <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-white/90 backdrop-blur-sm text-stone-900 text-xs font-semibold rounded flex items-center shadow">
                  <Clock className="w-3 h-3 mr-1 text-brand-600" />
                  {srv.durationMinutes} mins
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-stone-900 tracking-wide group-hover:text-brand-600 transition-colors">
                    {srv.name}
                  </h3>
                  <p className="text-xs text-stone-600 font-light mt-2 line-clamp-2 leading-relaxed">
                    {srv.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-stone-400 font-medium block">
                      Starting Price
                    </span>
                    <span className="font-serif text-2xl font-bold text-stone-900">
                      ₹{srv.price.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => onOpenDetail(srv)}
                      className="p-2.5 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors"
                      title="View Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onOpenBooking(srv.id)}
                      className="px-4 py-2 bg-stone-900 hover:bg-brand-500 text-white rounded-lg text-xs font-bold tracking-wider uppercase transition-colors"
                    >
                      Book
                    </button>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
