export default function NewBlogForm() {
  return (
    <section
      className="ezy__contact13_2qxTOrQ0 bg-center bg-cover bg-no-repeat py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white"
      style="
    background-image: url(https://cdn.easyfrontend.com/pictures/contact/contact13.jpg);
  "
    >
      <div className="container px-4 mx-auto">
        <div className="w-full flex justify-center items-center">
          <div className="w-full md:w-[80vw] lg:w-[55vw] xl:w-[45vw] bg-white bg-opacity-70 shadow-xl py-28 px-16 backdrop-filter backdrop-blur-md dark:bg-gray-900 dark:bg-opacity-40 text-gray-900 dark:text-white">
            <div className="text-center pb-8">
              <h3 className="text-3xl sm:text-5xl font-bold leading-none">
                Contact Us
              </h3>
              <p className="text-base sm:text-lg opacity-80 py-4">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            {/* <!-- ContactForm component --> */}
            <form action="" className="grid grid-cols-12 gap-4 lg:gap-8">
              <div className="col-span-12 md:col-span-6 mb-3 mt-2">
                <input
                  className="text-gray-900 dark:text-white max-h-14 w-full bg-transparent border-b-2 border-gray-400 dark:border-white placeholder:text-gray-900 dark:placeholder:text-gray-300 opacity-90 transition ease-in-out duration-700 focus:border-b-blue-700 dark:focus:border-b-blue-700 focus:outline-none py-4"
                  type="text"
                  name="name"
                  placeholder="FULL NAME"
                />
              </div>
              <div className="col-span-12 md:col-span-6 mb-3 mt-2">
                <input
                  className="text-gray-900 dark:text-white max-h-14 w-full bg-transparent border-b-2 border-gray-400 dark:border-white placeholder:text-gray-900 dark:placeholder:text-gray-300 opacity-90 transition ease-in-out duration-700 focus:border-b-blue-700 dark:focus:border-b-blue-700 focus:outline-none py-4"
                  type="text"
                  name="email"
                  placeholder="EMAIL"
                />
              </div>
              <div className="col-span-12 md:col-span-12 mb-3">
                <textarea
                  className="text-gray-900 dark:text-white w-full bg-transparent border-b-2 border-gray-400 dark:border-white placeholder:text-gray-900 dark:placeholder:text-gray-300 opacity-90 transition ease-in-out duration-700 focus:border-b-blue-700 dark:focus:border-b-blue-700 focus:outline-none py-4"
                  name="message"
                  placeholder="MESSAGE"
                  rows="5"
                ></textarea>
              </div>

              <div className="col-span-12">
                <div className="text-center mt-4">
                  <button className="bg-blue-600 text-white text-base py-3 px-10 min-w-[44px]">
                    SEND MESSAGE
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
