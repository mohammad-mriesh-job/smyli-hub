# SMYLI Project Hub

The client-facing hub for the SMYLI build: a proposal today, a live project portal after signing.

React + TypeScript + MUI, built with Vite. Code layout and rules follow the marriage-platform frontend.
The look is Graphite: black, white and greys with one blue accent, set in Geist (`src/global/theme/`).

```bash
npm install
npm run dev     # local preview
npm run build   # static site in dist/, deployable to any static host
```

## Deploy

Pushing to `master` on GitHub builds the hub, publishes a GitHub Release (tag `v1.0.<run>`, built site attached as a zip) and deploys it to GitHub Pages (`.github/workflows/release-deploy.yml`). One-time
setup in the repository: Settings → Pages → Build and deployment → Source: GitHub Actions. The site is then at
`https://<account>.github.io/<repo>/`. The build uses relative paths and the router uses `#` addresses, so any
repository name works and reloading any page is safe.

## Checks

```bash
npm run format:check && npm run lint && npm run build
```

- `npm run format` applies Prettier (`.prettierrc.json`: 4 spaces, no semicolons, single quotes, 120 columns, one JSX
  attribute per line).
- `npm run lint` runs oxlint (`.oxlintrc.json`) and `scripts/check-boundaries.mjs`. It fails on any file over 200 lines,
  on more than one component in a file, and on any import that crosses a feature boundary.

## Modules

The hub has five modules, picked from the menu in the header. Each module has its own sections in the sidebar.

| Module    | Sections                                                                                           | State                                                                      |
| --------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Product   | Pillars, Feature blueprint, How we work, Progress, Competitors, Ideas & human layer                | Pillars, blueprint and How we work from the proposal; the rest not started |
| Technical | Architecture, Cloud & infrastructure, Environments & access, Releases, Quality, Security & privacy | Not started                                                                |
| Financial | Invoices, Approved changes, Running costs                                                          | Not started                                                                |
| Marketing | Branding, Launch plan, Store listing, Venue partners, Growth                                       | Not started                                                                |
| UI/UX     | Design system, User flows, Screens, Usability testing                                              | Not started                                                                |

A section that hasn't started renders `UpcomingPage` (`global/components/upcoming/`): why we need the section beside
a picture of the idea, then what it will hold. Each page keeps its own copy, and its picture in the module's
`assets/section-photos/` (AVIF with a JPEG fallback). Replace the page's content when work on it starts.

- **Add a section:** write its page in the module's `components/`, then add it to `sections` in the module's
  `module.ts`. Its path starts with the module's id (`/technical/api`).
- **Add a module:** create `features/<name>/` with `module.ts` and `index.ts`, then add it to `modules` in
  `global/router/router.tsx`. That list also sets the order in the menu; the first module opens when the hub opens.

## Structure

```
src/
  main.tsx
  global/                shared by every module; knows nothing about them
    components/          page building blocks (PageHeader, SectionTitle), the not-started page (UpcomingPage), the logo
    config/              project.ts (the client) and paths.ts (links between modules)
    layouts/             the header with the module menu, the sidebar, the HubModule type
    theme/               tokens.ts (colours, radii, shadows) and theme.ts (light only)
    router/              composition root: builds the routes from the modules
  features/<module>/     product, technical, financial, marketing, uiux
    module.ts            the module: name, icon, colour, and its sections (path, label, page)
    components/          its pages; a large page has its own folder (product/components/blueprint/)
    catalog/ hooks/ utils/   its data and logic (product/catalog holds the 73 features)
    index.ts             the module's public API: the module itself
```

- A module imports only itself and `@global/*`, never another module. Only `global/router` imports modules, and only
  through `@features/<name>` (the `index.ts`). Links between modules go through `PATHS` in `global/config/paths.ts`.
- `global/` holds only what more than one module uses. Something only one module needs lives in that module.
- Money (prices, rates, payments) appears only in the Financial module.
- A `.tsx` file exports one component, written as `export function Name`. Its styles stay inside it, in `sx`. Data
  and logic go in `.ts` files.
- Types are `type`, not `interface`. A bare number for `borderRadius` in `sx` is multiplied by the theme radius
  (14px), so write `'12px'` or use `radius` from the tokens.
- The data shapes in `features/product/catalog/catalog.types.ts` mirror the tables the live portal will use, so a
  backend can replace the static files without rewriting the pages. When that backend arrives, add the platform's HTTP
  rules too: only `*Service.ts` files call the API, through one HTTP client, and components reach it through hooks.
