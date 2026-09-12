import React from 'react';
import { Award, Sparkles, ShieldCheck, Heart } from 'lucide-react';
import { salonConfig } from '../config/business';
import { CTASection } from '../components/sections/CTASection';

interface AboutPageProps {
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="pt-24 sm:pt-28 pb-16 bg-salon-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-brand-600 font-bold block">
            Our Heritage & Philosophy
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-light text-stone-900 tracking-wide">
            About {salonConfig.shortName}
          </h1>
          <p className="text-sm text-stone-600 font-light leading-relaxed">
            Crafting confidence, luxury experiences, and bespoke beauty transformations since 2018.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-luxury border border-stone-200 aspect-[4/3] bg-stone-900">
              <img
                src={salonConfig.aboutImageUrl}
                alt={salonConfig.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs uppercase tracking-widest text-brand-600 font-bold block">
              The Aura Vision
            </span>
            <h2 className="font-serif text-3xl font-light text-stone-900 tracking-tight leading-tight">
              A Sanctuary Designed for Modern Elegance
            </h2>
            <p className="text-sm text-stone-600 font-light leading-relaxed">
              Founded with a passion for haute-couture styling and scalp health, {salonConfig.name} was created to elevate salon visits into therapeutic luxury rituals.
            </p>
            <p className="text-sm text-stone-600 font-light leading-relaxed">
              We reject one-size-fits-all templates. Whether you visit us for subtle everyday maintenance or an elaborate bridal makeover, every session begins with a diagnostic consultation to craft a personalized style plan tailored to your features and lifestyle.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="font-serif text-3xl font-light text-stone-900">
              Our Core Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-subtle">
              <Award className="w-8 h-8 text-brand-500 mb-4" />
              <h3 className="font-serif text-lg font-semibold text-stone-900 mb-2">Master Artistry</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Internationally trained stylists who regularly upgrade techniques with global beauty academies.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-subtle">
              <Sparkles className="w-8 h-8 text-brand-500 mb-4" />
              <h3 className="font-serif text-lg font-semibold text-stone-900 mb-2">Authentic Luxury</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                100% genuine products sourced directly from Kérastase, Olaplex, and L’Oréal Paris.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-subtle">
              <ShieldCheck className="w-8 h-8 text-brand-500 mb-4" />
              <h3 className="font-serif text-lg font-semibold text-stone-900 mb-2">Strict Hygiene</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Single-use disposable capes, autoclaved equipment, and sanitized private suites.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-subtle">
              <Heart className="w-8 h-8 text-brand-500 mb-4" />
              <h3 className="font-serif text-lg font-semibold text-stone-900 mb-2">Guest First</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Warm hospitality, zero rushed appointments, and complimentary artisanal refreshments.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs uppercase tracking-widest text-brand-600 font-bold block">
              Meet the Artists
            </span>
            <h2 className="font-serif text-3xl font-light text-stone-900">
              Our Master Creative Team
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {salonConfig.team.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-subtle hover:shadow-luxury transition-luxury flex flex-col"
              >
                <div className="h-72 overflow-hidden bg-stone-900">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-stone-900">
                      {member.name}
                    </h3>
                    <p className="text-xs text-brand-600 font-medium uppercase tracking-wider mt-0.5">
                      {member.role}
                    </p>
                    <p className="text-xs text-stone-600 font-light leading-relaxed mt-3">
                      {member.bio}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex flex-wrap gap-1.5">
                    {member.specialties.map((spec, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-stone-100 text-stone-700 text-[10px] font-medium rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <CTASection onOpenBooking={onOpenBooking} />
    </div>
  );
};
