export interface Publication {
  id: string;
  title: string;
  authors: string[];
  publisher: string;
  year: string;
  link?: string;
  type: 'PAPER' | 'THESIS' | 'REPORT';
  status: 'PUBLISHED' | 'UNDER_REVIEW';
}

export const publications: Publication[] = [
  {
    id: 'eccv2026-affordance-vits',
    title: 'Foundation ViTs Can Learn Where to Act: Task Affordance Segmentation and Surface Normals',
    authors: ['Francesco Dorati', 'Tommaso F. Banfi'],
    publisher: 'ECCV 2026 Workshop',
    year: '2026',
    type: 'PAPER',
    status: 'UNDER_REVIEW'
  },
  {
    id: 'icra2026-bayesopt-mpc',
    title: 'Bayesian Optimization for Learning Nonlinear MPC in Autonomous Agent Navigation',
    authors: ['Lorenzo Ortolani', 'Gabriel Voss', 'Gabriele Beltrami', 'Francesco Dorati', 'Tommaso F. Banfi'],
    publisher: 'IEEE ICRA 2026 Workshop',
    link: "https://arxiv.org/abs/2606.14763",
    year: '2026',
    type: 'PAPER',
    status: 'PUBLISHED'
  },
  {
    id: 'robot2024-informed-rrt',
    title: 'Optimizing Initial Path Finding in Informed-RRT* with a Novel Map-Adaptive Sampling Technique',
    authors: ['Tommaso F. Banfi', 'Francesco Dorati', 'Nicola Manzoni', 'Jesús Martínez-Gómez'],
    publisher: '7th Iberian Robotics Conference (ROBOT 2024), IEEE Xplore',
    year: '2024',
    link: 'https://ieeexplore.ieee.org/document/10796871',
    type: 'PAPER',
    status: 'PUBLISHED'
  }
];
