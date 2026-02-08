import { Box, Container, Typography, Stack } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import HeroSection from '@components/HeroSection'
import ContactForm from '@components/ContactForm'
import { useScrollReveal } from '@hooks/useScrollReveal'

export default function ContactPage() {
  const scrollRef = useScrollReveal()

  return (
    <div ref={scrollRef}>
      <HeroSection
        title="Kontakt"
        subtitle="Vi horer gjerne fra deg!"
        compact
      />

      <Box sx={{ py: 10 }}>
        <Container maxWidth="md">
          {/* Intro text */}
          <div className="scroll-reveal">
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ textAlign: 'center', maxWidth: 600, mx: 'auto', mb: 6, lineHeight: 1.8 }}
            >
              Enten du vil booke bandet til et arrangement, har sporsmol om merch, eller bare vil si hei
              - ta gjerne kontakt! Vi svarer pa alle henvendelser sa raskt vi kan.
            </Typography>
          </div>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 6,
            }}
          >
            <div className="scroll-reveal scroll-reveal-delay-1">
              <Box>
                <Typography variant="h3" sx={{ mb: 3, textShadow: '0 0 20px rgba(196,30,30,0.2)' }}>
                  Send en melding
                </Typography>
                <ContactForm />
              </Box>
            </div>

            <div className="scroll-reveal scroll-reveal-delay-2">
              <Box>
                <Typography variant="h3" sx={{ mb: 3, textShadow: '0 0 20px rgba(196,30,30,0.2)' }}>
                  Booking & Info
                </Typography>
                <Stack spacing={3}>
                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      backgroundColor: '#141414',
                      border: '1px solid rgba(255,255,255,0.06)',
                      transition: 'border-color 0.3s ease',
                      '&:hover': { borderColor: 'rgba(196,30,30,0.3)' },
                    }}
                  >
                    <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1 }}>
                      <EmailIcon sx={{ color: 'primary.main', fontSize: 22 }} />
                      <Typography variant="h5" sx={{ fontWeight: 600 }}>Booking</Typography>
                    </Stack>
                    <Typography variant="body1" color="text.secondary">
                      booking@villgress.no
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, opacity: 0.7 }}>
                      For konserter, festivaler og arrangementer
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      backgroundColor: '#141414',
                      border: '1px solid rgba(255,255,255,0.06)',
                      transition: 'border-color 0.3s ease',
                      '&:hover': { borderColor: 'rgba(196,30,30,0.3)' },
                    }}
                  >
                    <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1 }}>
                      <EmailIcon sx={{ color: 'primary.main', fontSize: 22 }} />
                      <Typography variant="h5" sx={{ fontWeight: 600 }}>Generelle henvendelser</Typography>
                    </Stack>
                    <Typography variant="body1" color="text.secondary">
                      kontakt@villgress.no
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, opacity: 0.7 }}>
                      Presse, samarbeid og annet
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      backgroundColor: '#141414',
                      border: '1px solid rgba(255,255,255,0.06)',
                      transition: 'border-color 0.3s ease',
                      '&:hover': { borderColor: 'rgba(196,30,30,0.3)' },
                    }}
                  >
                    <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1 }}>
                      <PhoneIcon sx={{ color: 'primary.main', fontSize: 22 }} />
                      <Typography variant="h5" sx={{ fontWeight: 600 }}>Management</Typography>
                    </Stack>
                    <Typography variant="body1" color="text.secondary">
                      Fjordlyd Records
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, opacity: 0.7 }}>
                      management@fjordlyd.no
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      backgroundColor: '#141414',
                      border: '1px solid rgba(255,255,255,0.06)',
                      transition: 'border-color 0.3s ease',
                      '&:hover': { borderColor: 'rgba(196,30,30,0.3)' },
                    }}
                  >
                    <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1 }}>
                      <LocationOnIcon sx={{ color: 'primary.main', fontSize: 22 }} />
                      <Typography variant="h5" sx={{ fontWeight: 600 }}>Sted</Typography>
                    </Stack>
                    <Typography variant="body1" color="text.secondary">
                      Hurdal, Akershus, Norge
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </div>
          </Box>
        </Container>
      </Box>
    </div>
  )
}
