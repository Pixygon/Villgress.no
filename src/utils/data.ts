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
    name: 'Ola Villgress',
    instrument: 'Vokal / Gitar',
    image: '',
    bio: 'Frontmann og låtskriver. Har spilt gitar siden han var 15 år gammel.',
  },
  {
    name: 'Per Villgress',
    instrument: 'Gitar',
    image: '',
    bio: 'Leadgitarist med en forkjærlighet for tunge riff og melodiske soloer.',
  },
  {
    name: 'Kari Villgress',
    instrument: 'Bass',
    image: '',
    bio: 'Grunnfjellet i bandet. Holder takten og grooven gående.',
  },
  {
    name: 'Lars Villgress',
    instrument: 'Trommer',
    image: '',
    bio: 'Kraftig og presis bak trommesettet. Drives av energi og rytme.',
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
    venue: 'Byscenen',
    city: 'Trondheim',
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
]

export const releases: Release[] = [
  {
    id: '1',
    title: 'Villgress',
    year: 2025,
    type: 'Album',
    coverImage: '',
    spotifyUrl: '#',
    appleMusicUrl: '#',
    description: 'Debutalbumet. Ti spor med ren, norsk rock.',
  },
  {
    id: '2',
    title: 'Stein og Stål',
    year: 2024,
    type: 'EP',
    coverImage: '',
    spotifyUrl: '#',
    description: 'Fire spor som definerer lyden av Villgress.',
  },
  {
    id: '3',
    title: 'Første Frost',
    year: 2023,
    type: 'Singel',
    coverImage: '',
    spotifyUrl: '#',
    description: 'Den aller første singelen. Der det hele startet.',
  },
]

export const bandBio = `Villgress er et norsk rockeband fra Hurdal. Med røtter i klassisk rock og en moderne edge, leverer bandet kraftig livemusikk med norske tekster som treffer.

Bandet ble grunnlagt i 2022 og har siden da bygget seg opp en trofast fanskare gjennom intense liveshow og ærlige låter om livet på bygda og i byen.

Musikken til Villgress er rå, ærlig og ekte — akkurat som bandet selv.`
