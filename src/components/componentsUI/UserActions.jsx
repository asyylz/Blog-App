import { useSubmit } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { json } from 'react-router-dom';
import axios from 'axios';
import ModalNotification from './ModalNotification';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


export default function UserActions({
  likes,
  comments,
  countOfVisitors,
  id,
  userId,
}) {
  const location = useLocation();
  const isIdInURL = location.pathname === `/${id}`;

  const [openModal, setOpenModal] = useState({
    modalType: '',
    text: '',
    status: false,
  });

  const navigate = useNavigate();

  const { user } = useAuth();

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

  const handleEditClick = () => {
    if (isIdInURL) {
      navigate('edit');
    } else {
      navigate(`${id}/edit`);
    }
  };

  return (
    <>
      {openModal.status && (
        <ModalNotification
          //setConfirm={setConfirm}
          openModal={openModal}
          setOpenModal={setOpenModal}
          id={id}
        />
      )}

      <div className="container flex  w-full justify-between items-center ">
        <div className="flex lg:ml-4">
          <div onClick={handleLikeClick}>
            <p className="text-themeBrown text-center">
              <small>{likes?.length}</small>
            </p>

            <img
              src={`./card/heart${
                likes.some((like) => like === user?.userId) ? 'Filled' : ''
              }.svg`}
              alt="heart"
              className="h-6 w-6 lg:h-7 lg:w-7 cursor-pointer mr-2"
            />
          </div>
          <div>
            <p className="text-themeBrown text-center">
              <small>{comments?.length}</small>
            </p>
            <img
              src="./card/comments.svg"
              alt="comments"
              className="h-6 w-6 lg:h-7 lg:w-7 cursor-pointer mr-2"
            />
          </div>
          <div>
            <p className="text-themeBrown text-center">
              <small>{countOfVisitors}</small>
            </p>
            <img
              src="./card/views.svg"
              alt="views"
              className="h- w-5 lg:h-7 lg:w-7 cursor-pointer mr-2"
            />
          </div>
        </div>
        <div className="flex">
          {userId === user?.userId && (
            <div className="mt-5 ml-3 md:ml-0" onClick={handleDeleteClick}>
              <img
                src={`./card/delete.svg`}
                alt="heart"
                className="h-6 w-6 lg:h-7 lg:w-7 cursor-pointer"
              />
            </div>
          )}

          {userId === user?.userId && (
            <div className="mt-5 md:mx-1 lg:mx-3" onClick={handleEditClick}>
              <img
                src={`./card/edit.svg`}
                alt="heart"
                className="h-6 w-6 lg:h-7 lg:w-7 cursor-pointer"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const { user } = useAuth();
  const actionType = formData.get('actionType');

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
