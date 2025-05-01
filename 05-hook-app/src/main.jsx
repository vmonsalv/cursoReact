import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHooks'
// import HooksApp from './HooksApp'
// import { CounterApp } from './01-useState/CounterApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterWithCustomHooks />
  </StrictMode>,
)
