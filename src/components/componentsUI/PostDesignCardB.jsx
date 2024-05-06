import { Link } from 'react-router-dom';
import UserActions from '../componentsUI/UserActions';
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
  userId
}) {
  function getFirstTenWords(text) {
    const words = text.split(/\s+/);
    const firstTenWords = words.slice(0, 10).join(' ');
    return firstTenWords;
  }

  const animate = 'animate-fade-left';
  return (
    <div
      //style={{ border: '1px solid purple' }}
      key={_id}
      className={`rounded-lg max-w-xs md:max-w-sm lg:max-w-md mx-6 shadow-themeShadow bg-[#C2B6B6]/50 ${
        screen === 'small' ? 'my-5' : 'my-20'
      } ${animate}`}
    >
      <div
        //style={{ border: '1px solid red' }}
        className="container flex justify-end"
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
          className="rounded-t-lg px-2 py-2 max-h-[250px]"
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
          {`${getFirstTenWords(content)}...`}
        </p>
        <div
          //style={{ border: '1px solid red' }}
          className="container flex flex-col sm:flex-row justify-between mx-auto gap-3"
        >
          <Link
            to={_id}
            className="px-3 py-2 text-themeDirtyWhite bg-themeGreenDark hover:bg-themeGreen hover:animate-bounce delay-150 duration-300 rounded-xl flex  items-center justify-center flex-none text-xs md:text-sm md:min-w-[200px] lg:max-w-[130px]"
          >
            <img
              src="./card/arrowRight.svg"
              alt="login"
              className="h-5 w-5 mr-2 -ml-6 sm:ml-0"
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
