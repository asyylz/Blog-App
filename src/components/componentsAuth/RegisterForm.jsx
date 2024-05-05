import { Link, Form } from 'react-router-dom';

const registerationFields = [
  { label: 'Username', identifier: 'username', type: 'text' },
  { label: 'First Name', identifier: 'firstName', type: 'text' },
  { label: 'Last Name', identifier: 'lastName', type: 'text' },
  { label: 'Email', identifier: 'email', type: 'email' },
  { label: 'Avatar', identifier: 'image', type: 'text' },
  { label: 'City', identifier: 'city', type: 'text' },
  { label: 'Bio', identifier: 'bio', type: 'text' },
  { label: 'Password', identifier: 'password', type: 'password' },
  { label: 'Confirm Password', identifier: 'password2', type: 'password' },
];

export default function RegisterForm({isSubmitting}) {
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
            <h1 className="text-xl font-bold leading-tight tracking-tight text-themeBrown md:text-2xl ">
            {isSubmitting ? 'Submitting...' : 'Create an account'}
            </h1>
            <Form method="POST" className="space-y-4 md:space-y-6" action="#">
              {registerationFields.map((field, index) => (
                <div key={index}>
                  <label
                    htmlFor={field.identifier}
                    className="block mb-2 text-sm font-medium text-themeBrown "
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.identifier}
                    //value={(event) => event.target.value}
                    id={field.identifier}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:outline-none focus:ring-1 focus:ring-themeGreenDark focus:border-themeGreenDark block w-full p-2.5"
                    placeholder={field.label}
                    required
                  />
                </div>
              ))}
              <button
                type="submit"
                className="w-full text-themeCream bg-themeGreenDark hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500 ">
                Already have an account?{' '}
                <Link
                  to="/auth?mode=login"
                  className="font-medium text-themeBrown hover:text-themeGreenDark hover:text-[16px] underline"
                >
                  Login here
                </Link>
              </p>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
