import { Link } from 'react-router'
import { Box, Container, Typography, Stack, IconButton } from '@mui/material'
import { tokens } from '@/theme'

const footerLinks = [
  { label: 'Hjem', path: '/' },
  { label: 'Om Oss', path: '/om-oss' },
  { label: 'Musikk', path: '/musikk' },
  { label: 'Konserter', path: '/konserter' },
  { label: 'Kontakt', path: '/kontakt' },
]

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#050505',
        borderTop: '1px solid rgba(196,30,30,0.2)',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
            gap: 4,
          }}
        >
          {/* Branding */}
          <Box>
            <Typography
              variant="h3"
              sx={{ fontFamily: '"Oswald", sans-serif', fontWeight: 700, mb: 2, letterSpacing: '0.1em' }}
            >
              VILLGRESS
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Norsk rock fra Hurdal
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
              <IconButton size="small" sx={{ color: tokens.text.secondary, '&:hover': { color: tokens.red.main } }}>
                {/* Spotify placeholder */}
                <Typography variant="body2">Spotify</Typography>
              </IconButton>
              <IconButton size="small" sx={{ color: tokens.text.secondary, '&:hover': { color: tokens.red.main } }}>
                <Typography variant="body2">Facebook</Typography>
              </IconButton>
              <IconButton size="small" sx={{ color: tokens.text.secondary, '&:hover': { color: tokens.red.main } }}>
                <Typography variant="body2">Instagram</Typography>
              </IconButton>
            </Stack>
          </Box>

          {/* Navigation */}
          <Box>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
              Sider
            </Typography>
            <Stack spacing={1}>
              {footerLinks.map((link) => (
                <Typography
                  key={link.path}
                  component={Link}
                  to={link.path}
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    textDecoration: 'none',
                    '&:hover': { color: tokens.red.main },
                    transition: 'color 0.2s',
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Stack>
          </Box>

          {/* Contact */}
          <Box>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
              Kontakt
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2" color="text.secondary">
                booking@villgress.no
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Hurdal, Norge
              </Typography>
            </Stack>
          </Box>
        </Box>

        <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.08)', mt: 4, pt: 3, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            &copy; {new Date().getFullYear()} Villgress. Alle rettigheter reservert.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
