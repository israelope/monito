import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import Cate from '../../assets/img/Cate.png';
import CateImg from '../../assets/img/CateImg.png';

const Hero = () => {
  return (
    // Responsive padding for the main container
    <div className='px-4 sm:px-8 lg:px-20 py-10'>
      {/* --- DESKTOP HERO (Visible on lg screens and up) --- */}
      <div 
  className='hidden lg:flex relative overflow-hidden rounded-3xl justify-between items-center h-[360px]'
  style={{ background: 'linear-gradient(to right, #003459 55%, #FCEED5 55%)' }}
>
        <div className='w-1/2 p-12 text-left z-10'>
          <h1 className='text-5xl font-bold text-white leading-tight'>One more friend</h1>
          <h2 className="text-3xl font-semibold text-white mt-2">Thousands more fun!</h2>
          <p className="mt-4 max-w-md text-sm text-white">
            Having a pet means you have more joy, a new friend, a happy
            person who will always be with you to have fun.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="flex items-center border-2 border-white text-white px-7 py-3 rounded-full font-semibold hover:bg-white hover:text-[#003459] transition-colors">
              View Intro <FaPlayCircle className="ml-3" />
            </button>
            <button className="bg-white text-[#003459] px-10 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
              Explore Now
            </button>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 w-1/2 h-full">
          <img 
            src={CateImg} 
            alt="A group of dogs" 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[110%]"
          />
        </div>
      </div>

      {/* --- MOBILE HERO (Hidden on lg screens and up) --- */}
      <div 
  className='lg:hidden bg-[#FCEED5] ...' // Use a Tailwind background color class
>
        <div className='p-8 text-center z-10'>
          <h1 className='text-5xl font-bold text-[#003459] leading-tight'>One More Friend</h1>
          <h2 className="text-3xl font-bold text-[#003459] mt-2 flex items-center justify-center gap-2">
            Thousands More Fun!
            <span className="w-2.5 h-2.5 bg-[#003459] rounded-full"></span>
          </h2>
          <p className="mt-4 max-w-md mx-auto text-sm text-gray-800">
            Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <button className="flex items-center justify-center border-2 border-[#003459] text-[#003459] px-7 py-3 rounded-full font-bold hover:bg-blue-100 transition-colors">
              View Intro <FaPlayCircle className="ml-3" />
            </button>
            <button className="bg-[#003459] text-white px-10 py-3 rounded-full font-bold hover:bg-opacity-90 transition-colors">
              Explore Now
            </button>
          </div>
        </div>
        <div className="relative h-60"> 
          <img 
            className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl' 
            src={CateImg} 
            alt="A group of dogs" 
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;