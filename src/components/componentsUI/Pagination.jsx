import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const pageNumbers = ['1', '2', '3', '4', '5'];
export default function Pagination() {
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
          className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-r-0 border-gray-300 rounded-sm hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Previous
        </button>
        {pageNumbers.map((page, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(Number(page))}
            className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
              currentPage === Number(page) ? 'bg-gray-500 text-white' : ''
            }`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={(e) => handlePagination(e, 'next')}
          className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
        </button>
      </ul>
    </nav>
  );
}
