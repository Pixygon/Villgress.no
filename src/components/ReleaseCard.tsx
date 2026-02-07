import { Card, CardContent, Box, Typography, Button, Stack, Chip } from '@mui/material'
import type { Release } from '@utils/data'

interface ReleaseCardProps {
  release: Release
}

export default function ReleaseCard({ release }: ReleaseCardProps) {
  return (
    <Card
      sx={{
        transition: 'transform 0.3s',
        '&:hover': { transform: 'translateY(-4px)' },
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
            <Typography sx={{ fontSize: '3rem', opacity: 0.2 }}>💿</Typography>
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
          }}
        />
      </Box>
      <CardContent>
        <Typography variant="h4" sx={{ mb: 0.5 }}>
          {release.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {release.year}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {release.description}
        </Typography>
        <Stack direction="row" spacing={1}>
          {release.spotifyUrl && (
            <Button variant="outlined" size="small" href={release.spotifyUrl}>
              Spotify
            </Button>
          )}
          {release.appleMusicUrl && (
            <Button variant="outlined" size="small" href={release.appleMusicUrl}>
              Apple Music
            </Button>
          )}
        </Stack>
      </CardContent>
    </Card>
  )
}
