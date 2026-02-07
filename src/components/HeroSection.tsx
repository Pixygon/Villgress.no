import { Box, Typography, Button, Container } from '@mui/material'
import { Link } from 'react-router'
import { tokens } from '@/theme'

interface HeroSectionProps {
  title: string
  subtitle: string
  ctaText?: string
  ctaLink?: string
}

export default function HeroSection({ title, subtitle, ctaText, ctaLink }: HeroSectionProps) {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0a0a0a',
        backgroundImage: 'radial-gradient(ellipse at 50% 50%, rgba(196,30,30,0.15) 0%, transparent 70%)',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url('')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '30%',
          background: tokens.gradients.hero,
        },
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '3rem', md: '5rem' },
            mb: 2,
            textShadow: '0 0 40px rgba(196,30,30,0.4)',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{ mb: 4, maxWidth: 500, mx: 'auto' }}
        >
          {subtitle}
        </Typography>
        {ctaText && ctaLink && (
          <Button
            component={Link}
            to={ctaLink}
            variant="contained"
            size="large"
            sx={{ fontSize: '1.1rem', px: 5, py: 1.5 }}
          >
            {ctaText}
          </Button>
        )}
      </Container>
    </Box>
  )
}
