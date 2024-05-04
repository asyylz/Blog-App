import { useSearchParams, useNavigation } from 'react-router-dom';
//import LoginForm from '../components/componentsAuth/LoginForm';
import RegisterForm from '../components/componentsAuth/RegisterForm';

export default function AuthPage() {

  //const navigation = useNavigation();
  //const [searchParams] = useSearchParams();
  //const isLogin = searchParams.get('mode') === 'login';
  //const isSubmitting = navigation.state === 'submitting';

  return <RegisterForm />;
  {
    /* <>{isLogin ? <LoginForm /> : <RegisterForm />}</>; */
  }
}
