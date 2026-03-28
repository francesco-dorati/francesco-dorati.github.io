export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  coverUrl?: string;
}

export interface ProfileStat {
  label: string;
  value: string;
}

export interface CoreIdea {
  id: string;
  text: string;
  source: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface CoreValue {
  emoji: string;
  label: string;
  text: string;
}

export interface Hobby {
  emoji: string;
  title: string;
  description: string;
}

export const books: Book[] = [
  { id: 'zarathustra', title: 'Thus Spoke Zarathustra', author: 'Friedrich Nietzsche', category: 'Philosophy' },
  { id: 'prince', title: 'The Prince', author: 'Niccolò Machiavelli', category: 'Political Philosophy' },
  { id: '1984', title: '1984', author: 'George Orwell', category: 'Dystopian Fiction' },
  { id: 'zeno', title: 'Zeno\'s Conscience', author: 'Italo Svevo', category: 'Psychological Fiction' },
  // { id: 'meditations', title: 'Meditations', author: 'Marcus Aurelius', category: 'Stoicism' },
  // { id: 'antichrist', title: 'The Antichrist', author: 'Friedrich Nietzsche', category: 'Philosophy' },
  // { id: 'letters-stoic', title: 'Letters from a Stoic', author: 'Seneca', category: 'Stoicism' },
  // { id: 'beyond-good-evil', title: 'Beyond Good and Evil', author: 'Friedrich Nietzsche', category: 'Philosophy' }
];

export const coreIdeas: CoreIdea[] = [
  {
    id: 'eternal-comeback',
    text: 'What, if some day or night a demon were to steal after you into your loneliest loneliness and say to you: \n\n "This life as you now live it and have lived it, you will have to live once more and innumerable times more… There will be nothing new in it, but every pain and every joy and every thought and sigh and everything unutterably small or great in your life must return to you, all in the same succession and sequence…" \n\nWould you not throw yourself down and gnash your teeth and curse the demon who spoke thus? Or have you once experienced a tremendous moment when you would answer him: "You are a god, and never have I heard anything more divine."',
    source: 'Friedrich Nietzsche',

  },
  {
    id: 'amor-fati',
    text: 'I cook every bit of chance in my own pot. And only when it is well done do I welcome it as nourishment for myself.',
    source: 'Friedrich Nietzsche',

  },
  {
    id: 'strong-opinions',
    text: 'Strong opinions, weakly held. Be passionate about your ideas, but be the first to look for evidence that you are wrong.',
    source: 'Decision Making',

  },
  {
    id: 'remix',
    text: 'Everything is a remix. Creation requires influence. Copy, transform, and combine.',
    source: 'Kirby Ferguson',
  }
];

export const profileStats: ProfileStat[] = [
  { label: 'NATIONALITY', value: 'ITA' },
  { label: 'LOCATION', value: 'Barcelona, Spain' },
  { label: 'UPTIME', value: '22 Years' },
];

export const timelineEvents: TimelineEvent[] = [
  {
    year: '2014',
    title: 'First Contact',
    description: 'Bought my first computer at 12, initially driven by gaming. This led me to explore computer graphics and develop a deeper curiosity about how operating systems work. That curiosity eventually evolved into building and assembling my own computer from scratch.'
  },
  {
    year: '2020',
    title: 'Web Development & Competitive Programming',
    description: 'Started learning programming in a structured way, exploring Java and JavaScript. Built web applications, working on both frontend and backend with databases, while also developing a strong interest in problem-solving through competitive programming.'
  },
  {
    year: '2023',
    title: 'Robotics Pivot',
    description: 'Joined the FALCO Drone project at university. Realized that while software is powerful, building systems that interact with the physical world adds new challenges and constraints. This led to a deeper interest in robotics and autonomous systems.'
  },
  {
    year: '2025',
    title: 'International Experiences',
    description: 'Participated in the UNITECH program, experiencing new international environments and ways of thinking while working with people from different backgrounds. This motivated me to pursue more international experiences and continue challenging myself in diverse contexts.'
  }
];

export const coreValues: CoreValue[] = [
  { emoji: '🧭', label: 'EXPLORATION', text: 'Explore, jump, take risks and try new things.' },
  { emoji: '🌱', label: 'GROWTH', text: 'Constant improvement and change. Always move forward.' },
  { emoji: '⚖️', label: 'BALANCE', text: 'Everything in life should be a balance.' }
];

export const hobbies: Hobby[] = [
  {
    emoji: '⛰️',
    title: 'Outdoors Exploration',
    description: 'Hiking, climbing, and spending time in nature.'
  },
  {
    emoji: '🗺️',
    title: 'Travel',
    description: 'Exploring new places, cultures, and ways of life.'
  },
  {
    emoji: '🥋',
    title: 'Martial Arts',
    description: 'Discipline, focus, and physical training.'
  }
];

export interface SectionContent {
  title: string;
  description?: string;
}

export interface AboutContent {
  intro: {
    title: string;
    description: string;
  };
  sections: {
    profile: SectionContent;
    timeline: SectionContent;
    systemIdle: SectionContent;
    cinema: SectionContent;
    library: SectionContent;
    finance: SectionContent;
    philosophy: SectionContent;
  };
  featuredQuoteId: string;
}

export interface HomeContent {
  role: string;
  tagline: string;
  location: string;
  locationEmoji: string;
  education: string;
  socialLinks: {
    label: string;
    url: string;
    type: 'email' | 'github' | 'linkedin' | 'scholar';
  }[];
}

export const aboutContent: AboutContent = {
  intro: {
    title: 'About Me',
    description: 'A high-level view of my journey, ethics, and offline interests.'
  },
  sections: {
    profile: { title: 'SYSTEM_PROFILE' },
    timeline: { title: 'TIMELINE' },
    systemIdle: { title: 'OFFLINE INTERESTS' },
    cinema: { 
      title: 'CINEMA', 
      description: 'Deeply passionate about cinematography, from visual composition to storytelling.' 
    },
    library: { 
      title: 'LIBRARY', 
      description: 'Exploring ideas, ethics, and human nature through reading.' 
    },
    finance: { 
      title: 'MONEY MANAGEMENT & FINANCE', 
      description: 'Building financial independence through disciplined spending and long-term investing.' 
    },
    philosophy: { title: 'VALUES & PHILOSOPHY' }
  },
  featuredQuoteId: 'eternal-comeback'
};

export const homeContent: HomeContent = {
  role: 'Computer Engineer',
  tagline: 'Physical AI & Autonomous Systems',
  location: 'Barcelona, Spain',
  locationEmoji: '​🇪🇸',
  education: 'MSc Computer Science and Engineering @ Politecnico di Milano',
  socialLinks: [
    { label: 'Email', url: 'mailto:fd.francescodorati@gmail.com', type: 'email' },
    { label: 'GitHub', url: 'https://github.com/francesco-dorati', type: 'github' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/francesco-dorati', type: 'linkedin' },
    { label: 'Scholar', url: 'https://scholar.google.com/citations?user=BHMDVC0AAAAJ', type: 'scholar' }
  ]
};
