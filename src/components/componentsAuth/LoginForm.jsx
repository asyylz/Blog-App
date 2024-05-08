import { useNavigate } from 'react-router-dom';
import { useActionData } from 'react-router-dom';
import { Link, Form } from 'react-router-dom';
import { useState } from 'react';
import ModalCustom from '../componentsUI/ModalCustom';
const registerationFields = [
  { label: 'Email', identifier: 'email', type: 'email' },
  { label: 'Password', identifier: 'password', type: 'password' },
];

export default function LoginForm({ isSubmitting }) {
  const authActionData = useActionData();
 
  const navigate = useNavigate();
  const isSuccess = authActionData?.error === false ? true : false;

  if(isSuccess){
    setTimeout(() => {
      navigate('/');
    }, 600);
  }

  return (
    <>
      {isSuccess && (
        <ModalCustom open={isSuccess}>
          <div
            //style={{ border: '1px solid red' }}
            className="p-4 md:p-5 text-center w-full"
          >
            <h3 className="mb-5 text-lg font-normal text-gray-500 ">
              Successfully logged in!
            </h3>
            {/* <button
              //onClick={handleClose}
              className="w-[100px] py-2.5 px-5 ms-3 text-sm font-medium text-themeCream focus:outline-none bg-themeGreenDark rounded-lg border-2 border-themeGreenDark hover:bg-themeGreen focus:z-10 focus:ring-1 focus:ring-themeGreenDark "
            >
              Ok
            </button> */}
          </div>
        </ModalCustom>
      )}

      <section
        style={{ backgroundImage: "url('/assets/background.jpg')" }}
        className="bg-palePattern bg-center h-screen"
      >
        <div
          //style={{ border: '1px solid red' }}
          className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
        >
          <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
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
                      name={field.identifier}
                      id={field.identifier}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:outline-none focus:ring-1 focus:ring-themeGreenDark focus:border-themeGreenDark block w-full p-2.5"
                      placeholder={field.label}
                      required
                    />
                  </div>
                ))}
                <button className="w-full text-themeCream text-sm md:text-xl bg-themeGreenDark hover:bg-themeGreen focus:ring-4 focus:outline-none focus:ring-themeGreenDark font-medium rounded-lg  px-5 py-2.5 text-center">
                  {isSubmitting ? 'Submitting...' : 'Login'}
                </button>
                <p className="text-sm font-light text-gray-500 ">
                  Don't have an account?
                  <Link
                    to="/auth?mode=register"
                    className="font-medium text-themeBrown underline mx-1 hover:text-themeGreenDark hover:text-[16px]"
                  >
                    Create an account here
                  </Link>
                </p>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
