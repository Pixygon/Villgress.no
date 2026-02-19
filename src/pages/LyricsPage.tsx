import { useParams, Link, Navigate } from 'react-router'
import { Box, Container, Typography, Button, Stack, Chip } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { releases } from '@utils/data'
import { useScrollReveal } from '@hooks/useScrollReveal'

export default function LyricsPage() {
  const { releaseId, trackNumber } = useParams()
  const scrollRef = useScrollReveal()

  const release = releases.find((r) => r.id === releaseId)
  if (!release?.tracks) return <Navigate to="/musikk" replace />

  const trackNum = parseInt(trackNumber || '1', 10)
  const track = release.tracks.find((t) => t.number === trackNum)
  if (!track) return <Navigate to="/musikk" replace />

  const prevTrack = release.tracks.find((t) => t.number === trackNum - 1)
  const nextTrack = release.tracks.find((t) => t.number === trackNum + 1)

  return (
    <div ref={scrollRef}>
      <Box
        sx={{
          pt: { xs: 12, md: 16 },
          pb: 10,
          position: 'relative',
          overflow: 'hidden',
          minHeight: '100vh',
        }}
      >
        {/* Background album art (blurred) */}
        {release.coverImage && (
          <>
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url(${release.coverImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'blur(60px) brightness(0.3)',
                transform: 'scale(1.2)',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(10,10,10,0.75)',
              }}
            />
          </>
        )}

        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          {/* Back link */}
          <div className="scroll-reveal">
            <Button
              component={Link}
              to="/musikk"
              startIcon={<ArrowBackIcon />}
              sx={{
                color: 'text.secondary',
                mb: 4,
                '&:hover': { color: '#fff' },
              }}
            >
              Tilbake til musikk
            </Button>
          </div>

          {/* Header */}
          <div className="scroll-reveal">
            <Stack direction="row" spacing={3} alignItems="flex-start" sx={{ mb: 5 }}>
              {release.coverImage && (
                <Box
                  sx={{
                    width: { xs: 80, sm: 120 },
                    height: { xs: 80, sm: 120 },
                    flexShrink: 0,
                    borderRadius: 1.5,
                    backgroundImage: `url(${release.coverImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
                  }}
                />
              )}
              <Box>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '1.6rem', sm: '2.2rem', md: '2.8rem' },
                    mb: 0.5,
                    lineHeight: 1.2,
                  }}
                >
                  {track.title}
                </Typography>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    {release.title} ({release.year})
                  </Typography>
                  <Chip
                    label={`Spor ${track.number}`}
                    size="small"
                    sx={{
                      backgroundColor: 'rgba(196,30,30,0.15)',
                      color: 'primary.main',
                      fontWeight: 600,
                      fontFamily: '"Oswald", sans-serif',
                      fontSize: '0.75rem',
                    }}
                  />
                </Stack>
              </Box>
            </Stack>
          </div>

          {/* Lyrics */}
          <div className="scroll-reveal scroll-reveal-delay-1">
            <Box
              sx={{
                backgroundColor: 'rgba(20,20,20,0.6)',
                backdropFilter: 'blur(10px)',
                borderRadius: 2,
                border: '1px solid rgba(255,255,255,0.08)',
                p: { xs: 3, sm: 5 },
                mb: 5,
              }}
            >
              {track.lyrics ? (
                track.lyrics.split('\n\n').map((verse, i) => (
                  <Typography
                    key={i}
                    sx={{
                      whiteSpace: 'pre-line',
                      color: '#fff',
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      lineHeight: 2,
                      mb: 3,
                      '&:last-child': { mb: 0 },
                    }}
                  >
                    {verse}
                  </Typography>
                ))
              ) : (
                <Box sx={{ textAlign: 'center', py: 6 }}>
                  <Typography
                    sx={{
                      fontFamily: '"Oswald", sans-serif',
                      fontSize: '1.2rem',
                      color: 'text.secondary',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                    }}
                  >
                    Teksten kommer snart
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1, opacity: 0.6 }}>
                    Vi jobber med å legge til tekster for alle låtene våre.
                  </Typography>
                </Box>
              )}
            </Box>
          </div>

          {/* Navigation between tracks */}
          <div className="scroll-reveal scroll-reveal-delay-2">
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              {prevTrack ? (
                <Button
                  component={Link}
                  to={`/musikk/${releaseId}/${prevTrack.number}`}
                  startIcon={<NavigateBeforeIcon />}
                  sx={{ color: 'text.secondary', '&:hover': { color: '#fff' } }}
                >
                  {prevTrack.title}
                </Button>
              ) : (
                <Box />
              )}
              {nextTrack ? (
                <Button
                  component={Link}
                  to={`/musikk/${releaseId}/${nextTrack.number}`}
                  endIcon={<NavigateNextIcon />}
                  sx={{ color: 'text.secondary', '&:hover': { color: '#fff' } }}
                >
                  {nextTrack.title}
                </Button>
              ) : (
                <Box />
              )}
            </Stack>
          </div>
        </Container>
      </Box>
    </div>
  )
}
