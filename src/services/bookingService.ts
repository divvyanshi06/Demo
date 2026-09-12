import { BookingData, BookingResponse } from '../types/salon';
import { supabase } from '../lib/supabaseClient';

export const bookingService = {
  async createBooking(data: BookingData): Promise<BookingResponse> {
    try {
      const bookingId = `APT-${Date.now().toString().slice(-6)}`;

      const { error } = await supabase.from('bookings').insert({
        booking_id: bookingId,
        service_name: data.serviceName,
        date: data.date,
        time_slot: data.timeSlot,
        customer_name: data.customerName,
        customer_phone: data.customerPhone,
        customer_message: data.customerMessage ?? null,
        status: 'pending',
      });

      if (error) throw error;

      return {
        success: true,
        bookingId,
        message: 'Your appointment request has been successfully recorded!',
      };
    } catch (error) {
      console.error('Booking submission error:', error);
      return {
        success: false,
        message: 'Failed to submit appointment request. Please try again or book via WhatsApp.',
      };
    }
  },

  async getBookings() {
    const { data, error } = await supabase
      .from('bookings')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) {
      console.error('Fetch bookings error:', error);
      return [];
    }
    return data;
  },

  getAvailableTimeSlots(dateStr?: string): string[] {
    void dateStr;
    return [
      '10:00 AM - 11:00 AM', '11:30 AM - 12:30 PM', '01:00 PM - 02:00 PM',
      '02:30 PM - 03:30 PM', '04:00 PM - 05:00 PM', '05:30 PM - 06:30 PM',
      '07:00 PM - 08:00 PM',
    ];
  },
};