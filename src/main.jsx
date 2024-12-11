import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddCoffe from './components/AddCoffe.jsx'
import UpdateCoffee from './components/UpdateCoffee.jsx'
import Singin from './components/Singin.jsx'
import SingUp from './components/SingUp.jsx'
import AuthProvider from './components/AuthProvider.jsx'
import Users from './components/Users.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/coffee')

  },
  {
    path: 'addCoffee',
    element: <AddCoffe></AddCoffe>
  },
  {
    path: 'updateCoffee/:id',
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path: 'singin',
    element: <Singin></Singin>
  },
  {
    path: 'singUp',
    element: <SingUp></SingUp>
  },
  {
    path:'users',
    element:<Users></Users>,
    loader: () => fetch('http://localhost:5000/users')

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
