import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './index.css'
import Products from './products'
import App from './App'
import Viewproducts from './viewproducts'
import Login from './login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/product/:id',
    element: <Viewproducts />
  },
  {
    path: '/login',
    element: <Login />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
