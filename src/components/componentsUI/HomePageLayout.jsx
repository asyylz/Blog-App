import { useLoaderData } from 'react-router-dom';
import XsScreenBlogCard from './XsScreenBlogCard';
import { useRouteLoaderData } from 'react-router-dom';

export default function HomePageLayout() {
  const blogPosts = useRouteLoaderData('root');
  

  return (
    <div
      style={{ border: '3px solid red' }}
      className="container mx-auto px-3 sm:px-1 py-4 my-auto"
    >
      <div
        style={{ border: '3px solid green' }}
        className="container flex gap-y-10 justify-center items-center flex-wrap lg:flex-row"
      >
        {blogPosts.map((post) => (
          <div key={post._id} className="w-full sm:w-1/2 lg:px-2 lg:w-1/2 flex  justify-center">
            <XsScreenBlogCard {...post}/>
          </div>
        ))}
      </div>
    </div>
  );
}
