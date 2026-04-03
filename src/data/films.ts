export interface Film {
  id: string;
  title: string;
  director: string;
  year: number;
  description: string;
  imageUrl?: string;
}

export const filmsData: Film[] = [
  {
    id: '2001-a-space-odyssey',
    title: '2001: A Space Odyssey',
    director: 'Stanley Kubrick',
    year: 1968,
    description: '',
    imageUrl: 'films/2001-3.jpg'
  },
  {
    id: 'apocalypse-now',
    title: 'Apocalypse Now',
    director: 'Francis Ford Coppola',
    year: 1979,
    description: '',
    imageUrl: 'films/AN-3.jpg'
  },
  {
    id: 'barry-lyndon',
    title: 'Barry Lyndon',
    director: 'Stanley Kubrick',
    year: 1975,
    description: '',
    imageUrl: 'films/BL-2.jpg'
  },
  {
    id: 'taxi-driver',
    title: 'Taxi Driver',
    director: 'Martin Scorsese',
    year: 1976,
    description: '',
    imageUrl: 'films/TD-3.jpg'
  },
  {
    id: 'the-shining',
    title: 'The Shining',
    director: 'Stanley Kubrick',
    year: 1980,
    description: '',
    imageUrl: 'films/TS-4.jpg'
  },
  {
    id: 'grand-budapest-hotel',
    title: 'The Grand Budapest Hotel',
    director: 'Wes Anderson',
    year: 2014,
    description: '',
    imageUrl: 'films/TGBH.png'
  },
  {
    id: 'sprited-away',
    title: 'Spirited Away',
    director: 'Hayao Miyazaki',
    year: 2001,
    description: '',
    imageUrl: 'films/SA.jpg'
  },
  {
    id: 'the-great-beauty',
    title: 'The Great Beauty',
    director: 'Paolo Sorrentino',
    year: 2013,
    description: '',
    imageUrl: 'films/TGB-2.jpg'
  },


  {
    id: 'trainspotting',
    title: 'Trainspotting',
    director: 'Danny Boyle',
    year: 1996,
    description: '',
    imageUrl: 'films/T-2.jpg'
  },

];
