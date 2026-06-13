# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tier1_features.spec.ts >> F3: Dynamic Routing >> test 12: details page shows full description
- Location: tests\e2e\tier1_features.spec.ts:100:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('[data-testid="project-description"]')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('[data-testid="project-description"]')

```

```yaml
- alert
- link "<-- Return to Workspace":
  - /url: /
- text: src/app/projects/engine-3d/page.tsx
- banner:
  - text: "// Category: Graphics & Scripting"
  - heading "Custom C++ 3D Engine & Luau VM" [level=1]
- heading "Description" [level=2]
- paragraph: Developed a custom low-level 3D game engine using Vulkan API with a strict focus on Data-Oriented Design. Focused on a low-overhead Vulkan rendering pipeline, emphasizing Data-Oriented Design (DOD) to maximize CPU cache spatial coherence. The Entity Component System (ECS) architecture, implemented using the EnTT library, was utilized for the deterministic separation of game state and logic, enabling high-performance, zero-cost iteration over massive structural datasets. Built a non-linear scene graph based on spatial relational components and integrated it with the continuous collision detection engine of the ReactPhysics3D library. Dynamic spatial transformations are reconciled via a custom three-phase pipeline (kinematic propagation, numerical physics update, and upward verification pass for raycasting vectors). The native runtime was extended with a fully sandboxed Luau VM with asynchronous function binding, enabling safe behavior hot-reloading in real-time without re-linking binaries. Tooling includes runtime dynamic type reflection, allowing the custom ImGui-based editor to automatically instantiate inspector panels and explorers for arbitrarily declared, memory-allocated components. Real-world durability is achieved via a custom snapshot serialization algorithm coupled with a heap manager abstraction that restores deserialized stale pointers within the physics engine.
- heading "Tech Stack" [level=2]
- text: C++ Vulkan EnTT ReactPhysics3D Luau ImGui CMake
- heading "Snippet" [level=2]
- code: local p = workspace:FindFirstChild("CustomEngine3D")
```

# Test source

```ts
  9   |     const kw = page.locator('[data-testid="keyword-export"], nav >> text="export"').first();
  10  |     await expect(kw).toBeVisible();
  11  |   });
  12  | 
  13  |   test('test 2: import keyword visible', async ({ page }) => {
  14  |     const kw = page.locator('[data-testid="keyword-import"], nav >> text="import"').first();
  15  |     await expect(kw).toBeVisible();
  16  |   });
  17  | 
  18  |   test('test 3: function keyword visible', async ({ page }) => {
  19  |     const kw = page.locator('[data-testid="keyword-function"], nav >> text="function"').first();
  20  |     await expect(kw).toBeVisible();
  21  |   });
  22  | 
  23  |   test('test 4: local keyword visible', async ({ page }) => {
  24  |     const kw = page.locator('[data-testid="keyword-local"], nav >> text="local"').first();
  25  |     await expect(kw).toBeVisible();
  26  |   });
  27  | 
  28  |   test('test 5: clickable routing links are visible and hoverable', async ({ page }) => {
  29  |     const links = [
  30  |       { testId: 'nav-link-about', text: 'about' },
  31  |       { testId: 'nav-link-skills', text: 'skills' },
  32  |       { testId: 'nav-link-projects', text: 'projects' },
  33  |       { testId: 'nav-link-reviews', text: 'reviews' },
  34  |       { testId: 'nav-link-contact', text: 'contact' },
  35  |     ];
  36  | 
  37  |     for (const link of links) {
  38  |       const el = page.locator(`[data-testid="${link.testId}"], nav a:has-text("${link.text}")`).first();
  39  |       await expect(el).toBeVisible();
  40  |       await el.hover();
  41  |     }
  42  | 
  43  |     const initialUrl = page.url();
  44  |     const kw = page.locator('[data-testid="keyword-export"], nav >> text="export"').first();
  45  |     await kw.click({ force: true });
  46  |     expect(page.url()).toBe(initialUrl);
  47  |   });
  48  | });
  49  | 
  50  | test.describe('F2: Main Page Summarized Cards', () => {
  51  |   test.beforeEach(async ({ page }) => {
  52  |     await page.goto('/');
  53  |   });
  54  | 
  55  |   test('test 6: project cards display on main page', async ({ page }) => {
  56  |     const cards = page.locator('[data-testid="project-card"]');
  57  |     await expect(cards.first()).toBeVisible();
  58  |   });
  59  | 
  60  |   test('test 7: cards use snippet and not full description', async ({ page }) => {
  61  |     const card = page.locator('[data-testid="project-card"]').first();
  62  |     await expect(card).toBeVisible();
  63  |     
  64  |     const snippet = card.locator('[data-testid="project-snippet"]');
  65  |     await expect(snippet.or(card.locator('.font-mono'))).toBeVisible();
  66  |     
  67  |     const fullDescPart = "Developed a custom low-level 3D game engine using Vulkan API with a strict focus on Data-Oriented Design";
  68  |     const text = await card.textContent();
  69  |     expect(text).not.toContain(fullDescPart);
  70  |   });
  71  | 
  72  |   test('test 8: exactly 5 projects are rendered', async ({ page }) => {
  73  |     const cards = page.locator('[data-testid="project-card"]');
  74  |     await expect(cards).toHaveCount(5);
  75  |   });
  76  | 
  77  |   test('test 9: cards have hover animation cues', async ({ page }) => {
  78  |     const card = page.locator('[data-testid="project-card"]').first();
  79  |     const className = await card.getAttribute('class');
  80  |     expect(className).toMatch(/(transition|duration|hover:|transform|group)/);
  81  |   });
  82  | 
  83  |   test('test 10: compact cards layout matches bento/grid design', async ({ page }) => {
  84  |     const grid = page.locator('[data-testid="projects-grid"], main#projects, main >> .grid').first();
  85  |     await expect(grid).toBeVisible();
  86  |     const className = await grid.getAttribute('class');
  87  |     expect(className).toContain('grid');
  88  |   });
  89  | });
  90  | 
  91  | test.describe('F3: Dynamic Routing', () => {
  92  |   test('test 11: clicking a card routes to /projects/[slug]', async ({ page }) => {
  93  |     await page.goto('/');
  94  |     const card = page.locator('[data-testid="project-card"]').first();
  95  |     await card.click();
  96  |     await page.waitForURL(/\/projects\/.+/);
  97  |     expect(page.url()).toContain('/projects/');
  98  |   });
  99  | 
  100 |   test('test 12: details page shows full description', async ({ page }) => {
  101 |     await page.goto('/');
  102 |     const card = page.locator('[data-testid="project-card"]').first();
  103 |     const snippetText = await card.locator('[data-testid="project-snippet"], .font-mono').first().textContent();
  104 |     
  105 |     await card.click();
  106 |     await page.waitForURL(/\/projects\/.+/);
  107 |     
  108 |     const desc = page.locator('[data-testid="project-description"]');
> 109 |     await expect(desc).toBeVisible();
      |                        ^ Error: expect(locator).toBeVisible() failed
  110 |     const descText = await desc.textContent();
  111 |     expect(descText?.length).toBeGreaterThan(snippetText?.length || 0);
  112 |   });
  113 | 
  114 |   test('test 13: details page displays metadata', async ({ page }) => {
  115 |     await page.goto('/');
  116 |     await page.locator('[data-testid="project-card"]').first().click();
  117 |     await page.waitForURL(/\/projects\/.+/);
  118 | 
  119 |     const role = page.locator('[data-testid="project-role"]');
  120 |     const timeline = page.locator('[data-testid="project-timeline"]');
  121 |     const tech = page.locator('[data-testid="project-technologies"]');
  122 | 
  123 |     await expect(role).toBeVisible();
  124 |     await expect(timeline).toBeVisible();
  125 |     await expect(tech).toBeVisible();
  126 |   });
  127 | 
  128 |   test('test 14: details page displays challenges and solutions', async ({ page }) => {
  129 |     await page.goto('/');
  130 |     await page.locator('[data-testid="project-card"]').first().click();
  131 |     await page.waitForURL(/\/projects\/.+/);
  132 | 
  133 |     const challenges = page.locator('[data-testid="project-challenges"]');
  134 |     const solutions = page.locator('[data-testid="project-solutions"]');
  135 | 
  136 |     await expect(challenges).toBeVisible();
  137 |     await expect(solutions).toBeVisible();
  138 |   });
  139 | 
  140 |   test('test 15: back button/close returns to main page', async ({ page }) => {
  141 |     await page.goto('/');
  142 |     await page.locator('[data-testid="project-card"]').first().click();
  143 |     await page.waitForURL(/\/projects\/.+/);
  144 | 
  145 |     const backButton = page.locator('[data-testid="back-button"]');
  146 |     await backButton.click();
  147 |     await page.waitForURL(/\/$/);
  148 |     expect(page.url().endsWith('/')).toBe(true);
  149 |   });
  150 | });
  151 | 
  152 | test.describe('F4: Reviews Masonry Grid', () => {
  153 |   test.beforeEach(async ({ page }) => {
  154 |     await page.goto('/');
  155 |   });
  156 | 
  157 |   test('test 16: reviews grid exists', async ({ page }) => {
  158 |     const grid = page.locator('[data-testid="reviews-grid"]');
  159 |     await expect(grid).toBeVisible();
  160 |   });
  161 | 
  162 |   test('test 17: exact text for @VoidWalker review', async ({ page }) => {
  163 |     const text = `"Insane work on the combat framework. the movement feels buttery smooth. totally worth the price, tho took a bit longer than expected to iron out the bugs. 4.5/5" - @VoidWalker`;
  164 |     const review = page.locator(`[data-testid="review-card-voidwalker"], [data-testid="review-card"]:has-text("@VoidWalker")`).first();
  165 |     await expect(review).toBeVisible();
  166 |     await expect(review).toContainText(text);
  167 |   });
  168 | 
  169 |   test('test 18: exact text for @Dev_Alex review', async ({ page }) => {
  170 |     const text = `"bro's low level knowledge is crazy. helped me optimize my voxel game from 20fps to steady 60. highly recommend. 5/5" - @Dev_Alex`;
  171 |     const review = page.locator(`[data-testid="review-card-devalex"], [data-testid="review-card"]:has-text("@Dev_Alex")`).first();
  172 |     await expect(review).toBeVisible();
  173 |     await expect(review).toContainText(text);
  174 |   });
  175 | 
  176 |   test('test 19: exact text for Studio Lead review', async ({ page }) => {
  177 |     const text = `"Very professional. The custom Luau VM integration was exactly what our engine needed. Clean code, well documented. 5/5" - Studio Lead (NDA)`;
  178 |     const review = page.locator(`[data-testid="review-card-studiolead"], [data-testid="review-card"]:has-text("Studio Lead (NDA)")`).first();
  179 |     await expect(review).toBeVisible();
  180 |     await expect(review).toContainText(text);
  181 |   });
  182 | 
  183 |   test('test 20: exact text for @NightmareDev review', async ({ page }) => {
  184 |     const text = `"the horror systems he coded are terrifyingly good. fake lag and audio manipulation worked flawlessly on production. 5/5" - @NightmareDev`;
  185 |     const review = page.locator(`[data-testid="review-card-nightmaredev"], [data-testid="review-card"]:has-text("@NightmareDev")`).first();
  186 |     await expect(review).toBeVisible();
  187 |     await expect(review).toContainText(text);
  188 |   });
  189 | });
  190 | 
  191 | test.describe('F5: Skills Grid Layout', () => {
  192 |   test.beforeEach(async ({ page }) => {
  193 |     await page.goto('/');
  194 |   });
  195 | 
  196 |   test('test 21: skills grid exists', async ({ page }) => {
  197 |     const grid = page.locator('[data-testid="skills-grid"]');
  198 |     await expect(grid).toBeVisible();
  199 |   });
  200 | 
  201 |   test('test 22: Low-Level & Engines card with visual icon exists', async ({ page }) => {
  202 |     const card = page.locator('[data-testid="skill-card-low-level"], [data-testid="skill-card"]:has-text("Low-Level & Engines")').first();
  203 |     await expect(card).toBeVisible();
  204 |     const icon = card.locator('svg, img').first();
  205 |     await expect(icon).toBeVisible();
  206 |   });
  207 | 
  208 |   test('test 23: Luau & Roblox Ecosystem card with visual icon exists', async ({ page }) => {
  209 |     const card = page.locator('[data-testid="skill-card-luau"], [data-testid="skill-card"]:has-text("Luau & Roblox Ecosystem")').first();
```