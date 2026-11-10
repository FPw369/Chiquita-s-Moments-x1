'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Camera,
  Calendar,
  Clock,
  Phone,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Lock,
  Unlock,
  Eye,
  X,
  ArrowRight,
  MapPin,
  Heart,
  SlidersHorizontal,
  ShieldCheck,
  Users,
  Image as ImageIcon,
  Award,
} from 'lucide-react';

type Language = 'en' | 'es';
type FinishOption = 'color' | 'antique';
type StylePackageId = 'special-12x18' | 'classic-color' | 'antique-costume';

interface BackdropItem {
  code: string;
  badge: string;
  name: { en: string; es: string };
  tag: { en: string; es: string };
  description: { en: string; es: string };
  wardrobeTip: { en: string; es: string };
  recommendedFinish: 'Color & Antique' | 'Antique Best' | 'Vivid Color';
  imageUrl: string;
  samplePortraitUrl: string;
}

const BACKDROP_ITEMS: BackdropItem[] = [
  {
    code: 'M122V',
    badge: 'M122V (Autumn Path)',
    name: {
      en: 'Autumn Path',
      es: 'Sendero de Otoño',
    },
    tag: {
      en: 'Warm Woodland Glow',
      es: 'Bosque Cálido Dorado',
    },
    description: {
      en: 'Sun-dappled golden foliage pathway with soft depth-of-field bokeh. Ideal for multi-generational family groupings and warm heirloom portraits.',
      es: 'Sendero de follaje dorado con desenfoque suave de estudio. Ideal para retratos familiares multigeneracionales y recuerdos cálidos.',
    },
    wardrobeTip: {
      en: 'Cream, burgundy, navy, camel, or forest green tones.',
      es: 'Tonos crema, borgoña, azul marino, camel o verde bosque.',
    },
    recommendedFinish: 'Color & Antique',
    imageUrl:
      'https://images.unsplash.com/photo-1507041957456-9c397ce39c97?auto=format&fit=crop&w=1000&q=85',
    samplePortraitUrl: '/images/portrait-family-generations.jpg',
  },
  {
    code: 'BrickWall',
    badge: 'BrickWall (Vintage Brick)',
    name: {
      en: 'Vintage Brick',
      es: 'Ladrillo Vintage',
    },
    tag: {
      en: '#1 for Antique Portraits',
      es: '#1 para Retratos Antiguos',
    },
    description: {
      en: 'Weathered 19th-century loft brick textured canvas paired with our heirloom steamer trunks, 1920s newsboy caps, and wooden props.',
      es: 'Ladrillo envejecido del siglo XIX combinado con nuestros baúles antiguos, gorras de los años 1920 y utilería clásica del estudio.',
    },
    wardrobeTip: {
      en: 'Suspenders, white button-downs, denim, or studio-provided 1920s attire.',
      es: 'Tirantes, camisas blancas, mezclilla o vestuario años 1920 del estudio.',
    },
    recommendedFinish: 'Antique Best',
    imageUrl:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=85',
    samplePortraitUrl:
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85',
  },
  {
    code: 'SR177V',
    badge: 'SR177V (Studio Vignette)',
    name: {
      en: 'Studio Vignette',
      es: 'Viñeta Clásica de Estudio',
    },
    tag: {
      en: 'Old Master Canvas',
      es: 'Lienzo Clásico Atemporal',
    },
    description: {
      en: 'Hand-painted Old Master brown-and-amber vignette canvas that places 100% of the visual spotlight on expressions and family connection.',
      es: 'Lienzo pintado a mano estilo Viejos Maestros con bordes cálidos que centra toda la atención en los rostros y expresiones.',
    },
    wardrobeTip: {
      en: 'Solid darks, jewel tones, classic white shirts, or heirloom lace.',
      es: 'Tonos oscuros sólidos, colores joya, camisas blancas o encaje antiguo.',
    },
    recommendedFinish: 'Color & Antique',
    imageUrl:
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1000&q=85',
    samplePortraitUrl: '/images/portrait-siblings.jpg',
  },
  {
    code: 'Bookcase2',
    badge: 'Bookcase2 (Library)',
    name: {
      en: 'Classic Library',
      es: 'Biblioteca Clásica',
    },
    tag: {
      en: 'Mahogany & Leather Volumes',
      es: 'Estantería de Caoba y Cuero',
    },
    description: {
      en: 'Floor-to-ceiling mahogany bookshelves lined with leather-bound classics. Dignified setting for formal family portraits, scholars, and milestones.',
      es: 'Estanterías de caoba de piso a techo con libros encuadernados en cuero. Escenario distinguido para retratos formales y graduaciones.',
    },
    wardrobeTip: {
      en: 'Blazers, tweed waistcoats, Sunday best dresses, and bowties.',
      es: 'Blazers, chalecos de vestir, vestidos elegantes y corbatas de moño.',
    },
    recommendedFinish: 'Color & Antique',
    imageUrl:
      'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1000&q=85',
    samplePortraitUrl:
      'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=85',
  },
  {
    code: '406V',
    badge: '406V (Garden)',
    name: {
      en: 'Conservatory Garden',
      es: 'Jardín Botánico',
    },
    tag: {
      en: 'Sunlit Stone Archway',
      es: 'Arco de Piedra y Rosas',
    },
    description: {
      en: 'Romantic stone garden arch draped in blooming roses and spring ivy. Captures outdoor botanical beauty inside our climate-controlled studio.',
      es: 'Arco romántico de piedra cubierto de rosas y hiedra primaveral. La belleza de un jardín exterior dentro de la comodidad del estudio.',
    },
    wardrobeTip: {
      en: 'Pastels, white eyelet lace, floral dresses, and light linen.',
      es: 'Colores pastel, encaje blanco, vestidos florales y lino claro.',
    },
    recommendedFinish: 'Vivid Color',
    imageUrl:
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1000&q=85',
    samplePortraitUrl: '/images/portrait-child-wicker.jpg',
  },
  {
    code: 'Holiday C1–C14',
    badge: 'Holiday C1–C14',
    name: {
      en: 'Holiday & Parlor Series',
      es: 'Serie Navideña y Salón C1–C14',
    },
    tag: {
      en: 'Seasonal & Victorian Hearth',
      es: 'Temporada y Chimenea Victoriana',
    },
    description: {
      en: 'Complete C1–C14 seasonal collection featuring snow-dusted pines, carved Victorian fireplace mantle with garland, and dreamy child clouds.',
      es: 'Colección completa C1–C14 con pinos nevados, chimenea victoriana tallada con guirnalda cálida y escenarios infantiles de ensueño.',
    },
    wardrobeTip: {
      en: 'Velvet, Tartan plaid, cranberry red, gold accents, or formal attire.',
      es: 'Terciopelo, cuadros escoceses, rojo arándano, detalles dorados o ropa formal.',
    },
    recommendedFinish: 'Color & Antique',
    imageUrl:
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=85',
    samplePortraitUrl:
      'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=900&q=85',
  },
];

interface StylePackage {
  id: StylePackageId;
  name: { en: string; es: string };
  price: string;
  sittingFeeNote: { en: string; es: string };
  badge: { en: string; es: string };
  desc: { en: string; es: string };
  features: { en: string[]; es: string[] };
  defaultFinish: FinishOption;
}

const STYLE_PACKAGES: StylePackage[] = [
  {
    id: 'special-12x18',
    name: {
      en: '12×18 Event Special',
      es: 'Especial de Evento 12×18',
    },
    price: '$19.95',
    sittingFeeNote: {
      en: '+$10 sitting fee due at appointment',
      es: '+$10 tarifa de sesión el día de la cita',
    },
    badge: {
      en: 'Most Popular • Flyer Offer',
      es: 'Más Popular • Oferta del Volante',
    },
    desc: {
      en: 'Our signature 12×18 heirloom wall portrait in your choice of Vivid Studio Color OR Authentic Vintage Antique finish.',
      es: 'Nuestro retrato familiar de pared 12×18 en su elección de Color Vivo de Estudio O Acabado Antiguo Vintage.',
    },
    features: {
      en: [
        'One (1) 12×18 Archival Wall Portrait',
        'Color OR Sepia Antique finish included',
        'Up to 8 family members or siblings',
      ],
      es: [
        'Un (1) Retrato de Pared 12×18 de archivo',
        'Acabado a Color O Sepia Antiguo incluido',
        'Hasta 8 miembros de familia o hermanos',
      ],
    },
    defaultFinish: 'antique',
  },
  {
    id: 'classic-color',
    name: {
      en: 'Classic Color Collection',
      es: 'Colección Clásica a Color',
    },
    price: '$49.95',
    sittingFeeNote: {
      en: '+$10 sitting fee due at appointment',
      es: '+$10 tarifa de sesión el día de la cita',
    },
    badge: {
      en: 'Multi-Pose Family Set',
      es: 'Paquete Familiar Multi-Pose',
    },
    desc: {
      en: 'True-to-life studio color portraiture with full family grouping plus sibling and grandparent breakout poses.',
      es: 'Retratos en color vivo de estudio con grupo familiar completo más poses adicionales de hermanos y abuelos.',
    },
    features: {
      en: [
        '12×18 Master Wall Print + Two 8×10 Prints',
        '8 Die-Cut Heirloom Wallets included',
        'Two studio backdrop codes of your choice',
      ],
      es: [
        'Retrato 12×18 + Dos impresiones 8×10',
        '8 Fotos tamaño cartera incluidas',
        'Dos fondos de estudio a su elección',
      ],
    },
    defaultFinish: 'color',
  },
  {
    id: 'antique-costume',
    name: {
      en: 'Antique Costume Sitting',
      es: 'Sesión con Vestuario Antiguo',
    },
    price: '$39.95',
    sittingFeeNote: {
      en: '+$10 sitting fee due at appointment',
      es: '+$10 tarifa de sesión el día de la cita',
    },
    badge: {
      en: 'Full Vintage Props & Wardrobe',
      es: 'Utilería y Vestuario de Época',
    },
    desc: {
      en: 'Complete 1920s newsboy caps, suspenders, Victorian lace, vintage trunks, wicker chairs, and hand-toned sepia finishing.',
      es: 'Gorras años 1920, tirantes, encaje victoriano, baúles antiguos, sillas de mimbre y acabado artesanal en sepia.',
    },
    features: {
      en: [
        '12×18 Deckled-Edge Sepia Portrait + Two 5×7s',
        'Full access to studio costumes & antique props',
        'Custom darkroom vignette toning',
      ],
      es: [
        'Retrato Sepia 12×18 + Dos impresiones 5×7',
        'Acceso total a vestuario y utilería antigua',
        'Viñeteado artesanal estilo cuarto oscuro',
      ],
    },
    defaultFinish: 'antique',
  },
];

