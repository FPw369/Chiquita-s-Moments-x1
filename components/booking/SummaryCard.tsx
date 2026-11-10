'use client';

import React from 'react';
import { Calendar, Clock, Palette, Phone, ShieldAlert, Sparkles, Users } from 'lucide-react';
import { BACKDROPS, STUDIO_PACKAGES } from '@/data/backdrops';
import { useStudio } from '@/components/layout/StudioContext';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export function SummaryCard() {
  const { language, t, bookingForm } = useStudio();

  const selectedPackage =
    STUDIO_PACKAGES.find((p) => p.id === bookingForm.packageId) || STUDIO_PACKAGES[0];
  const selectedBackdrop =
    BACKDROPS.find((b) => b.code === bookingForm.backdropCode) || BACKDROPS[0];

  return (
    <Card className="p-6 bg-surface sticky top-28 space-y-5">
      <div className="flex items-center justify-between border-b border-borderWarm pb-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-widest text-gold-dark">
            Chiquita&apos;s Moments
          </span>
          <h3 className="font-serif text-xl font-bold text-espresso">
            {language === 'en' ? 'Your Session Summary' : 'Resumen de su Sesión'}
          </h3>
        </div>
        <Badge variant="gold">12×18</Badge>
      </div>

      {/* Selected Package */}
      <div className="space-y-1.5">
        <div className="text-xs font-semibold uppercase tracking-wider text-taupe">
          {t.bookingPage.packageTotalLabel}
        </div>
        <div className="font-serif text-lg font-bold text-espresso">
          {selectedPackage.name[language]}
        </div>
        <div className="text-xs text-espresso-light">
          {selectedPackage.duration[language]}
        </div>
      </div>

      {/* Selected Backdrop & Finish */}
      <div className="p-3.5 rounded-xl bg-canvas border border-borderWarm flex items-center gap-3.5">
        <img
          src={selectedBackdrop.imageUrl}
          alt={selectedBackdrop.name[language]}
          className="w-14 h-14 rounded-lg object-cover shrink-0 border border-borderWarm"
        />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <span className="px-2 py-0.5 rounded bg-espresso text-gold text-[10px] font-bold">
              {selectedBackdrop.code}
            </span>
            <span className="text-xs font-semibold text-gold-dark capitalize flex items-center gap-1">
              <Palette className="w-3 h-3" />
              {bookingForm.finish === 'antique'
                ? language === 'en'
                  ? 'Antique Sepia'
                  : 'Antiguo Sepia'
                : language === 'en'
                ? 'Vivid Color'
                : 'Color Vivo'}
            </span>
          </div>
          <div className="font-serif text-sm font-bold text-espresso truncate mt-1">
            {selectedBackdrop.name[language]}
          </div>
        </div>
      </div>

      {/* Date, Time & Group Size */}
      <div className="grid grid-cols-2 gap-3 text-xs">
        <div className="p-3 rounded-xl bg-taupe-bg/60 border border-borderWarm">
          <div className="text-taupe flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-gold-dark" />
            <span>{t.bookingPage.selectDateLabel}</span>
          </div>
          <div className="font-semibold text-espresso mt-1">
            {bookingForm.date || '—'}
          </div>
        </div>

        <div className="p-3 rounded-xl bg-taupe-bg/60 border border-borderWarm">
          <div className="text-taupe flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-gold-dark" />
            <span>{language === 'en' ? 'Time Slot' : 'Horario'}</span>
          </div>
          <div className="font-semibold text-espresso mt-1">
            {bookingForm.timeLabel || '11:00 AM'}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs px-1 text-espresso-light">
        <span className="inline-flex items-center gap-1.5">
          <Users className="w-3.5 h-3.5 text-gold-dark" />
          {t.bookingPage.familySizeLabel}:
        </span>
        <strong className="text-espresso">
          {bookingForm.familyCount}{' '}
          {language === 'en' ? 'Members' : 'Integrantes'}
        </strong>
      </div>

      {/* Pricing Breakdown */}
      <div className="border-t border-borderWarm pt-4 space-y-2.5 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-espresso-light">
            {t.bookingPage.sittingFeeDueNowLabel}
          </span>
          <span className="font-semibold text-espresso">
            ${selectedPackage.sittingFee.toFixed(2)}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-espresso-light">
            {t.bookingPage.balanceAtStudioLabel}
          </span>
          <div className="text-right">
            {selectedPackage.originalPrice && (
              <span className="text-xs text-taupe line-through mr-1.5">
                ${selectedPackage.originalPrice.toFixed(2)}
              </span>
            )}
            <span className="font-serif text-xl font-bold text-espresso">
              ${selectedPackage.price.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      {/* Sitting Fee Callout */}
      <div className="p-3.5 rounded-xl bg-gold-light/60 border border-gold/40 text-xs text-espresso space-y-1">
        <div className="font-bold flex items-center gap-1.5 text-espresso">
          <ShieldAlert className="w-4 h-4 text-gold-dark shrink-0" />
          <span>{t.bookingPage.sittingFeeNoticeTitle}</span>
        </div>
        <p className="text-espresso-light leading-relaxed">
          {t.specialOffer.sittingFeeCallout}
        </p>
      </div>

      {/* Specialist Routing Footer */}
      <div className="pt-2 border-t border-borderWarm text-xs text-taupe space-y-1">
        <div className="font-semibold text-espresso flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
          <span>
            {bookingForm.preferredLanguage === 'es'
              ? 'Coordinadora: Yolanda (Español)'
              : 'Coordinator: Drew (English)'}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <Phone className="w-3 h-3 text-gold-dark" />
          <span>
            {bookingForm.preferredLanguage === 'es'
              ? '323-371-3512'
              : '708-359-7234'}
          </span>
        </div>
      </div>
    </Card>
  );
}
