# zust frontend scaffold

`init/react-setup`'s static `index.html` has been migrated into a component-based Vite + React app with the original styling and interactivity preserved (navigation dropdown, accessibility tools, reading guide and back-to-top helpers).

## Getting started

- `npm install` to install dependencies.
- `npm run dev` to launch the local dev server.
- `npm run build` to create a production build.
- `npm run preview` to preview the production build locally.

## Project layout

- `index.html` — minimal document shell used by Vite.
- `src/main.tsx` — React entry point that mounts the app.
- `src/App.tsx` — orchestrates accessibility state and composes the homepage.
- `src/components/` — React components mirroring the original sections (`Header`, `AccessibilityPanel`, `Hero`, `FeaturedPost`, `LatestPosts`, `Footer`, `BackToTop`, `ReadingGuide`).
- `src/assets/` — imported static assets such as the navbar logo.
- `src/scripts/` — staging area for any remaining vanilla JS you plan to refactor.
- `src/styles/index.css` — global stylesheet copied from the original project.
- `public/` — drop static assets here if you need to serve them as-is.

Create new components inside `src/components` (directory can be created as needed) and import them into `App.tsx` or wherever fits your structure.

## Migration tips

1. Move static HTML sections into small, focused React components.
2. Convert each CSS block into scoped styles (`.module.css`, styled-components, etc.) or keep shared rules inside `src/index.css`.
3. Place JavaScript behaviour into hooks or component logic rather than relying on global scripts.
4. Static assets (images, fonts) can stay in `public` for direct serving or be imported from `src` for bundling.

This scaffold keeps the original look-and-feel while letting you extend the UI with React components, routing, or state management as the project grows.
