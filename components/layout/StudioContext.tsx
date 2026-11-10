'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  BookingFormState,
  CartOrderItem,
  ConfirmedBooking,
  FinishType,
  Language,
  PackageId,
  SubmittedProofOrder,
} from '@/types';
import { STUDIO_PACKAGES } from '@/data/backdrops';
import { TRANSLATIONS } from '@/data/translations';

interface StudioContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (typeof TRANSLATIONS)['en'];

  // Backdrop Favorites
  favoriteBackdrops: string[];
  toggleFavoriteBackdrop: (code: string) => void;

  // Booking Engine State
  bookingForm: BookingFormState;
  updateBookingForm: (updates: Partial<BookingFormState>) => void;
  bookingStep: number;
  setBookingStep: (step: number) => void;
  confirmedBookings: ConfirmedBooking[];
  latestConfirmation: ConfirmedBooking | null;
  clearLatestConfirmation: () => void;
  confirmCurrentBooking: () => ConfirmedBooking;
  selectBackdropAndPrefill: (code: string) => void;
  selectPackageAndPrefill: (packageId: PackageId, finish?: FinishType) => void;

  // Proofing Portal State
  proofingUnlocked: boolean;
  proofingPin: string;
  unlockProofing: (pin: string) => boolean;
  lockProofing: () => void;
  proofFavorites: string[];
  toggleProofFavorite: (proofId: string) => void;
  selected12x18ProofId: string;
  setSelected12x18ProofId: (proofId: string) => void;
  selected12x18Finish: FinishType;
  setSelected12x18Finish: (finish: FinishType) => void;
  cartItems: CartOrderItem[];
  addCartItem: (item: CartOrderItem) => void;
  removeCartItem: (index: number) => void;
  submittedOrders: SubmittedProofOrder[];
  submitProofOrder: () => SubmittedProofOrder | null;
}

const getDefaultTomorrowDate = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 2);
  return tomorrow.toISOString().split('T')[0];
};

const DEFAULT_BOOKING_FORM: BookingFormState = {
  packageId: 'promo-1995',
  finish: 'antique',
  backdropCode: 'SR177V',
  date: getDefaultTomorrowDate(),
  timeSlotId: 'slot-1100',
  timeLabel: '11:00 AM',
  clientName: '',
  clientPhone: '',
  clientEmail: '',
  familyCount: 4,
  preferredLanguage: 'en',
  specialNotes: '',
};

const STORAGE_KEYS = {
  LANGUAGE: 'chiquitas_lang_v1',
  FAV_BACKDROPS: 'chiquitas_fav_backdrops_v1',
  BOOKING_FORM: 'chiquitas_booking_form_v1',
  CONFIRMED_BOOKINGS: 'chiquitas_confirmed_bookings_v1',
  PROOFING_STATE: 'chiquitas_proofing_state_v1',
};

const StudioContext = createContext<StudioContextType | undefined>(undefined);

