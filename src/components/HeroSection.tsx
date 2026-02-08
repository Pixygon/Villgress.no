import { Box, Typography, Button, Container } from '@mui/material'
import { Link } from 'react-router'
import { tokens } from '@/theme'

interface HeroSectionProps {
  title: string
  subtitle: string
  ctaText?: string
  ctaLink?: string
  compact?: boolean
}

export default function HeroSection({ title, subtitle, ctaText, ctaLink, compact }: HeroSectionProps) {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: compact ? '50vh' : '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0a0a0a',
        overflow: 'hidden',
      }}
    >
      {/* Animated background glow */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '120%',
          height: '120%',
          transform: 'translate(-50%, -50%)',
          backgroundImage: 'radial-gradient(ellipse at 50% 50%, rgba(196,30,30,0.18) 0%, transparent 60%)',
          animation: 'pulseGlow 6s ease-in-out infinite',
        }}
      />

      {/* Shifting gradient overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(196,30,30,0.06) 0%, transparent 40%, rgba(139,21,21,0.08) 70%, transparent 100%)',
          backgroundSize: '300% 300%',
          animation: 'gradientShift 12s ease infinite',
        }}
      />

      {/* Floating particles (pure CSS) */}
      {!compact && (
        <>
          <Box
            sx={{
              position: 'absolute',
              bottom: '20%',
              left: '15%',
              width: 4,
              height: 4,
              borderRadius: '50%',
              backgroundColor: 'rgba(196,30,30,0.6)',
              animation: 'particleFloat1 8s ease-in-out infinite',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: '10%',
              left: '60%',
              width: 3,
              height: 3,
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.3)',
              animation: 'particleFloat2 10s ease-in-out infinite 1s',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: '30%',
              left: '80%',
              width: 5,
              height: 5,
              borderRadius: '50%',
              backgroundColor: 'rgba(196,30,30,0.4)',
              animation: 'particleFloat3 9s ease-in-out infinite 2s',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: '15%',
              left: '35%',
              width: 2,
              height: 2,
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.2)',
              animation: 'particleFloat1 12s ease-in-out infinite 3s',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: '25%',
              left: '50%',
              width: 3,
              height: 3,
              borderRadius: '50%',
              backgroundColor: 'rgba(196,30,30,0.3)',
              animation: 'particleFloat2 11s ease-in-out infinite 4s',
            }}
          />
        </>
      )}

      {/* Bottom gradient fade */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '30%',
          background: tokens.gradients.hero,
          zIndex: 1,
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '3rem', sm: '4.5rem', md: compact ? '4rem' : '6rem' },
            mb: 2,
            textShadow: '0 0 60px rgba(196,30,30,0.5), 0 0 120px rgba(196,30,30,0.2)',
            animation: 'heroTextReveal 1s ease-out forwards',
            letterSpacing: '0.08em',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{
            mb: 4,
            maxWidth: 500,
            mx: 'auto',
            animation: 'subtitleReveal 1s ease-out 0.3s forwards',
            opacity: 0,
            fontSize: { xs: '1rem', md: '1.2rem' },
          }}
        >
          {subtitle}
        </Typography>
        {ctaText && ctaLink && (
          <Box sx={{ animation: 'fadeInUp 0.8s ease-out 0.6s forwards', opacity: 0 }}>
            <Button
              component={Link}
              to={ctaLink}
              variant="contained"
              size="large"
              sx={{
                fontSize: '1.1rem',
                px: 5,
                py: 1.5,
                boxShadow: '0 0 30px rgba(196,30,30,0.4)',
                '&:hover': {
                  boxShadow: '0 0 50px rgba(196,30,30,0.6)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              {ctaText}
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  )
}
