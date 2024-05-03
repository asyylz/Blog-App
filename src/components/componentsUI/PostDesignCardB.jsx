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
      className={`max-w-xs md:max-w-sm lg:max-w-md mx-6 shadow-themeShadow bg-[#C2B6B6]/50 ${
        screen === 'small' ? 'my-5' : 'my-20'
      } ${animate}`}
    >
      <div
        //style={{ border: '1px solid purple' }}
        className="container flex-auto flex justify-evenly items-center max-w-[200px] "
      >
        <div>
          <p className="text-themeBrown text-center">
            <small>{likes.length}</small>
          </p>
          <img
            src="./card/heart.svg"
            alt="heart"
            className="h-5 w-5 cursor-pointer"
          />
        </div>
        <div>
          <p className="text-themeBrown text-center">
            <small>{comments.length}</small>
          </p>
          <img
            src="./card/comments.svg"
            alt="comments"
            className="h-5 w-5 cursor-pointer"
          />
        </div>
        <div>
          <p className="text-themeBrown text-center">
            <small>{countOfVisitors}</small>
          </p>
          <img
            src="./card/views.svg"
            alt="views"
            className="h-5 w-5 cursor-pointer"
          />
        </div>
        <div className="ml-3 mt-4">
          <img
            src="./card/share.svg"
            alt="views"
            className="h-6 w-6 cursor-pointer"
          />
        </div>
      </div>
      <a href="#">
        <img
          className="rounded-t-lg px-2 py-2 max-h-[250px]"
          src={image}
          alt=""
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
          className="container flex flex-col justify-between mx-auto gap-3"
        >
          <button className="px-3 py-2 text-themeDirtyWhite bg-themeGreenDark hover:bg-themeGreen hover:animate-bounce delay-150 duration-300 rounded-xl flex items-center  flex-none text-xs md:text-sm md:min-w-[100px] lg:max-w-[130px]">
            <img src="./card/arrowRight.svg" alt="login" className="h-5 w-5" />
            <span>Read more</span>
          </button>
        </div>
      </div>
    </div>
  );
}
