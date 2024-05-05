import CategoryDropDown from './CategoryDropDown';
export default function SearchBar() {
  return (
    <form
      className="relative max-w-3xl mx-auto py-5"
      style={{ position: 'relative' }}
    >
      <div className="flex">
        <CategoryDropDown round="left"  title='All Categories'/>
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 h-[50px] text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ml-1 focus:ring-2 focus:ring-themeGreenDark focus:border-themeGreenDark focus:outline-none"
            placeholder="To best choice..."
            required
          />
          <button
            type="submit"
            className="absolute top-0 right-[-5px] p-2.5 text-sm font-medium h-[50px] w-[80px] text-themeBrown bg-themeGreenDark rounded-e-lg border border-themeGreenDark hover:bg-themeGreen focus:ring-2 focus:outline-none focus:ring-themeGreenDark"
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
