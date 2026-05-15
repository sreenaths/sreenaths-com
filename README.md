# sreenaths.com

Personal portfolio website of Sreenath Somarajapuram.

## Tech Stack

- **Framework**: [Astro 6](https://astro.build) (static output)
- **Language**: TypeScript
- **Node**: 22 (see `.nvmrc`)

## Prerequisites

- [nvm](https://github.com/nvm-sh/nvm)

## Setup

```bash
nvm install   # installs Node version from .nvmrc
nvm use       # switches to the correct Node version
npm install
```

## Dev Commands

| Command           | Description                        |
|-------------------|------------------------------------|
| `npm run dev`     | Start local dev server at `localhost:4321` with HMR |
| `npm run build`   | Build static assets to `dist/`     |
| `npm run preview` | Preview the production build locally |

## Project Structure

```
/
├── src/
│   ├── layouts/
│   │   └── Layout.astro   # Base HTML layout
│   ├── pages/
│   │   └── index.astro    # Home page (each .astro file → a route)
│   └── components/        # Reusable UI components
├── public/                # Static assets copied as-is to dist/
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

## Deployment

Run `npm run build` — the `dist/` directory contains all static assets ready to deploy to any static host (S3, Netlify, GitHub Pages, etc.).
