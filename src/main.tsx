import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/Error'
import About from './pages/About'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Root from './routes/Root'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "about",
        element: <About />
      },
      {
        path: "skills",
        element: <Skills />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  },
  
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
