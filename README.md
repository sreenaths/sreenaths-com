# sreenaths.com

Personal portfolio website of Sreenath Somarajapuram.

## Tech Stack

- **Framework**: [Astro 6](https://astro.build) (static output)
- **Language**: TypeScript
- **Styles**: LESS (compiled by Vite)
- **JS**: Vanilla TypeScript — no jQuery, no framework runtime
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

| Command           | Description                                          |
|-------------------|------------------------------------------------------|
| `npm run dev`     | Start local dev server at `localhost:4321` with HMR  |
| `npm run build`   | Build static assets to `dist/`                       |
| `npm run preview` | Preview the production build locally                 |

## Project Structure

```
/
├── src/
│   ├── data/
│   │   └── project_data.json   # Projects and tags data
│   ├── layouts/
│   │   └── Layout.astro        # Base HTML layout (header, footer, loader)
│   ├── pages/
│   │   ├── index.astro         # Home page with parallax hero
│   │   ├── about.astro
│   │   ├── contacts.astro
│   │   └── projects.astro      # Data-driven projects with tag filter + lightbox
│   ├── scripts/
│   │   ├── utils.ts            # Shared utilities (isMobile)
│   │   ├── loader.ts           # Page loading animation + scroll-to-top
│   │   ├── parallax.ts         # Mouse-parallax effect
│   │   ├── lightbox.ts         # Lightbox image viewer
│   │   └── projects.ts         # Sticky tag bar + tag filter
│   └── styles/
│       ├── main.less           # Global styles (header, footer, typography)
│       ├── home.less           # Home page styles
│       ├── projects.less       # Projects page styles
│       └── lightbox.less       # Lightbox styles
├── public/                     # Static assets copied as-is to dist/
│   ├── images/
│   └── favicon.png
├── scratchpad/                 # Legacy PHP/Handlebars source (archived)
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

## Deployment

Run `npm run build` — the `dist/` directory contains all static assets ready to deploy to any static host (S3, Netlify, GitHub Pages, etc.).
