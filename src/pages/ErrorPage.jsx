import PageContent from '../components/componentsUI/PageContent';
import { useRouteError } from 'react-router-dom';
import Navbar from '../components/componentsUI/Navbar';
export default function ErrorPage() {
  const error = useRouteError();
  console.log(error.status);
  console.log(error.data);

  let title = 'An error occured!';
  let message = 'Something went wrong !';

  if (error.status === 500) {
    message = error.data.message; // since we use json function here we dont need to parse
  }
  if (error.status === 401) {
    title = 'Unauthorized!';
    message = error.data.message;
  }
  return (
    <>
      <Navbar />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}
