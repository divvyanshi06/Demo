import React from 'react';
import { Award, Sparkles, Heart, ShieldCheck, Clock, UserCheck, LucideIcon } from 'lucide-react';
import { salonConfig } from '../../config/business';

const ICON_MAP: Record<string, LucideIcon> = {
  Award,
  Sparkles,
  Heart,
  ShieldCheck,
  Clock,
  UserCheck,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-stone-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-brand-400 font-semibold block">
            The Aura Difference
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-wide text-white">
            Why Discerning Clients Choose Us
          </h2>
          <p className="text-sm text-stone-400 font-light leading-relaxed">
            We fuse international artistic standards with personalized hospitality for an unparalleled salon visit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {salonConfig.whyChooseUs.map((item) => {
            const IconComponent = ICON_MAP[item.iconName] || Sparkles;
            return (
              <div
                key={item.id}
                className="bg-stone-950 p-8 rounded-xl border border-stone-800 hover:border-brand-500/50 transition-luxury group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-brand-500/10 text-brand-400 flex items-center justify-center mb-6 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-white mb-3 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-400 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
