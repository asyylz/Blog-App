import { useRouteLoaderData } from 'react-router-dom';
import PostDesignCardA from '../components/componentsUI/PostDesignCardA';
import PostDesignCardB from '../components/componentsUI/PostDesignCardB';
import PopularPostItem from '../components/componentsUI/PopularPostItem';
import { useOutletContext } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function ScreenLargeHomePageLayout() {
  const { totalData, blogPosts, categories } = useRouteLoaderData('root');
  const [shownPosts, setShownPosts] = useState();
  const searchedData = useOutletContext();

  const sortedData = [...totalData].sort(
    (a, b) => b.countOfVisitors - a.countOfVisitors
  );
  //console.log(shownPosts);
  useEffect(() => {
    if (searchedData) {
      setShownPosts(searchedData);
    } else {
      setShownPosts(blogPosts);
    }
  }, [searchedData,blogPosts]);

  return (
    <>
      <div
        //style={{ border: '3px solid blue' }}
        className="grid grid-cols-12 w-full px-5 gap-2"
      >
        <div
          //style={{ border: '3px solid red' }}
          className="col-span-9 bg-themeDirtyWhite container mx-auto w-full  min-h-full py-6"
        >
          <div
            //style={{ border: '3px solid yellow' }}
            className="grid grid-cols-3 gap-2"
          >
            {shownPosts?.map((post, index) => {
              const patternIndex = index % 4;

              switch (patternIndex) {
                case 0:
                  return <PostDesignCardA key={post._id} {...post} />; // 'A'
                case 1:
                case 2:
                  return (
                    <div key={post._id} className="max-w-sm min-h-[400px]">
                      <PostDesignCardB {...post} />
                    </div>
                  ); // 'B'
                case 3:
                  return <PostDesignCardA key={post._id} {...post} />; // 'A'
                case 4:
                case 5:
                case 6:
                  return (
                    <div key={post._id} className="max-w-sm min-h-[400px]">
                      <PostDesignCardB {...post} />
                    </div>
                  ); // 'B'
                default:
                  return null; // Fallback (should not be reached)
              }
            })}
          </div>
        </div>
        <div
          //style={{ border: '3px solid green' }}
          className="col-span-3 border-l-2 border-[#C2B6B6]"
        >
          <h3 className="text-themeBrown text-center py-2 text-3xl font-ibm-flex italic  font-thin">
            Popular posts
          </h3>

          {sortedData.map((post, index) => {
            // Render only the first 13 posts (index 0 through 12)
            if (index < 12) {
              return (
                <PopularPostItem
                  key={post._id || index}
                  {...post}
                  rank={index + 1}
                  category={(() => {
                    const match = categories.find(
                      (category) => category._id === post.categoryId
                    );
                    return match ? match.name : 'Default Category Name';
                  })()}
                />
              );
            }
            return null;
          })}
        </div>
      </div>
    </>
  );
}
