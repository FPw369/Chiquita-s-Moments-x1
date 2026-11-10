import { FAQItem, PrintAddOn, ProofPhoto } from '@/types';

export const DEMO_PROOFING_PIN = 'MOMENTS2026';

export const MOCK_PROOFS: ProofPhoto[] = [
  {
    id: 'proof-01',
    code: 'CM-2026-014A',
    title: {
      en: 'Full Family Heirloom Grouping — Pose I',
      es: 'Grupo Familiar Completo de Reliquia — Pose I',
    },
    poseNote: {
      en: 'Seated center arrangement with warm Rembrandt key light. Ideal composition for your included 12×18 wall portrait.',
      es: 'Arreglo central sentado con luz principal Rembrandt cálida. Composición ideal para su retrato de pared 12×18 incluido.',
    },
    backdropCode: 'SR177V',
    colorImageUrl:
      'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1000&q=85',
    antiqueImageUrl:
      'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1000&q=85',
    aspectRatio: 'portrait',
    recommendedFor12x18: true,
  },
  {
    id: 'proof-02',
    code: 'CM-2026-019B',
    title: {
      en: 'Siblings Newsboy & Lace Cap Sitting',
      es: 'Sesión de Hermanos con Gorra Vintage y Encaje',
    },
    poseNote: {
      en: 'Styled with our 1920s wool flat cap, vintage leather suitcase, and pearl heirloom props against Exposed Brick.',
      es: 'Estilizado con nuestra gorra de lana de los años 1920, maleta de cuero vintage y utilería de perlas frente a Ladrillo Expuesto.',
    },
    backdropCode: 'BrickWall',
    colorImageUrl:
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1000&q=85',
    antiqueImageUrl:
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1000&q=85',
    aspectRatio: 'portrait',
    recommendedFor12x18: true,
  },
  {
    id: 'proof-03',
    code: 'CM-2026-023C',
    title: {
      en: 'Generations Embrace — Grandparents & Grandchildren',
      es: 'Abrazo de Generaciones — Abuelos y Nietos',
    },
    poseNote: {
      en: 'Candid laughter captured between poses. Exceptional tonal richness in Antique Sepia finish.',
      es: 'Risas espontáneas capturadas entre poses. Excepcional riqueza tonal en acabado Sepia Antiguo.',
    },
    backdropCode: 'C14',
    colorImageUrl:
      'https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=1000&q=85',
    antiqueImageUrl:
      'https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=1000&q=85',
    aspectRatio: 'portrait',
  },
  {
    id: 'proof-04',
    code: 'CM-2026-028D',
    title: {
      en: 'Little Scholar Storybook Portrait',
      es: 'Retrato del Pequeño Erudito con Libro de Cuentos',
    },
    poseNote: {
      en: 'Solo child study seated in our carved parlor chair with antique leather-bound books.',
      es: 'Estudio individual infantil sentado en nuestra silla tallada de salón con libros antiguos encuadernados en cuero.',
    },
    backdropCode: 'Bookcase2',
    colorImageUrl:
      'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=1000&q=85',
    antiqueImageUrl:
      'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=1000&q=85',
    aspectRatio: 'portrait',
  },
  {
    id: 'proof-05',
    code: 'CM-2026-034E',
    title: {
      en: 'Mother & Daughter Conservatory Study',
      es: 'Estudio de Madre e Hija en el Jardín',
    },
    poseNote: {
      en: 'Soft directional window-style lighting highlighting natural skin tones and floral textures.',
      es: 'Iluminación suave estilo ventana que resalta los tonos naturales de la piel y las texturas florales.',
    },
    backdropCode: '406V',
    colorImageUrl:
      'https://images.unsplash.com/photo-1484863137850-59afcfe05386?auto=format&fit=crop&w=1000&q=85',
    antiqueImageUrl:
      'https://images.unsplash.com/photo-1484863137850-59afcfe05386?auto=format&fit=crop&w=1000&q=85',
    aspectRatio: 'portrait',
    recommendedFor12x18: true,
  },
  {
    id: 'proof-06',
    code: 'CM-2026-041F',
    title: {
      en: 'Autumn Pathway Family Walk — Pose II',
      es: 'Paseo Familiar en el Sendero de Otoño — Pose II',
    },
    poseNote: {
      en: 'Warm golden foliage background with relaxed shoulder-to-shoulder family framing.',
      es: 'Fondo cálido de follaje dorado con encuadre familiar relajado hombro con hombro.',
    },
    backdropCode: 'M122V',
    colorImageUrl:
      'https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&w=1000&q=85',
    antiqueImageUrl:
      'https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&w=1000&q=85',
    aspectRatio: 'portrait',
  },
];

