import { Box, Container, Typography, Stack } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import SectionTitle from '@components/SectionTitle'
import ContactForm from '@components/ContactForm'

export default function ContactPage() {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="md">
        <SectionTitle title="Kontakt" subtitle="Ta kontakt for booking eller andre henvendelser" />

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 6,
          }}
        >
          <Box>
            <Typography variant="h3" sx={{ mb: 3 }}>
              Send en melding
            </Typography>
            <ContactForm />
          </Box>

          <Box>
            <Typography variant="h3" sx={{ mb: 3 }}>
              Booking & Info
            </Typography>
            <Stack spacing={3}>
              <Box>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                  <EmailIcon sx={{ color: 'primary.main' }} />
                  <Typography variant="h5">Booking</Typography>
                </Stack>
                <Typography variant="body1" color="text.secondary">
                  booking@villgress.no
                </Typography>
              </Box>
              <Box>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                  <EmailIcon sx={{ color: 'primary.main' }} />
                  <Typography variant="h5">Generelle henvendelser</Typography>
                </Stack>
                <Typography variant="body1" color="text.secondary">
                  kontakt@villgress.no
                </Typography>
              </Box>
              <Box>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                  <LocationOnIcon sx={{ color: 'primary.main' }} />
                  <Typography variant="h5">Sted</Typography>
                </Stack>
                <Typography variant="body1" color="text.secondary">
                  Hurdal, Norge
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
