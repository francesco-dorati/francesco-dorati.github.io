export interface ProjectMedia {
  type: 'image' | 'video';
  url: string;
  description?: string;
  position?: 'before' | 'after'; // relative to the project description text; defaults to 'after'
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  company: string;
  date: string;
  location: string;
  longDescription: string[];
  techStack: string[];
  challenges?: string[];
  publicationIds?: string[];
  metrics?: string[];
  media?: ProjectMedia[];
  hasPublication?: boolean;
  titleImage?: string; // thumbnail shown on the Projects list card
}

export const projectsData: Project[] = [
  {
    id: "unitree-g1",
    title: "Humanoid Robot: Perception & Manipulation",
    company: "Talos Robotics AI",
    date: "Sept 2025 – Present",
    location: "Milan, Italy",
    hasPublication: true,
    publicationIds: ["eccv2026-affordance-vits", 'icra2026-bayesopt-mpc'],
    shortDescription: "Building perception and VLA manipulation pipelines for industrial humanoid robots.",
    longDescription: [
      "This project began at Politecnico di Milano's Automation Engineering Association, working on the **Unitree G1 humanoid** after a collaboration opportunity with content creator Jakidale. Early locomotion work proved hard to stabilize, so the project continued through a collaboration with **Talos Robotics AI**, an early-stage humanoid robotics startup building a platform for training, data collection, and deployment of VLA manipulation policies on industrial humanoid robots.",

      "My focus shifted from locomotion to perception. I built a **multi-task pipeline** that predicts 7-class **affordance masks** and **surface normals** from a single RGB image, using a frozen **DINOv2** backbone with a lightweight trainable decoder. On the UMD benchmark's standard fair evaluation, it reaches **80.3% mean-IoU**, beating the prior state-of-the-art (75.9%) with no object detector, no segmentation mask, and no ground-truth box at inference.",

      "Two findings stood out:\n- **One RGB image can produce an action-relevant representation.** The same lightweight decoder predicts both affordance masks and dense local surface normals, providing a contact region and approach-orientation without an bounding box, or depth input at inference.\n- **Action pretraining creates visual grounding.** In a related study on a humanoid VLA (Ψ0), it genuinely uses visual input to infer task affordances (+10 points over text-only), unlike its underlying vision-language backbone, which largely ignores the image."
    ],
    techStack: ["DINOv2", "Affordance Detection", "VLA", "Computer Vision", "Python"],    // challenges: [
    // "Stabilizing locomotion in a high-DOF humanoid robot with additional manipulation capabilities.",
    // "Building a zero-shot affordance detection pipeline that generalizes across object categories."
    // ],
    metrics: [
      // "Achieved 100% stability in simulation on flat terrain during the locomotion phase.",
      "**80.3% mean-IoU** on the official UMD benchmark, **surpassing prior SOTA** (Mask2Former, 75.9%).",
      "Contributed to work that secured a **€25k industrial research contract** and a **€10k award**."
    ],
    titleImage: "/projects/unitree-g1/affordance_architecture.png",
    media: [
      // {
      //   type: "image",
      //   url: "/projects/unitree-g1/affordance_knife.png",
      //   // description: "Qualitative demonstration of affordance model performance on a mug"
      // },
      {
        type: "image",
        url: "/projects/unitree-g1/affordance_architecture.png",
        description: "Affordance model architecture",
        position: "after"
      },
      {
        type: "image",
        url: "/projects/unitree-g1/affordance_comparison.png",
        description: "Beats prior SOTA (M2F-AFF) on the UMD affordance benchmark",
        position: "after"
      },
      {
        type: "image",
        url: "/projects/unitree-g1/affordance_mug.png",
        description: "Qualitative demonstration of affordance model performance",
        position: "before"
      },
    ]
  },
  {
    id: "agv-robot",
    titleImage: "/projects/agv-robot/demonstration.mp4",
    title: "Autonomous Ground Vehicle for Warehouse",
    company: "DevNut",
    date: "Jan 2026 – July 2026",
    location: "Remote",
    shortDescription: "Modular perception, planning, and control stack for autonomous ground vehicles navigating a warehouse alongside people and forklifts.",
    longDescription: [
      "I designed and implemented the navigation stack for an autonomous ground vehicle in a simulated warehouse (Webots), replacing a single-file reactive script with a modular **sense-think-act pipeline**: perception, localization, planning, and motion control, each behind its own interface.",

      "**Localization** fused wheel odometry with GPS and IMU readings using a weighted correction that snaps to the absolute reading only when the two disagree beyond a threshold, bounding drift without discarding the smoother odometry signal. **Global planning** used a visibility-graph over inflated obstacles with A* search, routing around the fixed warehouse layout.",

      "The core of the system was the **local planner**: an occupancy grid rebuilt from lidar at ~10 Hz, where each hit was classified by **map-differencing** against the static layout. Unknown hits were clustered, tracked, and given an estimated velocity, and confirmed moving obstacles had their costmap footprint stamped ahead of their heading so the planner yielded to where they were predicted to go, not just where they were.",

      "Two safety layers sat between the planner and the motors: a two-tier obstacle limiter with hysteresis, and an independent emergency-stop check. The system evolved from two earlier, purely reactive sector-based controllers — robust enough that I kept the original logic as an alternate local-planning strategy rather than discarding it."
    ],

    techStack: ["Python", "Visibility Graphs", "Occupancy Grid Mapping", "Object Tracking", "Simulation (Webots)"],
    challenges: [
      "Separating static structure from moving obstacles reliably, so a noisy lidar reading is never mistaken for permanent map geometry.",
      "Predicting where a moving obstacle will be, without overreacting to momentary or lateral detections.",
      "Bounding localization drift with only GPS and odometry as references, with no third source to arbitrate a large GPS error."
    ],
    metrics: [
      "Delivered a fully modular navigation architecture: perception, localization, global/local planning, and safety. Replacing a single-file reactive script.",
    ],
    media: [
      {
        type: "video",
        url: "/projects/agv-robot/demonstration.mp4",
        description: "Simulation of an earlier version of the navigation system (5x speedup)"
      }
    ],
  },
  {
    id: "falco-drone",
    title: "FALCO Autonomous Drone",
    titleImage: "/projects/falco-drone/planning_demo.mp4",
    company: "AEA PoliMi",
    date: "Nov 2023 – Feb 2025",
    location: "Milan, Italy",
    hasPublication: true,
    "shortDescription": "Developed a C++ path planning algorithm for autonomous drone navigation in complex urban environments.",
    "longDescription": [
      "As part of the FALCO autonomous drone project at Politecnico di Milano, I worked in a three-person software team to develop a path planning algorithm for dense urban navigation, generating collision-free trajectories from point cloud data.",
      "Starting from the state-of-the-art **Informed RRT***, we identified a major bottleneck in initial path discovery due to uniform sampling. We designed a **probabilistic ellipsoid sampling strategy** using an exponential distribution along the start–goal axis to focus exploration on more promising regions.",
      "We further implemented an **adaptive version** that dynamically adjusts sampling based on obstacle density, significantly improving efficiency and robustness across various environments."
    ],
    techStack: ["C++", "Python", "Motion Planning", "Informed-RRT*", "Algorithm Optimization"],
    challenges: [
      "Handling dense, cluttered urban environments efficiently.",
      "Reducing computational and memory overhead of sampling-based planners."
    ],
    metrics: [
      "**85% faster** initial path discovery compared to baseline Informed-RRT*.",
      "**78% reduction** in node count compared to baseline Informed-RRT*."
    ],
    publicationIds: ["robot2024-informed-rrt"],
    media: [
      {
        type: "video",
        url: "/projects/falco-drone/planning_demo.mp4",
        description: "Visualization of the planning algorithm in a 2D environment",
        position: "before"

      }
    ]
  }
];
