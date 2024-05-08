import { redirect } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../hooks/useAuth';
import { useActionData } from 'react-router-dom';
import React from 'react';
import ModalCustom from '../components/componentsUI/ModalCustom';


export const Logout = () => {
  const authActionData = useActionData();
  console.log(authActionData);
  return <ModalCustom></ModalCustom>;
};

export async function action() {
  const { user } = useAuth();

  if (!user) {
    console.log('No user found in localStorage.');
    return redirect('/');
  }

  try {
    const response = await axios.get(
      'https://38110.fullstack.clarusway.com/auth/logout/',
      {
        headers: {
          Authorization: `Token ${user.token}`,
        },
      }
    );

    // Remove user info from localStorage on successful logout
    localStorage.removeItem('user');
    console.log('Logout successful:', response.data);
    return response.data
  } catch (error) {
    console.error('Logout failed:', error.response || error.message);
    // Decide how to handle errors: maybe redirect to an error page or login page?
    throw new Error('Logout failed');
  }
}
