import { ASSETS } from './assets';

export interface BeforeAfterPair {
  id: string;
  before: { src: string; alt: string };
  after: { src: string; alt: string };
  title: string;
  location: string;
  category: string;
  description: string;
}

export const beforeAfterPairs: BeforeAfterPair[] = [
  {
    id: 'tile-roof-replacement',
    before: {
      src: ASSETS.beforeAfter('tile-roof-before.png'),
      alt: 'Tile roof before replacement work',
    },
    after: {
      src: ASSETS.beforeAfter('tile-roof-after.png'),
      alt: 'Tile roof after replacement work',
    },
    title: 'Tile Roof Replacement',
    location: 'Sacramento, CA',
    category: 'Roof Replacement',
    description: 'Completed with upgraded tile installation and waterproof underlayment.',
  },
  {
    id: 'historic-home-restoration',
    before: {
      src: ASSETS.beforeAfter('historic-home-before.png'),
      alt: 'Historic home roof before restoration',
    },
    after: {
      src: ASSETS.beforeAfter('historic-home-after.png'),
      alt: 'Historic home roof after restoration',
    },
    title: 'Historic Home Roof Restoration',
    location: 'Sacramento, CA',
    category: 'Roof Restoration',
    description: 'Carefully restored while preserving the home’s original architecture.',
  },
];
