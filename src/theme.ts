import { createTheme } from '@mui/material/styles'

export const tokens = {
  red: {
    main: '#c41e1e',
    light: '#e53535',
    dark: '#8b1515',
  },
  background: {
    dark: '#0a0a0a',
    paper: '#141414',
    elevated: '#1a1a1a',
  },
  text: {
    primary: '#fefefe',
    secondary: '#b0b0b0',
  },
  gradients: {
    hero: 'linear-gradient(180deg, rgba(10,10,10,0) 0%, rgba(10,10,10,0.8) 70%, #0a0a0a 100%)',
    redGlow: 'linear-gradient(135deg, #c41e1e 0%, #8b1515 100%)',
  },
}

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: tokens.red.main,
      light: tokens.red.light,
      dark: tokens.red.dark,
    },
    secondary: {
      main: '#ffffff',
    },
    background: {
      default: tokens.background.dark,
      paper: tokens.background.paper,
    },
    text: {
      primary: tokens.text.primary,
      secondary: tokens.text.secondary,
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    h1: {
      fontFamily: '"Oswald", sans-serif',
      fontWeight: 700,
      fontSize: '3.5rem',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
    h2: {
      fontFamily: '"Oswald", sans-serif',
      fontWeight: 600,
      fontSize: '2.5rem',
      textTransform: 'uppercase',
      letterSpacing: '0.03em',
    },
    h3: {
      fontFamily: '"Oswald", sans-serif',
      fontWeight: 600,
      fontSize: '1.8rem',
      textTransform: 'uppercase',
    },
    h4: {
      fontFamily: '"Oswald", sans-serif',
      fontWeight: 500,
      fontSize: '1.4rem',
    },
    h5: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 500,
      fontSize: '1.1rem',
    },
    body1: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase',
          fontFamily: '"Oswald", sans-serif',
          fontWeight: 600,
          letterSpacing: '0.05em',
          borderRadius: 4,
          padding: '10px 28px',
        },
        containedPrimary: {
          background: tokens.gradients.redGlow,
          '&:hover': {
            background: tokens.red.light,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          backgroundColor: tokens.background.paper,
          border: '1px solid rgba(255,255,255,0.08)',
        },
      },
    },
  },
})
