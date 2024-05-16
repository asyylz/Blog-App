import { Outlet } from 'react-router-dom';
import Navbar from '../components/componentsUI/Navbar';
import axios from 'axios';
import Footer from '../components/componentsUI/Footer';
import { useLocation, useActionData } from 'react-router-dom';
const BASE_URL = import.meta.env.VITE_BASE_URL;
import {
  fetchAllBlogPosts,
  fetchCategories,
  fetchBlogsForPageLength,
  fetchSearchedBlogPost,
} from '../utils/http';
import { queryClient } from '../utils/http';
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
  console.log(page);
  try {
    const { data: blogPosts } = await queryClient.fetchQuery({
      queryKey: ['blogs', { page: page, limit: limit }],
      queryFn: ({ signal, queryKey }) =>
        fetchAllBlogPosts({ signal, ...queryKey[1] }),
      staleTime: 10000,
    });
    const { data: categories } = await queryClient.fetchQuery({
      queryKey: ['categories'],
      queryFn: ({ signal }) => fetchCategories({ signal }),
      staleTime: 10000,
    });
    const { data: totalData } = await queryClient.fetchQuery({
      queryKey: ['pages'],
      queryFn: ({ signal }) => fetchBlogsForPageLength({ signal }),
      staleTime: 10000,
    });
    console.log(totalData);
    return { blogPosts, totalData, categories };
  } catch (error) {
    console.error(error);

    throw error;
  }
}

export async function action({ request }) {
  const searchBarData = await request.formData();
  const searchTerm = searchBarData.get('search');
  const capitalizedSearchTerm =
    searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1); // Capitalize the first
  const categoryId = searchBarData.get('categoryId');

  try {
    const { data: searchedBlogPosts } = await queryClient.fetchQuery({
      queryKey: [
        'searchedBlogs',
        {
          searchTerm: searchTerm,
          categoryId: categoryId,
          capitalizedSearchTerm: capitalizedSearchTerm,
        },
      ],
      queryFn: ({ signal, queryKey }) =>
        fetchSearchedBlogPost({ signal, ...queryKey[1] }),
      staleTime: 10000,
    });

    return { searchedBlogPosts };
  } catch (error) {
    console.log(error);
    throw error.response;
  }
}
