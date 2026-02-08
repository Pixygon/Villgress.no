import { useState } from 'react'
import { Link } from 'react-router'
import { Box, Container, Typography, Stack, IconButton, TextField, Button } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import HeadphonesIcon from '@mui/icons-material/Headphones'
import { tokens } from '@/theme'

const footerLinks = [
  { label: 'Hjem', path: '/' },
  { label: 'Om Oss', path: '/om-oss' },
  { label: 'Musikk', path: '/musikk' },
  { label: 'Konserter', path: '/konserter' },
  { label: 'Kontakt', path: '/kontakt' },
]

const socialLinks = [
  { icon: HeadphonesIcon, label: 'Spotify', url: '#' },
  { icon: InstagramIcon, label: 'Instagram', url: '#' },
  { icon: FacebookIcon, label: 'Facebook', url: '#' },
  { icon: YouTubeIcon, label: 'YouTube', url: '#' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

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
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' },
            gap: 4,
          }}
        >
          {/* Branding */}
          <Box>
            <Typography
              variant="h3"
              sx={{
                fontFamily: '"Oswald", sans-serif',
                fontWeight: 700,
                mb: 2,
                letterSpacing: '0.15em',
                textShadow: '0 0 20px rgba(196,30,30,0.3)',
              }}
            >
              VILLGRESS
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Norsk rock fra Hurdal. Ra, arlig og ekte.
            </Typography>
            <Stack direction="row" spacing={0.5}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.label}
                  href={social.url}
                  size="small"
                  aria-label={social.label}
                  sx={{
                    color: tokens.text.secondary,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: tokens.red.main,
                      transform: 'translateY(-2px)',
                      backgroundColor: 'rgba(196,30,30,0.1)',
                    },
                  }}
                >
                  <social.icon fontSize="small" />
                </IconButton>
              ))}
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
                kontakt@villgress.no
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Hurdal, Norge
              </Typography>
            </Stack>
          </Box>

          {/* Newsletter */}
          <Box>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
              Nyhetsbrev
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Fa nyheter om konserter og utgivelser rett i innboksen.
            </Typography>
            {subscribed ? (
              <Typography variant="body2" sx={{ color: '#4caf50' }}>
                Takk for pategningen!
              </Typography>
            ) : (
              <Box component="form" onSubmit={handleNewsletterSubmit} sx={{ display: 'flex', gap: 1 }}>
                <TextField
                  placeholder="Din e-post"
                  size="small"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  sx={{
                    flex: 1,
                    '& .MuiOutlinedInput-root': {
                      fontSize: '0.85rem',
                      '& fieldset': {
                        borderColor: 'rgba(255,255,255,0.15)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(196,30,30,0.4)',
                      },
                    },
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="small"
                  sx={{
                    minWidth: 'auto',
                    px: 2,
                    fontSize: '0.8rem',
                  }}
                >
                  Meld pa
                </Button>
              </Box>
            )}
          </Box>
        </Box>

        <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.08)', mt: 5, pt: 3, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary" sx={{ opacity: 0.7 }}>
            &copy; {new Date().getFullYear()} Villgress. Alle rettigheter reservert.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
