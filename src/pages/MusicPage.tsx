import { Box, Container, Typography } from '@mui/material'
import HeroSection from '@components/HeroSection'
import SectionTitle from '@components/SectionTitle'
import ReleaseCard from '@components/ReleaseCard'
import { releases } from '@utils/data'
import { useScrollReveal } from '@hooks/useScrollReveal'

export default function MusicPage() {
  const scrollRef = useScrollReveal()

  return (
    <div ref={scrollRef}>
      <HeroSection
        title="Musikk"
        subtitle="Diskografi og utgivelser"
        compact
      />

      <Box sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <div className="scroll-reveal">
            <SectionTitle title="Diskografi" subtitle="Alt fra debuten til de nyeste singlene" />
          </div>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
              gap: 3,
            }}
          >
            {releases.map((release, i) => (
              <div key={release.id} className={`scroll-reveal scroll-reveal-delay-${(i % 3) + 1}`}>
                <ReleaseCard release={release} />
              </div>
            ))}
          </Box>

          {/* Spotify Embed Placeholder */}
          <Box sx={{ mt: 10 }}>
            <div className="scroll-reveal">
              <SectionTitle title="Lytt på Spotify" subtitle="Stream vår musikk direkte" />
            </div>
            <div className="scroll-reveal">
              <Box
                sx={{
                  maxWidth: 700,
                  mx: 'auto',
                  height: 352,
                  backgroundColor: '#141414',
                  borderRadius: 2,
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'text.secondary',
                  gap: 2,
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(circle at center, rgba(29,185,84,0.05) 0%, transparent 70%)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(29,185,84,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 1,
                  }}
                >
                  <Box
                    sx={{
                      width: 0,
                      height: 0,
                      borderLeft: '18px solid rgba(29,185,84,0.6)',
                      borderTop: '11px solid transparent',
                      borderBottom: '11px solid transparent',
                      ml: '4px',
                    }}
                  />
                </Box>
                <Typography variant="body2" sx={{ opacity: 0.5, fontFamily: '"Oswald", sans-serif', letterSpacing: '0.1em' }}>
                  SPOTIFY-SPILLER
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.3, fontSize: '0.8rem' }}>
                  Kobles til når Spotify-konto er klar
                </Typography>
              </Box>
            </div>
          </Box>
        </Container>
      </Box>
    </div>
  )
}
