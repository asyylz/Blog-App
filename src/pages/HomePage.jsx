import { useEffect } from 'react';
import ScreenSmallHomePageLayout from '../layouts/ScreenSmallHomePageLayout';
import { useState } from 'react';
import ScreenLargeHomePageLayout from '../layouts/ScreenLargeHomePageLayout';
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
    <>
      <p className="text-[3rem] font-thin font-ibm-flex italic text-themeBrown">
        Delve into blog world...
      </p>
      {isScreenSmall ? (
        <ScreenSmallHomePageLayout />
      ) : (
        <ScreenLargeHomePageLayout />
      )}
    </>
  );
}
