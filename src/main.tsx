import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { store, persistor } from '@store/store'
import { theme } from '@/theme'
import { installSafeLocalStorage } from '@utils/safeLocalStorage'
import App from '@/App'
import '@/styles/global.css'

installSafeLocalStorage()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