export const PRINT_ADD_ONS: PrintAddOn[] = [
  {
    id: 'addon-8x10',
    name: {
      en: '8×10 Archival Desk & Mantle Print',
      es: 'Impresión de Archivo 8×10 para Escritorio o Repisa',
    },
    dimensions: '8" × 10"',
    price: 24.95,
    description: {
      en: 'Printed on heavy-weight Kodak Endura lustre paper with protective UV coating.',
      es: 'Impreso en papel lustre Kodak Endura de alto gramaje con recubrimiento protector UV.',
    },
  },
  {
    id: 'addon-5x7-pair',
    name: {
      en: 'Pair of Two (2) 5×7 Companion Prints',
      es: 'Par de Dos (2) Impresiones Compañeras 5×7',
    },
    dimensions: '2 × (5" × 7")',
    price: 19.95,
    description: {
      en: 'Two matching 5×7 prints of the same pose — ideal for gifting to grandparents and godparents.',
      es: 'Dos impresiones 5×7 idénticas de la misma pose — ideales para regalar a abuelos y padrinos.',
    },
  },
  {
    id: 'addon-wallets-8',
    name: {
      en: 'Sheet of Eight (8) Die-Cut Heirloom Wallets',
      es: 'Hoja de Ocho (8) Fotos Tamaño Cartera Troqueladas',
    },
    dimensions: '8 × (2.5" × 3.5")',
    price: 16.5,
    description: {
      en: 'Rounded corners with classic studio texture. Perfect for school exchanges and family keepsake wallets.',
      es: 'Esquinas redondeadas con textura clásica de estudio. Perfectas para intercambios escolares y carteras.',
    },
  },
  {
    id: 'addon-extra-12x18',
    name: {
      en: 'Additional 12×18 Wall Portrait (Second Pose or Finish)',
      es: 'Retrato Adicional de Pared 12×18 (Segunda Pose o Acabado)',
    },
    dimensions: '12" × 18"',
    price: 39.95,
    description: {
      en: 'Can’t choose between Color and Antique? Order a second 12×18 wall print at our returning client discount.',
      es: '¿No puede decidir entre Color y Antiguo? Pida un segundo retrato 12×18 con descuento de cliente.',
    },
  },
];

