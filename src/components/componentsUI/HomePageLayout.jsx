import XsScreenBlogCard from './XsScreenBlogCard';

export default function HomePageLayout() {
  return (
    <div
      style={{ border: '3px solid red' }}
      className="container mx-auto px-4 py-4 my-auto"
    >
      <div
        style={{ border: '3px solid green' }}
        className="container flex gap-y-10 justify-center items-center flex-wrap lg:flex-row"
      >
        <div className="w-full sm:w-1/2 lg:w-1/2 flex  justify-center">
          <XsScreenBlogCard />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/2 flex justify-center">
          <XsScreenBlogCard />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/2 flex justify-center">
          <XsScreenBlogCard />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/2 flex justify-center">
          <XsScreenBlogCard />
        </div>
      </div>
    </div>
  );
}
