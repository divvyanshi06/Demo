import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { salonConfig } from '../../config/business';
import { buildWhatsAppEnquiryUrl } from '../../utils/whatsapp';

interface StickyMobileBarProps {
  onOpenBooking: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-stone-950/95 backdrop-blur-md border-t border-stone-800 p-2 shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        
        {/* Call Action */}
        <a
          href={`tel:${salonConfig.contactDetails.phoneRaw}`}
          className="flex flex-col items-center justify-center py-2 bg-stone-900 active:bg-stone-800 text-stone-200 rounded-lg transition-colors border border-stone-800"
        >
          <Phone className="w-4 h-4 text-brand-400 mb-0.5" />
          <span className="text-[10px] font-semibold tracking-wider uppercase">Call</span>
        </a>

        {/* WhatsApp Action */}
        <a
          href={buildWhatsAppEnquiryUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 bg-emerald-950/60 active:bg-emerald-900 text-emerald-300 rounded-lg transition-colors border border-emerald-800/60"
        >
          <MessageSquare className="w-4 h-4 text-emerald-400 mb-0.5" />
          <span className="text-[10px] font-semibold tracking-wider uppercase">WhatsApp</span>
        </a>

        {/* Book Action */}
        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-2 bg-brand-500 active:bg-brand-600 text-white rounded-lg transition-colors shadow-md"
        >
          <Calendar className="w-4 h-4 text-white mb-0.5" />
          <span className="text-[10px] font-bold tracking-wider uppercase">Book Now</span>
        </button>

      </div>
    </div>
  );
};
