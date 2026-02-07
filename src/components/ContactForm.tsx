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
      <Alert severity="success" sx={{ mt: 2 }}>
        Takk for meldingen! Vi svarer så fort vi kan.
      </Alert>
    )
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField label="Navn" required fullWidth variant="outlined" />
      <TextField label="E-post" type="email" required fullWidth variant="outlined" />
      <TextField label="Emne" required fullWidth variant="outlined" />
      <TextField label="Melding" required fullWidth multiline rows={5} variant="outlined" />
      <Button type="submit" variant="contained" size="large" sx={{ alignSelf: 'flex-start' }}>
        Send Melding
      </Button>
    </Box>
  )
}
