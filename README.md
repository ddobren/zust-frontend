# zust frontend scaffold

Cleaned Vite + React baseline prepared for migrating an existing vanilla HTML/CSS/JS frontend into components.

## Getting started

- `npm install` to install dependencies.
- `npm run dev` to launch the local dev server.
- `npm run build` to create a production build.
- `npm run preview` to preview the production build locally.

## Project layout

- `index.html` — minimal document shell used by Vite.
- `src/main.tsx` — React entry point that mounts the app.
- `src/App.tsx` — root component that wires layouts and feature sections.
- `src/components/` — add UI building blocks here as you migrate content (e.g. `Header`).
- `src/layout/` — shared page layouts; currently includes `MainLayout`.
- `src/scripts/` — place converted vanilla JS logic for gradual refactors.
- `src/styles/` — global, layout, and component styles (`index.css`, `App.css`, `components/header.css`).
- `public/` — drop static assets here if you need to serve them as-is.

Create new components inside `src/components` (directory can be created as needed) and import them into `App.tsx` or wherever fits your structure.

## Migration tips

1. Move static HTML sections into small, focused React components.
2. Convert each CSS block into scoped styles (`.module.css`, styled-components, etc.) or keep shared rules inside `src/index.css`.
3. Place JavaScript behaviour into hooks or component logic rather than relying on global scripts.
4. Static assets (images, fonts) can stay in `public` for direct serving or be imported from `src` for bundling.

This scaffold keeps only essential files so you can focus on translating the existing UI into React. Adjust linting, routing, or state management as your project grows.
