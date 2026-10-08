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
    description: "I wanted to understand how game engines truly work under the hood instead of treating commercial engines as black boxes. I built a custom 3D engine from scratch in C++ using the Vulkan graphics API, Data-Oriented Design with EnTT (ECS), and continuous collision physics via ReactPhysics3D. To allow rapid iteration, I embedded a sandboxed Luau virtual machine with asynchronous C++ bindings, allowing live hot-reloading of game logic without restarting or re-linking binaries. This project taught me the real cost of cache misses, memory layouts, and how to build stable bridges between native systems and scripting runtimes.",
    imagePlaceholder: "Vulkan Engine Preview",
    snippet: "Low-level C++ 3D engine with Vulkan rendering and embedded Luau VM runtime",
    gridSpan: "col-span-2 row-span-2",
    image: "/images/projects/vulkan-engine.png",
    role: "Solo Engine Developer & Systems Architect",
    timeline: "Sep 2023 - Mar 2024",
    technologies: ["C++", "Vulkan", "EnTT (ECS)", "ReactPhysics3D", "Luau VM", "ImGui", "CMake"],
    challenges: "Keeping the Vulkan render loop synchronized with physics ticks without frame pacing stutter, and hot-reloading Luau game scripts without crashing the native runtime.",
    solutions: "Implemented a clean fixed-timestep tick pipeline, decoupled physics stepping into background updates, and bound Luau state safely with snapshot rollbacks.",
    links: []
  },
  {
    id: "voxel-gen",
    slug: "voxel-gen",
    title: "80k x 80k Procedural Voxel World",
    category: "Procedural Generation",
    techStack: ["Parallel Luau", "Octree", "Perlin Noise", "Actor-Pull"],
    description: "Roblox maps usually start lagging when generating massive terrain. I wanted to see how far procedural worlds could be pushed on the platform, so I engineered a generator capable of deterministically generating and streaming an 80,000 x 80,000 block landscape smoothly. By distributing calculations across worker threads with Parallel Luau and using hierarchical octrees with dynamic shell pruning, I reduced what would have been a 26 GB memory footprint down to a few hundred megabytes, keeping the game running at a stable 60 FPS.",
    imagePlaceholder: "Procedural Terrain Preview",
    snippet: "Multi-threaded procedural generation streaming 80k x 80k voxel landscapes at 60 FPS",
    gridSpan: "col-span-2 row-span-1",
    codeFile: { filename: "heropeak_generator_script.lua", code: "See CodePreview", language: "luau", isPartOfProject: false },
    role: "Lead Performance & Systems Developer",
    timeline: "Apr 2024 - Jun 2024",
    technologies: ["Parallel Luau", "SharedTables", "Octrees", "Perlin Noise", "Domain Warping"],
    challenges: "Generating massive open worlds without exceeding platform memory limits or freezing the main thread during high-frequency calculations.",
    solutions: "Built an asynchronous worker pool with Parallel Luau, used hierarchical octrees that only store visible surface voxels (shell pruning), and streamed chunks in spirals around the player.",
    links: []
  },
  {
    id: "horror-game",
    slug: "horror-game",
    title: "Psychological Horror Gameplay Systems",
    category: "Architecture",
    techStack: ["Luau", "Rojo", "Wally", "ProfileService", "State Architecture"],
    description: "Horror games live and die by atmosphere and player tension. I built the complete underlying gameplay framework for an asymmetric horror title, focusing on psychological dread mechanics: dynamic player isolation audio, subtle sensory distortions, and reliable multiplayer synchronization. Everything is built cleanly using Rojo and Wally, with session-locked data persistence via ProfileService so players never lose their progress.",
    imagePlaceholder: "Horror Systems Architecture",
    snippet: "Atmospheric psychological horror architecture with modular sensory distortion systems",
    gridSpan: "col-span-1 row-span-2",
    codeFile: { filename: "ParanoiaManager.luau", code: "See CodePreview", language: "luau", isPartOfProject: true },
    role: "Gameplay Architect & Technical Lead",
    timeline: "Jul 2024 - Oct 2024",
    technologies: ["Luau", "Rojo", "Wally", "ProfileService", "State Architecture", "TweenService"],
    challenges: "Creating unsettling sensory effects (like perceptual audio distortion and subtle UI paranoia) without causing client lag or desyncing players in multiplayer.",
    solutions: "Separated client-side perceptual effects from authoritative server state, wrapped network actions in Promise queues, and used ProfileService session locks to eliminate save corruption.",
    links: []
  },
  {
    id: "melee-combat",
    slug: "melee-combat",
    title: "Deterministic Melee Combat Framework",
    category: "Gameplay Framework",
    techStack: ["Luau", "Rojo", "Promises", "FSM", "Raycasting"],
    description: "Most Roblox combat systems feel floaty, clunky, or easy to exploit. I created a responsive melee framework built around tight character kinematics, directional hit detection, and fluid combo chaining. The entire combat flow is managed by an explicit Finite State Machine, ensuring dashes, strikes, and parries transition cleanly without animation cancellation glitches or phantom hits.",
    imagePlaceholder: "Melee Combat Engine",
    snippet: "Fast, responsive combat framework featuring state-machine combos and directional hit detection",
    gridSpan: "col-span-1 row-span-1",
    codeFile: { filename: "M1Service.luau", code: "See CodePreview", language: "luau", isPartOfProject: true },
    role: "Lead Combat & Physics Programmer",
    timeline: "Nov 2024 - Jan 2025",
    technologies: ["Luau", "Rojo", "Promises", "FSM", "Raycasting", "Vector Math"],
    challenges: "Eliminating hit registration delay and preventing players from exploiting movement state glitches in high-latency multiplayer matches.",
    solutions: "Built server-authoritative hit verification with directional cone checks, decoupled movement momentum from default physics, and controlled all combo states with a deterministic Finite State Machine.",
    links: []
  },
  {
    id: "adv-movement",
    slug: "adv-movement",
    title: "Locomotion & Animation Controller",
    category: "Animation & Movement",
    techStack: ["Roblox API", "State Machine", "AnimationTracks"],
    description: "Movement is the first thing a player feels when they pick up a game. I built a comprehensive locomotion controller that seamlessly blends 30+ animations—sprinting, sliding, ledge-grabbing, vaulting, and wall-dashes. By managing state priorities through a dedicated coordinator, the character feels weighty and athletic without ever clipping through terrain or getting stuck in animation loops.",
    imagePlaceholder: "Advanced Movement Controller",
    video: "/videos/adv-movement.mp4",
    snippet: "Kinematic character controller blending 30+ animations with custom physical momentum",
    gridSpan: "col-span-2 row-span-1",
    image: "/images/projects/movement.png",
    role: "Gameplay & Animation Programmer",
    timeline: "Feb 2025 - Apr 2025",
    technologies: ["Roblox API", "State Machines", "AnimationTracks", "UserInputService", "TweenService"],
    challenges: "Blending 30+ complex parkour and locomotion animations smoothly without visual snapping or CPU lag from too many active tracks.",
    solutions: "Designed an animation priority state machine using the AnimationTracks weight API, decoupled input-driven physics impulses from the animation system, and implemented active track pruning for idle states.",
    links: []
  }
];
