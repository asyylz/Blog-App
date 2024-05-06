import { useSubmit } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useActionData } from 'react-router-dom';
import { json } from 'react-router-dom';

export default function UserActions({ likes, comments, countOfVisitors, id }) {
  const { isAuthenticated } = useAuth();
  const data = useActionData();
  console.log(data?.like.didUserLike);
  const submit = useSubmit();

  const handleLikeClick = () => {
    if (isAuthenticated) {
      submit({ id: id }, { method: 'post' });
    } else {
      console.log('clicked')
      throw json({}, { status: 401, statusText: 'You should login.' });

    }
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
            //src={`./card/heart${likes?.length === 1 ? 'Filled' : ''}.svg`}
            src={`./card/heart${
            isAuthenticated && data?.like.didUserLike ? 'Filled' : ''
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
