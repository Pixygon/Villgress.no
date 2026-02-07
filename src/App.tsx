import { Routes, Route } from 'react-router'
import { Box } from '@mui/material'
import HomePage from '@pages/HomePage'

function App() {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Box>
  )
}

export default App
