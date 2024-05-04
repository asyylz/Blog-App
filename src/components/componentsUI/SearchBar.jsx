import { useState } from 'react';

const categories = [
  {
    id: '663515c3c78ea0a82b9220cb',
    name: 'World',
  },
  {
    id: '663515c3c78ea0a82b9220dd',
    name: 'Technology',
  },
  {
    id: '663515c3c78ea0a82b9220ee',
    name: 'Design',
  },
  {
    id: '663515c3c78ea0a82b9220ff',
    name: 'Culture',
  },
  {
    id: '663515c3c78ea0a82b922110',
    name: 'Business',
  },
  {
    id: '663515c3c78ea0a82b922121',
    name: 'Politics',
  },
  {
    id: '663515c4c78ea0a82b922132',
    name: 'Science',
  },
  {
    id: '663515c4c78ea0a82b922143',
    name: 'Health',
  },
  {
    id: '663515c4c78ea0a82b922154',
    name: 'Style',
  },
  {
    id: '663515c4c78ea0a82b922165',
    name: 'Travel',
  },
];

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  console.log(isOpen);

  return (
    <form
      //style={{ border: '2px solid red' }}
      className="max-w-3xl mx-auto py-5"
    >
      <div className="flex">
        <div>
          <button
            id="dropdown-button"
            onClick={toggleDropdown}
            //data-dropdown-toggle="dropdown"
            className="flex-shrink-0 z-10 inline-flex items-center  py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 "
            type="button"
          >
            All categories
            <img
              src="./searchbar/arrowdown.svg"
              alt=""
              className="h-4 w-4 ms-2"
            />
          </button>
          <div
            style={{ border: '3px solid red' }}
            id="dropdown"
            className={`bg-white divide-y divide-gray-100 rounded-lg shadow w-44 z-10 ${
              isOpen ? '' : 'hidden'
            }`}
          >
            <ul
              className="py-2 text-sm text-gray-700"
              //aria-labelledby="dropdown-button"
            >
              {categories.map((category, index) => (
                <li key={index}>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 "
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ml-1 focus:ring-2 focus:ring-themeGreenDark focus:border-themeGreenDark focus:outline-none"
            placeholder=" To best choice...."
            required
          />

          <button
            type="submit"
            className="absolute top-0 right-[-5px] p-2.5 text-sm font-medium h-full w-[80px] text-white bg-themeGreenDark rounded-e-lg border border-themeGreenDark hover:bg-themeGreen hover:right-[-5px] focus:ring-2 focus:outline-none focus:ring-themeGreenDark"
          >
            <img
              src="./searchbar/magnifier.svg"
              alt="Search"
              className="h-6 w-6 mx-auto"
            />
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
}
