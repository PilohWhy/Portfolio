# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tier3_pairwise.spec.ts >> Tier 3: Pairwise Combinations >> test 3: navigating to nav tab from details subpage routes back and focuses
- Location: tests\e2e\tier3_pairwise.spec.ts:36:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('[data-testid="nav-link-reviews"], nav a[href*="reviews"]').first()

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - button "Open Next.js Dev Tools" [ref=e7] [cursor=pointer]:
    - img [ref=e8]
  - alert [ref=e11]
  - generic [ref=e13]:
    - generic [ref=e14]:
      - link "<-- Return to Workspace" [ref=e15] [cursor=pointer]:
        - /url: /
      - generic [ref=e16]: src/app/projects/engine-3d/page.tsx
    - banner [ref=e17]:
      - generic [ref=e18]: "// Category: Graphics & Scripting"
      - heading "Custom C++ 3D Engine & Luau VM" [level=1] [ref=e19]
    - generic [ref=e20]:
      - heading "Description" [level=2] [ref=e21]
      - paragraph [ref=e22]: Developed a custom low-level 3D game engine using Vulkan API with a strict focus on Data-Oriented Design. Focused on a low-overhead Vulkan rendering pipeline, emphasizing Data-Oriented Design (DOD) to maximize CPU cache spatial coherence. The Entity Component System (ECS) architecture, implemented using the EnTT library, was utilized for the deterministic separation of game state and logic, enabling high-performance, zero-cost iteration over massive structural datasets. Built a non-linear scene graph based on spatial relational components and integrated it with the continuous collision detection engine of the ReactPhysics3D library. Dynamic spatial transformations are reconciled via a custom three-phase pipeline (kinematic propagation, numerical physics update, and upward verification pass for raycasting vectors). The native runtime was extended with a fully sandboxed Luau VM with asynchronous function binding, enabling safe behavior hot-reloading in real-time without re-linking binaries. Tooling includes runtime dynamic type reflection, allowing the custom ImGui-based editor to automatically instantiate inspector panels and explorers for arbitrarily declared, memory-allocated components. Real-world durability is achieved via a custom snapshot serialization algorithm coupled with a heap manager abstraction that restores deserialized stale pointers within the physics engine.
    - generic [ref=e23]:
      - heading "Tech Stack" [level=2] [ref=e24]
      - generic [ref=e25]:
        - generic [ref=e26]: C++
        - generic [ref=e27]: Vulkan
        - generic [ref=e28]: EnTT
        - generic [ref=e29]: ReactPhysics3D
        - generic [ref=e30]: Luau
        - generic [ref=e31]: ImGui
        - generic [ref=e32]: CMake
    - generic [ref=e33]:
      - heading "Snippet" [level=2] [ref=e34]
      - code [ref=e36]: local p = workspace:FindFirstChild("CustomEngine3D")
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | test.describe('Tier 3: Pairwise Combinations', () => {
  4   |   test('test 1: project details navigation while animations are active', async ({ page }) => {
  5   |     await page.goto('/');
  6   |     const card = page.locator('[data-testid="project-card"]').first();
  7   |     await card.hover();
  8   |     // Click immediately during hover state
  9   |     await card.click();
  10  |     await page.waitForURL(/\/projects\/.+/);
  11  |     expect(page.url()).toContain('/projects/');
  12  |   });
  13  | 
  14  |   test('test 2: responsive grid resizing triggers column adjustments on projects and skills grids simultaneously', async ({ page }) => {
  15  |     await page.goto('/');
  16  |     const projectsGrid = page.locator('[data-testid="projects-grid"], main#projects, main >> .grid').first();
  17  |     const skillsGrid = page.locator('[data-testid="skills-grid"]').first();
  18  |     
  19  |     // Set to desktop layout
  20  |     await page.setViewportSize({ width: 1200, height: 800 });
  21  |     await expect(projectsGrid).toBeVisible();
  22  |     await expect(skillsGrid).toBeVisible();
  23  |     
  24  |     const desktopProjectsBox = await projectsGrid.boundingBox();
  25  |     const desktopSkillsBox = await skillsGrid.boundingBox();
  26  |     
  27  |     // Set to mobile layout
  28  |     await page.setViewportSize({ width: 320, height: 568 });
  29  |     const mobileProjectsBox = await projectsGrid.boundingBox();
  30  |     const mobileSkillsBox = await skillsGrid.boundingBox();
  31  |     
  32  |     expect(mobileProjectsBox?.width).toBeLessThan(desktopProjectsBox?.width || 1200);
  33  |     expect(mobileSkillsBox?.width).toBeLessThan(desktopSkillsBox?.width || 1200);
  34  |   });
  35  | 
  36  |   test('test 3: navigating to nav tab from details subpage routes back and focuses', async ({ page }) => {
  37  |     await page.goto('/');
  38  |     await page.locator('[data-testid="project-card"]').first().click();
  39  |     await page.waitForURL(/\/projects\/.+/);
  40  |     
  41  |     // Click reviews link in header navigation
  42  |     const reviewsLink = page.locator('[data-testid="nav-link-reviews"], nav a[href*="reviews"]').first();
> 43  |     await reviewsLink.click();
      |                       ^ Error: locator.click: Test timeout of 30000ms exceeded.
  44  |     
  45  |     // Should navigate back to homepage with hash or scroll target
  46  |     await page.waitForURL(/\/.*(#reviews|#|$)/);
  47  |     const reviewsGrid = page.locator('[data-testid="reviews-grid"]').first();
  48  |     await expect(reviewsGrid).toBeVisible();
  49  |   });
  50  | 
  51  |   test('test 4: JSON contact section visibility and position checks', async ({ page }) => {
  52  |     await page.goto('/');
  53  |     const projectsGrid = page.locator('[data-testid="projects-grid"], main#projects, main >> .grid').first();
  54  |     const contactSection = page.locator('[data-testid="contact-json"], [data-testid="contact-section"], #contact').first();
  55  |     
  56  |     await expect(projectsGrid).toBeVisible();
  57  |     await expect(contactSection).toBeVisible();
  58  |     
  59  |     const projectsBox = await projectsGrid.boundingBox();
  60  |     const contactBox = await contactSection.boundingBox();
  61  |     
  62  |     // Contact section should be positioned vertically below the projects grid
  63  |     expect(contactBox?.y).toBeGreaterThan(projectsBox?.y || 0);
  64  |   });
  65  | 
  66  |   test('test 5: card hover Luau text does not conflict with nav bar actions', async ({ page }) => {
  67  |     await page.goto('/');
  68  |     // Hover on a code snippet on card
  69  |     const snippet = page.locator('[data-testid="project-snippet"], .font-mono').first();
  70  |     if (await snippet.isVisible()) {
  71  |       await snippet.hover();
  72  |     }
  73  |     
  74  |     // Click About link in the navbar
  75  |     const aboutLink = page.locator('[data-testid="nav-link-about"], nav a[href*="about"]').first();
  76  |     await aboutLink.click();
  77  |     
  78  |     const aboutSection = page.locator('[data-testid="about-section"], #about').first();
  79  |     await expect(aboutSection).toBeInViewport();
  80  |   });
  81  | 
  82  |   test('test 6: responsive header font sizes during description text transitions', async ({ page }) => {
  83  |     await page.goto('/');
  84  |     await page.locator('[data-testid="project-card"]').first().click();
  85  |     await page.waitForURL(/\/projects\/.+/);
  86  |     
  87  |     const title = page.locator('[data-testid="project-title"], h1').first();
  88  |     
  89  |     // Change size during display
  90  |     await page.setViewportSize({ width: 1200, height: 800 });
  91  |     const desktopSize = await title.evaluate(el => window.getComputedStyle(el).fontSize);
  92  |     
  93  |     await page.setViewportSize({ width: 320, height: 568 });
  94  |     const mobileSize = await title.evaluate(el => window.getComputedStyle(el).fontSize);
  95  |     
  96  |     // Font size should adapt (mobile is usually smaller)
  97  |     const desktopPx = parseFloat(desktopSize);
  98  |     const mobilePx = parseFloat(mobileSize);
  99  |     expect(mobilePx).toBeLessThanOrEqual(desktopPx);
  100 |   });
  101 | });
  102 | 
```