import { useEffect } from 'react';
import ScreenSmallHomePageLayout from '../layouts/ScreenSmallHomePageLayout';
import { useState } from 'react';
import ScreenLargeHomePageLayout from '../layouts/ScreenLargeHomePageLayout';
import SearchBar from '../components/componentsUI/SearchBar';
import Pagination from '../components/componentsUI/Pagination';
import { useRouteLoaderData, json } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import axios from 'axios';
import Navbar from '../components/componentsUI/Navbar';

export default function HomePage() {
  const [isScreenSmall, setIsScreenSmall] = useState(false);
  const { totalData } = useRouteLoaderData('root');
  const length = totalData.length;
  console.log(length);

  useEffect(() => {
    const checkScreenSize = () => {
      const isScreenSmall = window.matchMedia('(max-width: 768px)').matches;
      setIsScreenSmall(isScreenSmall);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="min-h-screen">
      <SearchBar />
      <p className="text-[3rem] ml-5 font-thin font-ibm-flex italic text-themeBrown">
        Delve into blog world...
      </p>
      {isScreenSmall ? (
        <>
          <ScreenSmallHomePageLayout />
          <Pagination dataLength={length} />
        </>
      ) : (
        <>
          <ScreenLargeHomePageLayout />
          <Pagination dataLength={length} />
        </>
      )}
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const postId = formData.get('id');
  const { user } = useAuth();
  console.log(user?.token);
  console.log(postId);
  try {
    console.log('clicked');
    const response = await axios.post(
      `https://38110.fullstack.clarusway.com/blogs/${postId}/postLike`,
      {},
      {
        headers: {
          Authorization: `Token ${user?.token}`,
        },
      }
    );
    console.log('Like Data:', response.data);

    return new Response(
      JSON.stringify({ success: true, like: response.data }),
      {
        headers: { 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    // console.error('Error posting like:', error);
    // return new Response(JSON.stringify({ error: error.message }), {
    //   headers: { 'Content-Type': 'application/json' },
    //   status: error.response?.status || 500,
    // });

    //throw json({}, { status: 401, statusText: 'You should login.' });
    throw json(
      {
        message: 'You should login to be able to do like action.',
      },
      { statusText: 'Unauthorised!', status: 401 }
    );
  }
}
