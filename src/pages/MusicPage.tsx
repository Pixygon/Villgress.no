import { Box, Container } from '@mui/material'
import SectionTitle from '@components/SectionTitle'
import ReleaseCard from '@components/ReleaseCard'
import { releases } from '@utils/data'

export default function MusicPage() {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <SectionTitle title="Musikk" subtitle="Diskografi og utgivelser" />
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
            gap: 3,
          }}
        >
          {releases.map((release) => (
            <ReleaseCard key={release.id} release={release} />
          ))}
        </Box>

        {/* Spotify Embed Placeholder */}
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <SectionTitle title="Lytt på Spotify" />
          <Box
            sx={{
              maxWidth: 600,
              mx: 'auto',
              height: 352,
              backgroundColor: '#141414',
              borderRadius: 2,
              border: '1px solid rgba(255,255,255,0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'text.secondary',
            }}
          >
            Spotify-spiller kommer her
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
