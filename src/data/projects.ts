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
    description: "Built a custom 3D game engine from scratch in C++ to understand engine internals directly. Implemented a Vulkan graphics pipeline, cache-friendly data structures with EnTT (ECS), and rigid-body physics with ReactPhysics3D. Embedded a sandboxed Luau runtime with custom C++ bindings to support live script hot-reloading without restarting or recompiling the binary.",
    imagePlaceholder: "Vulkan Engine Preview",
    snippet: "Low-level C++ 3D engine with Vulkan rendering, ECS architecture, and embedded Luau runtime",
    gridSpan: "col-span-2 row-span-2",
    image: "/images/projects/vulkan-engine.png",
    role: "Engine Developer",
    timeline: "Sep 2023 - Mar 2024",
    technologies: ["C++", "Vulkan", "EnTT (ECS)", "ReactPhysics3D", "Luau VM", "ImGui", "CMake"],
    challenges: "Keeping the Vulkan render loop synchronized with physics ticks without frame stutter, and hot-reloading Luau game scripts without crashing native state.",
    solutions: "Separated physics updates into a fixed-timestep loop, pushed render work through a dedicated command queue, and isolated Luau state with safe snapshot restoration.",
    links: []
  },
  {
    id: "voxel-gen",
    slug: "voxel-gen",
    title: "80k x 80k Procedural Voxel World",
    category: "Procedural Generation",
    techStack: ["Parallel Luau", "Octree", "Perlin Noise", "Actor-Pull"],
    description: "A multi-threaded procedural terrain generator designed to stream an 80,000 x 80,000 voxel map on Roblox at 60 FPS. Calculations are distributed across worker threads using Parallel Luau, and memory usage is kept under ~300 MB through hierarchical octrees and dynamic surface-only shell pruning.",
    imagePlaceholder: "Procedural Terrain Preview",
    snippet: "Multi-threaded procedural terrain streaming an 80k x 80k voxel world at stable 60 FPS",
    gridSpan: "col-span-2 row-span-1",
    codeFile: { filename: "heropeak_generator_script.lua", code: "See CodePreview", language: "luau", isPartOfProject: false },
    role: "Systems Programmer",
    timeline: "Apr 2024 - Jun 2024",
    technologies: ["Parallel Luau", "SharedTables", "Octrees", "Perlin Noise", "Domain Warping"],
    challenges: "Generating large terrain without running into Roblox memory limits or freezing the main thread during batch generation.",
    solutions: "Dispatched chunk math across an Actor worker pool, stored only visible surface voxels in memory, and generated chunks outward in a spiral around the player.",
    links: []
  },
  {
    id: "horror-game",
    slug: "horror-game",
    title: "Psychological Horror Gameplay Systems",
    category: "Architecture",
    techStack: ["Luau", "Rojo", "Wally", "ProfileService", "State Architecture"],
    description: "Built the underlying gameplay framework for an asymmetric multiplayer horror game. Designed mechanics for dynamic audio isolation, sanity-based sensory effects, and clean multiplayer synchronization. Managed with Rojo and Wally, using ProfileService session locking for reliable player data persistence.",
    imagePlaceholder: "Horror Systems Architecture",
    snippet: "Multiplayer horror framework featuring proximity-based paranoia and sensory distortion systems",
    gridSpan: "col-span-1 row-span-2",
    codeFile: { filename: "ParanoiaManager.luau", code: "See CodePreview", language: "luau", isPartOfProject: true },
    role: "Gameplay Programmer",
    timeline: "Jul 2024 - Oct 2024",
    technologies: ["Luau", "Rojo", "Wally", "ProfileService", "State Architecture", "TweenService"],
    challenges: "Handling perceptual audio effects and UI distortions locally without desyncing player state across the network.",
    solutions: "Separated local visual and audio distortion logic from server-authoritative state, queued critical network requests, and used ProfileService session locks to prevent data loss.",
    links: []
  },
  {
    id: "melee-combat",
    slug: "melee-combat",
    title: "Deterministic Melee Combat Framework",
    category: "Gameplay Framework",
    techStack: ["Luau", "Rojo", "Promises", "FSM", "Raycasting"],
    description: "A responsive melee combat framework built around predictable kinematics, directional hit detection, and combo chaining. Handled through an explicit Finite State Machine so attacks, dashes, and parries transition cleanly without animation cancellation bugs or phantom hits.",
    imagePlaceholder: "Melee Combat Engine",
    snippet: "Fast, responsive combat framework featuring state-machine combos and directional hit detection",
    gridSpan: "col-span-1 row-span-1",
    codeFile: { filename: "M1Service.luau", code: "See CodePreview", language: "luau", isPartOfProject: true },
    role: "Gameplay Programmer",
    timeline: "Nov 2024 - Jan 2025",
    technologies: ["Luau", "Rojo", "Promises", "FSM", "Raycasting", "Vector Math"],
    challenges: "Keeping hit detection reliable and preventing movement glitches in high-latency multiplayer matches.",
    solutions: "Implemented server-authoritative hit checks with directional cones, replaced default physics impulses with custom momentum vectors, and drove all combo transitions through an explicit FSM.",
    links: []
  },
  {
    id: "adv-movement",
    slug: "adv-movement",
    title: "Locomotion & Animation Controller",
    category: "Animation & Movement",
    techStack: ["Roblox API", "State Machine", "AnimationTracks"],
    description: "A custom character movement controller that smoothly blends over 30 animations: sprinting, sliding, ledge-grabbing, vaulting, and wall-dashes. Uses state priority management to keep movement feeling athletic and responsive without clipping into geometry or getting stuck.",
    imagePlaceholder: "Advanced Movement Controller",
    video: "/videos/adv-movement.mp4",
    snippet: "Character movement controller blending 30+ animations with custom physical momentum",
    gridSpan: "col-span-2 row-span-1",
    image: "/images/projects/movement.png",
    role: "Gameplay Programmer",
    timeline: "Feb 2025 - Apr 2025",
    technologies: ["Roblox API", "State Machines", "AnimationTracks", "UserInputService", "TweenService"],
    challenges: "Blending dozens of parkour and locomotion animations without visual snapping or running into animation track limits.",
    solutions: "Built a priority state machine using AnimationTrack weights, decoupled movement impulses from animation timing, and pruned unused tracks when characters are idle.",
    links: []
  }
];
