import { useParams } from 'react-router-dom';
import BlogPostDetails from '../components/componentsUI/BlogPostDetails';
import { useOutletContext } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import { useRouteLoaderData, json } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
export default function BlogDetailPostPage() {
  const { isAuthenticated } = useAuth();
  const post = useRouteLoaderData('blog-detail');
  console.log(isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      throw json({}, { status: 401, statusText: 'You should login.' });
    }
  }, []);

  return (
    isAuthenticated && (
      <div style={{ border: '1px solid red' }} className="min-h-screen py-10 ">
        <BlogPostDetails {...post} />
      </div>
    )
  );
}

export async function loader({ request, params }) {
  const user = JSON.parse(localStorage.getItem('user'));
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
    console.log(post);
    return post;
  } catch (error) {
    console.log(error);
    //return  error
    //json({}, { status: 401, statusText: 'You should login.' });
  }
}
