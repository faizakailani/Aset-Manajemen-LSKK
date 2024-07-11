import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: "/",
    element: <ProfileCard />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/dashboard/listperangkat",
    element: <RegDevice />
  },
  {
    path: "/dashboard/riwayat",
    element: <Riwayat />
  },
  {
    path: "/dashboard/profile",
    element: <ProfilePage />
  },
  
  {
    path: "/dashboard/manageuser",
    element: <Dashboard4 />
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: '/verifikasi',
    element: <Verification />
  },
  {
    path: '/update-password',
    element: <UpdatePasswordPage />
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />
  },
  {
    path: "/update-profile",
    element: <UpdateProfile/>
  },
  {
    path: "/user/add",
    element: <RegisterUser />
  },
  //cek data dev
  {
    path: "/company",
    element: <Company />
  },
  {
    path: "/role",
    element: <UserByCompany/>
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)