import { useParams } from 'react-router-dom';
import BlogPostDetails from '../components/componentsUI/BlogPostDetails';
import { useOutletContext } from 'react-router-dom';

export default function BlogDetailPostPage() {
  const postId = useParams().postId;
  console.log(postId);

  const totalData = useOutletContext();
  const post = totalData.filter((post) => post._id === postId);
  console.log(post);

  //console.log(totalData);

  return (
    <div style={{ border: '1px solid red' }} 
    className="h-full my-10">
      <BlogPostDetails {...post[0]} />
    </div>
  )
}
