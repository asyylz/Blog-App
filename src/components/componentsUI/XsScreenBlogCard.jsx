export default function XsScreenBlogCard({
  image,
  title,
  likes,
  comments,
  countOfVisitors,
  createdAt,
  content,
}) {
  function getFirstTenWords(text) {
    const words = text.split(/\s+/);
    const firstTenWords = words.slice(0, 10).join(' ');
    return firstTenWords;
  }
  return (
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={image} alt="" />
      </a>
      <div style={{ border: '3px solid yellow' }} className="p-5">
        <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="text-themeBrown">
          <small>Published:{createdAt.split('T')[0]}</small>
        </p>
        <p className="mb-3 font-ibm-flex text-gray-700 dark:text-gray-400">
          {`${getFirstTenWords(content)}...`}
        </p>
        <div
          style={{ border: '1px solid red' }}
          className="container flex justify-between mx-auto gap-10"
        >
          <button className="px-3 py-2 text-themeDirtyWhite bg-themeGreenDark hover:bg-themeGreen hover:animate-bounce delay-150 duration-300 rounded-xl flex items-center gap-2 flex-none text-xs md:text-lg">
            <img src="./card/arrowRight.svg" alt="login" className="h-5 w-5" />
            <span>Read more</span>
          </button>
          <div
            style={{ border: '1px solid purple' }}
            className="container flex-auto flex justify-evenly items-center "
          >
            <div>
              <p className="text-themeBrown text-center">
                <small>{likes.length}</small>
              </p>
              <img src="./card/heart.svg" alt="heart" className="h-5 w-5" />
            </div>
            <div>
              <p className="text-themeBrown text-center">
                <small>{comments.length}</small>
              </p>
              <img
                src="./card/comments.svg"
                alt="comments"
                className="h-5 w-5"
              />
            </div>
            <div>
              <p className="text-themeBrown text-center">
                <small>{countOfVisitors}</small>
              </p>
              <img src="./card/views.svg" alt="views" className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
