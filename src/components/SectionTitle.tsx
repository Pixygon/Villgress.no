import { Typography, Box } from '@mui/material'
import { tokens } from '@/theme'

interface SectionTitleProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export default function SectionTitle({ title, subtitle, align = 'center' }: SectionTitleProps) {
  return (
    <Box sx={{ mb: 5, textAlign: align }}>
      <Typography
        variant="h2"
        sx={{
          mb: 1.5,
          textShadow: '0 0 30px rgba(196,30,30,0.2)',
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          width: 60,
          height: 3,
          backgroundColor: tokens.red.main,
          mx: align === 'center' ? 'auto' : 0,
          mb: 2,
          borderRadius: 2,
          boxShadow: '0 0 10px rgba(196,30,30,0.5)',
        }}
      />
      {subtitle && (
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: align === 'center' ? 'auto' : 0 }}>
          {subtitle}
        </Typography>
      )}
    </Box>
  )
}
