import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { salonConfig } from '../../config/business';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-salon-bg border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-brand-600 font-bold block">
            Client Words
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-stone-900 tracking-wide">
            Verified Customer Reviews
          </h2>
          <p className="text-sm text-stone-600 font-light leading-relaxed">
            Read authentic experiences shared by our valued guests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {salonConfig.testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-2xl border border-stone-200 shadow-subtle flex flex-col justify-between relative group hover:shadow-luxury transition-luxury"
            >
              <Quote className="w-10 h-10 text-stone-200 absolute top-6 right-6" />
              
              <div className="space-y-4 relative z-10">
                {/* Rating */}
                <div className="flex items-center space-x-1 text-amber-500">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-sm text-stone-700 font-light leading-relaxed italic">
                  "{item.reviewText}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <div className="flex items-center">
                    <h3 className="font-serif text-base font-bold text-stone-900">
                      {item.name}
                    </h3>
                    {item.verifiedUser && (
                      <span className="ml-1.5 text-emerald-600" title="Verified Customer">
                        <CheckCircle className="w-3.5 h-3.5 fill-emerald-100" />
                      </span>
                    )}
                  </div>
                  {item.serviceName && (
                    <span className="text-[11px] text-brand-600 font-medium block mt-0.5">
                      {item.serviceName}
                    </span>
                  )}
                </div>
                {item.date && (
                  <span className="text-[10px] text-stone-400 font-light">
                    {item.date}
                  </span>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
