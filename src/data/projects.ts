export interface ProjectLink {
  label: string;
  url: string;
}

export interface CodeFile {
  filename: string;
  code: string;
  language: string;
  isPartOfProject: boolean;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  techStack: string[];
  description: string;
  imagePlaceholder: string;
  snippet: string;
  gridSpan: string;
  imageSlug?: string;
  video?: string;
  image?: string; // path to real image in /public
  codeFile?: CodeFile; // code file to display instead of image
  
  // Details page metadata expected by E2E tests:
  role: string;
  timeline: string;
  technologies: string[];
  challenges: string;
  solutions: string;
  links?: ProjectLink[];
}

export const projects: Project[] = [
  {
    id: "engine-3d",
    slug: "engine-3d",
    title: "Custom C++ 3D Engine & Luau VM",
    category: "Graphics & Scripting",
    techStack: ["C++", "Vulkan", "EnTT", "ReactPhysics3D", "Luau", "ImGui", "CMake"],
    description: "Developed a custom low-level 3D game engine using Vulkan API with a strict focus on Data-Oriented Design. Focused on a low-overhead Vulkan rendering pipeline, emphasizing Data-Oriented Design (DOD) to maximize CPU cache spatial coherence. The Entity Component System (ECS) architecture, implemented using the EnTT library, was utilized for the deterministic separation of game state and logic, enabling high-performance, zero-cost iteration over massive structural datasets. Built a non-linear scene graph based on spatial relational components and integrated it with the continuous collision detection engine of the ReactPhysics3D library. Dynamic spatial transformations are reconciled via a custom three-phase pipeline (kinematic propagation, numerical physics update, and upward verification pass for raycasting vectors). The native runtime was extended with a fully sandboxed Luau VM with asynchronous function binding, enabling safe behavior hot-reloading in real-time without re-linking binaries. Tooling includes runtime dynamic type reflection, allowing the custom ImGui-based editor to automatically instantiate inspector panels and explorers for arbitrarily declared, memory-allocated components. Real-world durability is achieved via a custom snapshot serialization algorithm coupled with a heap manager abstraction that restores deserialized stale pointers within the physics engine.",
    imagePlaceholder: "WIP_RENDER_BUFFER_EMPTY",
    snippet: 'local p = workspace:FindFirstChild("CustomEngine3D")',
    gridSpan: "col-span-2 row-span-2",
    image: "/images/projects/vulkan-engine.png",
    role: "Solo Engine Developer & Systems Architect",
    timeline: "Sep 2023 - Mar 2024",
    technologies: ["C++", "Vulkan", "EnTT (ECS)", "ReactPhysics3D", "Luau VM", "ImGui", "CMake"],
    challenges: "Ensuring spatial cache coherence in dynamic rendering structures, managing three-phase physics-scripting-rendering synchronization without state drift, and reconstructing alocation pointers after loading memory snapshots.",
    solutions: "Employed a strict Entity Component System (ECS) using EnTT to enforce memory linearity, developed a custom deterministic frame lifecycle manager, and implemented a pointer-mapping translation table during the deserialization pass.",
    links: []
  },
  {
    id: "voxel-gen",
    slug: "voxel-gen",
    title: "80k x 80k Procedural Voxel Generation",
    category: "Procedural Generation",
    techStack: ["Parallel Luau", "Octree", "Perlin Noise", "Actor-Pull"],
    description: "Designed and implemented a highly optimized, multi-threaded procedural generation system capable of deterministically synthesizing giant voxel landscapes spanning 80,000 by 80,000 spatial units. The architecture utilizes a distributed, asynchronous Actor-Pull model in the Parallel Luau ecosystem, where a central dispatcher coordinates task prioritization using a spiral index mapping algorithm. SharedTable structures are utilized to pass data between threads with zero memory-copying overhead. Terrain topology is evaluated using multi-octave Perlin noise integrated with multi-dimensional domain warping, applying non-linear mathematical filters to eliminate vector singularities and grid artifacts at coordinate extremes. To circumvent the platform's strict memory allocation constraints (which would otherwise result in a 26GB memory footprint), I designed a dynamic shell thickness estimator to prune the internal octree. By analyzing local topological gradients, the system dynamically adjusts octree depths, forcing Empty Mips compression in deep subterranean structures while preserving fine details on high-contrast vertical cliffs. Additional features include custom I/O pathways that bypass standard diagnostic memory dump cycles, a failsafe deadlock detection subsystem, and a hybrid plugin context that allows direct serialization of billions of voxels to static persistent memory.",
    imagePlaceholder: "// TODO: Asset Load",
    snippet: 'local p = workspace:FindFirstChild("ProceduralVoxelGen")',
    gridSpan: "col-span-2 row-span-1",
    codeFile: { filename: "heropeak_generator_script.lua", code: "See CodePreview", language: "luau", isPartOfProject: false },
    role: "Lead Performance & Systems Developer",
    timeline: "Apr 2024 - Jun 2024",
    technologies: ["Parallel Luau", "SharedTables", "Octrees", "Perlin Noise", "Domain Warping"],
    challenges: "Mitigating 26GB alocation-induced memory limits in closed runtime environments, preventing data-race hazards during high-frequency parallel terrain calculations, and avoiding mesh artifacts at coordinate extremes.",
    solutions: "Designed an Actor-Pull parallelization pipeline with read-only SharedTable buffers, developed a gradient-based octree shell compression technique, and implemented direct binary serialization bypassing standard buffer translation.",
    links: []
  },
  {
    id: "horror-game",
    slug: "horror-game",
    title: "Asymmetric Psychological Horror Architecture",
    category: "Architecture",
    techStack: ["Luau", "Rojo", "Wally", "Knit", "ProfileService", "Fusion"],
    description: "Designed and implemented a production-grade, highly modular systems architecture for an asymmetric psychological horror game using the Luau language. Using Rojo for environment management and Wally for package dependencies, the business logic was completely isolated from visual components. Client-server communications are managed via Knit RPC services, minimizing transmission payload overhead. Data persistence is managed via ProfileService, integrating session-locking and Promise-based exception handlers to eliminate race conditions. The user interface was built using the Fusion library, yielding declarative, reactive HUD components that avoid manual tree mutations. Built a multi-threaded player proximity profiling engine running on the Heartbeat cycle. The dynamic isolation indices are calculated in real-time to drive sensory payloads on client devices. Implemented an artificial latency simulation (fake lag) system through busy-waiting locks in the RenderStepped loop, as well as an algorithmic spatial audio deconstruction filter utilizing non-linear TweenService interpolation. Developed a real-time text obfuscation parser that uses stochastic variables to emulate typoglycemia and typing latency, injecting modified packets directly into the client's TextChatService.",
    imagePlaceholder: "WIP_RENDER_BUFFER_EMPTY",
    snippet: 'local p = workspace:FindFirstChild("AsymmetricHorror")',
    gridSpan: "col-span-1 row-span-2",
    codeFile: { filename: "ParanoiaManager.luau", code: "See CodePreview", language: "luau", isPartOfProject: true },
    role: "Gameplay Architect & Technical Lead",
    timeline: "Jul 2024 - Oct 2024",
    technologies: ["Luau", "Rojo", "Wally", "Knit", "ProfileService", "Fusion (Reactive UI)", "TweenService"],
    challenges: "Preventing data duplication and session conflicts during high-concurrency client drops, structuring reactive UI layouts without DOM mutation overhead, and simulating psychological dread components (typoglycemia/audio degradation) without blocking the client thread.",
    solutions: "Created a strict state controller utilizing ProfileService session-locks, utilized Fusion's reactive state graphs for HUD rendering, and executed audio/text obfuscation pipelines asynchronously in isolated worker loops.",
    links: []
  },
  {
    id: "melee-combat",
    slug: "melee-combat",
    title: "Deterministic Melee Combat Framework",
    category: "Gameplay Framework",
    techStack: ["Luau", "Rojo", "Promises", "FSM", "Raycasting"],
    description: "Engineered a robust, deterministic melee combat framework using Rojo and Wally. Orchestrated game state transitions via custom asynchronous loops and Promises. The core includes a character kinematics controller overriding default physics behavior in favor of custom momentum vector manipulation. Designed strict spatial validation, blocking jump/dash combinations on the Y-axis when the avatar is airborne. Built a fatigue calculator that decays jump velocity on successive inputs, enforcing a non-linear respiratory cooldown. Hit registration features directional validation based on the dot product of relative player vectors. Frontal-cone block state procedurally absorbs damage, while rear attacks bypass defense and trigger speed-throttling. The strike sequences are driven by a Finite State Machine (FSM) enabling smooth, low-latency chaining between dashes and M1 attacks. Implemented a separate local camera controller utilizing rotation matrices for unrestricted view angles during translation movements. Designed an asynchronous HUD that subscribes directly to cooldown states, utilizing UIGradient clipping masks to display millisecond-accurate skill recovery. Procedural rendering effects are triggered asynchronously upon hit validation.",
    imagePlaceholder: "// TODO: Asset Load",
    snippet: 'local p = workspace:FindFirstChild("MeleeCombatFramework")',
    gridSpan: "col-span-1 row-span-1",
    codeFile: { filename: "M1Service.luau", code: "See CodePreview", language: "luau", isPartOfProject: true },
    role: "Lead Combat & Physics Programmer",
    timeline: "Nov 2024 - Jan 2025",
    technologies: ["Luau", "Rojo", "Promises", "FSM", "Raycasting", "Vector Math"],
    challenges: "Overcoming erratic physics behaviors in network environments during rapid movements, managing state synchronization for multi-phase hitboxes, and displaying lag-free, high-precision cooldown visualizers.",
    solutions: "Created custom kinematics algorithms overriding native physical constraints, implemented dot-product target verification on the server, and built UI modules that hook directly into state change callbacks via local Promises.",
    links: []
  },
  {
    id: "adv-movement",
    slug: "adv-movement",
    title: "Advanced Movement & Animation System",
    category: "Animation & Movement",
    techStack: ["Roblox API", "State Machine", "AnimationTracks"],
    description: "Developed a comprehensive movement and locomotion system based on a custom character state coordinator and a dynamic animation controller. The primary challenge lay in integrating over 30 separate animations (sprinting, sliding, dashing, vaulting, landing) and ensuring seamless blending and transition states. Constructed a user input routing layer mapping keystrokes to specific physical forces. Implemented a central state coordinator to handle execution priorities and eliminate state conflicts (e.g., preventing sliding during a mid-air dash). Built an animation manager to synchronize physical states with appropriate AnimationTracks. The manager handles track weights, playback priority levels, and transition smoothing to avoid visual snaps. Optimized client performance by minimizing concurrently active animation tracks. Individual physics sub-modules handle specialized movement forces, including slide friction and dash velocity vectors. Built modularly to allow simple additions of new actions. The final product resembles mechanics found in modern fast-paced action titles, delivering high responsiveness, clean animation blending, and modular scalability.",
    imagePlaceholder: "WIP_RENDER_BUFFER_EMPTY",
    video: "/videos/adv-movement.mp4",
    snippet: 'local p = workspace:FindFirstChild("AdvancedMovement")',
    gridSpan: "col-span-2 row-span-1",
    image: "/images/projects/movement.png",
    role: "Gameplay & Animation Programmer",
    timeline: "Feb 2025 - Apr 2025",
    technologies: ["Roblox API", "State Machines", "AnimationTracks", "UserInputService", "TweenService"],
    challenges: "Orchestrating smooth blending pathways across 30+ custom animations, resolving conflicts between overlapping physics forces, and minimizing client CPU overhead from multiple active AnimationTracks.",
    solutions: "Designed an animation priority state machine using the AnimationTracks weight API, decoupled input-driven physics impulses from the animation system, and implemented active track pruning for idle states.",
    links: []
  }
];
