import { Backdrop, StudioPackage } from '@/types';

export const STUDIO_PACKAGES: StudioPackage[] = [
  {
    id: 'promo-1995',
    badge: {
      en: 'Limited Time Event Special',
      es: 'Oferta Especial por Tiempo Limitado',
    },
    name: {
      en: 'Promotional $19.95 Special (12×18 Portrait)',
      es: 'Especial Promocional $19.95 (Retrato 12×18)',
    },
    subtitle: {
      en: 'Choice of Vivid Studio Color OR Timeless Antique Vintage Finish',
      es: 'Elección de Color de Estudio Vivo O Acabado Antiguo Vintage Atemporal',
    },
    price: 19.95,
    originalPrice: 75.0,
    sittingFee: 10.0,
    duration: {
      en: '30-Minute Guided Studio Sitting',
      es: 'Sesión Guiada de Estudio de 30 Minutos',
    },
    includes: {
      en: [
        'One (1) 12×18 Heirloom Wall Portrait on archival lustre paper',
        'Your choice of Vivid Color OR Authentic Sepia Antique finish',
        'Full access to vintage wardrobe props, hats, pearls, and period accessories',
        'Up to 8 family members, siblings, or individual children',
        'Private online & in-studio proofing gallery to select your favorite pose',
      ],
      es: [
        'Un (1) Retrato de Pared 12×18 en papel lustre de archivo',
        'Su elección de Color Vivo O Acabado Antiguo Sepia Auténtico',
        'Acceso completo a utilería vintage, sombreros, perlas y accesorios de época',
        'Hasta 8 miembros de la familia, hermanos o niños individuales',
        'Galería privada de pruebas en línea y en estudio para elegir su pose favorita',
      ],
    },
  },
  {
    id: 'family-heirloom',
    badge: {
      en: 'Most Popular for Extended Families',
      es: 'Más Popular para Familias Grandes',
    },
    name: {
      en: 'Full Family Heirloom Session',
      es: 'Sesión Familiar Completa de Reliquia',
    },
    subtitle: {
      en: 'Multi-pose color & antique dual sitting with complete print collection',
      es: 'Sesión doble en color y antiguo con múltiples poses y colección de impresiones',
    },
    price: 89.0,
    originalPrice: 145.0,
    sittingFee: 10.0,
    duration: {
      en: '60-Minute Extended Studio Sitting',
      es: 'Sesión Extendida de Estudio de 60 Minutos',
    },
    includes: {
      en: [
        'One (1) 12×18 Master Family Wall Portrait + Two (2) 8×10 Gift Prints',
        'Eight (8) Die-Cut Heirloom Wallet Portraits',
        'Two backdrop changes (shoot both Classic Color & Vintage Antique)',
        'Full family grouping plus individual sibling & grandparent breakouts',
        'Complimentary digital social media preview file of your master print',
      ],
      es: [
        'Un (1) Retrato Principal 12×18 + Dos (2) Impresiones de Regalo 8×10',
        'Ocho (8) Retratos Tamaño Cartera Troquelados',
        'Dos cambios de fondo (fotografíe tanto en Color Clásico como en Antiguo Vintage)',
        'Grupo familiar completo más tomas individuales de hermanos y abuelos',
        'Archivo digital de vista previa para redes sociales de su retrato principal',
      ],
    },
  },
  {
    id: 'childrens-antique',
    badge: {
      en: 'Signature Vintage Character Experience',
      es: 'Experiencia Exclusiva de Personaje Vintage',
    },
    name: {
      en: "Children's Antique & Costume Sitting",
      es: 'Sesión Infantil Antigua y con Vestuario de Época',
    },
    subtitle: {
      en: '1920s newsboy, Victorian lace, little scholar & heirloom prop styling',
      es: 'Estilismo de época años 1920, encaje victoriano, pequeño erudito y utilería',
    },
    price: 49.95,
    originalPrice: 95.0,
    sittingFee: 10.0,
    duration: {
      en: '45-Minute Styled Character Sitting',
      es: 'Sesión Estilizada de Personaje de 45 Minutos',
    },
    includes: {
      en: [
        'One (1) 12×18 Fine-Art Deckled Edge Antique Portrait',
        'Two (2) 5×7 Keepsake Desk Portraits',
        'Complete studio costume dressing (suspenders, flat caps, Victorian dresses, antique books & suitcases)',
        'Warm hand-toned sepia & vignette darkroom finishing',
        'Ideal for ages 6 months to 12 years (siblings welcome)',
      ],
      es: [
        'Un (1) Retrato Antiguo de Bellas Artes 12×18',
        'Dos (2) Retratos de Escritorio de Recuerdo 5×7',
        'Vestuario completo de estudio (tirantes, gorras clásicas, vestidos victorianos, libros y maletas antiguas)',
        'Acabado artesanal en sepia cálido y viñeteado de cuarto oscuro',
        'Ideal para edades de 6 meses a 12 años (hermanos bienvenidos)',
      ],
    },
  },
];

