import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'; // أو حسب اسم الملف اللي كتبتي فيه أو مساره


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
  
)
