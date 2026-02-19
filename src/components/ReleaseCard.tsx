import { Card, CardContent, Box, Typography, Button, Stack, Chip } from '@mui/material'
import type { Release } from '@utils/data'
import TrackList from '@components/TrackList'

interface ReleaseCardProps {
  release: Release
  featured?: boolean
}

export default function ReleaseCard({ release, featured }: ReleaseCardProps) {
  return (
    <Card
      sx={{
        transition: 'transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease',
        '&:hover': {
          transform: featured ? 'translateY(-6px)' : 'translateY(-8px) scale(1.02)',
          boxShadow: '0 12px 40px rgba(196,30,30,0.15), 0 4px 20px rgba(0,0,0,0.3)',
          borderColor: 'rgba(196,30,30,0.4)',
        },
        ...(featured && {
          border: '1px solid rgba(196,30,30,0.3)',
          boxShadow: '0 0 30px rgba(196,30,30,0.1)',
        }),
      }}
    >
      <Box
        sx={{
          width: '100%',
          paddingTop: '100%',
          position: 'relative',
          backgroundColor: '#1a1a1a',
          backgroundImage: release.coverImage ? `url(${release.coverImage})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflow: 'hidden',
          '&::after': featured ? {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at center, rgba(196,30,30,0.1) 0%, transparent 70%)',
          } : undefined,
        }}
      >
        {!release.coverImage && (
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
            }}
          >
            <Box
              sx={{
                width: featured ? 80 : 60,
                height: featured ? 80 : 60,
                borderRadius: '50%',
                border: '2px solid rgba(196,30,30,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
              }}
            >
              <Box
                sx={{
                  width: featured ? 30 : 20,
                  height: featured ? 30 : 20,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(196,30,30,0.2)',
                }}
              />
            </Box>
          </Box>
        )}
        <Chip
          label={release.type}
          size="small"
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            backgroundColor: 'rgba(196,30,30,0.9)',
            color: '#fff',
            fontWeight: 600,
            fontFamily: '"Oswald", sans-serif',
            letterSpacing: '0.05em',
          }}
        />
      </Box>
      <CardContent sx={{ p: featured ? 3 : 2 }}>
        <Typography variant="h4" sx={{ mb: 0.5, fontSize: featured ? '1.5rem' : '1.3rem' }}>
          {release.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {release.year} {featured && '| Debutalbumet'}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6 }}>
          {release.description}
        </Typography>
        {release.tracks && release.tracks.length > 1 && (
          <TrackList releaseId={release.id} tracks={release.tracks} />
        )}
        <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: release.tracks && release.tracks.length > 1 ? 2 : 0 }}>
          {release.spotifyUrl && (
            <Button
              variant="outlined"
              size="small"
              href={release.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                borderColor: 'rgba(255,255,255,0.2)',
                color: 'rgba(255,255,255,0.8)',
                '&:hover': {
                  borderColor: '#1DB954',
                  color: '#1DB954',
                  backgroundColor: 'rgba(29,185,84,0.08)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Spotify
            </Button>
          )}
          {release.appleMusicUrl && (
            <Button
              variant="outlined"
              size="small"
              href={release.appleMusicUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                borderColor: 'rgba(255,255,255,0.2)',
                color: 'rgba(255,255,255,0.8)',
                '&:hover': {
                  borderColor: '#fc3c44',
                  color: '#fc3c44',
                  backgroundColor: 'rgba(252,60,68,0.08)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Apple Music
            </Button>
          )}
        </Stack>
      </CardContent>
    </Card>
  )
}
