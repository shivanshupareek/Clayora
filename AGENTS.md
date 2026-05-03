<!-- BEGIN:next's-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# Agent Instructions

## Production Standards (Non-Negotiable)

These four standards apply to **every task, every component, every file** — no exceptions.

| Standard              | Requirement                                                                          |
| --------------------- | ------------------------------------------------------------------------------------ |
| **Accessibility**     | WCAG 2.1 AA. Semantic HTML, keyboard nav, visible focus, correct ARIA.               |
| **Testing**           | Jest + RTL. Every component has tests. `npm test` must pass before a task is done.   |
| **Security**          | CSP maintained. Input validated. No secrets exposed. Headers never weakened.         |
| **Performance & SEO** | Core Web Vitals green. Correct metadata per page. Images optimised. No layout shift. |

A task is not complete until all four standards are met.

---

## How to work on this project

- Always build in small steps
- Do not generate entire pages at once
- Focus on one component at a time
- Keep code clean and production-ready

---

## Coding Rules

- Use Next.js App Router
- Use SCSS modules
- Use functional components
- Keep components reusable
- Avoid unnecessary dependencies

### SCSS Import Rule (critical)

Next.js 16 uses Turbopack by default for both `next dev` and `next build`. Turbopack does **not** support `sassOptions.includePaths`.

**All component SCSS modules must use relative paths to import shared styles:**

```scss
// Components at src/app/_components/[Name]/ — always 3 levels from src/styles/
@use "../../../styles/variables" as *;
@use "../../../styles/mixins" as *;
```

**Never use bare imports like `@use 'variables' as *` in component SCSS modules** — these only work in `src/styles/` files (same directory), not in nested component directories.

---

## Metadata Rules

- Every new page must export its own `metadata` object
- Always override `alternates.canonical` with the page's own full URL
  - Root layout sets `canonical: "https://qera.studio"` as the global default
  - Without a page-level override, all pages inherit the homepage canonical — this causes duplicate content penalties
  - Example for a new page:
    ```ts
    export const metadata: Metadata = {
      title: "Work",
      alternates: {
        canonical: "https://qera.studio/work",
      },
    };
    ```

---

## Image Rules

- Always use `next/image` (`import Image from "next/image"`) — never use `<img>` tags directly
- Always provide `width` and `height` props to prevent layout shift
- Use `priority` prop on the first above-the-fold image on each page (e.g. hero image)
- Use `sizes` prop for responsive images to avoid downloading oversized assets
- For decorative images with no semantic meaning, set `alt=""`
- When adding external image sources, add the domain to `remotePatterns` in `next.config.ts` before use

---

## Security Rules

### Headers

- Security headers are set globally in `next.config.ts` via `headers()` — never override or remove them
- Never add wildcard (`*`) to any CSP directive
- Never add `'unsafe-eval'` to `script-src` unless absolutely unavoidable — if you must, document exactly why inline

### CSP — always-present directives

These directives must be present in every build — never remove them:

| Directive                   | Value    | Why                                                             |
| --------------------------- | -------- | --------------------------------------------------------------- |
| `default-src`               | `'self'` | Deny-by-default fallback for all resource types                 |
| `frame-ancestors`           | `'none'` | Modern clickjacking prevention (preferred over X-Frame-Options) |
| `upgrade-insecure-requests` | (flag)   | Forces all sub-resources to HTTPS                               |

`X-Frame-Options: DENY` must also remain alongside `frame-ancestors` — belt-and-suspenders for older browsers.

**`frame-src` must always be narrowed to the exact embed path — never an entire domain:**

- ✅ `frame-src https://www.google.com/maps/embed`
- ❌ `frame-src https://www.google.com`

When adding any new iframe source, narrow `frame-src` to the minimum required path, not the root domain.

### Cross-Origin headers

All three must be set and never weakened:

| Header                         | Value                      | Why                                                                                            |
| ------------------------------ | -------------------------- | ---------------------------------------------------------------------------------------------- |
| `Cross-Origin-Resource-Policy` | `same-origin`              | Prevents cross-origin documents silently loading this site's assets (Spectre-class protection) |
| `Cross-Origin-Opener-Policy`   | `same-origin-allow-popups` | Isolates the browsing context — blocks cross-origin `window.opener` access                     |
| `Cross-Origin-Embedder-Policy` | **Do not set**             | Would break Google Maps iframes — only add when all third-party iframes are COEP-compatible    |

