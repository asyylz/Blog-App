import CommentsBlockHeader from './CommentsBlockHeader';
import UserActions from '../componentsUI/UserActions';
import { useRouteLoaderData } from 'react-router-dom';
import ShareActions from './ShareActions';
export default function BlogPostDetails() {
  const post = useRouteLoaderData('blog-detail');

  return (
    <section
      key={post._id}
      className="md:py-10 bg-themeDirtyWhite flex flex-col "
    >
      <div
        className="container px-4 mx-auto"
      >
        <div className="grid grid-cols-12">
          <div className="col-span-12 flex flex-col items-center">
            <div
              className="my-6 md:my-12 w-full flex flex-col  justify-center items-center"
            >
              <img
                src={post.image}
                alt={post.title}
                className="max-h-[500px] object-cover"
              />
              <p
                className="opacity-75 py-6"
              >
                <i className="fas fa-calendar-alt ml-4 mr-2">
                  {' '}
                  Published:{post.createdAt?.split('T')[0]}
                </i>
                <i className="fas fa-calendar-alt ml-4 mr-2">
                  {' '}
                  Updated:{post?.updatedAt?.split('T')[0]}
                </i>
              </p>
            </div>

            <div
              className="container flex justify-end sm:w[600px] lg:max-w-[700px]"
            >
              <UserActions
                likes={post.likes}
                comments={post.comments}
                countOfVisitors={post?.countOfVisitors}
                id={post._id}
                userId={post.userId._id}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 justify-center">
          <div className="col-span-12 md:col-span-10 md:col-start-2">
            <div className="md:px-20">
              {/* avatar */}
              <div
                className="flex items-center mb-6"
              >
                <div className="mr-2">
                  <img
                    src="./assets/useravatar.svg"
                    alt=""
                    className="max-w-full h-auto rounded-full border"
                    width="47"
                  />
                </div>
                <div>
                  <p>
                    by{' '}
                    <b>{`${post?.userId?.firstName} ${post?.userId?.lastName}`}</b>
                  </p>
                </div>
              </div>

              {/* <!-- headline --> */}
              <h3 className="text-2xl md:text-3xl leading-snug font-medium mb-6">
                {post.title}
              </h3>
              <p className="text-lg leading-relaxed opacity-75 mb-10">
                {post.content}
              </p>

              <ShareActions
                title={post.title}
                image={post.image}
                content={post.content}
                id={post._id}
                comingFromDetailPage
              />
            </div>
          </div>
        </div>
      </div>
      <CommentsBlockHeader />
    </section>
  );
}
