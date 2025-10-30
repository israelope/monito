import React from 'react';
import FilterGroup from './FilterGroup';

// 1. Accept filters and setFilters as props
const FilterSidebar = ({ filters, setFilters }) => {
  // 2. Create handler functions to update the state

  const handleGenderChange = (e) => {
    setFilters({ ...filters, gender: e.target.value });
  };

  const handleCheckboxChange = (e, filterType) => {
    const { value, checked } = e.target;
    const currentValues = filters[filterType];

    if (checked) {
      // Add the value to the array
      setFilters({ ...filters, [filterType]: [...currentValues, value] });
    } else {
      // Remove the value from the array
      setFilters({ ...filters, [filterType]: currentValues.filter(item => item !== value) });
    }
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target; // name will be 'min' or 'max'
    setFilters({
      ...filters,
      price: { ...filters.price, [name]: value }
    });
  };

  return (
    <aside className="bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-xl font-bold mb-6">Filter</h2>

      <FilterGroup title="Gender">
        {/* 3. Control the inputs with state */}
        <label className="flex items-center space-x-2">
          <input 
            type="radio" 
            name="gender" 
            value="Male"
            checked={filters.gender === 'Male'}
            onChange={handleGenderChange}
            className="form-radio text-[#003459]" 
          />
          <span>Male</span>
        </label>
        <label className="flex items-center space-x-2">
          <input 
            type="radio" 
            name="gender" 
            value="Female"
            checked={filters.gender === 'Female'}
            onChange={handleGenderChange}
            className="form-radio text-[#003459]" 
          />
          <span>Female</span>
        </label>
      </FilterGroup>

      <FilterGroup title="Color">
        {['Red', 'Apricot', 'Black', 'Black & White', 'Silver', 'Tan'].map(color => (
          <label key={color} className="flex items-center space-x-2">
            <input 
              type="checkbox" 
              value={color}
              checked={filters.color.includes(color)}
              onChange={(e) => handleCheckboxChange(e, 'color')}
              className="form-checkbox rounded text-[#003459]" 
            />
            <span>{color}</span>
          </label>
        ))}
      </FilterGroup>

      <FilterGroup title="Price">
        <div className="flex items-center space-x-2">
          <input 
            type="number" 
            name="min"
            placeholder="Min" 
            value={filters.price.min}
            onChange={handlePriceChange}
            className="w-full border-gray-300 rounded-lg" 
          />
          <span className="text-gray-400">-</span>
          <input 
            type="number" 
            name="max"
            placeholder="Max" 
            value={filters.price.max}
            onChange={handlePriceChange}
            className="w-full border-gray-300 rounded-lg" 
          />
        </div>
      </FilterGroup>

      <FilterGroup title="Breed">
        {['Small', 'Medium', 'Large'].map(breed => (
          <label key={breed} className="flex items-center space-x-2">
            <input 
              type="checkbox" 
              value={breed}
              checked={filters.breed.includes(breed)}
              onChange={(e) => handleCheckboxChange(e, 'breed')}
              className="form-checkbox rounded text-[#003459]" 
            />
            <span>{breed}</span>
          </label>
        ))}
      </FilterGroup>
    </aside>
  );
};

export default FilterSidebar;