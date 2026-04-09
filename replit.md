# PHAARVAI

## Overview

Standalone Next.js 15 application — no monorepo, no workspace configuration. Deployable directly on Vercel with `npm install` + `npm run build`.

## Stack

- **Framework**: Next.js 15 App Router + React 19
- **Styling**: TailwindCSS v4 (`@tailwindcss/postcss`) + tw-animate-css
- **Animation**: Framer Motion 12
- **UI primitives**: Radix UI + shadcn/ui (New York style)
- **Data fetching**: TanStack Query
- **Forms**: React Hook Form + Zod validation
- **Node.js version**: 24
- **Package manager**: npm (standalone, no pnpm workspace)
- **TypeScript version**: 5.9

## Project Structure

```text
/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout (Navbar + Footer + Providers)
│   ├── page.tsx            # Home page (imports from src/views/home.tsx)
│   ├── about/page.tsx      # About page
│   ├── capabilities/page.tsx
│   ├── solutions/page.tsx
│   ├── sectors/page.tsx
│   ├── funding-partnerships/page.tsx
│   ├── insights/page.tsx
│   ├── contact/page.tsx
│   ├── globals.css         # Global styles + Tailwind imports + utilities
│   └── api/
│       ├── contact/route.ts  # POST contact form (Zod-validated)
│       └── healthz/route.ts  # GET health check
├── src/
│   ├── views/              # Full page components (one per route)
│   ├── components/         # Shared UI components
│   │   ├── Navbar.tsx      # Transparent on hero, white bg on scroll/light pages
│   │   ├── HeroSection.tsx # Dark gradient hero with animated cards
│   │   ├── CTASection.tsx  # Dark gradient call-to-action
│   │   ├── Footer.tsx      # Dark navy footer
│   │   ├── Card.tsx        # Animated fade-in card
│   │   ├── SectionIntro.tsx
│   │   ├── Providers.tsx   # TanStack Query + Theme providers
│   │   └── ui/             # shadcn/ui primitives
│   ├── content/            # All site copy (edit to update text)
│   │   ├── site.ts         # Homepage, CTA, company info
│   │   ├── capabilities.ts
│   │   ├── solutions.ts
│   │   ├── sectors.ts
│   │   └── insights.ts
│   ├── hooks/              # Custom React hooks
│   └── lib/
│       └── utils.ts        # cn() utility (clsx + tailwind-merge)
├── public/                 # Static assets (favicon, og image)
├── package.json            # npm scripts: dev, build, start, typecheck
├── next.config.ts          # Next.js config (image domains, dev origins)
├── tsconfig.json           # TypeScript config (@/* → src/*)
└── postcss.config.mjs      # PostCSS with @tailwindcss/postcss
```

## Design System

- **Light body**: `#F8FAFC` background, `#0B1F3A` foreground
- **Primary**: `#2563EB` blue (`221 83% 53%`)
- **Hero/CTA/Footer**: `.hero-gradient` utility — dark navy gradient `#08162B → #0D2144 → #112B58`
- **Glass cards**: `.glass-card` utility in globals.css
- **Animations**: Framer Motion `whileInView` + CSS marquee + float/pulse-glow keyframes

## Pages

Home, About, Capabilities, Solutions, Sectors, Funding & Partnerships, Insights, Contact (8 pages)

## Key Conventions

- **Routing**: `app/*/page.tsx` are thin server-component wrappers that export `Metadata` and render from `src/views/*`
- **Client components**: All views and components using hooks/animation marked with `'use client'`
- **Content**: Edit files in `src/content/` to update all copy — pages consume them directly
- **Easing**: Cubic bezier arrays must be cast as `[number, number, number, number]` tuples for React 19 + Framer Motion type compatibility
- **Images**: Unsplash images use `?auto=format&fit=crop&w=XXX&q=75`
- **tsconfig exclude**: `artifacts/` and `.next/` excluded to prevent picking up old Express code

## Scripts

```bash
npm install       # Install all dependencies
npm run dev       # Start dev server (binds 0.0.0.0 for Replit)
npm run build     # Production build (Vercel-compatible)
npm run start     # Start production server
npm run typecheck # TypeScript type checking only
```

## Vercel Deployment

No configuration needed. Vercel auto-detects Next.js from root `package.json`. Set no environment variables unless adding a backend service.
