# El Método Adulma - Next.js 2026 Refactor

Sitio web migrado a **Next.js App Router + TypeScript estricto + Tailwind CSS** con arquitectura modular por dominio, SEO tecnico y accesibilidad WCAG 2.2 AA.

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript estricto
- Tailwind CSS + design tokens
- Zod (validacion)
- Formspree (formulario de contacto)
- Plausible (analitica privacy-first, opcional)
- pnpm

## Scripts

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
pnpm typecheck
pnpm check:no-barrels
pnpm check
pnpm format
```

## Variables de entorno

Crear `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://elmetodoadulma.com
PLAUSIBLE_DOMAIN=
```

## Arquitectura

```text
app/
  (marketing)/
    page.tsx
    nosotros/page.tsx
    capacitaciones/page.tsx
    galeria/page.tsx
  robots.ts
  sitemap.ts
  manifest.ts
  layout.tsx
  globals.css

src/
  features/
  components/
  lib/
  styles/
  types/
```

## Politicas de calidad

- Sin barrel files (`export *` e `index.ts` agregadores prohibidos en `src`).
- Metadatos SEO por ruta.
- JSON-LD estructurado.
- Formularios con validacion y proteccion anti-spam.
- Componentes interactivos accesibles por teclado.

## Deploy estatico (Hostinger)

Este proyecto esta configurado con `output: 'export'`, por lo que el build genera una carpeta estatica:

```bash
pnpm build:hostinger
```

Salida:

```text
out/
```

Subir todo el contenido de `out/` al `public_html` de Hostinger (no la carpeta `out`, sino su contenido).

### Checklist rapido de produccion

1. Ejecutar build local:

```bash
pnpm install --frozen-lockfile
pnpm build:hostinger
```

2. Verificar localmente el sitio exportado:

```bash
pnpm start
```

3. En Hostinger (hPanel):

- Ir a `Administrador de archivos` -> `public_html`.
- Borrar o mover archivos viejos del sitio.
- Subir el contenido de `out/`.
- Confirmar que `.htaccess` quede en la raiz de `public_html`.

4. Limpiar cache del navegador/CDN y validar:

- Home, Capacitaciones, Galeria, Nosotros, Contacto.
- Videos y formulario.

### Notas importantes

- En modo estatico no hay API backend de Next.js.
- El formulario de contacto envia directamente a Formspree.
- El repo incluye `public/.htaccess` con reglas de cache y compresion para Hostinger (Apache).
