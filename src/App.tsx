import { Routes, Route } from 'react-router'
import { Box } from '@mui/material'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import HomePage from '@pages/HomePage'
import AboutPage from '@pages/AboutPage'
import MusicPage from '@pages/MusicPage'
import ShowsPage from '@pages/ShowsPage'
import ContactPage from '@pages/ContactPage'
import { useScrollToTop } from '@hooks/useScrollToTop'

function App() {
  useScrollToTop()
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <Box component="main" sx={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/om-oss" element={<AboutPage />} />
          <Route path="/musikk" element={<MusicPage />} />
          <Route path="/konserter" element={<ShowsPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  )
}

export default App
