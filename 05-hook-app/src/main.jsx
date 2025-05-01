import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHooks'
// import HooksApp from './HooksApp'
// import { CounterApp } from './01-useState/CounterApp'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <FormWithCustomHook />
  // {/* </StrictMode>, */}
)
