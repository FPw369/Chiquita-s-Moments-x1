'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  Phone,
  ShieldAlert,
  Sparkles,
  UserCheck,
  Users,
} from 'lucide-react';
import { useStudio } from '@/components/layout/StudioContext';
import { DEFAULT_TIME_SLOTS } from '@/data/translations';
import { BACKDROPS, STUDIO_PACKAGES } from '@/data/backdrops';
import { StepIndicator } from '@/components/booking/StepIndicator';
import { SessionSelector } from '@/components/booking/SessionSelector';
import { BackdropSelector } from '@/components/booking/BackdropSelector';
import { SummaryCard } from '@/components/booking/SummaryCard';
import { Button, cn } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';

export default function BookingEnginePage() {
  const {
    language,
    t,
    bookingForm,
    updateBookingForm,
    bookingStep,
    setBookingStep,
    latestConfirmation,
    clearLatestConfirmation,
    confirmCurrentBooking,
    confirmedBookings,
  } = useStudio();

  const [formError, setFormError] = useState<string>('');

  const selectedPackage =
    STUDIO_PACKAGES.find((p) => p.id === bookingForm.packageId) || STUDIO_PACKAGES[0];
  const selectedBackdrop =
    BACKDROPS.find((b) => b.code === bookingForm.backdropCode) || BACKDROPS[0];

  // Generate 6 quick-pick upcoming dates
  const upcomingDates = React.useMemo(() => {
    const list: { iso: string; label: string; dayName: string }[] = [];
    for (let i = 1; i <= 6; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      const iso = d.toISOString().split('T')[0];
      const dayName = d.toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', {
        weekday: 'short',
      });
      const label = d.toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', {
        month: 'short',
        day: 'numeric',
      });
      list.push({ iso, label, dayName });
    }
    return list;
  }, [language]);

  const handleNextStep = () => {
    setFormError('');
    if (bookingStep === 4) {
      if (!bookingForm.clientName.trim() || !bookingForm.clientPhone.trim()) {
        setFormError(
          language === 'en'
            ? 'Please enter your name and phone number so Drew or Yolanda can confirm your sitting.'
            : 'Por favor ingrese su nombre y número de teléfono para que Yolanda o Drew confirmen su cita.'
        );
        return;
      }
    }
    setBookingStep(Math.min(5, bookingStep + 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevStep = () => {
    setFormError('');
    setBookingStep(Math.max(1, bookingStep - 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleConfirmBooking = () => {
    if (!bookingForm.clientName.trim()) {
      updateBookingForm({
        clientName: language === 'en' ? 'Valued Studio Family' : 'Familia Invitada',
      });
    }
    if (!bookingForm.clientPhone.trim()) {
      updateBookingForm({ clientPhone: '(708) 555-0199' });
    }
    confirmCurrentBooking();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Page Header */}
      <div className="max-w-3xl space-y-3">
        <Badge variant="gold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.bookingPage.eyebrow}</span>
        </Badge>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-espresso">
          {t.bookingPage.title}
        </h1>
        <p className="text-sm sm:text-base text-espresso-light">
          {t.bookingPage.subtitle}
        </p>
      </div>

      {/* Instant Animated Confirmation Screen */}
      {latestConfirmation ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35 }}
        >
          <Card className="p-8 sm:p-12 border-2 border-gold shadow-editorial-lg bg-surface space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-borderWarm pb-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                    Chiquita&apos;s Moments • Studio Slot Confirmed
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso mt-1">
                    {t.bookingPage.confirmedTitle}
                  </h2>
                  <p className="text-sm sm:text-base text-espresso-light mt-1">
                    {t.bookingPage.confirmedSubtitle}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-espresso text-canvas text-center shrink-0 border border-gold">
                <span className="block text-[10px] uppercase tracking-widest text-gold font-bold">
                  {t.bookingPage.referenceIdLabel}
                </span>
                <span className="font-mono text-2xl font-bold text-canvas tracking-wider mt-0.5 block">
                  {latestConfirmation.referenceId}
                </span>
              </div>
            </div>

            {/* Confirmation Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-canvas border border-borderWarm space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-gold-dark">
                  {t.bookingPage.packageTotalLabel}
                </div>
                <div className="font-serif text-lg font-bold text-espresso">
                  {selectedPackage.name[language]}
                </div>
                <div className="text-xs text-espresso-light">
                  Finish:{' '}
                  <strong className="uppercase">{latestConfirmation.finish}</strong> •
                  Backdrop Code: <strong>{latestConfirmation.backdropCode}</strong>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-canvas border border-borderWarm space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-gold-dark">
                  {t.bookingPage.selectDateLabel} &amp; Slot
                </div>
                <div className="font-serif text-lg font-bold text-espresso">
                  {latestConfirmation.date} @ {latestConfirmation.timeLabel}
                </div>
                <div className="text-xs text-espresso-light">
                  {latestConfirmation.clientName} ({latestConfirmation.familyCount}{' '}
                  {language === 'en' ? 'family members' : 'integrantes'})
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-gold-light/40 border border-gold/50 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-espresso">
                  {t.bookingPage.routingBoxTitle}
                </div>
                <div className="font-serif text-lg font-bold text-espresso">
                  {latestConfirmation.preferredLanguage === 'es'
                    ? 'Yolanda (Español)'
                    : 'Drew (English)'}
                </div>
                <a
                  href={
                    latestConfirmation.preferredLanguage === 'es'
                      ? 'tel:3233713512'
                      : 'tel:7083597234'
                  }
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-gold-dark hover:underline"
                >
                  <Phone className="w-4 h-4" />
                  <span>
                    {latestConfirmation.preferredLanguage === 'es'
                      ? '323-371-3512'
                      : '708-359-7234'}
                  </span>
                </a>
              </div>
            </div>

            {/* Balance & Sitting Fee Summary */}
            <div className="p-5 rounded-2xl bg-taupe-bg/60 border border-borderWarm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1 text-xs sm:text-sm">
                <div className="font-bold text-espresso">
                  {t.bookingPage.sittingFeeDueNowLabel}: $
                  {latestConfirmation.sittingFeePaid.toFixed(2)} •{' '}
                  {t.bookingPage.balanceAtStudioLabel}: $
                  {latestConfirmation.balanceDueAtStudio.toFixed(2)}
                </div>
                <p className="text-espresso-light">
                  {t.specialOffer.sittingFeeCallout}
                </p>
              </div>

              <Button variant="primary" onClick={clearLatestConfirmation}>
                <span>{t.bookingPage.newBookingBtn}</span>
              </Button>
            </div>
          </Card>
        </motion.div>
      ) : (
        <>
          {/* Step Indicator Bar */}
          <StepIndicator
            currentStep={bookingStep}
            onSelectStep={(s) => setBookingStep(s)}
          />

          {/* Main Wizard + Sticky Summary Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Wizard Content */}
            <div className="lg:col-span-8 space-y-6">
              <Card className="p-6 sm:p-8">
                {/* STEP 1: PACKAGE SELECTION */}
                {bookingStep === 1 && <SessionSelector />}

                {/* STEP 2: FINISH & BACKDROP */}
                {bookingStep === 2 && <BackdropSelector />}

                {/* STEP 3: DATE & TIME SLOT PICKER */}
                {bookingStep === 3 && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-espresso">
                        {t.bookingPage.step3Title}
                      </h2>
                      <p className="text-sm sm:text-base text-taupe mt-1">
                        {t.bookingPage.step3Subtitle}
                      </p>
                    </div>

                    {/* Quick Date Pills + Calendar Date Input */}
                    <div className="space-y-4">
                      <label className="block text-sm font-semibold text-espresso uppercase tracking-wider">
                        {t.bookingPage.selectDateLabel}
                      </label>

                      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
                        {upcomingDates.map((d) => {
                          const active = bookingForm.date === d.iso;
                          return (
                            <button
                              key={d.iso}
                              type="button"
                              onClick={() => updateBookingForm({ date: d.iso })}
                              className={cn(
                                'p-3 rounded-xl border text-center transition-all',
                                active
                                  ? 'bg-espresso text-gold border-espresso shadow'
                                  : 'bg-canvas text-espresso border-borderWarm hover:border-gold'
                              )}
                            >
                              <span className="block text-[11px] uppercase opacity-75">
                                {d.dayName}
                              </span>
                              <span className="font-serif text-sm font-bold mt-0.5 block">
                                {d.label}
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      <div className="max-w-xs pt-1">
                        <Input
                          type="date"
                          value={bookingForm.date}
                          onChange={(e) => updateBookingForm({ date: e.target.value })}
                          aria-label={t.bookingPage.selectDateLabel}
                        />
                      </div>
                    </div>

                    {/* Time Slots Grid */}
                    <div className="space-y-3">
                      <label className="block text-sm font-semibold text-espresso uppercase tracking-wider">
                        {t.bookingPage.selectTimeLabel}
                      </label>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {DEFAULT_TIME_SLOTS.map((slot) => {
                          const isSelected = bookingForm.timeSlotId === slot.id;
                          return (
                            <button
                              key={slot.id}
                              type="button"
                              disabled={!slot.available}
                              onClick={() =>
                                updateBookingForm({
                                  timeSlotId: slot.id,
                                  timeLabel: slot.time,
                                })
                              }
                              className={cn(
                                'p-4 rounded-2xl border text-left flex items-center justify-between transition-all',
                                !slot.available
                                  ? 'bg-taupe-bg/50 border-borderWarm opacity-50 cursor-not-allowed'
                                  : isSelected
                                  ? 'bg-gold-light/40 border-gold ring-2 ring-gold shadow-heirloom'
                                  : 'bg-surface border-borderWarm hover:border-gold/60'
                              )}
                            >
                              <div className="flex items-center gap-3">
                                <Clock className="w-4 h-4 text-gold-dark" />
                                <div>
                                  <div className="font-serif text-base font-bold text-espresso">
                                    {slot.time}
                                  </div>
                                  <div className="text-xs text-taupe capitalize">
                                    {slot.period} Studio Session
                                  </div>
                                </div>
                              </div>

                              {slot.available ? (
                                <span
                                  className={cn(
                                    'px-2.5 py-1 rounded-full text-xs font-semibold',
                                    isSelected
                                      ? 'bg-espresso text-gold'
                                      : 'bg-emerald-50 text-emerald-800'
                                  )}
                                >
                                  {slot.spotsLeft} {t.bookingPage.spotsRemaining}
                                </span>
                              ) : (
                                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-taupe-bg text-taupe">
                                  {t.bookingPage.bookedOut}
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 4: CONTACT & BILINGUAL SPECIALIST ROUTING */}
                {bookingStep === 4 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-espresso">
                        {t.bookingPage.step4Title}
                      </h2>
                      <p className="text-sm sm:text-base text-taupe mt-1">
                        {t.bookingPage.step4Subtitle}
                      </p>
                    </div>

                    {formError && (
                      <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs sm:text-sm text-red-700 font-medium">
                        {formError}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        label={t.bookingPage.nameLabel}
                        placeholder={t.bookingPage.namePlaceholder}
                        value={bookingForm.clientName}
                        onChange={(e) =>
                          updateBookingForm({ clientName: e.target.value })
                        }
                      />
                      <Input
                        label={t.bookingPage.phoneLabel}
                        placeholder={t.bookingPage.phonePlaceholder}
                        value={bookingForm.clientPhone}
                        onChange={(e) =>
                          updateBookingForm({ clientPhone: e.target.value })
                        }
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        label={t.bookingPage.emailLabel}
                        type="email"
                        placeholder={t.bookingPage.emailPlaceholder}
                        value={bookingForm.clientEmail}
                        onChange={(e) =>
                          updateBookingForm({ clientEmail: e.target.value })
                        }
                      />

                      <div>
                        <label className="block text-sm font-medium text-espresso mb-1.5">
                          {t.bookingPage.familySizeLabel}
                        </label>
                        <div className="flex items-center gap-2">
                          {[1, 2, 4, 6, 8, 10].map((num) => (
                            <button
                              key={num}
                              type="button"
                              onClick={() => updateBookingForm({ familyCount: num })}
                              className={cn(
                                'flex-1 py-2.5 rounded-xl text-xs font-bold border transition-all',
                                bookingForm.familyCount === num
                                  ? 'bg-espresso text-gold border-espresso'
                                  : 'bg-canvas text-espresso border-borderWarm hover:border-gold'
                              )}
                            >
                              {num === 10 ? '10+' : num}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Preferred Specialist Language Toggle */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-espresso">
                        {t.bookingPage.preferredLangLabel}
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <button
                          type="button"
                          onClick={() =>
                            updateBookingForm({ preferredLanguage: 'en' })
                          }
                          className={cn(
                            'p-4 rounded-2xl border text-left transition-all',
                            bookingForm.preferredLanguage === 'en'
                              ? 'bg-gold-light/40 border-gold ring-2 ring-gold'
                              : 'bg-canvas border-borderWarm'
                          )}
                        >
                          <div className="font-serif font-bold text-espresso">
                            English — Drew
                          </div>
                          <div className="text-xs text-espresso-light mt-0.5">
                            Direct Line: 708-359-7234
                          </div>
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            updateBookingForm({ preferredLanguage: 'es' })
                          }
                          className={cn(
                            'p-4 rounded-2xl border text-left transition-all',
                            bookingForm.preferredLanguage === 'es'
                              ? 'bg-gold-light/40 border-gold ring-2 ring-gold'
                              : 'bg-canvas border-borderWarm'
                          )}
                        >
                          <div className="font-serif font-bold text-espresso">
                            Español — Yolanda
                          </div>
                          <div className="text-xs text-espresso-light mt-0.5">
                            Línea Directa: 323-371-3512
                          </div>
                        </button>
                      </div>
                    </div>

                    {/* Special Notes */}
                    <div>
                      <label className="block text-sm font-medium text-espresso mb-1.5">
                        {t.bookingPage.notesLabel}
                      </label>
                      <textarea
                        rows={3}
                        value={bookingForm.specialNotes}
                        onChange={(e) =>
                          updateBookingForm({ specialNotes: e.target.value })
                        }
                        placeholder={t.bookingPage.notesPlaceholder}
                        className="w-full rounded-xl bg-surface border border-borderWarm px-4 py-2.5 text-sm text-espresso placeholder:text-taupe/70 focus:outline-none focus:ring-2 focus:ring-gold/50"
                      />
                    </div>

                    {/* Specialist Routing Callout */}
                    <div className="p-4 rounded-2xl bg-taupe-bg/70 border border-borderWarm space-y-1.5 text-xs">
                      <div className="font-bold text-espresso flex items-center gap-1.5">
                        <UserCheck className="w-4 h-4 text-gold-dark" />
                        <span>{t.bookingPage.routingBoxTitle}</span>
                      </div>
                      <p className="text-espresso-light">{t.bookingPage.routingEn}</p>
                      <p className="text-espresso-light">{t.bookingPage.routingEs}</p>
                    </div>
                  </div>
                )}

                {/* STEP 5: FINAL REVIEW & CONFIRM */}
                {bookingStep === 5 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-espresso">
                        {t.bookingPage.step5Title}
                      </h2>
                      <p className="text-sm sm:text-base text-taupe mt-1">
                        {t.bookingPage.step5Subtitle}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-2xl bg-canvas border border-borderWarm space-y-1">
                        <span className="text-xs text-taupe uppercase font-bold">
                          {t.bookingPage.packageTotalLabel}
                        </span>
                        <div className="font-serif text-lg font-bold text-espresso">
                          {selectedPackage.name[language]}
                        </div>
                        <div className="text-sm font-bold text-gold-dark">
                          ${selectedPackage.price.toFixed(2)}
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-canvas border border-borderWarm space-y-1">
                        <span className="text-xs text-taupe uppercase font-bold">
                          {t.bookingPage.selectBackdropLabel}
                        </span>
                        <div className="font-serif text-lg font-bold text-espresso">
                          {selectedBackdrop.code} — {selectedBackdrop.name[language]}
                        </div>
                        <div className="text-xs text-espresso-light capitalize">
                          Finish: <strong>{bookingForm.finish}</strong>
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-canvas border border-borderWarm space-y-1">
                        <span className="text-xs text-taupe uppercase font-bold">
                          {t.bookingPage.selectDateLabel}
                        </span>
                        <div className="font-serif text-lg font-bold text-espresso">
                          {bookingForm.date} • {bookingForm.timeLabel}
                        </div>
                        <div className="text-xs text-espresso-light">
                          {bookingForm.familyCount}{' '}
                          {language === 'en' ? 'Family Members' : 'Integrantes'}
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-canvas border border-borderWarm space-y-1">
                        <span className="text-xs text-taupe uppercase font-bold">
                          Client &amp; Coordinator
                        </span>
                        <div className="font-serif text-lg font-bold text-espresso">
                          {bookingForm.clientName ||
                            (language === 'en' ? 'Family Guest' : 'Familia Invitada')}
                        </div>
                        <div className="text-xs text-espresso-light">
                          {bookingForm.preferredLanguage === 'es'
                            ? 'Yolanda (323-371-3512)'
                            : 'Drew (708-359-7234)'}
                        </div>
                      </div>
                    </div>

                    {/* $10 Sitting Fee Policy Highlight */}
                    <div className="p-5 rounded-2xl bg-gold-light/50 border-2 border-gold space-y-2">
                      <div className="flex items-center gap-2 font-serif text-lg font-bold text-espresso">
                        <ShieldAlert className="w-5 h-5 text-gold-dark shrink-0" />
                        <span>{t.bookingPage.sittingFeeNoticeTitle}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-espresso-light leading-relaxed">
                        {t.bookingPage.sittingFeeNoticeBody}
                      </p>
                    </div>
                  </div>
                )}

                {/* Wizard Navigation Footer */}
                <div className="mt-8 pt-6 border-t border-borderWarm flex items-center justify-between gap-4">
                  {bookingStep > 1 ? (
                    <Button variant="secondary" onClick={handlePrevStep}>
                      <ArrowLeft className="w-4 h-4" />
                      <span>{t.bookingPage.backBtn}</span>
                    </Button>
                  ) : (
                    <div />
                  )}

                  {bookingStep < 5 ? (
                    <Button variant="gold" size="lg" onClick={handleNextStep}>
                      <span>{t.bookingPage.nextStepBtn}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  ) : (
                    <Button variant="gold" size="lg" onClick={handleConfirmBooking}>
                      <Sparkles className="w-5 h-5" />
                      <span>{t.bookingPage.confirmAndHoldBtn}</span>
                    </Button>
                  )}
                </div>
              </Card>

              {/* Previously Confirmed Bookings from LocalStorage */}
              {confirmedBookings.length > 0 && (
                <Card className="p-6 bg-surface space-y-3">
                  <h3 className="font-serif text-lg font-bold text-espresso">
                    {language === 'en'
                      ? 'Your Saved Studio Reservations'
                      : 'Sus Reservas Guardadas en este Dispositivo'}
                  </h3>
                  <div className="space-y-2">
                    {confirmedBookings.map((b) => (
                      <div
                        key={b.referenceId}
                        className="p-3.5 rounded-xl bg-canvas border border-borderWarm flex flex-wrap items-center justify-between gap-2 text-xs"
                      >
                        <div>
                          <span className="font-mono font-bold text-espresso mr-2">
                            {b.referenceId}
                          </span>
                          <span className="text-espresso-light">
                            {b.date} @ {b.timeLabel} • Set: <strong>{b.backdropCode}</strong> ({b.finish})
                          </span>
                        </div>
                        <Badge variant="success">Reserved</Badge>
                      </div>
                    ))}
                  </div>
                </Card>
              )}
            </div>

            {/* Right Sticky Summary Card */}
            <div className="lg:col-span-4">
              <SummaryCard />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
