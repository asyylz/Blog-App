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
import { action as actionNewPost } from '../pages/NewBlogPostPage';
import { action as combinedAction } from '../components//componentsUI/UserActions';
//import { action as actionLike } from '../pages/HomePage';
//mport { action as actionNewComment } from '../pages/BlogDetailPostPage';

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
        action: combinedAction,
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
        path: 'new',
        element: <NewBlogPostPage />,
        action: actionNewPost,
      },
      {
        path: ':postId',
        id: 'blog-detail',
        loader: loaderBlogPost,
        children: [
          {
            index: true,
            element: <BlogDetailPostPage />,
            action: combinedAction,
            //action: actionNewComment,
          },
        ],
      },
    ],
  },
]);
export default function AppRouter() {
  return <RouterProvider router={router} />;
}
