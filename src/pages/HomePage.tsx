import { Box, Container, Button, Stack } from '@mui/material'
import { Link } from 'react-router'
import HeroSection from '@components/HeroSection'
import SectionTitle from '@components/SectionTitle'
import ShowCard from '@components/ShowCard'
import NextShowBanner from '@components/NextShowBanner'
import LatestRelease from '@components/LatestRelease'
import { upcomingShows } from '@utils/data'
import { useScrollReveal } from '@hooks/useScrollReveal'

export default function HomePage() {
  const scrollRef = useScrollReveal()

  return (
    <div ref={scrollRef}>
      <HeroSection
        title="VILLGRESS"
        subtitle="Norsk rock fra Hurdal. Rå, årlig og ekte."
        ctaText="Hør musikken"
        ctaLink="/musikk"
      />

      {/* Next Show Countdown Banner */}
      <div className="scroll-reveal">
        <NextShowBanner />
      </div>

      {/* Latest Release Spotlight */}
      <div className="scroll-reveal">
        <LatestRelease />
      </div>

      {/* Upcoming Shows */}
      <Box sx={{ py: 10, backgroundColor: '#0d0d0d' }}>
        <Container maxWidth="md">
          <div className="scroll-reveal">
            <SectionTitle title="Kommende Konserter" />
          </div>
          <Stack spacing={2}>
            {upcomingShows.slice(0, 3).map((show, i) => (
              <div key={show.id} className={`scroll-reveal scroll-reveal-delay-${Math.min(i + 1, 3)}`}>
                <ShowCard show={show} />
              </div>
            ))}
          </Stack>
          <div className="scroll-reveal">
            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <Button component={Link} to="/konserter" variant="outlined" color="primary" sx={{ px: 4 }}>
                Se alle konserter
              </Button>
            </Box>
          </div>
        </Container>
      </Box>
    </div>
  )
}
