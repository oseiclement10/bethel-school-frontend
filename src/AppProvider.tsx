import Homepage from './pages/landing/Homepage';
import Courses from "./pages/landing/Courses";
import AboutUs from "./pages/landing/About";
import ContactUs from './pages/landing/Contact';
import Application from './pages/landing/Application';

import { createBrowserRouter, Navigate, Outlet, RouterProvider, } from 'react-router';

import AdmissionProcess from './pages/AdmissionProcess';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ScrollToTop from './components/scroll-to-top';
import Login from './pages/Portal/Login';
import Dashboard from './pages/Portal/Dashboard';
import Fees from './pages/Portal/Fees';
import ForgetPassword from './pages/Portal/ForgetPassword';
import ResetPassword from './pages/Portal/ResetPassword';
import { PortalProtectedLayout, PortalPublicLayout } from './components/layouts/PortalLayouts';

const AppLayout = () => {
    return (
        <main className='font-poppins'>
            <ScrollToTop />
            <Outlet />
        </main>
    )
}

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Homepage />
            },
            {
                path: '/courses',
                element: <Courses />
            },
            {
                path: '/about-us',
                element: <AboutUs />
            },
            {
                path: '/contact-us',
                element: <ContactUs />
            },
            {
                path: '/apply',
                element: <Application />
            },
            {
                path: '/apply/new',
                element: <AdmissionProcess />
            },
            {
                path: '/apply/admissions/new',
                element: <Navigate to="/apply/new" />
            }
        ]
    },

    {
        path: "/portal",
        children: [
            {
                element: <PortalPublicLayout />,
                children: [
                    { path: "login", element: <Login /> },
                    { path: "forget-password", element: <ForgetPassword /> },
                    { path: "reset-password", element: <ResetPassword /> }
                ]
            },
            {
                element: <PortalProtectedLayout />,
                children: [
                    { path: "dashboard", element: <Dashboard /> },
                    { path: "fees", element: <Fees /> }
                ]
            }
        ]
    }

]);


const AppProvider = () => {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>

    )
}



export default AppProvider