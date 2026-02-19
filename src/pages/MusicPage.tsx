import { Box, Container } from '@mui/material'
import HeroSection from '@components/HeroSection'
import SectionTitle from '@components/SectionTitle'
import ReleaseCard from '@components/ReleaseCard'
import VideoCard from '@components/VideoCard'
import { releases, videos } from '@utils/data'
import { useScrollReveal } from '@hooks/useScrollReveal'

export default function MusicPage() {
  const scrollRef = useScrollReveal()

  return (
    <div ref={scrollRef}>
      <HeroSection
        title="Musikk"
        subtitle="Diskografi og utgivelser"
        compact
      />

      <Box sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <div className="scroll-reveal">
            <SectionTitle title="Diskografi" subtitle="Alt fra debuten til de nyeste singlene" />
          </div>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
              gap: 3,
            }}
          >
            {releases.map((release, i) => (
              <div key={release.id} className={`scroll-reveal scroll-reveal-delay-${(i % 3) + 1}`}>
                <ReleaseCard release={release} />
              </div>
            ))}
          </Box>

          {/* Videos */}
          <Box sx={{ mt: 10 }}>
            <div className="scroll-reveal">
              <SectionTitle title="Video" subtitle="Musikkvideoer, live og promo" />
            </div>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: 3,
              }}
            >
              {/* Featured video (first one, full width on mobile) */}
              <div className="scroll-reveal scroll-reveal-delay-1" style={{ gridColumn: videos.length > 1 ? undefined : '1 / -1' }}>
                <VideoCard video={videos[0]} featured />
              </div>
              {videos.slice(1).map((video, i) => (
                <div key={video.id} className={`scroll-reveal scroll-reveal-delay-${(i % 3) + 1}`}>
                  <VideoCard video={video} />
                </div>
              ))}
            </Box>
          </Box>

          {/* Spotify Embed */}
          <Box sx={{ mt: 10 }}>
            <div className="scroll-reveal">
              <SectionTitle title="Lytt på Spotify" subtitle="Stream vår musikk direkte" />
            </div>
            <div className="scroll-reveal">
              <Box
                sx={{
                  maxWidth: 700,
                  mx: 'auto',
                  borderRadius: 2,
                  overflow: 'hidden',
                }}
              >
                <iframe
                  src="https://open.spotify.com/embed/artist/1d5wLk8vkQzS8Na96Itl8W?utm_source=generator&theme=0"
                  width="100%"
                  height={352}
                  frameBorder={0}
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  style={{ display: 'block' }}
                />
              </Box>
            </div>
          </Box>
        </Container>
      </Box>
    </div>
  )
}
