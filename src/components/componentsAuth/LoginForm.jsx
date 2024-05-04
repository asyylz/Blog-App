//import { Form } from 'react-router-dom';
import { redirect } from 'react-router-dom';
import { Link, Form } from 'react-router-dom';

const registerationFields = [
  { label: 'Email', identifier: 'email', type: 'email' },
  { label: 'Password', identifier: 'password', type: 'password' },
];

export default function LoginForm({}) {
  return (
    <section
      style={{
        backgroundImage: 'url("/public/assets/background.jpg")',
        //border: '1px solid red',
      }}
      className="bg-center"
    >
      <div
        //style={{ border: '1px solid red' }}
        className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
      >
        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create and account
            </h1>
            <Form method="POST" className="space-y-4 md:space-y-6">
              {registerationFields.map((field, index) => (
                <div key={index}>
                  <label
                    htmlFor={field.identifier}
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    //value={event.target.value}
                    name={field.identifier}
                    id={field.identifier}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:outline-none focus:ring-1 focus:ring-themeGreenDark focus:border-themeGreenDark block w-full p-2.5"
                    placeholder={field.label}
                    required
                  />
                </div>
              ))}
              <button
                //type="submit"
                className="w-full text-white bg-themeGreenDark hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Login
              </button>
              <p className="text-sm font-light text-gray-500 ">
                Don't have an account?
                <Link
                  to="/auth?mode=register"
                  className="font-medium text-primary-600 hover:underline"
                >
                  Create an account here
                </Link>
              </p>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
