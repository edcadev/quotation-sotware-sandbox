# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 quotation software application using:
- **Next.js 16.0.3** with App Router
- **React 19.2.0** (latest stable)
- **TypeScript 5** with strict mode enabled
- **Tailwind CSS v4** (latest major version with new PostCSS architecture)
- **Prisma ORM 6.19.0** with PostgreSQL
- **React Hook Form 7.66.0** + **Zod 4.1.12** for form validation
- **ESLint 9** with Next.js TypeScript configuration

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm run dev

# Build production bundle
npm run build

# Start production server (must build first)
npm start

# Run linter
npm run lint

# Database commands (Prisma)
npx prisma generate          # Generate Prisma Client after schema changes
npx prisma migrate dev       # Create and apply migrations in development
npx prisma migrate deploy    # Apply migrations in production
npx prisma studio            # Open Prisma Studio GUI at http://localhost:5555
npx prisma db push           # Push schema changes without migrations (dev only)
npx prisma db seed           # Run seed script (if configured)
```

## Architecture

### Project Structure

```
quotation-software/
├── src/                              # Source directory
│   ├── app/                          # Next.js App Router directory
│   │   ├── layout.tsx               # Root layout with font configuration
│   │   ├── page.tsx                 # Home page
│   │   ├── globals.css              # Global styles with Tailwind directives
│   │   ├── api/                     # API routes
│   │   │   └── cotizaciones/        # Quotation API endpoints
│   │   │       ├── route.ts         # GET (list) and POST (create)
│   │   │       └── [id]/route.ts    # GET, PUT, DELETE by ID
│   │   ├── admin/                   # Admin dashboard pages
│   │   ├── cotizacion/              # Public quotation form page
│   │   └── generated/prisma/        # Generated Prisma Client (custom output)
│   ├── components/                   # React components
│   │   └── FormularioCotizacion/    # Multi-step quotation form
│   │       ├── FormularioMultiPaso.tsx  # Main form orchestrator
│   │       ├── schemas.ts           # Zod schemas for form validation
│   │       ├── Paso1Objetivos.tsx - Paso7Presupuesto.tsx
│   │       ├── ResumenFinal.tsx     # Step 8: Review before submit
│   │       └── BarraProgreso.tsx    # Progress indicator
│   └── lib/                          # Utilities and libraries
│       ├── prisma.ts                # Prisma Client singleton
│       └── validations/             # Server-side validation schemas
│           └── cotizacion.ts        # Zod schemas for API validation
├── prisma/                           # Prisma database schema and migrations
│   └── schema.prisma                # Database schema (PostgreSQL)
├── docs/                             # Project documentation
│   ├── API_ENDPOINTS.md             # API endpoint documentation
│   └── preguntas.md                 # Questionnaire structure
├── public/                           # Static assets
├── next.config.ts                    # Next.js configuration
├── tsconfig.json                     # TypeScript configuration
├── eslint.config.mjs                 # ESLint 9 flat config
├── postcss.config.mjs                # PostCSS with Tailwind CSS 4
└── .env                              # Environment variables (not in git)
```

### Database Architecture (Prisma + PostgreSQL)

**Schema Structure**: The database models a 7-step quotation process with a main `Cotizacion` model and 7 related models (one-to-one relationships):

1. **ObjetivosVision** - Project objectives and vision
2. **UsuariosRoles** - Users and roles (with `EscalaUsuarios` enum)
3. **AlcanceFuncionalidades** - Scope and functionalities
4. **RequerimientosTecnicos** - Technical requirements (with `Plataforma` array)
5. **Integraciones** - Integrations and external systems
6. **DisenoUX** - Design and UX requirements
7. **PresupuestoTiempos** - Budget and timeline (with `TipoMoneda` enum)

**Important Database Details**:
- Main model: `Cotizacion` with `EstadoCotizacion` enum (BORRADOR, ENVIADA, EN_REVISION, APROBADA, RECHAZADA, CANCELADA)
- All related models use `onDelete: Cascade` - deleting a cotizacion deletes all related records
- Custom Prisma Client output: `src/app/generated/prisma/` (not default `node_modules/.prisma/client`)
- Always import from: `import { ... } from '@/app/generated/prisma'`
- PostgreSQL-specific features used: `@db.Text`, `@db.Decimal(10, 2)`
- Environment variables required: `DATABASE_URL` and `DIRECT_URL`

**After Schema Changes**:
Always run `npx prisma generate` after modifying `prisma/schema.prisma` to regenerate the client.

### Form Validation Architecture

**Two Parallel Validation Systems** (intentional separation of concerns):

1. **Client-side** (`src/components/FormularioCotizacion/schemas.ts`):
   - React Hook Form + Zod validation
   - 7 step-specific schemas (`paso1Schema` - `paso7Schema`)
   - Validates user input in the multi-step form
   - Different field names than database (e.g., `nombreProyecto`, `tipoSoftware`)

2. **Server-side** (`src/lib/validations/cotizacion.ts`):
   - API endpoint validation
   - Matches Prisma schema exactly
   - Includes nested object schemas for all 7 related models
   - Used in API routes to validate incoming requests

**Important**: These schemas are NOT meant to be unified. The client form collects different information than what's stored in the database. You'll need to map between them when implementing form submission.

### Multi-Step Form Pattern

The quotation form uses React Hook Form's `FormProvider` with step-by-step validation:
- Each step has its own Zod schema
- Validation occurs on "Next" button click via `trigger()`
- Navigation disabled until current step is valid
- Final step (8) shows a summary and submits all data
- Form state managed in a single `FormularioCompleto` object with nested `paso1` - `paso7` properties

### API Architecture

REST endpoints in `src/app/api/cotizaciones/`:
- `GET /api/cotizaciones` - List with pagination, filtering (estado, search), includes all relations
- `POST /api/cotizaciones` - Create with nested relations
- `GET /api/cotizaciones/[id]` - Get single cotizacion
- `PUT /api/cotizaciones/[id]` - Update cotizacion
- `DELETE /api/cotizaciones/[id]` - Delete cotizacion

All endpoints use Zod validation from `src/lib/validations/cotizacion.ts` and return standardized JSON responses.

### Key Configuration Details

**TypeScript (`tsconfig.json`)**:
- Path alias: `@/*` maps to `src/` directory
- Target: ES2017
- Strict mode enabled
- JSX mode: `react-jsx` (React 19 auto-import)

**ESLint (`eslint.config.mjs`)**:
- Uses ESLint 9 flat config format with `defineConfig`
- Includes Next.js core-web-vitals and TypeScript rules
- Ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`

**Next.js**:
- Uses App Router (not Pages Router)
- Font optimization with `next/font` for Geist Sans and Geist Mono
- Image optimization with `next/image`

**Tailwind CSS v4**:
- Configured via PostCSS (`@tailwindcss/postcss`)
- Uses latest v4 architecture (different from v3)
- Dark mode support with `dark:` utility classes

## Development Guidelines

### Working with Prisma

- Import Prisma Client from `@/app/generated/prisma` (not `@prisma/client`)
- Use the singleton instance from `@/lib/prisma`
- After schema changes: `npx prisma generate` then restart dev server
- For database exploration: `npx prisma studio`

### App Router Conventions

- Place pages in `src/app/` directory as `page.tsx`
- Layouts cascade from root `layout.tsx`
- All components are React Server Components by default
- Use `"use client"` directive for client components (required for forms, hooks, interactivity)
- Route segments create nested layouts automatically

### Form Development

- Use React Hook Form with Zod resolver for client-side forms
- Create step-specific schemas for multi-step forms
- Validate on step navigation, not on every keystroke (mode: "onChange" is set but validation is manual)
- Server-side validation must use schemas from `@/lib/validations/`

### TypeScript

- All new files should use TypeScript (`.ts`/`.tsx`)
- Use strict typing (strict mode enabled)
- Import types with `import type` for better tree-shaking
- Path imports available: use `@/` prefix for src-relative imports (e.g., `@/components`, `@/lib`)
- Import Prisma types: `import type { Cotizacion, EstadoCotizacion } from '@/app/generated/prisma'`

### Styling

- Use Tailwind v4 utility classes
- Remember v4 changes: some class names may differ from v3
- Global styles in `src/app/globals.css`
- Responsive design with mobile-first approach
- Dark mode support via `dark:` prefix classes
