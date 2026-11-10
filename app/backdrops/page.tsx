'use client';

import React, { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Check,
  Eye,
  Heart,
  Palette,
  Search,
  Sparkles,
  Shirt,
  Camera,
  ArrowRight,
} from 'lucide-react';
import { BACKDROPS } from '@/data/backdrops';
import { Backdrop, BackdropCategory, FinishType } from '@/types';
import { useStudio } from '@/components/layout/StudioContext';
import { Button, cn } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';

export default function BackdropsCatalogPage() {
  const router = useRouter();
  const {
    language,
    t,
    bookingForm,
    selectBackdropAndPrefill,
    favoriteBackdrops,
    toggleFavoriteBackdrop,
  } = useStudio();

  const [selectedCategory, setSelectedCategory] = useState<BackdropCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [previewBackdrop, setPreviewBackdrop] = useState<Backdrop | null>(null);
  const [modalFinishPreview, setModalFinishPreview] = useState<FinishType>('color');
  const [catalogSheetOpen, setCatalogSheetOpen] = useState(false);

  const categoryTabs: { id: BackdropCategory; label: string }[] = [
    { id: 'all', label: t.backdropsPage.filters.all },
    { id: 'classic', label: t.backdropsPage.filters.classic },
    { id: 'architectural', label: t.backdropsPage.filters.architectural },
    { id: 'scenic', label: t.backdropsPage.filters.scenic },
    { id: 'holiday', label: t.backdropsPage.filters.holiday },
  ];

  const filteredBackdrops = useMemo(() => {
    return BACKDROPS.filter((b) => {
      if (selectedCategory !== 'all' && b.category !== selectedCategory) {
        return false;
      }
      if (favoritesOnly && !favoriteBackdrops.includes(b.code)) {
        return false;
      }
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchCode = b.code.toLowerCase().includes(q);
        const matchName =
          b.name.en.toLowerCase().includes(q) || b.name.es.toLowerCase().includes(q);
        const matchDesc =
          b.description.en.toLowerCase().includes(q) ||
          b.description.es.toLowerCase().includes(q);
        return matchCode || matchName || matchDesc;
      }
      return true;
    });
  }, [selectedCategory, favoritesOnly, favoriteBackdrops, searchQuery]);

  const handleSelectForSession = (code: string) => {
    selectBackdropAndPrefill(code);
    router.push('/booking');
  };

  const openBackdropLightbox = (backdrop: Backdrop) => {
    setPreviewBackdrop(backdrop);
    setModalFinishPreview(backdrop.recommendedFinish === 'antique' ? 'antique' : 'color');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-borderWarm pb-8">
        <div className="max-w-3xl space-y-3">
          <Badge variant="gold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.backdropsPage.eyebrow}</span>
          </Badge>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-espresso">
            {t.backdropsPage.title}
          </h1>
          <p className="text-sm sm:text-base text-espresso-light leading-relaxed">
            {t.backdropsPage.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <Button
            variant="secondary"
            size="md"
            onClick={() => setCatalogSheetOpen(true)}
          >
            <BookOpen className="w-4 h-4 text-gold-dark" />
            <span>
              {language === 'en'
                ? 'View Physical Catalog Sheet'
                : 'Ver Hoja Oficial de Códigos'}
            </span>
          </Button>
        </div>
      </div>

      {/* Filter & Search Controls */}
      <div className="bg-surface p-4 sm:p-5 rounded-2xl border border-borderWarm shadow-editorial space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-taupe absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.backdropsPage.searchPlaceholder}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-canvas border border-borderWarm text-sm text-espresso placeholder:text-taupe focus:outline-none focus:ring-2 focus:ring-gold/50"
            />
          </div>

          {/* Favorites Filter Toggle */}
          <button
            type="button"
            onClick={() => setFavoritesOnly((prev) => !prev)}
            className={cn(
              'inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border transition-all shrink-0',
              favoritesOnly
                ? 'bg-gold text-espresso border-gold shadow-sm'
                : 'bg-canvas text-espresso-light border-borderWarm hover:border-taupe'
            )}
          >
            <Heart
              className={cn('w-4 h-4', favoritesOnly && 'fill-espresso text-espresso')}
            />
            <span>
              {t.backdropsPage.favoritesOnly} ({favoriteBackdrops.length})
            </span>
          </button>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {categoryTabs.map((tab) => {
            const active = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedCategory(tab.id)}
                className={cn(
                  'px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all',
                  active
                    ? 'bg-espresso text-gold shadow-sm'
                    : 'bg-canvas text-espresso-light hover:bg-taupe-bg border border-borderWarm'
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Backdrop Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {filteredBackdrops.map((backdrop, idx) => {
          const isCurrentSessionBackdrop = bookingForm.backdropCode === backdrop.code;
          const isFav = favoriteBackdrops.includes(backdrop.code);

          return (
            <motion.div
              key={backdrop.code}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: idx * 0.03 }}
            >
              <Card
                hoverable
                highlighted={isCurrentSessionBackdrop}
                className="overflow-hidden h-full flex flex-col"
              >
                {/* Thumbnail Header */}
                <div
                  onClick={() => openBackdropLightbox(backdrop)}
                  className="relative h-60 bg-espresso overflow-hidden cursor-pointer group"
                >
                  <img
                    src={backdrop.imageUrl}
                    alt={backdrop.name[language]}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-transparent to-transparent" />

                  {/* Code Badge */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-lg bg-espresso/95 text-gold font-mono text-xs font-bold tracking-wider border border-gold/40 shadow">
                      {t.backdropsPage.codeLabel}: {backdrop.code}
                    </span>
                  </div>

                  {/* Favorite Heart Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavoriteBackdrop(backdrop.code);
                    }}
                    aria-label="Favorite backdrop"
                    className={cn(
                      'absolute top-3.5 right-3.5 w-9 h-9 rounded-full flex items-center justify-center transition-all backdrop-blur-md border',
                      isFav
                        ? 'bg-gold text-espresso border-gold'
                        : 'bg-espresso/60 text-white border-white/20 hover:bg-espresso'
                    )}
                  >
                    <Heart className={cn('w-4 h-4', isFav && 'fill-espresso')} />
                  </button>

                  {/* Bottom Meta inside Image */}
                  <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-surface/90 text-espresso text-xs font-semibold">
                      {backdrop.categoryLabel[language]}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-gold-light group-hover:underline">
                      <Eye className="w-3.5 h-3.5" />
                      {t.backdropsPage.previewFraming}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-2.5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-serif text-xl font-bold text-espresso">
                        {backdrop.name[language]}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-espresso-light leading-relaxed">
                      {backdrop.description[language]}
                    </p>

                    <div className="pt-2 space-y-1.5 border-t border-borderWarm text-xs">
                      <div className="flex items-start gap-2 text-espresso-light">
                        <Shirt className="w-3.5 h-3.5 text-gold-dark shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-espresso">
                            {t.backdropsPage.wardrobeTipLabel}:
                          </strong>{' '}
                          {backdrop.wardrobeTip[language]}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-2.5">
                    <Button
                      variant={isCurrentSessionBackdrop ? 'primary' : 'gold'}
                      size="md"
                      fullWidth
                      onClick={() => handleSelectForSession(backdrop.code)}
                    >
                      {isCurrentSessionBackdrop ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>{t.backdropsPage.selectedForSession}</span>
                        </>
                      ) : (
                        <>
                          <span>{t.backdropsPage.chooseForSession}</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </Button>

                    <Button
                      variant="secondary"
                      size="md"
                      onClick={() => openBackdropLightbox(backdrop)}
                      title={t.backdropsPage.previewFraming}
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Lightbox Modal for Selected Backdrop */}
      <Modal
        isOpen={!!previewBackdrop}
        onClose={() => setPreviewBackdrop(null)}
        title={
          previewBackdrop
            ? `${previewBackdrop.name[language]} (${previewBackdrop.code})`
            : ''
        }
        subtitle={previewBackdrop?.categoryLabel[language]}
        maxWidthClass="max-w-4xl"
      >
        {previewBackdrop && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* Left Image Comparison */}
              <div className="md:col-span-7 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-taupe">
                    {language === 'en'
                      ? 'Sample Portrait Framing Preview'
                      : 'Vista Previa de Encuadre de Retrato'}
                  </span>
                  <div className="inline-flex rounded-full bg-taupe-bg p-1 border border-borderWarm">
                    <button
                      type="button"
                      onClick={() => setModalFinishPreview('color')}
                      className={cn(
                        'px-3 py-1 rounded-full text-xs font-semibold transition-all',
                        modalFinishPreview === 'color'
                          ? 'bg-espresso text-canvas'
                          : 'text-espresso-light'
                      )}
                    >
                      {t.hero.colorLabel}
                    </button>
                    <button
                      type="button"
                      onClick={() => setModalFinishPreview('antique')}
                      className={cn(
                        'px-3 py-1 rounded-full text-xs font-semibold transition-all',
                        modalFinishPreview === 'antique'
                          ? 'bg-gold text-espresso'
                          : 'text-espresso-light'
                      )}
                    >
                      {t.hero.antiqueLabel}
                    </button>
                  </div>
                </div>

                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-espresso border border-borderWarm">
                  <img
                    src={previewBackdrop.samplePortraitUrl}
                    alt={previewBackdrop.name[language]}
                    className={cn(
                      'w-full h-full object-cover transition-all duration-500',
                      modalFinishPreview === 'antique' && 'antique-sepia-filter'
                    )}
                  />
                  <div className="absolute inset-0 heirloom-vignette pointer-events-none" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-md bg-espresso/90 text-gold text-xs font-bold">
                    Set Code: {previewBackdrop.code}
                  </span>
                </div>
              </div>

              {/* Right Framing & Wardrobe Details */}
              <div className="md:col-span-5 space-y-4">
                <div className="p-4 rounded-2xl bg-surface border border-borderWarm space-y-1.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-gold-dark flex items-center gap-1.5">
                    <Camera className="w-4 h-4" />
                    <span>{t.backdropsPage.framingSuggestionLabel}</span>
                  </div>
                  <p className="text-sm text-espresso-light leading-relaxed">
                    {previewBackdrop.framingSuggestion[language]}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-surface border border-borderWarm space-y-1.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-gold-dark flex items-center gap-1.5">
                    <Shirt className="w-4 h-4" />
                    <span>{t.backdropsPage.wardrobeTipLabel}</span>
                  </div>
                  <p className="text-sm text-espresso-light leading-relaxed">
                    {previewBackdrop.wardrobeTip[language]}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-gold-light/40 border border-gold/40 space-y-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-espresso flex items-center gap-1.5">
                    <Palette className="w-4 h-4 text-gold-dark" />
                    <span>{t.backdropsPage.recommendedFinish}</span>
                  </div>
                  <p className="text-xs text-espresso-light">
                    {previewBackdrop.recommendedFinish === 'both'
                      ? language === 'en'
                        ? 'Works equally well in both Vivid Studio Color and Authentic Sepia Antique.'
                        : 'Luce espectacular tanto en Color Vivo como en Antiguo Sepia.'
                      : previewBackdrop.recommendedFinish === 'antique'
                      ? language === 'en'
                        ? 'Signature choice for 1920s Antique Sepia & Vintage Costume sittings.'
                        : 'Elección ideal para sesiones Antiguas en Sepia y vestuario vintage.'
                      : language === 'en'
                      ? 'Recommended for Vibrant Studio Color family sittings.'
                      : 'Recomendado para sesiones familiares en Color Vivo.'}
                  </p>
                </div>

                <Button
                  variant="gold"
                  size="lg"
                  fullWidth
                  onClick={() => {
                    const code = previewBackdrop.code;
                    setPreviewBackdrop(null);
                    handleSelectForSession(code);
                  }}
                >
                  <span>
                    {t.backdropsPage.chooseForSession} ({previewBackdrop.code})
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </Modal>

      {/* Physical Studio Catalog Sheet Modal */}
      <Modal
        isOpen={catalogSheetOpen}
        onClose={() => setCatalogSheetOpen(false)}
        title={
          language === 'en'
            ? 'Official Studio Backdrop Code Sheet'
            : 'Hoja Oficial de Códigos de Fondos del Estudio'
        }
        subtitle="Codes: 125V, BrickWall, SR177V, Bookcase2, M122V, M190V, 406V, M133V, C1–C14"
        maxWidthClass="max-w-3xl"
      >
        <div className="p-6 space-y-4">
          <img
            src="/images/studio-flyer-catalog.jpg"
            alt="Physical Studio Backdrop Code Sheet"
            className="w-full rounded-xl border border-borderWarm"
          />
        </div>
      </Modal>
    </div>
  );
}
