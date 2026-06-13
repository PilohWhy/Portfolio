# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tier1_features.spec.ts >> F5: Skills Grid Layout >> test 24: Math & Algorithms card with visual icon exists
- Location: tests\e2e\tier1_features.spec.ts:215:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('[data-testid="skill-card-math"], [data-testid="skill-card"]:has-text("Math & Algorithms")').first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('[data-testid="skill-card-math"], [data-testid="skill-card"]:has-text("Math & Algorithms")').first()

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
  210 |     await expect(card).toBeVisible();
  211 |     const icon = card.locator('svg, img').first();
  212 |     await expect(icon).toBeVisible();
  213 |   });
  214 | 
  215 |   test('test 24: Math & Algorithms card with visual icon exists', async ({ page }) => {
  216 |     const card = page.locator('[data-testid="skill-card-math"], [data-testid="skill-card"]:has-text("Math & Algorithms")').first();
> 217 |     await expect(card).toBeVisible();
      |                        ^ Error: expect(locator).toBeVisible() failed
  218 |     const icon = card.locator('svg, img').first();
  219 |     await expect(icon).toBeVisible();
  220 |   });
  221 | 
  222 |   test('test 25: Architecture card with visual icon exists', async ({ page }) => {
  223 |     const card = page.locator('[data-testid="skill-card-architecture"], [data-testid="skill-card"]:has-text("Architecture")').first();
  224 |     await expect(card).toBeVisible();
  225 |     const icon = card.locator('svg, img').first();
  226 |     await expect(icon).toBeVisible();
  227 |   });
  228 | });
  229 | 
  230 | test.describe('F6: About & Contact Details (JSON)', () => {
  231 |   test.beforeEach(async ({ page }) => {
  232 |     await page.goto('/');
  233 |   });
  234 | 
  235 |   test('test 26: about text is rendered', async ({ page }) => {
  236 |     const aboutText = "Hey, I'm Piloh. I've been diving into code for over 5 years. My core passion lies in engineering robust, highly functional game mechanics built from the ground up for future scalability. I love digging into low-level architecture and relentlessly optimizing my code.";
  237 |     const el = page.locator('[data-testid="about-section"], [data-testid="about-text"]').first();
  238 |     const locator = el.or(page.locator('body'));
  239 |     await expect(locator).toContainText(aboutText);
  240 |   });
  241 | 
  242 |   test('test 27: quote block is rendered', async ({ page }) => {
  243 |     const quoteText = "I'd rather have a few bugs now than dozens later.";
  244 |     const el = page.locator('[data-testid="quote-block"], blockquote').first();
  245 |     const locator = el.or(page.locator('body'));
  246 |     await expect(locator).toContainText(quoteText);
  247 |   });
  248 | 
  249 |   test('test 28: contact details contain Discord, Email, Roblox, GitHub, Status', async ({ page }) => {
  250 |     const section = page.locator('[data-testid="contact-section"], [data-testid="contact-json"]').first();
  251 |     const locator = section.or(page.locator('body'));
  252 |     await expect(locator).toContainText('Discord');
  253 |     await expect(locator).toContainText('Email');
  254 |     await expect(locator).toContainText('Roblox');
  255 |     await expect(locator).toContainText('GitHub');
  256 |     await expect(locator).toContainText('Status');
  257 |   });
  258 | 
  259 |   test('test 29: contact details are formatted like JSON config output', async ({ page }) => {
  260 |     const section = page.locator('[data-testid="contact-json"], pre').first();
  261 |     const text = await section.textContent();
  262 |     expect(text).toMatch(/[\{\}\[\]"':,]/);
  263 |   });
  264 | 
  265 |   test('test 30: contact links are clickable anchors', async ({ page }) => {
  266 |     const robloxLink = page.locator('a[href*="roblox.com"]');
  267 |     await expect(robloxLink).toBeVisible();
  268 |     
  269 |     const githubLink = page.locator('a[href*="github.com"]');
  270 |     await expect(githubLink).toBeVisible();
  271 | 
  272 |     const emailLink = page.locator('a[href*="mailto:"]');
  273 |     await expect(emailLink).toBeVisible();
  274 |   });
  275 | });
  276 | 
```