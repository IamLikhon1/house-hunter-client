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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Dashboard from './page/Layout/Dashboard';
import Overview from './page/Overview/Overview';
import AddNewHouse from './page/AddNewHouse/AddNewHouse';
import OwnerOwnList from './page/OwnerOwnList/OwnerOwnList';
import UpdateHouse from './page/UpdateHouse/UpdateHouse';
import HomePage from './page/HomePage/HomePage';
import RenterHouseList from './page/RenterHouseList/RenterHouseList';
const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <RegisterPage />
      },
      {
        path: '/home',
        element:<HomePage/>
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: 'updateHouse/:id',
        element: <UpdateHouse />,
        loader: ({ params }) => fetch(`https://house-hunter-server-production-454d.up.railway.app/getAllOwnerData/${params.id}`)
      }
    ]
  },

  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        path: 'overview',
        element: <Overview />
      },

      {
        path: 'addHouse',
        element: <AddNewHouse />
      },
      {
        path: 'ownerOwnList',
        element: <OwnerOwnList />
      },
      {
        path: 'renterAllList',
        element:<RenterHouseList/>
      }

    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </QueryClientProvider>
)
