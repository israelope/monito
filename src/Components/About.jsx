import React from 'react';
import More from '../assets/img/More.png';
import MoreImg from '../assets/img/MoreImg.png';
import Footer from './Footer';
import Navbar from './Navbar';
import { sellerLogos } from '../Constants/Index';
import Seller from '../assets/img/Sellers.png';
import SellersImg from '../assets/img/SellersImg.png';
import { FaPlayCircle, FaPaw } from 'react-icons/fa';


const About = () => {
  return (
    <main>
        <Navbar/>
        <div className='px-4 sm:px-8 lg:px-20 py-10 sm:py-16'>
            <div className='rounded-3xl overflow-hidden'>

                {/* --- DESKTOP VIEW (hidden on mobile) --- */}
                <div
                    className='hidden lg:flex flex-row items-center bg-cover bg-center bg-no-repeat'
                    style={{
                        backgroundImage: `url(${More})`,
                    }}
                >
                    <div className='w-1/2'>
                        <img className='w-full h-auto object-cover' src={MoreImg} alt="Happy dog with owner" />
                    </div>
                    <div className='w-1/2 p-12 text-right'>
                        <h1 className='text-5xl font-bold text-[#003459] leading-tight'>One more friend</h1>
                        <h2 className="text-3xl font-semibold text-[#003459] mt-2">Thousands more fun!</h2>
                        <p className="mt-6 max-w-md ml-auto text-base">
                            Having a pet means you have more joy, a new friend, a happy
                            person who will always be with you to have fun. We have 200+
                            different pets that can meet your needs!
                        </p>
                        <div className="mt-8 flex justify-end gap-4">
                            <button className="flex items-center justify-center border-2 border-[#003459] text-[#003459] px-7 py-3 rounded-full font-bold hover:bg-[#FCEED5] transition-colors">
                                View Intro <FaPlayCircle className="ml-3" />
                            </button>
                            <button className="bg-[#003459] text-white px-10 py-3 rounded-full font-bold hover:bg-opacity-90 transition-colors">
                                Explore Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* --- MOBILE VIEW (hidden on desktop) --- */}
                <div className='lg:hidden flex flex-col'>
                    {/* Top section with a cream background for text (height is determined by content) */}
                    <div className='bg-[#FCEED5] flex flex-col items-center justify-center p-8 text-center'>
                        <h1 className='text-4xl font-bold text-[#003459] leading-tight'>One More Friend</h1>
                        <h2 className="text-2xl font-semibold text-[#003459] mt-2">Thousands More Fun!</h2>
                        <p className="mt-4 max-w-xs mx-auto text-sm">
                            Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun.
                        </p>
                        <div className="mt-6 flex flex-col justify-center gap-4 w-full max-w-xs">
                            <button className="flex items-center justify-center border-2 border-[#003459] text-[#003459] px-7 py-3 rounded-full font-bold transition-colors">
                                View Intro <FaPlayCircle className="ml-3" />
                            </button>
                            <button className="bg-[#003459] text-white px-10 py-3 rounded-full font-bold hover:bg-opacity-90 transition-colors">
                                Explore Now
                            </button>
                        </div>
                    </div>

                    {/* Bottom section with a blue background that grows to fill remaining space */}
                    <div className='bg-[#003459] flex-grow'>
                        <img
                            className='h-full w-full object-cover'
                            src={MoreImg}
                            alt="Happy dog with owner"
                        />
                    </div>
                </div>
            </div>
        </div>

        <div className='py-10 px-4 sm:px-8 lg:px-20'>
            {/* --- 1. Header is now ONLY the title --- */}
            <div className="text-center pb-10">
                <p className="font-semibold"> Proud to be part of</p>
                <h2 className="text-2xl font-bold text-[#003459]">Pet Sellers</h2>
            </div>

            {/* --- Infinite Logo Scroller (Unchanged) --- */}
            <div
                className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] group"
            >
                <ul className="flex items-center justify-center animate-[infinite-scroll_35s_linear_infinite] group-hover:[animation-play-state:paused]">
                    {sellerLogos.map((logo, i) => (
                        <li key={`logo-${i}`} className="mx-4 lg:mx-8">
                            <img src={logo} alt={`Seller ${i + 1}`} className="max-w-none h-12 lg:h-16 object-contain" />
                        </li>
                    ))}
                    {sellerLogos.map((logo, i) => (
                        <li key={`logo-duplicate-${i}`} aria-hidden="true" className="mx-4 lg:mx-8">
                            <img src={logo} alt={`Seller ${i + 1}`} className="max-w-none h-12 lg:h-16 object-contain" />
                        </li>
                    ))}
                </ul>
            </div>

            {/* --- Adoption Banner Section (Unchanged) --- */}
            <section className="pt-16">
                <div 
                    className='bg-cover bg-no-repeat rounded-3xl flex flex-col lg:flex-row items-center overflow-hidden bg-top lg:bg-center'
                    style={{ backgroundImage: `url(${Seller})` }}
                >
                    <div className="w-full lg:w-1/2 p-8 sm:p-12 text-center lg:text-left">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#003459] flex items-center justify-center lg:justify-start">
                            Adoption <FaPaw className="ml-4 text-3xl md:text-4xl" />
                        </h2>
                        <h3 className="text-2xl md:text-4xl font-bold text-[#003459] mt-2">We Need Help. So Do They.</h3>
                        <p className="mt-4 text-gray-700 max-w-md mx-auto lg:mx-0">
                            Adopt a pet and give it a home, it will love you back unconditionally.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                            <button className="bg-[#003459] text-white px-10 py-3 rounded-full font-bold hover:bg-opacity-90 transition-colors">
                                Explore Now
                            </button>
                            <button className="flex items-center justify-center border-2 border-[#003459] text-[#003459] px-7 py-3 rounded-full font-bold hover:text-white hover:bg-[#003459] transition-colors">
                                View Intro <FaPlayCircle className="ml-3" />
                            </button>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <img className='w-full h-auto' src={SellersImg} alt="Woman with dog and cat" />
                    </div>
                </div>
            </section>

        </div>
        <Footer/>
    </main>
  )
}

export default About
