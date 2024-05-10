import { useEffect } from 'react';
import NewBlogForm from '../components/componentsUI/NewBlogForm';
import { useAuth } from '../hooks/useAuth';
import axios from 'axios';
import { json } from 'react-router-dom';
import { useActionData } from 'react-router-dom';
import ModalCustom from '../components/componentsUI/ModalCustom';
export default function NewBlogPostPage() {
  const updateData = useActionData();
  const { isAuthenticated } = useAuth();
 // console.log(updateData);
  const isSuccess = updateData?.error === false ? true : false;

  useEffect(() => {
    if (!isAuthenticated) {
      throw json({}, { status: 401, statusText: 'You should login.' });
    }
  }, []);

  return (
    <>
      {isAuthenticated && (
        <div className="min-h-screen py-10">
          <NewBlogForm />
        </div>
      )}

      {isSuccess && (
        <ModalCustom isSuccess={isSuccess} newPostId={updateData.data._id}>
          <h2 className="w-full p-4 font-ibm-flex text-[30px] text-center text-themeDirtyWhite italic font-thin bg-themeGreenDark rounded-lg border-2 ">
            You successfuly created a new blog post.
          </h2>
        </ModalCustom>
      )}
    </>
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
