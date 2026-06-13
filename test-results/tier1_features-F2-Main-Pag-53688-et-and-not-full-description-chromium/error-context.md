# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tier1_features.spec.ts >> F2: Main Page Summarized Cards >> test 7: cards use snippet and not full description
- Location: tests\e2e\tier1_features.spec.ts:60:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('[data-testid="project-card"]').first().locator('[data-testid="project-snippet"]').or(locator('[data-testid="project-card"]').first().locator('.font-mono'))
Expected: visible
Error: strict mode violation: locator('[data-testid="project-card"]').first().locator('[data-testid="project-snippet"]').or(locator('[data-testid="project-card"]').first().locator('.font-mono')) resolved to 4 elements:
    1) <div class="w-1/3 h-full border border-dashed border-orange-400/50 bg-graphite-900 rounded flex flex-col items-center justify-center text-orange-400 font-mono text-xs transition-colors group-hover:border-orange-400">…</div> aka getByRole('link').filter({ hasText: '// GraphicWIP_RENDER_BUFFER_EMPTY-- [[ TYPE: GRAPHICS & SCRIPTING ]]Custom C++' })
    2) <span class="text-[10px] font-mono text-orange-400 tracking-wider block mb-1 font-bold">…</span> aka getByRole('link').filter({ hasText: '// GraphicWIP_RENDER_BUFFER_EMPTY-- [[ TYPE: GRAPHICS & SCRIPTING ]]Custom C++' })
    3) <h3 class="text-lg font-bold font-mono text-gray-100 mb-2 group-hover:text-cyan-400 transition-colors">Custom C++ 3D Engine & Luau VM</h3> aka getByRole('link').filter({ hasText: '// GraphicWIP_RENDER_BUFFER_EMPTY-- [[ TYPE: GRAPHICS & SCRIPTING ]]Custom C++' })
    4) <div class="font-mono text-[10px] text-gray-400 mt-2">…</div> aka getByRole('link').filter({ hasText: '// GraphicWIP_RENDER_BUFFER_EMPTY-- [[ TYPE: GRAPHICS & SCRIPTING ]]Custom C++' })

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('[data-testid="project-card"]').first().locator('[data-testid="project-snippet"]').or(locator('[data-testid="project-card"]').first().locator('.font-mono'))

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - navigation [ref=e4]:
        - generic [ref=e9]:
          - link "about.luau" [ref=e10] [cursor=pointer]:
            - /url: "#about"
          - link "skills.config" [ref=e11] [cursor=pointer]:
            - /url: "#skills"
          - link "projects.json" [ref=e12] [cursor=pointer]:
            - /url: "#projects"
          - link "contact.sh" [ref=e13] [cursor=pointer]:
            - /url: "#contact"
        - generic [ref=e14]:
          - generic [ref=e15]: export
          - generic [ref=e16]: import
          - generic [ref=e17]: function
          - generic [ref=e18]: local
      - generic [ref=e19]:
        - generic [ref=e20]: workspace
        - generic [ref=e21]: ">"
        - generic [ref=e22]: src
        - generic [ref=e23]: ">"
        - generic [ref=e24]: data
        - generic [ref=e25]: ">"
        - generic [ref=e26]: projects.json
    - generic [ref=e27]:
      - banner [ref=e28]:
        - heading "dependencies.json" [level=1] [ref=e29]
        - paragraph [ref=e30]: // require("contact").init()
      - main [ref=e31]:
        - heading "Portfolio Projects" [level=2] [ref=e32]
        - generic [ref=e33]:
          - link [ref=e34] [cursor=pointer]:
            - /url: /projects/engine-3d
            - article [ref=e35]:
              - generic [ref=e36]:
                - generic [ref=e37]: // Graphic
                - generic [ref=e38]: WIP_RENDER_BUFFER_EMPTY
              - generic [ref=e39]:
                - generic [ref=e40]:
                  - generic [ref=e41]: "-- [[ TYPE: GRAPHICS & SCRIPTING ]]"
                  - heading "Custom C++ 3D Engine & Luau VM" [level=3] [ref=e42]
                  - paragraph [ref=e43]: Developed a custom low-level 3D game engine using Vulkan API with a strict focus on Data-Oriented Design. Focused on a low-overhead Vulkan rendering pipeline, emphasizing Data-Oriented Design (DOD) to maximize CPU cache spatial coherence. The Entity Component System (ECS) architecture, implemented using the EnTT library, was utilized for the deterministic separation of game state and logic, enabling high-performance, zero-cost iteration over massive structural datasets. Built a non-linear scene graph based on spatial relational components and integrated it with the continuous collision detection engine of the ReactPhysics3D library. Dynamic spatial transformations are reconciled via a custom three-phase pipeline (kinematic propagation, numerical physics update, and upward verification pass for raycasting vectors). The native runtime was extended with a fully sandboxed Luau VM with asynchronous function binding, enabling safe behavior hot-reloading in real-time without re-linking binaries. Tooling includes runtime dynamic type reflection, allowing the custom ImGui-based editor to automatically instantiate inspector panels and explorers for arbitrarily declared, memory-allocated components. Real-world durability is achieved via a custom snapshot serialization algorithm coupled with a heap manager abstraction that restores deserialized stale pointers within the physics engine.
                - generic [ref=e44]: "localtech = {\"C++\", \"Vulkan\", \"EnTT\", \"ReactPhysics3D\", \"Luau\", \"ImGui\", \"CMake\"}"
          - link [ref=e45] [cursor=pointer]:
            - /url: /projects/voxel-gen
            - article [ref=e46]:
              - generic [ref=e47]:
                - generic [ref=e48]: // Graphic
                - generic [ref=e49]: "// TODO: Asset Load"
              - generic [ref=e50]:
                - generic [ref=e51]:
                  - generic [ref=e52]: "-- [[ TYPE: PROCEDURAL GENERATION ]]"
                  - heading "80k x 80k Procedural Voxel Generation" [level=3] [ref=e53]
                  - paragraph [ref=e54]: Designed and implemented a highly optimized, multi-threaded procedural generation system capable of deterministically synthesizing giant voxel landscapes spanning 80,000 by 80,000 spatial units. The architecture utilizes a distributed, asynchronous Actor-Pull model in the Parallel Luau ecosystem, where a central dispatcher coordinates task prioritization using a spiral index mapping algorithm. SharedTable structures are utilized to pass data between threads with zero memory-copying overhead. Terrain topology is evaluated using multi-octave Perlin noise integrated with multi-dimensional domain warping, applying non-linear mathematical filters to eliminate vector singularities and grid artifacts at coordinate extremes. To circumvent the platform's strict memory allocation constraints (which would otherwise result in a 26GB memory footprint), I designed a dynamic shell thickness estimator to prune the internal octree. By analyzing local topological gradients, the system dynamically adjusts octree depths, forcing Empty Mips compression in deep subterranean structures while preserving fine details on high-contrast vertical cliffs. Additional features include custom I/O pathways that bypass standard diagnostic memory dump cycles, a failsafe deadlock detection subsystem, and a hybrid plugin context that allows direct serialization of billions of voxels to static persistent memory.
                - generic [ref=e55]: "localtech = {\"Parallel Luau\", \"Octree\", \"Perlin Noise\", \"Actor-Pull\"}"
          - link [ref=e56] [cursor=pointer]:
            - /url: /projects/horror-game
            - article [ref=e57]:
              - generic [ref=e58]:
                - generic [ref=e59]: // Graphic
                - generic [ref=e60]: WIP_RENDER_BUFFER_EMPTY
              - generic [ref=e61]:
                - generic [ref=e62]:
                  - generic [ref=e63]: "-- [[ TYPE: ARCHITECTURE ]]"
                  - heading "Asymmetric Psychological Horror Architecture" [level=3] [ref=e64]
                  - paragraph [ref=e65]: Designed and implemented a production-grade, highly modular systems architecture for an asymmetric psychological horror game using the Luau language. Using Rojo for environment management and Wally for package dependencies, the business logic was completely isolated from visual components. Client-server communications are managed via Knit RPC services, minimizing transmission payload overhead. Data persistence is managed via ProfileService, integrating session-locking and Promise-based exception handlers to eliminate race conditions. The user interface was built using the Fusion library, yielding declarative, reactive HUD components that avoid manual tree mutations. Built a multi-threaded player proximity profiling engine running on the Heartbeat cycle. The dynamic isolation indices are calculated in real-time to drive sensory payloads on client devices. Implemented an artificial latency simulation (fake lag) system through busy-waiting locks in the RenderStepped loop, as well as an algorithmic spatial audio deconstruction filter utilizing non-linear TweenService interpolation. Developed a real-time text obfuscation parser that uses stochastic variables to emulate typoglycemia and typing latency, injecting modified packets directly into the client's TextChatService.
                - generic [ref=e66]: "localtech = {\"Luau\", \"Rojo\", \"Wally\", \"Knit\", \"ProfileService\", \"Fusion\"}"
          - link [ref=e67] [cursor=pointer]:
            - /url: /projects/melee-combat
            - article [ref=e68]:
              - generic [ref=e69]:
                - generic [ref=e70]: // Graphic
                - generic [ref=e71]: "// TODO: Asset Load"
              - generic [ref=e72]:
                - generic [ref=e73]:
                  - generic [ref=e74]: "-- [[ TYPE: GAMEPLAY FRAMEWORK ]]"
                  - heading "Deterministic Melee Combat Framework" [level=3] [ref=e75]
                  - paragraph [ref=e76]: Engineered a robust, deterministic melee combat framework using Rojo and Wally. Orchestrated game state transitions via custom asynchronous loops and Promises. The core includes a character kinematics controller overriding default physics behavior in favor of custom momentum vector manipulation. Designed strict spatial validation, blocking jump/dash combinations on the Y-axis when the avatar is airborne. Built a fatigue calculator that decays jump velocity on successive inputs, enforcing a non-linear respiratory cooldown. Hit registration features directional validation based on the dot product of relative player vectors. Frontal-cone block state procedurally absorbs damage, while rear attacks bypass defense and trigger speed-throttling. The strike sequences are driven by a Finite State Machine (FSM) enabling smooth, low-latency chaining between dashes and M1 attacks. Implemented a separate local camera controller utilizing rotation matrices for unrestricted view angles during translation movements. Designed an asynchronous HUD that subscribes directly to cooldown states, utilizing UIGradient clipping masks to display millisecond-accurate skill recovery. Procedural rendering effects are triggered asynchronously upon hit validation.
                - generic [ref=e77]: "localtech = {\"Luau\", \"Rojo\", \"Promises\", \"FSM\", \"Raycasting\"}"
          - link [ref=e78] [cursor=pointer]:
            - /url: /projects/adv-movement
            - article [ref=e79]:
              - generic [ref=e80]:
                - generic [ref=e81]: // Graphic
                - generic [ref=e82]: WIP_RENDER_BUFFER_EMPTY
              - generic [ref=e83]:
                - generic [ref=e84]:
                  - generic [ref=e85]: "-- [[ TYPE: ANIMATION & MOVEMENT ]]"
                  - heading "Advanced Movement & Animation System" [level=3] [ref=e86]
                  - paragraph [ref=e87]: Developed a comprehensive movement and locomotion system based on a custom character state coordinator and a dynamic animation controller. The primary challenge lay in integrating over 30 separate animations (sprinting, sliding, dashing, vaulting, landing) and ensuring seamless blending and transition states. Constructed a user input routing layer mapping keystrokes to specific physical forces. Implemented a central state coordinator to handle execution priorities and eliminate state conflicts (e.g., preventing sliding during a mid-air dash). Built an animation manager to synchronize physical states with appropriate AnimationTracks. The manager handles track weights, playback priority levels, and transition smoothing to avoid visual snaps. Optimized client performance by minimizing concurrently active animation tracks. Individual physics sub-modules handle specialized movement forces, including slide friction and dash velocity vectors. Built modularly to allow simple additions of new actions. The final product resembles mechanics found in modern fast-paced action titles, delivering high responsiveness, clean animation blending, and modular scalability.
                - generic [ref=e88]: "localtech = {\"Roblox API\", \"State Machine\", \"AnimationTracks\"}"
  - button "Open Next.js Dev Tools" [ref=e94] [cursor=pointer]:
    - img [ref=e95]
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
> 65  |     await expect(snippet.or(card.locator('.font-mono'))).toBeVisible();
      |                                                          ^ Error: expect(locator).toBeVisible() failed
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
```