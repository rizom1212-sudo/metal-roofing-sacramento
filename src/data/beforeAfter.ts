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
    id: 'complete-roof-replacement',
    before: {
      src: ASSETS.beforeAfter('complete-roof-replacement-before.png'),
      alt: 'Sacramento home before complete roof replacement',
    },
    after: {
      src: ASSETS.beforeAfter('complete-roof-replacement-after.png'),
      alt: 'Sacramento home after complete roof replacement',
    },
    title: 'Complete Roof Replacement',
    location: 'Sacramento, CA',
    category: 'Roof Replacement',
    description: 'From tear off to final installation, this Sacramento home received a complete roofing upgrade.',
  },
];
