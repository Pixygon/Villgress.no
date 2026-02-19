import { useState } from 'react'
import { Box, Typography, Chip } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import type { Video } from '@utils/data'

interface VideoCardProps {
  video: Video
  featured?: boolean
}

export default function VideoCard({ video, featured }: VideoCardProps) {
  const [playing, setPlaying] = useState(false)
  const thumbnailUrl = `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`

  return (
    <Box
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.08)',
        backgroundColor: '#141414',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
        '&:hover': {
          borderColor: 'rgba(196,30,30,0.4)',
          boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
          transform: 'translateY(-4px)',
        },
      }}
    >
      {/* Video / Thumbnail */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          paddingTop: '56.25%', // 16:9
        }}
      >
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={video.title}
            width="100%"
            height="100%"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          />
        ) : (
          <Box
            onClick={() => setPlaying(true)}
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${thumbnailUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              cursor: 'pointer',
              '&::after': {
                content: '""',
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)',
              },
            }}
          >
            {/* Play button overlay */}
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: featured ? 72 : 56,
                height: featured ? 72 : 56,
                borderRadius: '50%',
                backgroundColor: 'rgba(196,30,30,0.9)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1,
                transition: 'transform 0.3s ease, background-color 0.3s ease',
                '&:hover': {
                  transform: 'translate(-50%, -50%) scale(1.1)',
                  backgroundColor: '#c41e1e',
                },
              }}
            >
              <PlayArrowIcon sx={{ fontSize: featured ? 36 : 28, color: '#fff', ml: '2px' }} />
            </Box>

            {/* Type chip */}
            <Chip
              label={video.type}
              size="small"
              sx={{
                position: 'absolute',
                top: 12,
                right: 12,
                zIndex: 1,
                backgroundColor: video.type === 'Live'
                  ? 'rgba(255,255,255,0.15)'
                  : video.type === 'Promo'
                    ? 'rgba(196,30,30,0.6)'
                    : 'rgba(196,30,30,0.9)',
                color: '#fff',
                fontWeight: 600,
                fontFamily: '"Oswald", sans-serif',
                letterSpacing: '0.05em',
                backdropFilter: 'blur(8px)',
              }}
            />
          </Box>
        )}
      </Box>

      {/* Title */}
      <Box sx={{ p: 2 }}>
        <Typography
          variant="h4"
          sx={{
            fontSize: featured ? '1.3rem' : '1.1rem',
          }}
        >
          {video.title}
        </Typography>
      </Box>
    </Box>
  )
}
