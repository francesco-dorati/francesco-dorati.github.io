/**
 * "News" log shown on the home page.
 *
 * Add new entries to the TOP of the array (newest first) — the home page only
 * shows the first 3. If this grows into its own page later, this file is
 * already structured to support that without changes.
 *
 * `description` supports **bold** (markdown-lite).
 * `links` is optional. Each link's `url` can be:
 *   - an internal route, e.g. '/projects/agv-robot' or '/publications'
 *   - an external URL, e.g. 'https://arxiv.org/abs/...'
 * (internal vs external is auto-detected from whether it starts with 'http')
 */

export interface NewsLink {
  label: string;
  url: string;
}

export interface NewsEntry {
  id: string;
  date: string;
  title: string;
  description: string;
  links?: NewsLink[];
}

export const newsEntries: NewsEntry[] = [
  {
    id: 'eccv-submission',
    date: '1 Aug 2026',
    title: 'Submitted to ECCV 2026',
    description: 'Submitted **"Foundation ViTs Can Learn Where to Act"** to the ECCV 2026 workshop.',
    links: [{ label: 'View publication', url: '/publications' }]
  },
  {
    id: 'summer-school',
    date: '3 Jul - 2 Aug 2026',
    title: 'Intelligent Robotics Summer School',
    description: 'Attended a summer program at **Beijing Institute of Technology** in Zhuhai, China.',
    links: [{ label: 'Read more', url: '/programs/intelligent-robotics-summer-school' }]
  },
  {
    id: 'devnut-wrap',
    date: '10 Jul 2026',
    title: 'Completed the DevNut navigation stack',
    description: 'Completed the navigation stack for the autonomous ground vehicle project at **DevNut**.',
    links: [{ label: 'View project', url: '/projects/agv-robot' }]
  }
];
