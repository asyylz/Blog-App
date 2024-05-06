import { useSubmit } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useActionData } from 'react-router-dom';
import { json } from 'react-router-dom';
//import ErrorPage from '../../pages/ErrorPage';
//import { ErrorResponse } from 'react-router-dom';
import axios from 'axios';

export default function UserActions({ likes, comments, countOfVisitors, id }) {
  const { user } = useAuth();
  //const data = useActionData();
  const submit = useSubmit();

  const handleLikeClick = () => {
    submit({ id: id, actionType: 'like' }, { method: 'post' });
  };

  return (
    <div
      //style={{ border: '1px solid purple' }}
      className="container flex-auto flex justify-evenly items-center max-w-[200px] "
    >
      <div onClick={handleLikeClick}>
        <p className="text-themeBrown text-center">
          <small>{likes?.length}</small>
        </p>

        <img
          src={`./card/heart${
            likes.some((like) => like === user?.userId) ? 'Filled' : ''
          }.svg`}
          alt="heart"
          className="h-6 w-6 cursor-pointer"
        />
      </div>
      <div>
        <p className="text-themeBrown text-center">
          <small>{comments?.length}</small>
        </p>
        <img
          src="./card/comments.svg"
          alt="comments"
          className="h-6 w-6 cursor-pointer"
        />
      </div>
      <div>
        <p className="text-themeBrown text-center">
          <small>{countOfVisitors}</small>
        </p>
        <img
          src="./card/views.svg"
          alt="views"
          className="h-6 w-6 cursor-pointer"
        />
      </div>
    </div>
  );
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const { user } = useAuth();
  const actionType = formData.get('actionType');

/* ---------------------- like case --------------------- */
  if (actionType === 'like') {
    const postId = formData.get('id');
    console.log('new: clicked');

    try {
      console.log('clicked');
      const response = await axios.post(
        `https://38110.fullstack.clarusway.com/blogs/${postId}/postLike`,
        {actionTime},
        {
          headers: {
            Authorization: `Token ${user?.token}`,
          },
        }
      );
      console.log('Like Data:', response.data);

      return new Response(
        JSON.stringify({ success: true, like: response.data }),
        {
          headers: { 'Content-Type': 'application/json' },
          status: 200,
        }
      );
    } catch (error) {
      throw json(
        {
          message: 'You should login to be able to do like action.',
        },
        { statusText: 'Unauthorised!', status: 401 }
      );
    }
  }
/* -------------------- comment case -------------------- */
  if (actionType === 'comment') {
    const id = params.postId;

    const commentData = {
      blogId: id,
      comment: formData.get('comment'),
    };
    console.log(commentData);
    try {
      const response = await axios.post(
        'https://38110.fullstack.clarusway.com/comments/',
        commentData,
        {
          headers: {
            Authorization: `Token ${user?.token}`,
          },
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error.response;
    }
  }
}
