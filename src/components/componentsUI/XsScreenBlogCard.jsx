export default function XsScreenBlogCard() {
  return (
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg"
          src="/docs/images/blog/image-1.jpg"
          alt=""
        />
      </a>
      <div style={{ border: '3px solid yellow' }} className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <div
          style={{ border: '1px solid red' }}
          className="container flex justify-between mx-auto gap-10"
        >
          <button className="px-3 py-2 text-themeDirtyWhite bg-themeGreenDark hover:bg-themeCream hover:text-themeBrown rounded-xl flex items-center gap-2 flex-none text-xs md:text-lg ">
            <img src="./card/arrowRight.svg" alt="login" className="h-5 w-5" />
            <span>Read more</span>
          </button>
          <div
            style={{ border: '1px solid purple' }}
            className="container flex-auto flex justify-evenly items-center "
          >
            <div>
              <small className="text-themeBrown">140</small>
              <img src="./card/heart.svg" alt="heart" className="h-5 w-5" />
            </div>
            <div>
              <small className="text-themeBrown">140</small>
              <img
                src="./card/comments.svg"
                alt="comments"
                className="h-5 w-5"
              />
            </div>
            <div>
              <small className="text-themeBrown">140</small>
              <img src="./card/views.svg" alt="views" className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
