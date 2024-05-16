import { QueryClient } from '@tanstack/react-query';
export const queryClient = new QueryClient();
const BASE_URL = import.meta.env.VITE_BASE_URL;
import axios from 'axios';
export async function fetchAllBlogPosts({ signal, page, limit }) {
  const url = `${BASE_URL}blogs/?page=${page}&limit=${limit}`;
  try {
    const response = await axios.get(url, { signal: signal });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchCategories({ signal }) {
  const url = `${BASE_URL}categories/`;
  try {
    const response = await axios.get(url, { signal: signal });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchBlogsForPageLength({ signal }) {
  const url = `${BASE_URL}blogs/`;
  try {
    const response = await axios.get(url, { signal: signal });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchSearchedBlogPost({
  signal,
  searchTerm,
  categoryId,
  capitalizedSearchTerm,
}) {
  try {
    let response = await axios.get(
      `${BASE_URL}blogs/?page=1&limit=10&filter[categoryId]=${categoryId}&search[title]=a&search[content]=${searchTerm}`,
      { signal: signal }
    );
    if (response.data.data.length === 0) {
      response = await axios.get(
        `${BASE_URL}blogs/?page=1&limit=10&filter[categoryId]=${categoryId}&search[title]=a&search[content]=${capitalizedSearchTerm}`,
        { signal: signal }
      );
    }

    return response.data;
  } catch (error) {
    console.log(error);
    throw error.response;
  }
}
