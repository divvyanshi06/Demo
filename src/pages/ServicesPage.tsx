import React, { useState } from 'react';
import { Search, Clock, Eye, Sparkles, Calendar } from 'lucide-react';
import { salonConfig } from '../config/business';
import { ServiceItem } from '../types/salon';
import { CTASection } from '../components/sections/CTASection';

interface ServicesPageProps {
  onOpenServiceDetail: (service: ServiceItem) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onOpenServiceDetail,
  onOpenBooking
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredServices = salonConfig.services.filter((srv) => {
    const matchesCategory = selectedCategory === 'all' || srv.categoryId === selectedCategory;
    const matchesSearch =
      srv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 sm:pt-28 pb-16 bg-salon-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs uppercase tracking-widest text-brand-600 font-bold block">
            Customized Beauty Menu
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-light text-stone-900 tracking-wide">
            Services & Pricing
          </h1>
          <p className="text-sm text-stone-600 font-light leading-relaxed">
            Every treatment is performed using global luxury products and tailored specifically to your unique aesthetic goals.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-6 mb-12">
          
          {/* Search Input Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-5 h-5 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search services (e.g. Balayage, HydraFacial)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white border border-stone-300 rounded-xl text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-brand-500/50 shadow-subtle"
            />
          </div>

          {/* Horizontal Category Tabs */}
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto space-x-2 pb-2 no-scrollbar px-2">
            {salonConfig.categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-luxury shrink-0 ${
                    isActive
                      ? 'bg-stone-900 text-white shadow-md'
                      : 'bg-white text-stone-600 hover:bg-stone-200 border border-stone-200'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

        </div>

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-stone-200 p-8 max-w-md mx-auto">
            <Sparkles className="w-10 h-10 text-stone-400 mx-auto mb-3" />
            <h3 className="font-serif text-xl font-medium text-stone-800">No Services Found</h3>
            <p className="text-xs text-stone-500 mt-1">
              Try searching with another keyword or select a different category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((srv) => (
              <div
                key={srv.id}
                className="bg-white rounded-xl overflow-hidden border border-stone-200 shadow-subtle hover:shadow-luxury transition-luxury flex flex-col justify-between group"
              >
                <div>
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden bg-stone-900">
                    <img
                      src={srv.imageUrl}
                      alt={srv.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
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
                  <div className="p-6 space-y-3">
                    <h3 className="font-serif text-xl font-semibold text-stone-900 tracking-wide group-hover:text-brand-600 transition-colors">
                      {srv.name}
                    </h3>
                    <p className="text-xs text-stone-600 font-light leading-relaxed">
                      {srv.shortDescription}
                    </p>

                    {srv.whatsIncluded && (
                      <div className="pt-2">
                        <span className="text-[10px] uppercase tracking-wider text-stone-400 font-semibold block mb-1">
                          Highlights:
                        </span>
                        <ul className="text-xs text-stone-600 font-light space-y-1">
                          {srv.whatsIncluded.slice(0, 2).map((item, idx) => (
                            <li key={idx} className="flex items-center">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mr-2" />
                              <span className="truncate">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Price & Buttons */}
                <div className="p-6 pt-0 border-t border-stone-100 mt-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-stone-400 font-medium block">
                      Price
                    </span>
                    <div className="flex items-baseline">
                      <span className="font-serif text-2xl font-bold text-stone-900">
                        ₹{srv.price.toLocaleString()}
                      </span>
                      {srv.originalPrice && (
                        <span className="line-through text-stone-400 text-xs ml-1.5 font-normal">
                          ₹{srv.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => onOpenServiceDetail(srv)}
                      className="p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors"
                      title="View Full Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onOpenBooking(srv.id)}
                      className="px-4 py-2 bg-brand-500 hover:bg-brand-600 text-white rounded-lg text-xs font-bold tracking-wider uppercase transition-colors shadow-sm flex items-center"
                    >
                      <Calendar className="w-3.5 h-3.5 mr-1" />
                      Book
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      <div className="mt-20">
        <CTASection onOpenBooking={() => onOpenBooking()} />
      </div>
    </div>
  );
};
