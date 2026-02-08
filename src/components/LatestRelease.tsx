import { Box, Container, Typography, Button, Stack } from '@mui/material'
import { Link } from 'react-router'
import { releases } from '@utils/data'
import { tokens } from '@/theme'

export default function LatestRelease() {
  const latest = releases[0]
  if (!latest) return null

  return (
    <Box sx={{ py: 10, backgroundColor: '#0a0a0a', position: 'relative', overflow: 'hidden' }}>
      {/* Subtle background glow */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          height: '80%',
          background: 'radial-gradient(ellipse, rgba(196,30,30,0.06) 0%, transparent 70%)',
        }}
      />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography
          variant="body2"
          sx={{
            textAlign: 'center',
            color: tokens.red.main,
            textTransform: 'uppercase',
            fontFamily: '"Oswald", sans-serif',
            fontWeight: 600,
            letterSpacing: '0.2em',
            mb: 1,
          }}
        >
          Nyeste Utgivelse
        </Typography>
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 5,
            textShadow: '0 0 30px rgba(196,30,30,0.2)',
          }}
        >
          {latest.title}
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 4, md: 6 },
            alignItems: 'center',
          }}
        >
          {/* Album Art Placeholder */}
          <Box
            sx={{
              width: '100%',
              paddingTop: '100%',
              position: 'relative',
              backgroundColor: '#141414',
              borderRadius: 2,
              border: '1px solid rgba(196,30,30,0.3)',
              boxShadow: '0 0 60px rgba(196,30,30,0.1), 0 20px 60px rgba(0,0,0,0.4)',
              overflow: 'hidden',
              maxWidth: 450,
              mx: 'auto',
              '&::after': {
                content: '""',
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at center, rgba(196,30,30,0.08) 0%, transparent 70%)',
              },
            }}
          >
            {/* Vinyl record design */}
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '60%',
                height: '60%',
                borderRadius: '50%',
                border: '2px solid rgba(196,30,30,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  width: '35%',
                  height: '35%',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(196,30,30,0.15)',
                  border: '1px solid rgba(196,30,30,0.3)',
                }}
              />
            </Box>
            <Typography
              sx={{
                position: 'absolute',
                bottom: 20,
                left: 20,
                fontFamily: '"Oswald", sans-serif',
                fontWeight: 700,
                fontSize: '1.8rem',
                color: 'rgba(255,255,255,0.08)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              Villgress
            </Typography>
          </Box>

          {/* Info */}
          <Box>
            <Typography
              variant="body2"
              sx={{
                color: tokens.red.main,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                mb: 1,
              }}
            >
              {latest.type} - {latest.year}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
              {latest.description}
            </Typography>

            {/* Fake streaming embed placeholder */}
            <Box
              sx={{
                backgroundColor: '#141414',
                borderRadius: 2,
                border: '1px solid rgba(255,255,255,0.08)',
                p: 3,
                mb: 3,
              }}
            >
              <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 1,
                    backgroundColor: 'rgba(196,30,30,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    sx={{
                      width: 0,
                      height: 0,
                      borderLeft: '14px solid rgba(255,255,255,0.7)',
                      borderTop: '9px solid transparent',
                      borderBottom: '9px solid transparent',
                      ml: '3px',
                    }}
                  />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#fff' }}>
                    Hjerteslag
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
                    Villgress - {latest.title}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
                  3:42
                </Typography>
              </Stack>
              {/* Fake progress bar */}
              <Box
                sx={{
                  width: '100%',
                  height: 3,
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderRadius: 2,
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    width: '35%',
                    height: '100%',
                    backgroundColor: tokens.red.main,
                    borderRadius: 2,
                  }}
                />
              </Box>
            </Box>

            <Stack direction="row" spacing={2}>
              {latest.spotifyUrl && (
                <Button
                  variant="contained"
                  href={latest.spotifyUrl}
                  sx={{
                    backgroundColor: '#1DB954',
                    '&:hover': { backgroundColor: '#1aa34a' },
                    color: '#fff',
                    px: 3,
                  }}
                >
                  Spotify
                </Button>
              )}
              {latest.appleMusicUrl && (
                <Button
                  variant="outlined"
                  href={latest.appleMusicUrl}
                  sx={{
                    borderColor: 'rgba(255,255,255,0.3)',
                    color: '#fff',
                    '&:hover': {
                      borderColor: '#fc3c44',
                      color: '#fc3c44',
                    },
                    px: 3,
                  }}
                >
                  Apple Music
                </Button>
              )}
              <Button component={Link} to="/musikk" variant="outlined" color="primary" sx={{ px: 3 }}>
                All Musikk
              </Button>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
