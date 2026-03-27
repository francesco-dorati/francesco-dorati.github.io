export interface FocusArea {
  id: number;
  title: string;
  bullets: string[];
  icon: string;
}

export const currentFocus: FocusArea[] = [
  { 
    id: 1, 
    title: 'Robotics', 
    bullets: [
      'Autonomous Systems',
      'Reasoning & Decision Making',
      'Perception & Sensor Fusion',
      'Multi-Robot Coordination'
    ], 
    icon: '🦾' 
  },
  { 
    id: 2, 
    title: 'Artificial Intelligence', 
    bullets: [
      'Physical & Embodied AI',
      'Reinforcement Learning',
      'Computer Vision',
      'Language & Reasoning Models'
    ], 
    icon: '🧠' 
  },
  { 
    id: 3, 
    title: 'Computing Systems', 
    bullets: [
      'Embedded & Real-Time Systems',
      'IoT & Edge Computing',
      'Distributed Systems'
    ], 
    icon: '⚙️' 
  },
  { 
    id: 4, 
    title: 'Software Development', 
    bullets: [
      'Algorithm Design & Optimization',
      'Parallel & Asyncronous Programming'
    ], 
    icon: '💻' 
  },
];

export interface ExplorationItem {
  id: number;
  title: string;
  status: 'LEARNING' | 'PLANNED' | 'WISHLIST';
  progress: number;
  source?: string;
}

export const exploring: ExplorationItem[] = [
  { id: 1, title: 'LLMs & Transformer Architecture', status: 'LEARNING', progress: 20, source: 'HuggingFace Learn' },
  { id: 2, title: 'Vision-Language Models', status: 'PLANNED', progress: 0 },
  { id: 3, title: 'VLA & Robotics Foundation Models', status: 'PLANNED', progress: 0 },
  // { id: 4, title: 'Multi-Agent Path Planning', status: 'WISHLIST', progress: 0 }
];

export interface Course {
  id: number;
  title: string;
  platform: string;
  date: string;
  url?: string;
}

export const onlineCourses: Course[] = [
  { 
    id: 1, 
    title: 'Deep Reinforcement Learning', 
    platform: 'HuggingFace Learn', 
    date: '2025',
    url: 'https://huggingface.co/learn/deep-rl-course'
  },
  { 
    id: 2, 
    title: 'Deep Learning Specialization', 
    platform: 'Coursera (DeepLearning.AI)', 
    date: '2025',
    url: 'https://coursera.org/verify/specialization/6PZ2RQMJ786U'
  },
  { 
    id: 3, 
    title: 'Machine Learning Specialization', 
    platform: 'Coursera (Stanford | DeepLearning.AI)', 
    date: '2025',
    url: 'https://coursera.org/share/6abaff45758c803b96bf36791746508b'
  },
  { 
    id: 4, 
    title: 'CS50: Introduction to Computer Science', 
    platform: 'edX (Harvard)', 
    date: '2021',
    url: 'https://courses.edx.org/certificates/a469115579334077a6a304fe3a29f03b'
  },
];

export interface TechCategory {
  name: string;
  skills: string[];
}

export const techStack: TechCategory[] = [
  { name: 'AI & ML Frameworks', skills: ['PyTorch', 'TensorFlow', 'Scikit-learn'] },
  // { name: 'Model Architectures', skills: ['Transformers', 'CNNs / RNNs', 'GNNs / Diffusion', 'Foundation Models (VLMs)'] },
  { name: 'Computer Vision', skills: ['OpenCV', 'YOLO', 'Image Segmentation', 'Object Tracking', 'Sensor Fusion'] },
  { name: 'Robotics & Sim', skills: ['ROS / ROS2', 'DeepRL (Actor–Critic, PPO)', 'Gazebo', 'Isaac Sim', 'MuJoCo', 'Webots'] },
  { name: 'Hardware', skills: ['VHDL', 'Digital Logic (FSMs)', 'FPGA Design', 'Basic PCB Design'] },
  { name: 'Languages', skills: ['Python', 'C++', 'C', 'Java', 'MATLAB', 'SQL'] },
  { name: 'DevOps & Tools', skills: ['Linux', 'Docker', 'Git', 'RaspberryPI', 'Arduino'] }
];

export interface Language {
  name: string;
  level: string;
  status: 'NATIVE' | 'FLUENT' | 'LEARNING' | 'PLANNED';
}

export const languages: Language[] = [
  { name: 'Italian', level: 'Native', status: 'NATIVE' },
  { name: 'English', level: 'IELTS 7.5 (C1)', status: 'FLUENT' },
  { name: 'German', level: 'Wishlist / Future', status: 'PLANNED' },
  { name: 'Chinese', level: 'Wishlist / Future', status: 'PLANNED' },
];

export interface Publication {
  id: number;
  title: string;
  publisher: string;
  year: string;
  link?: string;
  type: 'PAPER' | 'THESIS' | 'REPORT';
}

export const publications: Publication[] = [
  { 
    id: 1, 
    title: 'Optimizing Initial Path Finding in Informed-RRT* with a Novel Map-Adaptive Sampling Technique', 
    publisher: '7th Iberian Robotics Conference (ROBOT 2024), IEEE Xplore', 
    year: '2024',
    link: 'https://ieeexplore.ieee.org/document/10796871',
    type: 'PAPER'
  }
];
