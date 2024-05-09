import { Form } from 'react-router-dom';
import CategoryDropDown from './CategoryDropDown';
import { useRouteLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function SearchBar() {
  const { categories } = useRouteLoaderData('root');
  
  return (
    <div
      className="min-w-full container flex items-center justify-center"
      style={{ border: '3px solid red' }}
    >
      <Form
        method="post"
        action="/"
        className="relative w-[250px] sm:min-w-[300px] md:min-w-[500px]  py-5 mr-7"
      >
        <div className="flex">
          <CategoryDropDown
            round="left"
            title="All Categories"
            list={categories}
            name="categoryId"
          />
          <div className="relative w-full">
            <input
              name="search"
              className="block p-2.5 w-full h-[50px] text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ml-1 focus:ring-2 focus:ring-themeGreenDark focus:border-themeGreenDark focus:outline-none"
              placeholder="To best choice..."
              required
            />
            <button className="absolute top-0 right-[-5px] p-2.5 text-sm font-medium h-[50px] w-[40px] sm:w-[80px] text-themeBrown bg-themeGreenDark rounded-e-lg border border-themeGreenDark hover:bg-themeGreen focus:ring-2 focus:outline-none focus:ring-themeGreenDark">
              <img
                src="./searchbar/magnifier.svg"
                alt="Search"
                className=" h-5 w-5 sm:h-6 sm:w-6 mx-auto"
              />
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </Form>
      <Link
        to={-1}
        className='text-center px-3 py-2 w-[70px] sm:w-[100px] md:w-[130px] text-themeCream bg-themeGreenDark hover:bg-themeGreen hover:animate-pulse focus:ring-2 focus:outline-none focus:ring-themeGreenDark rounded-xl  text-xs md:text-sm lg:text-lg text-center"'
      >
        Back
      </Link>
    </div>
  );
}