### Permissions-Policy — canonical 27-directive set

The following directives must always be present. Never reduce this set:

```
# Hardware/sensor features
camera=(), microphone=(), geolocation=(), payment=(), usb=(),
# Motion & orientation sensors (fingerprinting/side-channel attack vectors)
accelerometer=(), gyroscope=(), magnetometer=(), ambient-light-sensor=(),
# Media/display features
autoplay=(), fullscreen=(self), picture-in-picture=(), display-capture=(),
# Hardware device APIs
serial=(), hid=(), bluetooth=(), midi=(),
# Privacy & identity
local-fonts=(), identity-credentials-get=(),
# XR/spatial tracking
xr-spatial-tracking=(),
# Misc browser APIs not used by this site
window-management=(), wake-lock=(), gamepad=(),
# Privacy Sandbox / ad-targeting APIs — explicitly opt out
interest-cohort=(), browsing-topics=(),
join-ad-interest-group=(), run-ad-auction=(),
attribution-reporting=()
```

The Privacy Sandbox directives (`browsing-topics`, `join-ad-interest-group`, `run-ad-auction`, `attribution-reporting`, `interest-cohort`) are **non-negotiable** — they explicitly opt this site out of Google's ad-targeting infrastructure. This is both a privacy and brand positioning decision.

Do NOT add `clipboard-write=()` — it breaks native browser copy behavior. Do NOT change `fullscreen` from `(self)` to `()` — needed for future video players.

### iframes

- Always set `referrerPolicy="strict-origin-when-cross-origin"` on every `<iframe>` — never use `no-referrer-when-downgrade` (the old default sends the full page URL to the embedded third party on every load)
- Always set `title` on every iframe — required for screen readers
- Always set `loading="lazy"` on below-the-fold iframes
- `frame-src` in CSP must list the iframe origin — see CSP directives above

### CSP — update when adding third-party integrations

| Integration                     | Directive to extend                                 |
| ------------------------------- | --------------------------------------------------- |
| Analytics (e.g. GA, Plausible)  | `script-src`, `connect-src`                         |
| Embedded video (YouTube, Vimeo) | `frame-src`, `img-src`                              |
| Maps (Google Maps, Mapbox)      | `script-src`, `frame-src`, `img-src`, `connect-src` |
| External fonts                  | `style-src`, `font-src`                             |
| External images / CDN           | `img-src`                                           |
| Chat widgets / Intercom         | `script-src`, `connect-src`, `frame-src`            |

### Input & data

- All Server Actions and Route Handlers must validate and sanitise every input — never trust client data
- Never expose secret environment variables with the `NEXT_PUBLIC_` prefix
- Never store sensitive data (tokens, keys) in `localStorage` or cookies without `HttpOnly` + `Secure` flags
- Sanitise any user-generated content before rendering to prevent XSS

### Dependencies

- Do not add a new `npm` package without a clear reason — every dependency is an attack surface
- Never install packages with known high/critical vulnerabilities (`npm audit` before adding)

---

## Performance & SEO Rules

### Core Web Vitals

- **LCP** — largest above-the-fold image must use `priority` on `next/image`; avoid render-blocking resources
- **CLS** — always provide `width` + `height` on images and video; never insert content above existing content after load
- **INP** — keep event handlers lightweight; defer non-critical JS; avoid long tasks on the main thread

### Images

- Always use `next/image` — never `<img>` directly
- Always set `width`, `height`, and `sizes` props
- Use `priority` on the first visible image per page
- Use `quality={75}` (default) unless a specific quality is needed and added to `images.qualities` in `next.config.ts`
- Add `unoptimized` only for SVGs — Next.js cannot compress them

### Fonts

- All fonts are loaded via `next/font` — never link external font CDNs
- Use `display: "swap"` and set a matching `fallback` to minimise CLS
- Only `preload` the primary body font; set `preload: false` on secondary/decorative fonts

