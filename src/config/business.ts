import { BusinessConfig } from '../types/salon';

/**
 * SALON CLIENT CONFIGURATION
 * Simply update this file to customize the website for any independent salon.
 */

// Centralized High-Resolution Unsplash Demo Image Asset Library
const IMAGES = {
  hero: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1920",
  about: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1200",
  cta: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1600",
  
  // Services
  hairStyling: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800",
  hairColor: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=800",
  facialGlow: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800",
  bridalMakeup: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800",
  luxuryManicure: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800",
  keratinTreatment: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800",
  hairSpa: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800",
  hydraFacial: "https://images.unsplash.com/photo-1512290900673-70024421d960?auto=format&fit=crop&q=80&w=800",

  // Gallery
  galleryHair1: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1000",
  galleryHair2: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=1000",
  galleryMakeup1: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=1000",
  galleryBridal1: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000",
  galleryNails1: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=1000",
  galleryInterior1: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1000",
  galleryInterior2: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1000",
  gallerySkin1: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=1000",

  // Team
  stylist1: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=600",
  stylist2: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
  stylist3: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
};

export const salonConfig: BusinessConfig = {
  name: "AURA SALON & BEAUTY STUDIO",
  shortName: "Aura Salon",
  tagline: "Where Beauty Meets Confidence",
  heroSubheading: "Premium hair, skin, and bespoke styling services tailored around your unique aura.",
  description: "Aura Salon & Beauty Studio is Greater Kailash's premier luxury beauty destination. Dedicated to modern elegance, precision hair artistry, and holistic skin rejuvenation.",
  logoText: "AURA",
  logoSubtext: "LUXURY SALON",
  
  heroImageUrl: IMAGES.hero,
  aboutImageUrl: IMAGES.about,
  ctaImageUrl: IMAGES.cta,

  contactDetails: {
    address: "M-42, Main Market, Greater Kailash II",
    cityStatePincode: "New Delhi, Delhi 110048",
    landmark: "Opposite Starbucks, 1st Floor",
    phoneDisplay: "+91 9899571694",
    phoneRaw: "+919899571694",
    whatsappDisplay: "+91 9899571694",
    whatsappRaw: "919899571694",
    email: "concierge@aurasalon.in",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.412497672239!2d77.24056237622834!3d28.52731878897531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1711b7b7527%3A0xb36d8d6411516e8b!2sGreater%20Kailash%20II%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    googleMapsDirectionsUrl: "https://maps.google.com/?q=Greater+Kailash+II+New+Delhi",
    instagramUrl: "https://instagram.com",
    instagramHandle: "@aurasalon.delhi"
  },

  themeColors: {
    primaryAccent: "#B38356",
    primaryAccentHover: "#966940",
    darkSurface: "#12100E",
    lightBg: "#FAF9F6"
  },

  stats: [
    { label: "Happy Clients Served", value: "12,000+" },
    { label: "Master Stylists", value: "14+" },
    { label: "Google Review Rating", value: "4.9 ★" },
    { label: "Years of Excellence", value: "8+" }
  ],

  operatingHours: [
    { day: "Monday", openTime: "10:00 AM", closeTime: "08:30 PM" },
    { day: "Tuesday", openTime: "10:00 AM", closeTime: "08:30 PM" },
    { day: "Wednesday", openTime: "10:00 AM", closeTime: "08:30 PM" },
    { day: "Thursday", openTime: "10:00 AM", closeTime: "08:30 PM" },
    { day: "Friday", openTime: "10:00 AM", closeTime: "09:00 PM" },
    { day: "Saturday", openTime: "09:30 AM", closeTime: "09:00 PM" },
    { day: "Sunday", openTime: "09:30 AM", closeTime: "09:00 PM" }
  ],

  whyChooseUs: [
    {
      id: "why-1",
      title: "Experienced Master Stylists",
      description: "Our artists hold international certifications and decades of combined haute-couture styling expertise.",
      iconName: "Award"
    },
    {
      id: "why-2",
      title: "100% Premium Authentic Products",
      description: "We exclusively partner with global luxury brands including Kérastase, L'Oréal Professionnel Paris, and Olaplex.",
      iconName: "Sparkles"
    },
    {
      id: "why-3",
      title: "Bespoke Personalization",
      description: "Every appointment begins with a thorough scalp & hair consultation to tailor treatments to your personal lifestyle.",
      iconName: "Heart"
    },
    {
      id: "why-4",
      title: "Hygienic & Ultra-Luxe Ambience",
      description: "Hospital-grade autoclaved tools, single-use disposable kits, and private plush styling suites for maximum comfort.",
      iconName: "ShieldCheck"
    }
  ],

  categories: [
    { id: "all", name: "All Services" },
    { id: "hair", name: "Hair Care & Styling" },
    { id: "skin", name: "Skin & Facials" },
    { id: "makeup", name: "Makeup & Beauty" },
    { id: "bridal", name: "Bridal Couture" },
    { id: "nails", name: "Nail Care & Art" },
    { id: "spa", name: "Body Spa & Wellness" }
  ],

  services: [
    {
      id: "srv-hair-cut",
      categoryId: "hair",
      name: "Signature Cut, Wash & Blow Dry",
      shortDescription: "Customized hair reshape with luxury detox scalp wash and couture blow-dry finish.",
      fullDescription: "Transform your hair with a personalized consultation by our master stylists. Includes a relaxing scalp massage wash with Kérastase rituals and precision cut tailored to your facial geometry.",
      price: 1800,
      originalPrice: 2200,
      durationMinutes: 60,
      imageUrl: IMAGES.hairStyling,
      isFeatured: true,
      popularFor: "Everyday Glamour",
      whatsIncluded: [
        "Personalized hair & face shape consultation",
        "Deep cleansing scalpmassage wash",
        "Precision master haircut",
        "Thermal styling & volume blow-dry finish"
      ]
    },
    {
      id: "srv-keratin",
      categoryId: "hair",
      name: "Brazilian Keratin Smoothing Treatment",
      shortDescription: "Eliminate 95% frizz and restore brilliant shine for up to 4 months.",
      fullDescription: "Infuse damaged hair fibers with natural keratin proteins to restore intense moisture, silky touch, and frizz-free manageable hair that cuts styling time in half.",
      price: 6500,
      originalPrice: 8500,
      durationMinutes: 150,
      imageUrl: IMAGES.keratinTreatment,
      isFeatured: true,
      popularFor: "Frizz-Free Shine",
      whatsIncluded: [
        "Clarifying pre-treatment wash",
        "Full length protein infusion",
        "Infrared seal process",
        "Post-treatment homecare routine guidance"
      ]
    },
    {
      id: "srv-balayage",
      categoryId: "hair",
      name: "Artisanal Balayage & Glossing",
      shortDescription: "Hand-painted dimensional highlights paired with customized gloss toner.",
      fullDescription: "Soft, seamless sun-kissed hair painting that grows out gracefully without harsh demarcation lines. Finished with a high-shine glaze toner to seal color vibrance.",
      price: 7500,
      originalPrice: 9000,
      durationMinutes: 180,
      imageUrl: IMAGES.hairColor,
      isFeatured: true,
      popularFor: "Celebrity Look",
      whatsIncluded: [
        "Custom color palette selection",
        "Olaplex bond protection shield during lightening",
        "Glaze gloss toner application",
        "Nourishing post-color treatment"
      ]
    },
    {
      id: "srv-hydrafacial",
      categoryId: "skin",
      name: "Aura Radiance HydraFacial MD",
      shortDescription: "Advanced 6-step vortex extraction, diamond peel and hyaluronic acid hydration.",
      fullDescription: "Non-invasive deep skin treatment that cleanses, exfoliates, extracts impurities, and hydrates skin with intense antioxidants and hyaluronic peptides for an instant glass-skin glow.",
      price: 4800,
      originalPrice: 6000,
      durationMinutes: 75,
      imageUrl: IMAGES.hydraFacial,
      isFeatured: true,
      popularFor: "Red Carpet Glow",
      whatsIncluded: [
        "Vortex cleansing & diamond tip exfoliation",
        "Pore-vacuum extraction",
        "Targeted peptide serum infusion",
        "LED light therapy treatment"
      ]
    },
    {
      id: "srv-bridal",
      categoryId: "bridal",
      name: "Couture Royal Bridal Makeover",
      shortDescription: "HD Airbrush bridal makeup, luxury hair styling, and saree/dupatta drape.",
      fullDescription: "The ultimate bridal experience designed to keep you breathtakingly flawless from your first photo to the midnight reception. Includes trial consultation and skin prep.",
      price: 22000,
      originalPrice: 25000,
      durationMinutes: 240,
      imageUrl: IMAGES.bridalMakeup,
      isFeatured: true,
      popularFor: "Bride-To-Be",
      whatsIncluded: [
        "Pre-wedding consultation & face prep",
        "Waterproof HD Airbrush longwear makeup",
        "Couture bridal hair styling & embellishments",
        "Lashes, dupatta draping & jewelry placement"
      ]
    },
    {
      id: "srv-nails",
      categoryId: "nails",
      name: "Gel Extension & Luxury Nail Art",
      shortDescription: "Custom gel extensions with bespoke hand-painted artwork & high-gloss topcoat.",
      fullDescription: "Durable, non-yellowing gel extensions tailored to your desired length and shape. Decorated with hand-painted accents, foils, or subtle minimal French tip detailing.",
      price: 2800,
      originalPrice: 3500,
      durationMinutes: 90,
      imageUrl: IMAGES.luxuryManicure,
      isFeatured: true,
      popularFor: "Statement Nails",
      whatsIncluded: [
        "Nail shaping & Russian cuticle care",
        "Premium lightweight gel extension tips",
        "Custom nail art design on 4 accent nails",
        "Nourishing cuticle oil massage"
      ]
    },
    {
      id: "srv-spa",
      categoryId: "spa",
      name: "Aromatherapy Deep Tissue Body Spa",
      shortDescription: "Essential oil body therapy targeting muscle tension and stress relief.",
      fullDescription: "Rebalance body and mind with deep rhythmic massage techniques using custom-blended warm botanical essential oils.",
      price: 3800,
      durationMinutes: 90,
      imageUrl: IMAGES.hairSpa,
      isFeatured: false,
      whatsIncluded: [
        "Custom essential oil selection",
        "Full body acupressure massage",
        "Herbal hot towel wrap",
        "Warm organic green tea post-session"
      ]
    },
    {
      id: "srv-gold-facial",
      categoryId: "skin",
      name: "24K Pure Gold Firming Facial",
      shortDescription: "Luxury anti-aging facial infused with 24K gold foil flakes for skin elasticity.",
      fullDescription: "Revitalize tired skin with gold's natural collagen boosting and detoxifying properties. Leaves skin visibly lifted, firm, and radiant.",
      price: 5500,
      durationMinutes: 75,
      imageUrl: IMAGES.facialGlow,
      isFeatured: false,
      whatsIncluded: [
        "Deep botanical steam wash",
        "24K gold sheet foil mask application",
        "Youth-firming facial contours massage",
        "Collagen lock moisturizer seal"
      ]
    }
  ],

  gallery: [
    {
      id: "g1",
      title: "Dimensional Champagne Blonde Balayage",
      category: "hair",
      imageUrl: IMAGES.galleryHair1,
      caption: "Seamless hand-painted highlights by Senior Stylist Ananya."
    },
    {
      id: "g2",
      title: "Luxe Glass-Hair Keratin Finish",
      category: "hair",
      imageUrl: IMAGES.galleryHair2,
      caption: "Frizz-free mirror shine finish lasting up to 4 months."
    },
    {
      id: "g3",
      title: "Royal HD Bridal Makeup",
      category: "bridal",
      imageUrl: IMAGES.galleryBridal1,
      caption: "Graceful heritage bridal look crafted for client Radhika."
    },
    {
      id: "g4",
      title: "Soft Glam Evening Makeup",
      category: "makeup",
      imageUrl: IMAGES.galleryMakeup1,
      caption: "Deewy skin, nude lip profile and soft smoked eyes."
    },
    {
      id: "g5",
      title: "Chrome & Minimalist Gel Nail Art",
      category: "nails",
      imageUrl: IMAGES.galleryNails1,
      caption: "Handcrafted French ombre gel extensions."
    },
    {
      id: "g6",
      title: "HydraFacial Glow Result",
      category: "skin",
      imageUrl: IMAGES.gallerySkin1,
      caption: "Post 60-minute instant hydration and vortex cleansing."
    },
    {
      id: "g7",
      title: "Private Styling Suite",
      category: "interior",
      imageUrl: IMAGES.galleryInterior1,
      caption: "Sanitized individual styling station for ultimate client privacy."
    },
    {
      id: "g8",
      title: "Luxury Wash Lounge",
      category: "interior",
      imageUrl: IMAGES.galleryInterior2,
      caption: "Ergonomic leather wash basins with body massage function."
    }
  ],

  testimonials: [
    {
      id: "t1",
      name: "Rhea Kapoor",
      rating: 5,
      reviewText: "Aura Salon is hands down the finest beauty studio in Delhi. Ananya gave me the exact subtle balayage I've been showing on my Pinterest board for months. High-end, pristine cleanliness, and super warm staff!",
      serviceName: "Artisanal Balayage",
      date: "2 weeks ago",
      verifiedUser: true
    },
    {
      id: "t2",
      name: "Dr. Meera Sengupta",
      rating: 5,
      reviewText: "The HydraFacial here is phenomenal! My skin literally glowed for days afterwards. Booking on their website took less than 30 seconds and the appointment started right on time.",
      serviceName: "HydraFacial MD",
      date: "1 month ago",
      verifiedUser: true
    },
    {
      id: "t3",
      name: "Pooja Malhotra",
      rating: 5,
      reviewText: "Got my bridal makeup and hair done at Aura. Their team made me feel so calm and confident on my big day. The makeup didn't budge at all through 12 hours of functions!",
      serviceName: "Royal Bridal Makeover",
      date: "3 weeks ago",
      verifiedUser: true
    }
  ],

  team: [
    {
      id: "tm1",
      name: "Ananya Sharma",
      role: "Creative Director & Master Colorist",
      bio: "Trained at Vidal Sassoon London with 12+ years specializing in balayage, corrective color, and luxury hair transformations.",
      imageUrl: IMAGES.stylist1,
      specialties: ["Balayage", "Keratin", "Couture Cuts"]
    },
    {
      id: "tm2",
      name: "Rohan Verma",
      role: "Senior Skin Specialist",
      bio: "Certified clinical aesthetician with expertise in dermal hydration, chemical peels, and advanced facial sculpting.",
      imageUrl: IMAGES.stylist3,
      specialties: ["HydraFacial", "24K Gold Facial", "Skin Prep"]
    },
    {
      id: "tm3",
      name: "Kavita Rao",
      role: "Lead Bridal & Makeup Artist",
      bio: "Renowned celebrity bridal artist known for weightless HD makeup and timeless bridal elegance.",
      imageUrl: IMAGES.stylist2,
      specialties: ["HD Bridal", "Airbrush Makeup", "Saree Draping"]
    }
  ]
};
