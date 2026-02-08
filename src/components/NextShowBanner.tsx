import { Box, Container, Typography, Button, Stack } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import EventIcon from '@mui/icons-material/Event'
import { upcomingShows } from '@utils/data'

export default function NextShowBanner() {
  const nextShow = upcomingShows[0]
  if (!nextShow) return null

  const dateObj = new Date(nextShow.date)
  const now = new Date()
  const diffMs = dateObj.getTime() - now.getTime()
  const daysUntil = Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)))

  return (
    <Box
      sx={{
        py: 5,
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, rgba(196,30,30,0.15) 0%, rgba(10,10,10,1) 50%, rgba(139,21,21,0.1) 100%)',
        borderTop: '1px solid rgba(196,30,30,0.2)',
        borderBottom: '1px solid rgba(196,30,30,0.2)',
      }}
    >
      {/* Subtle animated glow */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60%',
          height: '200%',
          background: 'radial-gradient(ellipse, rgba(196,30,30,0.08) 0%, transparent 70%)',
          animation: 'pulseGlow 4s ease-in-out infinite',
        }}
      />
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(196,30,30,0.9)',
              textTransform: 'uppercase',
              fontFamily: '"Oswald", sans-serif',
              fontWeight: 600,
              letterSpacing: '0.15em',
              mb: 1,
              fontSize: '0.85rem',
            }}
          >
            Neste Konsert
          </Typography>
          <Typography
            variant="h2"
            sx={{
              mb: 1.5,
              fontSize: { xs: '2rem', md: '2.8rem' },
              textShadow: '0 0 30px rgba(196,30,30,0.3)',
            }}
          >
            {nextShow.venue}
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={3}
            justifyContent="center"
            alignItems="center"
            sx={{ mb: 3 }}
          >
            <Stack direction="row" spacing={0.5} alignItems="center">
              <LocationOnIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
              <Typography variant="body1" color="text.secondary">
                {nextShow.city}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={0.5} alignItems="center">
              <EventIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
              <Typography variant="body1" color="text.secondary">
                {dateObj.toLocaleDateString('no-NO', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
              </Typography>
            </Stack>
          </Stack>

          {/* Countdown */}
          <Box
            sx={{
              display: 'inline-flex',
              gap: 3,
              mb: 3,
              p: 2,
              px: 4,
              borderRadius: 2,
              backgroundColor: 'rgba(196,30,30,0.08)',
              border: '1px solid rgba(196,30,30,0.2)',
            }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: '2.5rem',
                  color: '#fff',
                  lineHeight: 1,
                  textShadow: '0 0 20px rgba(196,30,30,0.4)',
                }}
              >
                {daysUntil}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ textTransform: 'uppercase', fontSize: '0.7rem', mt: 0.5 }}>
                dager igjen
              </Typography>
            </Box>
          </Box>

          <Box>
            {nextShow.ticketUrl && (
              <Button
                variant="contained"
                size="large"
                href={nextShow.ticketUrl}
                sx={{
                  px: 5,
                  py: 1.5,
                  fontSize: '1.05rem',
                  boxShadow: '0 0 30px rgba(196,30,30,0.4)',
                  '&:hover': {
                    boxShadow: '0 0 50px rgba(196,30,30,0.6)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Kjop Billetter
              </Button>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
