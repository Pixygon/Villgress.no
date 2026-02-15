import { Box, Container, Typography } from '@mui/material'
import HeroSection from '@components/HeroSection'
import SectionTitle from '@components/SectionTitle'
import BandMember from '@components/BandMember'
import { bandMembers, bandBio } from '@utils/data'
import { useScrollReveal } from '@hooks/useScrollReveal'

export default function AboutPage() {
  const scrollRef = useScrollReveal()

  return (
    <div ref={scrollRef}>
      <HeroSection
        title="Om Oss"
        subtitle="Historien bak Villgress"
        compact
      />

      <Box sx={{ py: 10 }}>
        <Container maxWidth="lg">
          {/* Band Bio */}
          <div className="scroll-reveal">
            <Box sx={{ maxWidth: 750, mx: 'auto', mb: 10 }}>
              {bandBio.split('\n\n').map((paragraph, i) => (
                <Typography key={i} variant="body1" color="text.secondary" sx={{ mb: 2.5, lineHeight: 1.8, fontSize: '1.05rem' }}>
                  {paragraph}
                </Typography>
              ))}
            </Box>
          </div>

          {/* Band Members */}
          <div className="scroll-reveal">
            <SectionTitle title="Medlemmer" subtitle="De fire som utgjør Villgress" />
          </div>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' },
              gap: 3,
              mb: 10,
            }}
          >
            {bandMembers.map((member, i) => (
              <div key={member.name} className={`scroll-reveal scroll-reveal-delay-${Math.min(i + 1, 3)}`}>
                <BandMember member={member} />
              </div>
            ))}
          </Box>

          {/* Photo Gallery Placeholder */}
          <div className="scroll-reveal">
            <SectionTitle title="Galleri" subtitle="Bilder fra studio, konserter og turneliv" />
          </div>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr 1fr', md: '1fr 1fr 1fr 1fr' },
              gap: 2,
            }}
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className={`scroll-reveal scroll-reveal-delay-${(i % 3) + 1}`}>
                <Box
                  sx={{
                    paddingTop: i === 0 || i === 5 ? '120%' : '100%',
                    backgroundColor: '#141414',
                    borderRadius: 1,
                    border: '1px solid rgba(255,255,255,0.06)',
                    position: 'relative',
                    overflow: 'hidden',
                    gridRow: i === 0 || i === 5 ? 'span 1' : undefined,
                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      borderColor: 'rgba(196,30,30,0.3)',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      inset: 0,
                      background: `linear-gradient(${135 + i * 30}deg, rgba(196,30,30,${0.03 + i * 0.005}) 0%, transparent 70%)`,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      color: 'rgba(255,255,255,0.06)',
                      fontFamily: '"Oswald", sans-serif',
                      fontSize: '0.75rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                    }}
                  >
                    Bilde {i + 1}
                  </Typography>
                </Box>
              </div>
            ))}
          </Box>
        </Container>
      </Box>
    </div>
  )
}
