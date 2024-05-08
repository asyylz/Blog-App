import { Form, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
const menuList = [
  { label: 'Home', path: '/' },
  { label: 'Search', path: '/' },
  { label: 'Create Your Own', path: '/new' },
];
export default function Navbar() {
  const { user } = useAuth();

  return (
    <nav
      //style={{ border: '2px solid red' }}
      className="bg-themeGreen text-themeCream px-6 py-3 md:px-auto font-ibm-flex font-medium italic md:text-xl"
    >
      <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
        {/* <!-- Logo --> */}
        <div className="flex">
          <div className="text-textColor mr-10 flex items-center sm:text-3xl ">
            {/* <!-- Heroicon - Chip OutlineTODO --> */}
            LOGO
          </div>
          <div
            //style={{ border: '1px solid red' }}
            className="w-full md:w-auto flex flex-col sm:flex-row"
          >
            <ul className="flex font-semibold justify-between flex-col sm:flex-row">
              {menuList.map((item, index) => (
                <li
                  key={index}
                  className=" py-1 sm:px-2 text-textColor hover:text-themeBrown"
                >
                  <a href={item.path}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          //style={{ border: '1px solid red' }}
          className="flex flex-col sm:flex-row items-center "
        >
          {user && (
            <div
              //style={{border:'1px solid red'}}
              className="container flex mb-4 sm:mb-0"
            >
              <span>Hi {user.userName}</span>
              <img className="h-8 ml-3 " src="./navbar/user.svg" alt="user" />
            </div>
          )}
            <Form
              action="/logout"
              //style={{ border: '1px solid red' }}
              method="POST"
              className={`p-3 pr-7 bg-themeGreenDark hover:bg-themeCream hover:text-themeBrown rounded-xl flex items-center gap-2 ${
                !user && 'animate-pulse'
              } cursor-pointer`}
            >
              <img src="./navbar/login.svg" alt="login" className="h-5 w-5" />
              {user ? (
                <button>Logout</button>
              ) : (
                <Link to="auth?mode=login">Login</Link>
              )}
            </Form>
        </div>
      </div>
    </nav>
  );
}
