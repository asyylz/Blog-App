import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HomePageLayout from '../components/componentsUI/HomePageLayout';
import { useState } from 'react';
export default function HomePage() {
  const [isIpadAir, setIsIpadAir] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => {
      const isIpadAir = window.matchMedia('(max-width: 768px)').matches;
      setIsIpadAir(isIpadAir);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return <>{isIpadAir ? <HomePageLayout /> : null}</>;
}
