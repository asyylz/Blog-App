import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';
import Footer from '../components/componentsUI/Footer';
import Pagination from '../components/componentsUI/Pagination';
import { useLoaderData } from 'react-router-dom';
export default function RootLayout() {
  const {totalData } = useLoaderData();
  const length = totalData.length;

  return (
    <>
      <Navbar />
      <main className="bg-themeDirtyWhite">
        <Outlet />
        <Pagination dataLength={length} />
        <Footer />
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

    return { blogPosts, totalData };
  } catch (error) {
    console.error(error);

    throw error;
  }
}
