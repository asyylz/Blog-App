import { Link } from 'react-router-dom';
import UserActions from '../componentsUI/UserActions';
import { titleTrimmer } from '../../utils/titleTrimmer';
export default function PostDesignCardB({
  image,
  title,
  likes,
  comments,
  countOfVisitors,
  createdAt,
  content,
  _id,
  screen,
  userId,
}) {

  const animate = 'animate-fade-left';
  return (
    <div
      //style={{ border: '1px solid purple' }}
      key={_id}
      className={`rounded-lg  mx-5 shadow-themeShadow bg-[#C2B6B6]/50 ${
        screen === 'small' ? 'my-5 w-[400px]' : 'my-20'
      } ${animate}`}
    >
      <div
        //style={{ border: '1px solid yellow' }}
        className={`container ${screen ==='small' ? "px-10":""}`}
      >
        <UserActions
          likes={likes}
          comments={comments}
          countOfVisitors={countOfVisitors}
          id={_id}
          userId={userId}
        />
      </div>
      <a href="#">
        <img
          className="rounded-t-lg px-2 py-2 max-h-[250px] mx-auto"
          src={image}
          alt={title}
        />
      </a>
      <div
        //style={{ border: '3px solid yellow' }}
        className="p-5"
      >
        <p className="mb-2 font-bold tracking-tight text-themeGray dark:text-white">
          {title}
        </p>
        <p className="text-themeBrown">
          <small>Published:{createdAt.split('T')[0]}</small>
        </p>
        <p className="mb-3 font-ibm-flex text-gray-700 dark:text-gray-400">
          {`${titleTrimmer(content)}...`}
        </p>
        <div
          //style={{ border: '1px solid red' }}
          className="container flex flex-col xl:flex-row justify-between mx-auto gap-3"
        >
          <Link
            to={_id}
            className={`px-3 py-2 text-themeDirtyWhite bg-themeGreenDark hover:bg-themeGreen hover:animate-bounce delay-150 duration-300 rounded-xl flex  items-center justify-center flex-none text-xs md:text-sm ${screen === 'small' ? 'w-full':''} lg:w-[150px]`}
          >
            <img
              src="./card/arrowRight.svg"
              alt="login"
              className="h-5 w-5 mr-2 sm:ml-0"
            />
            <span>Read more</span>
          </Link>
          <div className="ml-3 mt-4">
            <img
              src="./card/share.svg"
              alt="views"
              className="h-6 w-6 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
