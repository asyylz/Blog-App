import { useRouteLoaderData, Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../hooks/useAuth';
import NewBlogForm from '../components/componentsUI/NewBlogForm';
import { useActionData } from 'react-router-dom';
import ModalCustom from '../components/componentsUI/ModalCustom';
export default function EditBlogPostPage() {
  const post = useRouteLoaderData('blog-detail');

  const updateActionData = useActionData();
  const isSuccess = updateActionData?.error === false ? true : false;

  return (
    <>
      {isSuccess && (
        <ModalCustom isSuccess={isSuccess}>
          <h2 className="w-full p-4 font-ibm-flex text-[30px] text-center text-themeDirtyWhite italic font-thin bg-themeGreenDark rounded-lg border-2 ">
            You successfuly update your post!
          </h2>
        </ModalCustom>
      )}
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
  console.log(postData);
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
    return response.data;
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
