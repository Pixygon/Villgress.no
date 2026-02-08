import { useState } from 'react'
import { Box, TextField, Button, Alert } from '@mui/material'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <Alert
        severity="success"
        sx={{
          mt: 2,
          backgroundColor: 'rgba(76,175,80,0.1)',
          border: '1px solid rgba(76,175,80,0.3)',
        }}
      >
        Takk for meldingen! Vi svarer sa fort vi kan.
      </Alert>
    )
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
      <TextField
        label="Navn"
        required
        fullWidth
        variant="outlined"
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'rgba(255,255,255,0.15)' },
            '&:hover fieldset': { borderColor: 'rgba(196,30,30,0.4)' },
            '&.Mui-focused fieldset': { borderColor: 'rgba(196,30,30,0.6)' },
          },
        }}
      />
      <TextField
        label="E-post"
        type="email"
        required
        fullWidth
        variant="outlined"
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'rgba(255,255,255,0.15)' },
            '&:hover fieldset': { borderColor: 'rgba(196,30,30,0.4)' },
            '&.Mui-focused fieldset': { borderColor: 'rgba(196,30,30,0.6)' },
          },
        }}
      />
      <TextField
        label="Emne"
        required
        fullWidth
        variant="outlined"
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'rgba(255,255,255,0.15)' },
            '&:hover fieldset': { borderColor: 'rgba(196,30,30,0.4)' },
            '&.Mui-focused fieldset': { borderColor: 'rgba(196,30,30,0.6)' },
          },
        }}
      />
      <TextField
        label="Melding"
        required
        fullWidth
        multiline
        rows={5}
        variant="outlined"
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'rgba(255,255,255,0.15)' },
            '&:hover fieldset': { borderColor: 'rgba(196,30,30,0.4)' },
            '&.Mui-focused fieldset': { borderColor: 'rgba(196,30,30,0.6)' },
          },
        }}
      />
      <Button
        type="submit"
        variant="contained"
        size="large"
        sx={{
          alignSelf: 'flex-start',
          px: 5,
          boxShadow: '0 0 20px rgba(196,30,30,0.3)',
          '&:hover': {
            boxShadow: '0 0 30px rgba(196,30,30,0.5)',
          },
        }}
      >
        Send Melding
      </Button>
    </Box>
  )
}
