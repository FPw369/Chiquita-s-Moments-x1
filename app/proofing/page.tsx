'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Check,
  CheckCircle2,
  Heart,
  KeyRound,
  Lock,
  Palette,
  Plus,
  ShoppingBag,
  Sparkles,
  Trash2,
} from 'lucide-react';
import { DEMO_PROOFING_PIN, MOCK_PROOFS, PRINT_ADD_ONS } from '@/data/mockProofs';
import { FinishType, ProofPhoto } from '@/types';
import { useStudio } from '@/components/layout/StudioContext';
import { Button, cn } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';
import { Modal } from '@/components/ui/Modal';

export default function ProofingPortalPage() {
  const {
    language,
    t,
    proofingUnlocked,
    unlockProofing,
    lockProofing,
    proofFavorites,
    toggleProofFavorite,
    selected12x18ProofId,
    setSelected12x18ProofId,
    selected12x18Finish,
    setSelected12x18Finish,
    cartItems,
    addCartItem,
    removeCartItem,
    submitProofOrder,
    submittedOrders,
  } = useStudio();

  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState(false);
  const [galleryFinish, setGalleryFinish] = useState<FinishType>('antique');
  const [activeAddOnProof, setActiveAddOnProof] = useState<ProofPhoto | null>(null);
  const [selectedAddOnId, setSelectedAddOnId] = useState<string>(PRINT_ADD_ONS[0].id);
  const [selectedAddOnFinish, setSelectedAddOnFinish] = useState<FinishType>('antique');
  const [justSubmittedOrderId, setJustSubmittedOrderId] = useState<string | null>(null);

  const handleUnlockSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = unlockProofing(pinInput);
    if (!ok) {
      setPinError(true);
    } else {
      setPinError(false);
    }
  };

  const handleDemoUnlock = () => {
    setPinInput(DEMO_PROOFING_PIN);
    setPinError(false);
    unlockProofing(DEMO_PROOFING_PIN);
  };

  const handleSelect12x18 = (proofId: string) => {
    setSelected12x18ProofId(proofId);
    setSelected12x18Finish(galleryFinish);
    setJustSubmittedOrderId(null);
  };

  const handleSwitchGalleryFinish = (finish: FinishType) => {
    setGalleryFinish(finish);
    setSelected12x18Finish(finish);
  };

  const handleAddExtraPrint = () => {
    if (!activeAddOnProof) return;
    addCartItem({
      proofId: activeAddOnProof.id,
      proofCode: activeAddOnProof.code,
      addOnId: selectedAddOnId,
      finish: selectedAddOnFinish,
      quantity: 1,
    });
    setActiveAddOnProof(null);
  };

  const selectedMasterProof = MOCK_PROOFS.find((p) => p.id === selected12x18ProofId);

  const totalAddOnsPrice = cartItems.reduce((sum, item) => {
    const addon = PRINT_ADD_ONS.find((a) => a.id === item.addOnId);
    return sum + (addon ? addon.price * item.quantity : 0);
  }, 0);

  const handleFinalSubmitOrder = () => {
    const order = submitProofOrder();
    if (order) {
      setJustSubmittedOrderId(order.orderId);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <Badge variant="gold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.proofingPage.eyebrow}</span>
        </Badge>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-espresso">
          {t.proofingPage.title}
        </h1>
        <p className="text-sm sm:text-base text-espresso-light leading-relaxed">
          {t.proofingPage.subtitle}
        </p>
      </div>

      {/* LOCKED STATE: PIN ENTRY SCREEN */}
      {!proofingUnlocked ? (
        <div className="max-w-xl mx-auto py-6">
          <Card className="p-8 sm:p-10 border-2 border-gold/50 shadow-editorial-lg space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-espresso text-gold flex items-center justify-center">
              <KeyRound className="w-6 h-6" />
            </div>

            <div className="space-y-1.5">
              <h2 className="font-serif text-2xl font-bold text-espresso">
                {t.proofingPage.pinCardTitle}
              </h2>
              <p className="text-sm text-taupe">{t.proofingPage.pinCardSubtitle}</p>
            </div>

            <form onSubmit={handleUnlockSubmit} className="space-y-4">
              <Input
                value={pinInput}
                onChange={(e) => {
                  setPinInput(e.target.value);
                  setPinError(false);
                }}
                placeholder={t.proofingPage.pinInputPlaceholder}
                error={pinError ? t.proofingPage.invalidPinError : undefined}
                className="font-mono uppercase tracking-wider text-base"
              />

              <div className="flex flex-col sm:flex-row gap-3">
                <Button type="submit" variant="gold" size="lg" fullWidth>
                  <span>{t.proofingPage.unlockBtn}</span>
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  size="lg"
                  fullWidth
                  onClick={handleDemoUnlock}
                >
                  <span>{t.proofingPage.useDemoPinBtn}</span>
                </Button>
              </div>
            </form>

            <div className="p-3.5 rounded-xl bg-canvas border border-borderWarm text-xs text-taupe flex items-center justify-between">
              <span>Demo Session Code:</span>
              <code className="px-2.5 py-1 rounded bg-gold-light text-espresso font-bold">
                MOMENTS2026
              </code>
            </div>
          </Card>
        </div>
      ) : (
        /* UNLOCKED STATE: PRIVATE CLIENT PROOFING GALLERY */
        <div className="space-y-8">
          {/* Top Session Controls Bar */}
          <div className="bg-surface p-4 sm:p-5 rounded-2xl border border-borderWarm shadow-editorial flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="success" className="py-1.5 px-3">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{t.proofingPage.sessionUnlockedBadge}</span>
              </Badge>
              <button
                type="button"
                onClick={lockProofing}
                className="inline-flex items-center gap-1 text-xs font-semibold text-taupe hover:text-espresso underline underline-offset-4"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>{t.proofingPage.switchSessionBtn}</span>
              </button>
            </div>

            {/* Global Color vs Antique Finish Filter */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-taupe">
                {t.proofingPage.filterFinishLabel}
              </span>
              <div className="inline-flex rounded-xl bg-canvas p-1 border border-borderWarm">
                <button
                  type="button"
                  onClick={() => handleSwitchGalleryFinish('color')}
                  className={cn(
                    'px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5',
                    galleryFinish === 'color'
                      ? 'bg-espresso text-canvas shadow-sm'
                      : 'text-espresso-light hover:text-espresso'
                  )}
                >
                  <Palette className="w-3.5 h-3.5 text-gold" />
                  <span>{t.proofingPage.viewColor}</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleSwitchGalleryFinish('antique')}
                  className={cn(
                    'px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5',
                    galleryFinish === 'antique'
                      ? 'bg-gold text-espresso shadow-sm'
                      : 'text-espresso-light hover:text-espresso'
                  )}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t.proofingPage.viewAntique}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Main Grid + Order Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Proofs Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {MOCK_PROOFS.map((proof, idx) => {
                const isSelected12x18 = selected12x18ProofId === proof.id;
                const isFav = proofFavorites.includes(proof.id);

                return (
                  <motion.div
                    key={proof.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: idx * 0.04 }}
                  >
                    <Card
                      highlighted={isSelected12x18}
                      className="overflow-hidden flex flex-col h-full"
                    >
                      {/* Un-watermarked Proof Image */}
                      <div className="relative aspect-[4/5] bg-espresso overflow-hidden">
                        <img
                          src={
                            galleryFinish === 'antique'
                              ? proof.antiqueImageUrl
                              : proof.colorImageUrl
                          }
                          alt={proof.title[language]}
                          className={cn(
                            'w-full h-full object-cover transition-all duration-700',
                            galleryFinish === 'antique' && 'antique-sepia-filter'
                          )}
                        />
                        <div className="absolute inset-0 heirloom-vignette pointer-events-none" />

                        {/* Proof Code & Backdrop Badge */}
                        <div className="absolute top-3 left-3 flex items-center gap-1.5">
                          <span className="px-2.5 py-1 rounded-md bg-espresso/90 text-gold font-mono text-xs font-bold">
                            {proof.code}
                          </span>
                          <span className="px-2 py-1 rounded-md bg-surface/90 text-espresso text-[11px] font-semibold">
                            Set: {proof.backdropCode}
                          </span>
                        </div>

                        {/* Heart Favorite Button */}
                        <button
                          type="button"
                          onClick={() => toggleProofFavorite(proof.id)}
                          aria-label={t.proofingPage.favoriteBtn}
                          className={cn(
                            'absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all border',
                            isFav
                              ? 'bg-gold text-espresso border-gold shadow'
                              : 'bg-espresso/60 text-white border-white/20 hover:bg-espresso'
                          )}
                        >
                          <Heart className={cn('w-4 h-4', isFav && 'fill-espresso')} />
                        </button>

                        {/* Selected 12x18 Ribbon */}
                        {isSelected12x18 && (
                          <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-xl bg-gold text-espresso text-xs font-bold flex items-center justify-center gap-1.5 shadow">
                            <Check className="w-4 h-4 stroke-[2.5]" />
                            <span>
                              {t.proofingPage.selected12x18Btn} (
                              {selected12x18Finish.toUpperCase()})
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Proof Details & Actions */}
                      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                        <div>
                          <h3 className="font-serif text-lg font-bold text-espresso">
                            {proof.title[language]}
                          </h3>
                          <p className="text-xs text-espresso-light mt-1 leading-relaxed">
                            {proof.poseNote[language]}
                          </p>
                        </div>

                        <div className="space-y-2 pt-2 border-t border-borderWarm">
                          <Button
                            variant={isSelected12x18 ? 'primary' : 'gold'}
                            size="sm"
                            fullWidth
                            onClick={() => handleSelect12x18(proof.id)}
                          >
                            {isSelected12x18 ? (
                              <>
                                <Check className="w-4 h-4" />
                                <span>{t.proofingPage.selected12x18Btn}</span>
                              </>
                            ) : (
                              <span>{t.proofingPage.select12x18Btn}</span>
                            )}
                          </Button>

                          <Button
                            variant="secondary"
                            size="sm"
                            fullWidth
                            onClick={() => {
                              setActiveAddOnProof(proof);
                              setSelectedAddOnFinish(galleryFinish);
                            }}
                          >
                            <Plus className="w-3.5 h-3.5" />
                            <span>{t.proofingPage.addPrintBtn}</span>
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Sticky Print Selection & Cart Summary */}
            <div className="lg:col-span-4">
              <Card className="p-6 sticky top-28 space-y-5">
                <div className="flex items-center justify-between border-b border-borderWarm pb-4">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-gold-dark" />
                    <h3 className="font-serif text-xl font-bold text-espresso">
                      {t.proofingPage.orderSummaryTitle}
                    </h3>
                  </div>
                  <Badge variant="gold">
                    <Heart className="w-3 h-3 fill-gold-dark" />
                    <span>{proofFavorites.length}</span>
                  </Badge>
                </div>

                {/* Included 12x18 Master Portrait Selection */}
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-gold-dark">
                    {t.proofingPage.included12x18Label}
                  </div>
                  {selectedMasterProof ? (
                    <div className="p-3.5 rounded-xl bg-gold-light/40 border border-gold flex items-center gap-3">
                      <img
                        src={selectedMasterProof.colorImageUrl}
                        alt={selectedMasterProof.title[language]}
                        className={cn(
                          'w-14 h-16 rounded-lg object-cover shrink-0 border border-gold',
                          selected12x18Finish === 'antique' && 'antique-sepia-filter'
                        )}
                      />
                      <div className="min-w-0 flex-1">
                        <span className="font-mono text-xs font-bold text-espresso">
                          {selectedMasterProof.code}
                        </span>
                        <div className="font-serif text-sm font-bold text-espresso truncate">
                          {selectedMasterProof.title[language]}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="px-2 py-0.5 rounded bg-espresso text-gold text-[10px] font-bold uppercase">
                            12×18 {selected12x18Finish}
                          </span>
                          <span className="text-xs font-semibold text-emerald-700">
                            Included
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p className="text-xs text-taupe italic">
                      {t.proofingPage.no12x18Selected}
                    </p>
                  )}
                </div>

                {/* Extra Print Add-Ons */}
                <div className="space-y-2.5 border-t border-borderWarm pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-taupe">
                      {t.proofingPage.addOnsHeading}
                    </span>
                    {totalAddOnsPrice > 0 && (
                      <span className="text-sm font-bold text-espresso">
                        +${totalAddOnsPrice.toFixed(2)}
                      </span>
                    )}
                  </div>

                  {cartItems.length === 0 ? (
                    <p className="text-xs text-taupe">{t.proofingPage.noAddOnsYet}</p>
                  ) : (
                    <div className="space-y-2">
                      {cartItems.map((item, index) => {
                        const addon = PRINT_ADD_ONS.find((a) => a.id === item.addOnId);
                        return (
                          <div
                            key={index}
                            className="p-3 rounded-xl bg-canvas border border-borderWarm flex items-center justify-between gap-2 text-xs"
                          >
                            <div>
                              <div className="font-bold text-espresso">
                                {addon?.name[language]} (×{item.quantity})
                              </div>
                              <div className="text-taupe">
                                Pose: {item.proofCode} • Finish:{' '}
                                <strong className="uppercase">{item.finish}</strong>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-espresso">
                                ${((addon?.price || 0) * item.quantity).toFixed(2)}
                              </span>
                              <button
                                type="button"
                                onClick={() => removeCartItem(index)}
                                className="p-1 text-taupe hover:text-red-600"
                                aria-label="Remove item"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Submit Order Button */}
                <Button
                  variant="gold"
                  size="lg"
                  fullWidth
                  onClick={handleFinalSubmitOrder}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{t.proofingPage.submitOrderBtn}</span>
                </Button>

                {/* Instant Confirmation Message */}
                {justSubmittedOrderId && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1.5 text-xs"
                  >
                    <div className="font-bold text-emerald-900 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>
                        {t.proofingPage.orderSubmittedTitle} ({justSubmittedOrderId})
                      </span>
                    </div>
                    <p className="text-emerald-800 leading-relaxed">
                      {t.proofingPage.orderSubmittedDesc}
                    </p>
                  </motion.div>
                )}

                {submittedOrders.length > 0 && !justSubmittedOrderId && (
                  <div className="pt-2 border-t border-borderWarm text-[11px] text-taupe">
                    Last Lab Order Logged: <strong>{submittedOrders[0].orderId}</strong>
                  </div>
                )}
              </Card>
            </div>
          </div>
        </div>
      )}

      {/* Extra Prints Add-On Modal */}
      <Modal
        isOpen={!!activeAddOnProof}
        onClose={() => setActiveAddOnProof(null)}
        title={
          activeAddOnProof
            ? `${t.proofingPage.addPrintBtn} — ${activeAddOnProof.code}`
            : ''
        }
        subtitle={activeAddOnProof?.title[language]}
        maxWidthClass="max-w-xl"
      >
        {activeAddOnProof && (
          <div className="p-6 space-y-5">
            <div className="space-y-2.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-taupe">
                {language === 'en' ? 'Select Print Size' : 'Seleccione Tamaño de Impresión'}
              </label>
              <div className="space-y-2.5">
                {PRINT_ADD_ONS.map((addon) => {
                  const active = selectedAddOnId === addon.id;
                  return (
                    <div
                      key={addon.id}
                      onClick={() => setSelectedAddOnId(addon.id)}
                      className={cn(
                        'p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between gap-3',
                        active
                          ? 'bg-gold-light/40 border-gold ring-2 ring-gold'
                          : 'bg-surface border-borderWarm hover:border-taupe'
                      )}
                    >
                      <div>
                        <div className="font-serif font-bold text-espresso">
                          {addon.name[language]}
                        </div>
                        <div className="text-xs text-taupe mt-0.5">
                          {addon.description[language]}
                        </div>
                      </div>
                      <span className="font-serif text-lg font-bold text-espresso shrink-0">
                        ${addon.price.toFixed(2)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-taupe">
                {language === 'en' ? 'Select Print Finish' : 'Seleccione Acabado'}
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedAddOnFinish('color')}
                  className={cn(
                    'py-2.5 px-4 rounded-xl text-xs font-bold border transition-all',
                    selectedAddOnFinish === 'color'
                      ? 'bg-espresso text-canvas border-espresso'
                      : 'bg-canvas text-espresso border-borderWarm'
                  )}
                >
                  {t.proofingPage.viewColor}
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedAddOnFinish('antique')}
                  className={cn(
                    'py-2.5 px-4 rounded-xl text-xs font-bold border transition-all',
                    selectedAddOnFinish === 'antique'
                      ? 'bg-gold text-espresso border-gold'
                      : 'bg-canvas text-espresso border-borderWarm'
                  )}
                >
                  {t.proofingPage.viewAntique}
                </button>
              </div>
            </div>

            <div className="pt-2 flex justify-end gap-3">
              <Button variant="secondary" onClick={() => setActiveAddOnProof(null)}>
                {language === 'en' ? 'Cancel' : 'Cancelar'}
              </Button>
              <Button variant="gold" onClick={handleAddExtraPrint}>
                <Plus className="w-4 h-4" />
                <span>
                  {language === 'en' ? 'Add to Print Order' : 'Agregar a la Orden'}
                </span>
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
