import { Box, Container, Typography } from '@mui/material'
import SectionTitle from '@components/SectionTitle'
import BandMember from '@components/BandMember'
import { bandMembers, bandBio } from '@utils/data'

export default function AboutPage() {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <SectionTitle title="Om Oss" subtitle="Historien bak Villgress" />

        <Box sx={{ maxWidth: 700, mx: 'auto', mb: 8 }}>
          {bandBio.split('\n\n').map((paragraph, i) => (
            <Typography key={i} variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              {paragraph}
            </Typography>
          ))}
        </Box>

        <SectionTitle title="Medlemmer" />
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' },
            gap: 3,
          }}
        >
          {bandMembers.map((member) => (
            <BandMember key={member.name} member={member} />
          ))}
        </Box>
      </Container>
    </Box>
  )
}
