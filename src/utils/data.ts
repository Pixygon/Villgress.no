export interface BandMember {
  name: string
  instrument: string
  image: string
  bio: string
}

export interface Show {
  id: string
  date: string
  venue: string
  city: string
  ticketUrl?: string
  isPast: boolean
}

export interface Release {
  id: string
  title: string
  year: number
  type: 'Album' | 'EP' | 'Singel'
  coverImage: string
  spotifyUrl?: string
  appleMusicUrl?: string
  description: string
}

export const bandMembers: BandMember[] = [
  {
    name: 'Dennis Hemstad',
    instrument: 'Vokal',
    image: 'https://pixygontech.b-cdn.net/Projects/Villgress/dennis.jpg',
    bio: '',
  },
  {
    name: 'Biffen Bjørndal',
    instrument: 'Gitar / Vokal',
    image: 'https://pixygontech.b-cdn.net/Projects/Villgress/biffen.jpg',
    bio: '',
  },
  {
    name: 'Roar Kværnsveen',
    instrument: 'Orgel / Vokal',
    image: 'https://pixygontech.b-cdn.net/Projects/Villgress/roar.jpg',
    bio: '',
  },
  {
    name: 'Anders Halsam Engum',
    instrument: 'Bass / Vokal',
    image: 'https://pixygontech.b-cdn.net/Projects/Villgress/anders.jpg',
    bio: '',
  },
  {
    name: 'Tom Ove Dahl Trane',
    instrument: 'Trommer',
    image: 'https://pixygontech.b-cdn.net/Projects/Villgress/tom.jpg',
    bio: '',
  },
]

export const upcomingShows: Show[] = [
  {
    id: '1',
    date: '2026-03-15',
    venue: 'Rockefeller',
    city: 'Oslo',
    ticketUrl: '#',
    isPast: false,
  },
  {
    id: '2',
    date: '2026-04-02',
    venue: 'Garage',
    city: 'Bergen',
    ticketUrl: '#',
    isPast: false,
  },
  {
    id: '3',
    date: '2026-04-20',
    venue: 'Samfundet',
    city: 'Trondheim',
    ticketUrl: '#',
    isPast: false,
  },
  {
    id: '8',
    date: '2026-05-10',
    venue: 'Bla',
    city: 'Oslo',
    ticketUrl: '#',
    isPast: false,
  },
  {
    id: '9',
    date: '2026-06-13',
    venue: 'Hulen',
    city: 'Bergen',
    ticketUrl: '#',
    isPast: false,
  },
  {
    id: '10',
    date: '2026-07-04',
    venue: 'Tons of Rock',
    city: 'Oslo',
    ticketUrl: '#',
    isPast: false,
  },
]

export const pastShows: Show[] = [
  {
    id: '4',
    date: '2025-11-10',
    venue: 'Kulturhuset',
    city: 'Hurdal',
    isPast: true,
  },
  {
    id: '5',
    date: '2025-09-05',
    venue: 'John Dee',
    city: 'Oslo',
    isPast: true,
  },
  {
    id: '6',
    date: '2025-06-21',
    venue: 'Musikkfest',
    city: 'Eidsvoll',
    isPast: true,
  },
  {
    id: '11',
    date: '2025-05-17',
    venue: 'Blaa',
    city: 'Oslo',
    isPast: true,
  },
  {
    id: '12',
    date: '2025-03-22',
    venue: 'Kvarteret',
    city: 'Bergen',
    isPast: true,
  },
  {
    id: '13',
    date: '2024-12-31',
    venue: 'Sentrum Scene',
    city: 'Oslo',
    isPast: true,
  },
  {
    id: '14',
    date: '2024-10-15',
    venue: 'Rockefeller',
    city: 'Oslo',
    isPast: true,
  },
]

export const releases: Release[] = [
  {
    id: '1',
    title: 'Himmel & Helvete',
    year: 2015,
    type: 'Album',
    coverImage: 'https://pixygontech.b-cdn.net/Projects/Villgress/himmel&helvete.jpg',
    spotifyUrl: 'https://open.spotify.com/album/0ejn8GhOanTKLQIesIRW95',
    description: 'Andre album. Elleve spor med norsk rock som treffer rett i hjertet. Fra den energiske åpningen "Elvis" til den episke avslutningen "Du Og Jeg Og Friheten".',
  },
  {
    id: '2',
    title: 'En',
    year: 2013,
    type: 'Album',
    coverImage: 'https://pixygontech.b-cdn.net/Projects/Villgress/en.jpg',
    spotifyUrl: 'https://open.spotify.com/album/5nby6T0myH94nSMHMyZz2a',
    description: 'Debutalbumet. Tolv spor som la grunnlaget for Villgress. Fra "Skinn Og Bein" til "Kom Snart Tilbake" - der det hele startet.',
  },
  {
    id: '3',
    title: 'Elvis',
    year: 2015,
    type: 'Singel',
    coverImage: '',
    spotifyUrl: 'https://open.spotify.com/album/3T9g5BmHMTN0sUuAZV0Bzs',
    description: 'Singel fra albumet Himmel & Helvete.',
  },
]

export const bandBio = `Villgress er et norsk rockeband fra Oslo. Med røtter dypt plantet i klassisk rock og en moderne, kompromissløs edge, leverer bandet kraftig livemusikk med norske tekster som treffer rett i hjertet.

Debutalbumet "En" kom i 2013 med tolv spor som la grunnlaget for bandets sound. To år senere fulgte "Himmel & Helvete" (2015), elleve spor som tok bandet videre med enda sterkere låtskriving og råere produksjon.

Villgress har gjennom årene bestått av dedikerte musikere med en felles kjærlighet for ærlig, norsk rock. Med Dennis Hemstad på vokal, Biffen Bjørndal på gitar, Roar Kværnsveen på orgel, Anders Halsam Engum på bass og Tom Ove Dahl Trane på trommer leverer bandet en live-opplevelse det er vanskelig å glemme.`
