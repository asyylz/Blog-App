import { useRouteLoaderData, Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../hooks/useAuth';
import NewBlogForm from '../components/componentsUI/NewBlogForm';
export default function EditBlogPostPage() {
  const post = useRouteLoaderData('blog-detail');
  return (
    <>
      <Link
        to={-1}
        className="px-3 py-2 my-4 w-[100px]  sm:w-[200px] text-themeCream bg-themeGreenDark hover:bg-themeGreen hover:animate-bounce delay-150 duration-300 focus:ring-4 focus:outline-none focus:ring-themeGreenDark rounded-xl  text-xs md:text-sm lg:text-lg text-center"
      >
        Back
      </Link>
      <NewBlogForm post={post} />
    </>
  );
}

export async function action({ request }) {
  const { user } = useAuth();
  const data = await request.formData();
  const postId = data.get('postId');
  const postData = {
    _id: postId,
    userId: user.userId,
    title: data.get('title'),
    image: data.get('image'),
    categoryId: data.get('categoryId'),
    content: data.get('content'),
    isPublish: data.get('isPublish') === 'Published' ? true : false,
  };
  try {
    const response = await axios.put(
      `https://38110.fullstack.clarusway.com/blogs/${postId}`,
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
