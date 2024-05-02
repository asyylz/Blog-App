import { BiUserX } from 'react-icons/bi';
import { useRouteLoaderData } from 'react-router-dom';

export default function ScreenLargeHomePageLayout() {
  const blogPosts = useRouteLoaderData('root');
  console.log(blogPosts);
  return (
    <div
      style={{ border: '3px solid red' }}
      className=" bg-themeDirtyWhite container mx-auto w-full h-screen py-6"
    >
      <div
        style={{ border: '3px solid yellow' }}
        className=" grid grid-cols-3 gap-3"
      >
        <div
          style={{ border: '1px solid purple' }}
          className="col-span-2 min-h-[400px] "
        >
          <div className="container flex py-3 px-3 gap-3">
            <div style={{ border: '1px solid purple' }} className="container flex flex-col space-even gap-4">
              <img
                src="https://plus.unsplash.com/premium_photo-1714115034964-16b20994142a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-64"
              />
              <div
                style={{ border: '1px solid red' }}
                className="container flex justify-between mx-auto gap-10"
              >
                <button className="px-3 py-2 text-themeDirtyWhite bg-themeGreenDark hover:bg-themeGreen hover:animate-bounce delay-150 duration-300 rounded-xl flex items-center gap-2 flex-none text-xs md:text-lg">
                  <img
                    src="./card/arrowRight.svg"
                    alt="login"
                    className="h-5 w-5"
                  />
                  <span>Read more</span>
                </button>
                <div
                  style={{ border: '1px solid purple' }}
                  className="container flex-auto flex justify-evenly items-center "
                >
                  <div>
                    <p className="text-themeBrown text-center">
                      <small>30</small>
                    </p>
                    <img
                      src="./card/heart.svg"
                      alt="heart"
                      className="h-5 w-5"
                    />
                  </div>
                  <div>
                    <p className="text-themeBrown text-center">
                      <small>20</small>
                    </p>
                    <img
                      src="./card/comments.svg"
                      alt="comments"
                      className="h-5 w-5"
                    />
                  </div>
                  <div>
                    <p className="text-themeBrown text-center">
                      <small>45</small>
                    </p>
                    <img
                      src="./card/views.svg"
                      alt="views"
                      className="h-5 w-5"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <p
                style={{ border: '1px solid purple' }}
                className="h-24 w-full text-center py-2 px-2 font-ibm-flex italic"
              >
                Overhead of Panna Cotta with honey and walnuts, and a platter of
                walnuts
              </p>
              <p className="text-themeBrown">
                <small>Published:24/20/22</small>
              </p>
              <p className="mb-3 font-ibm-flex text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                quaerat consequatur, rem sapiente dicta totam, reiciendis at
                sint, debitis in qui placeat soluta eum nemo consequuntur
                architecto quae atque eius! Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Eaque ducimus velit cum, facilis
                ipsam possimus saepe.
              </p>
            </div>
          </div>
        </div>
        <div style={{ border: '1px solid purple' }}>asiye</div>
        <div style={{ border: '1px solid purple' }} className="min-h-[400px]">
          asiye
        </div>
        <div style={{ border: '1px solid purple' }} className="col-span-2">
          asiye
        </div>
        <div
          style={{ border: '1px solid purple' }}
          className="col-span-2 min-h-[400px] "
        >
          asiye
        </div>
        <div style={{ border: '1px solid purple' }}>asiye</div>
      </div>
    </div>
  );
}

// <div
// style={{ border: '3px solid green' }}
// className="container max-w-sm "
// >
// asiye
// </div>
// <div
// style={{ border: '3px solid green' }}
// className="container max-w-sm "
// >
// asiye
// </div>
// <div
// style={{ border: '3px solid green' }}
// className="container max-w-sm "
// >
// asiye
// </div>
