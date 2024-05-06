import BlogPostDetails from '../components/componentsUI/BlogPostDetails';
import {json } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../hooks/useAuth';
import { useEffect } from 'react';
export default function BlogDetailPostPage() {
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      throw json({}, { status: 401, statusText: 'You should login.' });
    }
  }, []);


  return (
    isAuthenticated && (
      <div
        //style={{ border: '1px solid red' }}
        className="min-h-screen py-10 "
      >
        <BlogPostDetails />
      </div>
    )
  );
}

export async function loader({ params }) {
  const { user } = useAuth();
  const id = params.postId;
  try {
    const response = await axios.get(
      `https://38110.fullstack.clarusway.com/blogs/${id}/`,
      {
        headers: {
          Authorization: `Token ${user?.token}`,
        },
      }
    );
    const post = response.data.data;
    //console.log(post);
    return post;
  } catch (error) {
    console.log(error);
    //return  error
    //json({}, { status: 401, statusText: 'You should login.' });
  }
}
