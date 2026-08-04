# Alexis Escobar — Portfolio

Desarrollador frontend especializado en React, Next.js, Svelte y TypeScript.

## Stack

| Categoría | Tecnologías |
|-----------|-------------|
| **Runtime** | Next.js 16 (App Router), React 19, TypeScript 5 |
| **Estilos** | Tailwind CSS 4, shadcn/ui (Base UI) |
| **Tipografía** | Manrope (sans), JetBrains Mono (mono) — `next/font` |
| **Tema** | `next-themes` (dark/light/system) |
| **Animaciones** | `tw-animate-css` (Tailwind v4 compatible) |
| **Deploy** | Vercel |

## Scripts

```bash
pnpm dev      # servidor de desarrollo en http://localhost:3000
pnpm build    # build de producción (prerender SSG)
pnpm start    # servir build local
pnpm lint     # ESLint + TypeScript (flat config)
```

## Arquitectura

```
app/
  layout.tsx        → Root layout, metadata, ThemeProvider
  page.tsx          → Página principal (composición de componentes)
  globals.css       → Tailwind + variables de color + utilidades
  fonts.ts          → Fuentes (Manrope, JetBrains Mono)
  icon.svg          → Favicon source (emerald)

components/
  Header.tsx        → Navegación + menú móvil + toggle de tema
  Hero.tsx          → Hero principal con CTA
  Skills.tsx        → Habilidades agrupadas
  Projects.tsx      → Tarjetas de proyectos
  Experience.tsx    → Línea de tiempo de experiencia
  About.tsx         → Bio, formación, certificaciones
  Footer.tsx        → Contacto + copyright
  theme-provider.tsx → Wrapper next-themes
  mode-toggle.tsx   → Selector de tema (dark/light/system)
  ui/               → Componentes shadcn/ui (Button, Card, DropdownMenu)

lib/
  portafolio-data.ts → Tipos + datos del portafolio (single source of truth)
  utils.ts           → Utilidad cn() (clsx + tailwind-merge)

public/
  favicon.svg / favicon-light.svg → Favicon theme-aware
  og-image.png                   → Open Graph 1200×630
  robots.txt, sitemap.xml
  images/proyectos/*.avif
```

## Desarrollo

```bash
git clone <repo-url>
cd portafolio-v2
pnpm install
pnpm dev
```

## Deploy

[Vercel](https://vercel.com/) — el build es `next build` con SSG.