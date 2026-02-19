import { Box, Container, Stack, Typography, Button } from '@mui/material'
import HeroSection from '@components/HeroSection'
import ShowCard from '@components/ShowCard'
import { upcomingShows, pastShows } from '@utils/data'
import { useScrollReveal } from '@hooks/useScrollReveal'

export default function ShowsPage() {
  const scrollRef = useScrollReveal()

  return (
    <div ref={scrollRef}>
      <HeroSection
        title="Konserter"
        subtitle="Kommende og tidligere opptredener"
        compact
      />

      <Box sx={{ py: 10 }}>
        <Container maxWidth="md">
          {/* Upcoming */}
          <Box sx={{ mb: 8 }}>
            <div className="scroll-reveal">
              <Typography variant="h3" sx={{ mb: 3, textShadow: '0 0 20px rgba(196,30,30,0.2)' }}>
                Kommende
              </Typography>
            </div>
            <Stack spacing={2}>
              {upcomingShows.map((show, i) => (
                <div key={show.id} className={`scroll-reveal scroll-reveal-delay-${Math.min(i + 1, 3)}`}>
                  <ShowCard show={show} />
                </div>
              ))}
            </Stack>
          </Box>

          {/* Booking CTA */}
          <div className="scroll-reveal">
            <Box
              sx={{
                textAlign: 'center',
                py: { xs: 4, md: 6 },
                px: { xs: 2.5, md: 4 },
                mb: 8,
                backgroundColor: '#141414',
                borderRadius: 2,
                border: '1px solid rgba(196,30,30,0.25)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(ellipse at center, rgba(196,30,30,0.06) 0%, transparent 70%)',
                },
              }}
            >
              <Typography variant="h3" sx={{ mb: 1, position: 'relative', textShadow: '0 0 20px rgba(196,30,30,0.2)' }}>
                Book Villgress
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3, position: 'relative' }}>
                Vil du ha oss på din festival, pub eller arrangement? Vi spiller over hele landet!
              </Typography>
              <Button
                component="a"
                href="mailto:booking@villgress.no"
                variant="contained"
                size="large"
                sx={{
                  position: 'relative',
                  px: 5,
                  boxShadow: '0 0 25px rgba(196,30,30,0.3)',
                  '&:hover': {
                    boxShadow: '0 0 40px rgba(196,30,30,0.5)',
                  },
                }}
              >
                Kontakt for booking
              </Button>
            </Box>
          </div>

          {/* Past */}
          <div className="scroll-reveal">
            <Typography variant="h3" sx={{ mb: 3, opacity: 0.7 }}>
              Tidligere
            </Typography>
          </div>
          <Stack spacing={2}>
            {pastShows.map((show, i) => (
              <div key={show.id} className={`scroll-reveal scroll-reveal-delay-${Math.min(i + 1, 3)}`}>
                <ShowCard show={show} />
              </div>
            ))}
          </Stack>
        </Container>
      </Box>
    </div>
  )
}