### JavaScript

- Prefer Server Components — only add `'use client'` when the component genuinely needs browser APIs or interactivity
- Do not import heavy libraries client-side if a server-side or lighter alternative exists
- Lazy-load below-the-fold components with `next/dynamic` when they are large

### SEO

- Every page exports its own `metadata` object with `title`, `description`, and `alternates.canonical`
- `title` must use the template `"%s | Qera Studio"` — never hardcode the full string
- `description` must be unique per page — no duplicates
- `openGraph` and `twitter` card metadata must be present on every public page
- Structured data (JSON-LD) is set in `layout.tsx` for site-wide schemas; add page-specific schemas in the page file
- All images referenced in OG metadata must exist in `public/` and be 1200×630px
- Use `robots: { index: true, follow: true }` explicitly on all public pages; set `noindex` on private/utility pages

### Rendering strategy

- Default to Server Components (static)
- Use `export const revalidate = N` for pages that need periodic re-fetching
- Only use `export const dynamic = "force-dynamic"` when truly necessary — document why

---

## UI Rules

- Follow 8px spacing system
- Maintain consistent border radius
- Use soft shadows and subtle depth
- Avoid high contrast or harsh colours

---

## Interaction Rules

- Keep animations minimal
- Prefer subtle transitions
- Avoid heavy motion or complex effects

---

## Accessibility Rules

Every component must meet production-grade accessibility standards.

### Semantic HTML

- Use the correct element for the job: `<nav>`, `<header>`, `<main>`, `<section>`, `<footer>`, `<article>`, `<button>`, `<a>`
- Never use `<div>` or `<span>` as a button or link — use `<button>` or `<a>` respectively
- Every `<section>` must have an accessible name via `aria-label` or `aria-labelledby`
- Maintain a logical heading hierarchy — one `<h1>` per page, then `<h2>` → `<h3>` etc.

### Navigation & keyboard access

- Every interactive element (links, buttons, inputs) must be reachable and operable by keyboard
- Every page must include a **skip-to-main-content link** as the first focusable element in `<body>` (see `layout.tsx`)
- The `<main>` element must have `id="main-content"` as the skip link target
- Logo/brand in navbar must be an `<a href="/">` — not a `<div>`

### Focus states

- Never remove focus outlines (`outline: none`) without a replacement
- All interactive elements must declare `&:focus-visible { @include focus-ring; }` explicitly — do not rely solely on the global reset
- The global `:focus-visible` in `globals.scss` is a safety net, not a substitute for component-level declarations

### ARIA

- Add `aria-label` to icon-only buttons and links (e.g. logo links, icon buttons)
- Decorative images must use `alt=""` and `aria-hidden="true"` on their wrapper
- Meaningful images must have descriptive `alt` text
- Hidden/presentational SVGs must have `aria-hidden="true"` and `focusable="false"`
- Use `aria-labelledby` to associate a visible heading with its section

### Avoid

- No `tabindex` greater than `0`
- No `pointer-events: none` as a substitute for proper disabled states on interactive elements
- No colour as the only means of conveying information

---

## When unsure

- Ask for clarification instead of guessing

---

## Testing Rules (Mandatory)

Stack: **Jest + React Testing Library** (`npm test`)

### Every component must have a `__tests__/<ComponentName>.test.tsx` file covering:

- Renders without errors
- Correct content is displayed
- User interactions work correctly (if applicable)
- Keyboard accessibility (tab navigation reaches interactive elements)

### General checks required in every test suite:

- No console errors during render
- Semantic roles and aria attributes are correct
- Interactive elements (links, buttons) are reachable by keyboard

### Task completion rule:

A task is NOT complete until:

1. The component is implemented
2. Tests are written
3. `npm test` passes with no failures

If tests fail, fix them immediately before proceeding.

### Test conventions:

- Test files live in `__tests__/` inside the component's directory
- Use `screen.getByRole` over `getByTestId` wherever possible — roles reflect real accessibility
- Images with `alt=""` have role `presentation`, not `img` — query them with `container.querySelector('img')`
- Use `userEvent.setup()` (not `fireEvent`) for interaction tests
- Import `userEvent` statically at the top of the file — never use dynamic `import()` inside a test
- Do not test implementation details — test behaviour visible to users and assistive technology
- Keep tests simple and production-relevant; do not test framework internals

