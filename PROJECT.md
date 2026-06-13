# Project: portfolio_v3

## Architecture
- Framework: Next.js App Router
- Styling: Tailwind CSS (v4)
- Animation: Framer Motion (v12)
- Reusable components: Lucide Icons, pure Tailwind/Framer Motion (no third-party UI libs)
- Language: English only
- Layout: Split layout (compact cards, dynamic routes under `/projects/[slug]`), Masonry Reviews grid, Skills grid, JSON-like About & Contact section.

## Tracks and Milestones
| # | Name | Scope / Track | Assigned Agent (Conv ID) | Status |
|---|------|---------------|-------------------------|--------|
| T1 | E2E Testing Track | Design & write opaque-box E2E test cases, setup runner, publish `TEST_READY.md` | sub_orch_e2e (`bf2e596f-e46f-48ed-9bfa-fa087afd454f`) | DONE |
| T2 | Implementation Track | Develop Next.js portfolio, inject English projects, build IDE nav, cards & sections, integrate with E2E, adversarial hardening | sub_orch_impl_gen1 (`6fff9e96-7bfb-4ed6-8550-17b578a09fa2`) | IN_PROGRESS |

## Interface Contracts
### Data `projects.ts`
- Must export a `Project` interface and `projects` array.
- Attributes: id/slug, title, snippet, description.

## Code Layout
- `src/app/page.tsx` - Main page (summarized cards only).
- `src/app/projects/[slug]/page.tsx` - Dynamic project details page.
- `src/data/projects.ts` - English projects data.
- `src/components/...` - Reusable UI, IDE Navigation, Review cards, Skills grid.
