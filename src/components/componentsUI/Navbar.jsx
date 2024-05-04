import { Link } from 'react-router-dom';

const menuList = ['Dashboard', 'Search', 'Explore', 'About', 'Contact'];
export default function Navbar() {
  return (
    <nav className="bg-themeGreen text-themeCream px-6 py-3 md:px-auto font-ibm-flex font-medium italic md:text-xl">
      <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
        {/* <!-- Logo --> */}
        <div className="flex">
          <div className="text-textColor mr-10 flex items-center md:text-3xl ">
            {/* <!-- Heroicon - Chip OutlineTODO --> */}
            LOGO
          </div>
          <div className="order-3 w-full md:w-auto md:order-2 flex flex-col md:flex-row">
            <ul className="flex font-semibold justify-between flex-col md:flex-row">
              {menuList.map((item, index) => (
                <li
                  key={index}
                  className="md:px-2 md:py-2 text-textColor hover:text-themeBrown"
                >
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="order-2 md:order-3">
          <Link
            to="/auth?mode=register"
            className="px-4 py-2 bg-themeGreenDark hover:bg-themeCream hover:text-themeBrown rounded-xl flex items-center gap-2 animate-pulse cursor-pointer"
          >
            <img src="./navbar/login.svg" alt="login" className="h-5 w-5" />
            <span>Login</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
