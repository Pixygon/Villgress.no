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
    bio: 'Frontmann, vokalist og hovedlaten bak Villgress. Ola begynte a skrive sanger pa gutterommet i Hurdal da han var 15, inspirert av alt fra Motorpsycho til Black Sabbath. Hans rue stemme og arlege tekster er bandets sjel.',
  },
  {
    name: 'Per Villgress',
    instrument: 'Gitar',
    image: '',
    bio: 'Leadgitarist med en forkjarlighet for tunge riff og melodiske soloer. Per har studert musikk pa NTNU og bringer en teknisk presisjon til bandets live-lyd som far publikum til a miste pusten.',
  },
  {
    name: 'Kari Villgress',
    instrument: 'Bass',
    image: '',
    bio: 'Grunnfjellet i bandet. Kari holder takten og grooven gaende med en spillestil som blander punk-energi med progrock-kompleksitet. Tidligere bassist i Oslobandet Jernvilje.',
  },
  {
    name: 'Lars Villgress',
    instrument: 'Trommer',
    image: '',
    bio: 'Kraftig og presis bak trommesettet. Lars har spilt trommer siden han var 8 ar og har turnert med flere norske band for han fant sitt hjem i Villgress. Hans energi pa scenen er legendarisk.',
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
    title: 'Villgress',
    year: 2025,
    type: 'Album',
    coverImage: '',
    spotifyUrl: '#',
    appleMusicUrl: '#',
    description: 'Debutalbumet. Ti spor med ren, norsk rock. Fra det rade apningsporet "Hjerteslag" til den episke avslutningen "Tilbake til Jorda" - dette er lyden av et band som har funnet seg selv.',
  },
  {
    id: '2',
    title: 'Stein og Stal',
    year: 2024,
    type: 'EP',
    coverImage: '',
    spotifyUrl: '#',
    description: 'Fire spor som definerer lyden av Villgress. Tunge gitarer, drivende rytmer og tekster som graver dypt. Innspilt live i studio pa tre dager.',
  },
  {
    id: '3',
    title: 'Forste Frost',
    year: 2023,
    type: 'Singel',
    coverImage: '',
    spotifyUrl: '#',
    description: 'Den aller forste singelen. Der det hele startet. En kald novemberkveld i Hurdal, fanget pa tape.',
  },
  {
    id: '4',
    title: 'Morke Vann',
    year: 2025,
    type: 'Singel',
    coverImage: '',
    spotifyUrl: '#',
    appleMusicUrl: '#',
    description: 'Siste singel fra albumet. En mork og atmosfarisk ballade om a finne lys i morket. Bandets mest streamede lat hittil.',
  },
  {
    id: '5',
    title: 'Levende',
    year: 2024,
    type: 'Singel',
    coverImage: '',
    spotifyUrl: '#',
    description: 'En eksplosiv singel som fanger energien fra bandets legendariske liveshows. Spilt inn live pa John Dee i Oslo.',
  },
]

export const bandBio = `Villgress er et norsk rockeband fra Hurdal, Akershus. Med roter dypt plantet i klassisk rock og en moderne, kompromisslaus edge, leverer bandet kraftig livemusikk med norske tekster som treffer rett i hjertet.

Bandet ble grunnlagt hosten 2022 i en fuktig ovingskjeller i Hurdal sentrum. Det som startet som en gjeng kompiser som jammet pa coverlater, utviklet seg raskt til noe helt eget. Frontmann Ola Villgress begynte a skrive egne tekster - rue, arlige historier om livet pa den norske bygda, om lengsel etter noe storre, og om de stille oyeblikkene mellom stormen.

Gjennombruddet kom vinteren 2023 da singelen "Forste Frost" ble plukket opp av P3 og NRK Urort. Plutselig var det ikke bare venner og familie pa konsertene lengre. Bandet signerte med det uavhengige plateselskapet Fjordlyd Records og gikk rett i studio.

EP-en "Stein og Stal" (2024) sementerte bandets posisjon i den norske rockscenen, og debutalbumet "Villgress" (2025) ble hyllet av kritikerne. Dagbladet ga terningkast 5 og kalte det "det viktigste norske rockdebutalbumet pa ti ar."

Na forbereder bandet seg til sin storste turne hittil, med konserter pa Rockefeller, Garage, Samfundet og Tons of Rock sommeren 2026. Villgress er ikke bare et band - det er en bevegelse.`