const PROOF_GALLERY = [
  {
    id: 'CM-101',
    title: { en: 'Three Generations Family Pose I', es: 'Tres Generaciones Pose Familiar I' },
    backdrop: 'SR177V',
    recommended: true,
    imageUrl: '/images/portrait-family-generations.jpg',
  },
  {
    id: 'CM-102',
    title: { en: 'Milestone Child in Wicker Chair', es: 'Retrato Infantil en Silla de Mimbre' },
    backdrop: '406V',
    recommended: true,
    imageUrl: '/images/portrait-child-wicker.jpg',
  },
  {
    id: 'CM-103',
    title: { en: 'Siblings Classic Studio Vignette', es: 'Hermanos en Viñeta Clásica de Estudio' },
    backdrop: 'SR177V',
    recommended: false,
    imageUrl: '/images/portrait-siblings.jpg',
  },
  {
    id: 'CM-104',
    title: { en: '1920s Newsboy & Vintage Steamer Trunk', es: 'Estilo Años 1920 con Baúl Antiguo' },
    backdrop: 'BrickWall',
    recommended: true,
    imageUrl:
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85',
  },
];

const AVAILABLE_DATES = [
  { id: 'sat-nov-14', label: { en: 'Sat, Nov 14', es: 'Sáb, 14 Nov' }, tag: { en: 'Event Weekend', es: 'Fin de Semana' } },
  { id: 'sun-nov-15', label: { en: 'Sun, Nov 15', es: 'Dom, 15 Nov' }, tag: { en: '3 Spots Left', es: 'Quedan 3 Cupos' } },
  { id: 'fri-nov-20', label: { en: 'Fri, Nov 20', es: 'Vie, 20 Nov' }, tag: { en: 'Afternoon Studio', es: 'Tarde en Estudio' } },
  { id: 'sat-nov-21', label: { en: 'Sat, Nov 21', es: 'Sáb, 21 Nov' }, tag: { en: 'Popular', es: 'Popular' } },
];

const TIME_SLOTS = [
  '10:00 AM',
  '11:15 AM',
  '12:30 PM',
  '2:00 PM',
  '3:30 PM',
  '5:00 PM',
];

/**
 * Full bilingual dictionary consolidated in a single data object
 */
const COPY = {
  en: {
    brand: "Chiquita's Moments",
    brandTagline: 'Portrait Studio',
    nav: {
      special: 'Event Special',
      backdrops: 'Backdrops',
      booking: 'Book Session',
      proofs: 'Client Proofs',
      bookNow: 'Book Now',
    },
    hero: {
      eyebrow: 'Fine Family & Heirloom Portraiture',
      headline: "Chiquita's Moments",
      subtitle: 'Timeless Family & Vintage Portraits',
      description:
        'From multi-generational family portraits in luminous color to authentic 1920s sepia character sittings with our studio wardrobe and antique props.',
      primaryCta: 'View Event Special',
      secondaryCta: 'Explore Backdrops',
      finishPreviewLabel: 'Live Finish Preview:',
      colorBtn: 'Vivid Color',
      antiqueBtn: 'Vintage Antique',
      cards: {
        family: {
          title: 'Family Color',
          subtitle: 'Three-Generation Heirloom • SR177V',
        },
        vintage: {
          title: 'Vintage Antique',
          subtitle: '1920s Newsboy & Steamer Trunks • BrickWall',
        },
        child: {
          title: 'Milestone Child',
          subtitle: 'Wicker Chair & Studio Props • 406V',
        },
      },
    },
    eventCard: {
      badge: 'Limited Time Event',
      presentedBy: "Presented by Chiquita's Moments",
      offerTitle: '12×18 Portrait — $19.95',
      offerSubtitle: 'Your choice of Vivid Studio Color OR Authentic Vintage Antique finish',
      regularValue: 'Regularly $75.00',
      sittingFeeNote: '$10 sitting fee due at appointment',
      claimCta: 'Claim Offer & Select Time',
      viewFlyerBtn: 'View Original Event Flyer',
      highlights: [
        'Guided 30-minute studio sitting for families, children, or siblings',
        'Complimentary use of vintage hats, suspenders, pearls & steamer trunks',
        'Preview poses in both Color and Sepia before choosing your 12×18 print',
      ],
      callPrompt: 'Prefer to book by phone? Call our coordinators directly:',
    },
    backdrops: {
      eyebrow: 'Curated Studio Sets',
      title: 'Interactive Studio Backdrop Collection',
      subtitle:
        'Swipe or click any backdrop below to inspect lighting notes, wardrobe tips, and sample portraits before locking in your session code.',
      clickToPreview: 'Preview Set',
      useBackdropBtn: 'Use This Backdrop',
      modalWardrobeLabel: 'Recommended Wardrobe',
      modalFinishLabel: 'Ideal Finish',
      modalClose: 'Close Preview',
    },
    booking: {
      eyebrow: 'Seamless Online Reservation',
      title: 'Reserve Your Portrait Session in 3 Simple Steps',
      subtitle:
        'No upfront online payment required — your $10.00 sitting fee is collected at the time of your studio appointment.',
      step1Title: 'Step 1: Pick Portrait Style',
      step2Title: 'Step 2: Choose Backdrop & Date/Time',
      step3Title: 'Step 3: Contact Info & Coordinator Routing',
      finishPreferenceLabel: 'Preferred 12×18 Print Finish:',
      backdropSelectLabel: 'Selected Studio Backdrop Code:',
      dateSelectLabel: 'Select Studio Date:',
      timeSelectLabel: 'Select Appointment Time Slot:',
      nameLabel: 'Full Name',
      namePlaceholder: 'e.g., Maria & Carlos Hernandez',
      phoneLabel: 'Best Phone Number',
      phonePlaceholder: '(708) 555-0192',
      groupSizeLabel: 'Family / Group Size',
      groupSizeOptions: [
        '1–2 (Child or Couple)',
        '3–5 Family Members',
        '6–8 Extended Family',
        '9+ Multi-Generation Group',
      ],
      coordinatorLabel: 'Preferred Coordinator Language:',
      englishCoordinator: 'English Calls — Drew',
      spanishCoordinator: 'En Español — Yolanda',
      coordinatorNote:
        'Your chosen coordinator will confirm your sitting time and wardrobe questions by phone/text.',
      submitBtn: 'Confirm Studio Appointment',
      summaryHeader: 'Your Session Summary',
      dueAtAppointment: 'Due at Appointment (Sitting Fee)',
      packageBalance: 'Portrait Package Balance',
      confirmationTitle: 'Your Portrait Sitting is Reserved!',
      confirmationSubtitle:
        'We have prepared your studio camera room and logged your backdrop code.',
      referenceLabel: 'Booking Reference',
      assignedCoordinatorLabel: 'Your Dedicated Coordinator',
      editBookingBtn: 'Modify Reservation Details',
    },
    proofing: {
      floatingTrigger: 'Already had a session? Enter PIN to view proofs',
      modalTitle: 'Client Proofing Portal',
      modalSubtitle:
        'Enter your studio session PIN to preview your portraits in Vivid Color and Vintage Antique.',
      pinPlaceholder: 'Enter PIN (Demo: MOMENTS)',
      unlockBtn: 'View Proofs',
      tryDemoBtn: 'Auto-Fill Demo PIN: MOMENTS',
      pinError: 'Invalid PIN. Please enter MOMENTS to unlock the demo gallery.',
      unlockedBadge: 'Session #CM-2026 • Familia Morales / Demo Gallery',
      selectPoseBtn: 'Select for 12×18 Print',
      selectedPoseBtn: 'Selected for 12×18 Print ✓',
      orderNote:
        'Your selected 12×18 pose and finish have been marked for our darkroom lab. Call Drew or Yolanda to add extra 8×10 or wallet prints!',
    },
    footer: {
      serviceArea:
        'Serving Greater Chicagoland (Cicero, Oak Park, Berwyn) & Los Angeles Popup Studio Events.',
      addressLine: 'Studio Appointments & Event Booking Desk • Open Tue–Sun 9:30 AM – 7:00 PM',
      englishCallLabel: 'English Appointments — Drew',
      spanishCallLabel: 'Citas en Español — Yolanda',
      rights: "Chiquita's Moments Portrait Studio. All rights reserved.",
    },
  },
  es: {
    brand: "Chiquita's Moments",
    brandTagline: 'Estudio de Retratos',
    nav: {
      special: 'Oferta Especial',
      backdrops: 'Fondos',
      booking: 'Reservar Cita',
      proofs: 'Ver Pruebas',
      bookNow: 'Reservar Ahora',
    },
    hero: {
      eyebrow: 'Retratos Familiares y de Época de Alta Calidad',
      headline: "Chiquita's Moments",
      subtitle: 'Retratos Familiares y Vintage Atemporales',
      description:
        'Desde retratos familiares multigeneracionales en color vibrante hasta auténticas sesiones antiguas estilo años 1920 con vestuario y utilería de nuestro estudio.',
      primaryCta: 'Ver Oferta Especial',
      secondaryCta: 'Explorar Fondos',
      finishPreviewLabel: 'Vista Previa de Acabado:',
      colorBtn: 'Color Vivo',
      antiqueBtn: 'Antiguo Vintage',
      cards: {
        family: {
          title: 'Color Familiar',
          subtitle: 'Tres Generaciones • Fondo SR177V',
        },
        vintage: {
          title: 'Antiguo Vintage',
          subtitle: 'Años 1920 y Baúles Antiguos • BrickWall',
        },
        child: {
          title: 'Recuerdo Infantil',
          subtitle: 'Silla de Mimbre y Utilería • 406V',
        },
      },
    },
    eventCard: {
      badge: 'Evento por Tiempo Limitado',
      presentedBy: "Presentado por Chiquita's Moments",
      offerTitle: 'Retrato 12×18 — $19.95',
      offerSubtitle: 'Su elección de acabado en Color Vivo de Estudio O Antiguo Vintage Auténtico',
      regularValue: 'Precio Regular $75.00',
      sittingFeeNote: '$10 de tarifa de sesión al momento de la cita',
      claimCta: 'Reclamar Oferta y Elegir Hora',
      viewFlyerBtn: 'Ver Volante Oficial del Evento',
      highlights: [
        'Sesión guiada de 30 minutos para familias, niños o hermanos',
        'Uso incluido de sombreros antiguos, tirantes, perlas y baúles de época',
        'Compare sus tomas en Color y Sepia antes de elegir su cuadro 12×18',
      ],
      callPrompt: '¿Prefiere agendar por teléfono? Llame directamente a nuestros coordinadores:',
    },
    backdrops: {
      eyebrow: 'Escenarios de Estudio',
      title: 'Colección Interactiva de Fondos de Estudio',
      subtitle:
        'Deslice o haga clic en cualquier fondo para ver consejos de vestuario, iluminación y ejemplos antes de elegir su código de fondo.',
      clickToPreview: 'Ver Detalle',
      useBackdropBtn: 'Usar Este Fondo',
      modalWardrobeLabel: 'Vestuario Recomendado',
      modalFinishLabel: 'Acabado Ideal',
      modalClose: 'Cerrar Vista',
    },
    booking: {
      eyebrow: 'Reservación en Línea sin Complicaciones',
      title: 'Reserve su Sesión Fotográfica en 3 Sencillos Pasos',
      subtitle:
        'No requiere pago en línea por adelantado — la tarifa de sesión de $10.00 se abona al momento de su cita en el estudio.',
      step1Title: 'Paso 1: Elija su Estilo de Retrato',
      step2Title: 'Paso 2: Elija Fondo, Fecha y Hora',
      step3Title: 'Paso 3: Contacto y Coordinador Bilingüe',
      finishPreferenceLabel: 'Acabado Preferido para su Retrato 12×18:',
      backdropSelectLabel: 'Código de Fondo Seleccionado:',
      dateSelectLabel: 'Seleccione Fecha de Cita:',
      timeSelectLabel: 'Seleccione Horario Disponible:',
      nameLabel: 'Nombre Completo',
      namePlaceholder: 'ej., Familia Morales / María Hernández',
      phoneLabel: 'Teléfono de Contacto',
      phonePlaceholder: '(323) 555-0148',
      groupSizeLabel: 'Número de Personas',
      groupSizeOptions: [
        '1–2 (Niño o Pareja)',
        '3–5 Miembros de Familia',
        '6–8 Familia Extendida',
        '9+ Grupo Multigeneracional',
      ],
      coordinatorLabel: 'Coordinador Preferido para Confirmación:',
      englishCoordinator: 'Llamadas en Inglés — Drew',
      spanishCoordinator: 'En Español — Yolanda',
      coordinatorNote:
        'Su coordinador elegido confirmará su cita y resolverá dudas de vestuario por llamada o mensaje.',
      submitBtn: 'Confirmar Cita en el Estudio',
      summaryHeader: 'Resumen de su Sesión',
      dueAtAppointment: 'Pago al llegar a la cita (Tarifa de Sesión)',
      packageBalance: 'Saldo del Paquete Fotográfico',
      confirmationTitle: '¡Su Cita de Retrato Está Reservada!',
      confirmationSubtitle:
        'Hemos apartado su horario de cámara y registrado su código de fondo.',
      referenceLabel: 'Código de Reserva',
      assignedCoordinatorLabel: 'Su Coordinador Asignado',
      editBookingBtn: 'Modificar Datos de la Cita',
    },
    proofing: {
      floatingTrigger: '¿Ya tuvo su sesión? Ingrese su PIN para ver pruebas',
      modalTitle: 'Portal de Pruebas para Clientes',
      modalSubtitle:
        'Ingrese el PIN de su sesión para previsualizar sus retratos en Color Vivo y Antiguo Sepia.',
      pinPlaceholder: 'Ingrese PIN (Demo: MOMENTS)',
      unlockBtn: 'Ver Pruebas',
      tryDemoBtn: 'Usar PIN de Prueba: MOMENTS',
      pinError: 'PIN incorrecto. Ingrese MOMENTS para abrir la galería de demostración.',
      unlockedBadge: 'Sesión #CM-2026 • Familia Morales / Galería Demo',
      selectPoseBtn: 'Elegir para Retrato 12×18',
      selectedPoseBtn: 'Seleccionado para 12×18 ✓',
      orderNote:
        'Su pose y acabado 12×18 han sido registrados para impresión. ¡Llame a Yolanda o Drew si desea copias adicionales 8×10 o tamaño cartera!',
    },
    footer: {
      serviceArea:
        'Atendiendo el Área de Chicago (Cicero, Oak Park, Berwyn) y Eventos Especiales en Los Ángeles.',
      addressLine: 'Recepción de Citas y Estudio • Abierto Mar–Dom 9:30 AM – 7:00 PM',
      englishCallLabel: 'Citas en Inglés — Drew',
      spanishCallLabel: 'Atención en Español — Yolanda',
      rights: "Chiquita's Moments Portrait Studio. Todos los derechos reservados.",
    },
  },
} as const;

