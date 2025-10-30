import React from 'react';
import ProductCard from './ProductCard'; 

const ProductGrid = ({ pets }) => {
  return (
    // This grid shows 2 columns on mobile and 3 on large screens
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {pets.map(pet => (
        <ProductCard key={pet.id} pet={pet} />
      ))}
    </div>
  );
};

export default ProductGrid;