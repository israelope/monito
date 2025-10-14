import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaChevronDown, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export const Header = () => (
    <header className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
            <Link to="/">
                <img src="https://i.imgur.com/b2d2yvE.png" alt="Monito Logo" className="h-10"/>
            </Link>
            <nav className="hidden lg:flex items-center space-x-8 text-lg">
                <Link to="/" className="text-[#003459] font-bold">Home</Link>
                <Link to="/category" className="text-gray-800 font-semibold hover:text-[#003459]">Category</Link>
                <a href="#" className="text-gray-800 font-semibold hover:text-[#003459]">About</a>
                <a href="#" className="text-gray-800 font-semibold hover:text-[#003459]">Contact</a>
            </nav>
            <div className="hidden lg:flex items-center space-x-4">
                <div className="relative">
                    <input type="text" placeholder="Search something here!" className="bg-white rounded-full py-2.5 pl-10 pr-4 w-72 focus:outline-none border-2 border-gray-200"/>
                    <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
                <button className="bg-[#003459] text-white px-7 py-2.5 rounded-full font-bold hover:bg-opacity-90 transition-colors">
                    Join the community
                </button>
            </div>
            <div className="lg:hidden">
                <button className="text-3xl text-[#003459]">☰</button>
            </div>
        </div>
    </header>
);

export const Footer = () => (
    <footer className="bg-[#FCEED5] pt-16 mt-12">
        <div className="container mx-auto px-4">
            <div className="bg-[#003459] text-white p-8 rounded-2xl flex flex-col lg:flex-row justify-between items-center">
                <h2 className="text-3xl font-bold text-center lg:text-left">Register Now So You Don't Miss Our Programs</h2>
                <div className="bg-white p-2 rounded-xl mt-6 lg:mt-0 flex w-full max-w-lg">
                    <input type="email" placeholder="Enter your Email" className="w-full p-3 rounded-lg text-gray-800 focus:outline-none"/>
                    <button className="bg-[#003459] p-3 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">Subscribe Now</button>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center py-10 mt-8">
                <nav className="flex space-x-8 text-[#00171F] font-semibold">
                    <Link to="/" className="hover:underline">Home</Link>
                    <Link to="/category" className="hover:underline">Category</Link>
                    <a href="#" className="hover:underline">About</a>
                    <a href="#" className="hover:underline">Contact</a>
                </nav>
                <div className="flex space-x-6 text-[#00171F] text-2xl my-6 md:my-0">
                    <a href="#" className="hover:text-[#003459]"><FaFacebookF /></a>
                    <a href="#" className="hover:text-[#003459]"><FaTwitter /></a>
                    <a href="#" className="hover:text-[#003459]"><FaInstagram /></a>
                    <a href="#" className="hover:text-[#003459]"><FaYoutube /></a>
                </div>
            </div>
            <hr className="border-t-2 border-gray-300" />
            <div className="flex flex-col md:flex-row justify-between items-center py-6 text-center">
                <p className="text-gray-600 text-sm">&copy; {new Date().getFullYear()} Monito. All rights reserved.</p>
                <img src="https://i.imgur.com/b2d2yvE.png" alt="Monito Logo" className="h-10 my-4 md:my-0"/>
                <div className="flex space-x-6 text-[#00171F] font-semibold">
                    <a href="#" className="hover:underline">Terms of Service</a>
                    <a href="#" className="hover:underline">Privacy Policy</a>
                </div>
            </div>
        </div>
    </footer>
);

export const PetCard = ({ pet }) => (
    <Link to={`/pet/${pet.id}`} className="bg-white rounded-xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 block">
        <img src={pet.image} alt={pet.name} className="w-full h-48 object-cover"/>
        <div className="p-4">
            <h3 className="font-bold text-[#00171F]">{pet.id} - {pet.name}</h3>
            <div className="text-sm text-gray-600 mt-2 flex space-x-2">
                <span>Gene: <strong>{pet.gender}</strong></span>
                <span>•</span>
                <span>Age: <strong>{pet.age}</strong></span>
            </div>
            <p className="font-bold text-[#00171F] mt-2">{pet.price.toLocaleString()} VND</p>
        </div>
    </Link>
);