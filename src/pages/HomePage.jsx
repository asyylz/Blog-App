import { useEffect } from 'react';
import ScreenSmallHomePageLayout from '../layouts/ScreenSmallHomePageLayout';
import { useState } from 'react';
import ScreenLargeHomePageLayout from '../layouts/ScreenLargeHomePageLayout';
import SearchBar from '../components/componentsUI/SearchBar';
import Dropdownmenu from '../components/componentsUI/Dropdownmenu';
export default function HomePage() {
  const [isScreenSmall, setIsScreenSmall] = useState(false);
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
    <div>
      <SearchBar />
      <p className="text-[3rem] ml-5 font-thin font-ibm-flex italic text-themeBrown">
        Delve into blog world...
      </p>
      {isScreenSmall ? (
        <ScreenSmallHomePageLayout />
      ) : (
        <ScreenLargeHomePageLayout />
      )}
    </div>
  );
}
