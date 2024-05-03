import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const pageNumbers = ['1', '2', '3', '4', '5'];
export default function Pagination({ dataLength }) {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  console.log(currentPage);

  useEffect(() => {
    navigate(`/?page=${currentPage}&limit=6`);
  }, [currentPage, navigate]);

  function handlePagination(event, action) {
    event.preventDefault();
    if (action === 'previous' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (action === 'next' && currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <nav
      //style={{border:'2px solid red'}}
      className="text-center"
      aria-label="Page navigation"
    >
      <ul className="inline-flex -space-x-px text-base h-10">
        <button
          onClick={(e) => handlePagination(e, 'previous')}
          disabled={currentPage <= 1}
          className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-r-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
        >
          Previous
        </button>
        {Array.from({ length: dataLength / 6 }, (_, index) => (
          //{pageNumbers.map((page, index) => (
          <button
            key={index + 1}
            disabled={currentPage === index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer ${
              currentPage === index + 1 ? 'bg-gray-500 text-white' : ''
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={(e) => handlePagination(e, 'next')}
          disabled={currentPage >= dataLength / 6}
          className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
        >
          Next
        </button>
      </ul>
    </nav>
  );
}
