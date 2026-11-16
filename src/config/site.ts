/**
 * Single source of truth for brand, copy and business data.
 * To rebrand the template, edit this file (and the projects collection).
 * Portfolio projects live in src/content/projects, NOT here.
 */
import type { ImageMetadata } from 'astro';

import heroImage01 from '../assets/hero/hero-01.jpg';
import heroImage02 from '../assets/hero/hero-02.jpg';
import heroImage03 from '../assets/hero/hero-03.jpg';
import aboutPortrait from '../assets/about/portrait.jpg';
import aboutAtWork from '../assets/about/at-work.jpg';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/** Specialty ids are shared with the projects collection schema. */
export const SPECIALTY_IDS = ['bodas', 'retratos', 'marcas'] as const;
export type SpecialtyId = (typeof SPECIALTY_IDS)[number];

export type Orientation = 'vertical' | 'horizontal';

export interface SiteImage {
  src: ImageMetadata;
  alt: string;
  /** Required when the image comes from a stock bank. Also listed in CREDITS.md. */
  credit?: { author: string; url: string };
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Specialty {
  id: SpecialtyId;
  title: string;
  /** Short label used in filters and metadata. */
  shortLabel: string;
  description: string;
  /** Slug of the project whose cover represents this specialty. */
  coverProject: string;
  /** Subtypes shown as tags (e.g. personal, familias, profesionales). */
  subtypes: string[];
  /** Matching option in form.serviceOptions, preselected from package CTAs. */
  formService: string;
}

export interface Package {
  id: string;
  specialty: SpecialtyId;
  name: string;
  /** "Desde" price in the configured currency. null = quoted on request. */
  priceFrom: number | null;
  /** Shown instead of the price when priceFrom is null. */
  priceLabel?: string;
  duration: string;
  includes: string[];
  delivery: string;
  ctaLabel: string;
  highlighted?: boolean;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  context: string;
  /** true = sample content, must not be presented as a real review. */
  placeholder: boolean;
}

export interface ClientOrPublication {
  name: string;
  kind: 'cliente' | 'publicación';
  placeholder: boolean;
}

export type FormProvider = 'formspree' | 'web3forms';

/** Interface copy (labels, buttons, section intros) kept out of components. */
export interface UiCopy {
  skipToContent: string;
  /** Small word next to the name in the header (e.g. "Fotografía"). */
  brandSuffix: string;
  homeLabel: string;
  navLabel: string;
  mobileNavLabel: string;
  menuOpen: string;
  menuClose: string;
  menuTitle: string;
  heroPause: string;
  heroPlay: string;
  heroSlideLabel: string;
  featured: { title: string; intro: string; viewAll: string };
  faqPrompt: { text: string; link: string };
  specialtiesTitle: string;
  specialtyLink: string;
  pricingFrom: string;
  placeholderTestimonial: string;
  placeholderClient: string;
  clientsNote: string;
  portfolio: { title: string; intro: string; filterLabel: string; all: string; empty: string; results: string; metaTitle: string; metaDescription: string };
  project: {
    galleryTitle: string;
    openPhoto: string;
    ctaTitle: string;
    ctaText: string;
    prev: string;
    next: string;
    back: string;
    photosCount: string;
    metaSpecialty: string;
    metaPlace: string;
    metaDate: string;
  };
  lightbox: { label: string; close: string; prev: string; next: string; of: string };
  form: {
    name: string;
    email: string;
    whatsapp: string;
    optional: string;
    service: string;
    servicePlaceholder: string;
    date: string;
    dateHint: string;
    place: string;
    message: string;
    messagePlaceholder: string;
    packagePrefill: string;
    privacyLink: string;
    submit: string;
    submitting: string;
    errorSummary: string;
    required: string;
    invalidEmail: string;
    consentRequired: string;
    orWrite: string;
    honeypot: string;
  };
  contactDirect: { whatsapp: string; email: string; instagram: string; studio: string };
  footer: { ctaTitle: string; navTitle: string; contactTitle: string; rights: string };
  notFound: { title: string; text: string; back: string; metaTitle: string };
  privacyMeta: { title: string; description: string; updated: string };
}

export interface SiteConfig {
  url: string;
  locale: string;
  lang: string;
  brand: {
    name: string;
    legalName: string;
    tagline: string;
    role: string;
    /** Short line for <title> suffix and local SEO. */
    seoSuffix: string;
    description: string;
  };
  /** Short proof phrases rendered as one hairline sentence under the hero. */
  credentials: string[];
  nav: NavItem[];
  cta: {
    primary: { label: string; href: string };
    whatsappLabel: string;
    whatsappMessage: string;
  };
  hero: {
    title: string;
    subtitle: string;
    /** 1 image = static hero, 2-3 images = slow pausable crossfade. */
    images: SiteImage[];
  };
  specialties: Specialty[];
  about: {
    title: string;
    paragraphs: string[];
    signature: string;
    portrait: SiteImage;
    secondary: SiteImage;
  };
  process: { title: string; intro: string; steps: ProcessStep[] };
  pricing: {
    title: string;
    intro: string;
    currency: 'ARS';
    note: string;
    packages: Package[];
  };
  testimonials: { title: string; items: Testimonial[] };
  clients: { title: string; items: ClientOrPublication[] };
  faq: { title: string; items: FaqItem[] };
  contact: {
    title: string;
    intro: string;
    email: string;
    /** E.164 without "+" for wa.me links. */
    whatsapp: string;
    whatsappDisplay: string;
    studio: string;
    serviceArea: string[];
    responseTime: string;
  };
  social: { instagram: { handle: string; url: string } };
  form: {
    provider: FormProvider;
    /** Empty = demo mode: the form shows a notice instead of submitting. */
    endpoint: string;
    /** Web3Forms access key (public by design). Empty when unused. */
    accessKey: string;
    serviceOptions: string[];
    successMessage: string;
    errorMessage: string;
    demoMessage: string;
    consentLabel: string;
  };
  legal: { privacyPath: string; copyrightHolder: string };
  demoNotice: { enabled: boolean; text: string };
  ui: UiCopy;
  /** Discreet footer credit for the template author. */
  studioCredit: { enabled: boolean; label: string; name: string; url: string };
}

// ---------------------------------------------------------------------------
// Data (sample, fictional)
// ---------------------------------------------------------------------------

const WHATSAPP = '5492610000000';

export const site: SiteConfig = {
  url: 'https://tomasaguirre-ejemplo.com',
  locale: 'es_AR',
  lang: 'es-AR',

  brand: {
    name: 'Tomás Aguirre',
    legalName: 'Tomás Aguirre Fotografía',
    tagline: 'Fotografía honesta para momentos que no se repiten.',
    role: 'Fotógrafo de bodas, retratos y marcas en Mendoza',
    seoSuffix: 'Fotógrafo en Mendoza',
    description:
      'Soy Tomás Aguirre, fotógrafo de bodas, retratos y marcas en Mendoza. Trabajo en Mendoza, San Juan y bodas de destino.',
  },

  credentials: ['9 años de experiencia', 'Más de 150 bodas', 'Mendoza, San Juan y destino'],

  nav: [
    { label: 'Trabajos', href: '/trabajos' },
    { label: 'Servicios', href: '/#servicios' },
    { label: 'Sobre mí', href: '/#sobre-mi' },
    { label: 'Preguntas', href: '/#preguntas' },
    { label: 'Contacto', href: '/#contacto' },
  ],

  cta: {
    primary: { label: 'Consultar disponibilidad', href: '/#contacto' },
    whatsappLabel: 'Escribime por WhatsApp',
    whatsappMessage: 'Hola Tomás, vi tu sitio y quería consultar disponibilidad para ',
  },

  hero: {
    title: 'Tomás Aguirre',
    subtitle: 'Fotografía honesta para momentos que no se repiten.',
    images: [
      {
        src: heroImage01,
        alt: 'Pareja de novios caminando entre viñedos al atardecer con la cordillera de fondo',
      },
      {
        src: heroImage02,
        alt: 'Retrato de una mujer junto a una ventana con luz suave de la tarde',
      },
      {
        src: heroImage03,
        alt: 'Fachada de una bodega entre viñedos con la última luz del día',
      },
    ],
  },

  specialties: [
    {
      id: 'bodas',
      title: 'Bodas y eventos',
      shortLabel: 'Bodas',
      description:
        'Cuento el día como pasó, sin interrumpirlo. Estoy desde los preparativos hasta que se apaga la pista, en Mendoza, San Juan o donde decidan casarse.',
      coverProject: 'sofia-y-martin-valle-de-uco',
      subtypes: ['Bodas', 'Civiles', 'Destino', 'Eventos'],
      formService: 'Boda o evento',
    },
    {
      id: 'retratos',
      title: 'Retratos',
      shortLabel: 'Retratos',
      description:
        'Sesiones tranquilas, en el estudio o en exteriores, para que te veas como sos. Retratos personales, de familia y profesionales.',
      coverProject: 'clara-retrato-personal',
      subtypes: ['Personales', 'Familias', 'Profesionales'],
      formService: 'Retrato personal',
    },
    {
      id: 'marcas',
      title: 'Fotografía para marcas',
      shortLabel: 'Marcas',
      description:
        'Imágenes con criterio para bodegas, restaurantes y marcas de producto. Pensadas para web, redes y prensa, con licencia de uso comercial.',
      coverProject: 'vendimia-bodega-boutique-agrelo',
      subtypes: ['Producto', 'Gastronomía', 'Bodegas'],
      formService: 'Fotografía para marcas',
    },
  ],

  about: {
    title: 'Hola, soy Tomás',
    paragraphs: [
      'Hace nueve años que fotografío personas. Empecé con las bodas de amigos y me quedé: me gusta estar cerca, mirar con paciencia y encontrar los momentos chiquitos que después son los que más se recuerdan.',
      'No dirijo poses ni armo escenas. Prefiero que el día pase como tiene que pasar y estar en el lugar justo. Cuando hace falta, propongo; el resto del tiempo, observo.',
      'Trabajo desde mi estudio en Godoy Cruz y viajo seguido a San Juan y a donde me lleven las bodas de destino. Si estás pensando en hacer fotos, escribime: la primera charla es sin compromiso.',
    ],
    signature: 'Tomás',
    portrait: {
      src: aboutPortrait,
      alt: 'Retrato de Tomás Aguirre sonriendo, con la cámara colgada del hombro',
    },
    secondary: {
      src: aboutAtWork,
      alt: 'Tomás fotografiando una ceremonia al aire libre, agachado entre los invitados',
    },
  },

  process: {
    title: 'Cómo trabajo',
    intro: 'Un proceso simple y claro, para que sepas en todo momento qué sigue.',
    steps: [
      {
        title: 'Consulta',
        description:
          'Me contás qué tenés en mente, la fecha y el lugar. Te respondo en menos de 48 horas y, si querés, hacemos una videollamada.',
      },
      {
        title: 'Propuesta y reserva',
        description:
          'Te envío una propuesta a medida. La fecha queda reservada con una seña del 30% y un contrato simple.',
      },
      {
        title: 'Sesión o evento',
        description:
          'Llego con tiempo, con equipo de respaldo, y trabajo sin interrumpir. Vos disfrutás; yo me ocupo de las fotos.',
      },
      {
        title: 'Edición',
        description:
          'Selecciono y edito cada foto a mano, con un color natural y consistente. Nada de filtros de moda que envejecen mal.',
      },
      {
        title: 'Entrega',
        description:
          'Recibís todas las fotos en alta resolución en una galería online privada, lista para descargar y compartir.',
      },
    ],
  },

  pricing: {
    title: 'Paquetes',
    intro: 'Precios de referencia para que tengas una idea. Cada propuesta final se arma según el día y lo que necesites.',
    currency: 'ARS',
    note: 'Valores de ejemplo en pesos argentinos. Viáticos fuera del Gran Mendoza se cotizan aparte.',
    packages: [
      {
        id: 'boda-esencial',
        specialty: 'bodas',
        name: 'Esencial',
        priceFrom: 1450000,
        duration: '6 horas de cobertura',
        includes: [
          'Ceremonia, retratos de pareja y fiesta',
          'Más de 400 fotos editadas',
          'Reunión previa para planificar el día',
        ],
        delivery: 'Galería online privada en 6 semanas',
        ctaLabel: 'Consultar disponibilidad',
      },
      {
        id: 'boda-completa',
        specialty: 'bodas',
        name: 'Completa',
        priceFrom: 2300000,
        duration: '10 horas de cobertura + sesión preboda',
        includes: [
          'Desde los preparativos hasta el final de la fiesta',
          'Sesión preboda de 1 hora en exteriores',
          'Más de 700 fotos editadas',
          'Segundo fotógrafo durante la ceremonia',
        ],
        delivery: 'Galería online privada en 6 semanas',
        ctaLabel: 'Consultar disponibilidad',
        highlighted: true,
      },
      {
        id: 'boda-destino',
        specialty: 'bodas',
        name: 'Destino',
        priceFrom: null,
        priceLabel: 'A medida',
        duration: 'Cobertura de uno o más días',
        includes: [
          'Preboda, boda y día después',
          'Planificación conjunta del viaje',
          'Fotos editadas sin límite de cantidad',
        ],
        delivery: 'Galería online privada en 8 semanas',
        ctaLabel: 'Pedir propuesta',
      },
      {
        id: 'retrato-sesion',
        specialty: 'retratos',
        name: 'Sesión de retrato',
        priceFrom: 180000,
        duration: '1 hora, en estudio o exteriores',
        includes: ['20 fotos editadas', 'Asesoramiento de vestuario', 'Hasta 2 cambios de ropa'],
        delivery: 'Galería online privada en 2 semanas',
        ctaLabel: 'Reservar sesión',
      },
      {
        id: 'retrato-extendida',
        specialty: 'retratos',
        name: 'Sesión extendida',
        priceFrom: 290000,
        duration: '2 horas, hasta 2 locaciones',
        includes: [
          '45 fotos editadas',
          'Ideal para familias o equipos chicos',
          'Asesoramiento de vestuario y locación',
        ],
        delivery: 'Galería online privada en 2 semanas',
        ctaLabel: 'Reservar sesión',
      },
      {
        id: 'marca-media',
        specialty: 'marcas',
        name: 'Media jornada',
        priceFrom: 420000,
        duration: '4 horas de producción',
        includes: [
          'Planificación de la toma (shot list)',
          '40 fotos editadas',
          'Licencia de uso comercial por 1 año',
        ],
        delivery: 'Galería online privada en 10 días',
        ctaLabel: 'Pedir presupuesto',
      },
      {
        id: 'marca-completa',
        specialty: 'marcas',
        name: 'Jornada completa',
        priceFrom: 720000,
        duration: '8 horas de producción',
        includes: [
          'Planificación de la toma (shot list)',
          '90 fotos editadas',
          'Licencia de uso comercial por 2 años',
          'Producto, ambiente y equipo en una misma jornada',
        ],
        delivery: 'Galería online privada en 10 días',
        ctaLabel: 'Pedir presupuesto',
      },
    ],
  },

  testimonials: {
    title: 'Lo que dicen',
    items: [
      {
        quote:
          'Nos olvidamos de que había un fotógrafo. Cuando vimos la galería entendimos que había estado en todos lados.',
        author: 'Pareja de ejemplo',
        context: 'Boda en el Valle de Uco',
        placeholder: true,
      },
      {
        quote:
          'Nunca me había gustado salir en fotos. Con Tomás fue fácil, y por primera vez me reconocí en un retrato.',
        author: 'Clienta de ejemplo',
        context: 'Sesión de retrato',
        placeholder: true,
      },
      {
        quote:
          'Entendió la marca desde la primera reunión. Usamos esas fotos en la web, en redes y en la prensa durante todo el año.',
        author: 'Bodega de ejemplo',
        context: 'Fotografía para marcas',
        placeholder: true,
      },
    ],
  },

  clients: {
    title: 'Clientes y publicaciones',
    items: [
      { name: 'Bodega familiar del Valle de Uco', kind: 'cliente', placeholder: true },
      { name: 'Restaurante de montaña en Potrerillos', kind: 'cliente', placeholder: true },
      { name: 'Estudio de arquitectura de Mendoza', kind: 'cliente', placeholder: true },
      { name: 'Taller de cerámica de autor', kind: 'cliente', placeholder: true },
      { name: 'Revista regional de bodas', kind: 'publicación', placeholder: true },
      { name: 'Blog de bodas de destino', kind: 'publicación', placeholder: true },
    ],
  },

  faq: {
    title: 'Preguntas frecuentes',
    items: [
      {
        question: '¿Con cuánta anticipación tengo que reservar?',
        answer:
          'Para bodas, entre 8 y 12 meses antes, sobre todo si es en temporada alta (octubre a abril). Para retratos y marcas suele alcanzar con dos o tres semanas.',
      },
      {
        question: '¿Cómo se reserva la fecha?',
        answer:
          'Con una seña del 30% y un contrato simple. El resto se abona hasta una semana antes del evento o el día de la sesión.',
      },
      {
        question: '¿Viajás fuera de Mendoza?',
        answer:
          'Sí. Trabajo seguido en San Juan y hago bodas de destino en todo el país. Los viáticos se cotizan aparte y se incluyen en la propuesta.',
      },
      {
        question: '¿Cuándo y cómo recibo las fotos?',
        answer:
          'En una galería online privada, en alta resolución y lista para descargar. Los plazos van de 10 días a 8 semanas según el servicio.',
      },
      {
        question: '¿Entregás las fotos sin editar?',
        answer:
          'No. La edición es parte de mi mirada: selecciono y edito cada foto que entrego. Así te aseguro un resultado coherente.',
      },
      {
        question: '¿Puedo usar las fotos de mi marca en publicidad?',
        answer:
          'Sí. Los paquetes para marcas incluyen licencia de uso comercial por el período indicado, renovable.',
      },
    ],
  },

  contact: {
    title: 'Contame tu idea',
    intro:
      'Escribime con la fecha, el lugar y lo que tengas en mente. Te respondo personalmente con disponibilidad y una propuesta.',
    email: 'hola@tomasaguirre-ejemplo.com',
    whatsapp: WHATSAPP,
    whatsappDisplay: '+54 9 261 000-0000',
    studio: 'Estudio en Godoy Cruz, Mendoza · con cita previa',
    serviceArea: ['Mendoza', 'San Juan', 'Argentina (bodas de destino)'],
    responseTime: 'Respondo en menos de 48 horas hábiles.',
  },

  social: {
    instagram: {
      handle: '@tomasaguirre.ejemplo',
      url: 'https://instagram.com/tomasaguirre.ejemplo',
    },
  },

  form: {
    provider: 'web3forms',
    endpoint: '',
    accessKey: '',
    serviceOptions: ['Boda o evento', 'Retrato personal', 'Retrato de familia', 'Retrato profesional', 'Fotografía para marcas', 'Otro'],
    successMessage: '¡Gracias! Recibí tu consulta y te respondo en menos de 48 horas.',
    errorMessage: 'No se pudo enviar el formulario. Probá de nuevo o escribime por WhatsApp.',
    demoMessage:
      'Este es un sitio de demostración: el formulario no envía mensajes. En un sitio real, tu consulta llegaría directo a mi correo.',
    consentLabel: 'Acepto que mis datos se usen solo para responder esta consulta, según la',
  },

  legal: {
    privacyPath: '/privacidad',
    copyrightHolder: 'Tomás Aguirre',
  },

  demoNotice: {
    enabled: true,
    text: 'Sitio de demostración: el fotógrafo, los trabajos y los precios son ficticios.',
  },

  ui: {
    skipToContent: 'Saltar al contenido',
    brandSuffix: 'Fotografía',
    homeLabel: 'inicio',
    navLabel: 'Principal',
    mobileNavLabel: 'Menú móvil',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
    menuTitle: 'Menú',
    heroPause: 'Pausar la secuencia de fotos',
    heroPlay: 'Reanudar la secuencia de fotos',
    heroSlideLabel: 'Foto',
    featured: {
      title: 'Trabajos seleccionados',
      intro: 'Algunas historias recientes: bodas, retratos y marcas, contadas foto por foto.',
      viewAll: 'Ver todos los trabajos',
    },
    faqPrompt: {
      text: '¿Te quedó alguna duda que no está acá? Escribime y lo charlamos sin compromiso.',
      link: 'Hacer una consulta',
    },
    specialtiesTitle: 'Qué fotografío',
    specialtyLink: 'Ver trabajos',
    pricingFrom: 'Desde',
    placeholderTestimonial: 'Testimonio de ejemplo',
    placeholderClient: 'Ejemplo',
    clientsNote: 'Nombres genéricos de ejemplo para esta demostración.',
    portfolio: {
      title: 'Trabajos',
      intro: 'Bodas, retratos y fotografía para marcas en Mendoza, San Juan y destino. Elegí una especialidad para filtrar.',
      filterLabel: 'Filtrar por especialidad',
      all: 'Todos',
      empty: 'Todavía no hay trabajos en esta especialidad.',
      results: 'trabajos visibles',
      metaTitle: 'Trabajos · Fotografía de bodas, retratos y marcas en Mendoza',
      metaDescription: 'Portfolio de Tomás Aguirre: bodas, retratos y fotografía para marcas en Mendoza, San Juan y bodas de destino.',
    },
    project: {
      galleryTitle: 'Galería',
      openPhoto: 'Ampliar foto',
      ctaTitle: '¿Tenés una fecha en mente?',
      ctaText: 'Contame qué estás planeando y te respondo con disponibilidad y una propuesta a medida.',
      prev: 'Trabajo anterior',
      next: 'Trabajo siguiente',
      back: 'Volver a todos los trabajos',
      photosCount: 'fotos',
      metaSpecialty: 'Especialidad',
      metaPlace: 'Lugar',
      metaDate: 'Fecha',
    },
    lightbox: {
      label: 'Visor de fotos',
      close: 'Cerrar visor',
      prev: 'Foto anterior',
      next: 'Foto siguiente',
      of: 'de',
    },
    form: {
      name: 'Nombre',
      email: 'Email',
      whatsapp: 'WhatsApp',
      optional: 'opcional',
      service: 'Tipo de servicio',
      servicePlaceholder: 'Elegí una opción',
      date: 'Fecha estimada',
      dateHint: 'Si todavía no la tenés, dejalo vacío.',
      place: 'Lugar',
      message: 'Mensaje',
      messagePlaceholder: 'Contame qué tenés en mente: cantidad de invitados, horarios, ideas…',
      packagePrefill: 'Me interesa el paquete',
      privacyLink: 'política de privacidad',
      submit: 'Enviar consulta',
      submitting: 'Enviando…',
      errorSummary: 'Revisá los campos marcados para poder enviar la consulta.',
      required: 'Este campo es obligatorio.',
      invalidEmail: 'Ingresá un email válido, por ejemplo nombre@correo.com.',
      consentRequired: 'Necesito tu consentimiento para responderte.',
      orWrite: 'Si preferís, escribime directo:',
      honeypot: 'No completes este campo',
    },
    contactDirect: {
      whatsapp: 'WhatsApp',
      email: 'Email',
      instagram: 'Instagram',
      studio: 'Estudio',
    },
    footer: {
      ctaTitle: 'Contame tu fecha y armamos algo a medida.',
      navTitle: 'Navegación',
      contactTitle: 'Contacto',
      rights: 'Todas las fotos tienen derechos reservados.',
    },
    notFound: {
      title: 'Esta página no existe',
      text: 'Puede que el enlace esté roto o que el trabajo ya no esté publicado.',
      back: 'Volver al inicio',
      metaTitle: 'Página no encontrada',
    },
    privacyMeta: {
      title: 'Política de privacidad',
      description: 'Cómo trato los datos que enviás a través del formulario de consulta.',
      updated: 'Última actualización:',
    },
  },

  studioCredit: {
    enabled: true,
    label: 'Sitio por',
    name: 'Estudio Nodo',
    // Placeholder: replace with Estudio Nodo's real URL.
    url: '#',
  },
};

/** wa.me link with an optional prefilled message. */
export const whatsappUrl = (message: string = site.cta.whatsappMessage): string =>
  `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;

/** Formats a "desde" price using the configured locale and currency. */
export const formatPrice = (value: number): string =>
  new Intl.NumberFormat(site.lang, {
    style: 'currency',
    currency: site.pricing.currency,
    maximumFractionDigits: 0,
  }).format(value);

export const getSpecialty = (id: SpecialtyId): Specialty => {
  const specialty = site.specialties.find((s) => s.id === id);
  if (!specialty) throw new Error(`Unknown specialty: ${id}`);
  return specialty;
};
