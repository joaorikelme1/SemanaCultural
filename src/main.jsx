import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import WorkPage from './pages/WorkPage.jsx'
import './styles.css'
import './pages/work-page.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/obras/a-proxima-aldeia" element={<WorkPage work="kafka" />} />
        <Route path="/obras/uma-viagem-da-siria" element={<WorkPage work="ivine" />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
