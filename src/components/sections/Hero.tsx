import React from 'react';
import { Calendar, MessageSquare, Star, ArrowDown } from 'lucide-react';
import { salonConfig } from '../../config/business';
import { buildWhatsAppEnquiryUrl } from '../../utils/whatsapp';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreServices }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-stone-950 text-white">
      
      {/* Background Photography Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src={salonConfig.heroImageUrl}
          alt={salonConfig.name}
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.45] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6 sm:space-y-8">
        
        {/* Subtle Badge */}
        <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[10px] sm:text-xs text-stone-200 uppercase tracking-widest font-medium max-w-[92%] mx-auto">
          <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-400 fill-brand-400 shrink-0" />
          <span className="truncate">Greater Kailash’s Premier Beauty Destination</span>
        </div>

        {/* Dynamic Headline */}
        <h1 className="font-serif text-3.5xl sm:text-5xl md:text-7xl font-light tracking-tight text-white leading-[1.12] text-balance">
          {salonConfig.tagline}
        </h1>

        {/* Subheading */}
        <p className="max-w-2xl mx-auto text-sm sm:text-lg text-stone-300 font-light leading-relaxed px-2">
          {salonConfig.heroSubheading}
        </p>

        {/* Primary Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white rounded-lg text-xs font-bold tracking-widest uppercase transition-luxury shadow-luxury flex items-center justify-center"
          >
            <Calendar className="w-4 h-4 mr-2.5" />
            Book an Appointment
          </button>

          <a
            href={buildWhatsAppEnquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg text-xs font-semibold tracking-widest uppercase transition-colors backdrop-blur-sm flex items-center justify-center"
          >
            <MessageSquare className="w-4 h-4 mr-2.5 text-emerald-400" />
            WhatsApp Us
          </a>
        </div>

        {/* Stats Pill Strip */}
        <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-white/10">
          {salonConfig.stats.map((stat, index) => (
            <div key={index} className="p-3 text-center">
              <div className="font-serif text-2xl sm:text-3xl font-semibold text-brand-300">
                {stat.value}
              </div>
              <div className="text-[11px] uppercase tracking-wider text-stone-400 font-medium mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="pt-4 flex justify-center">
          <button
            onClick={onExploreServices}
            className="text-stone-400 hover:text-white text-xs uppercase tracking-widest flex items-center gap-1 transition-colors group"
          >
            <span>Explore Services</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>

      </div>

    </section>
  );
};
