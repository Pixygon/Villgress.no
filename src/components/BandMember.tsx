import { Card, CardContent, Box, Typography } from '@mui/material'
import type { BandMember as BandMemberType } from '@utils/data'

interface BandMemberProps {
  member: BandMemberType
}

export default function BandMember({ member }: BandMemberProps) {
  return (
    <Card
      sx={{
        transition: 'transform 0.3s, border-color 0.3s',
        '&:hover': {
          transform: 'translateY(-4px)',
          borderColor: 'rgba(196,30,30,0.4)',
        },
      }}
    >
      <Box
        sx={{
          width: '100%',
          paddingTop: '100%',
          position: 'relative',
          backgroundColor: '#1a1a1a',
          backgroundImage: member.image ? `url(${member.image})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {!member.image && (
          <Typography
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'rgba(255,255,255,0.2)',
              fontSize: '3rem',
            }}
          >
            🎸
          </Typography>
        )}
      </Box>
      <CardContent>
        <Typography variant="h4" sx={{ mb: 0.5 }}>
          {member.name}
        </Typography>
        <Typography variant="body2" color="primary" sx={{ fontWeight: 600, mb: 1, textTransform: 'uppercase' }}>
          {member.instrument}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {member.bio}
        </Typography>
      </CardContent>
    </Card>
  )
}
