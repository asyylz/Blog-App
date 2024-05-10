import { Link } from 'react-router-dom';

function PageContent({ title, children }) {
  return (
    <div
      //style={{ border: '1px solid blue' }}
      className="container rounded-lg mx-auto h-[270px] max-w-[300px] sm:max-w-xl bg-red-300 py-10  flex flex-col items-center"
    >
      <h1 className="text-center text-xl sm:text-4xl font-ibm-flex">{title}</h1>
      <div className="text-center text-md sm:text-xl mt-5 font-ibm-flex">
        {children}
      </div>
      <Link
        to={-1}
        className="px-3 py-2 my-4 w-[100px]  sm:w-[200px] text-themeCream bg-themeGreenDark hover:bg-themeGreen hover:animate-pulse focus:ring-4 focus:outline-none focus:ring-themeGreenDark rounded-xl  text-xs md:text-sm lg:text-lg text-center"
      >
        Back
      </Link>
    </div>
  );
}

export default PageContent;
