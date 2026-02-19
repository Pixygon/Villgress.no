import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router'
import { Box } from '@mui/material'
import { ErrorBoundary } from '@components/ErrorBoundary'
import { PageLoader } from '@components/PageLoader'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import { useScrollToTop } from '@hooks/useScrollToTop'

const HomePage = lazy(() => import('@pages/HomePage'))
const AboutPage = lazy(() => import('@pages/AboutPage'))
const MusicPage = lazy(() => import('@pages/MusicPage'))
const ShowsPage = lazy(() => import('@pages/ShowsPage'))
const ContactPage = lazy(() => import('@pages/ContactPage'))
const LyricsPage = lazy(() => import('@pages/LyricsPage'))
const NotFoundPage = lazy(() => import('@pages/NotFoundPage'))

function App() {
  useScrollToTop()
  return (
    <ErrorBoundary>
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <Box component="main" sx={{ flex: 1 }}>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/om-oss" element={<AboutPage />} />
              <Route path="/musikk" element={<MusicPage />} />
              <Route path="/musikk/:releaseId/:trackNumber" element={<LyricsPage />} />
              <Route path="/konserter" element={<ShowsPage />} />
              <Route path="/kontakt" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </Box>
        <Footer />
      </Box>
    </ErrorBoundary>
  )
}

export default App
