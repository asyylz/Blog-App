import { Form } from 'react-router-dom';
import CategoryDropDown from './CategoryDropDown';
import { useRouteLoaderData } from 'react-router-dom';
export default function SearchBar() {
  const { categories } = useRouteLoaderData('root');
 
  return (
    <Form
      method="post"
      action="/"
      className="relative w-[250px] sm:min-w-[500px] md:min-w-[700px]  mx-auto py-5"
      style={{ position: 'relative' }}
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
          <button
            //type="submit"
            className="absolute top-0 right-[-5px] p-2.5 text-sm font-medium h-[50px] w-[40px] sm:w-[80px] text-themeBrown bg-themeGreenDark rounded-e-lg border border-themeGreenDark hover:bg-themeGreen focus:ring-2 focus:outline-none focus:ring-themeGreenDark"
          >
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
  );
}
