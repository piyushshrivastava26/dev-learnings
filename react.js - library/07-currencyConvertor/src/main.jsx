import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Input from './Components/input.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Input />
  </StrictMode>,
)
