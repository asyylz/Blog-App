import { redirect } from 'react-router-dom';
import axios from 'axios';

export async function action() {
  const userStorage = localStorage.getItem('user');
console.log(userStorage)

  if (!userStorage) {
    console.log('No user found in localStorage.');
    return redirect('/'); // Redirect to home if no user is logged in
  }

  const user = JSON.parse(userStorage);
  console.log('clicked');
  try {
    // Ensure to use headers to send the token
    const response = await axios.get(
      'https://38110.fullstack.clarusway.com/auth/logout/',
      {
        headers: {
          //Authorization: `Token ${user.token}`,
          Authorization:
            'Token 6933724fcae90e4e2268778f7a5f7c8fcd1aebe5b832553ca614b1288f657872',
        },
      }
    );

    // Remove user info from localStorage on successful logout
    localStorage.removeItem('user');
    console.log('Logout successful:', response.data);
    return redirect('/');
  } catch (error) {
    console.error('Logout failed:', error.response || error.message);
    // Decide how to handle errors: maybe redirect to an error page or login page?
    throw new Error('Logout failed');
  }

}
