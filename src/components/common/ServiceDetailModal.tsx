import React from 'react';
import { X, Clock, CheckCircle2, Calendar, MessageSquare } from 'lucide-react';
import { ServiceItem } from '../../types/salon';
import { buildWhatsAppBookingUrl } from '../../utils/whatsapp';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService
}) => {
  if (!service) return null;

  const handleWhatsAppClick = () => {
    const url = buildWhatsAppBookingUrl({
      serviceName: service.name,
      customerMessage: `Hi, I would like to inquire about the ${service.name} service.`
    });
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-xl w-full overflow-hidden shadow-luxury border border-stone-200 relative max-h-[90vh] flex flex-col">
        
        {/* Top Hero Image Banner */}
        <div className="relative h-44 sm:h-64 shrink-0 overflow-hidden bg-stone-900">
          <img
            src={service.imageUrl}
            alt={service.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-1.5 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors backdrop-blur-sm"
            aria-label="Close detail modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Service Title & Badges */}
          <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-6 sm:right-6 text-white">
            {service.popularFor && (
              <span className="inline-block px-2 py-0.5 mb-1.5 bg-brand-500 text-white text-[9px] sm:text-[10px] uppercase font-bold tracking-wider rounded">
                {service.popularFor}
              </span>
            )}
            <h2 className="font-serif text-xl sm:text-3xl font-semibold tracking-wide leading-tight">
              {service.name}
            </h2>
            <div className="flex items-center space-x-3 sm:space-x-4 mt-1.5 text-xs text-stone-300">
              <span className="flex items-center text-[11px] sm:text-xs">
                <Clock className="w-3.5 h-3.5 mr-1 text-brand-400" />
                {service.durationMinutes} minutes
              </span>
              <span className="font-semibold text-brand-300 text-sm sm:text-base">
                ₹{service.price.toLocaleString()}
                {service.originalPrice && (
                  <span className="line-through text-stone-400 text-xs ml-1.5 font-normal">
                    ₹{service.originalPrice.toLocaleString()}
                  </span>
                )}
              </span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 sm:space-y-6 text-stone-700">
          
          <div>
            <h3 className="text-xs uppercase tracking-widest text-stone-400 font-semibold mb-2">
              Service Description
            </h3>
            <p className="text-sm leading-relaxed text-stone-600 font-light">
              {service.fullDescription || service.shortDescription}
            </p>
          </div>

          {service.whatsIncluded && service.whatsIncluded.length > 0 && (
            <div>
              <h3 className="text-xs uppercase tracking-widest text-stone-400 font-semibold mb-3">
                What's Included in This Ritual
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.whatsIncluded.map((item, index) => (
                  <li key={index} className="flex items-start text-xs text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-500 mr-2 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action CTAs */}
          <div className="pt-4 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={() => {
                onClose();
                onBookService(service.id);
              }}
              className="py-3 px-4 bg-brand-500 hover:bg-brand-600 text-white rounded-xl text-xs font-bold tracking-wider uppercase transition-luxury shadow-md flex items-center justify-center"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book This Service
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="py-3 px-4 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 rounded-xl text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center"
            >
              <MessageSquare className="w-4 h-4 mr-2 text-emerald-600" />
              Enquire on WhatsApp
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
