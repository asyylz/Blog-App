import { Outlet } from 'react-router-dom';
import Footer from '../components/componentsUI/Footer';
import { useOutletContext } from 'react-router-dom';
import Navbar from '../components/componentsUI/Navbar';
export default function BlogDetailLayout() {
  const totalData = useOutletContext();
  console.log(totalData);
  return (
    <>
      <main className="bg-themeDirtyWhite">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
