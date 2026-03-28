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
    description: 'Bought my first computer at 12. Instead of playing games, I started rooting Androids and understanding the "how" behind the hardware.'
  },
  {
    year: '2020',
    title: 'Lockdown Deep Dive',
    description: 'The global pause became a catalyst. Dedicated 10+ hours a day to self-teaching full-stack development and complex systems.'
  },
  {
    year: '2021',
    title: 'The Robotics Pivot',
    description: 'Joined the FALCO Drone project at university. Realized that while software is great, software that moves in the physical world is magic.'
  },
  {
    year: '2023',
    title: 'European Nomad',
    description: 'UNITECH International. Living and studying in Lyon, Helsinki, and Barcelona. Gained a management perspective on engineering.'
  }
];

export const coreValues: CoreValue[] = [
  { emoji: '🧪', label: 'CURIOSITY', text: 'The root of all engineering. The "how" over the "what".' },
  { emoji: '💠', label: 'MINIMALISM', text: 'High signal, low noise. Elimination of the non-essential.' },
  { emoji: '🏔️', label: 'RESILIENCE', text: 'Embracing the obstacle. Turning stressors into strength.' }
];
