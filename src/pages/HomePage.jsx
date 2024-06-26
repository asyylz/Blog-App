import { useEffect } from 'react';
import ScreenSmallHomePageLayout from '../layouts/ScreenSmallHomePageLayout';
import { useState } from 'react';
import ScreenLargeHomePageLayout from '../layouts/ScreenLargeHomePageLayout';
import SearchBar from '../components/componentsUI/SearchBar';
import Pagination from '../components/componentsUI/Pagination';
import { useRouteLoaderData } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
export default function HomePage() {
  const [isScreenSmall, setIsScreenSmall] = useState(false);
  const [shownPosts, setShownPosts] = useState();
  const { totalData } = useRouteLoaderData('root');
  const searchedData = useOutletContext();
  const length = totalData.length;


  /* -------------------- screen check -------------------- */
  useEffect(() => {
    const checkScreenSize = () => {
      const isScreenSmall = window.matchMedia('(max-width: 768px)').matches;
      setIsScreenSmall(isScreenSmall);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="min-h-screen">
      <SearchBar />
      <p className="text-[3rem] ml-5 font-thin font-ibm-flex italic text-themeBrown">
        Delve into blog world...
      </p>
      {isScreenSmall ? (
        <>
          <ScreenSmallHomePageLayout
            shownPosts={shownPosts}
            setShownPosts={setShownPosts}
            searchedData={searchedData}
          />
          <Pagination dataLength={length} />
        </>
      ) : (
        <>
          <ScreenLargeHomePageLayout
            shownPosts={shownPosts}
            setShownPosts={setShownPosts}
            searchedData={searchedData}
          />
          <Pagination dataLength={length} />
        </>
      )}
    </div>
  );
}
