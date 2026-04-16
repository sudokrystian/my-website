# Krystian's Portfolio Website

Personal portfolio site built with React 18 + TypeScript + Vite. Deployed to Firebase Hosting via GitHub Actions CI/CD.

## Commands

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run test         # Run tests in watch mode
npm run test:run     # Run tests once (CI)
npm run lint         # ESLint check
npm run lint:fix     # ESLint auto-fix
npm run format       # Prettier format
npm run format:check # Prettier check
```

All of `lint`, `test:run`, and `build` must pass before deploying. The CI pipeline runs them in that order.

## Architecture

- **Routing**: React Router v6 with lazy-loaded pages via `React.lazy()` + `Suspense` in `RouterConfig.tsx`
- **Styling**: SCSS modules per component, global styles/variables in `main.scss`. Bootstrap is imported but used minimally.
- **Icons**: `react-icons` library exclusively. Do NOT use Font Awesome — it was removed for bundle size reasons (saved ~1.5MB).
- **Particles**: `@tsparticles/react` v3 with `@tsparticles/slim`. Canvas is capped at 2560px width for 4K performance. Used on Home, Portfolio, and Games pages.
- **Games**: Tetris is a custom React implementation. Froggers is a Unity WebGL game via `react-unity-webgl`.

## Key conventions

- **Component files**: PascalCase (`Home.tsx`, `SkillBox.tsx`)
- **SCSS files**: lowercase/kebab-case matching folder name (`home.scss`, `skill-box.scss`)
- **Data constants**: Separate from UI components in `src/constants/`. Experience/education data is shared between About and Experience pages via `experienceData.ts`.
- **No `<br />` for layout**: Use CSS margins/padding. Multi-paragraph text uses `\n\n` split into separate `<p>` tags.
- **No buttons inside links**: Style `<Link>` or `<a>` directly with button classes.
- **Accessibility**: Interactive elements must be `<button>` or `<a>`, not `<div onClick>`. All icon-only links need `aria-label`. Images need descriptive `alt` text.

## Testing

- **Framework**: Vitest + React Testing Library + jsdom
- **Setup**: `vitest.config.ts` merges with `vite.config.ts`. Global setup in `src/test/setup.ts`.
- **Pattern**: Test files live next to their component (`SkillBox.test.tsx` beside `SkillBox.tsx`)
- **Mocking**: Components using particles, Unity, or SVG imports (`*.svg?react`) must be mocked in tests. Lazy-loaded route tests use `findByText` (async) instead of `getByText`.
- **Tetris game logic**: Pure functions extracted to `tetrisHelpers.ts` for unit testing. The component uses `useRef` for mutable game state to avoid stale closures in intervals/event handlers.

## Project structure

```
src/
  Main.tsx              # Entry point (StrictMode, BrowserRouter)
  App.tsx               # Header + RouterConfig + Footer
  RouterConfig.tsx      # Lazy-loaded routes with Suspense
  main.scss             # Global styles and variables
  constants/
    techIcons.ts        # 39 technology icons with colors
    projectData.ts      # Portfolio project data
    experienceData.ts   # Shared experience/education data
  components/
    header/             # Fixed navbar with mobile hamburger menu
    footer/             # Social media links
    banner/             # Image carousel on About page
    skill-box/          # Technology pill badges
    project-card/       # Portfolio project cards
    about-me-boxes/     # Quick-nav boxes on About page
    hobbies-section/    # Hobby cards with hover animations
    particles/          # tsparticles background (capped at 2560px)
    falling-blocks/     # CSS-only falling tetromino animation (unused POC)
  pages/
    home/               # Landing page with particles + CTA buttons
    about/              # Bio, experience summary, skills, education, hobbies
    experience/         # Detailed work experience with tech images
    portfolio/          # Project cards grid with particles background
    project/            # Single project detail (navigates via location.state)
    contact/            # Contact methods
    books/              # Book showcase with download links
    games/
      Games.tsx         # Game hub listing
      tetris/           # Custom React Tetris game
      froggers-game/    # Unity WebGL game wrapper
    error/              # 404 page
```

## CI/CD

GitHub Actions workflow at `.github/workflows/firebase-deployment.yml`. Triggers on push to `main`. Uses `npm ci --maxsockets 3` to avoid runner resource exhaustion. Pipeline: install -> lint -> test -> build -> deploy to Firebase.

## Things to watch out for

- The `package-lock.json` must use the public npm registry (`registry.npmjs.org`), not private registries. If regenerating, run: `npm install --registry https://registry.npmjs.org`
- tsparticles on 4K screens: canvas is capped at 2560px via CSS wrapper. Don't set `detectRetina: true`.
- Tetris game state uses `useRef` mirrors alongside `useState` — both must be kept in sync. The refs are read inside `useCallback` handlers to avoid stale closures.
