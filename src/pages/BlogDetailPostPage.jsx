import { useParams } from 'react-router-dom';
import BlogPostDetails from '../components/componentsUI/BlogPostDetails';
import { useOutletContext } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import { useRouteLoaderData } from 'react-router-dom';
import axios from 'axios';

export default function BlogDetailPostPage() {
  //const postId = useParams().postId;
  //console.log(postId);
  //const totalData = useOutletContext();
  //const post = totalData.filter((post) => post._id === postId);
  //console.log(post);
  //console.log(totalData);

  const post = useRouteLoaderData("blog-detail");
  console.log(post);

  return (
    <div style={{ border: '1px solid red' }} className="min-h-screen py-10 ">
      <BlogPostDetails {...post} />
    </div>
  );
}

export async function loader({ request, params }) {
  const user = JSON.parse(localStorage.getItem('user'));
  const url = new URL(request.url);
  const id = params.postId;
  console.log(id);

  try {
    const response = await axios.get(
      `https://38110.fullstack.clarusway.com/blogs/${id}/`,
      {
        headers: {
          Authorization: `Token ${user.token}`,
        },
      }
    );
    const post = response.data.data;
    console.log(post);
    return post;
  } catch (error) {
    throw error.response;
  }
}
