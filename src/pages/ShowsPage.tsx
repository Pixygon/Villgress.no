import { Box, Container, Stack, Typography, Button } from '@mui/material'
import SectionTitle from '@components/SectionTitle'
import ShowCard from '@components/ShowCard'
import { upcomingShows, pastShows } from '@utils/data'

export default function ShowsPage() {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="md">
        <SectionTitle title="Konserter" subtitle="Kommende og tidligere opptredener" />

        {/* Upcoming */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" sx={{ mb: 3 }}>
            Kommende
          </Typography>
          <Stack spacing={2}>
            {upcomingShows.map((show) => (
              <ShowCard key={show.id} show={show} />
            ))}
          </Stack>
        </Box>

        {/* Booking CTA */}
        <Box
          sx={{
            textAlign: 'center',
            py: 5,
            px: 4,
            mb: 8,
            backgroundColor: '#141414',
            borderRadius: 2,
            border: '1px solid rgba(196,30,30,0.2)',
          }}
        >
          <Typography variant="h3" sx={{ mb: 1 }}>
            Book Villgress
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Vil du ha oss på din festival, pub eller arrangement?
          </Typography>
          <Button component="a" href="mailto:booking@villgress.no" variant="contained" size="large">
            Kontakt for booking
          </Button>
        </Box>

        {/* Past */}
        <Typography variant="h3" sx={{ mb: 3 }}>
          Tidligere
        </Typography>
        <Stack spacing={2}>
          {pastShows.map((show) => (
            <ShowCard key={show.id} show={show} />
          ))}
        </Stack>
      </Container>
    </Box>
  )
}
