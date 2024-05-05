export default function CommentBlock() {
  return (
    <section className="py-14 md:py-24 bg-themeDirtyWhite relative overflow-hidden z-10">
      <div className="container px-4 mx-auto">
        <div className="flex justify-center max-w-4xl mx-auto">
          <div
            //style={{border:'2px solid red'}}
            className="bg-themeDirtyWhite  w-screen rounded p-4 lg:p-8"
          >
            <div>
              {/* <div
              style={{border:'2px solid red'}}
               className="p-3 md:p-6">
                <h4 className="text-2xl font-medium mb-2">
                  Reader comments
                </h4>
                <div className="flex flex-wrap items-center text-[40px]">
                  91%
                </div>
                <p className="text-sm opacity-75 mb-6 md:mb-12">
                  Recomded by 6 reviewers who responded, 5 would recommend this
                  product.
                </p>

                <div className="flex flex-wrap items-center">
                  <span className="text-[40px]">4.5</span>
                  <span className="text-yellow-500 ml-2">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </span>
                </div>
                <p className="text-sm opacity-75 mb-6">
                  Average rating based on 2345 reviews
                </p>
                <div>
                  <div className="flex justify-around items-center sm:w-1/2 mb-2">
                    <div className="mr-3">
                      <p className="text-sm font-bold mb-0">
                        <span className="opacity-50">5</span>
                        <span className="text-blue-600 ml-1">
                          <i className="fas fa-star"></i>
                        </span>
                      </p>
                    </div>
                    <div className="flex-grow mr-3">
                      <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-1.5 overflow-hidden">
                        <div className="w-full h-full bg-blue-600"></div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm opacity-50 mb-0">123</p>
                    </div>
                  </div>
                  <div className="flex justify-around items-center sm:w-1/2 mb-2">
                    <div className="mr-3">
                      <p className="text-sm font-bold mb-0">
                        <span className="opacity-50">4</span>
                        <span className="text-blue-600 ml-1">
                          <i className="fas fa-star"></i>
                        </span>
                      </p>
                    </div>
                    <div className="flex-grow mr-3">
                      <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-1.5 overflow-hidden">
                        <div className="w-11/12 h-full bg-blue-600"></div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm opacity-50 mb-0">55</p>
                    </div>
                  </div>
                  <div className="flex justify-around items-center sm:w-1/2 mb-2">
                    <div className="mr-3">
                      <p className="text-sm font-bold mb-0">
                        <span className="opacity-50">3</span>
                        <span className="text-blue-600 ml-1">
                          <i className="fas fa-star"></i>
                        </span>
                      </p>
                    </div>
                    <div className="flex-grow mr-3">
                      <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-1.5 overflow-hidden">
                        <div className="w-8/12 h-full bg-blue-600"></div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm opacity-50 mb-0">12</p>
                    </div>
                  </div>
                  <div className="flex justify-around items-center sm:w-1/2 mb-2">
                    <div className="mr-3">
                      <p className="text-sm font-bold mb-0">
                        <span className="opacity-50">2</span>
                        <span className="text-blue-600 ml-1">
                          <i className="fas fa-star"></i>
                        </span>
                      </p>
                    </div>
                    <div className="flex-grow mr-3">
                      <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-1.5 overflow-hidden">
                        <div className="w-5/12 h-full bg-blue-600"></div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm opacity-50 mb-0">04</p>
                    </div>
                  </div>
                  <div className="flex justify-around items-center sm:w-1/2 mb-2">
                    <div className="mr-3">
                      <p className="text-sm font-bold mb-0">
                        <span className="opacity-50">2</span>
                        <span className="text-blue-600 ml-1">
                          <i className="fas fa-star"></i>
                        </span>
                      </p>
                    </div>
                    <div className="flex-grow mr-3">
                      <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-1.5 overflow-hidden">
                        <div className="w-2/12 h-full bg-blue-600"></div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm opacity-50 mb-0">03</p>
                    </div>
                  </div>
                </div>
              </div> */}
              <hr className="dark:border-slate-700 my-4" />
              <div className="p-3 pt-0 md:p-6 md:pt-0">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-medium">Reader Comments</h2>
                  <div>
                    <button className="text-themeCream bg-themeGreenDark hover:text-themeCream hover:bg-themeGreen rounded py-2 px-5 md:px-6">
                      New Comment
                    </button>
                  </div>
                </div>
                <hr className="dark:border-slate-700 my-5" />
                {/* <!-- item --> */}
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full mr-2 overflow-hidden">
                      <img
                        src="https://cdn.easyfrontend.com/pictures/users/user18.jpg"
                        alt=""
                        className="max-w-full h-auto mx-auto"
                      />
                    </div>
                    <div className="flex flex-grow justify-between">
                      <div>
                        <h5 className="font-medium mb-1">Freya Kemp</h5>
                        <p className="text-sm">
                          <span className="text-yellow-500">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </span>
                          <span className="mx-1">5.0</span>
                        </p>
                      </div>
                      <p className="text-sm opacity-50 mb-0">july 11,2020</p>
                    </div>
                  </div>
                  <p className="text-sm leading-normal opacity-75 mb-6">
                    WA wonderful serenity has taken possession of my entire
                    soul, like these sweet mornings of spring which I enjoy with
                    my whole heart. I am alone, and feel the charm of existence
                    in this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite sense of mere tranquil existence, that I neglect
                    my talents. I should be incapable of drawing a single stroke
                    at the present moment.
                  </p>
                  <div className="flex justify-end">
                    <button className="hover:text-blue-600 hover:bg-gray-200 dark:hover:bg-slate-700 rounded inline-flex justify-center items-center duration-300 px-3 py-2 mr-6">
                      <i className="far fa-thumbs-up fs-6 mr-2"></i> Like (20)
                    </button>
                    <button className="hover:text-blue-600 hover:bg-gray-200 dark:hover:bg-slate-700 rounded inline-flex justify-center items-center duration-300 px-3 py-2">
                      <i className="far fa-thumbs-down fs-6 mr-2"></i> Dislike
                      (6)
                    </button>
                  </div>
                </div>
                <hr className="dark:border-slate-700 my-5" />
              </div>
              <div className="py-6 lg:py-12 text-center">
                <button className="bg-blue-600 text-white text-sm hover:bg-opacity-90 rounded py-2.5 px-6 md:px-10">
                  Load More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
