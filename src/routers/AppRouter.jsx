import HomePage from '../pages/HomePage';
import AuthPage from '../pages/AuthPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import { loaderBlogs } from '../layouts/RootLayout';
//import LoginForm, {action as loginUserAction} from '../components/componentsAuth/LoginForm';
//import RegisterForm, {action as registerUserAction,} from '../components/componentsAuth/RegisterForm';
import { action as userAction } from '../pages/AuthPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    //errorElement: <ErrorPage />,
    id: 'root',
    loader: loaderBlogs,
    children: [
      { index: true, element: <HomePage /> },

      {
        path: 'auth',
        element: <AuthPage />,
        action: userAction,
        // children: [
        //   {
        //     index: true,
        //     path: 'login', // assuming 'auth/login'
        //     element: <LoginForm />,
        //     action: loginUserAction, // Assign loginUserAction for login
        //   },
        //   {
        //     path: 'register', // assuming 'auth/register'
        //     element: <RegisterForm />,
        //     action: registerUserAction, // Assign registerUserAction for registration
        //   },
        // ],
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
