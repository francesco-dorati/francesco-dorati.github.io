export interface Course {
  name: string;
  description?: string;
}

export interface EducationProject {
  title: string;
  type: string;
  year: string;
  description: string;
  technologies?: string[];
  grade?: string;
}

export interface Degree {
  id: string;
  university: string;
  degree: string;
  duration: string;
  location: string;
  description: string;
  courses: Course[];
  projects: EducationProject[];
}

export const educationData: Degree[] = [
  {
    id: 'msc-compuer-engineering',
    university: 'Polytechnic University of Milan',
    degree: 'MSc in Computer Engineering (Artificial Intelligence)',
    duration: '2025 - Present',
    location: 'Milan, Italy',
    description: 'Advanced studies in autonomous mechanical systems, non-linear control theory, and artificial intelligence.',
    courses: [
      { name: '⚙️ Advanced Control Systems', description: 'Theoretical and practical exploration of non-linear control algorithms, predictive control (MPC), and robust feedback mechanisms.' },
      { name: '🧠 Artificial Intelligence', description: 'Deep dive into modern AI paradigms, including reinforcement learning agents, neural networks, and perception models.' },
      { name: '🦾 Robotics 2', description: 'Advanced kinematics, rigid body dynamics, and trajectory optimization for high-DoF manipulators and mobile platforms.' }
    ],
    projects: [
      {
        title: 'FALCO Drone Integration',
        type: 'Master Thesis',
        year: '2024 - 2025',
        description: 'Designed and simulated an autonomous drone capable of obstacle avoidance in unstructured environments.',
        technologies: ['ROS 2', 'C++', 'Python', 'Gazebo'],
        grade: '110/110 cum laude'
      }
    ]
  },
  {
    id: 'bsc-computer-engineering',
    university: 'Polytechnic University of Milan',
    degree: 'BSc in Computer Engineering',
    duration: '2022 - 2025',
    location: 'Milan, Italy',
    description: 'Foundational coursework in computer science architecture, software engineering, and embedded firmware systems.',
    courses: [
      { name: '🧮 Algorithms and Data Structures', description: 'Time complexity, memory optimization, graphs, trees, and dynamic programming in C.' },
      { name: '🧠 Foundations of Artificial Intelligence', description: 'Core principles of machine learning, classic search algorithms, and intelligent agent design.' },
      { name: '🎲 Probability and Statistics', description: 'Mathematical frameworks for modeling uncertainty, stochastic processes, and statistical inference.' },
      { name: '🕹️ Fundamentals of Automatic Control', description: 'Introductory Laplace transforms, transfer functions, and frequency-domain analysis for closed-loop systems.' },
      { name: '🏗️ Software Engineering', description: 'Design patterns, agile methodology, and scalable object-oriented enterprise system architecture.' },
      { name: '⚙️ Mechanics', description: 'Newtonian physics, rigid body kinematics, and classical statics and dynamics.' },
      { name: '📟 Digital Logic Design', description: 'Boolean algebra, sequential logic circuits, and low-level hardware architecture principles.' },
      { name: '🔌 Electronics', description: 'Analysis of analog circuits, semiconductor devices, op-amps, and signal amplification.' },
      { name: '📡 Electromagnetism and Transmission Media', description: 'Maxwell equations, electromagnetic wave propagation, and transmission line theory.' },
      { name: '💻 Computer Architectures', description: 'Exploration of CPU pipelines, cache hierarchies, assembly language, and ISA design.' },
      { name: '📐 Calculus I & II', description: 'Limits, differential equations, multivariable integration, and vector calculus.' },
      { name: '📏 Linear Algebra', description: 'Matrix operations, vector spaces, eigenvalues, and coordinate transformations.' },
      { name: '🏭 Industrial Automation', description: 'Programmable logic controllers (PLCs), SCADA systems, and factory-floor robotics.' },
      { name: '🔋 Basic Circuit Design', description: 'Kirchhoff laws, node/mesh analysis, and foundational passive/active circuit topologies.' },
      { name: '🗄️ Database Design', description: 'Relational algebra, SQL, database normalization, and transaction management.' },
      { name: '📈 Business Economics', description: 'Micro-economic principles, corporate financial analysis, and engineering supply chains.' },
    ],
    projects: [
      {
        title: 'Bakery Logistics Management System',
        type: 'Algorithms and Data Structures',
        year: '2024',
        description: 'Developed a discrete-time simulator in C to manage complex inventory, recipes, and automated logistics. Optimized data retrieval using Hash Tables and implemented a FEFO (First-Expired, First-Out) system via expiration-sorted linked lists. Developed a shipping controller using Merge Sort to prioritize complex delivery constraints.',
        technologies: ['C', 'Hash Tables', 'Linked Lists', 'Merge Sort'],
        grade: '30/30'
      },
      {
        title: 'Galaxy Trucker',
        type: 'Software Engineering',
        year: '2025',
        description: 'Developed a full-stack, distributed multiplayer game utilizing MVC architecture and dual-mode networking (RMI & Sockets). Designed for scalability and robustness, the system features both a JavaFX GUI and a CLI, supports concurrent game instances, and implements  persistence for disaster recovery.',
        technologies: ['Java', 'JavaFX', 'Sockets', 'Maven', 'JUnit'],
        grade: '30/30'
      },
      {
        title: 'Differential Filter Module for FPGA',
        type: 'Course Project',
        year: '2025',
        description: 'Designed a hardware module in VHDL to apply a differential filter to data streams in memory. The system processes 8-bit signed words, alternating between 3rd-order and 5th-order filters based on a memory-mapped configuration.',
        technologies: ['VHDL', 'Vivado', 'FPGA Design Principles', 'Finite State Machines (FSM)'],
        grade: '30/30'
      },
    ]
  }
];

export interface ProgramActivity {
  name: string;
  description?: string;
}

export interface ProgramProject {
  title: string;
  description: string;
}

export interface Program {
  id: string;
  name: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  activities: ProgramActivity[];
  projects: ProgramProject[];
}

export const programs: Program[] = [
  {
    id: 'unitech',
    name: 'UNITECH International Program',
    role: 'cohort 25',
    duration: '2024 - 2026',
    location: 'Multiple Locations (Europe)',
    description: 'An exclusive academic network integrating top European engineering talent with multinational corporate partners, focusing on tech leadership and sustainability.',
    activities: [
      { name: 'Corporate Case Studies', description: 'Solved real-world technical algorithms and business optimization challenges globally.' },
      { name: 'Leadership & Seminars', description: 'Participated in extensive cross-discipline seminars honing product architecture.' }
    ],
    projects: [
      { title: 'Sustainability Innovation Initiative', description: 'Collaborated on cross-disciplinary technical roadmaps focusing on autonomous manufacturing frameworks.' }
    ]
  },
  {
    id: 'summer-exchange',
    name: 'Research Exchange Program',
    role: 'Visiting Researcher',
    duration: 'Summer 2023',
    location: 'Helsinki, Finland',
    description: 'Intensive short-term research placement focusing on experimental autonomous systems and low-level firmware integration.',
    activities: [
      { name: 'Autonomous Navigation Algorithms', description: 'Explored multi-node SLAM mapping pipelines and stereo camera visual approximations.' }
    ],
    projects: [
      { title: 'Experimental Firmware Sandbox', description: 'Restructured the real-time IMU hardware processing loop mapped to an untethered autonomous rig.' }
    ]
  }
];
