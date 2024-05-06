import { useEffect } from 'react';
import NewBlogForm from '../components/componentsUI/NewBlogForm';
import { useAuth } from '../hooks/useAuth';
import axios from 'axios';
import { json } from 'react-router-dom';
export default function NewBlogPostPage() {
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
        <NewBlogForm />
      </div>
    )
  );
}
export async function action({ request }) {
  const { user } = useAuth();
  const data = await request.formData();
  const postData = {
    title: data.get('title'),
    image: data.get('image'),
    categoryId: data.get('categoryId'),
    content: data.get('content'),
    isPublish: data.get('isPublish') === 'Published' ? true : false,
  };
  try {
    const response = await axios.post(
      'https://38110.fullstack.clarusway.com/blogs/',
      postData,
      {
        headers: {
          Authorization: `Token ${user?.token}`,
        },
      }
    );
    console.log(response.data);
    return new Response(JSON.stringify({ redirect: '/' }), {
      status: 303,
      headers: {
        Location: '/',
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    if (error.response) {
      throw error.response;
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response received:', error.request);
      throw new Error('No response received');
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error', error.message);
      throw new Error(error.message);
    }
  }
}
