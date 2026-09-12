import { BookingData } from '../types/salon';
import { salonConfig } from '../config/business';

/**
 * Builds a direct WhatsApp message URL with clean plain-text formatting
 */
export function buildWhatsAppBookingUrl(booking: Partial<BookingData>): string {
  const phone = salonConfig.contactDetails.whatsappRaw;
  
  const textLines: string[] = [
    `Hello ${salonConfig.name},`,
    ``,
    `Salon Appointment Request`,
    `-------------------------`,
    `Service: ${booking.serviceName || 'General Consultation'}`,
    `Preferred Date: ${booking.date || 'Flexible'}`,
    `Preferred Time: ${booking.timeSlot || 'Anytime'}`,
    `Customer Name: ${booking.customerName || 'Customer'}`,
    `Phone Number: ${booking.customerPhone || 'Not provided'}`,
  ];

  if (booking.customerMessage && booking.customerMessage.trim() !== '') {
    textLines.push(`Notes: ${booking.customerMessage.trim()}`);
  }

  textLines.push(``);
  textLines.push(`Please confirm if this slot is available. Thank you!`);

  const fullText = textLines.join('\n');
  return `https://wa.me/${phone}?text=${encodeURIComponent(fullText)}`;
}

/**
 * Builds general WhatsApp enquiry URL
 */
export function buildWhatsAppEnquiryUrl(customText?: string): string {
  const phone = salonConfig.contactDetails.whatsappRaw;
  const text = customText || `Hello ${salonConfig.name}, I would like to inquire about your services and current offers.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
