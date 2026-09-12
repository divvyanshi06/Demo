import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react';
import { salonConfig } from '../../config/business';
import { bookingService } from '../../services/bookingService';
import { buildWhatsAppBookingUrl } from '../../utils/whatsapp';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedServiceId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedServiceId
}) => {
  const [serviceId, setServiceId] = useState<string>(selectedServiceId || salonConfig.services[0]?.id || '');
  const [date, setDate] = useState<string>(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedBookingId, setSubmittedBookingId] = useState<string | null>(null);
  const [errorText, setErrorText] = useState<string | null>(null);

  const availableSlots = bookingService.getAvailableTimeSlots(date);

  useEffect(() => {
    if (selectedServiceId) {
      setServiceId(selectedServiceId);
    }
  }, [selectedServiceId]);

  useEffect(() => {
    if (availableSlots.length > 0 && !timeSlot) {
      setTimeSlot(availableSlots[0]);
    }
  }, [availableSlots, timeSlot]);

  if (!isOpen) return null;

  const currentService = salonConfig.services.find((s) => s.id === serviceId) || salonConfig.services[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorText(null);

    if (!name.trim()) {
      setErrorText('Please enter your name.');
      return;
    }
    if (!phone.trim() || phone.length < 8) {
      setErrorText('Please enter a valid phone number.');
      return;
    }

    setIsSubmitting(true);

    const res = await bookingService.createBooking({
      serviceId,
      serviceName: currentService ? currentService.name : 'General Appointment',
      date,
      timeSlot,
      customerName: name,
      customerPhone: phone,
      customerMessage: message
    });

    setIsSubmitting(false);

    if (res.success && res.bookingId) {
      setSubmittedBookingId(res.bookingId);
    } else {
      setErrorText(res.message || 'Error submitting booking.');
    }
  };

  const handleWhatsAppRedirect = () => {
    const url = buildWhatsAppBookingUrl({
      serviceName: currentService ? currentService.name : 'General Appointment',
      date,
      timeSlot,
      customerName: name || 'Customer',
      customerPhone: phone || 'Not provided',
      customerMessage: message
    });
    window.open(url, '_blank');
  };

  const resetAndClose = () => {
    setSubmittedBookingId(null);
    setErrorText(null);
    setName('');
    setPhone('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-luxury border border-stone-200 relative max-h-[92vh] sm:max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="px-5 py-4 bg-stone-900 text-white flex items-center justify-between border-b border-stone-800 shrink-0">
          <div>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-brand-400 font-semibold block">
              Reserve Your Experience
            </span>
            <h2 className="font-serif text-xl sm:text-2xl font-medium tracking-wide">
              Book Appointment
            </h2>
          </div>
          <button
            onClick={resetAndClose}
            className="p-1.5 rounded-full hover:bg-stone-800 text-stone-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4">

          {submittedBookingId ? (
            /* Success View */
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-2xl text-stone-900 font-semibold">
                Appointment Request Received!
              </h3>
              <p className="text-sm text-stone-600 max-w-sm mx-auto font-light leading-relaxed">
                Thank you, <strong className="text-stone-900">{name}</strong>. We have received your request for{' '}
                <span className="text-brand-600 font-medium">{currentService?.name}</span> on{' '}
                <strong className="text-stone-900">{date}</strong> at <strong className="text-stone-900">{timeSlot}</strong>.
              </p>

              <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-600 font-mono inline-block">
                Reference ID: <span className="text-stone-900 font-bold">{submittedBookingId}</span>
              </div>

              <p className="text-xs text-stone-500">
                Our concierge team will call or message you shortly to confirm availability.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleWhatsAppRedirect}
                  className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold tracking-wider uppercase transition-colors"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Confirm on WhatsApp
                </button>
                <button
                  onClick={resetAndClose}
                  className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg text-xs font-semibold tracking-wider uppercase transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {errorText && (
                <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-lg">
                  {errorText}
                </div>
              )}

              {/* Service Picker */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                  Select Service
                </label>
                <select
                  value={serviceId}
                  onChange={(e) => setServiceId(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-brand-500/50"
                >
                  {salonConfig.services.map((srv) => (
                    <option key={srv.id} value={srv.id}>
                      {srv.name} — ₹{srv.price.toLocaleString()} ({srv.durationMinutes} mins)
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1 flex items-center">
                    <Calendar className="w-3.5 h-3.5 mr-1 text-brand-500" /> Date
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-brand-500/50"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1 flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1 text-brand-500" /> Time Slot
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-brand-500/50"
                  >
                    {availableSlots.map((slot, i) => (
                      <option key={i} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Customer Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1 flex items-center">
                    <User className="w-3.5 h-3.5 mr-1 text-brand-500" /> Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-brand-500/50"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1 flex items-center">
                    <Phone className="w-3.5 h-3.5 mr-1 text-brand-500" /> Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-brand-500/50"
                    required
                  />
                </div>
              </div>

              {/* Optional Message */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                  Special Instructions / Preferred Stylist (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Mention any specific requests or hair/skin concerns..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-brand-500/50 resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-3 space-y-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-brand-500 hover:bg-brand-600 disabled:bg-stone-400 text-white rounded-xl text-xs font-bold tracking-wider uppercase transition-luxury shadow-md flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span>Processing Request...</span>
                  ) : (
                    <>
                      <span>Confirm & Book Appointment</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </button>

                <div className="relative flex py-1 items-center">
                  <div className="flex-grow border-t border-stone-200"></div>
                  <span className="flex-shrink mx-3 text-[10px] text-stone-400 font-semibold uppercase tracking-widest">or</span>
                  <div className="flex-grow border-t border-stone-200"></div>
                </div>

                <button
                  type="button"
                  onClick={handleWhatsAppRedirect}
                  className="w-full py-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 rounded-xl text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center"
                >
                  <MessageSquare className="w-4 h-4 mr-2 text-emerald-600" />
                  Instant Booking via WhatsApp
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </div>
  );
};
