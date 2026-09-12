export interface ServiceCategory {
  id: string;
  name: string;
  description?: string;
  iconName?: string;
}

export interface ServiceItem {
  id: string;
  categoryId: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  originalPrice?: number;
  durationMinutes: number;
  imageUrl: string;
  isFeatured?: boolean;
  whatsIncluded?: string[];
  popularFor?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string; // 'hair' | 'makeup' | 'bridal' | 'nails' | 'skin' | 'interior'
  imageUrl: string;
  caption?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  reviewText: string;
  serviceName?: string;
  date?: string;
  verifiedUser?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  specialties: string[];
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Sparkles' | 'Award' | 'ShieldCheck' | 'Heart' | 'Clock' | 'UserCheck';
}

export interface DayOperatingHours {
  day: string; // 'Monday', 'Tuesday', etc.
  openTime: string; // e.g. '10:00 AM'
  closeTime: string; // e.g. '08:00 PM'
  isClosed?: boolean;
}

export interface BusinessConfig {
  name: string;
  shortName: string;
  tagline: string;
  heroSubheading: string;
  description: string;
  logoText: string;
  logoSubtext: string;
  heroImageUrl: string;
  aboutImageUrl: string;
  ctaImageUrl: string;
  contactDetails: {
    address: string;
    cityStatePincode: string;
    landmark?: string;
    phoneDisplay: string;
    phoneRaw: string; // for tel: links
    whatsappDisplay: string;
    whatsappRaw: string; // numeric without + for wa.me link
    email: string;
    googleMapsEmbedUrl: string;
    googleMapsDirectionsUrl: string;
    instagramUrl: string;
    instagramHandle: string;
  };
  themeColors: {
    primaryAccent: string; // e.g. #B38356
    primaryAccentHover: string;
    darkSurface: string;
    lightBg: string;
  };
  operatingHours: DayOperatingHours[];
  stats: {
    label: string;
    value: string;
  }[];
  whyChooseUs: WhyChooseUsItem[];
  categories: ServiceCategory[];
  services: ServiceItem[];
  gallery: GalleryItem[];
  testimonials: Testimonial[];
  team: TeamMember[];
}

export interface BookingData {
  serviceId: string;
  serviceName: string;
  date: string;
  timeSlot: string;
  customerName: string;
  customerPhone: string;
  customerMessage?: string;
}

export interface BookingResponse {
  success: boolean;
  bookingId?: string;
  message?: string;
}
