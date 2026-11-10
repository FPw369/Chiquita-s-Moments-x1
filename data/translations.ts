import { Language, TimeSlot } from '@/types';

export const DEFAULT_TIME_SLOTS: TimeSlot[] = [
  { id: 'slot-1000', time: '10:00 AM', period: 'morning', available: true, spotsLeft: 2 },
  { id: 'slot-1100', time: '11:00 AM', period: 'morning', available: true, spotsLeft: 1 },
  { id: 'slot-1230', time: '12:30 PM', period: 'afternoon', available: true, spotsLeft: 3 },
  { id: 'slot-0200', time: '2:00 PM', period: 'afternoon', available: true, spotsLeft: 1 },
  { id: 'slot-0330', time: '3:30 PM', period: 'afternoon', available: false },
  { id: 'slot-0500', time: '5:00 PM', period: 'weekend', available: true, spotsLeft: 2 },
  { id: 'slot-0615', time: '6:15 PM', period: 'weekend', available: true, spotsLeft: 1 },
];

export const TRANSLATIONS: Record<
  Language,
  {
    promoBanner: {
      badge: string;
      text: string;
      cta: string;
    };
    nav: {
      brandSubtitle: string;
      home: string;
      specialOffer: string;
      galleryStyles: string;
      backdrops: string;
      proofing: string;
      contact: string;
      bookSession: string;
      savedBookings: string;
    };
    hero: {
      eyebrow: string;
      title: string;
      subtitle: string;
      primaryCta: string;
      secondaryCta: string;
      badges: {
        walkIns: string;
        bilingual: string;
        propsIncluded: string;
      };
      floatingCardTitle: string;
      floatingCardSubtitle: string;
      toggleFinishLabel: string;
      colorLabel: string;
      antiqueLabel: string;
    };
    specialOffer: {
      eyebrow: string;
      title: string;
      subtitle: string;
      regularPriceLabel: string;
      specialPriceLabel: string;
      sittingFeeCallout: string;
      formatChoiceTitle: string;
      colorOptionTitle: string;
      colorOptionDesc: string;
      antiqueOptionTitle: string;
      antiqueOptionDesc: string;
      bookSpecialBtn: string;
      flyerPreviewBtn: string;
      directCallNote: string;
      highlights: string[];
    };
    styleShowcase: {
      eyebrow: string;
      title: string;
      subtitle: string;
      interactivePrompt: string;
      colorTab: string;
      antiqueTab: string;
      wardrobeBoxTitle: string;
      wardrobeBoxDesc: string;
    };
    backdropsPage: {
      eyebrow: string;
      title: string;
      subtitle: string;
      searchPlaceholder: string;
      filters: {
        all: string;
        classic: string;
        architectural: string;
        scenic: string;
        holiday: string;
      };
      chooseForSession: string;
      selectedForSession: string;
      previewFraming: string;
      codeLabel: string;
      recommendedFinish: string;
      framingSuggestionLabel: string;
      wardrobeTipLabel: string;
      favoritesOnly: string;
    };
    bookingPage: {
      eyebrow: string;
      title: string;
      subtitle: string;
      steps: {
        package: string;
        finishBackdrop: string;
        dateTime: string;
        contact: string;
        summary: string;
      };
      step1Title: string;
      step1Subtitle: string;
      step2Title: string;
      step2Subtitle: string;
      selectFinishLabel: string;
      selectBackdropLabel: string;
      step3Title: string;
      step3Subtitle: string;
      selectDateLabel: string;
      selectTimeLabel: string;
      spotsRemaining: string;
      bookedOut: string;
      step4Title: string;
      step4Subtitle: string;
      nameLabel: string;
      namePlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      familySizeLabel: string;
      preferredLangLabel: string;
      notesLabel: string;
      notesPlaceholder: string;
      routingBoxTitle: string;
      routingEn: string;
      routingEs: string;
      step5Title: string;
      step5Subtitle: string;
      sittingFeeNoticeTitle: string;
      sittingFeeNoticeBody: string;
      confirmAndHoldBtn: string;
      backBtn: string;
      nextStepBtn: string;
      confirmedTitle: string;
      confirmedSubtitle: string;
      referenceIdLabel: string;
      packageTotalLabel: string;
      sittingFeeDueNowLabel: string;
      balanceAtStudioLabel: string;
      newBookingBtn: string;
    };
    proofingPage: {
      eyebrow: string;
      title: string;
      subtitle: string;
      pinCardTitle: string;
      pinCardSubtitle: string;
      pinInputPlaceholder: string;
      unlockBtn: string;
      useDemoPinBtn: string;
      invalidPinError: string;
      sessionUnlockedBadge: string;
      switchSessionBtn: string;
      filterFinishLabel: string;
      viewColor: string;
      viewAntique: string;
      select12x18Btn: string;
      selected12x18Btn: string;
      favoriteBtn: string;
      addPrintBtn: string;
      orderSummaryTitle: string;
      included12x18Label: string;
      no12x18Selected: string;
      addOnsHeading: string;
      noAddOnsYet: string;
      submitOrderBtn: string;
      orderSubmittedTitle: string;
      orderSubmittedDesc: string;
    };
    contactPage: {
      eyebrow: string;
      title: string;
      subtitle: string;
      englishSpecialistRole: string;
      spanishSpecialistRole: string;
      directLineLabel: string;
      callNowBtn: string;
      hoursTitle: string;
      hoursText: string;
      faqEyebrow: string;
      faqTitle: string;
      faqSubtitle: string;
    };
    footer: {
      tagline: string;
      quickLinks: string;
      contactHeading: string;
      policyNote: string;
      copyright: string;
    };
  }
