'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Camera, Calendar, Menu, X, Sparkles, CheckCircle2 } from 'lucide-react';
import { useStudio } from './StudioContext';
import { LanguageSwitch } from './LanguageSwitch';
import { Button, cn } from '@/components/ui/Button';

export function Navbar() {
  const pathname = usePathname();
  const { t, confirmedBookings } = useStudio();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/#special-offer', label: t.nav.specialOffer },
    { href: '/#styles', label: t.nav.galleryStyles },
    { href: '/backdrops', label: t.nav.backdrops },
    { href: '/proofing', label: t.nav.proofing },
    { href: '/contact', label: t.nav.contact },
  ];

  const isActive = (href: string) => {
    if (href.startsWith('/#')) return false;
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 bg-canvas/95 backdrop-blur-md border-b border-borderWarm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-11 h-11 rounded-xl bg-espresso text-gold flex items-center justify-center shadow-sm border border-gold/40 group-hover:bg-gold group-hover:text-espresso transition-colors">
            <Camera className="w-5 h-5" />
          </div>
          <div>
            <span className="block font-serif text-xl sm:text-2xl font-bold tracking-tight text-espresso leading-none">
              Chiquita&apos;s Moments
            </span>
            <span className="block text-[11px] uppercase tracking-[0.22em] text-gold-dark font-semibold mt-1">
              {t.nav.brandSubtitle}
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                  active
                    ? 'bg-gold-light text-espresso font-semibold'
                    : 'text-espresso-light hover:text-espresso hover:bg-taupe-bg/60'
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Controls */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitch />

          {confirmedBookings.length > 0 && (
            <Link
              href="/booking"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 transition-colors"
              title={confirmedBookings[0].referenceId}
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>{confirmedBookings[0].referenceId}</span>
            </Link>
          )}

          <Link href="/booking">
            <Button variant="gold" size="md">
              <Calendar className="w-4 h-4" />
              <span>{t.nav.bookSession}</span>
            </Button>
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageSwitch />
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="p-2.5 rounded-xl bg-surface border border-borderWarm text-espresso hover:bg-taupe-bg"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface border-b border-borderWarm px-4 pt-3 pb-6 space-y-3 shadow-editorial-lg">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'px-4 py-2.5 rounded-xl text-sm font-medium transition-colors',
                  isActive(link.href)
                    ? 'bg-gold-light text-espresso font-semibold'
                    : 'text-espresso-light hover:bg-taupe-bg'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-2 border-t border-borderWarm flex flex-col gap-2.5">
            <Link href="/booking" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="gold" fullWidth>
                <Sparkles className="w-4 h-4" />
                <span>{t.nav.bookSession} — $19.95 Special</span>
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
