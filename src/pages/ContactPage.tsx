import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, ArrowUpRight, Send, CheckCircle2 } from 'lucide-react';
import { salonConfig } from '../config/business';
import { getSalonOpenStatus } from '../utils/hours';
import { buildWhatsAppEnquiryUrl } from '../utils/whatsapp';

export const ContactPage: React.FC = () => {
  const openStatus = getSalonOpenStatus(salonConfig.operatingHours);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setSubmitted(true);
    }
  };

  return (
    <div className="pt-24 sm:pt-28 pb-16 bg-salon-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-brand-600 font-bold block">
            Visit & Connect
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-light text-stone-900 tracking-wide">
            Contact & Hours
          </h1>
          <p className="text-sm text-stone-600 font-light leading-relaxed">
            We are located in Greater Kailash II, New Delhi. Reach out via phone, WhatsApp, or stop by our studio.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Status card */}
            <div className="bg-stone-900 text-white p-6 rounded-2xl border border-stone-800 shadow-luxury flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-brand-400" />
                <div>
                  <div className="text-xs text-stone-400 uppercase tracking-wider font-medium">Studio Status</div>
                  <div className="font-serif text-lg font-semibold text-white">
                    {openStatus.isOpen ? 'Currently Open' : 'Currently Closed'}
                  </div>
                </div>
              </div>
              <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                openStatus.isOpen ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-stone-800 text-stone-300'
              }`}>
                {openStatus.isOpen ? 'Open Now' : 'Closed'}
              </span>
            </div>

            {/* Address */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-subtle space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-brand-600 mt-1 mr-3 shrink-0" />
                <div>
                  <h3 className="font-serif text-lg font-bold text-stone-900">Studio Location</h3>
                  <p className="text-xs text-stone-600 font-light mt-1 leading-relaxed">
                    {salonConfig.contactDetails.address}<br />
                    {salonConfig.contactDetails.cityStatePincode}
                    {salonConfig.contactDetails.landmark && (
                      <span className="block text-stone-500 mt-0.5">
                        ({salonConfig.contactDetails.landmark})
                      </span>
                    )}
                  </p>
                  <a
                    href={salonConfig.contactDetails.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-semibold text-brand-600 hover:text-brand-700 tracking-wider uppercase mt-3"
                  >
                    Get Directions <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Phone & WhatsApp */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={`tel:${salonConfig.contactDetails.phoneRaw}`}
                className="bg-white p-5 rounded-2xl border border-stone-200 shadow-subtle hover:border-brand-500 transition-colors block text-left"
              >
                <Phone className="w-5 h-5 text-brand-600 mb-2" />
                <span className="text-[10px] text-stone-400 uppercase font-semibold tracking-wider block">Call Direct</span>
                <span className="text-xs font-bold text-stone-900 block mt-0.5">
                  {salonConfig.contactDetails.phoneDisplay}
                </span>
              </a>

              <a
                href={buildWhatsAppEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-50 p-5 rounded-2xl border border-emerald-200 shadow-subtle hover:border-emerald-500 transition-colors block text-left"
              >
                <MessageSquare className="w-5 h-5 text-emerald-600 mb-2" />
                <span className="text-[10px] text-emerald-700 uppercase font-semibold tracking-wider block">WhatsApp</span>
                <span className="text-xs font-bold text-emerald-950 block mt-0.5">
                  {salonConfig.contactDetails.whatsappDisplay}
                </span>
              </a>
            </div>

            {/* Email & Instagram */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-subtle space-y-3">
              <div className="flex items-center text-xs text-stone-700">
                <Mail className="w-4 h-4 text-brand-600 mr-3 shrink-0" />
                <span>{salonConfig.contactDetails.email}</span>
              </div>
              <div className="flex items-center text-xs text-stone-700">
                <span className="font-semibold text-stone-900 mr-2">Instagram:</span>
                <a
                  href={salonConfig.contactDetails.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 font-medium hover:underline"
                >
                  {salonConfig.contactDetails.instagramHandle}
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps & Message Form */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Google Map Frame */}
            <div className="bg-stone-900 rounded-2xl overflow-hidden shadow-luxury border border-stone-200 h-72 relative">
              <iframe
                title="Salon Location Map"
                src={salonConfig.contactDetails.googleMapsEmbedUrl}
                className="w-full h-full border-0 filter grayscale-[0.2]"
                loading="lazy"
                allowFullScreen
              />
            </div>

            {/* General Inquiry Form */}
            <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-subtle space-y-4">
              <h3 className="font-serif text-2xl font-semibold text-stone-900">
                Send Us a Quick Message
              </h3>
              <p className="text-xs text-stone-500 font-light">
                Have a question about pricing, customized bridal packages, or skin treatments? Send a message and our concierge will get back to you immediately.
              </p>

              {submitted ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                  <h4 className="font-serif text-lg font-bold text-stone-900">Message Delivered</h4>
                  <p className="text-xs text-stone-600">
                    Thank you {formData.name}, we will respond to your inquiry shortly!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-brand-500/50"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-brand-500/50"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Ask any question about our services or custom packages..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-brand-500/50 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-stone-900 hover:bg-brand-500 text-white rounded-xl text-xs font-bold tracking-wider uppercase transition-luxury flex items-center justify-center"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Submit Inquiry
                  </button>
                </form>
              )}

            </div>

          </div>

        </div>

        {/* Operating Hours Table */}
        <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-subtle max-w-2xl mx-auto">
          <h3 className="font-serif text-2xl font-semibold text-stone-900 mb-6 text-center">
            Full Weekly Operating Hours
          </h3>
          <div className="divide-y divide-stone-100 text-xs">
            {salonConfig.operatingHours.map((h, index) => (
              <div key={index} className="py-3 flex justify-between items-center font-light">
                <span className="font-medium text-stone-900">{h.day}</span>
                <span className="text-stone-600">
                  {h.isClosed ? 'Closed' : `${h.openTime} — ${h.closeTime}`}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