> = {
  en: {
    promoBanner: {
      badge: 'SPECIAL EVENT',
      text: 'Limited Time Special: $19.95 12×18 Family Portrait (Color or Antique) — Book Your Slot Today!',
      cta: 'Claim $19.95 Offer',
    },
    nav: {
      brandSubtitle: 'Portrait Studio',
      home: 'Home',
      specialOffer: 'Special Offer',
      galleryStyles: 'Gallery & Styles',
      backdrops: 'Backdrop Catalog',
      proofing: 'Proofing Portal',
      contact: 'Contact & FAQ',
      bookSession: 'Book a Session',
      savedBookings: 'My Booking',
    },
    hero: {
      eyebrow: 'Presented by Chiquita’s Moments • Classic & Vintage Portraiture',
      title: 'Capturing Heirlooms That Last Generations',
      subtitle:
        'Specializing in timeless color family portraits, antique vintage character sittings, and milestone celebrations crafted on museum-grade 12×18 wall prints.',
      primaryCta: 'Claim $19.95 Special',
      secondaryCta: 'Explore Backdrops & Styles',
      badges: {
        walkIns: 'Walk-In & Appointment Availability',
        bilingual: 'Bilingual Studio Specialists (EN / ES)',
        propsIncluded: 'Vintage Props & Costumes Included',
      },
      floatingCardTitle: '12×18 Heirloom Wall Portrait',
      floatingCardSubtitle: 'Limited Time Event: $19.95 (Reg. $75)',
      toggleFinishLabel: 'Live Finish Preview:',
      colorLabel: 'Vivid Color',
      antiqueLabel: 'Antique Sepia',
    },
    specialOffer: {
      eyebrow: 'Featured Studio Event Flyer Offer',
      title: 'Special Event Feature: 12×18 Heirloom Portrait',
      subtitle:
        'Whether gathering three generations for a classic family portrait or dressing the kids in 1920s vintage attire, celebrate your family story with our signature 12×18 wall print special.',
      regularPriceLabel: 'Standard Studio Rate $75.00',
      specialPriceLabel: 'Limited Time Only',
      sittingFeeCallout: '$10.00 sitting fee due at time of appointment to secure your slot.',
      formatChoiceTitle: 'Included Format Choice (Pick at Proofing):',
      colorOptionTitle: 'Classic Studio Color',
      colorOptionDesc: 'Rich, true-to-life skin tones with soft editorial portrait lighting.',
      antiqueOptionTitle: 'Authentic Vintage Antique',
      antiqueOptionDesc: 'Hand-toned warm sepia finish with period costumes, hats & heirloom trunks.',
      bookSpecialBtn: 'Book This $19.95 Special',
      flyerPreviewBtn: 'View Original Event Flyer',
      directCallNote: 'Prefer to book by phone? Call Drew (708-359-7234) or Yolanda in Español (323-371-3512).',
      highlights: [
        'Full family groups, couples, siblings, or individual children welcome',
        'Complete access to antique trunks, 1920s flat caps, lace parasols & vintage props',
        'Choose from 25+ curated scenic, brick, library & classic studio backdrops',
        'Preview both Color and Antique finishes before choosing your 12×18 print',
      ],
    },
    styleShowcase: {
      eyebrow: 'Dual Signature Finishes',
      title: 'Timeless Color or Vintage Antique Character',
      subtitle:
        'Every sitting is lit and composed so you can compare both our luminous studio color grading and our warm sepia darkroom finish.',
      interactivePrompt: 'Switch finishes below to inspect the tonal transformation:',
      colorTab: 'Classic Studio Color',
      antiqueTab: 'Antique Sepia Finish',
      wardrobeBoxTitle: 'Complimentary Studio Wardrobe & Prop Trunk',
      wardrobeBoxDesc:
        'From toddler newsboy caps, suspenders, and wooden baseball bats to Victorian lace parasols, pearl necklaces, and leather steamer trunks — everything is ready at the studio.',
    },
    backdropsPage: {
      eyebrow: 'Official Studio Catalog',
      title: 'Interactive Backdrop & Set Explorer',
      subtitle:
        'Browse our official studio backdrop codes from the Chiquita’s Moments catalog book. Click any backdrop to inspect framing recommendations or lock it into your session booking.',
      searchPlaceholder: 'Search by code (e.g. M122V, BrickWall, SR177V) or theme...',
      filters: {
        all: 'All Backdrops',
        classic: 'Studio Classic',
        architectural: 'Architectural & Brick',
        scenic: 'Scenic & Outdoor',
        holiday: 'Holiday & Themed',
      },
      chooseForSession: 'Choose for My Session',
      selectedForSession: 'Selected for Session',
      previewFraming: 'Framing & Wardrobe Guide',
      codeLabel: 'Catalog Code',
      recommendedFinish: 'Recommended Finish',
      framingSuggestionLabel: 'Director’s Framing Suggestion',
      wardrobeTipLabel: 'Wardrobe Coordination Tip',
      favoritesOnly: 'Saved Favorites',
    },
    bookingPage: {
      eyebrow: 'Reserve Your Camera Room',
      title: 'Interactive Studio Session Booking',
      subtitle:
        'Lock in your $19.95 12×18 Portrait Special or extended family sitting in five simple steps. Your progress is automatically saved.',
      steps: {
        package: '1. Package',
        finishBackdrop: '2. Finish & Set',
        dateTime: '3. Date & Slot',
        contact: '4. Your Details',
        summary: '5. Confirm Slot',
      },
      step1Title: 'Select Your Portrait Package',
      step1Subtitle: 'All packages include full access to studio props, wardrobe accents, and guided posing.',
      step2Title: 'Select Your Preferred Finish & Studio Backdrop',
      step2Subtitle: 'You can still preview both Color and Antique during your proofing session.',
      selectFinishLabel: 'Primary Portrait Finish Preference',
      selectBackdropLabel: 'Studio Backdrop Code',
      step3Title: 'Choose Your Date & Studio Time Slot',
      step3Subtitle: 'Select an available morning, afternoon, or weekend appointment window.',
      selectDateLabel: 'Appointment Date',
      selectTimeLabel: 'Available Studio Windows',
      spotsRemaining: 'spot left',
      bookedOut: 'Reserved',
      step4Title: 'Family Contact & Specialist Routing',
      step4Subtitle: 'Let us know who is coming and which language specialist should confirm your sitting.',
      nameLabel: 'Full Name',
      namePlaceholder: 'e.g., Maria & Carlos Hernandez',
      phoneLabel: 'Phone Number (for SMS/Call Confirmation)',
      phonePlaceholder: '(708) 555-0192',
      emailLabel: 'Email Address (for Proofing Portal PIN)',
      emailPlaceholder: 'family@example.com',
      familySizeLabel: 'Number of Family Members in Portrait',
      preferredLangLabel: 'Preferred Studio Specialist Language',
      notesLabel: 'Special Requests (Ages of children, antique costume sizes, accessibility)',
      notesPlaceholder: 'e.g., 2 kids (ages 2 and 6), would love the vintage suitcase pose & newsboy cap!',
      routingBoxTitle: 'Dedicated Specialist Assignment',
      routingEn: 'English Inquiries & Confirmations: Handled directly by Drew (708-359-7234)',
      routingEs: 'Spanish Inquiries & Confirmations: Handled directly by Yolanda (323-371-3512)',
      step5Title: 'Review Booking & Sitting Fee Policy',
      step5Subtitle: 'Verify your package, backdrop code, and appointment window below.',
      sittingFeeNoticeTitle: 'Appointment Sitting Fee Policy ($10.00)',
      sittingFeeNoticeBody:
        'A $10.00 sitting fee is due at the time of appointment to secure your camera room slot. Your package balance ($19.95 for the Special Event 12×18 Portrait) is paid at the studio during your sitting.',
      confirmAndHoldBtn: 'Confirm & Hold Studio Slot',
      backBtn: 'Previous Step',
      nextStepBtn: 'Continue',
      confirmedTitle: 'Your Studio Slot is Reserved!',
      confirmedSubtitle:
        'We have saved your booking details and assigned your studio coordinator. Bring your confirmation reference on the day of your session.',
      referenceIdLabel: 'Booking Reference ID',
      packageTotalLabel: 'Selected Portrait Package',
      sittingFeeDueNowLabel: 'Sitting Fee (Due at Appointment)',
      balanceAtStudioLabel: 'Portrait Package Balance',
      newBookingBtn: 'Book Another Session',
    },
    proofingPage: {
      eyebrow: 'Returning Client Portal',
      title: 'Private Client Proofing & 12×18 Print Selector',
      subtitle:
        'Enter your studio session PIN code to view your proofs, compare Vivid Color vs. Sepia Antique finishes, favorite your best poses, and select your included 12×18 heirloom wall print.',
      pinCardTitle: 'Enter Your Session Passcode',
      pinCardSubtitle: 'Found on your studio receipt card. Try our interactive demo code below:',
      pinInputPlaceholder: 'Enter Session PIN (e.g. MOMENTS2026)',
      unlockBtn: 'Unlock Private Gallery',
      useDemoPinBtn: 'Auto-Fill Demo Code (MOMENTS2026)',
      invalidPinError: 'Invalid session code. Please enter MOMENTS2026 to explore the demo gallery.',
      sessionUnlockedBadge: 'Session Unlocked: Hernandez Family Sitting (#MOMENTS2026)',
      switchSessionBtn: 'Lock Gallery',
      filterFinishLabel: 'Preview All Proofs In:',
      viewColor: 'Vivid Studio Color',
      viewAntique: 'Timeless Sepia Antique',
      select12x18Btn: 'Select for Included 12×18 Print',
      selected12x18Btn: 'Selected as 12×18 Master Print',
      favoriteBtn: 'Favorite',
      addPrintBtn: 'Order Extra Prints (8×10, 5×7, Wallets)',
      orderSummaryTitle: 'Your Portrait Print Selection',
      included12x18Label: 'Included 12×18 Wall Portrait:',
      no12x18Selected: 'Click "Select for Included 12×18 Print" on any proof photo.',
      addOnsHeading: 'Extra Gift Prints & Wallets:',
      noAddOnsYet: 'No additional gift prints added yet (optional).',
      submitOrderBtn: 'Submit Final Print Selection to Lab',
      orderSubmittedTitle: 'Print Order Sent to Darkroom Lab!',
      orderSubmittedDesc:
        'Your 12×18 Heirloom Portrait selection and custom finish instructions have been logged. Drew or Yolanda will call you as soon as your archival prints are ready for studio pickup.',
    },
    contactPage: {
      eyebrow: 'Direct Bilingual Assistance',
      title: 'Speak With Our Studio Coordinators',
      subtitle:
        'Have questions about group sizes, antique wardrobe sizing for babies and children, or scheduling a same-day family sitting? Call our coordinators directly.',
      englishSpecialistRole: 'English Studio Specialist & Appointments',
      spanishSpecialistRole: 'Especialista en Español y Citas de Estudio',
      directLineLabel: 'Direct Studio Line (Click to Call)',
      callNowBtn: 'Call Directly',
      hoursTitle: 'Studio Hours & Walk-In Policy',
      hoursText:
        'Tuesday – Sunday: 10:00 AM – 7:30 PM • Weekend Event Appointments Recommended • $10.00 sitting fee at time of appointment.',
      faqEyebrow: 'Frequently Asked Questions',
      faqTitle: 'Everything to Know Before Your Sitting',
      faqSubtitle:
        'Clear answers on our $19.95 12×18 special event offer, wardrobe recommendations, sitting fee policy, and print turnaround times.',
    },
    footer: {
      tagline:
        'Crafting heirloom 12×18 family portraits in luminous studio color and authentic sepia antique finishes.',
      quickLinks: 'Studio Navigation',
      contactHeading: 'Info & Appointments',
      policyNote: 'Special Event: $19.95 12×18 Family Portrait (Color or Antique). $10.00 sitting fee at time of appointment.',
      copyright: '© 2026 Chiquita’s Moments Portrait Studio. All rights reserved.',
    },
  },
  es: {
    promoBanner: {
      badge: '¡EVENTO ESPECIAL!',
      text: 'Oferta por Tiempo Limitado: Retrato Familiar 12×18 por $19.95 (Color o Antiguo) — ¡Reserve Hoy!',
      cta: 'Reclamar Oferta $19.95',
    },
    nav: {
      brandSubtitle: 'Estudio de Retratos',
      home: 'Inicio',
      specialOffer: 'Oferta Especial',
      galleryStyles: 'Galería y Estilos',
      backdrops: 'Catálogo de Fondos',
      proofing: 'Portal de Pruebas',
      contact: 'Contacto y Preguntas',
      bookSession: 'Reservar Cita',
      savedBookings: 'Mi Reserva',
    },
    hero: {
      eyebrow: 'Presentado por Chiquita’s Moments • Retratos Clásicos y Antiguos',
      title: 'Capturando Momentos Que Perduran Por Generaciones',
      subtitle:
        'Especialistas en retratos familiares atemporales a color, sesiones de personajes antiguos estilo vintage y celebraciones inolvidables en impresiones de pared 12×18.',
      primaryCta: 'Reclamar Especial de $19.95',
      secondaryCta: 'Explorar Fondos y Estilos',
      badges: {
        walkIns: 'Citas y Atención Sin Cita Previa',
        bilingual: 'Atención Bilingüe Personalizada (EN / ES)',
        propsIncluded: 'Utilería y Vestuario Vintage Incluidos',
      },
      floatingCardTitle: 'Retrato Familiar 12×18 de Reliquia',
      floatingCardSubtitle: 'Evento por Tiempo Limitado: $19.95 (Reg. $75)',
      toggleFinishLabel: 'Vista Previa de Acabado:',
      colorLabel: 'Color Vivo',
      antiqueLabel: 'Antiguo Sepia',
    },
    specialOffer: {
      eyebrow: 'Oferta Destacada del Volante Oficial',
      title: 'Evento Especial: Retrato Familiar 12×18',
      subtitle:
        'Ya sea reuniendo a tres generaciones para un retrato familiar clásico o vistiendo a los niños con atuendos vintage de los años 1920, celebre su historia con nuestra promoción de retrato 12×18.',
      regularPriceLabel: 'Precio Regular de Estudio $75.00',
      specialPriceLabel: '¡Solo por Tiempo Limitado!',
      sittingFeeCallout: 'Tarifa de sesión de $10.00 al momento de la cita para asegurar su horario.',
      formatChoiceTitle: 'Formato a Elegir Incluido (Elija al Ver sus Pruebas):',
      colorOptionTitle: 'Color Clásico de Estudio',
      colorOptionDesc: 'Tonos de piel ricos y naturales con iluminación editorial suave.',
      antiqueOptionTitle: 'Acabado Antiguo Vintage Auténtico',
      antiqueOptionDesc: 'Tono sepia cálido artesanal con vestuario de época, gorras y baúles antiguos.',
      bookSpecialBtn: 'Reservar Este Especial de $19.95',
      flyerPreviewBtn: 'Ver Volante Original del Evento',
      directCallNote: '¿Prefiere reservar por teléfono? Llame a Yolanda en Español (323-371-3512) o a Drew (708-359-7234).',
      highlights: [
        'Familias completas, parejas, hermanos o niños individuales son bienvenidos',
        'Acceso total a baúles antiguos, gorras de época, sombrillas de encaje y utilería',
        'Elija entre más de 25 fondos escénicos, de ladrillo, biblioteca y clásicos',
        'Previsualice sus fotos tanto en Color como en Antiguo antes de elegir su impresión 12×18',
      ],
    },
    styleShowcase: {
      eyebrow: 'Dos Acabados Exclusivos',
      title: 'Color Atemporal o Carácter Antiguo Vintage',
      subtitle:
        'Cada sesión es iluminada y compuesta para que pueda comparar tanto nuestro color vibrante de estudio como nuestro acabado sepia cálido de cuarto oscuro.',
      interactivePrompt: 'Cambie el acabado abajo para explorar la transformación tonal:',
      colorTab: 'Color Clásico de Estudio',
      antiqueTab: 'Acabado Antiguo Sepia',
      wardrobeBoxTitle: 'Vestuario y Utilería Vintage de Cortesía',
      wardrobeBoxDesc:
        'Desde gorras estilo años 20 para bebés, tirantes y bates de madera hasta sombrillas de encaje victoriano, collares de perlas y maletas antiguas — todo listo en el estudio.',
    },
    backdropsPage: {
      eyebrow: 'Catálogo Oficial del Estudio',
      title: 'Explorador Interactivo de Fondos de Estudio',
      subtitle:
        'Explore los códigos oficiales del libro de fondos de Chiquita’s Moments. Haga clic en cualquier fondo para ver sugerencias de vestuario o seleccionarlo para su cita.',
      searchPlaceholder: 'Buscar por código (ej. M122V, BrickWall, SR177V) o tema...',
      filters: {
        all: 'Todos los Fondos',
        classic: 'Clásico de Estudio',
        architectural: 'Arquitectónico y Ladrillo',
        scenic: 'Escénico y Exterior',
        holiday: 'Navideño y Temático',
      },
      chooseForSession: 'Elegir para Mi Sesión',
      selectedForSession: 'Seleccionado para Mi Sesión',
      previewFraming: 'Guía de Pose y Vestuario',
      codeLabel: 'Código de Catálogo',
      recommendedFinish: 'Acabado Recomendado',
      framingSuggestionLabel: 'Sugerencia de Encuadre del Fotógrafo',
      wardrobeTipLabel: 'Consejo de Combinación de Ropa',
      favoritesOnly: 'Favoritos Guardados',
    },
    bookingPage: {
      eyebrow: 'Reserve su Sala Fotográfica',
      title: 'Reserva Interactiva de Sesión en Estudio',
      subtitle:
        'Asegure su Especial de Retrato 12×18 por $19.95 o sesión familiar extendida en cinco sencillos pasos. Su progreso se guarda automáticamente.',
      steps: {
        package: '1. Paquete',
        finishBackdrop: '2. Acabado y Fondo',
        dateTime: '3. Fecha y Hora',
        contact: '4. Sus Datos',
        summary: '5. Confirmar Cita',
      },
      step1Title: 'Seleccione su Paquete de Retrato',
      step1Subtitle: 'Todos los paquetes incluyen acceso completo a utilería, accesorios vintage y dirección de poses.',
      step2Title: 'Elija su Acabado Preferido y Fondo de Estudio',
      step2Subtitle: 'Podrá ver sus pruebas tanto en Color como en Antiguo antes de ordenar su impresión.',
      selectFinishLabel: 'Preferencia Principal de Acabado',
      selectBackdropLabel: 'Código de Fondo de Estudio',
      step3Title: 'Seleccione Fecha y Horario Disponible',
      step3Subtitle: 'Elija un horario matutino, vespertino o de fin de semana.',
      selectDateLabel: 'Fecha de la Cita',
      selectTimeLabel: 'Horarios de Estudio Disponibles',
      spotsRemaining: 'espacio disponible',
      bookedOut: 'Reservado',
      step4Title: 'Contacto Familiar y Asignación de Especialista',
      step4Subtitle: 'Indíquenos quiénes asistirán y en qué idioma prefiere recibir la confirmación.',
      nameLabel: 'Nombre Completo',
      namePlaceholder: 'ej., María y Carlos Hernández',
      phoneLabel: 'Número de Teléfono (para Confirmación)',
      phonePlaceholder: '(323) 555-0192',
      emailLabel: 'Correo Electrónico (para PIN del Portal de Pruebas)',
      emailPlaceholder: 'familia@ejemplo.com',
      familySizeLabel: 'Número de Integrantes en el Retrato',
      preferredLangLabel: 'Idioma Preferido de Atención',
      notesLabel: 'Notas Especiales (Edades de niños, tallas de vestuario antiguo, peticiones)',
      notesPlaceholder: 'ej., 2 niños (2 y 6 años), ¡nos encantaría la pose en la maleta antigua con gorra!',
      routingBoxTitle: 'Asignación Directa de Especialista',
      routingEn: 'Atención en Inglés: Coordinada directamente por Drew (708-359-7234)',
      routingEs: 'Atención en Español: Coordinada directamente por Yolanda (323-371-3512)',
      step5Title: 'Resumen de Reserva y Política de Cita',
      step5Subtitle: 'Verifique su paquete, código de fondo y horario seleccionado.',
      sittingFeeNoticeTitle: 'Política de Tarifa de Sesión ($10.00)',
      sittingFeeNoticeBody:
        'Se requiere una tarifa de sesión (sitting fee) de $10.00 al momento de la cita para asegurar su horario. El saldo del paquete ($19.95 para el Retrato Especial 12×18) se cubre en el estudio el día de su sesión.',
      confirmAndHoldBtn: 'Confirmar y Asegurar Horario',
      backBtn: 'Paso Anterior',
      nextStepBtn: 'Continuar',
      confirmedTitle: '¡Su Horario de Estudio Está Reservado!',
      confirmedSubtitle:
        'Hemos guardado los detalles de su cita y asignado a su coordinador. Presente su código de referencia el día de su sesión.',
      referenceIdLabel: 'Código de Referencia de Reserva',
      packageTotalLabel: 'Paquete de Retrato Seleccionado',
      sittingFeeDueNowLabel: 'Tarifa de Sesión (Al momento de la cita)',
      balanceAtStudioLabel: 'Saldo del Paquete en Estudio',
      newBookingBtn: 'Reservar Otra Sesión',
    },
    proofingPage: {
      eyebrow: 'Portal para Clientes',
      title: 'Galería Privada de Pruebas y Selección 12×18',
      subtitle:
        'Ingrese el código PIN de su sesión para ver sus pruebas, comparar el acabado Color Vivo vs. Antiguo Sepia, marcar sus favoritas y elegir su retrato de pared 12×18 incluido.',
      pinCardTitle: 'Ingrese su Código de Sesión',
      pinCardSubtitle: 'Impreso en su recibo del estudio. Pruebe nuestro código de demostración:',
      pinInputPlaceholder: 'Ingrese PIN (ej. MOMENTS2026)',
      unlockBtn: 'Abrir Galería Privada',
      useDemoPinBtn: 'Usar Código Demo (MOMENTS2026)',
      invalidPinError: 'Código inválido. Ingrese MOMENTS2026 para explorar la galería de demostración.',
      sessionUnlockedBadge: 'Sesión Activa: Familia Hernández (#MOMENTS2026)',
      switchSessionBtn: 'Cerrar Galería',
      filterFinishLabel: 'Previsualizar Pruebas En:',
      viewColor: 'Color Vivo de Estudio',
      viewAntique: 'Antiguo Sepia Atemporal',
      select12x18Btn: 'Elegir para Retrato 12×18 Incluido',
      selected12x18Btn: 'Seleccionada como Retrato 12×18',
      favoriteBtn: 'Favorita',
      addPrintBtn: 'Pedir Copias Extra (8×10, 5×7, Carteras)',
      orderSummaryTitle: 'Su Selección de Impresión',
      included12x18Label: 'Retrato de Pared 12×18 Incluido:',
      no12x18Selected: 'Haga clic en "Elegir para Retrato 12×18 Incluido" en su foto preferida.',
      addOnsHeading: 'Impresiones de Regalo y Carteras Adicionales:',
      noAddOnsYet: 'No se han agregado copias adicionales (opcional).',
      submitOrderBtn: 'Enviar Selección Final al Laboratorio',
      orderSubmittedTitle: '¡Orden Enviada al Laboratorio Fotográfico!',
      orderSubmittedDesc:
        'Su selección de Retrato 12×18 e instrucciones de acabado han sido registradas. Yolanda o Drew le llamarán en cuanto sus impresiones de archivo estén listas para recoger.',
    },
    contactPage: {
      eyebrow: 'Atención Bilingüe Directa',
      title: 'Hable con Nuestros Coordinadores de Estudio',
      subtitle:
        '¿Tiene preguntas sobre el número de familiares, tallas de vestuario antiguo para bebés y niños, o citas para hoy mismo? Llámenos directamente.',
      englishSpecialistRole: 'Especialista en Inglés y Citas (English)',
      spanishSpecialistRole: 'Especialista en Español y Citas de Estudio',
      directLineLabel: 'Línea Directa (Clic para Llamar)',
      callNowBtn: 'Llamar Ahora',
      hoursTitle: 'Horario de Estudio y Política de Citas',
      hoursText:
        'Martes a Domingo: 10:00 AM – 7:30 PM • Se recomienda cita previa para el evento especial • Tarifa de sesión de $10.00 al momento de la cita.',
      faqEyebrow: 'Preguntas Frecuentes',
      faqTitle: 'Todo lo que Necesita Saber Antes de su Sesión',
      faqSubtitle:
        'Respuestas claras sobre nuestra promoción de retrato 12×18 por $19.95, consejos de vestuario, tarifa de cita de $10 y tiempos de entrega.',
    },
    footer: {
      tagline:
        'Creando retratos familiares 12×18 de reliquia en color vivo de estudio y auténtico acabado antiguo sepia.',
      quickLinks: 'Navegación del Estudio',
      contactHeading: 'Información y Citas',
      policyNote: 'Evento Especial: Retrato Familiar 12×18 por $19.95 (Color o Antiguo). Tarifa de sesión $10.00 al momento de la cita.',
      copyright: '© 2026 Chiquita’s Moments Portrait Studio. Todos los derechos reservados.',
    },
  },
};
