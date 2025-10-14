import React from 'react'
import { FaPlayCircle, FaSearch, FaChevronDown, FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPaw, FaGift } from 'react-icons/fa';
import { IoMdArrowDropright } from "react-icons/io";
import HeroImg from '../../assets/img/HeroImg.png'

const Hero = () => {
  return (
    <section className="container mx-auto px-4 pt-8 pb-16">
            <div className="relative flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 text-center lg:text-left z-10">
                    <h1 className="text-6xl font-extrabold text-[#003459] leading-tight">One More Friend</h1>
                    <h2 className="text-5xl font-bold text-[#003459] mt-2">Thousands More Fun!</h2>
                    <p className="mt-6 text-gray-700 max-w-md mx-auto lg:mx-0 text-lg">
                        Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
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
                        <div className="absolute inset-0 bg-[#003459] rounded-l-[120px] rounded-b-[120px] transform -rotate-3 scale-105"></div>
                        <img src={HeroImg} alt="Woman holding a Corgi dog" className="relative z-10 w-full" />
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Hero