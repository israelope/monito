import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import Logo from '../assets/icons/Logo.png';

const Footer = () => {
    return (
        <footer className="bg-[#FCEED5] pt-12 sm:pt-20 pb-8">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-8">
                {/* --- CTA BANNER --- */}
                <div className="bg-[#003459] text-white p-6 sm:p-8 rounded-2xl flex flex-col lg:flex-row justify-between items-center gap-6">
                    <h2 className="text-2xl font-bold text-center lg:text-left">
                        Register Now So You Don't Miss <br className="hidden sm:block" />
                        Our Programs
                    </h2>
                    
                    {/* --- THIS IS THE LINE I CHANGED --- */}
                    {/* Replaced flexible width with a fixed width on large screens */}
                    <div className="bg-white p-2 rounded-xl flex flex-col xs:flex-row gap-2 w-full lg:w-[480px] flex-shrink-0">
                        <input
                            type="email"
                            placeholder="Enter your Email"
                            className="w-full p-3 rounded-lg text-gray-800 focus:outline-none"
                        />
                        <button className="bg-[#003459] p-3 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition-colors cursor-pointer text-white flex-shrink-0">
                            Subscribe Now
                        </button>
                    </div>
                </div>

                {/* --- NAVIGATION AND SOCIALS (No changes below) --- */}
                <div className="flex flex-col md:flex-row justify-between items-center py-10 mt-8">
                    <nav className="flex flex-wrap justify-center gap-x-6 sm:gap-x-8 gap-y-4 text-[#00171F] font-semibold order-2 md:order-1 mt-6 md:mt-0">
                        <a href="#" className="hover:underline">Home</a>
                        <a href="#" className="hover:underline">Category</a>
                        <a href="#" className="hover:underline">About</a>
                        <a href="#" className="hover:underline">Contact</a>
                    </nav>
                    
                    <div className="flex space-x-6 text-[#00171F] text-2xl order-1 md:order-2">
                        <a href="#" className="hover:text-[#003459]"><FaFacebookF /></a>
                        <a href="#" className="hover:text-[#003459]"><FaTwitter /></a>
                        <a href="#" className="hover:text-[#003459]"><FaInstagram /></a>
                        <a href="#" className="hover:text-[#003459]"><FaYoutube /></a>
                    </div>
                </div>

                <hr className="border-t-2 border-gray-300" />

                {/* --- COPYRIGHT AND LEGAL LINKS --- */}
                <div className="flex flex-col md:flex-row justify-between items-center py-6 text-center">
                    <p className="text-gray-600 text-sm order-3 md:order-1 mt-4 md:mt-0">&copy; 2025 Monito. All rights reserved.</p>
                    
                    <div className="order-1 md:order-2">
                        <img src={Logo} alt="Monito Logo" className="h-10"/>
                    </div>
                    
                    <div className="flex space-x-4 sm:space-x-6 text-[#00171F] font-semibold order-2 md:order-3 mt-4 md:mt-0">
                        <a href="#" className="hover:underline">Terms of Service</a>
                        <a href="#" className="hover:underline">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;