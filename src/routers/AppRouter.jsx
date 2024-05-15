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
import EditBlogPostPage from '../pages/EditBlogPostPage';
import { action as actionUpdatePost } from '../pages/EditBlogPostPage';
import Logout from '../pages/Logout';
import { action as searchAction } from '../layouts/RootLayout';
import { action as newsletterAction } from '../components/componentsUI/NewsletterSignUp';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../utils/http';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: 'root',
    action: searchAction,
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
        element: <Logout />,
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
          },
          {
            path: 'edit',
            element: <EditBlogPostPage />,
            action: actionUpdatePost,
          },
        ],
      },
      {
        path: 'newsletter',
        action: newsletterAction,
      },
    ],
  },
]);
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
