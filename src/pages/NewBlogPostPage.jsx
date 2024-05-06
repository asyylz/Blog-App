import NewBlogForm from '../components/componentsUI/NewBlogForm';
import { useAuth } from '../hooks/useAuth';
import axios from 'axios';
export default function NewBlogPostPage() {
  return <NewBlogForm />;
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
