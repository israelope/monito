import { FaSearch, FaChevronDown } from 'react-icons/fa';
import Logo from '../assets/icons/Logo.png'
import { Link, Links } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="container mx-auto px-35 py-10 bg-transparent  ">
            <div className="flex justify-between items-center">
                <div>
                    <Link to="/"><img src={Logo} alt="Monito Logo" className="h-10" /></Link>
                </div>
                <nav className="hidden lg:flex items-center space-x-8 text-lg">
                    <Link to='/' className="text-[#003459] font-bold">Home</Link>
                    <Link to='/Category' className="text-[#003459] font-bold">Category</Link>
                    <Link to='/About' className="text-[#003459] font-bold">About</Link>
                    <Link to='/Contact' className="text-[#003459] font-bold">Contact</Link>
                </nav>
                <div className="hidden lg:flex items-center space-x-4">
                    <div className="relative">
                        <input type="text" placeholder="Search something here!" className="bg-white rounded-full py-2.5 pl-10 pr-4 w-72 focus:outline-none border-2 border-gray-200" />
                        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                    <button className="bg-[#003459] text-white px-7 py-2.5 rounded-full font-bold hover:bg-opacity-90 transition-colors">
                        Join the community
                    </button>
                    <div className="flex items-center space-x-2 text-[#003459] font-bold cursor-pointer">
                        <img src={Logo} alt="Vietnam Flag" className="h-6 rounded-full" />
                        <span>VND</span>
                        <FaChevronDown className="w-3 h-3" />
                    </div>
                </div>
                <div className="lg:hidden">
                    <button className="text-3xl text-[#003459]">☰</button>
                </div>
            </div>
        </header>
    )
}

export default Navbar