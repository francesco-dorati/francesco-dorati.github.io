export interface FocusArea {
  id: number;
  title: string;
  desc: string;
  icon: string;
}

export interface LearnedDomain {
  category: string;
  skills: string[];
}

export interface TimelineEvent {
  year: string;
  text: string;
}

export const currentFocus: FocusArea[] = [
  { id: 1, title: 'Robotics', desc: 'Sensor fusion, control architectures, and autonomy loops.', icon: '🤖' },
  { id: 2, title: 'Control Systems', desc: 'Deep dive into PID tuning and rigid velocity control mechanisms.', icon: '⚙️' },
  { id: 3, title: 'AI & Algorithms', desc: 'Reinforcement learning foundations and spatial path planning.', icon: '🧠' }
];

export const learnedDomains: LearnedDomain[] = [
  {
    category: 'Robotics',
    skills: ['Encoder-based odometry', 'IMU kinematics & filtering', 'Motor control loops (PID)']
  },
  {
    category: 'AI / Algorithms',
    skills: ['Computer Vision basics', 'Path planning (A*, Dijkstra)', 'Q-Learning fundamentals']
  },
  {
    category: 'Systems & Embedded',
    skills: ['C++ and Python bridging', 'Microcontroller protocols (UART/I2C/SPI)', 'Linux subsystem admin']
  }
];

export const exploring: string[] = [
  'Visual SLAM (Simultaneous Localization and Mapping)',
  'Extended Kalman Filters',
  'Advanced Non-linear Control Theory'
];

export const timeline: TimelineEvent[] = [
  { year: '2023', text: 'Started writing serious code and deeply exploring software engineering.' },
  { year: '2024', text: 'Built my very first physical robot and fell in love with hardware/software integration.' },
  { year: '2025', text: 'Currently focusing heavily on advanced control systems and autonomy architectures.' }
];


