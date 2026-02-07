import { Box, Container, Typography } from '@mui/material'

export default function HomePage() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Your new Pixygon website is ready.
        </Typography>
      </Box>
    </Container>
  )
}
