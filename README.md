## DPITA — Daily Productivity Toolkit

DPITA is a sleek, privacy-first digital hub delivering multilingual daily tools with accessibility and lightning-fast performance in mind. The experience highlights hero storytelling, curated toolkit cards, privacy commitments, testimonials, FAQ coverage, and rich SEO metadata.

### Key Capabilities

- Modern hero section with trust-building gradient treatments and performance callouts
- Dynamic toolkit gallery featuring localized descriptions and accessibility-ready interactions
- Multilingual interface (English, Spanish, French) with URL syncing and persisted preferences
- Privacy-first assurances, WCAG-aligned accessibility messaging, testimonials, and FAQ
- Comprehensive SEO support including Open Graph data, JSON-LD structured data, and keyword-rich copy

### Local Development

Install dependencies (already handled by `create-next-app`, but listed for completeness):

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

The site is available at [http://localhost:3000](http://localhost:3000). Edit content primarily in:

- `src/components/landing-page.tsx` — main experience and translations
- `src/app/layout.tsx` — global metadata and SEO settings
- `src/app/page.tsx` — Suspense-wrapped page entry and JSON-LD injection
- `src/app/globals.css` — base styling helpers

### Production Build

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

### Deployment

The project is ready for Vercel production deployment (`vercel deploy --prod`). Ensure the `VERCEL_TOKEN` environment variable is configured before deploying.