---

## Project Structure & Organisation

This is the canonical layout for the project. Follow it strictly. Never create pages, components, or assets outside these patterns.

### Pages — `src/app/`

Use Next.js route groups `(group-name)/` to organise related pages. Route groups are transparent to the URL — they do not affect routing.

| Group     | Path                 | Contains                                |
| --------- | -------------------- | --------------------------------------- |
| (company) | `src/app/(company)/` | story, leadership, values, events, team |
| (support) | `src/app/(support)/` | contact, faq, live-chat                 |
| (legal)   | `src/app/(legal)/`   | privacy, terms, sitemap                 |
| (utility) | `src/app/(utility)/` | any utility/internal pages              |

Root-level files stay at `src/app/` root: `layout.tsx`, `page.tsx`, `sitemap.ts`, `robots.ts`, `not-found.tsx`, `_components/`, `actions/`, `api/`.

### Components — `src/app/_components/`

Use `(group-name)/` subdirectories inside `_components/` for logical grouping (same transparent convention — no routing effect here, purely organisational).

| Group     | Path                     | Contains                                                                                 |
| --------- | ------------------------ | ---------------------------------------------------------------------------------------- |
| (landing) | `_components/(landing)/` | Hero, ProblemSection, SolutionSection, ServicesSection, ExecutionSection, ContactSection |
| (root)    | `_components/` root      | Navbar, Footer, PageLoader, ScrollToTop — shared across all pages                        |

Each component lives in its own directory: `_components/(landing)/Hero/Hero.tsx`, `_components/(landing)/Hero/Hero.module.scss`, `_components/(landing)/Hero/__tests__/Hero.test.tsx`.

### Assets — `public/assets/`

Organise assets by page. Never dump assets at the root of `public/assets/`.

| Directory            | Contains                                                                                                                             |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `assets/landing/`    | All landing page assets (with subsections: `executionSection/`, `problemSection/`, `solutionSection/`, `servicesSection/`, `icons/`) |
| `assets/story/`      | Story page images                                                                                                                    |
| `assets/leadership/` | Leadership page images                                                                                                               |
| `assets/contact/`    | Contact page assets                                                                                                                  |
| `assets/not-found/`  | 404 page assets                                                                                                                      |
| `assets/shared/`     | Cross-page assets (e.g. `shared/footer/footerImage.png`)                                                                             |
| `assets/favicons/`   | All favicon variants                                                                                                                 |
| `assets/og/`         | Open Graph images (1200×630px)                                                                                                       |

### SCSS `@use` depth — critical rule

Every directory level between the component and `src/styles/` requires one `../`. Count carefully — route groups add a level.

| Location                                 | `@use` path                                   |
| ---------------------------------------- | --------------------------------------------- |
| `src/styles/`                            | `@use 'variables' as *` (same dir)            |
| `src/app/_components/Name/`              | `@use '../../../styles/variables' as *`       |
| `src/app/_components/(group)/Name/`      | `@use '../../../../styles/variables' as *`    |
| `src/app/(group)/page/`                  | `@use '../../../styles/variables' as *`       |
| `src/app/(group)/page/_components/Name/` | `@use '../../../../../styles/variables' as *` |

Always recount when moving a file to a different directory depth.

### No stale compiled files

Never commit `.module.css` or `.module.css.map` files alongside `.module.scss` sources. Turbopack compiles SCSS at runtime — pre-compiled CSS causes 500 errors.

---

## Git Workflow Rules

- Always create a new branch before making changes
- Use branch naming format: feature/<feature-name>
- Never make changes directly on main
- Commit changes in small, meaningful steps

---

### Before starting any task:

1. Create a new branch
2. Switch to that branch
3. Then start making changes

---

### Example:

feature/glass-card
feature/hero-section
feature/api-contact

---

- Do not modify existing stable code unless explicitly instructed
- If unsure, ask before changing existing files

---
