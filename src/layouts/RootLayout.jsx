import { Outlet } from 'react-router-dom';
import Navbar from '../components/componentsUI/Navbar';
import axios from 'axios';
import Footer from '../components/componentsUI/Footer';
import Pagination from '../components/componentsUI/Pagination';
import { useLocation, useOutletContext, useLoaderData } from 'react-router-dom';
import { useRouteLoaderData } from 'react-router-dom';
export default function RootLayout() {
  const { totalData } = useLoaderData()
  const length = totalData.length;

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const isAuthPage =
    (location.pathname === '/auth' && query.get('mode') === 'register') ||
    query.get('mode') === 'login';

  return (
    <>
      <Navbar />
      <main 
      //style={{border:'2px solid blue'}}
      className="bg-themeDirtyWhite">
        <Outlet context={totalData} />
        {!isAuthPage && (
          <>
            <Footer />
          </>
        )}
      </main>
    </>
  );
}

export async function loaderBlogs({ request }) {
  const url = new URL(request.url);
  const page = url.searchParams.get('page') || '1';
  const limit = url.searchParams.get('limit') || '6';

  try {
    const response1 = await axios.get(
      `https://38110.fullstack.clarusway.com/blogs/?page=${page}&limit=${limit}`
    );
    const response2 = await axios.get(
      'https://38110.fullstack.clarusway.com/blogs/'
    );
    const totalData = response2.data.data;
    const blogPosts = response1.data.data;
    console.log(totalData);
    return { blogPosts, totalData };
  } catch (error) {
    console.error(error);

    throw error;
  }
}
