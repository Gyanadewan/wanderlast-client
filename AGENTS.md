<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# wanderlast

Next.js 16 App Router app (`src/app`, React 19). The app itself is a near-empty scaffold (`src/app/page.tsx` renders nothing yet); most of the tree is generated UI components.

## Commands
- `npm run dev` — dev server on localhost:3000.
- `npm run lint` is bare `eslint` over the whole tree — it took >2 min and timed out in testing. Scope it instead: `npx eslint src [--fix]` or a single file.
- No test framework and no `typecheck` script. Verify types with `npx tsc --noEmit` (build also typechecks: `npm run build`).

## Toolchain gotchas
- Tailwind CSS v4 via `@tailwindcss/turbopack` (loader wired in `next.config.ts`) — there is no `tailwind.config` file; theme/design tokens live in `src/app/globals.css`.
- React Compiler is on (`reactCompiler: true`): don't add `useMemo`/`useCallback` purely for memoization — it's redundant.
- shadcn/ui is set up with the **Base UI** ("base-nova" style, `components.json`): components in `src/components/ui/*` use `@base-ui/react` primitives, **not Radix** — Radix prop APIs don't apply. Regenerate missing ones with `npx shadcn add <component>` instead of hand-writing.
- `cn` comes from the `cn` npm package (components import it directly; it's re-exported at `src/lib/utils.ts`, the `@/lib/utils` alias). Path alias: `@/*` → `src/*`.
- `next dev` re-writes the `nextjs-agent-rules` block above into this file — expect it in diffs, don't strip it manually.

## Layout
- `src/app/` — routes (next-env/types include `.next/dev/types` in tsconfig).
- `src/components/ui/` — generated shadcn components (treat as vendored; don't restructure).
- `src/hooks/`, `src/lib/` — helpers; code highlight utilities (`highlighter.tsx`, `use-highlighted-code.ts`) use shiki.
