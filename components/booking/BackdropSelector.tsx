'use client';

import React from 'react';
import { Check, Palette, Sparkles } from 'lucide-react';
import { BACKDROPS } from '@/data/backdrops';
import { useStudio } from '@/components/layout/StudioContext';
import { FinishType } from '@/types';
import { cn } from '@/components/ui/Button';

export function BackdropSelector() {
  const { language, t, bookingForm, updateBookingForm } = useStudio();

  const finishOptions: { id: FinishType; title: string; desc: string }[] = [
    {
      id: 'color',
      title: t.specialOffer.colorOptionTitle,
      desc: t.specialOffer.colorOptionDesc,
    },
    {
      id: 'antique',
      title: t.specialOffer.antiqueOptionTitle,
      desc: t.specialOffer.antiqueOptionDesc,
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-espresso">
          {t.bookingPage.step2Title}
        </h2>
        <p className="text-sm sm:text-base text-taupe mt-1">
          {t.bookingPage.step2Subtitle}
        </p>
      </div>

      {/* Finish Toggle */}
      <div className="space-y-3">
        <label className="block text-sm font-semibold text-espresso uppercase tracking-wider">
          {t.bookingPage.selectFinishLabel}
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {finishOptions.map((option) => {
            const active = bookingForm.finish === option.id;
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => updateBookingForm({ finish: option.id })}
                className={cn(
                  'p-5 rounded-2xl border text-left transition-all flex items-start justify-between gap-4',
                  active
                    ? 'bg-gold-light/30 border-gold ring-2 ring-gold shadow-heirloom'
                    : 'bg-surface border-borderWarm hover:border-taupe-light'
                )}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    {option.id === 'color' ? (
                      <Palette className="w-4 h-4 text-gold-dark" />
                    ) : (
                      <Sparkles className="w-4 h-4 text-gold-dark" />
                    )}
                    <span className="font-serif text-lg font-bold text-espresso">
                      {option.title}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-espresso-light leading-relaxed">
                    {option.desc}
                  </p>
                </div>
                <span
                  className={cn(
                    'w-6 h-6 rounded-full flex items-center justify-center shrink-0 border mt-0.5',
                    active
                      ? 'bg-espresso text-gold border-espresso'
                      : 'border-borderWarm bg-canvas'
                  )}
                >
                  {active && <Check className="w-3.5 h-3.5" />}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Backdrop Selection Grid */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-semibold text-espresso uppercase tracking-wider">
            {t.bookingPage.selectBackdropLabel}
          </label>
          <span className="text-xs font-semibold text-gold-dark">
            {language === 'en' ? 'Active Code:' : 'Código Activo:'}{' '}
            <strong className="text-espresso">{bookingForm.backdropCode}</strong>
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {BACKDROPS.map((backdrop) => {
            const isSelected = bookingForm.backdropCode === backdrop.code;
            return (
              <div
                key={backdrop.code}
                onClick={() => updateBookingForm({ backdropCode: backdrop.code })}
                className={cn(
                  'group cursor-pointer rounded-2xl overflow-hidden border transition-all bg-surface flex flex-col',
                  isSelected
                    ? 'border-gold ring-2 ring-gold shadow-heirloom'
                    : 'border-borderWarm hover:border-gold/50'
                )}
              >
                <div className="relative h-36 overflow-hidden bg-espresso">
                  <img
                    src={backdrop.imageUrl}
                    alt={backdrop.name[language]}
                    className={cn(
                      'w-full h-full object-cover transition-transform duration-500 group-hover:scale-105',
                      bookingForm.finish === 'antique' &&
                        'sepia-[0.65] contrast-[1.05] brightness-[0.95]'
                    )}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
                  <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-espresso/90 text-gold text-xs font-bold tracking-wider">
                    {backdrop.code}
                  </span>
                  {isSelected && (
                    <span className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-gold text-espresso flex items-center justify-center shadow">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </span>
                  )}
                  <span className="absolute bottom-2 left-2.5 right-2.5 text-xs font-medium text-canvas truncate">
                    {backdrop.categoryLabel[language]}
                  </span>
                </div>

                <div className="p-3.5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif text-base font-bold text-espresso">
                      {backdrop.name[language]}
                    </h4>
                    <p className="text-xs text-taupe line-clamp-2 mt-1">
                      {backdrop.wardrobeTip[language]}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
