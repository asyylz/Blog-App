import PageContent from '../components/componentsUI/PageContent';
import NewsletterSignup from '../components/componentsUI/NewsletterSignUp';
import { useActionData } from 'react-router-dom';

export default function NewsletterPage() {

  return (
    <PageContent title="Join our awesome newsletter!">
      <NewsletterSignup />
    </PageContent>
  );
}

export async function action({ request }) {
  const data = await request.formData();
  const email = data.get('email');

  // send to backend newsletter server ...
  console.log(email);
  return { message: 'Signup successful!' };
}
