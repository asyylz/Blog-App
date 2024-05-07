import { useSubmit } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { json } from 'react-router-dom';
import axios from 'axios';
import ModalNotification from './ModalNotification';
import { useState } from 'react';

export default function UserActions({
  likes,
  comments,
  countOfVisitors,
  id,
  userId,
}) {
  const [openModal, setOpenModal] = useState({
    modalType: '',
    text: '',
    status: false,
  });

  const [confirm, setConfirm] = useState(false);

  console.log(confirm);
  console.log(openModal);

  const { user } = useAuth();
  //const data = useActionData();
  const submit = useSubmit();

  const handleLikeClick = () => {
    submit({ id: id, actionType: 'like' }, { method: 'POST' });
  };

  const handleDeleteClick = () => {
    setOpenModal({
      modalType: 'warning',
      status: true,
      text: ' Are you sure you want to delete this post?',
    });
  };

  return (
    <>
      {openModal.status && (
        <ModalNotification
          setConfirm={setConfirm}
          openModal={openModal}
          setOpenModal={setOpenModal}
          id={id}
        />
      )}

      <div
        //style={{ border: '1px solid purple' }}
        className="container flex-auto flex justify-evenly items-center max-w-[200px] "
      >
        {userId === user?.userId && (
          <div className="mt-5" onClick={handleDeleteClick}>
            <img
              src={`./card/delete.svg`}
              alt="heart"
              className="h-6 w-6 cursor-pointer"
            />
          </div>
        )}

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
    </>
  );
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const { user } = useAuth();
  const actionType = formData.get('actionType');
  // console.log(actionType)

  /* ---------------------- like case --------------------- */
  if (actionType === 'like') {
    const postId = formData.get('id');
    try {
      const response = await axios.post(
        `https://38110.fullstack.clarusway.com/blogs/${postId}/postLike`,
        {},
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
  /* --------------------- delete case -------------------- */
  if (actionType === 'delete') {
    const postId = formData.get('id');
    try {
      const response = await axios.delete(
        `https://38110.fullstack.clarusway.com/blogs/${postId}`,
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
