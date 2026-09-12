import React from 'react';
import { Calendar, MessageSquare, Phone } from 'lucide-react';
import { salonConfig } from '../../config/business';
import { buildWhatsAppEnquiryUrl } from '../../utils/whatsapp';

interface CTASectionProps {
  onOpenBooking: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative py-24 bg-stone-950 text-white overflow-hidden">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src={salonConfig.ctaImageUrl}
          alt={salonConfig.name}
          className="w-full h-full object-cover filter brightness-[0.3] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-stone-950/70" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
        
        <span className="text-xs uppercase tracking-widest text-brand-400 font-bold block">
          Your Beauty Journey Begins Here
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl font-light text-white tracking-wide leading-tight">
          Ready for Your Next Iconic Look?
        </h2>

        <p className="text-sm sm:text-base text-stone-300 font-light max-w-xl mx-auto leading-relaxed">
          Reserve your preferred styling slot online in seconds, or speak directly with our concierge team.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white rounded-lg text-xs font-bold tracking-widest uppercase transition-luxury shadow-luxury flex items-center justify-center"
          >
            <Calendar className="w-4 h-4 mr-2.5" />
            Book Your Appointment
          </button>

          <a
            href={buildWhatsAppEnquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 bg-emerald-600/90 hover:bg-emerald-600 text-white rounded-lg text-xs font-semibold tracking-widest uppercase transition-colors flex items-center justify-center"
          >
            <MessageSquare className="w-4 h-4 mr-2.5" />
            WhatsApp Us
          </a>

          <a
            href={`tel:${salonConfig.contactDetails.phoneRaw}`}
            className="w-full sm:w-auto px-6 py-4 bg-white/10 hover:bg-white/20 text-stone-200 border border-white/20 rounded-lg text-xs font-semibold tracking-widest uppercase transition-colors backdrop-blur-sm flex items-center justify-center"
          >
            <Phone className="w-4 h-4 mr-2" />
            Call Concierge
          </a>
        </div>

      </div>
    </section>
  );
};
