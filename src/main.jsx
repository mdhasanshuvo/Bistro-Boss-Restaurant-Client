import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Router/Routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='max-w-screen-2xl mx-auto'>
      <RouterProvider router={Routes} />
    </div>
  </StrictMode>,
)
