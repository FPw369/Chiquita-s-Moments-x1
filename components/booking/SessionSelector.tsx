'use client';

import React from 'react';
import { CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { STUDIO_PACKAGES } from '@/data/backdrops';
import { useStudio } from '@/components/layout/StudioContext';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/components/ui/Button';

export function SessionSelector() {
  const { language, t, bookingForm, updateBookingForm } = useStudio();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-espresso">
          {t.bookingPage.step1Title}
        </h2>
        <p className="text-sm sm:text-base text-taupe mt-1">
          {t.bookingPage.step1Subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5">
        {STUDIO_PACKAGES.map((pkg) => {
          const isSelected = bookingForm.packageId === pkg.id;

          return (
            <Card
              key={pkg.id}
              onClick={() => updateBookingForm({ packageId: pkg.id })}
              highlighted={isSelected}
              hoverable
              className={cn(
                'p-6 cursor-pointer transition-all',
                isSelected ? 'bg-gold-light/25' : 'bg-surface'
              )}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    {pkg.badge && (
                      <Badge variant={pkg.id === 'promo-1995' ? 'gold' : 'cream'}>
                        <Sparkles className="w-3 h-3" />
                        <span>{pkg.badge[language]}</span>
                      </Badge>
                    )}
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-taupe">
                      <Clock className="w-3.5 h-3.5 text-gold-dark" />
                      {pkg.duration[language]}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-espresso">
                    {pkg.name[language]}
                  </h3>
                  <p className="text-sm text-espresso-light font-medium">
                    {pkg.subtitle[language]}
                  </p>

                  <ul className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {pkg.includes[language].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs sm:text-sm text-espresso-light"
                      >
                        <CheckCircle2 className="w-4 h-4 text-gold-dark shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex md:flex-col items-center md:items-end justify-between border-t md:border-t-0 pt-4 md:pt-0 border-borderWarm shrink-0">
                  <div className="text-left md:text-right">
                    {pkg.originalPrice && (
                      <span className="block text-xs text-taupe line-through">
                        ${pkg.originalPrice.toFixed(2)}
                      </span>
                    )}
                    <span className="font-serif text-3xl font-bold text-espresso">
                      ${pkg.price.toFixed(2)}
                    </span>
                    <span className="block text-[11px] font-semibold text-gold-dark mt-0.5">
                      + ${pkg.sittingFee.toFixed(2)}{' '}
                      {language === 'en' ? 'sitting fee at appt' : 'tarifa de cita'}
                    </span>
                  </div>

                  <div
                    className={cn(
                      'mt-3 px-4 py-1.5 rounded-full text-xs font-semibold border transition-colors',
                      isSelected
                        ? 'bg-espresso text-gold border-espresso'
                        : 'bg-canvas text-espresso border-borderWarm'
                    )}
                  >
                    {isSelected
                      ? language === 'en'
                        ? '✓ Selected Package'
                        : '✓ Paquete Seleccionado'
                      : language === 'en'
                      ? 'Select Package'
                      : 'Seleccionar'}
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
