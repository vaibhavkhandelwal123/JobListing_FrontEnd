import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ListJob from './pages/List.jsx'
import FindJob from './pages/Find.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/list-job" element={<ListJob />} />
        <Route path="/find-job" element={<FindJob />} />
      </Routes>
    </Router>
  </StrictMode>,
)
