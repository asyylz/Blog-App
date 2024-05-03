import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';
import Footer from '../components/componentsUI/Footer';
import Pagination from '../components/componentsUI/Pagination';
export default function RootLayout() {
  return (
    <>
      <Navbar />
      <main className="bg-themeDirtyWhite">
        <Outlet />
        <Pagination />
        <Footer />
      </main>
    </>
  );
}
export async function loaderBlogs({ request, params }) {
  const url = new URL(request.url);
  const page = url.searchParams.get('page') || '1';
  const limit = url.searchParams.get('limit') || '6';

  try {
    const response = await axios.get(
      `https://38110.fullstack.clarusway.com/blogs/?page=${page}&limit=${limit}`
    );
    const blogPosts = response.data.data;
    return blogPosts;
  } catch (error) {
    console.error(error);

    throw error;s
  }
}
