import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async';
import Register from './auth/Register';
import Login from './auth/Login';
import AuthProvider from './auth/AuthProvider';
import Root from './components/Root';
import ErrorPage from './components/ErrorPage';
import PrivateRoutes from './Routes/PrivateRoutes'
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Dashboard from './pages/Dashboard/Dashboard';
import OurMenu from './pages/OurMenu';
import OurShop from './pages/OurShop';
import MyCart from './pages/Dashboard/userDashboard/MyCart';
import UserHome from './pages/Dashboard/userDashboard/UserHome';
import Reservation from './pages/Dashboard/userDashboard/Reservation';
import PaymentHistory from './pages/Dashboard/userDashboard/PaymentHistory';
import MyBooking from './pages/Dashboard/userDashboard/MyBooking';
import AddReview from './pages/Dashboard/userDashboard/AddReview';
import AdminHome from './pages/Dashboard/adminDashboard/AdminHome';
import AllUsers from './pages/Dashboard/adminDashboard/AllUsers';
import ManageBookings from './pages/Dashboard/adminDashboard/ManageBookings';
import ManageItems from './pages/Dashboard/adminDashboard/ManageItems';
import AddItems from './pages/Dashboard/adminDashboard/AddItems';
import UpdateItem from './pages/Dashboard/adminDashboard/UpdateItem';
const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/contactUs",
        element: <ContactUs></ContactUs>
      },
      {
        path: "/ourMenu",
        element: <OurMenu></OurMenu>
      },
      {
        path: "/ourShop/:category",
        element: <OurShop></OurShop>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
    ]
  },


  {
    path: "/dashboard",
    element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard/userHome",
        element: <UserHome></UserHome>
      },
      {
        path: "/dashboard/reservation",
        element: <Reservation></Reservation>
      },
      {
        path: "/dashboard/paymentHistory",
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path: "/dashboard/cart",
        element: <MyCart></MyCart>
      },
      {
        path: "/dashboard/addReview",
        element: <AddReview></AddReview>
      },
      {
        path: "/dashboard/myBooking",
        element: <MyBooking></MyBooking>
      },
      {
        path: "/dashboard/adminHome",
        element: <AdminHome></AdminHome>
      },
      {
        path: "/dashboard/addItems",
        element: <AddItems></AddItems>
      },
      {
        path: "/dashboard/updateItems",
        element: <UpdateItem></UpdateItem>
      },
      {
        path: "/dashboard/manageItems",
        element: <ManageItems></ManageItems>
      },
      {
        path: "/dashboard/manageBookings",
        element: <ManageBookings></ManageBookings>
      },
      {
        path: "/dashboard/allUsers",
        element: <AllUsers></AllUsers>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </StrictMode>,
)
