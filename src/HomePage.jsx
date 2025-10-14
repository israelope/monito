import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from './Components/SharedComponents';
import { FaPlayCircle } from 'react-icons/fa';

const HomePage = () => (
    <div className="bg-[#FFF9F0]">
        <Header />
        <main className="container mx-auto px-4 pt-8 pb-16">
            <div className="flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 text-center lg:text-left z-10">
                    <h1 className="text-6xl font-extrabold text-[#003459] leading-tight">One More Friend</h1>
                    <h2 className="text-5xl font-bold text-[#003459] mt-2">Thousands More Fun!</h2>
                    <p className="mt-6 text-gray-700 max-w-md mx-auto lg:mx-0 text-lg">
                        Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun!
                    </p>
                    <div className="mt-8 flex justify-center lg:justify-start space-x-4">
                         <Link to="/category" className="flex items-center border-2 border-[#003459] text-[#003459] px-7 py-3 rounded-full font-bold hover:bg-[#FCEED5] transition-colors">
                            View Intro <FaPlayCircle className="ml-3" />
                        </Link>
                        <Link to="/category" className="bg-[#003459] text-white px-10 py-3 rounded-full font-bold hover:bg-opacity-90 transition-colors">
                            Explore Now
                        </Link>
                    </div>
                </div>
                <div className="lg:w-1/2 mt-10 lg:mt-0">
                    <img src="https://i.imgur.com/2L2nS8H.png" alt="Woman holding a Corgi dog" className="relative z-10 w-full" />
                </div>
            </div>
        </main>
        <Footer />
    </div>
);

export default HomePage;