import HomePage from '../pages/HomePage';
import AuthPage from '../pages/AuthPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import { loaderBlogs } from '../layouts/RootLayout';
import { action as userAction } from '../pages/AuthPage';
import ErrorPage from '../pages/ErrorPage';
import BlogDetailPostPage from '../pages/BlogDetailPostPage';
import BlogDetailLayout from '../layouts/BlogDetailLayout';
import { action as logoutAction } from '../pages/Logout';
import { loader as loaderBlogPost } from '../pages/BlogDetailPostPage';
//import { action as actionUserCheck } from '../components/componentsUI/PostDesignCardA';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: 'root',
    loader: loaderBlogs,
     //action:actionLike,
    children: [
      { index: true, element: <HomePage />, 
      //action: actionUserCheck 
    },

      {
        path: 'auth',
        element: <AuthPage />,
        action: userAction,
      },

      {
        path: 'logout',
        action: logoutAction,
      },
      {
        path: ':postId',
        id: 'blog-detail',
        loader: loaderBlogPost,
        children: [
          {
            index: true,
            element: <BlogDetailPostPage />,
            //action:actionLike,
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
