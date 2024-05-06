import PageContent from '../components/componentsUI/PageContent';
import { useRouteError } from 'react-router-dom';
import Navbar from '../components/componentsUI/Navbar';
export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  console.log(error.status);
  console.log(error.data);

  let title = 'An error occured!';
  let subTitle = 'unkown error';
  let message = 'Something went wrong !';

  if (error.status === 500) {
    //message = error.data.message; // since we use json function here we dont need to parse
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
      <Navbar />
      <PageContent title={title}>
        <p>{error.status}</p>
        <p>{subTitle}</p>
        <p>{message}</p>
      </PageContent>
    </>
  );
}
