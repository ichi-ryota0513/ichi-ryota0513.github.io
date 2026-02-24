import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import AppLayout from "./components/layout/AppLayout";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <AppLayout />
    </HashRouter>
  </StrictMode>
)