
import { FaPlayCircle, FaSearch, FaChevronDown, FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPaw, FaGift } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="bg-[#FCEED5] pt-16">
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
                        <a href="#" className="hover:underline">Home</a>
                        <a href="#" className="hover:underline">Category</a>
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
                    <p className="text-gray-600 text-sm">&copy; 2025 Monito. All rights reserved.</p>
                    <img src="https://i.imgur.com/b2d2yvE.png" alt="Monito Logo" className="h-10 my-4 md:my-0"/>
                    <div className="flex space-x-6 text-[#00171F] font-semibold">
                        <a href="#" className="hover:underline">Terms of Service</a>
                        <a href="#" className="hover:underline">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default Footer