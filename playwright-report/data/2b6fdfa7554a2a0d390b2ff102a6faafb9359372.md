# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tier1_features.spec.ts >> F1: Dev Vocabulary / IDE Navigation >> test 5: clickable routing links are visible and hoverable
- Location: tests\e2e\tier1_features.spec.ts:28:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('[data-testid="nav-link-reviews"], nav a:has-text("reviews")').first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('[data-testid="nav-link-reviews"], nav a:has-text("reviews")').first()

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
  3   | test.describe('F1: Dev Vocabulary / IDE Navigation', () => {
  4   |   test.beforeEach(async ({ page }) => {
  5   |     await page.goto('/');
  6   |   });
  7   | 
  8   |   test('test 1: export keyword visible', async ({ page }) => {
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
> 39  |       await expect(el).toBeVisible();
      |                        ^ Error: expect(locator).toBeVisible() failed
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
  109 |     await expect(desc).toBeVisible();
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
```