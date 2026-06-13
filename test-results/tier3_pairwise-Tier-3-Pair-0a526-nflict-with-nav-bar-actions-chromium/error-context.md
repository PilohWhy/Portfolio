# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tier3_pairwise.spec.ts >> Tier 3: Pairwise Combinations >> test 5: card hover Luau text does not conflict with nav bar actions
- Location: tests\e2e\tier3_pairwise.spec.ts:66:7

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
  43  |     await reviewsLink.click();
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
> 79  |     await expect(aboutSection).toBeInViewport();
      |                                ^ Error: expect(locator).toBeInViewport() failed
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