import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import HeroImg from '../../assets/img/HeroImg.png';
import Navbar from '../../Components/Navbar';

const Hero = () => {
    return (
        <main className='bg-[#FCEED5] overflow-x-hidden'>
            
            {/* --- THIS IS THE LINE I CHANGED --- */}
            {/* Added lg:px-20 for more horizontal padding on large screens */}
            <div className='container mx-auto px-4 sm:px-8 lg:px-20'>
                <div className='flex flex-col lg:flex-row items-center lg:py-12'>
                    
                    {/* --- Text Content Section --- */}
                    <div className='lg:w-5/12 text-center lg:text-left py-12 z-10'>
                        <h1 className='text-5xl lg:text-6xl font-extrabold text-[#003459] leading-tight'>
                            One More Friend
                        </h1>
                        <h2 className="text-3xl lg:text-5xl font-bold text-[#003459] mt-2 flex items-center justify-center lg:justify-start gap-2">
                            Thousands more fun!
                            <span className="w-2 h-2 bg-[#003459] rounded-full hidden lg:block"></span>
                        </h2>
                        <p className="mt-6 max-w-md mx-auto lg:mx-0 text-sm md:text-base">
                            Having a pet means you have more joy, a new friend, a happy
                            person who will always be with you to have fun. We have 200+
                            different pets that can meet your needs!
                        </p>
                        
                        <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                            <button className="flex items-center justify-center border-2 border-[#003459] text-[#003459] px-7 py-3 rounded-full font-bold hover:bg-[#FCEED5] transition-colors">
                                View Intro <FaPlayCircle className="ml-3" />
                            </button>
                            <button className="bg-[#003459] text-white px-10 py-3 rounded-full font-bold hover:bg-opacity-90 transition-colors">
                                Explore Now
                            </button>
                        </div>
                    </div>

                    {/* --- Mobile-Only Image --- */}
                    <div className="relative w-full h-[440px] lg:hidden">
                        <div className="absolute bottom-0 left-0 w-[85%] h-[90%] bg-[#003459] rounded-tr-[80px]"></div>
                        <img 
                            src={HeroImg} 
                            alt="Woman holding a Corgi dog" 
                            className="absolute bottom-0 right-0 h-full w-auto object-cover" 
                        />
                    </div>

                    {/* --- Desktop-Only Layered Image --- */}
                    <div className="hidden lg:flex lg:w-7/12 h-[550px] relative items-center justify-center">
                        <div className="absolute w-[90%] h-[90%] bg-[#FDF3DE] rounded-bl-[80px] bottom-0 right-0"></div>
                        <div className="absolute w-[85%] h-full bg-[#003459] rounded-tl-[80px] rounded-bl-[80px] bottom-0 left-0"></div>
                        <img 
                            src={HeroImg} 
                            alt="Woman holding a Corgi dog" 
                            className="relative z-10 h-full w-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Hero;