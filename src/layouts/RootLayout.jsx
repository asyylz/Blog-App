import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <main className="bg-themeDirtyWhite">
        <Outlet />
      </main>
    </>
  );
}
export async function loaderBlogs() {
  try {
    const response = await axios.get(
      'https://38110.fullstack.clarusway.com/blogs/?page=1&limit=10'
    );
    const blogPosts = response.data.data;
    console.log(blogPosts);
    return blogPosts
  } catch (error) {
    console.error(error);

    throw error;
  }
}
