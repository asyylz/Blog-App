import React from 'react';
import { Link } from 'react-router-dom';

export const BackPageButton = () => {
  return (
    <Link
      to={-1}
      className="absolute left-4 px-3 py-2 mt-5 w-[100px]  sm:w-[150px] text-themeCream bg-themeGreenDark hover:bg-themeGreen hover:animate-pulse focus:ring-2 focus:outline-none focus:ring-themeGreenDark rounded-xl  text-xs md:text-sm lg:text-lg text-center"
    >
      Back
    </Link>
  );
};
export default BackPageButton;
