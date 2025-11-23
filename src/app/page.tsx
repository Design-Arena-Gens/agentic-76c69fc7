import LandingPage from "@/components/landing-page";
import { Suspense } from "react";

const supportedLanguages = ["en", "es", "fr"] as const;

type SupportedLanguage = (typeof supportedLanguages)[number];

type PageProps = {
  searchParams?: {
    lang?: string;
  };
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "DPITA",
  url: "https://dpita.com",
  description:
    "DPITA is a sleek, privacy-first hub of multilingual daily productivity tools built for lightning-fast results.",
  inLanguage: ["en", "es", "fr"],
  potentialAction: [
    {
      "@type": "SearchAction",
      target: "https://dpita.com/?tool={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  ],
  publisher: {
    "@type": "Organization",
    name: "DPITA",
    url: "https://dpita.com",
    logo: {
      "@type": "ImageObject",
      url: "https://dpita.com/icon.svg",
    },
  },
};

export default function Home({ searchParams }: PageProps) {
  const initialLanguage = determineLanguage(searchParams?.lang);

  return (
    <>
      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
            <span className="rounded-full border border-white/10 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-300">
              Loading DPITA…
            </span>
          </div>
        }
      >
        <LandingPage initialLanguage={initialLanguage} />
      </Suspense>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

function determineLanguage(candidate?: string): SupportedLanguage {
  if (candidate && supportedLanguages.includes(candidate as SupportedLanguage)) {
    return candidate as SupportedLanguage;
  }

  return "en";
}
