export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  role: string;
  date: string;
  location: string;
  longDescription: string[];
  techStack: string[];
  challenges: string[];
  link?: string;
  metrics?: string[];
}

export const projectsData: Project[] = [
  {
    id: "agv-robot",
    title: "AGV Robot and Artificial Vision",
    role: "Robotics Engineer",
    date: "Jan 2026 – Present",
    location: "Remote",
    shortDescription: "Computer vision-based navigation system for autonomous ground vehicles (AGV), replacing traditional ground-line sensors.",
    longDescription: [
      "Currently rethinking how AGVs navigate in industrial settings. Traditional AGVs rely on magnetic tape or painted lines on the floor, which are rigid and expensive to maintain.",
      "My work focuses on replacing this infrastructure with a purely vision-based approach. By utilizing cameras and computer vision algorithms, the robot can understand its environment dynamically.",
      "A significant portion of this project involves creating robust simulated environments to test the navigation stack before deploying to physical hardware, ensuring safety and reliability."
    ],
    techStack: ["Computer Vision", "ROS/ROS2", "Simulation", "Python", "C++"],
    challenges: [
      "Translating simulated camera data to real-world deployment (Sim2Real gap).",
      "Ensuring high-frequency control loops based on vision processing."
    ],
    metrics: ["Eliminated need for physical guide lines in testing phase."]
  },
  {
    id: "unitree-g1",
    title: "RL for Unitree G1 Humanoid",
    role: "ML/Robotics Engineer",
    date: "Sept 2025 – Present",
    location: "Milan, Italy",
    shortDescription: "Implementing state-of-the-art RL approaches for Unitree G1, training locomotion models using imitation learning.",
    longDescription: [
      "Working with the Unitree G1 humanoid robot represents a shift towards highly dynamic, bio-inspired robotics. Traditional control theory struggles with the high degrees of freedom and complex contact dynamics of bipedal walking.",
      "I am implementing Reinforcement Learning pipelines to teach the robot robust locomotion policies. This involves using massive parallel simulation (Isaac Sim / MuJoCo) to train policies via PPO.",
      "A key innovation in this work is integrating a scene reconstruction pipeline to improve the robot's spatial awareness and terrain adaptation."
    ],
    techStack: ["Reinforcement Learning (PPO)", "PyTorch", "Isaac Sim / MuJoCo", "Imitation Learning"],
    challenges: [
      "Designing complex reward functions that encourage stable walking without unnatural gaits.",
      "Safely deploying stochastic RL policies onto physical hardware."
    ]
  },
  {
    id: "falco-drone",
    title: "FALCO Autonomous Drone Nav",
    role: "Software Engineer",
    date: "Nov 2023 – Feb 2025",
    location: "Milan, Italy",
    shortDescription: "Developed a novel C++ path planning algorithm for autonomous drone navigation in 3D environments.",
    longDescription: [
      "The FALCO project focused on pushing the boundaries of autonomous drone flight in complex, obstacle-dense 3D environments.",
      "Standard pathfinding algorithms are often too slow or compute-heavy for the limited onboard hardware of a drone. I developed a novel adaptation of the Informed-RRT* algorithm.",
      "By introducing a map-adaptive sampling technique, the algorithm biases its search towards regions more likely to contain a valid path, significantly speeding up the initial discovery time."
    ],
    techStack: ["C++", "Path Planning Algorithms", "Informed-RRT*", "3D Geometry"],
    challenges: [
      "Optimizing C++ memory management to run on restricted embedded hardware.",
      "Handling dynamic, unknown obstacles in real-time."
    ],
    metrics: [
      "85% faster initial path discovery compared to baseline RRT*.",
      "78% reduction in memory usage during the search phase.",
      "Published in IEEE Xplore."
    ],
    link: "https://doi.org/10.1109/ROBOT61475.2024.10796871"
  }
];
