import PostDesignCardB from '../components/componentsUI/PostDesignCardB';
import { useRouteLoaderData } from 'react-router-dom';
import { useEffect } from 'react';

export default function ScreenSmallHomePageLayout({
  shownPosts,
  setShownPosts,
  searchedData,
}) {
  const { blogPosts } = useRouteLoaderData('root');

  useEffect(() => {
    if (searchedData) {
      setShownPosts(searchedData);
    } else {
      setShownPosts(blogPosts);
    }
  }, [searchedData, blogPosts]);

  return (
    <div
      //style={{ border: '3px solid red' }}
      className="container mx-auto px-3 sm:px-1 py-4 my-auto"
    >
      <div
        //style={{ border: '3px solid green' }}
        className="container flex gap-y-10 justify-center items-center flex-wrap lg:flex-row"
      >
        {shownPosts.map((post) => (
          <div
            key={post._id}
            className="w-full sm:w-1/2 lg:px-2 lg:w-1/2 flex  justify-center"
          >
            <PostDesignCardB {...post} screen="small" />
          </div>
        ))}
      </div>
    </div>
  );
}
