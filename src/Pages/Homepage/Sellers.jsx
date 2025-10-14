import React from 'react'
import Pet1 from '../../assets/img/Pet2.png'
import { FaPlayCircle, FaSearch, FaChevronDown, FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPaw, FaGift } from 'react-icons/fa';
import { IoMdArrowDropright } from "react-icons/io";
import { sellerLogos } from '../../Constants/Index';


const Sellers = () => {
  return (
    <section className="container mx-auto px-4 py-16">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-[#003459]">Pet Sellers</h2>
                <button className="flex items-center border-2 border-[#003459] text-[#003459] px-7 py-3 rounded-full font-bold hover:bg-[#FCEED5] transition-colors">
                    View all our sellers <IoMdArrowDropright className="ml-2 text-xl" />
                </button>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
                {sellerLogos.map((logo, i) => <img key={i} src={logo} alt={`Seller ${i+1}`} className="h-16 object-contain  hover:grayscale-0 transition-all duration-300"/>)}
            </div>
        </section>
  )
}

export default Sellers