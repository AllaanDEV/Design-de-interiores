# Stephanie Thatenhorst - Interior Design Portfolio

## Project Overview
This project is a high-end interior design portfolio website for Stephanie Thatenhorst. It is designed with a "pixel-perfect" minimalist aesthetic, prioritizing sophisticated typography and smooth animations to showcase design projects.

### Core Technologies
- **Frontend Framework:** React 18 with TypeScript
- **Build Engine:** Vite (using @vitejs/plugin-react-swc for fast builds)
- **Styling:** Tailwind CSS (configured with a custom design system)
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Animations:** Framer Motion (integrated with custom Tailwind keyframes)
- **Icons:** Lucide React
- **Routing:** React Router DOM (v6)
- **State/Data Management:** TanStack Query (React Query)
- **Testing:** Vitest (unit/integration) and Playwright (E2E)

## Building and Running
The project supports both `npm` and `bun`.

### Commands
- **Local Development:** `npm run dev` (Runs at `http://localhost:8080`)
- **Production Build:** `npm run build`
- **Linting:** `npm run lint`
- **Testing:** `npm run test` (runs Vitest)
- **E2E Testing:** Playwright is configured via `playwright.config.ts`.
- **Preview Build:** `npm run preview`

## Architecture & Conventions
### File Structure
- `src/components/`: UI building blocks.
    - `ui/`: Base shadcn components (Accordion, Button, Card, etc.).
    - Section-level components (Navbar, Hero, Gallery).
- `src/pages/`: Route-level entry points (Index, NotFound).
- `src/lib/`: Shared utilities like `cn` (Tailwind class merger).
- `src/hooks/`: Custom hooks for UI logic (e.g., `use-mobile.tsx`).
- `src/assets/`: High-resolution project imagery and site assets.

### Key Conventions
- **Path Aliases:** Use the `@/` prefix to import from the `src/` directory (configured in `vite.config.ts` and `tsconfig.json`).
- **Design System:**
    - **Typography:** Uses `Cormorant Garamond` (serif) for headings and `Inter` (sans) for body text.
    - **Color Palette:** Custom colors like `cream`, `warm-dark`, `terracotta`, and `gold` are defined in `tailwind.config.ts`.
- **Animations:** Leverage the `fade-in` utility animation defined in the Tailwind config for entrance transitions.
- **Conditional Styling:** Always use the `cn()` utility for combining Tailwind classes.
- **Components:** Functional components with descriptive prop types are preferred.

