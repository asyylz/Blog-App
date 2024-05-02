export default function PostDesignCardA() {
  return (
    <div
      //style={{ border: '6px solid purple' }}
      className="col-span-2 min-h-[400px] "
    >
      <div className="container flex md:flex-col py-3 px-3 gap-3">
        <div
          //style={{ border: '3px solid purple' }}
          className="container flex flex-col space-even gap-7"
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1714115034964-16b20994142a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-64 md:max-w-md xl:min-w-[400px] md:mx-4 lg:mx-auto"
            //style={{ border: '1px solid purple' }}
          />
          <div
            //style={{ border: '1px solid red' }}
            className="container flex justify-between mx-auto md:gap-2 xl:gap-10"
          >
            <button className="px-3 py-2 text-themeDirtyWhite bg-themeGreenDark hover:bg-themeGreen hover:animate-bounce delay-150 duration-300 rounded-xl flex items-center gap-2 flex-none text-xs md:text-sm lg:text-lg">
              <img
                src="./card/arrowRight.svg"
                alt="login"
                className="h-5 w-5"
              />
              <span>Read more</span>
            </button>
            <div
              //style={{ border: '1px solid purple' }}
              className="container flex-auto flex justify-evenly items-center max-w-[200px] "
            >
              <div>
                <p className="text-themeBrown text-center">
                  <small>30</small>
                </p>
                <img
                  src="./card/heart.svg"
                  alt="heart"
                  className="h-6 w-6 cursor-pointer"
                />
              </div>
              <div>
                <p className="text-themeBrown text-center">
                  <small>20</small>
                </p>
                <img
                  src="./card/comments.svg"
                  alt="comments"
                  className="h-6 w-6 cursor-pointer"
                />
              </div>
              <div>
                <p className="text-themeBrown text-center">
                  <small>45</small>
                </p>
                <img
                  src="./card/views.svg"
                  alt="views"
                  className="h-6 w-6 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          //style={{ border: '3px solid red' }}
          className="container"
        >
          <p
            //style={{ border: '1px solid purple' }}
            className="mb-2 font-bold tracking-tight text-themeGray dark:text-white"
          >
            Overhead of Panna Cotta with honey and walnuts, and a platter of
            walnuts
          </p>
          <p className="text-themeBrown">
            <small>Published:24/20/22</small>
          </p>
          <p className="mb-3 font-ibm-flex text-gray-700 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            quaerat consequatur, rem sapiente dicta totam, reiciendis at sint,
            debitis in qui placeat soluta eum nemo consequuntur architecto quae
            atque eius! Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Eaque ducimus velit cum, facilis ipsam possimus saepe.
          </p>

          <img
            //style={{ border: '1px solid purple' }}
            src="./card/share.svg"
            alt="views"
            className="h-6 w-6 w-[25px] h-[25px] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
