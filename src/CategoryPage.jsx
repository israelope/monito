import React, { useState, useEffect } from 'react';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';
import { Header, Footer, PetCard } from './Components/SharedComponents';
import { petsData } from './Constants/Index';

const CategoryPage = () => {
    const [allPets] = useState(petsData);
    const [filteredPets, setFilteredPets] = useState(petsData);
    const [displayedPets, setDisplayedPets] = useState([]);
    const [filters, setFilters] = useState({ gender: 'all', colors: [], price: { min: 0, max: 20000000 }, breeds: [] });
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(9);

    useEffect(() => {
        let result = allPets;
        if (filters.gender !== 'all') { result = result.filter(pet => pet.gender.toLowerCase() === filters.gender); }
        if (filters.colors.length > 0) { result = result.filter(pet => filters.colors.includes(pet.color)); }
        result = result.filter(pet => pet.price >= filters.price.min && pet.price <= filters.price.max);
        if (filters.breeds.length > 0) { result = result.filter(pet => filters.breeds.includes(pet.breed)); }
        setFilteredPets(result);
        setCurrentPage(1);
    }, [filters, allPets]);

    useEffect(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setDisplayedPets(filteredPets.slice(startIndex, endIndex));
    }, [currentPage, filteredPets, itemsPerPage]);

    const handleFilterChange = (filterType, value) => {
        setFilters(prev => {
            if (filterType === 'colors' || filterType === 'breeds') {
                const current = prev[filterType];
                return { ...prev, [filterType]: current.includes(value) ? current.filter(v => v !== value) : [...current, value] };
            }
            return { ...prev, [filterType]: value };
        });
    };
    
    const totalPages = Math.ceil(filteredPets.length / itemsPerPage);

    return (
        <div className="bg-[#FDFDFD]">
            <Header />
            <div className="container mx-auto px-4 py-8">
                 <div className="relative bg-[#003459] rounded-2xl overflow-hidden h-64 text-white p-8 flex items-center mb-8">
                    <h2 className="text-4xl font-bold z-10">One More Friend<br/>Thousands More Fun!</h2>
                    <img src="https://i.imgur.com/T0ianaU.png" alt="Group of puppies" className="absolute right-0 bottom-0 h-full object-cover"/>
                </div>
                <div className="flex flex-col lg:flex-row gap-8">
                    <aside className="w-full lg:w-1/4 bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-bold text-[#00171F] mb-4">Filter</h3>
                        <div className="mb-6"><h4 className="font-bold mb-2">Gender</h4><label className="flex items-center"><input type="radio" name="gender" onChange={() => handleFilterChange('gender', 'male')} checked={filters.gender === 'male'} /><span>Male</span></label><label className="flex items-center"><input type="radio" name="gender" onChange={() => handleFilterChange('gender', 'female')} checked={filters.gender === 'female'}/><span>Female</span></label></div>
                        <div className="mb-6"><h4 className="font-bold mb-2">Color</h4> {['Red', 'Apricot', 'Black', 'Black & White', 'Silver', 'Tan'].map(c => (<label key={c} className="flex items-center"><input type="checkbox" checked={filters.colors.includes(c)} onChange={() => handleFilterChange('colors', c)} /><span>{c}</span></label>))}</div>
                        <div className="mb-6"><h4 className="font-bold mb-2">Price (VND)</h4><input type="range" min="0" max="20000000" step="500000" value={filters.price.max} onChange={(e) => handleFilterChange('price', { ...filters.price, max: Number(e.target.value) })} className="w-full"/><div className="flex justify-between text-sm"><span>0</span><span>{filters.price.max.toLocaleString()}</span></div></div>
                        <div><h4 className="font-bold mb-2">Breed</h4> {['Small', 'Medium', 'Large'].map(b => (<label key={b} className="flex items-center"><input type="checkbox" checked={filters.breeds.includes(b)} onChange={() => handleFilterChange('breeds', b)} /><span>{b} Dog</span></label>))}</div>
                    </aside>
                    <main className="w-full lg:w-3/4">
                        <div className="flex justify-between items-center mb-4"><h2 className="text-xl font-bold text-[#00171F]">All Pets ({filteredPets.length})</h2></div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">{displayedPets.length > 0 ? displayedPets.map(pet => <PetCard key={pet.id} pet={pet} />) : <p className="col-span-3 text-center">No pets match filters.</p>}</div>
                        <div className="flex justify-center items-center mt-8 space-x-2">{Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (<button key={p} onClick={() => setCurrentPage(p)} className={`px-4 py-2 rounded-lg ${currentPage === p ? 'bg-[#003459] text-white' : 'bg-gray-200'}`}>{p}</button>))} {currentPage < totalPages && (<button onClick={() => setCurrentPage(c => c + 1)} className="px-4 py-2 rounded-lg bg-gray-200"><FaAngleRight /></button>)}</div>
                    </main>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CategoryPage;