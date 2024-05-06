import { useState } from 'react';
import { useRouteLoaderData } from 'react-router-dom';

export default function Comments() {
  const post = useRouteLoaderData('blog-detail');
  const [isOpen, setIsOpen] = useState(false);
  const [currentShown, setCurrentShown] = useState(0);

  const isEnd = post.comments.length === currentShown ? true : false;
  function handleCommentsShow() {
    setIsOpen(true);
    setCurrentShown(currentShown + 2);
    if (post.comments.length === currentShown) {
      setCurrentShown(0);
    }
  }
  return (
    <>
      {post.comments
        .filter((comment, index) => index < currentShown)
        .map((comment, i) => (
          <div
            key={i}
            className={` flex-col min-w-full ${isOpen ? 'flex' : 'hidden'} ${
              (i + 1) % 2 === 1 ? 'items-start' : 'items-end'
            } `}
          >
            <div
              className="w-full rounded-2xl border border-themeBrown p-5 my-3 max-w-lg"
            >
              <div
                className="flex items-center mb-6"
              >
                <div className="w-12 h-12 rounded-full mr-2 overflow-hidden">
                  <img
                    src="./assets/useravatar.svg"
                    alt=""
                    className="max-w-full h-auto mx-auto"
                  />
                </div>
                <div className="flex flex-grow justify-between">
                  <div>
                    <h5 className="font-medium mb-1">
                      {comment.userId.username}
                    </h5>
                  </div>
                  <p className="text-sm opacity-50 mb-0">
                    {comment.createdAt.split('T')[0]}
                  </p>
                </div>
              </div>
              <p className="text-sm sm:text-[18px] leading-normal opacity-75 mb-6">
                {comment.comment}
              </p>
            </div>
          </div>
        ))}
      <div className="py-6 lg:py-12 text-center">
        <button
          disabled={isEnd ? true : false}
          onClick={handleCommentsShow}
          className={`text-themeCream  hover:text-themeCream hover:bg-themeGreen rounded py-2 px-5 md:px-6 ${
            isEnd ? 'bg-themeGreen' : 'bg-themeGreenDark'
          }`}
        >
          {currentShown === 0 && !isEnd
            ? 'Show comments'
            : isEnd && currentShown !== 0
            ? 'No more comments'
            : 'Load more comments'}
        </button>
      </div>
    </>
  );
}
