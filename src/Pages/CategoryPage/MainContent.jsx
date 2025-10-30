import React, { useState, useEffect } from 'react';
import FilterSidebar from './FilterSidebar';
import ProductGrid from './ProductGrid';
import Toolbar from './Toolbar';
import Pagination from './Pagination';
import { petsData } from '../../Constants/Index';

const MainContent = () => {
  // --- 1. FILTER STATE ---
  const [filters, setFilters] = useState({
    gender: 'All',
    color: [],
    breed: [],
    price: { min: '', max: '' }
  });

  // --- 2. PAGINATION STATE ---
  const [filteredPets, setFilteredPets] = useState(petsData);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12); // Number of pets to show per page

  // --- 3. MOBILE SIDEBAR STATE ---
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // --- 4. FILTERING LOGIC ---
  useEffect(() => {
    let filteredData = [...petsData];

    // Apply gender filter
    if (filters.gender !== 'All') {
      filteredData = filteredData.filter(pet => pet.gender === filters.gender);
    }
    // Apply color filter
    if (filters.color.length > 0) {
      filteredData = filteredData.filter(pet => filters.color.includes(pet.color));
    }
    // Apply breed filter
    if (filters.breed.length > 0) {
      filteredData = filteredData.filter(pet => filters.breed.includes(pet.breed));
    }
    // Apply price filter
    const minPrice = parseFloat(filters.price.min);
    const maxPrice = parseFloat(filters.price.max);
    if (!isNaN(minPrice)) {
      filteredData = filteredData.filter(pet => pet.price >= minPrice);
    }
    if (!isNaN(maxPrice)) {
      filteredData = filteredData.filter(pet => pet.price <= maxPrice);
    }

    setFilteredPets(filteredData);
    setCurrentPage(1); // Reset to page 1 whenever filters change
  }, [filters]);

  // --- 5. PAGINATION LOGIC ---
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPets = filteredPets.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredPets.length / itemsPerPage);

  // --- 6. JSX TO RENDER ---
  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-4 gap-8 px-4 sm:px-8 lg:px-20 py-10">

      {/* --- Desktop Sidebar (Hidden on mobile) --- */}
      <div className="hidden lg:block lg:col-span-1">
        <FilterSidebar filters={filters} setFilters={setFilters} />
      </div>

      {/* --- Mobile Off-Canvas Sidebar (Hidden on desktop) --- */}
      {isFilterOpen && (
        // 1. ADD onClick TO THE OVERLAY to close it
        <div
          className="lg:hidden fixed inset-0 bg-transparent bg-opacity-50 z-40"
          onClick={() => setIsFilterOpen(false)}
        >
          {/* 2. ADD onClick with stopPropagation to the panel */}
          <div
            className="absolute top-0 left-0 h-full w-4/5 max-w-sm bg-white overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <FilterSidebar filters={filters} setFilters={setFilters} />

            <button
              onClick={() => setIsFilterOpen(false)}
              className="absolute top-4 right-4 text-3xl text-gray-500 p-2"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* --- Main Content Area (Toolbar, Grid, Pagination) --- */}
      <div className="lg:col-span-3">
        <Toolbar setIsFilterOpen={setIsFilterOpen} />
        <ProductGrid pets={currentPets} />
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};

export default MainContent;