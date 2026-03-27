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

export interface EducationActivity {
  name: string;
  subtitle?: string;
  description?: string;
  color?: string;
}

export interface Degree {
  id: string;
  university: string;
  degree: string;
  subtitle?: string;
  duration: string;
  location: string;
  description: string;
  isExchange?: boolean;
  courses: Course[];
  projects: EducationProject[];
  activities?: EducationActivity[];
}

export const educationData: Degree[] = [
  {
    id: 'msc-computer-engineering',
    university: 'Polytechnic University of Milan (PoliMi)',
    degree: 'MSc in Computer Engineering',
    subtitle: 'Artificial Intelligence Specialization',
    duration: '2025 - Present',
    location: 'Milan, Italy',
    description: 'Advanced studies in artificial intelligence, autonomous systems and robotics, focusing on intelligent decision-making, multiagent systems, and real-world AI applications across robotics, computer vision, and autonomous technologies.',
    courses: [
      { name: '👥 Multiagent Systems', description: 'Autonomous agents, distributed intelligent systems, agent interaction, and real-world applications.' },
    ],
    projects: [

    ],
    activities: [
      { 
        name: 'Project Team Member - Automation Engineering Association (AEA)', 
        subtitle: 'Univeristy Association', 
        description: 'Contributed to robotics projects and participated in workshops within a university association.',
        color: 'red'
      },
      { 
        name: 'Project Team Member - PoliMi Data Science Association (PMDS) ', 
        subtitle: 'Univeristy Association', 
        description: 'Contributed to ML/AI projects and participated in workshops within a university association.',
        color: 'red'
      },
      { 
        name: 'Startup Bootcamp', 
        subtitle: 'Workshop', 
        description: 'Short program on innovation and entrepreneurship, covering intellectual property, business model validation, market strategies, and startup ecosystem dynamics.',
        color: 'cyan'
      },
      { 
        name: 'Reply Innovator Bootcamp', 
        subtitle: 'Company Visit & Workshop', 
        description: 'Hands-on bootcamp with Reply on innovation, teamwork, and solving real industrial problems.',
        color: 'cyan'
      },
    ]
  },
  {
    id: 'exchange-upc',
    university: 'Polytechnic University of Catalunya (UPC)',
    degree: 'Exchange - MSc in Artificial Intelligence',
    duration: 'Feb 2026 - Jun 2026',
    location: 'Barcelona, Spain',
    isExchange: true, 
    description: '',
    courses: [
      { name: '🧠 Machine Learning', description: 'Supervised and unsupervised methods, linear models, neural networks, SVMs, and ensemble techniques.' },
      { name: '👁️ Computer Vision', description: 'Fundamentals of image processing and analysis, including segmentation, feature extraction, and recognition using both classical methods and deep learning techniques.' },
      { name: '🗣️ Advanced Human Language Technologies', description: 'Statistical and neural approaches to NLP, covering language modeling, parsing, embeddings, transformers, and large language models.' },
      { name: '🖥️ Advanced Processor Architecture', description: 'Analysis of modern processor architectures, including superscalar, multicore, multithreaded, vector, and GPU systems.' },
    ],
    projects: [
      {
        title: 'L1 Data Prefetcher Design',
        type: 'Advanced Processor Architecture',
        year: '2026',
        description: 'Designed and implemented a custom L1 data cache prefetcher within the ChampSim simulator. Evaluated performance through simulation metrics (IPC, cache hit rate, memory latency) and analyzed hardware cost trade-offs.',
        technologies: ['C++', 'ChampSim', 'Computer Architecture', 'Cache Optimization', 'Simulation'],
        grade: '-'
      },
      {
        title: 'Biomedical NLP: Drug Interaction Extraction',
        type: 'Advanced Human Language Technologies',
        year: '2026',
        description: 'Extended, optimized, and evaluated NLP pipelines for biomedical information extraction, focusing on drug named entity recognition and drug–drug interaction classification. Compared feature-based models, neural networks, and large language models through systematic experimentation, analyzing performance, computational cost, and model trade-offs.',
        technologies: ['Python', 'Machine Learning', 'PyTorch/TensorFlow', 'NLP', 'LLMs', 'Sequence Labeling'],
        grade: '-'
      },
      // {
      //   title: 'Computer Vision Project',
      //   type: 'Computer Vision',
      //   year: '2026',
      //   description: 'TBD',
      //   technologies: ['TBD'],
      //   grade: '-'
      // },
      // {
      //   title: 'Machine Learning Project',
      //   type: 'Machine Learning',
      //   year: '2026',
      //   description: 'TBD',
      //   technologies: ['TBD'],
      //   grade: '-'
      // },
    ],
    activities: []
  },
  {
    id: 'bsc-computer-engineering',
    university: 'Polytechnic University of Milan (PoliMi)',
    degree: 'BSc in Computer Engineering',
    // subtitle: 'Final Grade: 100/110',
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
        type: 'Digital Logic Design',
        year: '2025',
        description: 'Designed a hardware module in VHDL to apply a differential filter to data streams in memory. The system processes 8-bit signed words, alternating between 3rd-order and 5th-order filters based on a memory-mapped configuration.',
        technologies: ['VHDL', 'Vivado', 'FPGA Design Principles', 'Finite State Machines (FSM)'],
        grade: '28/30'
      },
    ],
    activities: [
      { 
        name: 'Project Team Member - Automation Engineering Association (AEA)', 
        subtitle: 'Univeristy Association', 
        description: 'Contributed to robotics projects and participated in workshops within a university association.',
        color: 'red'
      },
      { 
        name: 'Best Freshmen Award Winner', 
        subtitle: 'Merit-Based Scholarship', 
        description: 'Received a €1,000 academic prize for remarkable performance during the first year of studies.',
        color: 'yellow'
      },
      { 
        name: 'Elements of Entrepeneurship', 
        subtitle: 'Elective Course', 
        description: 'Introduction to business basics, including project management, finance, and key soft skills for companies and startups.',
        color: 'cyan'
      },
      { 
        name: 'Startup 101', 
        subtitle: 'Elective Course', 
        description: 'Hands-on course on building a startup, from idea to testing, using tools like the business model canvas.',
        color: 'cyan'
      },
      { 
        name: 'ABB Innovator Bootcamp', 
        subtitle: 'Company Visit & Workshop', 
        description: 'Hands-on bootcamp with ABB on innovation, teamwork, and solving real industrial problems.',
        color: 'cyan'
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
  subtitle?: string;
  description: string;
}

export interface TimelineEntry {
  date: string;
  title: string;
  location?: string;
  description?: string;
}

export interface Program {
  id: string;
  name: string;
  institution: string;
  duration: string;
  location: string;
  description: string;
  shortDescription: string;
  website?: string;
  image?: string;
  timeline?: TimelineEntry[];
  activities?: ProgramActivity[];
  projects?: ProgramProject[];
}

export const programs: Program[] = [
  {
    id: 'unitech',
    name: 'UNITECH International Program',
    institution: 'UNITECH International Society',
    duration: '2024 - 2026',
    location: 'Multiple Locations (Europe)',
    website: 'https://www.unitech-international.org/',
    description: 'International leadership and mobility programme for STEM students. Combines a semester of academic exchange at a partner university, an international corporate internship, and three intensive leadership and soft‑skills modules. Includes professional coaching, networking with global companies, and financial support to cover mobility and internship costs. Graduates join a large alumni network of engineers and industry partners.',
    shortDescription: 'Leadership development programme combining academic exchange, international internship, and professional coaching modules',
    image: '/programs/unitech/unitech-2.JPG',
    timeline: [
      { date: 'Sep 2025', title: 'Start-Up Week', location: 'Lyon, France', description: 'Introductory module bringing the new cohort together for team activities, leadership and business skills exercises, presentations, and discussions with the UNITECH network.' },
      { date: 'Sep 2025 - Jan 2026', title: 'Case Study Preparation', location: 'Milan, Italy', description: 'Worked with cohort members on a case study provided by Omya, analyzing threats and opportunities of specific EU legislation for the company.' },
      { date: 'Jan 2026', title: 'Mid Term Week', location: 'Helsinki, Finland', description: 'Module focused on finalizing the case study and preparing presentations for Corporate Partners, with workshops on presentation skills and stress management.' },
      { date: 'Feb 2026 - Jun 2026', title: 'Academic Exchange', location: 'Barcelona, Spain', description: 'Academic exchange at a partner university in Barcelona.' },
      { date: 'Sep 2026', title: 'End-of-Year Week', location: 'Barcelona, Spain', description: 'Final module focused on preparing for the transition to professional life through career‑oriented activities, peer workshops, coaching, and strengthening professional and leadership skills.' },
      { date: 'Next', title: 'Internship', location: 'TBD', description: 'Currently looking for an internship for September 2026.' }
    ],

    projects: [
      { 
        title: 'Does the Critical Raw Materials Act (CRMA) Present any Opportunities or Threats for Omya?', 
        subtitle: 'Case Study',
        description: 'Case study analyzing the opportunities and threats of the Critical Raw Materials Act (CRMA) for Omya, including regulatory implications and strategic recommendations for the company. Proposed expansion into two promising materials and explored potential EU startup partners for collaboration.' 
      }
    ]
  },
  {
    id: 'tef',
    name: 'TEF Ingition Program',
    institution: 'Tech European Foundation',
    duration: 'Fall 2025',
    location: 'Milan, Italy',
    website: 'https://tef.tech/',
    description: 'Intensive 7‑week student entrepreneurship program by the Tech Europe Foundation in collaboration with Università Bocconi and Politecnico di Milano. It supports early‑stage ideas with training, mentorship from experienced founders, and practical tools to develop a business concept. Received a €2,000 grant and the chance to pitch at a final Demo Day in front of professionals and investors.  ',
    shortDescription: '7‑week student program to test startup ideas with mentorship, funding, workshops, and a demo day to help launch real startups.',
    projects: [
      { 
        title: 'Organic Home Intelligence', 
        subtitle: 'Startup Idea',
        description: 'Privacy-first home automation ecosystem that runs 100% locally. Leveraging a multimodal AI pipeline that combines IR computer vision with localized LLMs to detect human behaviors and context.' 
      }
    ]
  }
];
