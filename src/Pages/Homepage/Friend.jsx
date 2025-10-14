import React from 'react'
import { FaPlayCircle, FaSearch, FaChevronDown, FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPaw, FaGift } from 'react-icons/fa';
import { IoMdArrowDropright } from "react-icons/io";

const Friend = () => {
  return (
    <section className="container mx-auto px-4 py-16">
            <div className="bg-[#FCEED5] rounded-3xl p-8 flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 relative">
                    <img src="https://i.imgur.com/w9O6sQY.png" alt="Woman holding up a puppy" className="w-full rounded-2xl"/>
                </div>
                <div className="lg:w-1/2 lg:pl-12 text-center lg:text-left mt-8 lg:mt-0">
                     <h2 className="text-5xl font-extrabold text-[#003459] flex items-center justify-center lg:justify-start">
                        Adoption <FaPaw className="ml-4 text-4xl"/>
                    </h2>
                    <h3 className="text-4xl font-bold text-[#003459] mt-2">We Need Help. So Do They.</h3>
                    <p className="mt-4 text-gray-700 max-w-md mx-auto lg:mx-0">
                        Adopt a pet and give it a home, it will be love you back unconditionally.
                    </p>
                    <div className="mt-8 flex justify-center lg:justify-start space-x-4">
                        <button className="bg-[#003459] text-white px-10 py-3 rounded-full font-bold hover:bg-opacity-90 transition-colors">
                            Explore Now
                        </button>
                        <button className="flex items-center border-2 border-[#003459] text-[#003459] px-7 py-3 rounded-full font-bold hover:bg-opacity-90 hover:text-white hover:bg-[#003459] transition-colors">
                            View Intro <FaPlayCircle className="ml-3" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Friend