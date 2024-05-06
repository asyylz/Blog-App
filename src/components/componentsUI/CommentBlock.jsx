import { useState } from 'react';
import { Form } from 'react-router-dom';

export default function CommentBlock({ comments }) {
  const [openComment, setOpenComment] = useState(false);

  return (
    <section
      //style={{ border: '1px slid red' }}
      className="py-14 md:py-24 bg-themeDirtyWhite relative overflow-hidden z-10"
    >
      <div
        //style={{ border: '1px solid blue' }}
        className="flex justify-center max-w-4xl mx-auto"
      >
        <div
          //style={{border:'2px solid red'}}
          className="bg-themeDirtyWhite  w-screen rounded p-4 lg:p-8"
        >
          <div
            //style={{ border: '2px solid red' }}
            className=""
          >
            {/* commentform */}
            <div
              //style={{ border: '1px solid  red' }}
              className="col-span-12 mb-3 mt-2"
            >
              {openComment ? (
                <Form
                  onSubmit={() => setOpenComment(false)}
                  method="POST"
                  className="flex flex-col items-end"
                >
                  <textarea
                    id="comment"
                    name="comment"
                    rows="8"
                    className="block p-2.5 mb-4 text-lg w-full text-themeBrown bg-themeDirtyWhite rounded-lg border border-gray-300 focus:outline-none focus:ring-0.5 focus:ring-themeGreenDark focus:border-themeGreenDark"
                    placeholder="Your comments..."
                    required
                  ></textarea>
                  <div 
                  //style={{border:'1px solid red'}}
                  className="w-full flex justify-center items-center">
                    <button
                      type="submit"
                      className="text-themeCream bg-themeGreenDark  w-[100px] sm:w-[200px] hover:bg-themeGreen rounded my-2 py-2 px-3 mx-2 md:px-6"
                    >
                      Save
                    </button>
                    <button
                      type="submit"
                      className="text-themeCream bg-themeGreenDark w-[100px] sm:w-[200px] hover:bg-themeGreen rounded my-2 py-2 px-3 mx-2  md:px-6"
                      onClick={() => setOpenComment(!openComment)}
                    >
                      Cancel
                    </button>

                    {/* this two fields are used for action identifier */}
                    <input type="hidden" name="actionType" value="comment" />
                  </div>
                </Form>
              ) : (
                <button
                  onClick={() => setOpenComment(!openComment)}
                  className="text-themeCream bg-themeGreenDark w-[200px] hover:bg-themeGreen rounded py-2 px-5 md:px-6"
                >
                  New Comment
                </button>
              )}
            </div>
            <hr className=" my-4" />
            <div
              //style={{ border: '1px solid red' }}
              className="p-3 pt-0 md:p-6 md:pt-0"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-medium">Reader Comments</h2>
              </div>
              <hr className="my-5" />
              {/* <!-- comment item --> */}

              {comments.map((comment, index) => (
                <div
                  key={index}
                  className={`flex flex-col min-w-full ${
                    (index + 1) % 2 === 1 ? 'items-start' : 'items-end'
                  } `}
                  //style={{ border: '1px solid blue' }}
                >
                  <div
                    //style={{ border: '1px solid red' }}
                    className="w-full rounded-2xl border border-themeBrown p-5 my-3 max-w-lg"
                  >
                    <div
                      //style={{ border: '1px solid red' }}
                      className="flex items-center mb-6"
                    >
                      <div className="w-12 h-12 rounded-full mr-2 overflow-hidden">
                        <img
                          src="./assets/useravatar.svg"
                          alt=""
                          className="max-w-full h-auto mx-auto"
                        />
                      </div>
                      <div className="flex flex-grow justify-between">
                        <div>
                          <h5 className="font-medium mb-1">
                            {comment.userId.username}
                          </h5>
                        </div>
                        <p className="text-sm opacity-50 mb-0">
                          {comment.createdAt.split('T')[0]}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm sm:text-[18px] leading-normal opacity-75 mb-6">
                      {comment.comment}
                    </p>
                  </div>
                </div>
              ))}
              <hr className="my-5" />
            </div>
            <div className="py-6 lg:py-12 text-center">
              <button className="text-themeCream bg-themeGreenDark hover:text-themeCream hover:bg-themeGreen rounded py-2 px-5 md:px-6">
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
