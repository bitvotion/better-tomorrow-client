import React from 'react';
import { createBrowserRouter } from 'react-router';

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        hydrateFallbackElement: <p>Loading wait load nek</p>,
        children: [
            {
                index: true,
                Component: Home,
            }
        ]
    },
    {
        path: '/auth',
        Component: AuthLayout,
        hydrateFallbackElement: <p>Auth load nitese ubaa</p>,
        children: [
            {
                path: 'login',
                Component: Login,
            },
            {
                path: 'register',
                Component: Register,
            },
            {
                path: 'reset-password',
                Component: ResetPassword,
            }
        ]
    },
    {
        path: '/*',
        Component: Error404,
    }
])

export default router;