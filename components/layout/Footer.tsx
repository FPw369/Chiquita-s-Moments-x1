'use client';

import React from 'react';
import Link from 'next/link';
import { Camera, Phone, Sparkles, ShieldCheck, Heart } from 'lucide-react';
import { useStudio } from './StudioContext';

export function Footer() {
  const { t, language } = useStudio();

  return (
    <footer className="bg-espresso text-canvas border-t border-gold/30 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gold text-espresso flex items-center justify-center font-bold">
                <Camera className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-serif text-xl font-bold text-canvas">
                  Chiquita&apos;s Moments
                </span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-gold font-semibold">
                  {t.nav.brandSubtitle}
                </span>
              </div>
            </div>
            <p className="text-sm text-canvas/75 leading-relaxed">
              {t.footer.tagline}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-canvas/5 border border-gold/30 text-xs text-gold-muted">
              <Sparkles className="w-3.5 h-3.5 text-gold shrink-0" />
              <span>12×18 Color or Antique • $19.95</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-serif text-base font-semibold text-gold mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-sm text-canvas/80">
              <li>
                <Link href="/" className="hover:text-gold transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/#special-offer" className="hover:text-gold transition-colors">
                  {t.nav.specialOffer} ($19.95)
                </Link>
              </li>
              <li>
                <Link href="/backdrops" className="hover:text-gold transition-colors">
                  {t.nav.backdrops} (M122V, BrickWall, SR177V)
                </Link>
              </li>
              <li>
                <Link href="/booking" className="hover:text-gold transition-colors">
                  {t.nav.bookSession}
                </Link>
              </li>
              <li>
                <Link href="/proofing" className="hover:text-gold transition-colors">
                  {t.nav.proofing} (PIN: MOMENTS2026)
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Specialist Phone Lines */}
          <div>
            <h4 className="font-serif text-base font-semibold text-gold mb-4">
              {t.footer.contactHeading}
            </h4>
            <div className="space-y-3.5 text-sm">
              <a
                href="tel:7083597234"
                className="block p-3 rounded-xl bg-canvas/5 border border-canvas/10 hover:border-gold/50 transition-colors"
              >
                <div className="text-xs text-gold font-semibold uppercase tracking-wider">
                  English Inquiries • Drew
                </div>
                <div className="flex items-center gap-2 text-base font-semibold text-canvas mt-1">
                  <Phone className="w-4 h-4 text-gold" />
                  <span>708-359-7234</span>
                </div>
              </a>

              <a
                href="tel:3233713512"
                className="block p-3 rounded-xl bg-canvas/5 border border-canvas/10 hover:border-gold/50 transition-colors"
              >
                <div className="text-xs text-gold font-semibold uppercase tracking-wider">
                  Español • Yolanda
                </div>
                <div className="flex items-center gap-2 text-base font-semibold text-canvas mt-1">
                  <Phone className="w-4 h-4 text-gold" />
                  <span>323-371-3512</span>
                </div>
              </a>
            </div>
          </div>

          {/* Col 4: Studio Policy & Guarantee */}
          <div className="space-y-4">
            <h4 className="font-serif text-base font-semibold text-gold">
              {language === 'en' ? 'Studio Sitting Policy' : 'Política de Cita del Estudio'}
            </h4>
            <p className="text-xs text-canvas/75 leading-relaxed bg-canvas/5 p-3.5 rounded-xl border border-canvas/10">
              {t.footer.policyNote}
            </p>
            <div className="flex items-center gap-2 text-xs text-canvas/70">
              <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
              <span>
                {language === 'en'
                  ? 'Archival Lustre Paper & Authentic Sepia Grading'
                  : 'Papel Lustre de Archivo y Tono Sepia Auténtico'}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-canvas/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-canvas/60">
          <p>{t.footer.copyright}</p>
          <p className="inline-flex items-center gap-1.5">
            <span>Crafted for Heirloom Family Memories</span>
            <Heart className="w-3.5 h-3.5 text-gold fill-gold" />
          </p>
        </div>
      </div>
    </footer>
  );
}
