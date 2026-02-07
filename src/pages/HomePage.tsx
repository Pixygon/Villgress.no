import { Box, Container, Button, Stack } from '@mui/material'
import { Link } from 'react-router'
import HeroSection from '@components/HeroSection'
import SectionTitle from '@components/SectionTitle'
import ReleaseCard from '@components/ReleaseCard'
import ShowCard from '@components/ShowCard'
import { releases, upcomingShows } from '@utils/data'

export default function HomePage() {
  return (
    <>
      <HeroSection
        title="VILLGRESS"
        subtitle="Norsk rock fra Hurdal"
        ctaText="Hør musikken"
        ctaLink="/musikk"
      />

      {/* Latest Release */}
      <Box sx={{ py: 10, backgroundColor: '#0a0a0a' }}>
        <Container maxWidth="lg">
          <SectionTitle title="Siste Utgivelse" />
          <Box sx={{ maxWidth: 400, mx: 'auto' }}>
            <ReleaseCard release={releases[0]} />
          </Box>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button component={Link} to="/musikk" variant="outlined" color="primary">
              Se all musikk
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Upcoming Shows */}
      <Box sx={{ py: 10, backgroundColor: '#0d0d0d' }}>
        <Container maxWidth="md">
          <SectionTitle title="Kommende Konserter" />
          <Stack spacing={2}>
            {upcomingShows.slice(0, 3).map((show) => (
              <ShowCard key={show.id} show={show} />
            ))}
          </Stack>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button component={Link} to="/konserter" variant="outlined" color="primary">
              Se alle konserter
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  )
}
