import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext.jsx'
import StoreProvider from './store.js'



createRoot(document.getElementById('root')).render(
  <StrictMode>
  <StoreProvider>
    <BrowserRouter>
    
    <ThemeProvider>
    <App />
    </ThemeProvider>
   
    </BrowserRouter>
    </StoreProvider>

  </StrictMode>,
)
