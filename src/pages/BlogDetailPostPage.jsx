import BlogPostDetails from '../components/componentsUI/BlogPostDetails';
import { useOutletContext } from 'react-router-dom';

export default function BlogDetailPostPage() {

const totalData = useOutletContext();
console.log(totalData)

  return (
  <BlogPostDetails />
  )
}
