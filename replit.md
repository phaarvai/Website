# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **Database**: PostgreSQL + Drizzle ORM (schema in `lib/db`)
- **Validation**: Zod

## Structure

```text
artifacts-monorepo/
├── artifacts/              # Deployable applications
│   ├── phaarvai/           # Next.js 15 App Router website
│   └── mockup-sandbox/     # Vite component preview server (canvas)
├── lib/                    # Shared libraries
│   ├── db/                 # Drizzle ORM schema + DB connection
│   ├── api-spec/           # OpenAPI spec (legacy, unused by phaarvai)
│   ├── api-client-react/   # Generated React Query hooks (legacy)
│   └── api-zod/            # Generated Zod schemas (legacy)
├── scripts/                # Utility scripts
├── pnpm-workspace.yaml     # pnpm workspace (artifacts/*, lib/*, scripts)
├── tsconfig.base.json      # Shared TS options (composite, bundler resolution, es2022)
├── tsconfig.json           # Root TS project references
└── package.json            # Root package with hoisted devDeps
```

## TypeScript & Composite Projects

Every package extends `tsconfig.base.json` which sets `composite: true`. The root `tsconfig.json` lists all packages as project references. This means:

- **Always typecheck from the root** — run `pnpm run typecheck` (which runs `tsc --build --emitDeclarationOnly`). This builds the full dependency graph so that cross-package imports resolve correctly.
- **`emitDeclarationOnly`** — we only emit `.d.ts` files during typecheck; actual JS bundling is handled by Next.js / Vite, not `tsc`.
- **Project references** — when package A depends on package B, A's `tsconfig.json` must list B in its `references` array.

## Root Scripts

- `pnpm run build` — runs `typecheck` first, then recursively runs `build` in all packages
- `pnpm run typecheck` — runs `tsc --build --emitDeclarationOnly` using project references

## Packages

### `artifacts/phaarvai` (`@workspace/phaarvai`)

Production-ready institutional website for **PHAARVAI** — an AI and digital systems company serving governments, infrastructure operators, energy companies, and public-impact foundations.

- **Framework**: Next.js 15 App Router + React 19 + TailwindCSS v4 + Framer Motion
- **Preview path**: `/` (root)
- **Design**: Light theme (80% light, 20% dark) — `#F8FAFC` background (`210 40% 98%`), `#0B1F3A` navy foreground (`214 68% 14%`), `#2563EB` blue primary (`221 83% 53%`). Hero and footer use `.hero-gradient` utility class.
- **Pages**: Home, About, Capabilities, Solutions, Sectors, Funding & Partnerships, Insights, Contact
- **Routing**: `app/*/page.tsx` are thin server-component wrappers exporting Next.js `Metadata`; actual page components live in `src/views/`
- **Components**: All components in `src/components/` use `'use client'` if they use hooks, framer-motion, or event handlers
- **Content system**: All copy in `src/content/` files (site.ts, capabilities.ts, solutions.ts, sectors.ts, insights.ts). Rewrite content files to update copy — pages consume them directly.
- **API routes**: `/api/contact` (POST, Zod-validated contact form) and `/api/healthz` (GET) — Next.js Route Handlers in `app/api/`
- **Contact form fields**: name, organization, email, country, orgType, areaOfInterest, message
- **Key components**: Navbar (transparent on dark hero, white bg on scroll/other pages), HeroSection (dark gradient, white text), CTASection (dark gradient), Footer (dark navy), Card, SectionIntro
- **CSS**: `app/globals.css` — uses `@import "tailwindcss"` with `@tailwindcss/postcss` PostCSS plugin
- **Zod import**: Standard `import { z } from "zod"` (not `zod/v4`)
- **Dev command**: `pnpm --filter @workspace/phaarvai run dev`

### `lib/db` (`@workspace/db`)

Database layer using Drizzle ORM with PostgreSQL. Exports a Drizzle client instance and schema models.

- `src/index.ts` — creates a `Pool` + Drizzle instance, exports schema
- `src/schema/index.ts` — barrel re-export of all models
- `drizzle.config.ts` — Drizzle Kit config (requires `DATABASE_URL`, automatically provided by Replit)

Production migrations are handled by Replit when publishing. In development, use `pnpm --filter @workspace/db run push`.

### `scripts` (`@workspace/scripts`)

Utility scripts package. Each script is a `.ts` file in `src/` with a corresponding npm script in `package.json`. Run scripts via `pnpm --filter @workspace/scripts run <script>`.
