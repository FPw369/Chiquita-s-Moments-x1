'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, Phone } from 'lucide-react';
import { useStudio } from './StudioContext';

export function PromoBanner() {
  const { t, selectPackageAndPrefill } = useStudio();

  return (
    <div className="bg-espresso text-canvas border-b border-gold/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm">
        <div className="flex items-center gap-2.5 text-center sm:text-left">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gold text-espresso font-bold text-[11px] tracking-wider uppercase shrink-0">
            <Sparkles className="w-3 h-3" />
            {t.promoBanner.badge}
          </span>
          <p className="font-medium text-canvas/95 leading-snug">
            {t.promoBanner.text}
          </p>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <div className="hidden xl:flex items-center gap-3 text-xs text-gold-muted border-r border-canvas/15 pr-4">
            <a
              href="tel:7083597234"
              className="hover:text-gold transition-colors inline-flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-gold" />
              Drew: 708-359-7234
            </a>
            <span>•</span>
            <a
              href="tel:3233713512"
              className="hover:text-gold transition-colors inline-flex items-center gap-1"
            >
              Yolanda (ES): 323-371-3512
            </a>
          </div>
          <Link
            href="/booking"
            onClick={() => selectPackageAndPrefill('promo-1995')}
            className="inline-flex items-center gap-1.5 font-semibold text-gold hover:text-gold-light underline-offset-4 hover:underline transition-colors"
          >
            <span>{t.promoBanner.cta}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
