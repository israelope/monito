import React from 'react';

const FilterGroup = ({ title, children }) => {
  return (
    <div className="border-b border-gray-200 pb-4 mb-4">
      <h3 className="font-bold text-lg text-[#00171F] mb-3">{title}</h3>
      <div className="space-y-2">
        {children}
      </div>
    </div>
  );
};

export default FilterGroup;