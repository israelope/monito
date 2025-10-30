import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { FiFilter } from 'react-icons/fi';

const Toolbar = ({ setIsFilterOpen }) => {
  return (
    // Becomes a row on desktop
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 mb-6">

      {/* Title Section */}
      {/* 1. On tablet (md), it's ordered second. */}
      <div className="md:order-2 lg:order-1">
        <h1 className="text-xl font-bold text-[#00171F] text-center md:text-left">
         Dog 
        </h1>
      </div>

      {/* Actions Section (Sort & Filter) */}
      {/* 2. On tablet (md), it's ordered first. */}
      <div className="flex justify-between items-center w-full md:order-1 lg:order-2 lg:w-auto">
        
        {/* Sort By Dropdown */}
        {/* 3. Hidden on mobile, visible on tablet (md) and up */}
        <div className="hidden md:flex items-center space-x-2">
          <span className="font-semibold text-sm">Sort by:</span>
          <button className="flex items-center font-bold p-2 rounded-lg border border-gray-200 shadow-sm bg-white">
            Popular <FaChevronDown className="ml-2 w-3 h-3" />
          </button>
        </div>

        {/* Filter Button */}
        {/* Hidden on desktop, takes up space on mobile/tablet */}
        <button 
          onClick={() => setIsFilterOpen(true)}
          className="lg:hidden flex items-center justify-center w-full md:w-auto bg-white p-3 rounded-lg shadow font-bold text-[#003459] border border-gray-200"
        >
          <FiFilter className="mr-2" />
          {/* Text "Filter" is visible only on the smallest screens */}
          <span className="md:hidden">Filter</span>
        </button>
      </div>
      
    </div>
  );
};

export default Toolbar;