export const BACKDROPS: Backdrop[] = [
  {
    code: 'M122V',
    name: {
      en: 'Autumn Forest Pathway',
      es: 'Sendero del Bosque de Otoño',
    },
    category: 'scenic',
    categoryLabel: {
      en: 'Scenic & Outdoor',
      es: 'Escénico y Exterior',
    },
    description: {
      en: 'Golden-hour woodland trail with warm amber foliage and soft depth-of-field bokeh. Creates a rich, natural glow for multi-generational family portraits.',
      es: 'Sendero boscoso en la hora dorada con follaje ámbar cálido y desenfoque suave. Crea un brillo rico y natural para retratos familiares multigeneracionales.',
    },
    framingSuggestion: {
      en: 'Full-length seated & standing family cluster on our rustic oak bench surrounded by autumn leaves.',
      es: 'Grupo familiar de cuerpo entero sentado y de pie en nuestra banca de roble rústico rodeado de hojas de otoño.',
    },
    wardrobeTip: {
      en: 'Cream, burgundy, forest green, navy, or camel tones harmonize beautifully.',
      es: 'Los tonos crema, borgoña, verde bosque, azul marino o camel armonizan hermosamente.',
    },
    recommendedFinish: 'both',
    imageUrl:
      'https://images.unsplash.com/photo-1507041957456-9c397ce39c97?auto=format&fit=crop&w=1000&q=80',
    samplePortraitUrl:
      'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=900&q=80',
    featured: true,
  },
  {
    code: 'BrickWall',
    name: {
      en: 'Urban Vintage Exposed Brick',
      es: 'Ladrillo Expuesto Vintage Urbano',
    },
    category: 'architectural',
    categoryLabel: {
      en: 'Architectural & Brick',
      es: 'Arquitectónico y Ladrillo',
    },
    description: {
      en: 'Weathered 19th-century Chicago-style loft brick with warm mortar textures. Our #1 requested backdrop for newsboy cap antique portraits and casual family sittings.',
      es: 'Ladrillo envejecido estilo loft del siglo XIX con texturas cálidas. Nuestro fondo #1 más solicitado para retratos antiguos con gorra y sesiones familiares.',
    },
    framingSuggestion: {
      en: 'Three-quarter pose leaning against vintage wooden crates or seated on an antique leather trunk.',
      es: 'Pose de tres cuartos apoyado en cajas de madera vintage o sentado en un baúl de cuero antiguo.',
    },
    wardrobeTip: {
      en: 'Denim, suspenders, linen shirts, or studio-provided 1920s vintage attire.',
      es: 'Mezclilla, tirantes, camisas de lino o vestuario vintage de los años 1920 provisto por el estudio.',
    },
    recommendedFinish: 'antique',
    imageUrl:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    samplePortraitUrl:
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80',
    featured: true,
  },
  {
    code: 'SR177V',
    name: {
      en: 'Classic Heirloom Textured Vignette',
      es: 'Viñeta Texturizada Clásica de Reliquia',
    },
    category: 'classic',
    categoryLabel: {
      en: 'Studio Classic',
      es: 'Clásico de Estudio',
    },
    description: {
      en: 'Hand-painted Old Master canvas with warm espresso edges and a luminous burnt-umber center. Keeps 100% of the visual focus on faces and expressions.',
      es: 'Lienzo pintado a mano estilo Viejos Maestros con bordes expreso cálidos y centro luminoso. Mantiene el 100% del enfoque visual en los rostros y expresiones.',
    },
    framingSuggestion: {
      en: 'Tight heirloom head-and-shoulders composition or classic pyramid family grouping with directional Rembrandt lighting.',
      es: 'Composición cerrada de cabeza y hombros o agrupación familiar piramidal clásica con iluminación Rembrandt.',
    },
    wardrobeTip: {
      en: 'Timeless solid darks, jewel tones, or antique lace collars.',
      es: 'Tonos oscuros sólidos atemporales, tonos joya o cuellos de encaje antiguo.',
    },
    recommendedFinish: 'both',
    imageUrl:
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1000&q=80',
    samplePortraitUrl:
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80',
    featured: true,
  },
  {
    code: 'Bookcase2',
    name: {
      en: 'Classic Scholar Library',
      es: 'Biblioteca Clásica del Erudito',
    },
    category: 'architectural',
    categoryLabel: {
      en: 'Architectural & Brick',
      es: 'Arquitectónico y Ladrillo',
    },
    description: {
      en: 'Floor-to-ceiling mahogany bookshelves lined with leather-bound volumes, brass globe accents, and warm study ambiance.',
      es: 'Estanterías de caoba de piso a techo llenas de volúmenes encuadernados en cuero, detalles de globo de bronce y ambiente cálido de estudio.',
    },
    framingSuggestion: {
      en: 'Ideal for graduates, children holding leather-bound storybooks, or dignified formal family portraits.',
      es: 'Ideal para graduados, niños sosteniendo libros de cuentos en cuero o retratos familiares formales distinguidos.',
    },
    wardrobeTip: {
      en: 'Blazers, tweed waistcoats, Sunday best dresses, and bowties.',
      es: 'Blazers, chalecos de tweed, vestidos de gala y corbatas de moño.',
    },
    recommendedFinish: 'both',
    imageUrl:
      'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1000&q=80',
    samplePortraitUrl:
      'https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=900&q=80',
    featured: true,
  },
  {
    code: '406V',
    name: {
      en: 'Vibrant Botanical Garden',
      es: 'Jardín Botánico Vibrante',
    },
    category: 'scenic',
    categoryLabel: {
      en: 'Scenic & Outdoor',
      es: 'Escénico y Exterior',
    },
    description: {
      en: 'Sun-dappled stone archway draped in blooming roses, ivy, and lush spring greenery. Brings outdoor conservatory elegance inside the climate-controlled studio.',
      es: 'Arco de piedra bañado por el sol cubierto de rosas en flor, hiedra y exuberante vegetación primaveral. Trae la elegancia de un jardín al estudio.',
    },
    framingSuggestion: {
      en: 'Mother-daughter portraits, Quinceañera court previews, First Communion, and spring family celebrations.',
      es: 'Retratos de madre e hija, vistas previas de Quinceañera, Primera Comunión y celebraciones familiares de primavera.',
    },
    wardrobeTip: {
      en: 'Pastels, white eyelet lace, floral dresses, and light linen suits.',
      es: 'Colores pastel, encaje blanco, vestidos florales y trajes de lino claros.',
    },
    recommendedFinish: 'color',
    imageUrl:
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1000&q=80',
    samplePortraitUrl:
      'https://images.unsplash.com/photo-1484863137850-59afcfe05386?auto=format&fit=crop&w=900&q=80',
  },
  {
    code: 'M133V',
    name: {
      en: 'Tropical Palm Beach',
      es: 'Playa Tropical de Palmeras',
    },
    category: 'scenic',
    categoryLabel: {
      en: 'Scenic & Outdoor',
      es: 'Escénico y Exterior',
    },
    description: {
      en: 'Breezy coastal shoreline with swaying palms, turquoise ocean horizon, and warm white sand dunes.',
      es: 'Costa fresca con palmeras mecidas por la brisa, horizonte oceánico turquesa y dunas de arena blanca cálida.',
    },
    framingSuggestion: {
      en: 'Barefoot summer family sittings, toddler milestone portraits with seashells, and relaxed vacation-style groupings.',
      es: 'Sesiones familiares de verano descalzos, retratos de bebés con conchas marinas y grupos relajados estilo vacaciones.',
    },
    wardrobeTip: {
      en: 'Crisp white shirts, khaki shorts, sky blue, or coral summer outfits.',
      es: 'Camisas blancas impecables, pantalones cortos caqui, azul cielo o conjuntos de verano coral.',
    },
    recommendedFinish: 'color',
    imageUrl:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
    samplePortraitUrl:
      'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=900&q=80',
  },
  {
    code: 'C1',
    name: {
      en: 'Winter Snowscape Pines (Series C1–C4)',
      es: 'Paisaje Nevado de Pinos de Invierno (Serie C1–C4)',
    },
    category: 'holiday',
    categoryLabel: {
      en: 'Holiday & Themed',
      es: 'Navideño y Temático',
    },
    description: {
      en: 'Frosted evergreen forest with twinkling lantern warmth and freshly fallen snow. Perfect for holiday greeting cards and seasonal 12×18 wall gifts.',
      es: 'Bosque de pinos escarchados con calidez de linternas brillantes y nieve recién caída. Perfecto para tarjetas navideñas y regalos de pared 12×18.',
    },
    framingSuggestion: {
      en: 'Children seated on our vintage wooden sled or family wrapped in plaid wool blankets.',
      es: 'Niños sentados en nuestro trineo de madera vintage o familia envuelta en mantas de lana a cuadros.',
    },
    wardrobeTip: {
      en: 'Cranberry red, Tartan plaid, cable-knit sweaters, and velvet dresses.',
      es: 'Rojo arándano, cuadros escoceses, suéteres tejidos y vestidos de terciopelo.',
    },
    recommendedFinish: 'color',
    imageUrl:
      'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=1000&q=80',
    samplePortraitUrl:
      'https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=900&q=80',
  },
  {
    code: 'C7',
    name: {
      en: 'Dreamy Pastel Rainbow & Clouds (Series C5–C9)',
      es: 'Arcoíris Pastel de Ensueño y Nubes (Serie C5–C9)',
    },
    category: 'holiday',
    categoryLabel: {
      en: 'Holiday & Themed',
      es: 'Navideño y Temático',
    },
    description: {
      en: 'Whimsical cotton-candy clouds with soft watercolor rainbow arches and golden stars. Designed specifically for 1st birthdays, cake smashes, and toddlers.',
      es: 'Nubes caprichosas con arcos de arcoíris en acuarela suave y estrellas doradas. Diseñado específicamente para primeros cumpleaños y bebés.',
    },
    framingSuggestion: {
      en: 'Low-angle child sitting in our vintage wicker basket or white wooden rocking horse.',
      es: 'Ángulo bajo con el niño sentado en nuestra canasta de mimbre vintage o caballito mecedor blanco.',
    },
    wardrobeTip: {
      en: 'Tulle tutus, pastel rompers, suspender shorts, and floral headbands.',
      es: 'Tutús de tul, mamelucos pastel, pantalones cortos con tirantes y diademas florales.',
    },
    recommendedFinish: 'color',
    imageUrl:
      'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1000&q=80',
    samplePortraitUrl:
      'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=80',
  },
  {
    code: 'C14',
    name: {
      en: 'Victorian Parlor Hearth & Garland (Series C10–C14)',
      es: 'Salón Victoriano con Chimenea y Guirnalda (Serie C10–C14)',
    },
    category: 'classic',
    categoryLabel: {
      en: 'Studio Classic',
      es: 'Clásico de Estudio',
    },
    description: {
      en: 'Carved mantelpiece with warm candlelight, antique wainscoting, and rich heirloom drapery. Works magnificently in both Vivid Color and Sepia Antique.',
      es: 'Repisa de chimenea tallada con cálida luz de velas, paneles antiguos y cortinaje de reliquia. Luce magnífico tanto en Color Vivo como en Antiguo Sepia.',
    },
    framingSuggestion: {
      en: 'Formal multi-generational family portrait with grandparents seated center on our velvet settee.',
      es: 'Retrato familiar formal multigeneracional con los abuelos sentados al centro en nuestro sofá de terciopelo.',
    },
    wardrobeTip: {
      en: 'Formal evening wear, suits, heirloom lace, or full vintage parlor attire.',
      es: 'Ropa formal de noche, trajes, encaje de reliquia o vestuario completo de salón vintage.',
    },
    recommendedFinish: 'both',
    imageUrl:
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=80',
    samplePortraitUrl:
      'https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=900&q=80',
  },
  {
    code: 'M190V',
    name: {
      en: 'Cherry Blossom Spring Path',
      es: 'Sendero Primaveral de Cerezos en Flor',
    },
    category: 'scenic',
    categoryLabel: {
      en: 'Scenic & Outdoor',
      es: 'Escénico y Exterior',
    },
    description: {
      en: 'Soft pink cherry blossom canopy lining a sunlit garden walk. A customer favorite for spring family portraits, maternity, and sister sittings.',
      es: 'Dosel de flores de cerezo rosa suave bordeando un paseo de jardín iluminado por el sol. Favorito para retratos familiares de primavera y hermanas.',
    },
    framingSuggestion: {
      en: 'Seated on our white garden bench or standing arm-in-arm beneath the blossom arch.',
      es: 'Sentados en nuestra banca blanca de jardín o de pie bajo el arco de flores.',
    },
    wardrobeTip: {
      en: 'Blush pink, ivory, dove gray, and soft floral textures.',
      es: 'Rosa pálido, marfil, gris paloma y texturas florales suaves.',
    },
    recommendedFinish: 'color',
    imageUrl:
      'https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=1000&q=80',
    samplePortraitUrl:
      'https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&w=900&q=80',
  },
  {
    code: '125V',
    name: {
      en: 'American Heritage Studio Drape',
      es: 'Cortinaje Clásico de Herencia Americana',
    },
    category: 'classic',
    categoryLabel: {
      en: 'Studio Classic',
      es: 'Clásico de Estudio',
    },
    description: {
      en: 'Dignified stars-and-stripes heirloom drape crafted for military homecomings, veteran tributes, civic milestones, and patriotic family portraits.',
      es: 'Cortinaje solemne de barras y estrellas diseñado para bienvenidas militares, tributos a veteranos y retratos familiares patrióticos.',
    },
    framingSuggestion: {
      en: 'Formal standing salute or seated multi-generational tribute around the service member.',
      es: 'Pose formal de pie o tributo multigeneracional sentado alrededor del miembro en servicio.',
    },
    wardrobeTip: {
      en: 'Dress uniforms, navy blazers, crisp white shirts, and classic denim.',
      es: 'Uniformes de gala, blazers azul marino, camisas blancas y mezclilla clásica.',
    },
    recommendedFinish: 'both',
    imageUrl:
      'https://images.unsplash.com/photo-1508433957232-3107f5fd5995?auto=format&fit=crop&w=1000&q=80',
    samplePortraitUrl:
      'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=900&q=80',
  },
];
