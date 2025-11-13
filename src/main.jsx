import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AuthProvider from './Auth/AuthProvider.jsx'
import router from './Routes/router.jsx'
import AppWrapper from './Utilities/AppWrapper.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <AppWrapper router={router} />
    </AuthProvider>
  </StrictMode>,
)
