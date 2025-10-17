# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development Commands

```bash
# Development server with Turbopack (faster bundling)
pnpm dev

# Build for production with Turbopack
pnpm build

# Start production server
pnpm start

# Run ESLint
pnpm lint
```

## Architecture Overview

This is a Next.js 15 project using the App Router architecture with TypeScript and Tailwind CSS v4. The project structure follows Next.js conventions:

- **App Router**: Uses the `app/` directory for routing (Next.js 13+ pattern)
- **TypeScript**: Configured with strict mode and Next.js plugin
- **Styling**: Tailwind CSS v4 with PostCSS, using CSS custom properties and inline themes
- **Fonts**: Geist Sans and Geist Mono from Google Fonts with variable font support
- **Build Tool**: Turbopack for faster development and build times

### Key Configuration Files

- `next.config.ts`: Next.js configuration (currently minimal)
- `eslint.config.mjs`: ESLint with Next.js and TypeScript rules using flat config format
- `tsconfig.json`: TypeScript configuration with path mapping (`@/*` → `./*`)
- `postcss.config.mjs`: PostCSS with Tailwind CSS plugin
- `app/globals.css`: Global styles with Tailwind import and custom CSS properties

### Project Structure

- `app/`: Main application code using App Router
  - `layout.tsx`: Root layout with font configuration and metadata
  - `page.tsx`: Home page component
  - `globals.css`: Global styles and theme variables
- `public/`: Static assets (SVG icons)

## Development Notes

- Uses pnpm as package manager (lockfile present)
- Dark mode support via CSS `prefers-color-scheme`
- Custom CSS properties for theming in Tailwind v4 inline theme format
- ESLint configured to ignore build artifacts and type definitions