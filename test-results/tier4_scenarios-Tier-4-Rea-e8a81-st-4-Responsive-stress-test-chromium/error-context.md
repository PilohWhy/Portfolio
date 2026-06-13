# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tier4_scenarios.spec.ts >> Tier 4: Real-World Visitor Walkthrough Scenarios >> test 4: Responsive stress-test
- Location: tests\e2e\tier4_scenarios.spec.ts:94:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('[data-testid="back-button"]').first()

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
  11  |     await expect(contactSection).toContainText('Roblox');
  12  |     await expect(contactSection).toContainText('GitHub');
  13  | 
  14  |     // 3. Verifies Roblox link structure and attribute
  15  |     const robloxLink = page.locator('a[href*="roblox.com"]').first();
  16  |     await expect(robloxLink).toBeVisible();
  17  |     expect(await robloxLink.getAttribute('target')).toBe('_blank');
  18  | 
  19  |     // 4. Click a project card to check full details
  20  |     const card = page.locator('[data-testid="project-card"]').first();
  21  |     await card.click();
  22  |     await page.waitForURL(/\/projects\/.+/);
  23  | 
  24  |     // 5. Verify the details page content loads correctly
  25  |     const title = page.locator('[data-testid="project-title"], h1').first();
  26  |     const desc = page.locator('[data-testid="project-description"]').first();
  27  |     await expect(title).toBeVisible();
  28  |     await expect(desc).toBeVisible();
  29  | 
  30  |     // 6. Navigate back to home
  31  |     const backButton = page.locator('[data-testid="back-button"]').first();
  32  |     await backButton.click();
  33  |     await page.waitForURL(/\/$/);
  34  |   });
  35  | 
  36  |   test('test 2: Developer walkthrough', async ({ page }) => {
  37  |     // 1. Developer arrives on home page
  38  |     await page.goto('/');
  39  | 
  40  |     // 2. Inspect IDE navbar keywords
  41  |     const keywords = ['export', 'import', 'function', 'local'];
  42  |     for (const kw of keywords) {
  43  |       const locator = page.locator(`[data-testid="keyword-${kw}"], nav >> text="${kw}"`).first();
  44  |       await expect(locator).toBeVisible();
  45  |       await locator.hover();
  46  |       
  47  |       // Clicking the keyword does not navigate/change url
  48  |       const urlBefore = page.url();
  49  |       await locator.click({ force: true });
  50  |       expect(page.url()).toBe(urlBefore);
  51  |     }
  52  | 
  53  |     // 3. Inspect skills grid cards & icons
  54  |     const skillsGrid = page.locator('[data-testid="skills-grid"]').first();
  55  |     await expect(skillsGrid).toBeVisible();
  56  |     
  57  |     const skillCard = page.locator('[data-testid^="skill-card-"], [data-testid="skill-card"]').first();
  58  |     await expect(skillCard).toBeVisible();
  59  |     await skillCard.hover();
  60  | 
  61  |     const icon = skillCard.locator('svg, img').first();
  62  |     await expect(icon).toBeVisible();
  63  |   });
  64  | 
  65  |   test('test 3: Client review walkthrough', async ({ page }) => {
  66  |     // 1. Arrive on home page
  67  |     await page.goto('/');
  68  | 
  69  |     // 2. Verify reviews grid exists
  70  |     const grid = page.locator('[data-testid="reviews-grid"]').first();
  71  |     await expect(grid).toBeVisible();
  72  | 
  73  |     // 3. Verify exact text for Studio Lead review
  74  |     const studioLeadText = `"Very professional. The custom Luau VM integration was exactly what our engine needed. Clean code, well documented. 5/5" - Studio Lead (NDA)`;
  75  |     const studioLeadCard = page.locator(`[data-testid="review-card-studiolead"], [data-testid="review-card"]:has-text("Studio Lead")`).first();
  76  |     await expect(studioLeadCard).toBeVisible();
  77  |     await expect(studioLeadCard).toContainText(studioLeadText);
  78  | 
  79  |     // 4. Verify other reviews exist
  80  |     const otherReview = page.locator(`[data-testid="review-card-voidwalker"], [data-testid="review-card"]:has-text("VoidWalker")`).first();
  81  |     await expect(otherReview).toBeVisible();
  82  | 
  83  |     // 5. Clicks project card to verify challenges & solutions
  84  |     const card = page.locator('[data-testid="project-card"]').first();
  85  |     await card.click();
  86  |     await page.waitForURL(/\/projects\/.+/);
  87  |     
  88  |     const challenges = page.locator('[data-testid="project-challenges"]').first();
  89  |     const solutions = page.locator('[data-testid="project-solutions"]').first();
  90  |     await expect(challenges).toBeVisible();
  91  |     await expect(solutions).toBeVisible();
  92  |   });
  93  | 
  94  |   test('test 4: Responsive stress-test', async ({ page }) => {
  95  |     // 1. Start on Desktop
  96  |     await page.setViewportSize({ width: 1280, height: 800 });
  97  |     await page.goto('/');
  98  | 
  99  |     // 2. Click project details
  100 |     const card = page.locator('[data-testid="project-card"]').first();
  101 |     await card.click();
  102 |     await page.waitForURL(/\/projects\/.+/);
  103 | 
  104 |     // 3. Resize to Mobile on details page
  105 |     await page.setViewportSize({ width: 320, height: 568 });
  106 |     const title = page.locator('[data-testid="project-title"], h1').first();
  107 |     await expect(title).toBeVisible();
  108 | 
  109 |     // 4. Click back button on mobile
  110 |     const backButton = page.locator('[data-testid="back-button"]').first();
> 111 |     await backButton.click();
      |                      ^ Error: locator.click: Test timeout of 30000ms exceeded.
  112 |     await page.waitForURL(/\/$/);
  113 | 
  114 |     // 5. Verify home page layout at mobile width
  115 |     const projectsGrid = page.locator('[data-testid="projects-grid"], main#projects, main >> .grid').first();
  116 |     await expect(projectsGrid).toBeVisible();
  117 |     const box = await projectsGrid.boundingBox();
  118 |     expect(box?.width).toBeLessThanOrEqual(330);
  119 | 
  120 |     // 6. Resize back to Desktop
  121 |     await page.setViewportSize({ width: 1280, height: 800 });
  122 |     await expect(projectsGrid).toBeVisible();
  123 |   });
  124 | 
  125 |   test('test 5: Navigation cycle consistency', async ({ page }) => {
  126 |     // 1. Arrive on homepage
  127 |     await page.goto('/');
  128 | 
  129 |     // 2. Click all nav tabs sequentially
  130 |     const links = ['about', 'skills', 'projects', 'reviews', 'contact'];
  131 |     for (const text of links) {
  132 |       const link = page.locator(`[data-testid="nav-link-${text}"], nav a[href*="${text}"]`).first();
  133 |       if (await link.isVisible()) {
  134 |         await link.click();
  135 |       }
  136 |     }
  137 | 
  138 |     // 3. Deep reload home page
  139 |     await page.reload();
  140 |     await expect(page.locator('[data-testid="project-card"]').first()).toBeVisible();
  141 | 
  142 |     // 4. Click project details
  143 |     await page.locator('[data-testid="project-card"]').first().click();
  144 |     await page.waitForURL(/\/projects\/.+/);
  145 | 
  146 |     // 5. Deep reload details page
  147 |     await page.reload();
  148 |     const title = page.locator('[data-testid="project-title"], h1').first();
  149 |     await expect(title).toBeVisible();
  150 | 
  151 |     // 6. Return back to homepage
  152 |     const backButton = page.locator('[data-testid="back-button"]').first();
  153 |     await backButton.click();
  154 |     await page.waitForURL(/\/$/);
  155 |   });
  156 | });
  157 | 
```