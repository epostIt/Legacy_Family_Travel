# Legacy Family Travel Homepage

Polished, responsive marketing homepage for a family travel agency built with Next.js App Router, TypeScript, and Tailwind CSS.

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

3. Open http://localhost:3000

## Email inquiries setup

To send form inquiries to email, create `.env.local` with:

```bash
INQUIRY_TO_EMAIL=you@yourdomain.com
INQUIRY_FROM_EMAIL=inquiries@yourdomain.com
RESEND_API_KEY=re_xxxxxxxxx
```

Notes:
- `INQUIRY_FROM_EMAIL` must be a sender verified in Resend.
- Both forms (contact section and modal) post to `/api/inquiries`.

## Project structure

- `app/page.tsx`: Homepage composition
- `app/api/inquiries/route.ts`: Server endpoint that sends inquiry emails
- `components/*`: Reusable UI sections/components
- `lib/data.ts`: Typed local mock data for destinations/testimonials
- `app/globals.css`: Global styles + color tokens
- `tailwind.config.ts`: Tailwind theme extension for brand colors/fonts
