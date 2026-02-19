import { Box, Typography, List, ListItemButton, ListItemText } from '@mui/material'
import { Link } from 'react-router'
import type { Track } from '@utils/data'

interface TrackListProps {
  releaseId: string
  tracks: Track[]
}

export default function TrackList({ releaseId, tracks }: TrackListProps) {
  return (
    <Box sx={{ mt: 1 }}>
      <List disablePadding dense>
        {tracks.map((track) => {
          const hasLyrics = !!track.lyrics
          return (
            <ListItemButton
              key={track.number}
              component={hasLyrics ? Link : 'div'}
              {...(hasLyrics ? { to: `/musikk/${releaseId}/${track.number}` } : {})}
              sx={{
                py: 0.75,
                px: 1,
                borderRadius: 1,
                cursor: hasLyrics ? 'pointer' : 'default',
                '&:hover': {
                  backgroundColor: hasLyrics ? 'rgba(196,30,30,0.08)' : 'transparent',
                },
              }}
            >
              <Typography
                sx={{
                  width: 28,
                  flexShrink: 0,
                  fontFamily: '"Oswald", sans-serif',
                  fontSize: '0.85rem',
                  color: 'text.secondary',
                  opacity: 0.5,
                }}
              >
                {track.number}
              </Typography>
              <ListItemText
                primary={track.title}
                primaryTypographyProps={{
                  fontSize: '0.875rem',
                  color: hasLyrics ? '#fff' : 'text.secondary',
                }}
              />
              {hasLyrics && (
                <Typography
                  sx={{
                    fontSize: '0.7rem',
                    color: 'primary.main',
                    textTransform: 'uppercase',
                    fontFamily: '"Oswald", sans-serif',
                    letterSpacing: '0.05em',
                    opacity: 0.8,
                  }}
                >
                  Tekst
                </Typography>
              )}
            </ListItemButton>
          )
        })}
      </List>
    </Box>
  )
}
