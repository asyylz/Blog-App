import { useRouteLoaderData } from 'react-router-dom';
import PostDesignCardA from '../components/componentsUI/PostDesignCardA';
import PostDesignCardB from '../components/componentsUI/PostDesignCardB';
import BlogListItem from '../components/componentsUI/BlogListItem';

export default function ScreenLargeHomePageLayout() {
  const blogPosts = useRouteLoaderData('root');
  return (
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
          {blogPosts.map((post, index) => {
            // Calculate position in the repeating pattern
            const patternIndex = index % 4;

            switch (patternIndex) {
              case 0:
                return <PostDesignCardA key={post._id}  {...post} />; // 'A'
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
        <h3 className="text-themeBrown text-center py-2 text-2xl font-ibm-flex italic  font-thin">
          Most seen posts
        </h3>
        {blogPosts.map((post) => (
          <BlogListItem  title={post.title} id={post._id} />
        ))}
      </div>
    </div>
  );
}
