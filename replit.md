# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Contains the **Cocinaa** PWA — a French/Arabic bilingual recipe scanner app.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### Cocinaa (artifacts/cocinaa)
- **Type**: React + Vite PWA
- **Preview path**: `/`
- **Port**: 21088
- **Description**: Mobile-first bilingual (FR/AR) recipe scanner PWA

#### Features
- Camera scanner with simulated AI image recognition
- 6 built-in recipes (couscous, baklava, tajine, macarons, tarte fraises, pizza)
- Text-to-Speech for ingredients and steps (FR/AR)
- Recipe history saved to localStorage
- Bilingual UI (French ↔ Arabic with RTL support)
- Google AdSense placeholder slots
- Affiliate links (Amazon, Jumia, AliExpress, eBay, IZIROAD)
- YouTube + TikTok recipe video links
- Kitchen tools recommendations per recipe
- QR code for app download
- Privacy policy, legal mentions, contact pages
- Installable PWA with custom orange icon

#### Pages
- `/` — Home with hero, categories, featured recipes
- `/scanner` — Camera scanner with file upload fallback
- `/recipe/:id` — Full recipe detail (ingredients, steps, tips, videos, tools, affiliates)
- `/recipes` — Recipe catalog with category filters and search
- `/history` — Saved recipes history
- `/profile` — User auth (demo), language switch, QR code, settings
- `/privacy` — Privacy policy (FR/AR)
- `/legal` — Legal notices (FR/AR)
- `/contact` — Contact form (rachkach550@gmail.com)
- `/download` — App download page with QR code

#### To connect Firebase (production)
1. Create Firebase project at console.firebase.google.com
2. Enable Authentication (Email/Google)
3. Enable Firestore for recipe history sync
4. Add Firebase config to environment variables
5. Replace demo auth in `src/pages/profile.tsx` with Firebase SDK calls

#### To add Google Vision API
1. Enable Vision API in Google Cloud Console
2. Add `VITE_GOOGLE_VISION_KEY` env var
3. Replace `simulateImageRecognition()` in `src/lib/recipes-data.ts` with real Vision API call

#### To activate Google AdSense
1. Get approved at adsense.google.com
2. Add publisher ID to `index.html` AdSense script tag
3. Replace `<AdBanner>` placeholder components with real AdSense units

### API Server (artifacts/api-server)
- **Type**: Express 5 API
- **Preview path**: `/api`
- **Port**: 8080

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally
