import React from 'react';
import { useParams } from 'react-router-dom';
import { petsData } from './Constants/Index';
import { Header, Footer } from './Components/SharedComponents';

const PetDetailPage = () => {
    const { petId } = useParams();
    const pet = petsData.find(p => p.id === petId);

    if (!pet) {
        return (
            <div><Header /><div className="text-center py-20"><h1 className="text-3xl font-bold">Pet not found!</h1></div><Footer /></div>
        );
    }

    return (
        <div className="bg-[#FDFDFD]">
            <Header />
            <main className="container mx-auto px-4 py-12">
                <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col lg:flex-row gap-12">
                    <div className="lg:w-1/2"><img src={pet.image} alt={pet.name} className="w-full h-auto object-cover rounded-xl" /></div>
                    <div className="lg:w-1/2">
                        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">ID: {pet.id}</span>
                        <h1 className="text-5xl font-bold text-[#003459] mt-4">{pet.name}</h1>
                        <p className="text-3xl text-gray-800 font-bold mt-2">{pet.price.toLocaleString()} VND</p>
                        <div className="mt-8 grid grid-cols-2 gap-4 text-lg">
                            <div><strong className="text-gray-500">Gender:</strong> {pet.gender}</div>
                            <div><strong className="text-gray-500">Age:</strong> {pet.age}</div>
                            <div><strong className="text-gray-500">Color:</strong> {pet.color}</div>
                            <div><strong className="text-gray-500">Breed:</strong> {pet.breed} Dog</div>
                        </div>
                        <p className="mt-8 text-gray-600">This is a lovely {pet.name}, known for its friendly and playful nature. It's a {pet.breed} dog, currently {pet.age} old, and is looking for a warm and caring home. All vaccinations are up-to-date.</p>
                        <button className="mt-10 w-full bg-[#003459] text-white py-4 rounded-full font-bold text-xl hover:bg-opacity-90 transition-colors">Adopt Me</button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PetDetailPage;