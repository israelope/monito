import React from 'react'

const ProductCard = ({ pet }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
        <img src={pet.image} alt={pet.name} className="w-full h-48 object-cover" />
        <div className="p-4 flex flex-col flex-grow">
            <h3 className="font-bold text-[#00171F] text-sm truncate">
                {pet.id} - {pet.name}
            </h3>
            <div className="text-sm text-gray-600 mt-2 flex space-x-2">
                <span>Gene: <strong>{pet.gender}</strong></span>
                <span>•</span>
                <span>Age: <strong>{pet.age}</strong></span>
            </div>
            <p className="font-bold text-[#00171F] mt-4 ">{pet.price}</p>
        </div>
    </div>
  )
}

export default ProductCard