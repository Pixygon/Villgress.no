import { useState } from 'react'
import { Link, useLocation } from 'react-router'
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

const navLinks = [
  { label: 'Hjem', path: '/' },
  { label: 'Om Oss', path: '/om-oss' },
  { label: 'Musikk', path: '/musikk' },
  { label: 'Konserter', path: '/konserter' },
  { label: 'Kontakt', path: '/kontakt' },
]

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const location = useLocation()

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: 'rgba(10,10,10,0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(196,30,30,0.2)',
        transition: 'all 0.3s ease',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', maxWidth: 1200, width: '100%', mx: 'auto', py: 0.5 }}>
        <Typography
          component={Link}
          to="/"
          variant="h3"
          sx={{
            fontFamily: '"Oswald", sans-serif',
            fontWeight: 700,
            color: '#fff',
            letterSpacing: '0.15em',
            textDecoration: 'none',
            textShadow: '0 0 20px rgba(196,30,30,0.3)',
            transition: 'text-shadow 0.3s ease',
            '&:hover': {
              textShadow: '0 0 30px rgba(196,30,30,0.5)',
            },
          }}
        >
          VILLGRESS
        </Typography>

        {isMobile ? (
          <>
            <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: '#fff' }}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              PaperProps={{
                sx: {
                  backgroundColor: 'rgba(10,10,10,0.98)',
                  backdropFilter: 'blur(20px)',
                  width: 280,
                  borderLeft: '1px solid rgba(196,30,30,0.3)',
                },
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
                <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: '#fff' }}>
                  <CloseIcon />
                </IconButton>
              </Box>
              <List>
                {navLinks.map((link) => (
                  <ListItem key={link.path} disablePadding>
                    <ListItemButton
                      component={Link}
                      to={link.path}
                      onClick={() => setDrawerOpen(false)}
                      sx={{
                        color: location.pathname === link.path ? theme.palette.primary.main : '#fff',
                        borderLeft: location.pathname === link.path ? `3px solid ${theme.palette.primary.main}` : '3px solid transparent',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          backgroundColor: 'rgba(196,30,30,0.1)',
                        },
                      }}
                    >
                      <ListItemText
                        primary={link.label}
                        primaryTypographyProps={{
                          fontFamily: '"Oswald", sans-serif',
                          fontWeight: 600,
                          fontSize: '1.2rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 0.5 }}>
            {navLinks.map((link) => (
              <Typography
                key={link.path}
                component={Link}
                to={link.path}
                sx={{
                  fontFamily: '"Oswald", sans-serif',
                  fontWeight: 500,
                  fontSize: '0.95rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: location.pathname === link.path ? theme.palette.primary.main : 'rgba(255,255,255,0.85)',
                  textDecoration: 'none',
                  px: 1.5,
                  py: 1,
                  position: 'relative',
                  borderBottom: location.pathname === link.path ? `2px solid ${theme.palette.primary.main}` : '2px solid transparent',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: theme.palette.primary.main,
                    textShadow: '0 0 15px rgba(196,30,30,0.4)',
                  },
                }}
              >
                {link.label}
              </Typography>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  )
}
