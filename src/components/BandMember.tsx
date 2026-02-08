import { Card, CardContent, Box, Typography } from '@mui/material'
import type { BandMember as BandMemberType } from '@utils/data'

interface BandMemberProps {
  member: BandMemberType
}

export default function BandMember({ member }: BandMemberProps) {
  return (
    <Card
      sx={{
        transition: 'transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease',
        '&:hover': {
          transform: 'translateY(-8px) scale(1.02)',
          borderColor: 'rgba(196,30,30,0.5)',
          boxShadow: '0 12px 40px rgba(196,30,30,0.15), 0 4px 20px rgba(0,0,0,0.3)',
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
          overflow: 'hidden',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '40%',
            background: 'linear-gradient(to top, rgba(20,20,20,0.8), transparent)',
          },
        }}
      >
        {!member.image && (
          <Typography
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'rgba(196,30,30,0.15)',
              fontSize: '4rem',
              fontFamily: '"Oswald", sans-serif',
              fontWeight: 700,
              letterSpacing: '0.1em',
            }}
          >
            {member.instrument.split(' ')[0].toUpperCase()}
          </Typography>
        )}
      </Box>
      <CardContent sx={{ p: 2.5 }}>
        <Typography variant="h4" sx={{ mb: 0.5, fontSize: '1.3rem' }}>
          {member.name}
        </Typography>
        <Typography
          variant="body2"
          color="primary"
          sx={{ fontWeight: 600, mb: 1.5, textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.8rem' }}
        >
          {member.instrument}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
          {member.bio}
        </Typography>
      </CardContent>
    </Card>
  )
}
