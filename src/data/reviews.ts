export interface Review {
  name: string;
  text: string;
  rating: number;
  location?: string;
}

export const reviews: Review[] = [
  {
    name: 'Molly Sweeney',
    text: 'Very responsive and knowledgeable. I would never go with anyone else.',
    rating: 5,
    location: 'Sacramento, CA',
  },
  {
    name: 'Tony Tieso',
    text: 'Second time I have worked with PRC 13 Roofing. I could not be happier with the responsiveness, fair pricing and quality of work.',
    rating: 5,
    location: 'Roseville, CA',
  },
  {
    name: 'Jeremy Bockman',
    text: 'The PRC 13 team was professional and thorough throughout the roof replacement process. They paid close attention to our concerns every step of the way.',
    rating: 5,
    location: 'Folsom, CA',
  },
  {
    name: 'Mario Villanueva',
    text: 'I requested an estimate and PRC 13 arrived the same day. My new roof looks amazing.',
    rating: 5,
    location: 'Elk Grove, CA',
  },
  {
    name: 'Brandon Green',
    text: 'PRC 13 came by for a roof leak estimate, arrived on schedule, had a solution, and finished faster than other roofing companies estimated.',
    rating: 5,
    location: 'Rancho Cordova, CA',
  },
  {
    name: 'Lina Barham',
    text: 'Professional, knowledgeable, responsive, and the quality of the work is outstanding.',
    rating: 5,
    location: 'Sacramento, CA',
  },
];
