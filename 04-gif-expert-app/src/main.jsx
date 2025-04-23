import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp'

import './style.css'

createRoot(document.getElementById('root')).render(
  // el StrictMode ayuda a identificar problemas con el lifecylcle
  // y otras cosas (https://legacy.reactjs.org/docs/strict-mode.html) 
  <StrictMode>
    <GifExpertApp />
  </StrictMode>,
)
