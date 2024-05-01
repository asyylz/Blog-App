import HomePage from '../pages/HomePage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    //errorElement: <ErrorPage />,
    id: 'root',
    children: [
      { index: true, element: <HomePage /> },


      {
        path: 'auth',
        //element: <AuthPage />,
      },

      {
        path: 'logout',
        //action: logoutAction,
      },
    ],
  },
]);
export default function AppRouter() {
  return <RouterProvider router={router} />;
}
