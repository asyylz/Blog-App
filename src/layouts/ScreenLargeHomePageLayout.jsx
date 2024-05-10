import { useRouteLoaderData } from 'react-router-dom';
import PostDesignCardA from '../components/componentsUI/PostDesignCardA';
import PostDesignCardB from '../components/componentsUI/PostDesignCardB';
import PopularPostItem from '../components/componentsUI/PopularPostItem';
import { useEffect } from 'react';
import useSWR from 'swr';
import useHttp from '../hooks/useHttp';
export default function ScreenLargeHomePageLayout({
  shownPosts,
  setShownPosts,
  searchedData,
}) {
  const { fetcher } = useHttp();

  const {
    blogPosts,
    totalData: initialTotalData,
    categories: initialCategories,
  } = useRouteLoaderData('root');

  //console.log(initialTotalData);

  const { data: totalData, errorTotalData } = useSWR(
    'https://38110.fullstack.clarusway.com/blogs/',
    fetcher,
    {
      initialData: initialTotalData, // Use initial data from the loader
      revalidateOnMount: false, // Do not revalidate immediately
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      refreshWhenHidden: false,
    }
  );

  const { data: categories, errorCategories } = useSWR(
    'https://38110.fullstack.clarusway.com/categories/',
    fetcher,
    {
      initialData: initialCategories, // Use initial data from the loader
      revalidateOnMount: false, // Do not revalidate immediately
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      refreshWhenHidden: false,
    }
  );

  useEffect(() => {
    console.log('Component mounted or updated');
  }, []);

  //console.log('Fetching data with SWR:', totalData);

  const sortedData = [...initialTotalData].sort(
    (a, b) => b.countOfVisitors - a.countOfVisitors
  );

  useEffect(() => {
    if (searchedData) {
      setShownPosts(searchedData);
    } else {
      setShownPosts(blogPosts);
    }
  }, [searchedData, blogPosts]);

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
                    const match = initialCategories.find(
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
