import CommentBlock from './CommentBlock';

export default function BlogPostDetails({
  _id,
  comments,
  countOfVisitors,
  createdAt,
  image,
  likes,
  title,
  updatedAt,
  userId,
  categoryId,
  content,
}) {

  return (
    <section 
    key={_id}
    style={{ border: '1px solid blue' }}
    className="md:py-10 bg-themeDirtyWhite flex flex-col ">
      <div
        style={{ border: '1px solid blue' }}
       className="container px-4 mx-auto">
        <div 
        className="grid grid-cols-12">
          {/* <div className="col-span-12 md:col-span-7">
            <h2 className="text-2xl leading-none font-bold md:text-6xl md:leading-none mb-6">
              Blog Details
            </h2>
            <p className="text-lg opacity-80 mb-2">
              Teaching is a noble profession. Think about the most respected
              persons in our society. Yes, they are the teachers. If you ask
              someone about some of his favourite persons, it is most likely to
              find a teacher of him in his answer. So, being a teacher is an
              amazing thing.
            </p>
          </div> */}

          <div 
       
          className="col-span-12">
            <div
             
              className="my-6 md:my-12 w-full flex  justify-center"
            >
              <img
                src={image}
                alt={title}
                className="w-[700px] max-h-[500px] object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 justify-center">
          <div className="col-span-12 md:col-span-10 md:col-start-2">
            <div className="md:px-20">
              {/* avatar */}
              <div className="flex items-center mb-6">
                <div className="mr-2">
                  <img
                    src="https://images.unsplash.com/photo-1554151228-14d9def656e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D"
                    alt=""
                    className="max-w-full h-auto rounded-full border"
                    width="47"
                  />
                </div>
                <div>
                  <p>
                    By <b>{`${userId.firstName} ${userId.lastName}`}</b>
                  </p>
                </div>
                <p className="opacity-75">
                  <i className="fas fa-calendar-alt ml-4 mr-2"></i>
                  {createdAt?.split('T')[0]}
                </p>
              </div>

              {/* <!-- headline --> */}
              <h3 className="text-2xl md:text-3xl leading-snug font-medium mb-6">
                {title}
              </h3>
              <p className="text-lg leading-relaxed opacity-75">{content}</p>
            </div>
          </div>
        </div>
      </div>
      <CommentBlock />
    </section>
  )
}