export const STUDIO_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'special',
    question: {
      en: 'What is included with the $19.95 promotional portrait?',
      es: '¿Qué incluye el retrato promocional de $19.95?',
    },
    answer: {
      en: 'Your $19.95 promotional special includes a guided 30-minute studio sitting for your family, children, or siblings, full access to our vintage props and antique wardrobe pieces, a private proofing review, and one (1) custom-printed 12×18 heirloom wall portrait in your choice of Vivid Studio Color OR Timeless Sepia Antique finish. There is zero obligation to purchase additional prints, though extra sizes (8×10, 5×7, wallets) are available if desired.',
      es: 'Su promoción especial de $19.95 incluye una sesión guiada de estudio de 30 minutos para su familia, niños o hermanos, acceso completo a nuestra utilería vintage y piezas de vestuario antiguo, una revisión privada de pruebas y un (1) retrato de pared de reliquia impreso a medida de 12×18 en su elección de Color Vivo de Estudio O Acabado Antiguo Sepia Atemporal. No hay obligación de comprar impresiones adicionales, aunque ofrecemos tamaños extra (8×10, 5×7, carteras) si lo desea.',
    },
  },
  {
    id: 'faq-2',
    category: 'wardrobe',
    question: {
      en: 'What should my family wear for antique vs. color shoots?',
      es: '¿Qué debe vestir mi familia para sesiones antiguas vs. de color?',
    },
    answer: {
      en: 'For Antique Vintage Portraits: We provide an extensive studio wardrobe of 1920s flat caps, suspenders, Victorian lace collars, pearl necklaces, vests, and hats that layer right over a simple white or cream button-down shirt, blouse, or neutral trousers. For Vivid Color Portraits: Coordinate 2 to 3 complementary tones (such as cream, navy, burgundy, or sage green) and avoid large neon logos or busy graphic tees so faces remain the centerpiece.',
      es: 'Para Retratos Antiguos Vintage: Proporcionamos un amplio guardarropa de estudio con gorras de los años 1920, tirantes, cuellos de encaje victoriano, collares de perlas, chalecos y sombreros que se colocan fácilmente sobre una camisa blanca o crema sencilla. Para Retratos en Color Vivo: Coordine de 2 a 3 tonos complementarios (como crema, azul marino, borgoña o verde salvia) y evite logotipos grandes o colores neón para que los rostros sean el centro de atención.',
    },
  },
  {
    id: 'faq-3',
    category: 'booking',
    question: {
      en: 'How does the $10.00 appointment sitting fee work?',
      es: '¿Cómo funciona la tarifa de sesión de $10.00 al reservar?',
    },
    answer: {
      en: 'To reserve your dedicated studio camera room and photographer time slot, a $10.00 sitting fee is collected at the time of booking. This guarantees your appointment time with zero waiting in walk-in lines and covers studio lighting & wardrobe sanitization. Your $19.95 promotional 12×18 portrait package balance is simply paid at the studio on the day of your session.',
      es: 'Para reservar su sala de cámara dedicada y el horario de su fotógrafo, se solicita una tarifa de sesión de $10.00 al momento de la cita. Esto garantiza su horario sin filas de espera y cubre la preparación de iluminación y vestuario del estudio. El saldo de $19.95 de su paquete promocional de retrato 12×18 se paga directamente en el estudio el día de su sesión.',
    },
  },
  {
    id: 'faq-4',
    category: 'delivery',
    question: {
      en: 'How long does it take to receive our printed 12×18 portrait?',
      es: '¿Cuánto tiempo tarda en entregarse nuestro retrato impreso de 12×18?',
    },
    answer: {
      en: 'Immediately following your shoot (or via our online Client Proofing Portal using your session PIN), you will view your unretouched proofs and choose your favorite pose and finish. Your final 12×18 heirloom print undergoes custom color/sepia grading and archival printing, and is ready for studio pickup within 7 to 10 business days (rush 48-hour finishing is also available for gifts and special events).',
      es: 'Inmediatamente después de su sesión (o a través de nuestro Portal de Pruebas en línea usando su código PIN), verá sus pruebas y elegirá su pose y acabado favorito. Su impresión final de 12×18 pasa por una calibración artesanal de color/sepia e impresión de archivo, y estará lista para recoger en el estudio en un plazo de 7 a 10 días hábiles (también contamos con servicio exprés de 48 horas para regalos).',
    },
  },
  {
    id: 'faq-5',
    category: 'booking',
    question: {
      en: 'Can we take both Color and Antique photos during the same appointment?',
      es: '¿Podemos tomar fotos tanto en Color como en Antiguo durante la misma cita?',
    },
    answer: {
      en: 'Yes! Our studio lighting and high-resolution digital medium allow you to preview every single pose in both Vivid Studio Color and Authentic Sepia Antique inside the Proofing Portal before you decide which finish you want for your 12×18 print.',
      es: '¡Sí! Nuestra iluminación de estudio y captura de alta resolución le permiten previsualizar cada pose tanto en Color Vivo de Estudio como en Sepia Antiguo Auténtico dentro del Portal de Pruebas antes de decidir qué acabado desea para su impresión 12×18.',
    },
  },
];
