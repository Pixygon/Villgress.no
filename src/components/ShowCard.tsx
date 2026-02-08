import { Card, CardContent, Box, Typography, Button, Chip } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import type { Show } from '@utils/data'

interface ShowCardProps {
  show: Show
}

export default function ShowCard({ show }: ShowCardProps) {
  const dateObj = new Date(show.date)
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: { sm: 'center' },
        justifyContent: 'space-between',
        opacity: show.isPast ? 0.6 : 1,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
        '&:hover': {
          transform: show.isPast ? 'none' : 'translateX(6px)',
          borderColor: show.isPast ? undefined : 'rgba(196,30,30,0.4)',
          boxShadow: show.isPast ? undefined : '0 4px 20px rgba(196,30,30,0.1)',
        },
      }}
    >
      <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 3, flex: 1 }}>
        <Box
          sx={{
            minWidth: 70,
            textAlign: 'center',
            borderRight: '2px solid rgba(196,30,30,0.3)',
            pr: 2,
          }}
        >
          <Typography variant="h3" color="primary" sx={{ fontSize: '2rem', lineHeight: 1 }}>
            {dateObj.getDate()}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textTransform: 'uppercase', fontWeight: 600 }}>
            {dateObj.toLocaleDateString('no-NO', { month: 'short' })}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem', opacity: 0.7 }}>
            {dateObj.getFullYear()}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h4">{show.venue}</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.5 }}>
            <LocationOnIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
            <Typography variant="body2" color="text.secondary">
              {show.city}
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <Box sx={{ px: 2, pb: { xs: 2, sm: 0 }, pr: { sm: 2 } }}>
        {show.isPast ? (
          <Chip label="Avholdt" variant="outlined" size="small" sx={{ opacity: 0.7 }} />
        ) : show.ticketUrl ? (
          <Button
            variant="contained"
            size="small"
            href={show.ticketUrl}
            sx={{
              boxShadow: '0 0 15px rgba(196,30,30,0.3)',
              '&:hover': {
                boxShadow: '0 0 25px rgba(196,30,30,0.5)',
              },
            }}
          >
            Billetter
          </Button>
        ) : null}
      </Box>
    </Card>
  )
}
