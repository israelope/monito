import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// 1. Accept currentPage, setCurrentPage, and totalPages as props
const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  
  // 2. Create handler functions for next and previous pages
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  // Don't render pagination if there's only one page
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="flex justify-center items-center space-x-2 mt-10">
      {/* Previous Button */}
      <button 
        onClick={handlePrev} 
        disabled={currentPage === 1} // Disable button on the first page
        className="p-3 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FaChevronLeft className="w-4 h-4 text-gray-500" />
      </button>

      {/* Page Numbers (Simplified for now) */}
      {/* We'll just show the current page dynamically for now */}
      <button className="px-4 py-2 rounded-lg bg-[#003459] text-white font-bold">{currentPage}</button>
      
      {/* You can add more complex page number logic here if needed */}
      {totalPages > 1 && <span className="px-4 py-2 font-bold">...</span>}
      {totalPages > 1 && <button className="px-4 py-2 rounded-lg hover:bg-gray-100 font-bold">{totalPages}</button>}
      
      {/* Next Button */}
      <button 
        onClick={handleNext} 
        disabled={currentPage === totalPages} // Disable button on the last page
        className="p-3 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FaChevronRight className="w-4 h-4 text-gray-500" />
      </button>
    </div>
  );
};

export default Pagination;