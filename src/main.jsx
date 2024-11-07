import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root/Root'
import ErrorPage from './components/ErrorPage/ErrorPage'
import Home from './components/Home/Home'
import Categories from './components/Products/Categories'
import ProductsDetail from './components/Products/ProductsDetail'
import Dashboard from './components/Dashboard/Dashboard'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/category/:category',
        element: <Categories />,
      },
      {
        path: 'products/:productId',
        element: <ProductsDetail/>,
        loader: ()=> fetch('../AllProduct.json'),
      },
      {
        path: 'dashboard',
        element: <Dashboard/>,
        loader: ()=> fetch('../AllProduct.json'),
      },
    ],
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
