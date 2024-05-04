import HomePage from '../pages/HomePage';
import AuthPage from '../pages/AuthPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import { loaderBlogs } from '../layouts/RootLayout';
import { action as userAction } from '../pages/AuthPage';
import ErrorPage from '../pages/ErrorPage';
import BlogDetailPostPage from '../pages/BlogDetailPostPage';
import BlogDetailLayout from '../layouts/BlogDetailLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: 'root',
    loader: loaderBlogs,
    children: [
      { index: true, element: <HomePage /> },

      {
        path: 'auth',
        element: <AuthPage />,
        action: userAction,
      },

      {
        path: 'logout',
        //action: logoutAction,
      },
      {
        path: ':postId',
        id: 'blog-detail',
       // element: <BlogDetailLayout />,
        children: [
          {
            index: true,
            element: <BlogDetailPostPage />,
          },
          {
            path: 'edit',
            //element: <EditBlogPostPage />,
          },
        ],
      },
    ],
  },
]);
export default function AppRouter() {
  return <RouterProvider router={router} />;
}
