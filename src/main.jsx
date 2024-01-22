import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './page/Layout/Main';
import RegisterPage from './page/RegisterPage/RegisterPage';
import LoginPage from './page/LoginPage/LoginPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
      {
        path:'/',
        element:<RegisterPage/>
      },
      {
        path:'/login',
        element:<LoginPage/>
      }
    ]
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
