import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function resolveBrand() {
  const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase()
  return hash === 'apple' ? 'apple' : 'pc'
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App brand={resolveBrand()} />
  </StrictMode>,
)
