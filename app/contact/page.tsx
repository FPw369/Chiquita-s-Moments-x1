'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import {
  Calendar,
  Clock,
  HelpCircle,
  Languages,
  Phone,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { STUDIO_FAQS } from '@/data/mockProofs';
import { useStudio } from '@/components/layout/StudioContext';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Accordion } from '@/components/ui/Accordion';

export default function ContactAndFaqPage() {
  const router = useRouter();
  const { language, setLanguage, t, updateBookingForm } = useStudio();

  const accordionItems = STUDIO_FAQS.map((faq) => ({
    id: faq.id,
    question: faq.question[language],
    answer: faq.answer[language],
    badge:
      faq.category === 'special'
        ? '$19.95 Special Event'
        : faq.category === 'wardrobe'
        ? language === 'en'
          ? 'Wardrobe & Props'
          : 'Vestuario y Utilería'
        : faq.category === 'booking'
        ? language === 'en'
          ? 'Sitting Fee & Appointments'
          : 'Tarifa de Cita y Reservas'
        : language === 'en'
        ? 'Print Turnaround'
        : 'Entrega de Impresiones',
  }));

  const handleBookWithSpecialist = (lang: 'en' | 'es') => {
    setLanguage(lang);
    updateBookingForm({ preferredLanguage: lang });
    router.push('/booking');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <Badge variant="gold">
          <Languages className="w-3.5 h-3.5" />
          <span>{t.contactPage.eyebrow}</span>
        </Badge>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-espresso">
          {t.contactPage.title}
        </h1>
        <p className="text-sm sm:text-base text-espresso-light leading-relaxed">
          {t.contactPage.subtitle}
        </p>
      </div>

      {/* Dual Bilingual Specialist Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* English Specialist Card: Drew */}
        <Card hoverable className="p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Badge variant="espresso">English Coordinator</Badge>
              <span className="text-xs font-semibold text-taupe">
                Info &amp; Appointments
              </span>
            </div>

            <div>
              <h2 className="font-serif text-3xl font-bold text-espresso">Drew</h2>
              <p className="text-sm text-espresso-light mt-1">
                {t.contactPage.englishSpecialistRole}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-canvas border border-borderWarm space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-taupe">
                {t.contactPage.directLineLabel}
              </span>
              <a
                href="tel:7083597234"
                className="flex items-center gap-2.5 font-serif text-2xl sm:text-3xl font-bold text-espresso hover:text-gold-dark transition-colors pt-1"
              >
                <Phone className="w-6 h-6 text-gold-dark shrink-0" />
                <span>708-359-7234</span>
              </a>
            </div>

            <ul className="space-y-2 text-xs sm:text-sm text-espresso-light">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-gold-dark shrink-0" />
                <span>
                  $19.95 12×18 Portrait Special &amp; Extended Family Sittings
                </span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-gold-dark shrink-0" />
                <span>
                  Backdrop code selection &amp; antique prop styling questions
                </span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-borderWarm flex flex-col sm:flex-row gap-3">
            <a href="tel:7083597234" className="flex-1">
              <Button variant="primary" fullWidth>
                <Phone className="w-4 h-4" />
                <span>{t.contactPage.callNowBtn} (708-359-7234)</span>
              </Button>
            </a>
            <Button
              variant="secondary"
              onClick={() => handleBookWithSpecialist('en')}
            >
              <Calendar className="w-4 h-4" />
              <span>Book Online (EN)</span>
            </Button>
          </div>
        </Card>

        {/* Spanish Specialist Card: Yolanda */}
        <Card
          hoverable
          highlighted
          className="p-8 bg-gold-light/25 flex flex-col justify-between space-y-6"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Badge variant="gold">Atención en Español</Badge>
              <span className="text-xs font-semibold text-gold-dark">
                Información y Citas
              </span>
            </div>

            <div>
              <h2 className="font-serif text-3xl font-bold text-espresso">
                Yolanda
              </h2>
              <p className="text-sm text-espresso-light mt-1">
                {t.contactPage.spanishSpecialistRole}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface border border-gold/50 space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">
                {t.contactPage.directLineLabel}
              </span>
              <a
                href="tel:3233713512"
                className="flex items-center gap-2.5 font-serif text-2xl sm:text-3xl font-bold text-espresso hover:text-gold-dark transition-colors pt-1"
              >
                <Phone className="w-6 h-6 text-gold-dark shrink-0" />
                <span>323-371-3512</span>
              </a>
            </div>

            <ul className="space-y-2 text-xs sm:text-sm text-espresso-light">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-gold-dark shrink-0" />
                <span>
                  Asistencia completa en Español para el Especial 12×18 de $19.95
                </span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-gold-dark shrink-0" />
                <span>
                  Coordinación de vestuario antiguo para bebés, niños y familias
                </span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-gold/30 flex flex-col sm:flex-row gap-3">
            <a href="tel:3233713512" className="flex-1">
              <Button variant="gold" fullWidth>
                <Phone className="w-4 h-4" />
                <span>Llamar a Yolanda (323-371-3512)</span>
              </Button>
            </a>
            <Button
              variant="secondary"
              onClick={() => handleBookWithSpecialist('es')}
            >
              <Calendar className="w-4 h-4" />
              <span>Reservar (ES)</span>
            </Button>
          </div>
        </Card>
      </div>

      {/* Studio Hours & Policy Banner */}
      <Card className="p-6 sm:p-8 bg-espresso text-canvas border border-gold/40">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gold/20 text-gold flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-gold">
                {t.contactPage.hoursTitle}
              </h3>
              <p className="text-sm text-canvas/85 mt-1">
                {t.contactPage.hoursText}
              </p>
            </div>
          </div>

          <Button
            variant="gold"
            onClick={() => router.push('/booking')}
            className="shrink-0"
          >
            <Sparkles className="w-4 h-4" />
            <span>{t.nav.bookSession}</span>
          </Button>
        </div>
      </Card>

      {/* Interactive Bilingual FAQ Accordion Section */}
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <Badge variant="gold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t.contactPage.faqEyebrow}</span>
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso">
            {t.contactPage.faqTitle}
          </h2>
          <p className="text-sm sm:text-base text-espresso-light">
            {t.contactPage.faqSubtitle}
          </p>
        </div>

        <Accordion items={accordionItems} defaultOpenId="faq-1" />
      </div>
    </div>
  );
}
