import { useEffect, useState } from 'react';
import { useFetcher } from 'react-router-dom';
import ModalCustom from './ModalCustom';
import { EmailIcon } from 'react-share';

export default function NewsletterSignup() {
  const [open, setOpen] = useState(false);
  const fetcher = useFetcher();
  const { data, state } = fetcher;
  const isSuccess = state === 'idle' && data && data?.message && true;

  useEffect(() => {
    if (isSuccess) {
      setOpen(true);
    }
  }, [isSuccess]);

  const handleCloseModal = () => {
    setOpen(false);
  };

  if (open) {
    return (
      <ModalCustom onClose={handleCloseModal}>
        <div className="container bg-themeDirtyWhite h-[250px] w-full flex items-center px-5 flex-col justify-center rounded-lg">
          <h2 className="w-full p-4 font-ibm-flex text-[30px] text-center text-themeDirtyWhite italic font-thin bg-themeGreenDark rounded-lg border-2 ">
            {data?.email}
            <br />
            {data?.message}
          </h2>
        </div>
      </ModalCustom>
    );
  }

  return (
    <section className="bg-transparent m-8">
      <h5 className="mb-4 font-ibm-flex italic thin text-xl text-themeBrown sm:text-2xl">
        Sign up for our newsletter
      </h5>

      <fetcher.Form method="post" action="newsletter">
        <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
          <div className="relative w-full">
            <label
              htmlFor="email"
              className="hidden mb-2 text-sm font-medium text-themeBrown"
            >
              Email address
            </label>
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
           <EmailIcon size={32} round  bgStyle={{ fill: 'none' }} iconFillColor='#838280'/>
            </div>
            <input
              className="block p-3 pl-10 w-full text-sm text-themeBrown bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:outline-none focus:ring-2 focus:ring-themeGreenDark  "
              placeholder="Enter your email"
              type="email"
              name="email"
              id="email"
              required=""
            />
          </div>
          <div>
            <button
              type="submit"
              className="py-3 px-5 w-full text-sm font-medium text-center text-themeCream rounded-lg  cursor-pointer bg-themeGreenDark  sm:rounded-none sm:rounded-r-lg hover:bg-themeGreen focus:ring-2 focus:ring-themeGreenDark
              animate-pulse"
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">
          We care about the protection of your data.{' '}
          <a
            href=""
            className="font-medium text-themeBrown underline hover:text-themeGreenDark"
          >
            Read our Privacy Policy
          </a>
          .
        </div>
      </fetcher.Form>
    </section>
  );
}

export async function action({ request }) {
  const data = await request.formData();
  const email = data.get('email');
  // send to backend newsletter server ...
  console.log(email);
  return { email: email, message: 'Signup successful!' };
}
