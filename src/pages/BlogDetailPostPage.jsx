import BlogPostDetails from '../components/componentsUI/BlogPostDetails';
import { json } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useEffect } from 'react';
import useAxios from '../hooks/useAxios';
import BackPageButton from '../components/componentsUI/BackPageButton';
const BASE_URL = import.meta.env.VITE_BASE_URL;
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
          //style={{ border: '1px solid red' }}
          className="min-h-screen py-10 "
        >
          <BlogPostDetails />
        </div>
      </>
    )
  );
}

export async function loader({ params }) {
  const axiosWithToken = useAxios();
  const id = params.postId;
  try {
    // const response = await axios.get(
    //   `https://38110.fullstack.clarusway.com/blogs/${id}/`,
    //   {
    //     headers: {
    //       Authorization: `Token ${user?.token}`,
    //     },
    //   }
    // );
    const { data } = await axiosWithToken.get(`${BASE_URL}blogs/${id}/`);
    console.log(data);
    const post = data.data;

    //const post = response.data.data;
    console.log(post);
    return post;
  } catch (error) {
    console.log(error);
    throw error;
    //json({}, { status: 401, statusText: 'You should login.' });
  }
}