export function StudioProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [favoriteBackdrops, setFavoriteBackdrops] = useState<string[]>(['SR177V', 'BrickWall']);
  const [bookingForm, setBookingForm] = useState<BookingFormState>(DEFAULT_BOOKING_FORM);
  const [bookingStep, setBookingStep] = useState<number>(1);
  const [confirmedBookings, setConfirmedBookings] = useState<ConfirmedBooking[]>([]);
  const [latestConfirmation, setLatestConfirmation] = useState<ConfirmedBooking | null>(null);

  // Proofing state
  const [proofingUnlocked, setProofingUnlocked] = useState<boolean>(false);
  const [proofingPin, setProofingPin] = useState<string>('');
  const [proofFavorites, setProofFavorites] = useState<string[]>(['proof-01', 'proof-02']);
  const [selected12x18ProofId, setSelected12x18ProofIdState] = useState<string>('proof-01');
  const [selected12x18Finish, setSelected12x18FinishState] = useState<FinishType>('antique');
  const [cartItems, setCartItems] = useState<CartOrderItem[]>([]);
  const [submittedOrders, setSubmittedOrders] = useState<SubmittedProofOrder[]>([]);
  const [hydrated, setHydrated] = useState<boolean>(false);

  // Hydrate from localStorage on mount
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem(STORAGE_KEYS.LANGUAGE) as Language | null;
      if (savedLang === 'en' || savedLang === 'es') {
        setLanguageState(savedLang);
      }

      const savedFavs = localStorage.getItem(STORAGE_KEYS.FAV_BACKDROPS);
      if (savedFavs) {
        setFavoriteBackdrops(JSON.parse(savedFavs));
      }

      const savedForm = localStorage.getItem(STORAGE_KEYS.BOOKING_FORM);
      if (savedForm) {
        setBookingForm((prev) => ({ ...prev, ...JSON.parse(savedForm) }));
      }

      const savedConfirmed = localStorage.getItem(STORAGE_KEYS.CONFIRMED_BOOKINGS);
      if (savedConfirmed) {
        setConfirmedBookings(JSON.parse(savedConfirmed));
      }

      const savedProofing = localStorage.getItem(STORAGE_KEYS.PROOFING_STATE);
      if (savedProofing) {
        const parsed = JSON.parse(savedProofing);
        if (typeof parsed.unlocked === 'boolean') setProofingUnlocked(parsed.unlocked);
        if (parsed.pin) setProofingPin(parsed.pin);
        if (Array.isArray(parsed.favorites)) setProofFavorites(parsed.favorites);
        if (parsed.selected12x18ProofId) setSelected12x18ProofIdState(parsed.selected12x18ProofId);
        if (parsed.selected12x18Finish) setSelected12x18FinishState(parsed.selected12x18Finish);
        if (Array.isArray(parsed.cartItems)) setCartItems(parsed.cartItems);
        if (Array.isArray(parsed.submittedOrders)) setSubmittedOrders(parsed.submittedOrders);
      }
    } catch {
      // Ignore storage access errors in restricted environments
    } finally {
      setHydrated(true);
    }
  }, []);

  // Persist changes
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEYS.LANGUAGE, language);
    } catch {}
  }, [language, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEYS.FAV_BACKDROPS, JSON.stringify(favoriteBackdrops));
    } catch {}
  }, [favoriteBackdrops, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEYS.BOOKING_FORM, JSON.stringify(bookingForm));
    } catch {}
  }, [bookingForm, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEYS.CONFIRMED_BOOKINGS, JSON.stringify(confirmedBookings));
    } catch {}
  }, [confirmedBookings, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(
        STORAGE_KEYS.PROOFING_STATE,
        JSON.stringify({
          unlocked: proofingUnlocked,
          pin: proofingPin,
          favorites: proofFavorites,
          selected12x18ProofId,
          selected12x18Finish,
          cartItems,
          submittedOrders,
        })
      );
    } catch {}
  }, [
    proofingUnlocked,
    proofingPin,
    proofFavorites,
    selected12x18ProofId,
    selected12x18Finish,
    cartItems,
    submittedOrders,
    hydrated,
  ]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    setBookingForm((prev) => ({ ...prev, preferredLanguage: lang }));
  };

  const toggleFavoriteBackdrop = (code: string) => {
    setFavoriteBackdrops((prev) =>
      prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code]
    );
  };

  const updateBookingForm = (updates: Partial<BookingFormState>) => {
    setBookingForm((prev) => ({ ...prev, ...updates }));
  };

  const selectBackdropAndPrefill = (code: string) => {
    setBookingForm((prev) => ({ ...prev, backdropCode: code }));
  };

  const selectPackageAndPrefill = (packageId: PackageId, finish?: FinishType) => {
    setBookingForm((prev) => ({
      ...prev,
      packageId,
      ...(finish ? { finish } : {}),
    }));
    setLatestConfirmation(null);
  };

  const confirmCurrentBooking = (): ConfirmedBooking => {
    const pkg =
      STUDIO_PACKAGES.find((p) => p.id === bookingForm.packageId) || STUDIO_PACKAGES[0];
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    const referenceId = `CM-${new Date().getFullYear()}-${randomDigits}`;

    const confirmed: ConfirmedBooking = {
      ...bookingForm,
      referenceId,
      createdAt: new Date().toISOString(),
      packagePrice: pkg.price,
      sittingFeePaid: pkg.sittingFee,
      balanceDueAtStudio: pkg.price,
    };

    setConfirmedBookings((prev) => [confirmed, ...prev]);
    setLatestConfirmation(confirmed);
    return confirmed;
  };

  const clearLatestConfirmation = () => {
    setLatestConfirmation(null);
    setBookingStep(1);
  };

  const unlockProofing = (pinInput: string): boolean => {
    const normalized = pinInput.trim().toUpperCase();
    if (normalized === 'MOMENTS2026' || normalized === 'CHIQUITA' || normalized === '1995') {
      setProofingUnlocked(true);
      setProofingPin(normalized);
      return true;
    }
    return false;
  };

  const lockProofing = () => {
    setProofingUnlocked(false);
    setProofingPin('');
  };

  const toggleProofFavorite = (proofId: string) => {
    setProofFavorites((prev) =>
      prev.includes(proofId) ? prev.filter((id) => id !== proofId) : [...prev, proofId]
    );
  };

  const setSelected12x18ProofId = (proofId: string) => {
    setSelected12x18ProofIdState(proofId);
  };

  const setSelected12x18Finish = (finish: FinishType) => {
    setSelected12x18FinishState(finish);
  };

  const addCartItem = (item: CartOrderItem) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (x) =>
          x.proofId === item.proofId &&
          x.addOnId === item.addOnId &&
          x.finish === item.finish
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + item.quantity,
        };
        return updated;
      }
      return [...prev, item];
    });
  };

  const removeCartItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const submitProofOrder = (): SubmittedProofOrder | null => {
    if (!selected12x18ProofId) return null;
    const orderId = `ORD-${Math.floor(10000 + Math.random() * 90000)}`;
    const newOrder: SubmittedProofOrder = {
      orderId,
      sessionCode: proofingPin || 'MOMENTS2026',
      primary12x18ProofId: selected12x18ProofId,
      primary12x18Finish: selected12x18Finish,
      favorites: proofFavorites,
      addOnItems: cartItems,
      totalAddOnsPrice: 0,
      submittedAt: new Date().toISOString(),
    };
    setSubmittedOrders((prev) => [newOrder, ...prev]);
    setCartItems([]);
    return newOrder;
  };

  return (
    <StudioContext.Provider
      value={{
        language,
        setLanguage,
        t: TRANSLATIONS[language],
        favoriteBackdrops,
        toggleFavoriteBackdrop,
        bookingForm,
        updateBookingForm,
        bookingStep,
        setBookingStep,
        confirmedBookings,
        latestConfirmation,
        clearLatestConfirmation,
        confirmCurrentBooking,
        selectBackdropAndPrefill,
        selectPackageAndPrefill,
        proofingUnlocked,
        proofingPin,
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
        submittedOrders,
        submitProofOrder,
      }}
    >
      {children}
    </StudioContext.Provider>
  );
}

export function useStudio() {
  const ctx = useContext(StudioContext);
  if (!ctx) {
    throw new Error('useStudio must be used within a StudioProvider');
  }
  return ctx;
}
