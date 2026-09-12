import React, { useState, useEffect } from 'react';
import { salonConfig } from '../../config/business';
import { Phone, MessageSquare, Calendar, Menu, X, Clock } from 'lucide-react';
import { getSalonOpenStatus } from '../../utils/hours';
import { buildWhatsAppEnquiryUrl } from '../../utils/whatsapp';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  setActivePage,
  onOpenBooking
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const openStatus = getSalonOpenStatus(salonConfig.operatingHours);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services & Pricing' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: string) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-subtle border-b border-stone-200/60 py-3 sm:py-3.5'
            : 'bg-stone-950/90 backdrop-blur-sm text-white py-4 sm:py-5 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="group flex flex-col text-left focus:outline-none"
            >
              <span className={`font-serif text-2xl sm:text-3xl font-semibold tracking-wider transition-colors ${
                isScrolled ? 'text-stone-900 group-hover:text-brand-600' : 'text-white group-hover:text-brand-300'
              }`}>
                {salonConfig.logoText}
              </span>
              <span className={`text-[9px] tracking-[0.25em] uppercase font-medium -mt-1 ${
                isScrolled ? 'text-stone-500' : 'text-stone-300'
              }`}>
                {salonConfig.logoSubtext}
              </span>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = activePage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`text-sm tracking-wide font-medium transition-colors relative py-1 focus:outline-none ${
                      isScrolled
                        ? isActive
                          ? 'text-brand-600 font-semibold'
                          : 'text-stone-700 hover:text-brand-600'
                        : isActive
                          ? 'text-brand-300 font-semibold'
                          : 'text-stone-200 hover:text-brand-300'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                        isScrolled ? 'bg-brand-600' : 'bg-brand-300'
                      }`} />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Desktop Right Quick Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              
              {/* Status indicator */}
              <div className={`hidden xl:flex items-center text-xs px-2.5 py-1 rounded-full border ${
                openStatus.isOpen
                  ? isScrolled
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : 'bg-emerald-950/60 text-emerald-300 border-emerald-800'
                  : isScrolled
                    ? 'bg-stone-100 text-stone-600 border-stone-200'
                    : 'bg-stone-900/60 text-stone-300 border-stone-800'
              }`}>
                <span className={`w-1.5 h-1.5 rounded-full mr-2 ${openStatus.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-stone-400'}`} />
                <Clock className="w-3 h-3 mr-1" />
                <span>{openStatus.isOpen ? 'Open Now' : 'Closed'}</span>
              </div>

              {/* WhatsApp enquiry link */}
              <a
                href={buildWhatsAppEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors ${
                  isScrolled
                    ? 'text-stone-700 hover:bg-stone-100 hover:text-emerald-600'
                    : 'text-stone-200 hover:bg-white/10 hover:text-emerald-400'
                }`}
                title="Chat on WhatsApp"
              >
                <MessageSquare className="w-5 h-5" />
              </a>

              {/* Phone link */}
              <a
                href={`tel:${salonConfig.contactDetails.phoneRaw}`}
                className={`p-2 rounded-full transition-colors ${
                  isScrolled
                    ? 'text-stone-700 hover:bg-stone-100 hover:text-brand-600'
                    : 'text-stone-200 hover:bg-white/10 hover:text-brand-300'
                }`}
                title="Call Salon"
              >
                <Phone className="w-5 h-5" />
              </a>

              {/* Primary CTA button */}
              <button
                onClick={() => onOpenBooking()}
                className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold tracking-wider uppercase bg-brand-500 text-white rounded-md hover:bg-brand-600 transition-luxury shadow-sm hover:shadow-luxury focus:outline-none focus:ring-2 focus:ring-brand-500/50"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Appointment
              </button>
            </div>

            {/* Mobile Menu Button & Mobile Book CTA */}
            <div className="flex items-center space-x-2 md:hidden">
              <button
                onClick={() => onOpenBooking()}
                className="px-3 py-1.5 text-xs font-semibold tracking-wider uppercase bg-brand-500 text-white rounded hover:bg-brand-600 transition-colors"
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-md ${
                  isScrolled ? 'text-stone-900 hover:bg-stone-100' : 'text-white hover:bg-white/10'
                }`}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-stone-950 border-b border-stone-800 text-white px-4 pt-3 pb-6 mt-3 space-y-4 shadow-2xl animate-fadeIn max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left py-2.5 px-3 rounded-lg text-base font-medium transition-colors ${
                    activePage === link.id
                      ? 'bg-stone-800 text-brand-300 font-semibold'
                      : 'text-stone-200 hover:bg-stone-900 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-stone-800 space-y-3">
              <div className="flex items-center text-xs text-stone-300 px-3">
                <Clock className="w-3.5 h-3.5 mr-2 text-brand-400 shrink-0" />
                <span className="truncate">{openStatus.statusText}</span>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={`tel:${salonConfig.contactDetails.phoneRaw}`}
                  className="flex items-center justify-center px-3 py-2.5 border border-stone-700 rounded-lg text-xs font-medium text-stone-200 hover:bg-stone-800"
                >
                  <Phone className="w-4 h-4 mr-2 text-brand-400 shrink-0" />
                  Call Salon
                </a>
                <a
                  href={buildWhatsAppEnquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-3 py-2.5 border border-emerald-800/60 bg-emerald-950/40 rounded-lg text-xs font-medium text-emerald-300 hover:bg-emerald-900/60"
                >
                  <MessageSquare className="w-4 h-4 mr-2 text-emerald-400 shrink-0" />
                  WhatsApp
                </a>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center px-4 py-3 bg-brand-500 hover:bg-brand-600 text-white rounded-lg text-xs font-bold tracking-wider uppercase shadow-md"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Appointment Now
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Backdrop Overlay when Mobile Drawer is Open */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-stone-950/60 backdrop-blur-xs z-30 md:hidden"
        />
      )}
    </>
  );
};
