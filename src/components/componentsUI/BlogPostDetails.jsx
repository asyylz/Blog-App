import { Link } from 'react-router-dom';
import CommentsBlockHeader from './CommentsBlockHeader';
import UserActions from '../componentsUI/UserActions';
import { useRouteLoaderData } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
export default function BlogPostDetails() {
  const post = useRouteLoaderData('blog-detail');
  const { user } = useAuth();
console.log(post)
  return (
    <section
      key={post._id}
      //style={{ border: '1px solid blue' }}
      className="md:py-10 bg-themeDirtyWhite flex flex-col "
    >
      <div
        //style={{ border: '1px solid blue' }}
        className="container px-4 mx-auto"
      >
        <div className="grid grid-cols-12">
          <Link
            to={-1}
            className="px-3 py-2 my-4 w-[100px]  sm:w-[200px] text-themeCream bg-themeGreenDark hover:bg-themeGreen hover:animate-bounce delay-150 duration-300 focus:ring-4 focus:outline-none focus:ring-themeGreenDark rounded-xl  text-xs md:text-sm lg:text-lg text-center"
          >
            Back
          </Link>
          <div className="col-span-12 flex flex-col items-center">
            <div
              //style={{ border: '2px solid red' }}
              className="my-6 md:my-12 w-full flex flex-col  justify-center items-center"
            >
              <img
                src={post.image}
                alt={post.title}
                className="max-h-[500px] object-cover"
              />
              <p
                //style={{ border: '1px solid red' }}
                className="opacity-75 py-6"
              >
                <i className="fas fa-calendar-alt ml-4 mr-2">
                  {' '}
                  Published:{post.createdAt?.split('T')[0]}
                </i>
                <i className="fas fa-calendar-alt ml-4 mr-2">
                  {' '}
                  Updated:{post.updatedAt?.split('T')[0]}
                </i>
              </p>
            </div>

            <div
              //style={{ border: '1px solid red' }}
              className="container flex justify-end sm:w[600px] lg:max-w-[700px]"
            >
              <UserActions
                likes={post.likes}
                comments={post.comments}
                countOfVisitors={post.countOfVisitors}
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
                //style={{border:'1px solid red'}}
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
                    <b>{`${post.userId?.firstName} ${post.userId?.lastName}`}</b>
                  </p>
                </div>
              </div>

              {/* <!-- headline --> */}
              <h3 className="text-2xl md:text-3xl leading-snug font-medium mb-6">
                {post.title}
              </h3>
              <p className="text-lg leading-relaxed opacity-75">
                {post.content}
              </p>
            </div>
          </div>
        </div>
      </div>
      <CommentsBlockHeader />
    </section>
  );
}
