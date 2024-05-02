import { useRouteLoaderData } from 'react-router-dom';
import PostDesignCardA from '../components/componentsUI/PostDesignCardA';
import PostDesignCardB from '../components/componentsUI/PostDesignCardB';

export default function ScreenLargeHomePageLayout() {
  const blogPosts = useRouteLoaderData('root');
  console.log(blogPosts);
  return (
    <div
      //style={{ border: '3px solid red' }}
      className=" bg-themeDirtyWhite container mx-auto w-full  min-h-full py-6"
    >
      <div
        //style={{ border: '3px solid yellow' }}
        className=" grid grid-cols-3 gap-3"
      >
        {blogPosts.map((post, index) => {
          // Calculate position in the repeating pattern
          const patternIndex = index % 4;

          switch (patternIndex) {
            case 0:
              return <PostDesignCardA {...post} />; // 'A'
            case 1:
            case 2:
              return (
                <div className="max-w-sm min-h-[400px]">
                  <PostDesignCardB {...post} />
                </div>
              ); // 'B'
            case 3:
              return <PostDesignCardA {...post} />; // 'A'
            case 4:
            case 5:
            case 6:
              return (
                <div className="max-w-sm min-h-[400px]">
                  <PostDesignCardB {...post} />
                </div>
              ); // 'B'
            default:
              return null; // Fallback (should not be reached)
          }
        })}
      </div>
    </div>
  );
}
