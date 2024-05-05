import HomePage from '../pages/HomePage';
import AuthPage from '../pages/AuthPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import { loaderBlogs } from '../layouts/RootLayout';
import { action as userAction } from '../pages/AuthPage';
import ErrorPage from '../pages/ErrorPage';
import BlogDetailPostPage from '../pages/BlogDetailPostPage';
import { action as logoutAction } from '../pages/Logout';
import { loader as loaderBlogPost } from '../pages/BlogDetailPostPage';
import NewBlogPostPage from '../pages/NewBlogPostPage';
//import { action as actionUserCheck } from '../components/componentsUI/PostDesignCardA';
import { action as actionLike } from '../pages/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: 'root',
    loader: loaderBlogs,
    children: [
      {
        index: true,
        element: <HomePage />,
        //action: actionUserCheck
        action: actionLike,
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
            action: actionLike,
          },
        ],
      },
      {
        path: 'new',
        element: <NewBlogPostPage />,
      },
    ],
  },
]);
export default function AppRouter() {
  return <RouterProvider router={router} />;
}
