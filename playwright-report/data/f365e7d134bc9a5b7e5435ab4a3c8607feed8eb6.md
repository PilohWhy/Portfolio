# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tier2_boundaries.spec.ts >> F5 Edge Cases >> test 21: skills grid wrapping on mobile (320px)
- Location: tests\e2e\tier2_boundaries.spec.ts:245:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('[data-testid="skills-grid"]').first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('[data-testid="skills-grid"]').first()

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
  149 | 
  150 |   test('test 14: screen resizing on details page', async ({ page }) => {
  151 |     await page.goto('/');
  152 |     await page.locator('[data-testid="project-card"]').first().click();
  153 |     await page.waitForURL(/\/projects\/.+/);
  154 |     
  155 |     // Resize to desktop
  156 |     await page.setViewportSize({ width: 1280, height: 800 });
  157 |     const title = page.locator('[data-testid="project-title"], h1').first();
  158 |     await expect(title).toBeVisible();
  159 |     
  160 |     // Resize to mobile
  161 |     await page.setViewportSize({ width: 320, height: 568 });
  162 |     await expect(title).toBeVisible();
  163 |   });
  164 | 
  165 |   test('test 15: rapid project card clicking stability', async ({ page }) => {
  166 |     await page.goto('/');
  167 |     const cards = page.locator('[data-testid="project-card"]');
  168 |     if (await cards.count() > 1) {
  169 |       await cards.nth(0).click().catch(() => {});
  170 |       await page.goto('/');
  171 |       await cards.nth(1).click().catch(() => {});
  172 |       await page.waitForURL(/\/projects\/.+/);
  173 |       expect(page.url()).toContain('/projects/');
  174 |     }
  175 |   });
  176 | });
  177 | 
  178 | test.describe('F4 Edge Cases', () => {
  179 |   test('test 16: long testimonial text handling', async ({ page }) => {
  180 |     await page.goto('/');
  181 |     const grid = page.locator('[data-testid="reviews-grid"]').first();
  182 |     await expect(grid).toBeVisible();
  183 |     
  184 |     // Text should not be clipped (i.e. check height or css overflow)
  185 |     const reviews = page.locator('[data-testid="review-card"]');
  186 |     const count = await reviews.count();
  187 |     for (let i = 0; i < count; i++) {
  188 |       const review = reviews.nth(i);
  189 |       const style = await review.getAttribute('style');
  190 |       // Masonry elements should be rendered correctly
  191 |       expect(style || '').not.toContain('display: none');
  192 |     }
  193 |   });
  194 | 
  195 |   test('test 17: masonry grid column resizing', async ({ page }) => {
  196 |     await page.goto('/');
  197 |     const grid = page.locator('[data-testid="reviews-grid"]').first();
  198 |     await expect(grid).toBeVisible();
  199 |     
  200 |     // Set desktop
  201 |     await page.setViewportSize({ width: 1200, height: 800 });
  202 |     // Should have columns
  203 |     const desktopClass = await grid.getAttribute('class');
  204 |     
  205 |     // Set mobile
  206 |     await page.setViewportSize({ width: 320, height: 568 });
  207 |     const mobileClass = await grid.getAttribute('class');
  208 |     
  209 |     // Layout should dynamically adapt (Tailwind classes for responsive columns)
  210 |     expect(desktopClass || mobileClass || 'columns').toMatch(/(columns|grid|flex)/);
  211 |   });
  212 | 
  213 |   test('test 18: duplicate check for reviews', async ({ page }) => {
  214 |     await page.goto('/');
  215 |     const reviews = page.locator('[data-testid="review-card"]');
  216 |     const texts = await reviews.allTextContents();
  217 |     
  218 |     const uniqueTexts = new Set(texts);
  219 |     expect(uniqueTexts.size).toBe(texts.length);
  220 |   });
  221 | 
  222 |   test('test 19: missing ratings/reviews checks', async ({ page }) => {
  223 |     await page.goto('/');
  224 |     const reviews = page.locator('[data-testid="review-card"]');
  225 |     const count = await reviews.count();
  226 |     for (let i = 0; i < count; i++) {
  227 |       const text = await reviews.nth(i).textContent();
  228 |       expect(text).toContain('/5');
  229 |     }
  230 |   });
  231 | 
  232 |   test('test 20: layout integrity on mobile viewports', async ({ page }) => {
  233 |     await page.setViewportSize({ width: 320, height: 568 });
  234 |     await page.goto('/');
  235 |     const grid = page.locator('[data-testid="reviews-grid"]').first();
  236 |     await expect(grid).toBeVisible();
  237 |     
  238 |     // Ensure reviews fit screen
  239 |     const box = await grid.boundingBox();
  240 |     expect(box?.width).toBeLessThanOrEqual(330);
  241 |   });
  242 | });
  243 | 
  244 | test.describe('F5 Edge Cases', () => {
  245 |   test('test 21: skills grid wrapping on mobile (320px)', async ({ page }) => {
  246 |     await page.setViewportSize({ width: 320, height: 568 });
  247 |     await page.goto('/');
  248 |     const grid = page.locator('[data-testid="skills-grid"]').first();
> 249 |     await expect(grid).toBeVisible();
      |                        ^ Error: expect(locator).toBeVisible() failed
  250 |     const box = await grid.boundingBox();
  251 |     expect(box?.width).toBeLessThanOrEqual(330);
  252 |   });
  253 | 
  254 |   test('test 22: icon visual scaling', async ({ page }) => {
  255 |     await page.goto('/');
  256 |     const icons = page.locator('[data-testid="skills-grid"] svg, [data-testid="skills-grid"] img');
  257 |     const count = await icons.count();
  258 |     for (let i = 0; i < count; i++) {
  259 |       await expect(icons.nth(i)).toBeVisible();
  260 |     }
  261 |   });
  262 | 
  263 |   test('test 23: tooltip behavior at edge of viewport', async ({ page }) => {
  264 |     await page.goto('/');
  265 |     // Hovering skills should not trigger horizontal scrollbar/overflow
  266 |     const skillCard = page.locator('[data-testid^="skill-card-"], [data-testid="skill-card"]').first();
  267 |     if (await skillCard.isVisible()) {
  268 |       await skillCard.hover();
  269 |     }
  270 |     const overflowX = await page.evaluate(() => window.scrollX);
  271 |     expect(overflowX).toBe(0);
  272 |   });
  273 | 
  274 |   test('test 24: theme color contrast in grid cells', async ({ page }) => {
  275 |     await page.goto('/');
  276 |     const card = page.locator('[data-testid^="skill-card-"], [data-testid="skill-card"]').first();
  277 |     if (await card.isVisible()) {
  278 |       const className = await card.getAttribute('class');
  279 |       // Should have styling classes for dark contrast background and border/text
  280 |       expect(className).toMatch(/(bg-|text-|border-|dark:)/);
  281 |     }
  282 |   });
  283 | 
  284 |   test('test 25: alignment consistency', async ({ page }) => {
  285 |     await page.goto('/');
  286 |     const grid = page.locator('[data-testid="skills-grid"]').first();
  287 |     await expect(grid).toBeVisible();
  288 |     const className = await grid.getAttribute('class');
  289 |     expect(className).toMatch(/(grid|flex)/);
  290 |   });
  291 | });
  292 | 
  293 | test.describe('F6 Edge Cases', () => {
  294 |   test('test 26: valid JSON string check when copying text content', async ({ page }) => {
  295 |     await page.goto('/');
  296 |     const jsonBlock = page.locator('[data-testid="contact-json"], pre').first();
  297 |     const text = await jsonBlock.textContent();
  298 |     expect(text).not.toBeNull();
  299 |     // Match general JSON structure
  300 |     expect(text).toMatch(/["']?(Discord|Email|Roblox|GitHub|Status)["']?\s*:/i);
  301 |   });
  302 | 
  303 |   test('test 27: wrapping/clipping in JSON pre blocks', async ({ page }) => {
  304 |     await page.goto('/');
  305 |     const pre = page.locator('[data-testid="contact-json"], pre').first();
  306 |     const className = await pre.getAttribute('class');
  307 |     // Monospace JSON pre code block should wrap/scroll
  308 |     expect(className).toMatch(/(overflow|wrap|scroll|font-mono|w-)/);
  309 |   });
  310 | 
  311 |   test('test 28: code font styling check', async ({ page }) => {
  312 |     await page.goto('/');
  313 |     const pre = page.locator('[data-testid="contact-json"], pre').first();
  314 |     const fontFamily = await pre.evaluate(el => window.getComputedStyle(el).fontFamily);
  315 |     expect(fontFamily).toMatch(/(mono|consolas|courier|sfmono)/i);
  316 |   });
  317 | 
  318 |   test('test 29: Roblox/GitHub link structure security check', async ({ page }) => {
  319 |     await page.goto('/');
  320 |     const externalLinks = page.locator('a[href*="roblox.com"], a[href*="github.com"]');
  321 |     const count = await externalLinks.count();
  322 |     for (let i = 0; i < count; i++) {
  323 |       const link = externalLinks.nth(i);
  324 |       const target = await link.getAttribute('target');
  325 |       const rel = await link.getAttribute('rel');
  326 |       expect(target).toBe('_blank');
  327 |       expect(rel).toContain('noopener');
  328 |       expect(rel).toContain('noreferrer');
  329 |     }
  330 |   });
  331 | 
  332 |   test('test 30: background opacity stability', async ({ page }) => {
  333 |     await page.goto('/');
  334 |     const jsonBlock = page.locator('[data-testid="contact-json"], pre').first();
  335 |     const className = await jsonBlock.getAttribute('class');
  336 |     // Should contain background opacity class or opacity level (e.g. bg-white/5, bg-graphite-900/50, etc.)
  337 |     expect(className).toMatch(/(bg-|opacity-|backdrop-)/);
  338 |   });
  339 | });
  340 | 
```