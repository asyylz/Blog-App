import { Outlet } from 'react-router-dom';
import Navbar from '../components/componentsUI/Navbar';
import axios from 'axios';
import Footer from '../components/componentsUI/Footer';
import { useLocation } from 'react-router-dom';
import { useActionData } from 'react-router-dom';

export default function RootLayout() {
  const data = useActionData();

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const isAuthPage =
    (location.pathname === '/auth' && query.get('mode') === 'register') ||
    query.get('mode') === 'login' ||
    location.pathname === '/logout';

  return (
    <>
      <Navbar />
      <main className="bg-themeDirtyWhite">
        <Outlet context={data?.searchedBlogPosts} />
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

    const response3 = await axios.get(
      'https://38110.fullstack.clarusway.com/categories/'
    );
    const totalData = response2.data.data;
    const blogPosts = response1.data.data;
    const categories = response3.data.data;
    //console.log(totalData);
    return { blogPosts, totalData, categories };
  } catch (error) {
    console.error(error);

    throw error;
  }
}

export async function action({ request }) {
  const searchBarData = await request.formData();
  const search = searchBarData.get('search');
  const categoryId = searchBarData.get('categoryId');
  try {
    const response = await axios.get(
      `https://38110.fullstack.clarusway.com/blogs/?page=1&limit=10&filter[categoryId]=${categoryId}&search[title]=a&search[content]=${search}`
    );
    const searchedBlogPosts = response.data.data;

    return { searchedBlogPosts };
  } catch (error) {
    throw error;
  }
}
