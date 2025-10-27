import React from 'react'
import { FaPlayCircle } from 'react-icons/fa';
import HeroImg from '../../assets/img/HeroImg.png'
import HeroBg from '../../assets/img/Hero.png'
import Navbar from '../../Components/Navbar'

const Hero = () => {
    return (
        <main
            className='  bg-cover bg-center bg-no-repeat items-center '
            style={{
                backgroundImage: `url(${HeroBg})`,
            }}>
                <Navbar/>
            <div className='relative flex flex-col lg:flex-row h-fit'>
                <div className='px-30 py-15 '>
                    <h1 className='text-6xl font-extrabold text-[#003459] leading-tight'>One more friend</h1>
                    <h2 className="text-5xl font-bold text-[#003459] mt-2">Thousands more fun!</h2>
                    <p className="mt-6  max-w-md mx-auto lg:mx-0 text-lg">
                        Having a pet means you have more joy, a new friend, a happy
                        person who will always be with you to have fun. We have 200+
                        different pets that can meet your needs!
                    </p>
                    <div className="mt-8 flex justify-center lg:justify-start space-x-4">
                        <button className="flex items-center border-2 border-[#003459] text-[#003459] px-7 py-3 rounded-full font-bold hover:bg-[#FCEED5] transition-colors">
                            View Intro <FaPlayCircle className="ml-3" />
                        </button>
                        <button className="bg-[#003459] text-white px-10 py-3 rounded-full font-bold hover:bg-opacity-90 transition-colors">
                            Explore Now
                        </button>
                    </div>
                </div>
                <div className="lg:w-1/2 mt-10 lg:mt-0">
                    <div className="relative">
                        <div className="absolute "></div>
                        <img src={HeroImg} alt="Woman holding a Corgi dog" className="relative z-10 w-full " />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Hero