export default function ChiquitasMomentsSinglePage() {
  // Language toggle state
  const [lang, setLang] = useState<Language>('en');
  const t = COPY[lang];

  // Hero & Event Card finish states
  const [heroFinish, setHeroFinish] = useState<FinishOption>('antique');

  // Backdrop Carousel & Modal state
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [previewBackdrop, setPreviewBackdrop] = useState<BackdropItem | null>(null);
  const [modalFinish, setModalFinish] = useState<FinishOption>('antique');
  const [flyerModalOpen, setFlyerModalOpen] = useState(false);

  // 3-Step Booking Section state
  const [selectedStyle, setSelectedStyle] = useState<StylePackageId>('special-12x18');
  const [selectedFinish, setSelectedFinish] = useState<FinishOption>('antique');
  const [selectedBackdropCode, setSelectedBackdropCode] = useState<string>('BrickWall');
  const [selectedDate, setSelectedDate] = useState<string>(AVAILABLE_DATES[0].id);
  const [selectedTime, setSelectedTime] = useState<string>('11:15 AM');
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [groupSize, setGroupSize] = useState<string>('3–5 Family Members');
  const [coordinatorLang, setCoordinatorLang] = useState<Language>('en');
  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);
  const [bookingRefCode, setBookingRefCode] = useState<string>('CM-8492');

  // Client Proofing Modal state
  const [proofingOpen, setProofingOpen] = useState<boolean>(false);
  const [pinInput, setPinInput] = useState<string>('');
  const [pinUnlocked, setPinUnlocked] = useState<boolean>(false);
  const [pinError, setPinError] = useState<boolean>(false);
  const [proofFinish, setProofFinish] = useState<FinishOption>('antique');
  const [selectedProofId, setSelectedProofId] = useState<string>('CM-101');

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Switch language and sync default coordinator language
  const handleToggleLanguage = (nextLang: Language) => {
    setLang(nextLang);
    setCoordinatorLang(nextLang);
  };

  // Claim $19.95 Event Offer
  const handleClaimOffer = (finish?: FinishOption) => {
    setSelectedStyle('special-12x18');
    if (finish) setSelectedFinish(finish);
    setBookingConfirmed(false);
    scrollToSection('booking');
  };

  // Use Backdrop from Modal or Carousel
  const handleUseBackdrop = (backdropCode: string) => {
    setSelectedBackdropCode(backdropCode);
    setPreviewBackdrop(null);
    setBookingConfirmed(false);
    scrollToSection('booking');
  };

  // Horizontal Carousel scroll buttons
  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const scrollAmount = 340;
    carouselRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  // Handle Booking Form Submission
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    setBookingRefCode(`CM-${randomDigits}`);
    setBookingConfirmed(true);
  };

  // Handle Proofing PIN Check
  const handleVerifyPin = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = pinInput.trim().toUpperCase();
    if (cleaned === 'MOMENTS' || cleaned === 'MOMENTS2026') {
      setPinUnlocked(true);
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  const activePackage =
    STYLE_PACKAGES.find((p) => p.id === selectedStyle) || STYLE_PACKAGES[0];
  const activeBackdrop =
    BACKDROP_ITEMS.find((b) => b.code === selectedBackdropCode) || BACKDROP_ITEMS[0];
  const activeDateObj =
    AVAILABLE_DATES.find((d) => d.id === selectedDate) || AVAILABLE_DATES[0];

  return (
    <div className="min-h-screen w-full overflow-x-hidden flex flex-col bg-[#FBF9F5] text-[#231F20]">
      {/* =====================================================================
          1. MINIMAL STICKY HEADER
         ===================================================================== */}
      <header className="sticky top-0 z-40 w-full bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#EBE5DF] transition-all">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
          {/* Left: Classic Serif Wordmark */}
          <a
            href="#top"
            className="group flex items-center gap-2 sm:gap-3 min-w-0 focus:outline-none"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#231F20] text-[#C5A059] flex items-center justify-center border border-[#C5A059]/40 shadow-sm shrink-0 group-hover:bg-[#C5A059] group-hover:text-[#231F20] transition-colors">
              <Camera className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <span className="block font-serif text-base sm:text-2xl font-bold tracking-tight text-[#231F20] truncate">
                {t.brand}
              </span>
              <span className="block text-[9px] sm:text-[11px] uppercase tracking-[0.14em] sm:tracking-[0.22em] text-[#8C827A] font-medium truncate">
                {t.brandTagline}
              </span>
            </div>
          </a>

          {/* Center Quick Section Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#3A3432]">
            <button
              type="button"
              onClick={() => scrollToSection('special-event')}
              className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{t.nav.special}</span>
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('backdrops')}
              className="hover:text-[#C5A059] transition-colors"
            >
              {t.nav.backdrops}
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('booking')}
              className="hover:text-[#C5A059] transition-colors"
            >
              {t.nav.booking}
            </button>
          </nav>

          {/* Right: English / Español Language Toggle & Pill-Shaped Book Now CTA */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            <div
              role="group"
              aria-label="Language switcher"
              className="inline-flex items-center rounded-full bg-[#F3EFEA] p-0.5 sm:p-1 border border-[#EBE5DF]"
            >
              <button
                type="button"
                onClick={() => handleToggleLanguage('en')}
                className={`px-2 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold transition-all ${
                  lang === 'en'
                    ? 'bg-[#231F20] text-[#FBF9F5] shadow-sm'
                    : 'text-[#3A3432] hover:text-[#231F20]'
                }`}
              >
                <span className="sm:hidden">EN</span>
                <span className="hidden sm:inline">English</span>
              </button>
              <button
                type="button"
                onClick={() => handleToggleLanguage('es')}
                className={`px-2 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold transition-all ${
                  lang === 'es'
                    ? 'bg-[#C5A059] text-[#231F20] shadow-sm'
                    : 'text-[#3A3432] hover:text-[#231F20]'
                }`}
              >
                <span className="sm:hidden">ES</span>
                <span className="hidden sm:inline">Español</span>
              </button>
            </div>

            <button
              type="button"
              onClick={() => scrollToSection('booking')}
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full bg-[#231F20] text-[#FBF9F5] hover:bg-[#C5A059] hover:text-[#231F20] px-3.5 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold whitespace-nowrap shadow-sm transition-all duration-200"
            >
              <span>{t.nav.bookNow}</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 hidden sm:inline-block" />
            </button>
          </div>
        </div>
      </header>

      <main id="top" className="flex-1 w-full">
        {/* ===================================================================
            2. HERO SECTION (With 3-Card Staggered Photo Showcase)
           =================================================================== */}
        <section className="relative overflow-hidden editorial-grid-bg pt-8 pb-16 sm:pt-16 sm:pb-28 border-b border-[#EBE5DF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
              {/* Left Column: Warm Editorial Headline & Dual CTA */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-6 space-y-5 sm:space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start"
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4ECE1] border border-[#C5A059]/40 text-[#A68238] text-xs font-semibold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t.hero.eyebrow}</span>
                </div>

                <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#231F20] leading-[1.12] tracking-tight">
                  {t.hero.headline}
                </h1>

                <p className="font-serif text-lg sm:text-2xl text-[#A68238] italic">
                  {t.hero.subtitle}
                </p>

                <p className="text-sm sm:text-base text-[#3A3432] leading-relaxed max-w-xl">
                  {t.hero.description}
                </p>

                {/* Dual CTA Buttons */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => scrollToSection('special-event')}
                    className="w-full sm:w-auto justify-center inline-flex items-center gap-2.5 rounded-full bg-[#C5A059] hover:bg-[#b58e47] text-[#231F20] font-bold px-6 sm:px-7 py-3.5 sm:py-4 text-sm sm:text-base shadow-heirloom transition-all"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>{t.hero.primaryCta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => scrollToSection('backdrops')}
                    className="w-full sm:w-auto justify-center inline-flex items-center gap-2.5 rounded-full bg-white hover:bg-[#F3EFEA] text-[#231F20] font-semibold px-6 py-3.5 sm:py-4 text-sm sm:text-base border border-[#EBE5DF] shadow-sm transition-all"
                  >
                    <ImageIcon className="w-4 h-4 text-[#C5A059]" />
                    <span>{t.hero.secondaryCta}</span>
                  </button>
                </div>

                {/* Quick Coordinator Strip */}
                <div className="pt-4 border-t border-[#EBE5DF] w-full flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-[#3A3432]">
                  <a
                    href="tel:7083597234"
                    className="inline-flex items-center gap-2 font-medium hover:text-[#C5A059] transition-colors"
                  >
                    <span className="w-7 h-7 rounded-full bg-[#F4ECE1] text-[#A68238] flex items-center justify-center shrink-0">
                      <Phone className="w-3.5 h-3.5" />
                    </span>
                    <span>
                      <strong>Drew (EN):</strong> 708-359-7234
                    </span>
                  </a>
                  <a
                    href="tel:3233713512"
                    className="inline-flex items-center gap-2 font-medium hover:text-[#C5A059] transition-colors"
                  >
                    <span className="w-7 h-7 rounded-full bg-[#F4ECE1] text-[#A68238] flex items-center justify-center shrink-0">
                      <Phone className="w-3.5 h-3.5" />
                    </span>
                    <span>
                      <strong>Yolanda (ES):</strong> 323-371-3512
                    </span>
                  </a>
                </div>
              </motion.div>

              {/* Right Column: 3-Card Staggered Photo Showcase */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="lg:col-span-6 space-y-5 w-full"
              >
                {/* Interactive Finish Switcher above the 3-card showcase */}
                <div className="flex flex-wrap items-center justify-between gap-2 bg-white/90 backdrop-blur-sm px-3.5 sm:px-4 py-2.5 rounded-2xl border border-[#EBE5DF] shadow-sm">
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#8C827A] flex items-center gap-1.5">
                    <SlidersHorizontal className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                    {t.hero.finishPreviewLabel}
                  </span>
                  <div className="inline-flex rounded-full bg-[#F3EFEA] p-1 border border-[#EBE5DF]">
                    <button
                      type="button"
                      onClick={() => setHeroFinish('color')}
                      className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                        heroFinish === 'color'
                          ? 'bg-[#231F20] text-[#FBF9F5]'
                          : 'text-[#3A3432] hover:text-[#231F20]'
                      }`}
                    >
                      {t.hero.colorBtn}
                    </button>
                    <button
                      type="button"
                      onClick={() => setHeroFinish('antique')}
                      className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                        heroFinish === 'antique'
                          ? 'bg-[#C5A059] text-[#231F20]'
                          : 'text-[#3A3432] hover:text-[#231F20]'
                      }`}
                    >
                      {t.hero.antiqueBtn}
                    </button>
                  </div>
                </div>

                {/* 3-Card Staggered Editorial Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                  {/* Card 1: Family Color (Left Tall Staggered Card) */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="sm:col-span-5 bg-white p-3 rounded-2xl border border-[#EBE5DF] shadow-editorial"
                  >
                    <div className="relative aspect-[4/4] sm:aspect-[3/4] rounded-xl overflow-hidden bg-[#231F20]">
                      <img
                        src="/images/portrait-family-generations.jpg"
                        alt={t.hero.cards.family.title}
                        className={`w-full h-full object-cover transition-all duration-700 ${
                          heroFinish === 'antique' ? 'antique-sepia-filter' : ''
                        }`}
                      />
                      <div className="absolute inset-0 heirloom-vignette pointer-events-none" />
                      <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-[#231F20]/85 text-[#FBF9F5] text-[10px] font-bold uppercase tracking-wider">
                        SR177V
                      </span>
                    </div>
                    <div className="pt-3 px-1">
                      <div className="font-serif font-bold text-sm sm:text-base text-[#231F20]">
                        {t.hero.cards.family.title}
                      </div>
                      <div className="text-[11px] text-[#8C827A] truncate">
                        {t.hero.cards.family.subtitle}
                      </div>
                    </div>
                  </motion.div>

                  {/* Right Column of Staggered Stack: Card 2 (Vintage Antique) & Card 3 (Milestone Child) */}
                  <div className="sm:col-span-7 space-y-4">
                    {/* Card 2: Vintage Antique (Featured Centerpiece Card) */}
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="bg-white p-3.5 rounded-2xl border-2 border-[#C5A059]/60 shadow-editorial-lg"
                    >
                      <div className="relative aspect-[16/11] rounded-xl overflow-hidden bg-[#231F20]">
                        <img
                          src="/images/portrait-father-child.jpg"
                          alt={t.hero.cards.vintage.title}
                          className={`w-full h-full object-cover transition-all duration-700 ${
                            heroFinish === 'antique' ? 'antique-sepia-filter' : ''
                          }`}
                        />
                        <div className="absolute inset-0 heirloom-vignette pointer-events-none" />
                        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                          <span className="px-2.5 py-0.5 rounded-full bg-[#C5A059] text-[#231F20] text-[10px] font-bold uppercase tracking-wider">
                            {t.hero.cards.vintage.title}
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-[#231F20]/85 text-[#FBF9F5] text-[10px] font-semibold">
                            BrickWall
                          </span>
                        </div>
                      </div>
                      <div className="pt-2.5 px-1 flex items-center justify-between gap-2">
                        <div>
                          <div className="font-serif font-bold text-sm sm:text-base text-[#231F20]">
                            {t.hero.cards.vintage.title}
                          </div>
                          <div className="text-[11px] text-[#8C827A]">
                            {t.hero.cards.vintage.subtitle}
                          </div>
                        </div>
                        <span className="px-2.5 py-1 rounded-lg bg-[#F4ECE1] text-[#A68238] text-xs font-bold shrink-0">
                          12×18
                        </span>
                      </div>
                    </motion.div>

                    {/* Card 3: Milestone Child */}
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="bg-white p-3 rounded-2xl border border-[#EBE5DF] shadow-editorial sm:ml-6"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="relative w-24 h-28 sm:w-28 sm:h-32 rounded-xl overflow-hidden bg-[#231F20] shrink-0">
                          <img
                            src="/images/portrait-child-wicker.jpg"
                            alt={t.hero.cards.child.title}
                            className={`w-full h-full object-cover transition-all duration-700 ${
                              heroFinish === 'antique' ? 'antique-sepia-filter' : ''
                            }`}
                          />
                          <div className="absolute inset-0 heirloom-vignette pointer-events-none" />
                        </div>
                        <div className="space-y-1.5 pr-2">
                          <span className="inline-block px-2 py-0.5 rounded-md bg-[#F4ECE1] text-[#A68238] text-[10px] font-bold uppercase tracking-wider">
                            Studio Heirloom
                          </span>
                          <div className="font-serif font-bold text-base text-[#231F20]">
                            {t.hero.cards.child.title}
                          </div>
                          <p className="text-xs text-[#8C827A] leading-relaxed">
                            {t.hero.cards.child.subtitle}
                          </p>
                          <button
                            type="button"
                            onClick={() => handleClaimOffer(heroFinish)}
                            className="text-xs font-bold text-[#A68238] hover:text-[#231F20] inline-flex items-center gap-1 pt-0.5"
                          >
                            <span>$19.95 Special</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            3. SPECIAL EVENT FEATURE CARD (High-Impact Spotlight)
           =================================================================== */}
        <section
          id="special-event"
          className="scroll-mt-24 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl bg-[#231F20] text-[#FBF9F5] border-2 border-[#C5A059] shadow-editorial-lg overflow-hidden"
          >
            {/* Subtle Gold Ambient Glow */}
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#C5A059]/15 blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              {/* Left / Center Luxury Event Details */}
              <div className="lg:col-span-7 p-7 sm:p-10 lg:p-12 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#C5A059] text-[#231F20] text-xs font-bold uppercase tracking-widest">
                    <Sparkles className="w-3.5 h-3.5" />
                    {t.eventCard.badge}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#E5D5B5]">
                    {t.eventCard.presentedBy}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex flex-wrap items-baseline gap-3">
                    <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#FBF9F5] tracking-tight">
                      {t.eventCard.offerTitle}
                    </h2>
                    <span className="text-sm text-[#D8D1CA] line-through">
                      {t.eventCard.regularValue}
                    </span>
                  </div>
                  <p className="text-base sm:text-lg text-[#E5D5B5] font-medium">
                    {t.eventCard.offerSubtitle}
                  </p>
                </div>

                {/* Sitting Fee Note Pill */}
                <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#C5A059]/15 border border-[#C5A059]/50 text-[#F4ECE1] text-xs sm:text-sm font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>{t.eventCard.sittingFeeNote}</span>
                </div>

                {/* Key Event Highlights */}
                <ul className="space-y-2.5 pt-1">
                  {t.eventCard.highlights.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[#FBF9F5]/90"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Primary Quick-Action CTA & Flyer Lightbox Trigger */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    type="button"
                    onClick={() => handleClaimOffer()}
                    className="inline-flex items-center gap-2.5 rounded-xl bg-[#C5A059] hover:bg-[#d4b06a] text-[#231F20] font-bold px-7 py-4 text-sm sm:text-base shadow-heirloom transition-all"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{t.eventCard.claimCta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setFlyerModalOpen(true)}
                    className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 text-[#FBF9F5] border border-white/20 px-4 py-4 text-xs sm:text-sm font-semibold transition-all"
                  >
                    <Eye className="w-4 h-4 text-[#C5A059]" />
                    <span>{t.eventCard.viewFlyerBtn}</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Official Flyer Preview Card & Direct Coordinator Numbers */}
              <div className="lg:col-span-5 bg-[#2B2627] p-7 sm:p-10 border-t lg:border-t-0 lg:border-l border-[#C5A059]/30 flex flex-col justify-between gap-6">
                <div
                  onClick={() => setFlyerModalOpen(true)}
                  className="cursor-pointer group relative rounded-2xl overflow-hidden border-2 border-[#C5A059]/50 bg-[#231F20] shadow-md"
                >
                  <img
                    src="/images/studio-event-flyer.jpg"
                    alt="Chiquita's Moments Special Event $19.95 Flyer"
                    className="w-full h-64 sm:h-72 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#231F20] via-transparent to-transparent flex items-end justify-between p-4">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059] block">
                        Official Event Flyer
                      </span>
                      <span className="text-xs text-[#FBF9F5] font-medium">
                        12×18 Color or Antique • $19.95
                      </span>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-[#C5A059] text-[#231F20] text-xs font-bold">
                      Zoom +
                    </span>
                  </div>
                </div>

                {/* Direct Phone Coordinator Box */}
                <div className="space-y-2.5">
                  <div className="text-xs text-[#D8D1CA] font-medium">
                    {t.eventCard.callPrompt}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <a
                      href="tel:7083597234"
                      className="p-3 rounded-xl bg-[#231F20] border border-[#C5A059]/30 hover:border-[#C5A059] transition-colors flex flex-col"
                    >
                      <span className="text-[10px] uppercase tracking-wider text-[#C5A059] font-bold">
                        English • Drew
                      </span>
                      <span className="text-sm font-bold text-[#FBF9F5] mt-0.5">
                        708-359-7234
                      </span>
                    </a>
                    <a
                      href="tel:3233713512"
                      className="p-3 rounded-xl bg-[#231F20] border border-[#C5A059]/30 hover:border-[#C5A059] transition-colors flex flex-col"
                    >
                      <span className="text-[10px] uppercase tracking-wider text-[#C5A059] font-bold">
                        Español • Yolanda
                      </span>
                      <span className="text-sm font-bold text-[#FBF9F5] mt-0.5">
                        323-371-3512
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ===================================================================
            4. INTERACTIVE BACKDROP DRAWER / HORIZONTAL SNAP CAROUSEL
           =================================================================== */}
        <section
          id="backdrops"
          className="scroll-mt-24 py-16 sm:py-20 border-y border-[#EBE5DF] bg-white/60"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            {/* Header & Carousel Controls */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A68238]">
                  {t.backdrops.eyebrow}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#231F20]">
                  {t.backdrops.title}
                </h2>
                <p className="text-sm sm:text-base text-[#3A3432]">
                  {t.backdrops.subtitle}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => scrollCarousel('left')}
                  aria-label="Scroll backdrops left"
                  className="w-11 h-11 rounded-full bg-white border border-[#EBE5DF] hover:border-[#C5A059] flex items-center justify-center text-[#231F20] shadow-sm transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollCarousel('right')}
                  aria-label="Scroll backdrops right"
                  className="w-11 h-11 rounded-full bg-white border border-[#EBE5DF] hover:border-[#C5A059] flex items-center justify-center text-[#231F20] shadow-sm transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Horizontal Snap Carousel */}
            <div
              ref={carouselRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4 pt-1"
            >
              {BACKDROP_ITEMS.map((item) => {
                const isSelected = selectedBackdropCode === item.code;
                return (
                  <motion.div
                    key={item.code}
                    whileHover={{ y: -5 }}
                    onClick={() => {
                      setPreviewBackdrop(item);
                      setModalFinish(
                        item.recommendedFinish === 'Vivid Color' ? 'color' : 'antique'
                      );
                    }}
                    className={`snap-start shrink-0 w-[290px] sm:w-[320px] cursor-pointer rounded-2xl bg-white border transition-all overflow-hidden flex flex-col justify-between shadow-editorial ${
                      isSelected
                        ? 'border-2 border-[#C5A059] ring-2 ring-[#C5A059]/20'
                        : 'border-[#EBE5DF] hover:border-[#C5A059]'
                    }`}
                  >
                    <div>
                      <div className="relative h-52 bg-[#231F20] overflow-hidden">
                        <img
                          src={item.imageUrl}
                          alt={item.badge}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#231F20]/80 via-transparent to-transparent" />

                        {/* Top Code Badge */}
                        <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#231F20]/90 text-[#C5A059] text-xs font-bold border border-[#C5A059]/40">
                          {item.badge}
                        </span>

                        {/* Bottom Finish Tag */}
                        <span className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-md bg-white/90 text-[#231F20] text-[11px] font-semibold">
                          {item.tag[lang]}
                        </span>
                      </div>

                      <div className="p-5 space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-serif text-xl font-bold text-[#231F20]">
                            {item.name[lang]}
                          </h3>
                          <span className="text-xs font-semibold text-[#A68238]">
                            {item.recommendedFinish}
                          </span>
                        </div>
                        <p className="text-xs text-[#3A3432] line-clamp-2 leading-relaxed">
                          {item.description[lang]}
                        </p>
                      </div>
                    </div>

                    <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-[#EBE5DF]/70">
                      <span className="text-xs font-bold text-[#231F20] inline-flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5 text-[#C5A059]" />
                        {t.backdrops.clickToPreview}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleUseBackdrop(item.code);
                        }}
                        className="px-3 py-1.5 rounded-lg bg-[#F4ECE1] hover:bg-[#C5A059] text-[#231F20] text-xs font-bold transition-colors"
                      >
                        {t.backdrops.useBackdropBtn} →
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===================================================================
            5. SEAMLESS 3-STEP BOOKING SECTION
           =================================================================== */}
        <section
          id="booking"
          className="scroll-mt-24 py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12"
        >
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A68238]">
              {t.booking.eyebrow}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#231F20]">
              {t.booking.title}
            </h2>
            <p className="text-sm sm:text-base text-[#3A3432]">
              {t.booking.subtitle}
            </p>
          </div>

          <AnimatePresence mode="wait">
            {bookingConfirmed ? (
              /* Instant Animated Confirmation Card */
              <motion.div
                key="confirmation"
                initial={{ opacity: 0, scale: 0.96, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                className="max-w-3xl mx-auto rounded-2xl bg-white border-2 border-[#C5A059] shadow-editorial-lg p-7 sm:p-10 space-y-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EBE5DF] pb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#C5A059] text-[#231F20] flex items-center justify-center shrink-0 shadow-sm">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#A68238]">
                        {t.booking.referenceLabel}: {bookingRefCode}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#231F20] mt-0.5">
                        {t.booking.confirmationTitle}
                      </h3>
                      <p className="text-sm text-[#3A3432] mt-1">
                        {t.booking.confirmationSubtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Reservation Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#FBF9F5] p-5 rounded-2xl border border-[#EBE5DF]">
                  <div>
                    <div className="text-xs text-[#8C827A] uppercase font-semibold">
                      Client & Group Size
                    </div>
                    <div className="font-serif font-bold text-lg text-[#231F20] mt-0.5">
                      {clientName || 'Valued Studio Guest'}
                    </div>
                    <div className="text-xs text-[#3A3432]">
                      {clientPhone || 'Phone on file'} • {groupSize}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-[#8C827A] uppercase font-semibold">
                      Date & Appointment Slot
                    </div>
                    <div className="font-serif font-bold text-lg text-[#231F20] mt-0.5">
                      {activeDateObj.label[lang]} at {selectedTime}
                    </div>
                    <div className="text-xs text-[#A68238] font-semibold">
                      $10.00 sitting fee due at appointment
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-[#8C827A] uppercase font-semibold">
                      Selected Style & Finish
                    </div>
                    <div className="font-serif font-bold text-base text-[#231F20] mt-0.5">
                      {activePackage.name[lang]} ({activePackage.price})
                    </div>
                    <div className="text-xs text-[#3A3432] capitalize">
                      Finish: {selectedFinish}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-[#8C827A] uppercase font-semibold">
                      Backdrop Set Code
                    </div>
                    <div className="font-serif font-bold text-base text-[#231F20] mt-0.5">
                      {activeBackdrop.badge}
                    </div>
                    <div className="text-xs text-[#3A3432]">
                      {activeBackdrop.name[lang]}
                    </div>
                  </div>
                </div>

                {/* Assigned Coordinator Card */}
                <div className="p-5 rounded-2xl bg-[#F4ECE1]/70 border border-[#C5A059]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#A68238]">
                      {t.booking.assignedCoordinatorLabel}
                    </span>
                    <div className="font-serif text-xl font-bold text-[#231F20] mt-0.5">
                      {coordinatorLang === 'es'
                        ? 'Yolanda (Atención en Español)'
                        : 'Drew (English Studio Coordinator)'}
                    </div>
                    <p className="text-xs text-[#3A3432] mt-0.5">
                      {t.booking.coordinatorNote}
                    </p>
                  </div>

                  <a
                    href={
                      coordinatorLang === 'es'
                        ? 'tel:3233713512'
                        : 'tel:7083597234'
                    }
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#231F20] text-[#FBF9F5] text-xs sm:text-sm font-bold hover:bg-[#C5A059] hover:text-[#231F20] transition-colors shrink-0"
                  >
                    <Phone className="w-4 h-4" />
                    <span>
                      {coordinatorLang === 'es' ? '323-371-3512' : '708-359-7234'}
                    </span>
                  </a>
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => setBookingConfirmed(false)}
                    className="text-xs font-semibold text-[#8C827A] hover:text-[#231F20] underline underline-offset-4"
                  >
                    {t.booking.editBookingBtn}
                  </button>
                </div>
              </motion.div>
            ) : (
              /* 3-Step Interactive Booking Form + Live Summary Sidebar */
              <motion.form
                key="booking-form"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                onSubmit={handleBookingSubmit}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                {/* Left 8 Columns: The 3 Steps */}
                <div className="lg:col-span-8 space-y-8">
                  {/* STEP 1: PICK STYLE */}
                  <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#EBE5DF] shadow-editorial space-y-6">
                    <div className="flex items-center justify-between border-b border-[#EBE5DF] pb-4">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-[#231F20] text-[#C5A059] font-serif font-bold text-sm flex items-center justify-center">
                          1
                        </span>
                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#231F20]">
                          {t.booking.step1Title}
                        </h3>
                      </div>
                      <span className="text-xs font-semibold text-[#A68238]">
                        {activePackage.price}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {STYLE_PACKAGES.map((pkg) => {
                        const active = selectedStyle === pkg.id;
                        return (
                          <div
                            key={pkg.id}
                            onClick={() => {
                              setSelectedStyle(pkg.id);
                              setSelectedFinish(pkg.defaultFinish);
                            }}
                            className={`cursor-pointer rounded-2xl p-5 border transition-all flex flex-col justify-between ${
                              active
                                ? 'bg-[#FBF9F5] border-2 border-[#C5A059] shadow-sm'
                                : 'bg-white border-[#EBE5DF] hover:border-[#C5A059]/60'
                            }`}
                          >
                            <div className="space-y-2.5">
                              <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#F4ECE1] text-[#A68238] text-[10px] font-bold uppercase tracking-wider">
                                {pkg.badge[lang]}
                              </span>
                              <div className="font-serif font-bold text-lg text-[#231F20]">
                                {pkg.name[lang]}
                              </div>
                              <div className="font-serif text-2xl font-extrabold text-[#231F20]">
                                {pkg.price}
                              </div>
                              <div className="text-[11px] font-semibold text-[#A68238]">
                                {pkg.sittingFeeNote[lang]}
                              </div>
                              <p className="text-xs text-[#3A3432] leading-relaxed pt-1">
                                {pkg.desc[lang]}
                              </p>
                            </div>

                            <ul className="space-y-1.5 pt-4 mt-4 border-t border-[#EBE5DF]">
                              {pkg.features[lang].map((feat, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-1.5 text-[11px] text-[#3A3432]"
                                >
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                                  <span>{feat}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>

                    {/* Finish Preference Bar */}
                    <div className="pt-2 flex flex-wrap items-center justify-between gap-3 bg-[#FBF9F5] p-4 rounded-xl border border-[#EBE5DF]">
                      <span className="text-xs sm:text-sm font-semibold text-[#231F20]">
                        {t.booking.finishPreferenceLabel}
                      </span>
                      <div className="inline-flex rounded-full bg-[#F3EFEA] p-1 border border-[#EBE5DF]">
                        <button
                          type="button"
                          onClick={() => setSelectedFinish('color')}
                          className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                            selectedFinish === 'color'
                              ? 'bg-[#231F20] text-[#FBF9F5]'
                              : 'text-[#3A3432]'
                          }`}
                        >
                          {t.hero.colorBtn}
                        </button>
                        <button
                          type="button"
                          onClick={() => setSelectedFinish('antique')}
                          className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                            selectedFinish === 'antique'
                              ? 'bg-[#C5A059] text-[#231F20]'
                              : 'text-[#3A3432]'
                          }`}
                        >
                          {t.hero.antiqueBtn}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* STEP 2: CHOOSE BACKDROP & SELECT DATE/TIME SLOT */}
                  <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#EBE5DF] shadow-editorial space-y-6">
                    <div className="flex items-center justify-between border-b border-[#EBE5DF] pb-4">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-[#231F20] text-[#C5A059] font-serif font-bold text-sm flex items-center justify-center">
                          2
                        </span>
                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#231F20]">
                          {t.booking.step2Title}
                        </h3>
                      </div>
                      <span className="text-xs font-bold text-[#A68238]">
                        {selectedBackdropCode}
                      </span>
                    </div>

                    {/* Backdrop Pill Selector */}
                    <div className="space-y-2.5">
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#8C827A]">
                        {t.booking.backdropSelectLabel}
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {BACKDROP_ITEMS.map((b) => {
                          const isChosen = selectedBackdropCode === b.code;
                          return (
                            <button
                              key={b.code}
                              type="button"
                              onClick={() => setSelectedBackdropCode(b.code)}
                              className={`p-2.5 rounded-xl border text-left transition-all flex items-center gap-3 ${
                                isChosen
                                  ? 'bg-[#FBF9F5] border-2 border-[#C5A059] shadow-sm'
                                  : 'bg-white border-[#EBE5DF] hover:border-[#C5A059]/60'
                              }`}
                            >
                              <img
                                src={b.imageUrl}
                                alt={b.code}
                                className="w-11 h-11 rounded-lg object-cover shrink-0"
                              />
                              <div className="min-w-0">
                                <div className="text-xs font-bold text-[#231F20] truncate">
                                  {b.code}
                                </div>
                                <div className="text-[11px] text-[#8C827A] truncate">
                                  {b.name[lang]}
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Date & Time Slot Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                      {/* Date Picker */}
                      <div className="space-y-2.5">
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#8C827A]">
                          {t.booking.dateSelectLabel}
                        </label>
                        <div className="grid grid-cols-2 gap-2.5">
                          {AVAILABLE_DATES.map((d) => {
                            const active = selectedDate === d.id;
                            return (
                              <button
                                key={d.id}
                                type="button"
                                onClick={() => setSelectedDate(d.id)}
                                className={`p-3 rounded-xl border text-left transition-all ${
                                  active
                                    ? 'bg-[#231F20] text-[#FBF9F5] border-[#231F20]'
                                    : 'bg-[#FBF9F5] text-[#231F20] border-[#EBE5DF] hover:border-[#C5A059]'
                                }`}
                              >
                                <div className="text-xs sm:text-sm font-bold">
                                  {d.label[lang]}
                                </div>
                                <div
                                  className={`text-[10px] mt-0.5 ${
                                    active ? 'text-[#C5A059]' : 'text-[#8C827A]'
                                  }`}
                                >
                                  {d.tag[lang]}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Time Slot Picker */}
                      <div className="space-y-2.5">
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#8C827A]">
                          {t.booking.timeSelectLabel}
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {TIME_SLOTS.map((slot) => {
                            const active = selectedTime === slot;
                            return (
                              <button
                                key={slot}
                                type="button"
                                onClick={() => setSelectedTime(slot)}
                                className={`py-2.5 px-2 rounded-xl border text-xs font-bold transition-all ${
                                  active
                                    ? 'bg-[#C5A059] text-[#231F20] border-[#C5A059]'
                                    : 'bg-[#FBF9F5] text-[#231F20] border-[#EBE5DF] hover:border-[#C5A059]'
                                }`}
                              >
                                {slot}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* STEP 3: CONTACT INFO & DUAL LANGUAGE COORDINATOR ROUTING */}
                  <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#EBE5DF] shadow-editorial space-y-6">
                    <div className="flex items-center gap-3 border-b border-[#EBE5DF] pb-4">
                      <span className="w-8 h-8 rounded-full bg-[#231F20] text-[#C5A059] font-serif font-bold text-sm flex items-center justify-center">
                        3
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#231F20]">
                        {t.booking.step3Title}
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#3A3432] mb-1.5">
                          {t.booking.nameLabel} *
                        </label>
                        <input
                          type="text"
                          required
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          placeholder={t.booking.namePlaceholder}
                          className="w-full rounded-xl bg-[#FBF9F5] border border-[#EBE5DF] focus:border-[#C5A059] focus:outline-none px-4 py-3 text-sm text-[#231F20]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#3A3432] mb-1.5">
                          {t.booking.phoneLabel} *
                        </label>
                        <input
                          type="tel"
                          required
                          value={clientPhone}
                          onChange={(e) => setClientPhone(e.target.value)}
                          placeholder={t.booking.phonePlaceholder}
                          className="w-full rounded-xl bg-[#FBF9F5] border border-[#EBE5DF] focus:border-[#C5A059] focus:outline-none px-4 py-3 text-sm text-[#231F20]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#3A3432] mb-1.5">
                          {t.booking.groupSizeLabel}
                        </label>
                        <select
                          value={groupSize}
                          onChange={(e) => setGroupSize(e.target.value)}
                          className="w-full rounded-xl bg-[#FBF9F5] border border-[#EBE5DF] focus:border-[#C5A059] focus:outline-none px-3.5 py-3 text-sm text-[#231F20]"
                        >
                          {t.booking.groupSizeOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Dual Language Coordinator Routing Cards */}
                    <div className="space-y-2.5 pt-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#8C827A]">
                        {t.booking.coordinatorLabel}
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* English Coordinator: Drew */}
                        <div
                          onClick={() => setCoordinatorLang('en')}
                          className={`cursor-pointer p-4 rounded-2xl border transition-all flex items-center justify-between ${
                            coordinatorLang === 'en'
                              ? 'bg-[#FBF9F5] border-2 border-[#C5A059] shadow-sm'
                              : 'bg-white border-[#EBE5DF] hover:border-[#C5A059]/60'
                          }`}
                        >
                          <div>
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C827A]">
                              {t.booking.englishCoordinator}
                            </span>
                            <div className="font-serif text-lg font-bold text-[#231F20] mt-0.5">
                              Drew • 708-359-7234
                            </div>
                          </div>
                          <a
                            href="tel:7083597234"
                            onClick={(e) => e.stopPropagation()}
                            className="w-10 h-10 rounded-xl bg-[#F4ECE1] hover:bg-[#C5A059] text-[#231F20] flex items-center justify-center transition-colors"
                            title="Call Drew (708-359-7234)"
                          >
                            <Phone className="w-4 h-4" />
                          </a>
                        </div>

                        {/* Spanish Coordinator: Yolanda */}
                        <div
                          onClick={() => setCoordinatorLang('es')}
                          className={`cursor-pointer p-4 rounded-2xl border transition-all flex items-center justify-between ${
                            coordinatorLang === 'es'
                              ? 'bg-[#FBF9F5] border-2 border-[#C5A059] shadow-sm'
                              : 'bg-white border-[#EBE5DF] hover:border-[#C5A059]/60'
                          }`}
                        >
                          <div>
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#A68238]">
                              {t.booking.spanishCoordinator}
                            </span>
                            <div className="font-serif text-lg font-bold text-[#231F20] mt-0.5">
                              Yolanda • 323-371-3512
                            </div>
                          </div>
                          <a
                            href="tel:3233713512"
                            onClick={(e) => e.stopPropagation()}
                            className="w-10 h-10 rounded-xl bg-[#F4ECE1] hover:bg-[#C5A059] text-[#231F20] flex items-center justify-center transition-colors"
                            title="Llamar a Yolanda (323-371-3512)"
                          >
                            <Phone className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                      <p className="text-xs text-[#8C827A]">
                        {t.booking.coordinatorNote}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right 4 Columns: Sticky Live Summary & One-Click Submit */}
                <div className="lg:col-span-4 lg:sticky lg:top-28 bg-white rounded-2xl border-2 border-[#C5A059]/60 shadow-editorial-lg p-6 sm:p-7 space-y-6">
                  <div className="flex items-center justify-between border-b border-[#EBE5DF] pb-4">
                    <h4 className="font-serif text-xl font-bold text-[#231F20]">
                      {t.booking.summaryHeader}
                    </h4>
                    <span className="px-2.5 py-1 rounded-full bg-[#F4ECE1] text-[#A68238] text-xs font-bold">
                      12×18 Studio
                    </span>
                  </div>

                  {/* Selected Backdrop Mini Preview */}
                  <div className="flex items-center gap-3.5 bg-[#FBF9F5] p-3 rounded-xl border border-[#EBE5DF]">
                    <img
                      src={activeBackdrop.imageUrl}
                      alt={activeBackdrop.code}
                      className="w-16 h-16 rounded-lg object-cover shrink-0"
                    />
                    <div>
                      <div className="text-xs font-bold text-[#A68238] uppercase">
                        Backdrop: {activeBackdrop.code}
                      </div>
                      <div className="font-serif font-bold text-sm text-[#231F20]">
                        {activeBackdrop.name[lang]}
                      </div>
                      <div className="text-xs text-[#8C827A] capitalize">
                        Finish: {selectedFinish}
                      </div>
                    </div>
                  </div>

                  {/* Date / Time / Coordinator Summary */}
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-[#8C827A] flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-[#C5A059]" />
                        Date & Time
                      </span>
                      <span className="font-bold text-[#231F20]">
                        {activeDateObj.label[lang]} • {selectedTime}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[#8C827A] flex items-center gap-1.5">
                        <Users className="w-4 h-4 text-[#C5A059]" />
                        Coordinator
                      </span>
                      <span className="font-bold text-[#231F20]">
                        {coordinatorLang === 'es'
                          ? 'Yolanda (Español)'
                          : 'Drew (English)'}
                      </span>
                    </div>
                  </div>

                  {/* Pricing Breakdown */}
                  <div className="border-t border-[#EBE5DF] pt-4 space-y-2">
                    <div className="flex items-center justify-between text-xs text-[#3A3432]">
                      <span>{t.booking.dueAtAppointment}</span>
                      <span className="font-bold text-[#231F20]">$10.00</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold text-[#231F20]">
                        {t.booking.packageBalance}
                      </span>
                      <span className="font-serif text-2xl font-extrabold text-[#231F20]">
                        {activePackage.price}
                      </span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-[#231F20] hover:bg-[#C5A059] text-[#FBF9F5] hover:text-[#231F20] font-bold text-sm sm:text-base shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    <span>{t.booking.submitBtn}</span>
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </section>
      </main>

      {/* =====================================================================
          6. CONCISE FOOTER (Client Proofing UI hidden on frontend; preserved in code for future use)
         ===================================================================== */}
      <footer className="bg-[#231F20] text-[#FBF9F5] border-t-2 border-[#C5A059]/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between">
            {/* Brand & Service Area */}
            <div className="md:col-span-6 space-y-2">
              <div className="flex items-center gap-2.5">
                <Camera className="w-5 h-5 text-[#C5A059]" />
                <span className="font-serif text-2xl font-bold tracking-tight">
                  {t.brand}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#D8D1CA] flex items-start gap-2 max-w-xl">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>{t.footer.serviceArea}</span>
              </p>
              <p className="text-xs text-[#8C827A]">{t.footer.addressLine}</p>
            </div>

            {/* Tap-to-Call Coordinator Buttons */}
            <div className="md:col-span-6 flex flex-wrap md:justify-end gap-3">
              <a
                href="tel:7083597234"
                className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-[#C5A059]/40 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wider text-[#C5A059] font-bold">
                    {t.footer.englishCallLabel}
                  </div>
                  <div className="text-sm font-bold text-[#FBF9F5]">
                    708-359-7234
                  </div>
                </div>
              </a>

              <a
                href="tel:3233713512"
                className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-[#C5A059]/15 hover:bg-[#C5A059]/25 border border-[#C5A059]/60 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wider text-[#C5A059] font-bold">
                    {t.footer.spanishCallLabel}
                  </div>
                  <div className="text-sm font-bold text-[#FBF9F5]">
                    323-371-3512
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C827A]">
            <div>
              © {new Date().getFullYear()} {t.footer.rights}
            </div>
          </div>
        </div>
      </footer>

      {/* =====================================================================
          MODAL A: BACKDROP PREVIEW MODAL
         ===================================================================== */}
      <AnimatePresence>
        {previewBackdrop && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewBackdrop(null)}
            className="fixed inset-0 z-50 bg-[#231F20]/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FBF9F5] rounded-2xl max-w-3xl w-full border-2 border-[#C5A059] shadow-editorial-lg overflow-hidden"
            >
              <div className="flex items-center justify-between px-6 py-4 bg-[#231F20] text-[#FBF9F5]">
                <div className="flex items-center gap-2.5">
                  <span className="px-3 py-0.5 rounded-full bg-[#C5A059] text-[#231F20] text-xs font-bold">
                    {previewBackdrop.badge}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold">
                    {previewBackdrop.name[lang]}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setPreviewBackdrop(null)}
                  className="text-[#D8D1CA] hover:text-white p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                {/* Visual Comparison */}
                <div className="md:col-span-6 space-y-3">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#231F20] border border-[#EBE5DF]">
                    <img
                      src={previewBackdrop.imageUrl}
                      alt={previewBackdrop.badge}
                      className={`w-full h-full object-cover transition-all duration-500 ${
                        modalFinish === 'antique' ? 'antique-sepia-filter' : ''
                      }`}
                    />
                    <div className="absolute inset-0 heirloom-vignette pointer-events-none" />
                    <span className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-md bg-[#231F20]/85 text-[#FBF9F5] text-xs font-semibold">
                      {modalFinish === 'antique'
                        ? t.hero.antiqueBtn
                        : t.hero.colorBtn}
                    </span>
                  </div>

                  <div className="flex items-center justify-between bg-white p-2.5 rounded-xl border border-[#EBE5DF]">
                    <span className="text-xs font-semibold text-[#8C827A]">
                      {t.hero.finishPreviewLabel}
                    </span>
                    <div className="inline-flex rounded-full bg-[#F3EFEA] p-0.5">
                      <button
                        type="button"
                        onClick={() => setModalFinish('color')}
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          modalFinish === 'color'
                            ? 'bg-[#231F20] text-[#FBF9F5]'
                            : 'text-[#3A3432]'
                        }`}
                      >
                        {t.hero.colorBtn}
                      </button>
                      <button
                        type="button"
                        onClick={() => setModalFinish('antique')}
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          modalFinish === 'antique'
                            ? 'bg-[#C5A059] text-[#231F20]'
                            : 'text-[#3A3432]'
                        }`}
                      >
                        {t.hero.antiqueBtn}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Details & Action */}
                <div className="md:col-span-6 space-y-4">
                  <p className="text-sm text-[#3A3432] leading-relaxed">
                    {previewBackdrop.description[lang]}
                  </p>

                  <div className="p-3.5 rounded-xl bg-white border border-[#EBE5DF] space-y-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#A68238]">
                      {t.backdrops.modalWardrobeLabel}
                    </div>
                    <p className="text-xs text-[#231F20]">
                      {previewBackdrop.wardrobeTip[lang]}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F4ECE1]/60 border border-[#C5A059]/30 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#231F20]">
                      {t.backdrops.modalFinishLabel}:
                    </span>
                    <span className="text-xs font-bold text-[#A68238]">
                      {previewBackdrop.recommendedFinish}
                    </span>
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => handleUseBackdrop(previewBackdrop.code)}
                      className="flex-1 py-3.5 px-5 rounded-xl bg-[#C5A059] hover:bg-[#b58e47] text-[#231F20] font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2"
                    >
                      <span>{t.backdrops.useBackdropBtn}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setPreviewBackdrop(null)}
                      className="py-3.5 px-4 rounded-xl bg-white border border-[#EBE5DF] text-xs font-semibold text-[#3A3432] hover:text-[#231F20]"
                    >
                      {t.backdrops.modalClose}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================================
          MODAL B: OFFICIAL EVENT FLYER LIGHTBOX
         ===================================================================== */}
      <AnimatePresence>
        {flyerModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFlyerModalOpen(false)}
            className="fixed inset-0 z-50 bg-[#231F20]/85 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FBF9F5] rounded-2xl max-w-xl w-full border-2 border-[#C5A059] overflow-hidden shadow-editorial-lg"
            >
              <div className="flex items-center justify-between px-5 py-3.5 bg-[#231F20] text-[#FBF9F5]">
                <span className="font-serif font-bold text-base">
                  {t.eventCard.viewFlyerBtn}
                </span>
                <button
                  type="button"
                  onClick={() => setFlyerModalOpen(false)}
                  className="text-[#D8D1CA] hover:text-white p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-5 space-y-4">
                <img
                  src="/images/studio-event-flyer.jpg"
                  alt="Chiquita's Moments Event Flyer"
                  className="w-full max-h-[65vh] object-contain rounded-xl border border-[#EBE5DF] bg-[#231F20]"
                />
                <div className="flex items-center justify-between gap-4">
                  <div className="text-xs text-[#3A3432]">
                    <strong>12×18 Family Portrait — $19.95</strong> • $10.00 sitting fee at appointment
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setFlyerModalOpen(false);
                      handleClaimOffer();
                    }}
                    className="px-4 py-2.5 rounded-xl bg-[#C5A059] text-[#231F20] text-xs font-bold shrink-0"
                  >
                    {t.eventCard.claimCta} →
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================================
          MODAL C: CLIENT PROOFING OVERLAY MODAL (DEMO PIN: MOMENTS)
         ===================================================================== */}
      <AnimatePresence>
        {proofingOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setProofingOpen(false)}
            className="fixed inset-0 z-50 bg-[#231F20]/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FBF9F5] rounded-2xl max-w-3xl w-full border-2 border-[#C5A059] shadow-editorial-lg overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-[#231F20] text-[#FBF9F5]">
                <div className="flex items-center gap-2.5">
                  {pinUnlocked ? (
                    <Unlock className="w-4 h-4 text-[#C5A059]" />
                  ) : (
                    <Lock className="w-4 h-4 text-[#C5A059]" />
                  )}
                  <h3 className="font-serif text-lg sm:text-xl font-bold">
                    {t.proofing.modalTitle}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setProofingOpen(false)}
                  className="text-[#D8D1CA] hover:text-white p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-6">
                {!pinUnlocked ? (
                  <div className="max-w-md mx-auto py-6 text-center space-y-5">
                    <div className="w-14 h-14 rounded-2xl bg-[#F4ECE1] text-[#A68238] flex items-center justify-center mx-auto border border-[#C5A059]/40">
                      <Lock className="w-6 h-6" />
                    </div>
                    <p className="text-sm text-[#3A3432]">
                      {t.proofing.modalSubtitle}
                    </p>

                    <form onSubmit={handleVerifyPin} className="space-y-3">
                      <input
                        type="text"
                        value={pinInput}
                        onChange={(e) => {
                          setPinInput(e.target.value);
                          setPinError(false);
                        }}
                        placeholder={t.proofing.pinPlaceholder}
                        className="w-full text-center uppercase tracking-widest font-bold rounded-xl bg-white border border-[#EBE5DF] focus:border-[#C5A059] focus:outline-none px-4 py-3.5 text-sm text-[#231F20]"
                      />
                      {pinError && (
                        <p className="text-xs text-red-700 font-medium">
                          {t.proofing.pinError}
                        </p>
                      )}
                      <button
                        type="submit"
                        className="w-full py-3.5 rounded-xl bg-[#231F20] hover:bg-[#C5A059] text-[#FBF9F5] hover:text-[#231F20] font-bold text-sm transition-colors"
                      >
                        {t.proofing.unlockBtn}
                      </button>
                    </form>

                    <button
                      type="button"
                      onClick={() => {
                        setPinInput('MOMENTS');
                        setPinUnlocked(true);
                        setPinError(false);
                      }}
                      className="text-xs font-bold text-[#A68238] hover:text-[#231F20] underline underline-offset-4"
                    >
                      {t.proofing.tryDemoBtn}
                    </button>
                  </div>
                ) : (
                  <div className="space-y-5">
                    {/* Top Proof Controls */}
                    <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3.5 rounded-xl border border-[#EBE5DF]">
                      <span className="text-xs font-bold text-[#A68238]">
                        {t.proofing.unlockedBadge}
                      </span>
                      <div className="inline-flex rounded-full bg-[#F3EFEA] p-1">
                        <button
                          type="button"
                          onClick={() => setProofFinish('color')}
                          className={`px-3 py-1 rounded-full text-xs font-bold ${
                            proofFinish === 'color'
                              ? 'bg-[#231F20] text-[#FBF9F5]'
                              : 'text-[#3A3432]'
                          }`}
                        >
                          {t.hero.colorBtn}
                        </button>
                        <button
                          type="button"
                          onClick={() => setProofFinish('antique')}
                          className={`px-3 py-1 rounded-full text-xs font-bold ${
                            proofFinish === 'antique'
                              ? 'bg-[#C5A059] text-[#231F20]'
                              : 'text-[#3A3432]'
                          }`}
                        >
                          {t.hero.antiqueBtn}
                        </button>
                      </div>
                    </div>

                    {/* Proof Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {PROOF_GALLERY.map((proof) => {
                        const isPicked = selectedProofId === proof.id;
                        return (
                          <div
                            key={proof.id}
                            className={`rounded-2xl bg-white p-3.5 border transition-all ${
                              isPicked
                                ? 'border-2 border-[#C5A059] shadow-sm'
                                : 'border-[#EBE5DF]'
                            }`}
                          >
                            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#231F20]">
                              <img
                                src={proof.imageUrl}
                                alt={proof.title[lang]}
                                className={`w-full h-full object-cover transition-all duration-500 ${
                                  proofFinish === 'antique'
                                    ? 'antique-sepia-filter'
                                    : ''
                                }`}
                              />
                              <div className="absolute inset-0 heirloom-vignette pointer-events-none" />
                              <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-[#231F20]/85 text-[#C5A059] text-[11px] font-bold">
                                {proof.id} • {proof.backdrop}
                              </span>
                            </div>

                            <div className="pt-3 flex items-center justify-between gap-2">
                              <div className="font-serif font-bold text-sm text-[#231F20]">
                                {proof.title[lang]}
                              </div>
                              <button
                                type="button"
                                onClick={() => setSelectedProofId(proof.id)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors shrink-0 ${
                                  isPicked
                                    ? 'bg-[#C5A059] text-[#231F20]'
                                    : 'bg-[#F3EFEA] text-[#231F20] hover:bg-[#C5A059]/40'
                                }`}
                              >
                                {isPicked
                                  ? t.proofing.selectedPoseBtn
                                  : t.proofing.selectPoseBtn}
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="p-4 rounded-xl bg-[#F4ECE1]/70 border border-[#C5A059]/40 text-xs text-[#231F20] flex items-center justify-between gap-4">
                      <span>{t.proofing.orderNote}</span>
                      <a
                        href="tel:7083597234"
                        className="px-3.5 py-2 rounded-lg bg-[#231F20] text-[#FBF9F5] font-bold shrink-0"
                      >
                        708-359-7234
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
