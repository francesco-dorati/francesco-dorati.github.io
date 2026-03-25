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
}

export const projectsData: Project[] = [
  {
    id: "agv-robot",
    title: "Autonomous Ground Vehicle",
    company: "DevNut",
    date: "Jan 2026 – Present",
    location: "Remote",
    shortDescription: "Computer vision-based navigation system for autonomous ground vehicles (AGV), replacing traditional ground-line sensors.",
    longDescription: [
      "Currently rethinking how AGVs navigate in industrial settings. Traditional AGVs rely on magnetic tape or painted lines on the floor, which are rigid and expensive to maintain.",
      "My work focuses on replacing this infrastructure with a purely vision-based approach. By utilizing cameras and computer vision algorithms, the robot can understand its environment dynamically.",
      "A significant portion of this project involves creating robust simulated environments to test the navigation stack before deploying to physical hardware, ensuring safety and reliability."
    ],
    techStack: ["Python", "Webots simulation", "Sensor Integration", "Reactive Navigation"],
    challenges: [
      "Reactive navigation failures due to local minima problem.",
      "Testing navigation behaviours across simulated warehouse scenarios."
    ],
    metrics: ["Fully functional simulation-based navigation prototype."]
  },
  {
    id: "unitree-g1",
    title: "Humanoid Robot",
    company: "AEA PoliMi",
    date: "Sept 2025 – Present",
    location: "Milan, Italy",
    shortDescription: "Implementing state-of-the-art RL approaches for Unitree G1, training locomotion models using imitation learning.",
    longDescription: [
      "Working with the Unitree G1 humanoid robot represents a shift towards highly dynamic, bio-inspired robotics. Traditional control theory struggles with the high degrees of freedom and complex contact dynamics of bipedal walking.",
      "I am implementing Reinforcement Learning pipelines to teach the robot robust locomotion policies. This involves using massive parallel simulation (Isaac Sim / MuJoCo) to train policies via PPO.",
      "A key innovation in this work is integrating a scene reconstruction pipeline to improve the robot's spatial awareness and terrain adaptation."
    ],
    techStack: ["Reinforcement Learning", "Humanoid Locomotion Control", "Isaac Sim / MuJoCo", "Imitation Learning", "Python"],
    challenges: [
      "Stabilizing locomotion policies in robots with dexterous manipulators.",
      "Integrating perception signals into locomotion policies.",
      "Training robust policies under dynamic disturbances."
    ],
    metrics: [
      "100% walking stability in simulation",
      "Robust to lateral external pushes without falling.",
    ],
  },
  {
    id: "falco-drone",
    title: "FALCO Autonomous Drone",
    company: "AEA PoliMi",
    date: "Nov 2023 – Feb 2025",
    location: "Milan, Italy",
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
    link: "https://doi.org/10.1109/ROBOT61475.2024.10796871",
    media: [
      {
        type: "video",
        url: "/projects/falco-drone/planning_demo.mp4",
        description: "Visualization of the planning algorithm in a 2D environment"
      }
    ]
  }
];
