import React from 'react';
import { salonConfig } from '../../config/business';
import { MapPin, Phone, Mail, Instagram, MessageSquare, Clock, ArrowUpRight } from 'lucide-react';
import { buildWhatsAppEnquiryUrl } from '../../utils/whatsapp';

interface FooterProps {
  setActivePage: (page: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage, onOpenBooking }) => {
  const handleNav = (page: string) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-28 md:pb-12 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800/80">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="font-serif text-3xl font-semibold text-white tracking-wider">
                {salonConfig.logoText}
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-brand-400 font-medium">
                {salonConfig.logoSubtext}
              </span>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed font-light">
              {salonConfig.description}
            </p>
            <div className="pt-2 flex items-center space-x-3">
              <a
                href={salonConfig.contactDetails.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-stone-900 hover:bg-brand-500 hover:text-white rounded-full transition-colors text-stone-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={buildWhatsAppEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-stone-900 hover:bg-emerald-600 hover:text-white rounded-full transition-colors text-stone-300"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-100 mb-5 font-sans">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm font-light">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-brand-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-brand-400 transition-colors">
                  Services & Pricing
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('gallery')} className="hover:text-brand-400 transition-colors">
                  Visual Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-brand-400 transition-colors">
                  About Our Studio
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-brand-400 transition-colors">
                  Contact & Hours
                </button>
              </li>
              <li>
                <button onClick={onOpenBooking} className="text-brand-400 hover:text-brand-300 font-medium transition-colors">
                  Book an Appointment →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-100 mb-5 font-sans flex items-center">
              <Clock className="w-4 h-4 mr-2 text-brand-400" />
              Operating Hours
            </h3>
            <ul className="space-y-2 text-xs font-light text-stone-400">
              {salonConfig.operatingHours.map((h, i) => (
                <li key={i} className="flex justify-between py-1 border-b border-stone-900">
                  <span className="text-stone-300">{h.day}</span>
                  <span className="text-stone-400">
                    {h.isClosed ? 'Closed' : `${h.openTime} - ${h.closeTime}`}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Location & Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-100 mb-5 font-sans">
              Visit Studio
            </h3>
            <div className="space-y-4 text-sm font-light text-stone-400">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 text-brand-400 mt-1 shrink-0" />
                <span>
                  {salonConfig.contactDetails.address}<br />
                  {salonConfig.contactDetails.cityStatePincode}
                  {salonConfig.contactDetails.landmark && (
                    <span className="block text-xs text-stone-500 mt-0.5">
                      ({salonConfig.contactDetails.landmark})
                    </span>
                  )}
                </span>
              </div>

              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-brand-400 shrink-0" />
                <a href={`tel:${salonConfig.contactDetails.phoneRaw}`} className="hover:text-white transition-colors">
                  {salonConfig.contactDetails.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-brand-400 shrink-0" />
                <a href={`mailto:${salonConfig.contactDetails.email}`} className="hover:text-white transition-colors">
                  {salonConfig.contactDetails.email}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={salonConfig.contactDetails.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-semibold text-brand-400 hover:text-brand-300 tracking-wider uppercase"
                >
                  Get Directions <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 font-light">
          <p>© {new Date().getFullYear()} {salonConfig.name}. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 text-stone-600">
            Powered by Premium Salon Engine
          </p>
        </div>

      </div>
    </footer>
  );
};
