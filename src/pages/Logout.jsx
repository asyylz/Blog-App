import { redirect } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../hooks/useAuth';
import { useActionData } from 'react-router-dom';
import React from 'react';
import ModalCustom from '../components/componentsUI/ModalCustom';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const authActionData = useActionData();
  console.log(authActionData);
  const navigate = useNavigate();
  const isSuccess = authActionData?.error === false ? true : false;

  if (isSuccess) {
    setTimeout(() => {
      navigate('/');
    }, 800);
  }
  console.log(isSuccess);
  return (
    isSuccess && (
      <ModalCustom open={isSuccess}>
        <div
          //style={{ border: '1px solid red' }}
          className="container w-full flex items-center px-5"
        >
          <h2 className="w-full p-4 font-ibm-flex text-[30px] text-center text-themeDirtyWhite italic font-thin bg-themeGreenDark rounded-lg border-2 ">
            You successfuly logged out!
          </h2>
        </div>
      </ModalCustom>
    )
  );
}

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
    return response.data;
  } catch (error) {
    console.error('Logout failed:', error.response || error.message);
    // Decide how to handle errors: maybe redirect to an error page or login page?
    throw new Error('Logout failed');
  }
}
