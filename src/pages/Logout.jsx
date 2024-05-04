import { redirect } from 'react-router-dom';

export async function action() {
  const user = JSON.parse(localStorage.getItem('user'));
  try {
    const response = await axios.get(
      'https://38110.fullstack.clarusway.com/auth/logout/',
      `Token ${user.token}`
    );
    localStorage.removeItem('user');
    console.log(response.data);
  } catch (error) {
    throw error.response;
  }
  return redirect('/');
}
