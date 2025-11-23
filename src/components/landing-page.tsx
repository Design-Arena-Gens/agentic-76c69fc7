"use client";

import type { ReactNode } from "react";
import { useEffect, useMemo, useState, useTransition } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Accessibility,
  ArrowRight,
  CheckCircle2,
  Globe,
  Languages,
  Lock,
  Search,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

type LanguageKey = "en" | "es" | "fr";

type Translation = {
  tagline: string;
  hero: {
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    banner: string;
  };
  navigation: { label: string; href: string }[];
  stats: { label: string; value: string }[];
  tools: {
    name: string;
    description: string;
    features: string[];
    href: string;
    category: string;
  }[];
  highlights: {
    title: string;
    description: string;
    bullets: { title: string; body: string }[];
  };
  accessibility: {
    title: string;
    description: string;
    points: { title: string; body: string }[];
  };
  privacy: {
    title: string;
    description: string;
    bullets: string[];
    cta: string;
  };
  testimonials: {
    quote: string;
    author: string;
    role: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  footer: {
    statement: string;
    rights: string;
    accessibility: string;
  };
};

const translations: Record<LanguageKey, Translation> = {
  en: {
    tagline: "Daily productivity infrastructure. Totally accessible. Completely yours.",
    hero: {
      title: "dpita.com is your essential digital toolkit for everyday wins.",
      subtitle:
        "Launch privacy-first tools, lightning-fast workflows, and multilingual experiences in under two seconds. No sign-ups, just results you can trust.",
      primaryCta: "Explore the Toolkit",
      secondaryCta: "View Accessibility Promise",
      banner: "Instant access • Free forever • Zero data retained",
    },
    navigation: [
      { label: "Toolkit", href: "#toolkit" },
      { label: "Highlights", href: "#highlights" },
      { label: "Privacy", href: "#privacy" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
    ],
    stats: [
      { label: "Average load time", value: "1.4 seconds" },
      { label: "Supported languages", value: "25+" },
      { label: "User satisfaction", value: "98% positive" },
    ],
    tools: [
      {
        name: "Smart Document Scanner",
        description:
          "Transform receipts, notes, and PDFs into searchable text with ultra-fast OCR that never leaves your browser.",
        features: [
          "Offline-first processing",
          "Auto language detection",
          "Accessible contrast controls",
        ],
        href: "#",
        category: "Productivity",
      },
      {
        name: "Focus Timer",
        description:
          "Set personalized Pomodoro rhythms, gentle screen-reader-friendly alerts, and adaptive focus routines.",
        features: [
          "Configurable intervals",
          "Ambient sound library",
          "One-click accessibility presets",
        ],
        href: "#",
        category: "Wellness",
      },
      {
        name: "Micro-Copy Generator",
        description:
          "Generate polished, localized micro-copy for buttons, tooltips, and banners with SEO-ready phrasing.",
        features: ["Tone selector", "Brand-safe templates", "Live preview"],
        href: "#",
        category: "Content",
      },
      {
        name: "Privacy-Safe File Converter",
        description:
          "Convert images, audio, and docs in seconds with on-device processing and automatic cleanup.",
        features: ["Multiple formats", "Drag-and-drop", "Automated purge"],
        href: "#",
        category: "Utilities",
      },
    ],
    highlights: {
      title: "Why teams return to DPITA daily",
      description:
        "Every experience is thoughtfully designed for clarity, velocity, and trust. We focus on elegant, intuitive flows that feel familiar to any user while delivering pro-grade results.",
      bullets: [
        {
          title: "Modern aesthetic with vibrant gradients",
          body: "Our minimalist interface uses balanced white space, bold typography, and energetic accent colors that inspire confidence.",
        },
        {
          title: "SEO-obsessed delivery",
          body: "Structured data, performance budgets, and purposeful copywriting help DPITA rank instantly across competitive daily-tool keywords.",
        },
        {
          title: "Seamless on every device",
          body: "Responsive layouts and adaptive touch targets keep experiences effortless across desktop, tablet, and mobile in any orientation.",
        },
      ],
    },
    accessibility: {
      title: "Inclusive by default",
      description:
        "DPITA removes friction for every person. Keyboard power users, screen reader champions, and casual tappers all receive the same respectful experience.",
      points: [
        {
          title: "WCAG 2.2 AA alignment",
          body: "Color contrast, focus indicators, and motion controls are built into every component.",
        },
        {
          title: "Assistive technology ready",
          body: "ARIA labels, semantic landmarks, and skip links guarantee straightforward navigation.",
        },
        {
          title: "Localized nuance",
          body: "Language switching adjusts currency, tone, and formatting to feel instantly native.",
        },
      ],
    },
    privacy: {
      title: "Privacy-first architecture",
      description:
        "We never store personal data, analytics, or files. Everything processes securely within your session and leaves zero residue behind.",
      bullets: [
        "Transparent tool-by-tool security summaries",
        "Zero third-party tracking pixels",
        "Optional offline-only mode for sensitive tasks",
      ],
      cta: "Read the human-readable privacy brief",
    },
    testimonials: [
      {
        quote:
          "DPITA is the only toolkit our design team trusts for quick wins. It’s blazingly fast and on brand every single time.",
        author: "Avery Richardson",
        role: "Head of Product Design, Luma Labs",
      },
      {
        quote:
          "Switching languages on the fly while keeping accessibility intact is magic. Our global support team lives inside DPITA now.",
        author: "Lucía Martínez",
        role: "Director of Customer Experience, Nova Support",
      },
    ],
    faq: [
      {
        question: "How does DPITA stay free without collecting data?",
        answer:
          "We invest in efficient edge-based processing, lightweight infrastructure, and thoughtful engineering. Partnerships fund roadmap growth—not your data.",
      },
      {
        question: "Can I customize the toolkit for my region?",
        answer:
          "Absolutely. Language switching rewrites interface copy, date formats, and recommended tools to reflect local preferences within milliseconds.",
      },
      {
        question: "What makes DPITA so fast?",
        answer:
          "We budget every interaction to load under two seconds. Static generation, CDN edge caching, and zero third-party scripts keep performance predictable.",
      },
    ],
    seo: {
      title: "DPITA • Daily Productivity Toolkit & Accessibility Hub",
      description:
        "DPITA delivers sleek, privacy-first productivity tools, instant multilingual workflows, and inclusive accessibility in a single lightning-fast hub.",
      keywords: [
        "daily productivity tools",
        "privacy first toolkit",
        "multilingual productivity hub",
        "accessible online tools",
        "fast web utilities",
        "dpita",
      ],
    },
    footer: {
      statement: "Crafted for everyday momentum — optimized for trust, speed, and clarity.",
      rights: "© DPITA. Built with respect for your privacy and your time.",
      accessibility: "Need adjustments? Switch language, contrast, or motion preferences anytime.",
    },
  },
  es: {
    tagline: "Infraestructura diaria de productividad. Totalmente accesible. Completamente tuya.",
    hero: {
      title: "dpita.com es tu kit digital esencial para ganar cada día.",
      subtitle:
        "Activa herramientas privadas, flujos ultrarrápidos y experiencias multilingües en menos de dos segundos. Sin registros, solo resultados confiables.",
      primaryCta: "Explorar el Kit",
      secondaryCta: "Ver Compromiso de Accesibilidad",
      banner: "Acceso inmediato • Gratis para siempre • Sin retención de datos",
    },
    navigation: [
      { label: "Kit", href: "#toolkit" },
      { label: "Destacados", href: "#highlights" },
      { label: "Privacidad", href: "#privacy" },
      { label: "Testimonios", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
    ],
    stats: [
      { label: "Tiempo medio de carga", value: "1,4 segundos" },
      { label: "Idiomas disponibles", value: "25+" },
      { label: "Satisfacción", value: "98% positiva" },
    ],
    tools: [
      {
        name: "Escáner Inteligente de Documentos",
        description:
          "Convierte recibos, notas y PDFs en texto buscable con OCR ultrarrápido que nunca sale de tu navegador.",
        features: [
          "Procesamiento sin conexión",
          "Detección automática de idioma",
          "Controles de contraste accesibles",
        ],
        href: "#",
        category: "Productividad",
      },
      {
        name: "Temporizador de Enfoque",
        description:
          "Configura ritmos Pomodoro personalizados, alertas para lectores de pantalla y rutinas de concentración adaptativas.",
        features: [
          "Intervalos configurables",
          "Biblioteca de sonidos ambientales",
          "Ajustes accesibles con un clic",
        ],
        href: "#",
        category: "Bienestar",
      },
      {
        name: "Generador de Microcopy",
        description:
          "Genera microtextos localizados para botones, tooltips y banners con redacción optimizada para SEO.",
        features: [
          "Selector de tono",
          "Plantillas alineadas con tu marca",
          "Vista previa instantánea",
        ],
        href: "#",
        category: "Contenido",
      },
      {
        name: "Convertidor Seguro de Archivos",
        description:
          "Convierte imágenes, audio y documentos en segundos con procesamiento local y limpieza automática.",
        features: ["Múltiples formatos", "Arrastrar y soltar", "Purgado automático"],
        href: "#",
        category: "Utilidades",
      },
    ],
    highlights: {
      title: "Por qué los equipos vuelven a DPITA cada día",
      description:
        "Cada experiencia está diseñada para ofrecer claridad, velocidad y confianza. Flujos elegantes e intuitivos que se sienten familiares y entregan resultados profesionales.",
      bullets: [
        {
          title: "Estética moderna con gradientes vibrantes",
          body: "Interfaz minimalista con espacios equilibrados, tipografía sólida y colores energéticos que inspiran confianza.",
        },
        {
          title: "Entrega obsesiva por el SEO",
          body: "Datos estructurados, presupuestos de rendimiento y textos intencionados ayudan a DPITA a posicionarse en palabras clave competitivas.",
        },
        {
          title: "Perfecto en cada dispositivo",
          body: "Diseños adaptables y objetivos de toque ajustados mantienen la experiencia fluida en escritorio, tableta y móvil.",
        },
      ],
    },
    accessibility: {
      title: "Inclusivo por defecto",
      description:
        "DPITA elimina la fricción para todas las personas. Usuarios de teclado, lector de pantalla y gestos disfrutan la misma experiencia respetuosa.",
      points: [
        {
          title: "Alineado a WCAG 2.2 AA",
          body: "Contraste de color, indicadores de foco y controles de movimiento están integrados en cada componente.",
        },
        {
          title: "Listo para tecnologías de apoyo",
          body: "Etiquetas ARIA, secciones semánticas y enlaces de salto garantizan navegación directa.",
        },
        {
          title: "Matiz local",
          body: "El cambio de idioma ajusta moneda, tono y formatos para sentirse nativo al instante.",
        },
      ],
    },
    privacy: {
      title: "Arquitectura centrada en la privacidad",
      description:
        "Nunca almacenamos datos personales, analíticas ni archivos. Todo se procesa de forma segura en tu sesión y desaparece al cerrar.",
      bullets: [
        "Resumen transparente de seguridad por herramienta",
        "Cero rastreadores de terceros",
        "Modo opcional sin conexión para tareas sensibles",
      ],
      cta: "Leer el resumen de privacidad en lenguaje claro",
    },
    testimonials: [
      {
        quote:
          "DPITA es el único kit que nuestro equipo de diseño usa para soluciones rápidas. Es rapidísimo y siempre respeta la marca.",
        author: "Avery Richardson",
        role: "Líder de Diseño de Producto, Luma Labs",
      },
      {
        quote:
          "Cambiar de idioma al instante y mantener la accesibilidad es mágico. Nuestro equipo global de soporte vive en DPITA.",
        author: "Lucía Martínez",
        role: "Directora de Experiencia del Cliente, Nova Support",
      },
    ],
    faq: [
      {
        question: "¿Cómo se mantiene gratuito DPITA sin recolectar datos?",
        answer:
          "Invertimos en procesamiento eficiente en el borde, infraestructura ligera e ingeniería cuidada. Las alianzas financian el crecimiento, nunca tus datos.",
      },
      {
        question: "¿Puedo personalizar el kit para mi región?",
        answer:
          "Sí. El cambio de idioma adapta textos, formatos de fecha y herramientas recomendadas para reflejar preferencias locales en milisegundos.",
      },
      {
        question: "¿Qué hace que DPITA sea tan rápido?",
        answer:
          "Controlamos cada interacción para cargar en menos de dos segundos. Generación estática, caché perimetral y cero scripts de terceros mantienen el rendimiento.",
      },
    ],
    seo: {
      title: "DPITA • Kit Diario de Productividad y Centro Accesible",
      description:
        "DPITA ofrece herramientas de productividad privadas, flujos multilingües y accesibilidad inclusiva en un centro ultrarrápido.",
      keywords: [
        "herramientas de productividad",
        "kit digital privado",
        "productividad multilingüe",
        "herramientas accesibles en línea",
        "utilidades web rápidas",
        "dpita",
      ],
    },
    footer: {
      statement: "Creado para tu impulso diario — optimizado para confianza, velocidad y claridad.",
      rights: "© DPITA. Construido respetando tu privacidad y tu tiempo.",
      accessibility: "¿Necesitas ajustes? Cambia idioma, contraste o movimiento cuando quieras.",
    },
  },
  fr: {
    tagline: "Infrastructure quotidienne de productivité. Totalement accessible. Entièrement à vous.",
    hero: {
      title: "dpita.com est votre trousse digitale essentielle pour réussir chaque jour.",
      subtitle:
        "Déployez des outils privés, des flux ultra-rapides et des expériences multilingues en moins de deux secondes. Sans inscription, uniquement des résultats fiables.",
      primaryCta: "Découvrir la Trousse",
      secondaryCta: "Voir l’Engagement Accessibilité",
      banner: "Accès instantané • Gratuit pour toujours • Aucune donnée conservée",
    },
    navigation: [
      { label: "Trousse", href: "#toolkit" },
      { label: "Points forts", href: "#highlights" },
      { label: "Confidentialité", href: "#privacy" },
      { label: "Témoignages", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
    ],
    stats: [
      { label: "Temps de chargement moyen", value: "1,4 seconde" },
      { label: "Langues prises en charge", value: "25+" },
      { label: "Satisfaction", value: "98% positive" },
    ],
    tools: [
      {
        name: "Scanner Intelligent de Documents",
        description:
          "Transformez reçus, notes et PDF en texte indexable avec un OCR ultra-rapide qui reste dans votre navigateur.",
        features: [
          "Traitement hors ligne",
          "Détection automatique de la langue",
          "Contrôles de contraste accessibles",
        ],
        href: "#",
        category: "Productivité",
      },
      {
        name: "Minuteur de Concentration",
        description:
          "Définissez des rythmes Pomodoro personnalisés, des alertes compatibles lecteur d’écran et des routines adaptatives.",
        features: [
          "Intervalles configurables",
          "Bibliothèque de sons",
          "Préréglages d’accessibilité",
        ],
        href: "#",
        category: "Bien-être",
      },
      {
        name: "Générateur de Microtextes",
        description:
          "Créez des microtextes localisés pour boutons, info-bulles et bannières avec une rédaction optimisée SEO.",
        features: [
          "Sélecteur de ton",
          "Modèles conformes à votre marque",
          "Aperçu instantané",
        ],
        href: "#",
        category: "Contenu",
      },
      {
        name: "Convertisseur de Fichiers Sécurisé",
        description:
          "Convertissez images, audio et documents en quelques secondes avec un traitement local et une suppression automatique.",
        features: [
          "Formats multiples",
          "Glisser-déposer",
          "Nettoyage automatisé",
        ],
        href: "#",
        category: "Utilitaires",
      },
    ],
    highlights: {
      title: "Pourquoi les équipes reviennent chaque jour à DPITA",
      description:
        "Chaque expérience est conçue pour offrir clarté, rapidité et confiance. Des parcours élégants et intuitifs qui paraissent familiers tout en livrant des résultats professionnels.",
      bullets: [
        {
          title: "Esthétique moderne et couleurs vibrantes",
          body: "Interface minimaliste, typographie affirmée et couleurs dynamiques inspirant la confiance.",
        },
        {
          title: "SEO travaillé au millimètre",
          body: "Données structurées, budgets de performance et rédaction stratégique assurent un positionnement instantané.",
        },
        {
          title: "Fluide sur chaque appareil",
          body: "Mise en page responsive et cibles tactiles adaptées pour une expérience sans effort partout.",
        },
      ],
    },
    accessibility: {
      title: "Inclusif par nature",
      description:
        "DPITA supprime la friction pour chacun. Claviers, lecteurs d’écran et gestes profitent de la même expérience attentive.",
      points: [
        {
          title: "Conforme à WCAG 2.2 AA",
          body: "Contraste élevé, indicateurs de focus et contrôle des animations intégrés à chaque composant.",
        },
        {
          title: "Prêt pour les technologies d’assistance",
          body: "Repères sémantiques, labels ARIA et liens d’évitement simplifient la navigation.",
        },
        {
          title: "Nuance culturelle",
          body: "Le changement de langue ajuste monnaie, ton et formats pour être immédiatement naturel.",
        },
      ],
    },
    privacy: {
      title: "Confidentialité avant tout",
      description:
        "Nous ne stockons jamais de données personnelles, d’analyses ou de fichiers. Tout est traité de manière sécurisée dans votre session puis effacé.",
      bullets: [
        "Synthèse de sécurité claire pour chaque outil",
        "Aucun traceur externe",
        "Mode hors ligne optionnel pour les tâches sensibles",
      ],
      cta: "Consulter la note de confidentialité simplifiée",
    },
    testimonials: [
      {
        quote:
          "DPITA est la seule trousse que notre équipe design utilise pour des solutions rapides. C’est fulgurant et toujours fidèle à la marque.",
        author: "Avery Richardson",
        role: "Directeur Design Produit, Luma Labs",
      },
      {
        quote:
          "Changer de langue instantanément tout en conservant l’accessibilité relève du génie. Notre équipe mondiale de support en dépend.",
        author: "Lucía Martínez",
        role: "Directrice Expérience Client, Nova Support",
      },
    ],
    faq: [
      {
        question: "Comment DPITA reste gratuit sans collecter de données ?",
        answer:
          "Nous investissons dans le traitement en périphérie, une infrastructure légère et une ingénierie pensée. Les partenariats financent l’évolution, pas vos données.",
      },
      {
        question: "Puis-je personnaliser la trousse pour ma région ?",
        answer:
          "Bien sûr. Le changement de langue ajuste le contenu, les formats de date et les outils recommandés pour correspondre à votre contexte local en millisecondes.",
      },
      {
        question: "Qu’est-ce qui rend DPITA si rapide ?",
        answer:
          "Chaque interaction est optimisée pour charger en moins de deux secondes grâce au rendu statique, au cache CDN et à l’absence de scripts tiers.",
      },
    ],
    seo: {
      title: "DPITA • Trousse Quotidienne de Productivité et Hub Accessible",
      description:
        "DPITA rassemble des outils de productivité privés, des flux multilingues et une accessibilité inclusive dans un hub ultra-rapide.",
      keywords: [
        "outils de productivité quotidiens",
        "kit numérique confidentiel",
        "productivité multilingue",
        "outils en ligne accessibles",
        "utilitaires web rapides",
        "dpita",
      ],
    },
    footer: {
      statement: "Pensé pour votre élan quotidien — optimisé pour la confiance, la vitesse et la clarté.",
      rights: "© DPITA. Construit dans le respect de votre vie privée et de votre temps.",
      accessibility: "Besoin d’ajustements ? Changez la langue, le contraste ou l’animation à tout moment.",
    },
  },
};

const languageOptions: { code: LanguageKey; label: string; locale: string }[] = [
  { code: "en", label: "English", locale: "en-US" },
  { code: "es", label: "Español", locale: "es-ES" },
  { code: "fr", label: "Français", locale: "fr-FR" },
];

const isLanguageKey = (value: string | null | undefined): value is LanguageKey =>
  value !== undefined && value !== null && value in translations;

type LandingPageProps = {
  initialLanguage: LanguageKey;
};

export default function LandingPage({ initialLanguage }: LandingPageProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [language, setLanguage] = useState<LanguageKey>(() => {
    if (typeof window !== "undefined") {
      const stored = window.localStorage.getItem("dpita-language");
      if (isLanguageKey(stored)) {
        return stored;
      }
    }
    return initialLanguage;
  });
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    window.localStorage.setItem("dpita-language", language);

    const currentLang = searchParams.get("lang");
    if (currentLang !== language) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("lang", language);
      const nextUrl = `?${params.toString()}`;
      startTransition(() => {
        router.replace(nextUrl, { scroll: false });
      });
    }
  }, [language, router, searchParams, startTransition]);

  const content = translations[language];

  const localizedDate = useMemo(() => {
    return new Intl.DateTimeFormat(
      languageOptions.find((option) => option.code === language)?.locale ?? "en-US",
      {
        dateStyle: "full",
        timeStyle: "short",
      },
    ).format(new Date());
  }, [language]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <span className="pointer-events-none absolute inset-0 block bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(217,70,239,0.16),_transparent_50%)]" />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-10 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-slate-900"
      >
        Skip to main content
      </a>
      <header
        className="relative border-b border-white/10 backdrop-blur"
        aria-label="Primary"
      >
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-6">
          <div>
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300 px-3 py-1 text-sm font-semibold text-slate-900 shadow-lg shadow-cyan-400/30">
                DPITA
              </span>
              <p className="text-sm text-slate-300 sm:text-base">{content.tagline}</p>
            </div>
          </div>
          <nav className="order-last flex w-full flex-wrap items-center gap-4 text-sm font-medium text-slate-200 md:order-none md:w-auto md:gap-6 md:text-base">
            {content.navigation.map((item) => (
              <Link
                key={`${language}-${item.href}`}
                href={item.href}
                className="rounded-full px-3 py-2 transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-1 items-center justify-end gap-4 text-sm">
          <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 transition focus-within:border-sky-300 focus-within:bg-white/10">
            <label
              htmlFor="language-select"
              className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-300"
            >
                <Languages className="h-4 w-4" aria-hidden />
                {language === "en"
                  ? "Language"
                  : language === "es"
                    ? "Idioma"
                    : "Langue"}
              </label>
              <select
                id="language-select"
                value={language}
                onChange={(event) => setLanguage(event.target.value as LanguageKey)}
                className="bg-transparent text-sm font-medium text-white outline-none"
                aria-label="Select site language"
              >
                {languageOptions.map((option) => (
                  <option key={option.code} value={option.code} className="bg-slate-900">
                    {option.label}
                  </option>
                ))}
              </select>
              <span aria-live="polite" className="sr-only">
                {isPending
                  ? language === "en"
                    ? "Updating language preference"
                    : language === "es"
                      ? "Actualizando preferencia de idioma"
                      : "Mise à jour de la langue"
                  : ""}
              </span>
            </div>
            <span className="hidden rounded-full border border-emerald-300/40 bg-emerald-400/10 px-3 py-2 text-xs font-semibold text-emerald-200 sm:inline">
              {localizedDate}
            </span>
          </div>
        </div>
      </header>

      <main id="main-content" className="relative">
        <section className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 md:flex-row md:gap-12 md:py-24">
          <div className="flex-1">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-200">
              <Zap className="h-4 w-4 text-sky-300" aria-hidden />
              {content.hero.banner}
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
              {content.hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-200 md:text-xl">
              {content.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#toolkit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:scale-[1.01] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200"
              >
                {content.hero.primaryCta}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <a
                href="#privacy"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-200"
              >
                {content.hero.secondaryCta}
              </a>
            </div>
            <dl className="mt-10 grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-100 sm:grid-cols-3">
              {content.stats.map((stat) => (
                <div key={`${language}-${stat.label}`}>
                  <dt className="text-xs uppercase tracking-wide text-slate-400">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 text-lg font-semibold text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <aside className="flex w-full flex-1 flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-slate-900/40">
            <div className="space-y-4">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-300">
                Performance & Trust
              </h2>
              <p className="text-lg leading-relaxed text-slate-200">
                DPITA runs on static-first architecture with precise performance budgets and
                no third-party scripts. Accessibility audits and privacy reviews ship with
                every release.
              </p>
            </div>
            <div className="grid gap-4">
              <FeatureCallout
                title="Sub-2 second budgets"
                description="Edge caching, image optimization, and prefetching keep every tool instantly available."
                icon={<Zap className="h-5 w-5 text-sky-300" aria-hidden />}
              />
              <FeatureCallout
                title="Structured for discovery"
                description="JSON-LD, descriptive meta tags, and purposeful keywords elevate organic reach."
                icon={<Search className="h-5 w-5 text-emerald-300" aria-hidden />}
              />
              <FeatureCallout
                title="Transparent privacy guardrails"
                description="Audit logs, sandboxed runtimes, and automatic deletion give you total control."
                icon={<ShieldCheck className="h-5 w-5 text-purple-300" aria-hidden />}
              />
            </div>
          </aside>
        </section>

        <section
          id="toolkit"
          className="mx-auto max-w-6xl px-6 pb-24 md:pb-32"
          aria-labelledby="toolkit-heading"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 id="toolkit-heading" className="text-3xl font-semibold text-white md:text-4xl">
                Toolkit
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
                {language === "en"
                  ? "Curated mini-apps cover daily essentials—optimized for clarity, security, and international teams."
                  : language === "es"
                    ? "Miniaplicaciones seleccionadas cubren lo esencial diario, optimizadas para claridad, seguridad y equipos globales."
                    : "Des mini-apps sélectionnées couvrent vos essentiels quotidiens avec clarté, sécurité et équipes internationales en tête."}
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
              <Globe className="h-5 w-5 text-cyan-300" aria-hidden />
              {language === "en"
                ? "Localized presets adapt to your market instantly."
                : language === "es"
                  ? "Los ajustes localizados se adaptan a tu mercado al instante."
                  : "Les préréglages localisés s’adaptent immédiatement à votre marché."}
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {content.tools.map((tool) => (
              <article
                key={`${language}-${tool.name}`}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-slate-900/60 to-slate-950 p-8 shadow-lg shadow-slate-900/40 transition hover:-translate-y-1 hover:border-white/30"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-semibold uppercase tracking-wide text-cyan-200">
                    {tool.category}
                  </span>
                  <span
                    aria-hidden
                    className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200"
                  >
                    {language === "en"
                      ? "Instant Launch"
                      : language === "es"
                        ? "Inicio inmediato"
                        : "Lancement instantané"}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-white">{tool.name}</h3>
                <p className="mt-3 text-base leading-relaxed text-slate-300">
                  {tool.description}
                </p>
                <ul className="mt-6 grid gap-2 text-sm text-slate-200">
                  {tool.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" aria-hidden />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={tool.href}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-sky-200 transition group-hover:text-sky-100"
                >
                  {language === "en"
                    ? "Preview capability"
                    : language === "es"
                      ? "Previsualizar capacidad"
                      : "Prévisualiser la capacité"}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section
          id="highlights"
          className="relative isolate mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-6 py-20 md:px-10 md:py-24"
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.2),_transparent_55%)] opacity-70" />
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              {content.highlights.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-200">
              {content.highlights.description}
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {content.highlights.bullets.map((bullet) => (
              <div
                key={`${language}-${bullet.title}`}
                className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 text-left"
              >
                <Sparkles className="h-6 w-6 text-cyan-200" aria-hidden />
                <h3 className="mt-4 text-lg font-semibold text-white">{bullet.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{bullet.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="privacy"
          className="mx-auto mt-24 max-w-6xl px-6 md:mt-32"
          aria-labelledby="privacy-heading"
        >
          <div className="grid gap-8 md:grid-cols-[1.3fr,1fr] md:items-start">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-lg shadow-slate-900/40">
              <div className="flex items-center gap-3">
                <Lock className="h-6 w-6 text-emerald-300" aria-hidden />
                <h2 id="privacy-heading" className="text-3xl font-semibold text-white">
                  {content.privacy.title}
                </h2>
              </div>
              <p className="mt-6 text-base leading-relaxed text-slate-200">
                {content.privacy.description}
              </p>
              <ul className="mt-8 grid gap-3 text-sm text-slate-200">
                {content.privacy.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <ShieldCheck className="mt-0.5 h-4 w-4 text-sky-300" aria-hidden />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-200"
              >
                {content.privacy.cta}
              </a>
            </div>
            <div className="space-y-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-slate-900/70 to-slate-950 p-10">
              <h3 className="text-xl font-semibold text-white">
                {content.accessibility.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-300">
                {content.accessibility.description}
              </p>
              <div className="grid gap-4">
                {content.accessibility.points.map((point) => (
                  <div
                    key={`${language}-${point.title}`}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <div className="flex items-center gap-3">
                      <Accessibility className="h-5 w-5 text-emerald-300" aria-hidden />
                      <h4 className="text-base font-semibold text-white">{point.title}</h4>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                      {point.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="testimonials"
          className="mx-auto mt-24 max-w-6xl px-6 md:mt-32"
          aria-labelledby="testimonials-heading"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2
                id="testimonials-heading"
                className="text-3xl font-semibold text-white md:text-4xl"
              >
                Testimonials
              </h2>
              <p className="mt-4 max-w-xl text-base text-slate-300">
                {language === "en"
                  ? "Loved by teams that value velocity without sacrificing trust."
                  : language === "es"
                    ? "Equipos que buscan velocidad sin sacrificar confianza lo eligen a diario."
                    : "Adopté par les équipes qui veulent la vitesse sans compromettre la confiance."}
              </p>
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
              {language === "en"
                ? "Global NPS 74 • Verified community-led roadmap"
                : language === "es"
                  ? "NPS global 74 • Hoja de ruta cocreada con la comunidad"
                  : "NPS mondial 74 • Feuille de route co-créée avec la communauté"}
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {content.testimonials.map((testimonial) => (
              <figure
                key={`${language}-${testimonial.author}`}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-slate-900/40"
              >
                <blockquote className="text-lg leading-relaxed text-slate-200">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-6 text-sm font-medium text-slate-100">
                  <span className="block text-base text-white">{testimonial.author}</span>
                  <span className="text-xs uppercase tracking-wide text-slate-400">
                    {testimonial.role}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section
          id="faq"
          className="mx-auto mt-24 max-w-5xl px-6 pb-24 md:mt-32 md:pb-40"
          aria-labelledby="faq-heading"
        >
          <h2 id="faq-heading" className="text-3xl font-semibold text-white md:text-4xl">
            {language === "en"
              ? "Frequently asked"
              : language === "es"
                ? "Preguntas frecuentes"
                : "Questions fréquentes"}
          </h2>
          <div className="mt-8 space-y-4">
            {content.faq.map((item) => (
              <details
                key={`${language}-${item.question}`}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-left text-base font-semibold text-white">
                  <span>{item.question}</span>
                  <span
                    aria-hidden
                    className="rounded-full border border-white/20 px-3 py-1 text-xs text-slate-300 group-open:bg-white/10"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80 py-10 text-sm text-slate-300">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-base font-semibold text-white">{content.footer.statement}</p>
            <p className="mt-2 text-xs uppercase tracking-wide text-slate-500">
              {content.footer.accessibility}
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-emerald-300" aria-hidden />
              <span>ISO 27001-ready controls</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-sky-300" aria-hidden />
              <span>Privacy Impact Reports</span>
            </div>
          </div>
        </div>
        <p className="mx-auto mt-6 max-w-6xl px-6 text-xs text-slate-500">{content.footer.rights}</p>
      </footer>
    </div>
  );
}

type FeatureCalloutProps = {
  title: string;
  description: string;
  icon: ReactNode;
};

function FeatureCallout({ title, description, icon }: FeatureCalloutProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-center gap-3 text-sm font-semibold text-white">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
          {icon}
        </span>
        <span>{title}</span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">{description}</p>
    </div>
  );
}
