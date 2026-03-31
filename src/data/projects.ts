export interface ProjectMedia {
  type: 'image' | 'video';
  url: string;
  description?: string;
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
  challenges: string[];
  link?: string;
  metrics?: string[];
  media?: ProjectMedia[];
  hasPublication?: boolean;
}

export const projectsData: Project[] = [
  {
    id: "agv-robot",
    title: "Autonomous Ground Vehicle for Wharehouse",
    company: "DevNut",
    date: "Jan 2026 – Present",
    location: "Remote",
    shortDescription: "Computer vision-based navigation system for autonomous ground vehicles (AGV), replacing traditional ground-line sensors.",
    longDescription: [
      "I contributed to an R&D project at DevNut (Italian Tech Startup) focused on replacing traditional line-following AGV systems with a flexible, computer-vision-based navigation approach. The goal is to enable dynamic path planning and obstacle avoidance in warehouse environments, eliminating the need for fixed painted floor lines and improving operational adaptability.",
    
      "Working in a team of four, I helped design and implement the full navigation stack in simulation using Webots, including control logic, environment modeling, and data logging and visualization tools.",
    
      "We implemented a baseline navigation system using LiDAR for obstacle detection and GPS for global localization, combined with a goal-based controller. The robot navigates toward waypoints while dynamically adjusting its trajectory in response to obstacles using a reactive avoidance strategy.",
    
      "The next step of the project is to transition away from LiDAR-based perception toward a camera-driven approach, leveraging computer vision techniques such as Visual SLAM to enable richer environmental understanding and more scalable navigation."
    ],

    techStack: ["Python", "Simulation (Webots)", "Autonomous Navigation", "Sensor Integration"],
    challenges: [
      "Overcoming local minima issues in purely reactive navigation systems.",
      "Designing a flexible navigation pipeline without relying on predefined infrastructure.",
      "Building a realistic simulation environment for testing navigation strategies."
    ],
    metrics: [
      "Implemented end-to-end autonomous navigation pipeline in simulation.",
      "Achieved reliable waypoint tracking with dynamic obstacle avoidance.",
      "Developed reusable warehouse simulation framework for testing and evaluation."
    ],
    media: [
      {
        type: "video",
        url: "/projects/agv-robot/demonstration.mp4",
        description: "Simulation of the current navigation system (5x speedup)"
      }
    ],
  },
  {
    id: "unitree-g1",
    title: "Humanoid Robot",
    company: "AEA PoliMi",
    date: "Sept 2025 – Present",
    location: "Milan, Italy",
    hasPublication: false,
    shortDescription: "Implementing state-of-the-art RL approaches for Unitree G1, focusing locomotion models using imitation learning.",
    longDescription: [
      "As part of a newly formed research initiative at Politecnico di Milano, I joined the ML/RL team working on the Unitree G1 humanoid robot after being selected through prior contributions. The project originated from a collaboration opportunity with content creator Jakidale, who had recently acquired the platform.",
    
      "Given the early-stage nature of the project, I contributed to defining the technical direction by reviewing state-of-the-art reinforcement learning approaches for locomotion and loco-manipulation. My focus evolved toward developing robust locomotion policies capable of handling uneven terrain and external disturbances.",
    
      "I initially explored the VideoMimic framework from UC Berkeley, which conditions locomotion policies on LiDAR-based perception. However, due to instability introduced by the robot’s high degrees of freedom and dexterous hands, I decided to redesign the pipeline from scratch, independently implementing and training a new locomotion policy without relying on the original codebase."
  
    ],
    techStack: ["Reinforcement Learning", "Humanoid Locomotion", "Simulation (Isaac Sim / MuJoCo)", "Imitation Learning", "Python"],
    challenges: [
      "Stabilizing locomotion in a high-DOF humanoid robot with additional manipulation capabilities.",
      "Adapting perception-conditioned policies to work reliably without existing frameworks.",
      "Operating in an early-stage project with undefined roles and evolving objectives."
    ],
    metrics: [
      "Achieved 100% stability in simulation on flat terrain.",
      "Maintained stability under lateral perturbations without falling."
    ],
  },
  {
    id: "falco-drone",
    title: "FALCO Autonomous Drone",
    company: "AEA PoliMi",
    date: "Nov 2023 – Feb 2025",
    location: "Milan, Italy",
    hasPublication: true,
    "shortDescription": "Developed a C++ path planning algorithm for autonomous drone navigation in complex urban environments.",
    "longDescription": [
      "As part of the FALCO autonomous drone project at Politecnico di Milano, I worked in a three-person software team to develop a path planning algorithm for dense urban navigation, generating collision-free trajectories from point cloud data.",
      "Starting from the state-of-the-art Informed RRT*, we identified a major bottleneck in initial path discovery due to uniform sampling. We designed a probabilistic ellipsoid sampling strategy using an exponential distribution along the start–goal axis to focus exploration on more promising regions.",
      "We further implemented an adaptive version that dynamically adjusts sampling based on obstacle density, significantly improving efficiency and robustness across various environments."
    ],
    techStack: ["C++", "Python", "Motion Planning", "Informed-RRT*", "Algorithm Optimization"],
    challenges: [
      "Handling dense, cluttered urban environments efficiently.",
      "Reducing computational and memory overhead of sampling-based planners."
    ],
    metrics: [
      "85% faster initial path discovery compared to baseline Informed-RRT*.",
      "78% lower memory usage during the search phase.",
      "Work published at IEEE ROBOT2024."
    ],
    link: "https://ieeexplore.ieee.org/document/10796871",
    media: [
      {
        type: "video",
        url: "/projects/falco-drone/planning_demo.mp4",
        description: "Visualization of the planning algorithm in a 2D environment"
      }
    ]
  }
];
