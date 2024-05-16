import BlogPostDetails from '../components/componentsUI/BlogPostDetails';
import { json } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useEffect } from 'react';
import BackPageButton from '../components/componentsUI/BackPageButton';
import { fetchBlogPost, queryClient } from '../utils/http';

export default function BlogDetailPostPage() {
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      throw json({}, { status: 401, statusText: 'You should login.' });
    }
  }, []);

  return (
    isAuthenticated && (
      <>
        <BackPageButton />
        <div
          className="min-h-screen py-10 "
        >
          <BlogPostDetails />
        </div>
      </>
    )
  );
}

export async function loader({ params }) {
  const id = params.postId;
  try {
    const { data: post } = await queryClient.fetchQuery({
      queryKey: ['blog-detail', { id: id }],
      queryFn: ({ signal, queryKey }) =>
        fetchBlogPost({ signal, ...queryKey[1] }),
      staleTime: 8000,
    });
    
    return post;
  } catch (error) {
    console.log(error);
    throw error;
    //json({}, { status: 401, statusText: 'You should login.' });
  }
}
