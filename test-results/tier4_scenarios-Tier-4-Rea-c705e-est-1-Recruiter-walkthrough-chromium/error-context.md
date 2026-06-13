# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tier4_scenarios.spec.ts >> Tier 4: Real-World Visitor Walkthrough Scenarios >> test 1: Recruiter walkthrough
- Location: tests\e2e\tier4_scenarios.spec.ts:4:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('[data-testid="contact-json"], pre').first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('[data-testid="contact-json"], pre').first()

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
  3   | test.describe('Tier 4: Real-World Visitor Walkthrough Scenarios', () => {
  4   |   test('test 1: Recruiter walkthrough', async ({ page }) => {
  5   |     // 1. Recruiter arrives on the homepage
  6   |     await page.goto('/');
  7   |     
  8   |     // 2. Inspects JSON contact block
  9   |     const contactSection = page.locator('[data-testid="contact-json"], pre').first();
> 10  |     await expect(contactSection).toBeVisible();
      |                                  ^ Error: expect(locator).toBeVisible() failed
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
```