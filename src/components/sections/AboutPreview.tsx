import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { salonConfig } from '../../config/business';

interface AboutPreviewProps {
  onReadMore: () => void;
}

export const AboutPreview: React.FC<AboutPreviewProps> = ({ onReadMore }) => {
  return (
    <section className="py-24 bg-salon-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Stack */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-luxury border border-stone-200 aspect-[4/5] bg-stone-900">
              <img
                src={salonConfig.aboutImageUrl}
                alt={salonConfig.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white p-5 rounded-xl shadow-luxury border border-stone-200 hidden sm:block max-w-xs">
              <p className="font-serif text-2xl font-bold text-stone-900">
                8+ Years
              </p>
              <p className="text-xs text-stone-500 font-light mt-0.5">
                Of crafting iconic style transformations across Delhi NCR.
              </p>
            </div>
          </div>

          {/* Right Column: Copy & Details */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-brand-600 font-bold block">
              About Our Sanctuary
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-stone-900 tracking-tight leading-tight text-balance">
              Redefining Haute Couture Hair & Aesthetic Beauty
            </h2>

            <p className="text-sm text-stone-600 font-light leading-relaxed">
              {salonConfig.description}
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center text-xs text-stone-700 font-medium">
                <span className="w-5 h-5 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center mr-3 shrink-0">
                  <Check className="w-3 h-3" />
                </span>
                Custom scalp & hair diagnostic consultations prior to all treatments
              </div>
              <div className="flex items-center text-xs text-stone-700 font-medium">
                <span className="w-5 h-5 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center mr-3 shrink-0">
                  <Check className="w-3 h-3" />
                </span>
                Sanitized individual suites & autoclaved medical-grade tools
              </div>
              <div className="flex items-center text-xs text-stone-700 font-medium">
                <span className="w-5 h-5 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center mr-3 shrink-0">
                  <Check className="w-3 h-3" />
                </span>
                Complimentary gourmet artisan coffees & herbal teas during your visit
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onReadMore}
                className="inline-flex items-center px-6 py-3.5 bg-stone-900 hover:bg-brand-500 text-white rounded-lg text-xs font-bold tracking-widest uppercase transition-luxury group"
              >
                Read Our Story & Team <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
