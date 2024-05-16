import PageContent from '../components/componentsUI/PageContent';
import { useRouteError } from 'react-router-dom';
import Navbar from '../components/componentsUI/Navbar';
import ModalCustom from '../components/componentsUI/ModalCustom';
export default function ErrorPage() {
  const error = useRouteError();

  console.log(error);
  console.log(error.status);
  console.log(error.data);
  let title = 'An error occured!';
  let subTitle = '';
  let message = 'Something went wrong !';

  if (error.status === 500) {
    message = error.data.message; // since we use json function here we dont need to parse
    if (message.includes('categoryId')) {
      message = 'Please choose a category';
    }
  }

  if (error.status === 401) {
    title = error.statusText;
    subTitle = error.statusText;
    message = error.data?.message;
  }
  if (error.status === 403) {
    title = error.statusText ? error.statusText : 'Unauthorized!!';
    message = error.data.message;
  }

  if (error.status === 405) {
    title = error.statusText ? error.statusText : 'Error!';
    message = error.statusText;
  }
  if (error.status === 404) {
    title = error.statusText ? error.statusText : 'Error!';
    message = error.statusText;
  }

  return (
    <>
      <section
        style={{ backgroundImage: "url('/assets/background.jpg')" }}
        className="bg-center h-screen"
      >
        <Navbar />
        {error  && (
          <ModalCustom comingFromErrorPage>
            <PageContent title={title}>
              <p>{subTitle}</p>
              <p>{message}</p>
            </PageContent>
          </ModalCustom>
        )}
      </section>
    </>
  );
}
