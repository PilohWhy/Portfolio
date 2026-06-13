# E2E Test Infra: portfolio_v3

## Test Philosophy
- **Opaque-Box & Requirement-Driven**: Tests are designed based on the functional requirements and user-visible behaviors, not internal code structures. They are independent of how elements are styled or built, focusing on accessible roles, text content, and interactive states.
- **Methodology**: Apply Category-Partition, Boundary Value Analysis (BVA), Pairwise testing of component combinations, and Workload/Scenario testing for holistic verification.
- **Framework**: Playwright with TypeScript, running tests against a local Next.js development/production server.

## Feature Inventory
| # | Feature | Source (Requirement) | Description | Tier 1 | Tier 2 | Tier 3 |
|---|---------|----------------------|-------------|:------:|:------:|:------:|
| **F1** | Dynamic Routing & Architecture | ORIGINAL_REQUEST §R1 | Clicking a project card redirects the user to `app/projects/[slug]/page.tsx` for full details, and the main page shows only summaries. | ✓ | ✓ | ✓ |
| **F2** | IDE-Style Navigation | ORIGINAL_REQUEST §R2 | Top navigation bar resembling a code editor. Includes decorative hover-highlighted tokens (`export`, `import`, `function`, `local`) that are non-clickable, and clickable navigation links. | ✓ | ✓ | ✓ |
| **F3** | Split-Layout Project Cards | ORIGINAL_REQUEST §R3 | Compact cards (max `h-64` or `h-72`) displaying an animated `lucide-react` + `framer-motion` graphic on the left and Title + short summary on the right. | ✓ | ✓ | ✓ |
| **F4** | Masonry Reviews Grid | ORIGINAL_REQUEST §R4 | Masonry grid displaying testimonial cards with the exact text quotes from `@VoidWalker`, `@Dev_Alex`, Studio Lead, and `@NightmareDev`. | ✓ | ✓ | ✓ |
| **F5** | JSON-Style About & Contact Section | ORIGINAL_REQUEST §R4 | Developer config/JSON-formatted block displaying About details, a Quote block, and Discord, Email, Roblox, GitHub, and Status. | ✓ | ✓ | ✓ |
| **F6** | Interactive Skills Grid | ORIGINAL_REQUEST §R4 | Grid displaying skills categorized into Low-Level & Engines, Luau & Roblox Ecosystem, Math & Algorithms, and Architecture, with visual icons. | ✓ | ✓ | ✓ |

## Test Architecture
- **Test Runner**: Playwright Test (`npx playwright test`)
- **Language**: TypeScript
- **Directory Layout**:
  - `tests/e2e/sanity.spec.ts` - Quick test runner and configuration sanity checks.
  - `tests/e2e/tier1_features.spec.ts` - Verifies the core functionality of F1 to F6 in isolation.
  - `tests/e2e/tier2_boundaries.spec.ts` - Tests boundary conditions, responsive viewports, missing/malformed inputs, and edge states.
  - `tests/e2e/tier3_pairwise.spec.ts` - Tests pairwise interactions (e.g., clicking navigation while routes transition, responsive layout changes under active scroll states).
  - `tests/e2e/tier4_scenarios.spec.ts` - Full-flow integration test scenarios representing real-world user journeys.

---

## Real-World Application Scenarios (Tier 4)
The following multi-feature integration scenarios model actual visitor behavior on the portfolio:

### 1. Recruiter Navigation and Project Deep Dive
- **Goal**: Verify that a technical recruiter can browse projects, read summaries, and successfully view detailed pages.
- **Flow**:
  1. Recruiter arrives on the homepage (`/`) and confirms the split-layout project cards (F3) display the expected titles.
  2. Recruiter clicks a project card (e.g., Movement system).
  3. Verify the URL routes to `/projects/movement` (F1) and that the page loads the full description.
  4. Recruiter uses the IDE navigation bar (F2) to return to the projects grid on the home page.
- **Complexity**: High (F1, F2, F3)

### 2. Interactive IDE Navigation Experience
- **Goal**: Confirm that the code editor navigation bar behaves exactly like an IDE interface, with correct distinction between decorative tokens and functional links.
- **Flow**:
  1. Visitor hovers over decorative tokens `export`, `import`, `function`, `local`. Verify hover highlight works, but they are not clickable/focusable.
  2. Visitor clicks on functional navigation links: `<About />`, `<Skills />`, `<Projects />`, `<Reviews />`, and `<Contact />`.
  3. Verify the browser triggers smooth scrolling to target sections or correct routing.
- **Complexity**: Medium (F2)

### 3. Responsive Layout & Reflow Audit
- **Goal**: Ensure that all sections reflow correctly on different viewports (Mobile, Tablet, Desktop) without breaking layout rules.
- **Flow**:
  1. Start on Desktop viewport (1280x800). Verify Masonry Reviews grid (F4) is aligned and project cards (F3) follow split-layout side-by-side format.
  2. Resize viewport to Mobile (375x667).
  3. Verify project cards stack vertically or adapt height, and Reviews grid displays in a readable single/double column structure.
  4. Verify the JSON About & Contact block (F5) is fully visible without horizontal scrollbar overflow.
- **Complexity**: Medium (F3, F4, F5)

### 4. Content Integrity & Anti-AI Verification
- **Goal**: Ensure the site contains the exact required text content and is free of generic marketing/AI-like filler.
- **Flow**:
  1. Navigate to the homepage.
  2. Assert the presence of the exact testimonial texts in the Masonry Reviews (F4) for `@VoidWalker`, `@Dev_Alex`, Studio Lead, and `@NightmareDev`.
  3. Verify the About & Contact block (F5) contains the correct JSON structure and field names (Discord, Email, Roblox, GitHub, Status).
  4. Perform an adversarial text scan to confirm no placeholder "lorem ipsum" or AI jargon exists.
- **Complexity**: Medium (F4, F5)

### 5. Multi-page Navigation History Journey
- **Goal**: Ensure that dynamic routing and browser history function correctly without state loss or navigation failures.
- **Flow**:
  1. Start at homepage (`/`).
  2. Click project card 1 (e.g., Custom C++ 3D Engine). Verify route is `/projects/cpp-3d-engine`.
  3. Use the browser back button. Verify we are back at `/`.
  4. Click project card 2 (e.g., Voxel Generation). Verify route is `/projects/voxel-generation`.
  5. Click browser back button, then forward button. Verify route updates and correct pages load.
- **Complexity**: High (F1, F3)

---

## Coverage & Quality Thresholds
- **Tier 1 (Core)**: 100% of functional requirements (F1-F6) covered.
- **Tier 2 (Boundaries)**: Handles mobile viewports down to 320px width, handles missing slug routes (returns 404 gracefully).
- **Tier 3 (Pairwise)**: Validates navigation under concurrent animation states.
- **Tier 4 (Scenarios)**: Execute 5 distinct multi-feature user flows.
