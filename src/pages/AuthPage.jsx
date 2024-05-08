import LoginForm from '../components/componentsAuth/LoginForm';
import RegisterForm from '../components/componentsAuth/RegisterForm';
import { useLocation } from 'react-router-dom';
import { redirect } from 'react-router-dom';
import axios from 'axios';
import { useNavigation } from 'react-router-dom';
export default function AuthPage() {

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const isAuthPage =
    location.pathname === '/auth' && query.get('mode') === 'register';

  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <>
      {isAuthPage ? (
        <RegisterForm isSubmitting={isSubmitting} />
      ) : (
        <LoginForm isSubmitting={isSubmitting} />
      )}
    </>
  );
}

export async function action({ request, _ }) {
  const path = window.location.href.split('=')[1];

  if (path === 'login') {
    const data = await request.formData();
    const userData = {
      email: data.get('email'),
      password: data.get('password'),
    };

    console.log(userData);
    try {
      const response = await axios.post(
        'https://38110.fullstack.clarusway.com/auth/login/',
        userData
      );
      //console.log(response.data);

      if (response?.data.token && response?.data.user) {
        const userData = {
          token: response.data.token,
          userName: response.data.user.username,
          userId: response.data.user._id,
        };
        localStorage.setItem('user', JSON.stringify(userData));
      }
      return response.data;
      //return redirect('/');
    } catch (error) {
      if (error.response) {
        //console.log(error.response.data);
        throw error.response;
      } else if (error.request) {
        // The request was made but no response was received
        //console.error('No response received:', error.request);
        throw new Error('No response received');
      } else {
        // Something happened in setting up the request that triggered an Error
        //console.error('Error', error.message);
        throw new Error(error.message);
      }
    }
  }

  if (path === 'register') {
    const data = await request.formData();
    const userData = {
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
    console.log(userData);
    try {
      const response = await axios.post(
        'https://38110.fullstack.clarusway.com/users/',
        userData
      );
      if (response?.data.token && response?.data.user) {
        const userData = {
          token: response.data.token,
          userName: response.data.user.username,
        };

        localStorage.setItem('user', JSON.stringify(userData));
      }
      return redirect('/');
    } catch (error) {
      if (error.response) {
        throw error.response;
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received:', error.request);
        throw new Error('No response received');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error', error.message);
        throw new Error(error.message);
      }
    }
  }
}
