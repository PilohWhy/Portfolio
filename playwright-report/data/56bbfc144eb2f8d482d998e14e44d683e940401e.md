# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tier2_boundaries.spec.ts >> F1 Edge Cases >> test 4: scrolling layout check
- Location: tests\e2e\tier2_boundaries.spec.ts:36:7

# Error details

```
Error: expect(locator).toBeInViewport() failed

Locator: locator('[data-testid="about-section"], #about').first()
Expected: in viewport
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeInViewport" with timeout 5000ms
  - waiting for locator('[data-testid="about-section"], #about').first()

```

```yaml
- navigation:
  - link "about.luau":
    - /url: "#about"
  - link "skills.config":
    - /url: "#skills"
  - link "projects.json":
    - /url: "#projects"
  - link "contact.sh":
    - /url: "#contact"
  - text: export import function local
- text: workspace > src > data > projects.json
- banner:
  - heading "dependencies.json" [level=1]
  - paragraph: // require("contact").init()
- main:
  - heading "Portfolio Projects" [level=2]
  - link:
    - /url: /projects/engine-3d
    - article:
      - text: "// Graphic WIP_RENDER_BUFFER_EMPTY -- [[ TYPE: GRAPHICS & SCRIPTING ]]"
      - heading "Custom C++ 3D Engine & Luau VM" [level=3]
      - paragraph: Developed a custom low-level 3D game engine using Vulkan API with a strict focus on Data-Oriented Design. Focused on a low-overhead Vulkan rendering pipeline, emphasizing Data-Oriented Design (DOD) to maximize CPU cache spatial coherence. The Entity Component System (ECS) architecture, implemented using the EnTT library, was utilized for the deterministic separation of game state and logic, enabling high-performance, zero-cost iteration over massive structural datasets. Built a non-linear scene graph based on spatial relational components and integrated it with the continuous collision detection engine of the ReactPhysics3D library. Dynamic spatial transformations are reconciled via a custom three-phase pipeline (kinematic propagation, numerical physics update, and upward verification pass for raycasting vectors). The native runtime was extended with a fully sandboxed Luau VM with asynchronous function binding, enabling safe behavior hot-reloading in real-time without re-linking binaries. Tooling includes runtime dynamic type reflection, allowing the custom ImGui-based editor to automatically instantiate inspector panels and explorers for arbitrarily declared, memory-allocated components. Real-world durability is achieved via a custom snapshot serialization algorithm coupled with a heap manager abstraction that restores deserialized stale pointers within the physics engine.
      - text: "localtech = {\"C++\", \"Vulkan\", \"EnTT\", \"ReactPhysics3D\", \"Luau\", \"ImGui\", \"CMake\"}"
  - link:
    - /url: /projects/voxel-gen
    - article:
      - text: "// Graphic // TODO: Asset Load -- [[ TYPE: PROCEDURAL GENERATION ]]"
      - heading "80k x 80k Procedural Voxel Generation" [level=3]
      - paragraph: Designed and implemented a highly optimized, multi-threaded procedural generation system capable of deterministically synthesizing giant voxel landscapes spanning 80,000 by 80,000 spatial units. The architecture utilizes a distributed, asynchronous Actor-Pull model in the Parallel Luau ecosystem, where a central dispatcher coordinates task prioritization using a spiral index mapping algorithm. SharedTable structures are utilized to pass data between threads with zero memory-copying overhead. Terrain topology is evaluated using multi-octave Perlin noise integrated with multi-dimensional domain warping, applying non-linear mathematical filters to eliminate vector singularities and grid artifacts at coordinate extremes. To circumvent the platform's strict memory allocation constraints (which would otherwise result in a 26GB memory footprint), I designed a dynamic shell thickness estimator to prune the internal octree. By analyzing local topological gradients, the system dynamically adjusts octree depths, forcing Empty Mips compression in deep subterranean structures while preserving fine details on high-contrast vertical cliffs. Additional features include custom I/O pathways that bypass standard diagnostic memory dump cycles, a failsafe deadlock detection subsystem, and a hybrid plugin context that allows direct serialization of billions of voxels to static persistent memory.
      - text: "localtech = {\"Parallel Luau\", \"Octree\", \"Perlin Noise\", \"Actor-Pull\"}"
  - link:
    - /url: /projects/horror-game
    - article:
      - text: "// Graphic WIP_RENDER_BUFFER_EMPTY -- [[ TYPE: ARCHITECTURE ]]"
      - heading "Asymmetric Psychological Horror Architecture" [level=3]
      - paragraph: Designed and implemented a production-grade, highly modular systems architecture for an asymmetric psychological horror game using the Luau language. Using Rojo for environment management and Wally for package dependencies, the business logic was completely isolated from visual components. Client-server communications are managed via Knit RPC services, minimizing transmission payload overhead. Data persistence is managed via ProfileService, integrating session-locking and Promise-based exception handlers to eliminate race conditions. The user interface was built using the Fusion library, yielding declarative, reactive HUD components that avoid manual tree mutations. Built a multi-threaded player proximity profiling engine running on the Heartbeat cycle. The dynamic isolation indices are calculated in real-time to drive sensory payloads on client devices. Implemented an artificial latency simulation (fake lag) system through busy-waiting locks in the RenderStepped loop, as well as an algorithmic spatial audio deconstruction filter utilizing non-linear TweenService interpolation. Developed a real-time text obfuscation parser that uses stochastic variables to emulate typoglycemia and typing latency, injecting modified packets directly into the client's TextChatService.
      - text: "localtech = {\"Luau\", \"Rojo\", \"Wally\", \"Knit\", \"ProfileService\", \"Fusion\"}"
  - link:
    - /url: /projects/melee-combat
    - article:
      - text: "// Graphic // TODO: Asset Load -- [[ TYPE: GAMEPLAY FRAMEWORK ]]"
      - heading "Deterministic Melee Combat Framework" [level=3]
      - paragraph: Engineered a robust, deterministic melee combat framework using Rojo and Wally. Orchestrated game state transitions via custom asynchronous loops and Promises. The core includes a character kinematics controller overriding default physics behavior in favor of custom momentum vector manipulation. Designed strict spatial validation, blocking jump/dash combinations on the Y-axis when the avatar is airborne. Built a fatigue calculator that decays jump velocity on successive inputs, enforcing a non-linear respiratory cooldown. Hit registration features directional validation based on the dot product of relative player vectors. Frontal-cone block state procedurally absorbs damage, while rear attacks bypass defense and trigger speed-throttling. The strike sequences are driven by a Finite State Machine (FSM) enabling smooth, low-latency chaining between dashes and M1 attacks. Implemented a separate local camera controller utilizing rotation matrices for unrestricted view angles during translation movements. Designed an asynchronous HUD that subscribes directly to cooldown states, utilizing UIGradient clipping masks to display millisecond-accurate skill recovery. Procedural rendering effects are triggered asynchronously upon hit validation.
      - text: "localtech = {\"Luau\", \"Rojo\", \"Promises\", \"FSM\", \"Raycasting\"}"
  - link:
    - /url: /projects/adv-movement
    - article:
      - text: "// Graphic WIP_RENDER_BUFFER_EMPTY -- [[ TYPE: ANIMATION & MOVEMENT ]]"
      - heading "Advanced Movement & Animation System" [level=3]
      - paragraph: Developed a comprehensive movement and locomotion system based on a custom character state coordinator and a dynamic animation controller. The primary challenge lay in integrating over 30 separate animations (sprinting, sliding, dashing, vaulting, landing) and ensuring seamless blending and transition states. Constructed a user input routing layer mapping keystrokes to specific physical forces. Implemented a central state coordinator to handle execution priorities and eliminate state conflicts (e.g., preventing sliding during a mid-air dash). Built an animation manager to synchronize physical states with appropriate AnimationTracks. The manager handles track weights, playback priority levels, and transition smoothing to avoid visual snaps. Optimized client performance by minimizing concurrently active animation tracks. Individual physics sub-modules handle specialized movement forces, including slide friction and dash velocity vectors. Built modularly to allow simple additions of new actions. The final product resembles mechanics found in modern fast-paced action titles, delivering high responsiveness, clean animation blending, and modular scalability.
      - text: "localtech = {\"Roblox API\", \"State Machine\", \"AnimationTracks\"}"
- alert
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | test.describe('F1 Edge Cases', () => {
  4   |   test('test 1: narrow viewport navigation behavior', async ({ page }) => {
  5   |     await page.setViewportSize({ width: 320, height: 568 });
  6   |     await page.goto('/');
  7   |     
  8   |     // IDE Nav tab bar or mobile menu should be visible or readable
  9   |     const nav = page.locator('nav').first();
  10  |     await expect(nav).toBeVisible();
  11  |   });
  12  | 
  13  |   test('test 2: click-triggers on non-clickable keywords', async ({ page }) => {
  14  |     await page.goto('/');
  15  |     const initialUrl = page.url();
  16  |     const keyword = page.locator('[data-testid="keyword-export"], nav >> text="export"').first();
  17  |     await keyword.click({ force: true });
  18  |     expect(page.url()).toBe(initialUrl);
  19  |   });
  20  | 
  21  |   test('test 3: rapid nav link clicking', async ({ page }) => {
  22  |     await page.goto('/');
  23  |     const links = ['[data-testid="nav-link-about"]', '[data-testid="nav-link-skills"]', '[data-testid="nav-link-projects"]', '[data-testid="nav-link-reviews"]', '[data-testid="nav-link-contact"]'];
  24  |     
  25  |     // Rapidly click all links
  26  |     for (const selector of links) {
  27  |       const el = page.locator(selector).first();
  28  |       if (await el.isVisible()) {
  29  |         await el.click().catch(() => {});
  30  |       }
  31  |     }
  32  |     // Verify page state has not crashed
  33  |     await expect(page.locator('body')).toBeVisible();
  34  |   });
  35  | 
  36  |   test('test 4: scrolling layout check', async ({ page }) => {
  37  |     await page.goto('/');
  38  |     const aboutLink = page.locator('[data-testid="nav-link-about"], nav a[href="#about"]').first();
  39  |     await aboutLink.click();
  40  |     
  41  |     // Let's verify the viewport has scrolled or the element has focus
  42  |     const aboutSection = page.locator('[data-testid="about-section"], #about').first();
> 43  |     await expect(aboutSection).toBeInViewport();
      |                                ^ Error: expect(locator).toBeInViewport() failed
  44  |   });
  45  | 
  46  |   test('test 5: missing/invalid anchor routing', async ({ page }) => {
  47  |     await page.goto('/#invalid-anchor-xyz');
  48  |     await expect(page.locator('body')).toBeVisible();
  49  |   });
  50  | });
  51  | 
  52  | test.describe('F2 Edge Cases', () => {
  53  |   test('test 6: long snippet text wrapping', async ({ page }) => {
  54  |     await page.goto('/');
  55  |     const card = page.locator('[data-testid="project-card"]').first();
  56  |     const snippet = card.locator('[data-testid="project-snippet"], .font-mono').first();
  57  |     await expect(snippet).toBeVisible();
  58  |     
  59  |     // Verify it doesn't break styling (has class or overflow settings)
  60  |     const className = await snippet.getAttribute('class');
  61  |     // It should either be wrapped or configured with a scroll/overflow class
  62  |     expect(className || '').toMatch(/(wrap|scroll|overflow|font-mono|text|truncate|line-clamp)/);
  63  |   });
  64  | 
  65  |   test('test 7: bento box scaling at 320px width', async ({ page }) => {
  66  |     await page.setViewportSize({ width: 320, height: 568 });
  67  |     await page.goto('/');
  68  |     
  69  |     const grid = page.locator('[data-testid="projects-grid"], main#projects, main >> .grid').first();
  70  |     await expect(grid).toBeVisible();
  71  |     
  72  |     // Ensure width of the grid does not exceed screen width significantly
  73  |     const box = await grid.boundingBox();
  74  |     expect(box?.width).toBeLessThanOrEqual(330);
  75  |   });
  76  | 
  77  |   test('test 8: zoom layout stability (200%)', async ({ page }) => {
  78  |     // Emulate a very wide/zoomed screen resolution
  79  |     await page.setViewportSize({ width: 2560, height: 1440 });
  80  |     await page.goto('/');
  81  |     const grid = page.locator('[data-testid="projects-grid"], main#projects, main >> .grid').first();
  82  |     await expect(grid).toBeVisible();
  83  |   });
  84  | 
  85  |   test('test 9: hover response under touch devices', async ({ context }) => {
  86  |     // Create new touch-enabled page
  87  |     const touchPage = await context.newPage();
  88  |     await touchPage.setViewportSize({ width: 375, height: 667 });
  89  |     await touchPage.goto('/');
  90  |     
  91  |     const card = touchPage.locator('[data-testid="project-card"]').first();
  92  |     await expect(card).toBeVisible();
  93  |     
  94  |     // Touch tap
  95  |     await card.tap().catch(() => card.click());
  96  |     await touchPage.waitForURL(/\/projects\/.+/);
  97  |     expect(touchPage.url()).toContain('/projects/');
  98  |     await touchPage.close();
  99  |   });
  100 | 
  101 |   test('test 10: card rendering stability with special characters', async ({ page }) => {
  102 |     await page.goto('/');
  103 |     const textContent = await page.locator('[data-testid="projects-grid"], main#projects').textContent();
  104 |     // Ensure C++ and other details render cleanly without template syntax leakage
  105 |     expect(textContent).not.toContain('{{');
  106 |     expect(textContent).not.toContain('${');
  107 |   });
  108 | });
  109 | 
  110 | test.describe('F3 Edge Cases', () => {
  111 |   test('test 11: navigate to invalid slug (404/redirect)', async ({ page }) => {
  112 |     await page.goto('/projects/this-slug-does-not-exist');
  113 |     // Next.js standard not found UI or custom 404 message should be visible
  114 |     const body = page.locator('body');
  115 |     await expect(body).toContainText(/(404|not found|Return|Home|Workspace)/i);
  116 |   });
  117 | 
  118 |   test('test 12: direct load of project URL (deep-linking)', async ({ page }) => {
  119 |     // Find a slug first by loading main page, or navigate to a known fallback slug
  120 |     await page.goto('/');
  121 |     const card = page.locator('[data-testid="project-card"]').first();
  122 |     // Try to get href or data-slug
  123 |     const href = await card.getAttribute('href');
  124 |     const targetUrl = href ? href : '/projects/custom-cpp-3d-engine-luau-vm';
  125 |     
  126 |     await page.goto(targetUrl);
  127 |     const title = page.locator('[data-testid="project-title"], h1').first();
  128 |     await expect(title).toBeVisible();
  129 |   });
  130 | 
  131 |   test('test 13: browser back/forward history tracking', async ({ page }) => {
  132 |     await page.goto('/');
  133 |     const initialUrl = page.url();
  134 |     
  135 |     const card = page.locator('[data-testid="project-card"]').first();
  136 |     await card.click();
  137 |     await page.waitForURL(/\/projects\/.+/);
  138 |     
  139 |     // Go back
  140 |     await page.goBack();
  141 |     await page.waitForURL(initialUrl);
  142 |     expect(page.url()).toBe(initialUrl);
  143 |     
```