import LoginForm from '../components/componentsAuth/LoginForm';
import RegisterForm from '../components/componentsAuth/RegisterForm';
import { useLocation } from 'react-router-dom';
import { redirect } from 'react-router-dom';

export default function AuthPage() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const isAuthPage =
    location.pathname === '/auth' && query.get('mode') === 'register';

  //const navigation = useNavigation();
  //const [searchParams] = useSearchParams();
  //const isLogin = searchParams.get('mode') === 'login';

  const isSubmitting = navigation.state === 'submitting';
  console.log(isSubmitting);

  return <>{isAuthPage ? <RegisterForm /> : <LoginForm />}</>;
}

export async function action({ request, _ }) {
  const path = window.location.href.split('=')[1];

  if (path === 'login') {
    const data = await request.formData();
    const eventData = {
      email: data.get('email'),
      password: data.get('password'),
    };
    console.log(eventData);
  }

  if (path === 'register') {
    const data = await request.formData();
    const eventData = {
      username: data.get('username'),
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      image: data.get('image'),
      city: data.get('city'),
      bio: data.get('bio'),
      password: data.get('password'),
      password2: data.get('password2'),
    };
    console.log(eventData);
  }

  return redirect('/');
}
