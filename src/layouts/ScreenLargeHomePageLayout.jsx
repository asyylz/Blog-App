import { useRouteLoaderData } from 'react-router-dom';
import PostDesignCardA from '../components/componentsUI/PostDesignCardA';
import PostDesignCardB from '../components/componentsUI/PostDesignCardB';
import PopularPostItem from '../components/componentsUI/PopularPostItem';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchBlogPosts } from '../utils/http';
import useAxios from '../hooks/useAxios.jsx';
export default function ScreenLargeHomePageLayout({
  shownPosts,
  setShownPosts,
  searchedData,
}) {
  const { totalData, categories } = useRouteLoaderData('root');

  const urlParams = new URLSearchParams(window.location.search);
  const page = urlParams.get('page') || '1';
  const limit = urlParams.get('limit') || '6';

  //it is better to keep useQuery around even we have same  request call in loader.So that for example, if we tab out of this window and come back to it later, it triggers a behind the scenes fetch to look for updated data.
  const { data, isError, error } = useQuery({
    queryKey: ['blogs', { page: page, limit: limit }],
    queryFn: ({ signal, queryKey }) =>
      fetchBlogPosts({ signal, ...queryKey[1] }),
    staleTime: 10000,
    //gcTime: 1000,
  });

  const blogPosts = data.data;

  const sortedData = [...totalData].sort(
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
    <div className="grid grid-cols-12 w-full px-10 gap-2">
      <div className="col-span-9 bg-themeDirtyWhite container mx-auto w-full  min-h-full py-6">
        <div className="grid grid-cols-3 gap-2">
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
      <div className="col-span-3 border-l-2 border-[#C2B6B6]">
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
  );
}
