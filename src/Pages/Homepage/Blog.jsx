import React from 'react'
import Pet1 from '../../assets/img/Pet2.png'
import { FaPlayCircle, FaSearch, FaChevronDown, FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPaw, FaGift } from 'react-icons/fa';
import { IoMdArrowDropright } from "react-icons/io";
import { knowledgeData } from '../../Constants/Index';


const KnowledgeCard = ({ article }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
        <img src={article.image} alt={article.title} className="w-full h-48 object-cover"/>
        <div className="p-4">
            <span className="bg-[#00A7E7] text-white px-3 py-1 text-xs font-bold rounded-full">Pet knowledge</span>
            <h3 className="font-bold text-[#00171F] mt-3 text-lg">{article.title}</h3>
            <p className="text-gray-600 text-sm mt-2 line-clamp-3">{article.desc}</p>
        </div>
    </div>
);


const Blog = () => {
  return (
         <section className="bg-[#FDFDFD] py-16">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <p className="text-gray-600">You already know?</p>
                        <h2 className="text-3xl font-bold text-[#003459]">Useful Pet Knowledge</h2>
                    </div>
                    <button className="flex items-center border-2 border-[#003459] text-[#003459] px-7 py-3 rounded-full font-bold hover:bg-[#FCEED5] transition-colors">
                        View more <IoMdArrowDropright className="ml-2 text-xl" />
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {knowledgeData.map((article, i) => <KnowledgeCard key={i} article={article} />)}
                </div>
            </div>
        </section>
  )
}

export default Blog