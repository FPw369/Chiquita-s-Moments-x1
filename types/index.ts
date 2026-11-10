export type Language = 'en' | 'es';

export type BackdropCategory =
  | 'all'
  | 'classic'
  | 'architectural'
  | 'scenic'
  | 'holiday';

export interface Backdrop {
  code: string;
  name: {
    en: string;
    es: string;
  };
  category: Exclude<BackdropCategory, 'all'>;
  categoryLabel: {
    en: string;
    es: string;
  };
  description: {
    en: string;
    es: string;
  };
  framingSuggestion: {
    en: string;
    es: string;
  };
  wardrobeTip: {
    en: string;
    es: string;
  };
  recommendedFinish: 'color' | 'antique' | 'both';
  imageUrl: string;
  samplePortraitUrl: string;
  featured?: boolean;
}

export type PackageId = 'promo-1995' | 'family-heirloom' | 'childrens-antique';

export type FinishType = 'color' | 'antique';

export interface StudioPackage {
  id: PackageId;
  badge?: {
    en: string;
    es: string;
  };
  name: {
    en: string;
    es: string;
  };
  subtitle: {
    en: string;
    es: string;
  };
  price: number;
  originalPrice?: number;
  sittingFee: number;
  duration: {
    en: string;
    es: string;
  };
  includes: {
    en: string[];
    es: string[];
  };
}

export interface TimeSlot {
  id: string;
  time: string;
  period: 'morning' | 'afternoon' | 'weekend';
  available: boolean;
  spotsLeft?: number;
}

export interface BookingFormState {
  packageId: PackageId;
  finish: FinishType;
  backdropCode: string;
  date: string;
  timeSlotId: string;
  timeLabel: string;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  familyCount: number;
  preferredLanguage: Language;
  specialNotes: string;
}

export interface ConfirmedBooking extends BookingFormState {
  referenceId: string;
  createdAt: string;
  packagePrice: number;
  sittingFeePaid: number;
  balanceDueAtStudio: number;
}

export interface ProofPhoto {
  id: string;
  code: string;
  title: {
    en: string;
    es: string;
  };
  poseNote: {
    en: string;
    es: string;
  };
  backdropCode: string;
  colorImageUrl: string;
  antiqueImageUrl: string;
  aspectRatio: 'portrait' | 'landscape';
  recommendedFor12x18?: boolean;
}

export interface PrintAddOn {
  id: string;
  name: {
    en: string;
    es: string;
  };
  dimensions: string;
  price: number;
  description: {
    en: string;
    es: string;
  };
}

export interface CartOrderItem {
  proofId: string;
  proofCode: string;
  addOnId: string;
  finish: FinishType;
  quantity: number;
}

export interface SubmittedProofOrder {
  orderId: string;
  sessionCode: string;
  primary12x18ProofId: string;
  primary12x18Finish: FinishType;
  favorites: string[];
  addOnItems: CartOrderItem[];
  totalAddOnsPrice: number;
  submittedAt: string;
}

export interface FAQItem {
  id: string;
  category: 'special' | 'wardrobe' | 'booking' | 'delivery';
  question: {
    en: string;
    es: string;
  };
  answer: {
    en: string;
    es: string;
  };
}
